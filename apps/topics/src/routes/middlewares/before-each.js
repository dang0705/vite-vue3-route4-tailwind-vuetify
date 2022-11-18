import addRoutes from "@topics-routes/add-routes";
const hasAsyncRouteBeenAdded = ref(true); // whether the async routes has been loaded, this is very important
export default async function () {
  const [router, to, from, next] = arguments;
  const { path } = to;
  useTopicNameStore().setEventName(topicName);

  const $asyncRoutes = useAsyncRoutesStore();
  const { getRoutes, routes } = $asyncRoutes;
  !routes.length && (await getRoutes());
  if (hasAsyncRouteBeenAdded.value && $asyncRoutes.routes.length) {
    addRoutes({ routes: $asyncRoutes.routes, router });
    hasAsyncRouteBeenAdded.value = false;
    next({ path });
  } else {
    next();
  }
}
