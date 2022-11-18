import { useAsyncRoutesStore } from "@topics-store/async-routes";
export default async (router) => {
  await $http.get("/20th/topic/rank/index");

  router.addRoute({
    path: "/test",
    name: "test",
    component: () => import("@topics-views/inner-tabs/twenty-years/test"),
  });
};
