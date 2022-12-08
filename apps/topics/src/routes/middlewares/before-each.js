import addRoutes from '@topics-routes/add-routes';
import { useIsPreviewStore } from '@topics-store/is-preview';
let hasAsyncRouteBeenAdded = false; // whether the async routes has been loaded, this is very important
export default async function () {
  const [router, to, from, next] = arguments;
  const { path, name, params, fullPath, matched } = to;
  const $asyncRoutes = useAsyncRoutesStore();
  const { routes } = storeToRefs($asyncRoutes);
  const $previewStore = useIsPreviewStore();
  $previewStore.isPreview === null &&
    ($previewStore.isPreview =
      self !== top || /^preview/.test(name) || /preview/.test(fullPath));

  const { default: formattedRoute } = await import(
    '@topics/utils/formatted-route'
  );
  const isEnterIndexRoute =
    matched?.[0]?.name === formattedRoute('index') ||
    fullPath.includes(formattedRoute('index'));

  // 返回首页时可切换分类路由
  name === formattedRoute('home') && (hasAsyncRouteBeenAdded = false);

  const type = params.type || fullPath.split('/')[2];
  if (isEnterIndexRoute && !routes.value[type]?.length) {
    // 处理动态路由加载和触发逻辑
    await $asyncRoutes.getIndexRoutes(type);
    if (!hasAsyncRouteBeenAdded && routes.value[type]?.length) {
      addRoutes({
        routes: routes.value[type],
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

    if ($previewStore.isPreview) {
      const { default: listenPreview } = await import('@topics/preview');
      listenPreview();
    }
    if (matched?.[0]?.name === formattedRoute('index')) {
      name !== formattedRoute('index') && $asyncRoutes.getAsyncRouteData(name);
      next();
    } else {
      next();
    }
  }
}
