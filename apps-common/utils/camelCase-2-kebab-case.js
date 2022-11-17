export default (str) =>
  (str = str.replace(/([A-Z])/g, (_, p1) => `-${p1.toLowerCase()}`));
