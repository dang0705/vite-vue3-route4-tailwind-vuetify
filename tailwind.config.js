/** @type {import('tailwindcss').Config} */
const $appName = require("./vite-config/app-name");
const theme = require("./tailwind-config/theme");
const plugins = require("./tailwind-config/plugins");
module.exports = {
  content: [`./apps/${$appName}/src/**/*.{vue,css,scss,js}`],
  darkMode: "media",
  prefix: "tw-",
  important: "#app",
  corePlugins: {
    preflight: false,
  },
  theme,
  plugins,
};
