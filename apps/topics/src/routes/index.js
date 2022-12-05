import innerTabs from '@topics/routes/inner-tabs';
import { base } from '@topics/configs/get-router-base';
import initRouter from '@common-routes';
import beforeEach from '@topics-routes/middlewares/before-each';
import afterEach from '@topics-routes/middlewares/after-each';
import redirect from '@topics-routes/redirect';

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
    props: ({ params: { type } }) => ({
      type
    }),
    /*    redirect: indexRedirect
      ? indexRedirect()
      : ({ params }) => ({ name: redirect[topicName], params }),*/
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
