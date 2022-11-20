export default (bg) => ({
  background: `${
    bg.startsWith('http') ? `url(${bg})` : `${bg}`
  } no-repeat left top/contain `
});
