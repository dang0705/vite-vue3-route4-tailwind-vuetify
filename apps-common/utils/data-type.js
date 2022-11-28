export default (data) =>
  Object.prototype.toString.call(data).replace(/\[|\s|object|\]/g, '');
