export const UiInput = async () => {
  const { default: UiInput } = await import(
    '@common-form-interface/ui-input.vue'
  );
  return UiInput;
};
