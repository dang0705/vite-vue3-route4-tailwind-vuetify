export const useAsyncRoutesStore = defineStore("async-routes", {
  state: () => ({
    routes: [],
  }),
  actions: {
    addRoute(routes) {
      this.routes.push(routes);
    },
  },
});
