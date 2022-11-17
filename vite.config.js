import { defineConfig } from "vite";
import { resolve } from "./vite-config/alias";
import $appName from "./vite-config/app-name";
import plugins from "./vite-config/plugins";
import proxy from "./vite-config/proxy";
import build from "./vite-config/build";
import deepmerge from "deepmerge";
import { isBuildLocal } from "./vite-config/env";

export default defineConfig(async ({ mode }) => {
  let appConfigs = ()=>{};
  const $isDev = mode === "development";
  try {
    appConfigs = require(`./vite-config/apps/${$appName}`);
  } catch (e) {}
  const commonConfigs = {
    build: build($appName),
    base:$isDev? "/":'topic',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "./apps-common/styles/global/_index.scss" as *;',
          charset: false,
        },
      },
      devSourcemap: true,
    },
    define: {
      $appName: `"${$appName}"`,
      $isDev,
      isBuildLocal,
    },
    plugins: plugins($isDev, $appName),
    preview: {
      port: 8686,
    },
    root: `./apps/${$appName}`,
    resolve: {
      ...resolve,
      extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
    server: {
      host: "topic.qinglipai.cn",
      port: 9999,
      proxy,
    },
  };
  return deepmerge(commonConfigs, appConfigs ? appConfigs($isDev) : {});
});
