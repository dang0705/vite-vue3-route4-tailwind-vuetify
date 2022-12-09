import { pl, zhHans } from 'vuetify/locale';
import thresholds from './breakpoint';
const FormControls = [
  'VAutoComplete',
  'VCarousel',
  'VCombobox',
  'VCheckbox',
  'VFileInput',
  'VPagination',
  'VRadio',
  'VRangSlide',
  'VRating',
  'VSelect',
  'VSnackbar',
  'VSwitch',
  'VTextField',
  'VTextArea'
];
const controlsGlobalConfigurations = {};
FormControls.map(
  (comp) =>
    (controlsGlobalConfigurations[comp] = {
      color: 'primary',
      variant: 'underlined'
    })
);

export default {
  defaults: {
    ...controlsGlobalConfigurations
  },
  display: {
    thresholds,
    mobileBreakpoint: 'sm'
  },
  locale: {
    locale: 'zhHans',
    fallback: 'sv',
    messages: { zhHans, pl }
  }
};
