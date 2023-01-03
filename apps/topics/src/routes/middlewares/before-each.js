import addRoutes from '@topics-routes/add-routes';
import switchWhetherIsPreview from '@topics-configs/switch-whether-is-preview';

let hasAsyncRouteBeenAdded = false; // 异步动态路由是否已加载标志，防止无限挂载
export default async function () {
  const [router, to, from, next] = arguments;
  const { name, params, fullPath, matched } = to;

  const $asyncRoutes = useAsyncRoutesStore();
  const { currentRoutes, indexType } = storeToRefs($asyncRoutes);

  const isEnterIndexRoute =
    matched?.[0]?.name === 'index' || fullPath.includes('index');

  // 返回首页时重置挂载异步路由状态
  name === 'home' && (hasAsyncRouteBeenAdded = false);

  const type = params.type || fullPath.split('/')[2];
  indexType.value = type;

  // 处理动态路由加载和触发逻辑
  if (isEnterIndexRoute) {
    await $asyncRoutes.getIndexRoutes(type);
    if (!hasAsyncRouteBeenAdded) {
      addRoutes({
        routes: currentRoutes?.value,
        router,
        root: 'index'
      });
      hasAsyncRouteBeenAdded = true;
      // 官方文档推荐的手动触发路由方式
      return fullPath;
    } else {
      // 内页动态路由数据获取
      if (name !== 'index') {
        await $asyncRoutes.getIndexRouteConfiguration(type, name);
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
