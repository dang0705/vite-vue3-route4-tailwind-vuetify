import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
// store
import { createPinia } from 'pinia';

// ui
import vuetify from '@common-plugins/vuetify';

// router's configs

// form control components
import controls from '@common-form-controls';
controls.forEach(({ name, component }) =>
  app.component(name, defineAsyncComponent(component))
);

// form interface components
import formInterface from '@common-form-interface';
formInterface.forEach(({ name, component }) =>
  app.component(name, defineAsyncComponent(component))
);

import '@topic-front-stage/styles/scss/vendors/_index.scss';
import '@topic-front-stage/styles/index.css';
import images from '@common-plugins/auto-pre-parsing-images';
// import themes from '@topic-front-stage-configs/vuetify-theme';

app
  // .use(images)
  .use(createPinia())
  .use(
    vuetify({
      // theme: { defaultTheme: 'topicThemes', themes: { topicThemes: themes } }
    })
  )
  .mount('#app');
