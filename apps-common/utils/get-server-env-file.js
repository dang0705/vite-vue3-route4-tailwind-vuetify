import 'whatwg-fetch';
import { domain } from '@common-utils/api-domain';
const timestamp = new Date().getTime();
const requestFile = `/env.json?t=${timestamp}`;
let domains = {};

const setUrl = (config) =>
  (config.url = /^(http|https|\/\/)/.test(config.url)
    ? config.url
    : (domains[domain] || '') + config.baseURL + config.url);

export default (config) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (res, rej) => {
    if (domains[domain]) {
      setUrl(config);
      res();
    } else {
      try {
        const response = await fetch(requestFile);
        domains = (await response.json()) || {};
        setUrl(config);
        res();
      } catch (e) {
        rej();
      }
    }
  });
