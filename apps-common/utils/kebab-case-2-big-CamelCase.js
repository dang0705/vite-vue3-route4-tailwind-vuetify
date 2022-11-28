import kebabCase2CamelCase from "@common-utils/kebab-case-2-camelCase";
export default (str) =>
  kebabCase2CamelCase(str.charAt(0).toUpperCase() + str.slice(1));
