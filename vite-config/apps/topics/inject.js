module.exports = (base) =>
  `<script src="/${base}/async/inject/not-ie.js"></script>
<script src='/${base}/async/inject/webcomponents-loader.js'></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver,ResizeObserver,WebAnimations,Object.fromEntries,Array.prototype.at"></script>
`;
