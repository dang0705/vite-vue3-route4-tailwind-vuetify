const formatRoutes = ({ routes = [], project = '' } = {}) => {
  routes.forEach((route) => {
    route.name = `${route.name}.${project}`;
    route.children?.length && formatRoutes({ routes: route.children, project });
  });
  return routes;
};
export default formatRoutes;
