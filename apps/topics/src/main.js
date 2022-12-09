import { createApp } from 'vue';
import App from './App.vue';
import isIe from 'is-iexplorer';
const app = createApp(App);
// store
import { createPinia } from 'pinia';

// ui
import vuetify from '@common-plugins/vuetify';

// router's configs
import router from '@topics-routes';

// back-stage components
import components from '@topics-components';
components.forEach(({ name, component }) =>
  app.component(name, defineAsyncComponent(component))
);

// back-stage slots
import slots from '@topics/slots';
slots.forEach(({ name, component }) =>
  app.component(name, defineAsyncComponent(component))
);

import '@topics/styles/scss/vendors/_index.scss';
import '@topics/styles/index.css';
import images from '@common-plugins/auto-pre-parsing-images';
import themes from '@topics-configs/vuetify-theme';

if (!topicName) {
  document.getElementById('app').innerHTML =
    '<h3 class="tw-flex tw-p-4 tw-justify-center tw-items-center tw-w-full tw-h-full tw-indent-10">' +
    '无法正确识别专题，请检查本次链接是否带上了专题ID，链接格式为：www.XXX.com/topic/12</h3>';
} else {
  console.log(isIe);
  app
    .use(router)
    .use(images)
    .use(createPinia())
    .use(
      vuetify({
        theme: { defaultTheme: 'topicThemes', themes: { topicThemes: themes } }
      })
    )
    .mount('#app');
}
