import addRoutes from '@topics-routes/add-routes';
import { useIsPreviewStore } from '@topics-store/is-preview';
let hasAsyncRouteBeenAdded = false; // whether the async routes has been loaded, this is very important
export default async function () {
  const $asyncRoutes = useAsyncRoutesStore();
  const $previewStore = useIsPreviewStore();
  const { routes, currentRoutes, indexType } = storeToRefs($asyncRoutes);
  const { isPreview } = storeToRefs($previewStore);

  const [router, to, from, next] = arguments;
  const { path, name, params, fullPath, matched } = to;

  isPreview.value === null &&
    (isPreview.value = isDev
      ? self !== top || /^preview/.test(name) || /preview/.test(fullPath)
      : self !== top);

  const { default: formattedRoute } = await import(
    '@topics/utils/formatted-route'
  );
  const isEnterIndexRoute =
    matched?.[0]?.name === formattedRoute('index') ||
    fullPath.includes(formattedRoute('index'));

  // 返回首页时可切换分类路由
  name === formattedRoute('home') && (hasAsyncRouteBeenAdded = false);

  const type = params.type || fullPath.split('/')[2];
  indexType.value = type;

  if (isEnterIndexRoute && !currentRoutes?.value) {
    // 处理动态路由加载和触发逻辑
    await $asyncRoutes.getIndexRoutes(type);
    if (!hasAsyncRouteBeenAdded) {
      addRoutes({
        routes: currentRoutes?.value,
        router,
        root: formattedRoute('index')
      });
      hasAsyncRouteBeenAdded = true;
      // 官方文档推荐的手动触发路由方式
      return fullPath;
    } else {
      next();
    }
  } else {
    // 常规的业务逻辑处理
    if (isPreview.value) {
      const { default: subscribeParentEvent } = await import('@topics/preview');
      subscribeParentEvent();
    }
    if (matched?.[0]?.name === formattedRoute('index')) {
      name !== formattedRoute('index') &&
        (await $asyncRoutes.getAsyncRouteData(name));
      next();
    } else {
      next();
    }
  }
}
