import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
export default function ({
  mode = 'history',
  base = '',
  routes = [],
  beforeEach = null,
  afterEach = null,
  notFound = () => import('@common/views/not-found.vue')
} = {}) {
  const router = createRouter({
    history:
      mode === 'history' ? createWebHistory(base) : createWebHashHistory(base),
    routes
  });
  beforeEach && router.beforeEach(beforeEach.bind(arguments, router));
  afterEach && router.afterEach(afterEach.bind(arguments, router));
  window.$router = router;
  return router;
}
