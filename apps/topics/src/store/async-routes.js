const mockAsyncRoutes = {
  0: [
    {
      path: 'test',
      name: '作品列表'
    },
    { path: 'info', name: '活动介绍' },

    {
      path: 'test1',
      name: '活动报名'
    },
    {
      path: 'test2',
      name: '测试2'
    }
  ],
  1: [
    { path: 'info', name: '活动介绍' },
    {
      path: 'test',
      name: '活动申报'
    },
    {
      path: 'test1',
      name: '视频申报'
    }
  ]
};
export const useAsyncRoutesStore = defineStore('async-routes', {
  state: () => ({
    routes: {}
  }),
  actions: {
    getIndexRoutes(type) {
      if (!this.routes[type]?.length) {
        // await $http.get('/20th/topic/rank/index', { params: { type } });
        this.routes[type] = mockAsyncRoutes[type];
      }
    }
  }
});
