export default (target, route = useRoute()) =>
  /^preview/.test(route.name) ? `preview-${target}` : target;
