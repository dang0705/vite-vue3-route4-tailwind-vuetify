export default (fileName) =>
  fileName
    .substring(fileName.lastIndexOf('.') + 1, fileName.length)
    .toLowerCase();
