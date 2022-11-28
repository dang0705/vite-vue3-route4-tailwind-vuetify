export const UiInputProps = {
  appendIcon: {
    type: String,
    default: ''
  },
  prependIcon: {
    type: String,
    default: ''
  },
  dense: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  hideDetails: {
    type: [Boolean, String],
    default: 'auto'
  },
  helper: {
    type: [String, Array],
    default: ''
  }
};
