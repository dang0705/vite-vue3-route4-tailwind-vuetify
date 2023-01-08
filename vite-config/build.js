import getFileExt from '../apps-common/utils/get-file-ext';
import commonjsProd from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import { isBuildLocal } from './env';
/*const {
  list, // array of required modules
  targets // object with targets for each module
} = require('core-js-compat')({
  targets: ['chrome 52', 'ie 11'], // browserslist query or object of minimum environment versions to support
  filter: /^(es|web)\./, // optional filter - string-prefix, regexp or list of modules
  version: '3.26' // used `core-js` version, by default - the latest
});

console.log(targets);*/
export default (appName) => ({
  outDir: `../../dist/${appName}` /*相对于项目根目录*/,
  emptyOutDir: true,
  rollupOptions: {
    output: {
      // compact: true,
      assetFileNames: ({ name }) => {
        const ext = getFileExt(name);
        let path = ext === 'css' ? ext : 'assets';
        return `${path}/[name]-[hash].[ext]`;
      },
      entryFileNames: `main/[name]-[hash].js`,
      chunkFileNames: isBuildLocal
        ? `[name]/[name]-[hash].js`
        : `async/async-module-[hash].js`,
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return id
            .toString()
            .split('node_modules/')[1]
            .split('/')[0]
            .toString();
        }
      }
    },
    plugins: [
      commonjsProd(),
      copy({
        targets: [
          {
            src: `./apps/${appName}/inject/not-ie.js`,
            dest: `./dist/${appName}/async/inject`
          },
          {
            src: `./apps/${appName}/inject/webcomponents-loader.js`,
            dest: `./dist/${appName}/async/inject`
          },
          {
            src: `./apps/${appName}/inject/bundles/**/*`,
            dest: `./dist/${appName}/async/inject/bundles`
          }
        ],
        hook: 'writeBundle'
      })
    ]
  }
});
