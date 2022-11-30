const mockAsyncRoutes = {
  0: [
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
  ],
  1: [
    {
      path: 'test',
      name: '测试'
    },
    {
      path: 'test1',
      name: '测试1'
    }
  ]
};
export const useAsyncRoutesStore = defineStore('async-routes', {
  state: () => ({
    routes: {}
  }),
  actions: {
    async getIndexRoutes(type) {
      if (!this.routes[type]?.length) {
        await $http.get('/20th/topic/rank/index', { params: { type } });
        this.routes[type] = mockAsyncRoutes[type];
      }
    }
  }
});
