const pxSuffix = ['width', 'height', 'maxWidth', 'maxHeight', 'borderRadius'];
const formatStyle = (style) => {
  const styles = {};
  for (let styleKey in style) {
    styles[styleKey] =
      style[styleKey] + (pxSuffix.includes(styleKey) ? 'px' : '');
    styleKey === 'backgroundImage' &&
      style[styleKey] &&
      (styles[styleKey] = `url(${style[styleKey]})`);
  }
  return styles;
};
export default (style) => ({
  ...formatStyle(style),
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top'
});
