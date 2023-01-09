import c2k from '@common-utils/camelCase-2-kebab-case';
import customExtendsSfc from '@topic-front-stage-configs/custom-extends-sfc';

export default ({ routes = [], root = 'index', router }) => {
  const { routes: routers } = router.options;
  const currentRoot = routers.find(({ name }) => name === root);
  if (!currentRoot) return;
  // 每次切换动态路由前，清空原始路由，并赋予基本的静态路由。
  currentRoot.children = [];
  routes.forEach(({ name, path, icon = '', meta = {} }) => {
    router.hasRoute(path) && router.removeRoute(path);
    if (!router.hasRoute(path)) {
      const route = {
        path: `${root ? '' : '/'}${path}`,
        name: path,
        meta: {
          title: name,
          icon,
          ...meta
        },
        component:
          customExtendsSfc[
            `/src/custom-extends/${topicName}/views/${root}/${c2k(path)}.vue`
          ] ||
          (() =>
            import(
              '@topic-front-stage/static-views/index/index-children-static.vue'
            ))
      };
      router.addRoute(root, route);
      currentRoot.children.push(route);
    }
  });
};
