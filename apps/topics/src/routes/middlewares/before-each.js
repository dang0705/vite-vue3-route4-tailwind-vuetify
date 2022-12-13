import addRoutes from '@topics-routes/add-routes';
import formattedRoute from '@topics/utils/formatted-route';
import { useIsPreviewStore } from '@topics-store/is-preview';

let hasAsyncRouteBeenAdded = false; // 异步动态路由是否已加载标志，防止无限挂载
export default async function () {
  const [router, to, from, next] = arguments;
  const { name, params, fullPath, matched } = to;

  const $asyncRoutes = useAsyncRoutesStore();
  const $previewStore = useIsPreviewStore();
  const { currentRoutes, indexType } = storeToRefs($asyncRoutes);
  const { isPreview } = storeToRefs($previewStore);

  isPreview.value === null &&
    (isPreview.value = isDev
      ? self !== top || /^preview/.test(name) || /preview/.test(fullPath)
      : self !== top);

  const isEnterIndexRoute =
    matched?.[0]?.name === formattedRoute('index') ||
    fullPath.includes(formattedRoute('index'));

  // 返回首页时重置挂载异步路由状态
  name === formattedRoute('home') && (hasAsyncRouteBeenAdded = false);

  const type = params.type || fullPath.split('/')[2];
  indexType.value = type;

  // 处理动态路由加载和触发逻辑
  if (isEnterIndexRoute) {
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
      if (name !== formattedRoute('index')) {
        await $previewStore.updatePreviewData(name);
        next();
      } else {
        next();
      }
    }
  } else {
    // 常规的业务逻辑处理

    next();
  }
}
