import { useDeviceStore } from '@topics-store/device';
import c2k from '@common-utils/camelCase-2-kebab-case';
import tabs from '@topics-routes/inner-tabs';

const allViews = import.meta.glob('/src/views/**/**.vue');

const basicRoute = tabs[topicName];

export default ({ routes = [], root = 'index', router }) => {
  const { routes: routers } = router.options;
  const currentRoot = routers.find(({ name }) => name === root);
  // 每次切换动态路由前，清空原始路由，并赋予基本的静态路由。
  currentRoot.children = [...basicRoute];

  routes.forEach(({ name, path, icon = '' }) => {
    router.removeRoute(`topic-${path}`);
    if (!router.hasRoute(`topic-${path}`)) {
      const route = {
        path: root === 'index' ? `topic-${path}` : path,
        name: root === 'index' ? `topic-${path}` : path,
        meta: {
          title: name,
          icon: useDeviceStore().device === 'PC' ? '' : icon
        },
        component: allViews[`/src/views/index/${topicName}/${c2k(path)}.vue`]
      };
      router.addRoute(root, route);
      currentRoot.children.push(route);
    }
  });
};
