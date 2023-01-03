import vue from '@vitejs/plugin-vue';
import polyfill from '@vitejs/plugin-legacy';
import autoImport from 'unplugin-auto-import/vite';
import viteRestart from 'vite-plugin-restart';
import commonjsDev from 'vite-plugin-commonjs';
import deepmerge from 'deepmerge';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { createHtmlPlugin } from 'vite-plugin-html';

export default (isDev, $appName, base) => {
  let appsConfig = {};
  let injectScript = '';
  try {
    appsConfig = require(`./vite-config/apps/${$appName}/plugins.js`);
    injectScript = require(`./vite-config/apps/${$appName}/inject.js`);
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
    createHtmlPlugin({
      minify: !isDev,
      inject: {
        data: { title: '青梨派', injectScript: isDev ? '' : injectScript(base) }
      }
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: '../../apps-common/styles/global/_vuetify-configs.scss'
      }
    }),
    polyfill({
      targets: ['defaults', 'ie 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: true,
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
            '@common-plugins/bus': ['useBus'],
            '@common-utils/vue-prop-type-and-default': [
              'BOOLEAN',
              'OBJECT',
              'ARRAY',
              'STRING',
              'NUMBER',
              'FUNCTION'
            ]
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
