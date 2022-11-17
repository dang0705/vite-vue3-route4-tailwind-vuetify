const target = ['http://api.q.dev.qinglipai.cn'];
const contexts = ['/api'];

let proxy = {};

contexts.forEach(
  (context, which) =>
    (proxy[context] = {
      target: target[which],
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp('^\\{' + context + '}'), '')
    })
);
export default proxy;
