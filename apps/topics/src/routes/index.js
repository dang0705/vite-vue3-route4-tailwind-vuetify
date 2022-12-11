import { base } from '@topics/configs/get-router-base';
import initRouter from '@common-routes';
import beforeEach from '@topics-routes/middlewares/before-each';
import afterEach from '@topics-routes/middlewares/after-each';
import previewListener from '@topics-routes/middlewares/preview-listener';
const customHomePages = import.meta.glob('/src/custom-extends/**/home.vue');

const homeRoute = {
  component:
    customHomePages[`/src/custom-extends/${topicName}/views/home.vue`] ||
    (() => import('@topics/static-views/home.vue')),
  meta: {
    title: '首页'
  },
  children: []
};
const indexRoute = {
  props: ({ params: { type } }) => ({
    type
  }),
  component: () => import('@topics/static-views/index/index.vue'),
  children: []
};
const routes = [
  {
    path: '/home',
    name: 'home',
    alias: '/',
    ...homeRoute
  },
  {
    path: '/preview-home',
    name: 'preview-home',
    ...homeRoute
  },
  {
    path: '/index/:type',
    name: 'index',
    ...indexRoute
  },
  {
    path: '/preview-index/:type',
    name: 'preview-index',
    beforeEnter: previewListener,
    ...indexRoute
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@common/views/not-found.vue')
  }
];

const Router = initRouter({
  mode: 'history',
  base,
  routes,
  beforeEach,
  afterEach
});

export default Router;
