import vue from '@vitejs/plugin-vue';
import polyfill from '@vitejs/plugin-legacy';
import autoImport from 'unplugin-auto-import/vite';
import viteRestart from 'vite-plugin-restart';
import commonjsDev from 'vite-plugin-commonjs';
import deepmerge from 'deepmerge';
import vuetify from 'vite-plugin-vuetify';

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
        compilerOptions: { isCustomElement: (tag) => /^web-/.test(tag) }
      }
    }),
    vuetify({
      autoImport: true
    }),
    polyfill({
      targets: ['chrome >80'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      corejs: true
    }),
    autoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [
        // presets
        'vue',
        'vue-router',
        'pinia',
        // custom
        deepmerge(
          {
            /*            '@vueuse/core': [
          // named imports
          'useMouse', // import { useMouse } from '@vueuse/core',
          // alias
          ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
        ],*/
            /*        axios: [
            // default imports
            ['default', 'axios'] // import { default as axios } from 'axios',
          ],*/
            '@common-config': ['isDev'],
            // '@common-routes': ['useRouter', 'useRoute'],
            '@common-mixins/components': ['UiInput'],
            '@common-mixins/component-props': ['UiInputProps'],
            // "@common/store": ["defineStore"],
            '@common-plugins/http': ['$http'],
            '@common-plugins/bus': ['useBus'],
            '[package-name]': [
              '[import-names]',
              // alias
              ['[from]', '[alias]']
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
