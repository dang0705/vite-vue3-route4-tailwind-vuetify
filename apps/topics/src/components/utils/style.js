const pxSuffix = ['width', 'height', 'maxWidth', 'maxHeight', 'borderRadius'];
const addSuffix = (style) => {
  const styles = {};
  for (let styleKey in style) {
    styles[styleKey] =
      style[styleKey] + (pxSuffix.includes(styleKey) ? 'px' : '');
  }
  return styles;
};
export default (style) => ({
  ...addSuffix(style),
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top'
});
