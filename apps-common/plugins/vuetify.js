import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import deepmerge from "deepmerge";
import vuetifyPreset from "@common-config/vuetify-preset";
import { createVuetify } from "vuetify";

export default (options = {}) =>
  createVuetify(deepmerge(vuetifyPreset, options));
