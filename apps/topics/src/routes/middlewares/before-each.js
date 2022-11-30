import addRoutes from '@topics-routes/add-routes';
let hasAsyncRouteBeenAdded = false; // whether the async routes has been loaded, this is very important
export default async function () {
  const [router, to, from, next] = arguments;
  const { path, name, params, fullPath } = to;
  const $asyncRoutes = useAsyncRoutesStore();
  const { routes } = storeToRefs($asyncRoutes);
  const isFromIndex = from.matched?.[0]?.name === 'index';
  console.log(from);
  !routes.value.length && (await $asyncRoutes.getIndexRoutes(params));

  // 动态路由的创建和手动触发重定向
  if (!hasAsyncRouteBeenAdded && $asyncRoutes.routes.length) {
    addRoutes({ routes: routes.value, router });
    hasAsyncRouteBeenAdded = true;
    // 官方文档推荐的手动触发路由方式
    return fullPath;
  } else {
    // 常规的业务逻辑处理
    useTopicNameStore().setEventName(topicName);
    next();
  }
}
