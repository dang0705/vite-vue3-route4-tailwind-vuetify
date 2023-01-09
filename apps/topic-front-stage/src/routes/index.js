import { base } from '@topic-front-stage/configs/get-router-base';
import initRouter from '@common-routes';
import beforeEach from '@topic-front-stage-routes/middlewares/before-each';
import afterEach from '@topic-front-stage-routes/middlewares/after-each';
const customHomePages = import.meta.glob('/src/custom-extends/**/home.vue');

const homeRoute = {
  component:
    customHomePages[`/src/custom-extends/${topicName}/views/home.vue`] ||
    (() => import('@topic-front-stage/static-views/home.vue')),
  meta: {
    title: '首页'
  },
  children: []
};
const indexRoute = {
  props: ({ params: { type } }) => ({
    type
  }),
  component: () => import('@topic-front-stage/static-views/index/index.vue'),
  children: []
};
const routes = [
  {
    path: '/',
    name: 'home',
    ...homeRoute
  },
  {
    path: '/index/:type',
    name: 'index',
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
