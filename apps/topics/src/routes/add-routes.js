import { useDeviceStore } from "@topics-store/device";
import c2k from "@common-utils/camelCase-2-kebab-case";
const allViews = import.meta.glob("/src/views/**/**.vue");

export default ({ routes = [], root = "index", router }) =>
  routes.forEach(({ name, path, icon = "" }) => {
    if (!router.hasRoute(path)) {
      const route = {
        path: root === "index" ? `topic-${path}` : path,
        name: root === "index" ? `topic-${path}` : path,
        meta: {
          title: name,
          icon: useDeviceStore().device === "PC" ? "" : icon,
        },
        component: allViews[`/src/views/index/${topicName}/${c2k(path)}.vue`],
      };
      router.addRoute(root, route);
      router.options.routes
        .find(({ name }) => name === root)
        .children.push(route);
    }
  });
