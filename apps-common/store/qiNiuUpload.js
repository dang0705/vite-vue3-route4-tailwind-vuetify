import { defineStore } from 'pinia';
import { $http } from '@common/plugins/http';
import { CommonAuth } from '@common-store/auth';

export const CommonQiNiuUpload = defineStore('Common-qi-niu-upload', {
  actions: {
    async upload({
      url = 'https://upload.qbox.me',
      ext,
      apiKey = 'file',
      files = [],
      businessPath = 'authentication/'
    }) {
      const { token } = await $http().get('/qiniu/token/get');
      const headers = { 'Content-Type': 'multipart/form-data' };
      const yibanId = CommonAuth().userInfo.yibanId;
      try {
        const key = `qinglipai_quick/${businessPath}${
          businessPath === 'authentication/' ? yibanId + '.' : ''
        }${new Date().getTime()}.${ext}`;
        const fm = new FormData();
        if (!this.isMP) {
          fm.append(apiKey, files[0]);
          fm.append('token', token);
          fm.append('key', key);
        }
        const { data } = await $http().post(url, fm, {
          headers
        });
        return Promise.resolve(data.key);
      } catch (e) {
        return Promise.reject();
      }
    }
  }
});
