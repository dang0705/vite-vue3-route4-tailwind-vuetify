export const useAsyncRoutesStore = defineStore('async-routes', {
  state: () => ({
    routes: {},
    indexStyles: {},
    indexComponents: [],
    indexType: '0'
  }),
  getters: {
    currentRoutes: ({ routes, indexType }) => routes[indexType],
    currentIndexStyle: ({ indexStyles, indexType }) => indexStyles[indexType]
  },
  actions: {
    async getIndexRoutes(type) {
      if (!this.currentRoutes?.length) {
        try {
          const { default: api } = await import(
            '@topics/apis/get-index-style-and-routes'
          );
          const { pages, style } = await $http.get(api, {
            params: { type: this.indexType }
          });
          this.routes[type] = pages;
          this.indexStyles[type] = style;
        } catch (e) {
          console.log(e);
        }
      }
    },
    async getIndexRouteConfiguration(type, path) {
      const { default: indexData } = await import(
        '@topics/apis/async-routes-get-configurations'
      );
      this.indexComponents = await $http.get(indexData, {
        params: { type, path }
      });
    }
  }
});
