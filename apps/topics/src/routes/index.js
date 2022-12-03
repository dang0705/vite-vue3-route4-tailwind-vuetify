import innerTabs from '@topics/routes/inner-tabs';
import { base } from '@topics/configs/get-router-base';
import initRouter from '@common-routes';
import beforeEach from '@topics-routes/middlewares/before-each';
import afterEach from '@topics-routes/middlewares/after-each';
import redirect from '@topics-routes/redirect';

const children = innerTabs[topicName];

const homeRoute = {
  component: () => import('@topics-views/home.vue'),
  meta: {
    title: '首页'
  }
};
const indexRoute = {
  props: ({ params: { type } }) => ({
    type
  }),
  component: () => import('@topics-views/index/index.vue'),
  children: []
};
const routes = ({ indexRedirect = null } = {}) => [
  {
    path: '/home',
    alias: '/',
    name: 'home',
    ...homeRoute
  },
  {
    path: '/index/:type',
    name: 'index',
    ...indexRoute
  },
  {
    path: '/preview-home',
    name: 'preview-home',
    ...homeRoute
  },
  {
    path: '/preview-index/:type',
    name: 'preview-index',
    ...indexRoute
  }
];

const Router = initRouter({
  mode: 'history',
  base,
  routes: routes(),
  beforeEach,
  afterEach
});

export default Router;
