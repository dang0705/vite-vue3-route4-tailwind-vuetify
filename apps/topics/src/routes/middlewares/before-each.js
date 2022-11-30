import addRoutes from '@topics-routes/add-routes';
let hasAsyncRouteBeenAdded = false; // whether the async routes has been loaded, this is very important
export default async function () {
  const [router, to, from, next] = arguments;
  const { path, name, params, fullPath, matched } = to;
  const $asyncRoutes = useAsyncRoutesStore();
  const { routes } = storeToRefs($asyncRoutes);
  const isEnterIndexRoute =
    matched?.[0]?.name === 'index' ||
    (fullPath.split('/')[1] === 'index' && name === undefined);

  // 返回首页时可切换分类路由
  to.name === 'home' && (hasAsyncRouteBeenAdded = false);

  if (isEnterIndexRoute) {
    const type = params.type || fullPath.split('/')[2];
    await $asyncRoutes.getIndexRoutes(type);
    // 动态路由的创建和手动触发重定向
    if (!hasAsyncRouteBeenAdded && routes.value[type].length) {
      addRoutes({ routes: routes.value[type], router });
      hasAsyncRouteBeenAdded = true;
      // 官方文档推荐的手动触发路由方式
      return fullPath;
    } else {
      next();
    }
  } else {
    // 常规的业务逻辑处理
    next();
  }
}
