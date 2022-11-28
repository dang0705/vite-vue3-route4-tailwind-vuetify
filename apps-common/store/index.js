import { createPinia, defineStore as useStore } from 'pinia';
const pinia = createPinia();

export const defineStore = (...args) => {
  const store = useStore(...args);
  return (p = pinia) => store(p);
};
export default pinia;
