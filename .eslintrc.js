module.exports = {
  root: true,
  parserOptions: {
    requireConfigFile: false, // 不强制要求babel.config
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      // 非 react 项目关闭 jsx 语法校验,默认为 true
      jsx: false
    }
  },
  env: {
    node: true,
    browser: true,
    jest: true
  },
  // required to lint *.Vue files
  plugins: ['vue', 'jsx'],
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `asyncPlugin:Vue/essential` or `asyncPlugin:Vue/recommended` for stricter rules.
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': 0,
    'vue/attribute-hyphenation': 0,
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'jsx/uses-factory': [1, { pragma: 'JSX' }],
    'jsx/factory-in-scope': [1, { pragma: 'JSX' }],
    'jsx/mark-used-vars': 1,
    'jsx/no-undef': 1
  }
};
