import c2k from '@common-utils/camelCase-2-kebab-case';
const allViews = import.meta.glob('/src/views/**/**.vue');

export default ({ routes = [], root = 'index', router }) => {
  const { routes: routers } = router.options;
  const currentRoot = routers.find(({ name }) => name === root);
  if (!currentRoot) return;
  // 每次切换动态路由前，清空原始路由，并赋予基本的静态路由。
  currentRoot.children = [];

  routes.forEach(({ name, path, icon = '', meta = {} }) => {
    router.hasRoute(path) && router.removeRoute(path);
    if (!router.hasRoute(path)) {
      const routeBasic = root.includes('preview') ? `preview-${path}` : path;
      const route = {
        path: routeBasic,
        name: routeBasic,
        meta: {
          title: name,
          icon: useDeviceStore().device === 'PC' ? '' : icon,
          ...meta
        },
        component: allViews[`/src/views/index/${topicName}/${c2k(path)}.vue`]
      };
      router.addRoute(root, route);
      currentRoot.children.push(route);
    }
  });
};
