import { defineStore } from 'pinia';
import isQinglipai from '@common-utils/is-qinglipai';
export const CommonHostname = defineStore('Common-hostname', {
  state() {
    return {
      isQinglipai
    };
  }
});
