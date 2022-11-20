const { default: vueJsx } = require('@vue/babel-plugin-jsx');
module.exports = (isDev) => ({
  base: isDev ? '/' : '/topic/',
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h } from "vue"'
  },
  plugins: [vueJsx({})]
});
