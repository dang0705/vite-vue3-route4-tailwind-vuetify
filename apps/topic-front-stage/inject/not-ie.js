var isIE = typeof navigator !== 'undefined' &&
  (/MSIE/.test(navigator.userAgent) || /Trident\//.test(navigator.appVersion));
isIE &&
  document.write(
    '<h3 style="text-align:center;margin-top: 30px">检测到您的浏览器太旧了，我们建议您更换最新版的chrome' +
      '<a style="color:blue;text-decoration: underline" href="https://www.baidu.com/s?wd=chrome" target="_blank">点击此处前去下载。</a></h3>'
  );
