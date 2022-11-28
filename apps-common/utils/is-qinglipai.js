import { isDev } from '@common-config';
export default isDev ? true : location.hostname.includes('qinglipai');
