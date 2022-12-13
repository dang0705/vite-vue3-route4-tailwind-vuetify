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
import getHomeComponents from '@topics-apis/get-home-components';
export const useAsyncRoutesStore = defineStore('async-routes', {
  state: () => ({
    routes: {},
    indexType: '0'
  }),
  getters: {
    currentRoutes: ({ routes, indexType }) => routes[indexType]
  },
  actions: {
    async getIndexRoutes(type) {
      if (!this.currentRoutes?.length) {
        try {
          await $http.get(
            new URL('../../mock/data.json', import.meta.url).href,
            { mock: true }
            // { params: { type } }
          );
          this.routes[type] = mockAsyncRoutes[type];
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});
