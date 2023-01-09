import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
// store
import { createPinia } from 'pinia';

// ui
import vuetify from '@common-plugins/vuetify';

// router's configs
import router from '@topic-front-stage-routes';

// back-stage components
import components from '@topic-front-stage-components';
components.forEach(({ name, component }) =>
  app.component(name, defineAsyncComponent(component))
);

// back-stage slots
import slots from '@topic-front-stage/configs/slots';
slots.forEach(({ name, component }) =>
  app.component(name, defineAsyncComponent(component))
);

import '@topic-front-stage/styles/scss/vendors/_index.scss';
import '@topic-front-stage/styles/index.css';
import { topicId } from '@topic-front-stage-configs/get-topic-id';
import images from '@common-plugins/auto-pre-parsing-images';
import themes from '@topic-front-stage-configs/vuetify-theme';

if (!topicId) {
  document.getElementById('app').innerHTML =
    '<h3 class="tw-flex tw-p-4 tw-justify-center tw-items-center tw-w-full tw-h-full tw-indent-10">' +
    '无法正确识别专题，请检查地址栏的链接是否带上了专题ID，有效链接举例：https://qinglipai.cn/topic/专题ID</h3>';
} else {
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
