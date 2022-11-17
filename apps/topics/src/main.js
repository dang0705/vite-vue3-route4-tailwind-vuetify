import { createApp } from "vue";
import App from "./App.vue";
import "@topics/styles/index.css";
const app = createApp(App);

// store
import { createPinia } from "pinia";

// ui
import vuetify from "@common-plugins/vuetify";

// router's configs
import router from "@topics-routes";

// back-stage components
import components from "@topics-components";
components.forEach(({ name, component }) =>
  app.component(name, defineAsyncComponent(component))
);

import images from "@common-plugins/auto-pre-parsing-images";

app.use(router).use(images).use(createPinia()).use(vuetify({})).mount("#app");
