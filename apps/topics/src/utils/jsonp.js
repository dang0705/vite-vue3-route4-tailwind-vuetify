function cleanup(script) {
  if (script.parentNode) script.parentNode.removeChild(script);
  script.onload = null;
  script.onerror = null;
  script = null;
}

function jsonp(url) {
  const target = document.getElementsByTagName('script')[0] || document.head;

  const script = document.createElement('script');
  script.src = `${url}?s=${new Date().getTime()}`;
  script.type = 'module';
  target.parentNode.insertBefore(script, target);

  return new Promise((resolve, reject) => {
    script.onload = () => {
      resolve();
      cleanup(script);
    };
    script.onerror = () => {
      reject(new Error('script load failed'));
      cleanup(script);
    };
  });
}

export default jsonp;
