const deepFreeze = (obj) => {
  var propsNames = Object.getOwnPropertyNames(obj);
  propsNames.forEach((item) => {
    const props = obj[item];
    props instanceof Object && deepFreeze(props);
  });

  return Object.freeze(obj);
};
export default deepFreeze;
