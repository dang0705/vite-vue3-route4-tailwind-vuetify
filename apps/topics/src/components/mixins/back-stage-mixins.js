import dataType from '@common-utils/data-type';

export default {
  props: {
    value: { type: [String, Array, Object], default: '' }
  },
  data: () => ({ slots: [] }),
  created() {
    if (dataType(this.value) === 'String') {
      const { slots } = templateCompiler(this.value);
      this.slots = slots;
    }
  }
};
