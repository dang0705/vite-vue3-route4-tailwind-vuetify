import innerTabs from '@topics/routes/inner-tabs';
import { base } from '@topics/configs/get-router-base';
import initRouter from '@common-routes';
import beforeEach from '@topics-routes/middlewares/before-each';
import afterEach from '@topics-routes/middlewares/after-each';
const children = innerTabs[topicName];

const routes = ({ indexRedirect = null } = {}) => [
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: () => import('@topics-views/home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/index/:type',
    name: 'index',
    redirect: indexRedirect ? indexRedirect() : { name: 'topic-info' },
    component: () => import('@topics-views/index/index'),
    children
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
