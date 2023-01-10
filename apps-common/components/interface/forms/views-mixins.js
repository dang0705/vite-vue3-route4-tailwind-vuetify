export default () => {
  const { matched } = useRoute();
  let formData = ref({});

  const props = {
    formControls: {
      type: Array,
      default: () => []
    }
  };
  const breadcrumbs = matched.map(
    ({ meta: { title: text } = {}, name: href }) => ({
      text,
      href
    })
  );
  return {
    props,
    formData,
    breadcrumbs
  };
};
