import addRoutes from '@topics-routes/add-routes';
let hasAsyncRouteBeenAdded = true; // whether the async routes has been loaded, this is very important
export default async function () {
  const [router, to, from, next] = arguments;
  const { path, name, params } = to;
  const $asyncRoutes = useAsyncRoutesStore();
  const { getRoutes, routes } = $asyncRoutes;
  !routes.length && (await getRoutes(params));

  if (hasAsyncRouteBeenAdded && $asyncRoutes.routes.length) {
    hasAsyncRouteBeenAdded = false;
    addRoutes({ routes: $asyncRoutes.routes, router });
    next({ path, replace: true });
  } else {
    useTopicNameStore().setEventName(topicName);
    next();
  }
}
