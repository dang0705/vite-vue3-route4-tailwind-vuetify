import vue from '@vitejs/plugin-vue';
import polyfill from '@vitejs/plugin-legacy';
import autoImport from 'unplugin-auto-import/vite';
import viteRestart from 'vite-plugin-restart';
import commonjsDev from 'vite-plugin-commonjs';
import deepmerge from 'deepmerge';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default (isDev, $appName) => {
  let appsConfig = {};
  try {
    appsConfig = require(`./vite-config/apps/${$appName}/plugins.js`);
  } catch (e) {
    console.log(e);
  }
  return [
    vue({
      template: {
        transformAssetUrls,
        compilerOptions: { isCustomElement: (tag) => /^web-/.test(tag) }
      }
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: '../../apps-common/styles/global/_vuetify-configs.scss'
      }
    }),
    polyfill({
      targets: ['defaults', 'ie >7'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      corejs: true
    }),
    autoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        deepmerge(
          {
            '@common-config': ['isDev'],
            '@common-mixins/components': ['UiInput'],
            '@common-mixins/component-props': ['UiInputProps'],
            '@common-plugins/http': ['$http'],
            '@common-plugins/bus': ['useBus']
          },
          appsConfig.autoImport.imports
        )
      ],
      vueTemplate: false
    }),
    ...(isDev ? [commonjsDev()] : []),
    viteRestart({
      reload: [
        'vite.config.js',
        'vite-config/**/*',
        'postcss.config.js',
        'tailwind.config.js'
      ]
    })
  ];
};
