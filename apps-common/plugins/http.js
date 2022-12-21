import axios from 'axios';
import env from '@common-utils/get-server-env-file';
import { useBus } from '@bus';
import { topicId } from '@topics-configs/get-topic-id';
import { isDev, baseURL, statusCodes } from '@common-config';
import { useIsPreviewStore } from '@topics-store/preview-store';
import isQinglipai from '@common-utils/is-qinglipai';
import { storeToRefs } from 'pinia';

let gotEnv = false;
const http = axios.create({
  baseURL,
  headers: {
    ...(isQinglipai ? {} : { ORI: 'yiban' })
  }
});

const httpErrorMessage = {
  default: '操作失败',
  response: '服务器繁忙',
  request: '请求失败',
  unknown: '未知错误',
  noEnvJson: '加载 "env.json" 时出错, 请联系后端或者运维人员'
};

const errorHandler = ({ msg, code }) => useBus.emit('err', msg, code);

http.interceptors.request.use(
  async (config) => {
    if (!isDev && !gotEnv) {
      try {
        await env(config);
      } catch (e) {
        useBus.emit('on-error', httpErrorMessage.noEnvJson);
      } finally {
        gotEnv = true;
      }
    }
    const $previewStore = useIsPreviewStore();
    const { isPreview } = storeToRefs($previewStore);
    config.method === 'post'
      ? (config.data = {
          ...config.data,
          topicId,
          publish: isPreview.value ? 0 : 1
        })
      : (config.params = {
          ...config.params,
          topicId,
          publish: isPreview.value ? 0 : 1
        });
    useBus.emit('loading', true);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    useBus.emit('loading', false);
    const {
      data: { code, data, message },
      config,
      status
    } = response;
    if (config.mock) {
      return Promise.resolve(response.data);
    }
    if (code && code === statusCodes.OK) {
      return Promise.resolve(data);
    } else {
      // 七牛返回没有状态码
      if (config.url === 'https://upload.qbox.me') {
        return status === statusCodes.OK
          ? Promise.resolve({ data: response.data })
          : errorHandler({ code, message });
      }
      errorHandler({ code, message });
      return Promise.reject({ code, message });
    }
  },
  (error) => {
    errorHandler({ msg: '服务器繁忙，请稍后' });
    useBus.emit('loading', false);
    return Promise.reject(error);
  }
);

export default {
  install(app) {
    app.prototype.$http = http;
  }
};
export const $http = http;
