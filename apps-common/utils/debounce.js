export default function debounce(fn, delay = 50) {
  let timer = null;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(fn.bind(this), delay, args);
  };
}
