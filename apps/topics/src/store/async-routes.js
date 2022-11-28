const mokAsyncRoutes = [
  {
    path: 'test',
    name: '测试'
  },
  {
    path: 'test1',
    name: '测试1'
  },
  {
    path: 'test2',
    name: '测试2'
  }
];
export const useAsyncRoutesStore = defineStore('async-routes', {
  state: () => ({
    routes: []
  }),
  actions: {
    async getRoutes(params) {
      console.log(params);
      await $http.get('/20th/topic/rank/index');
      this.routes = mokAsyncRoutes;
    }
  }
});
