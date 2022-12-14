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
    indexStyles: {},
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
    }
  }
});
