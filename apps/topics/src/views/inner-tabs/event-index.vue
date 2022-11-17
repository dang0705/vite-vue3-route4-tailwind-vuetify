<template>
  <div>
    <ui-tabs :routes="routes" />
    <router-view />
  </div>
</template>

<script setup>
import uiTabs from "@topics-components/front-stage/ui-tabs.vue";
const $router = useRouter();
let routes = ref([]);
const initAsyncRoutes = async () => {
  await $http.get("/20th/topic/rank/index");

  const test = {
    path: "test",
    name: "test",
    meta: { title: "测试" },
    component: () => import("@topics-views/test"),
  };
  routes.value.push(test);
  $router.addRoute("index", test);
};

onMounted(() => {
  window.onbeforeunload = (e) => {
    $router.push({ name: "test" });
  };
  initAsyncRoutes();
});
</script>
