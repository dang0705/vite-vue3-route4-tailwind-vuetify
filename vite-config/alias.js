const path = require('path');
const workspace = path.join(__dirname, '../');
const { scripts } = require('../package.json');
const resolve = (dir) => path.join(workspace, dir);
const appAliases = {};

Object.keys(scripts).forEach((script) => {
  if (script.includes('app-')) {
    const app = script.substring(
      script.indexOf('-') + 1,
      script.lastIndexOf(':')
    );
    const appRoot = `./apps/${app}/src`;
    appAliases[`@${app}`] = resolve(appRoot);
    appAliases[`@${app}-apis`] = resolve(`${appRoot}/apis`);
    appAliases[`@${app}-configs`] = resolve(`${appRoot}/configs`);
    appAliases[`@${app}-components`] = resolve(`${appRoot}/components`);
    appAliases[`@${app}-store`] = resolve(`${appRoot}/store`);
    appAliases[`@${app}-routes`] = resolve(`${appRoot}/routes`);
    appAliases[`@${app}-views`] = resolve(`${appRoot}/views`);
  }
});
module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      ...appAliases,
      '@common': resolve('apps-common'),
      '@common-controls': resolve('apps-common/components/controls'),
      '@common-interface': resolve('apps-common/components/interface'),
      '@common-form-controls': resolve('apps-common/components/controls/forms'),
      '@common-form-interface': resolve(
        'apps-common/components/interface/forms'
      ),
      '@common-utils': resolve('apps-common/utils'),
      '@common-config': resolve('apps-common/config'),
      '@common-routes': resolve('apps-common/routes'),
      '@common-mixins': resolve('apps-common/mixins'),
      '@common-plugins': resolve('apps-common/plugins'),
      '@bus': resolve('apps-common/plugins/bus')
    }
  }
};
