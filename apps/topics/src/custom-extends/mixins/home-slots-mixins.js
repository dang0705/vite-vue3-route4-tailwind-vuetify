export default {
  props: {
    slots: {
      type: Array,
      default: () => []
    },
    slotName: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    style: {
      type: Object,
      default: () => ({})
    }
  }
};
