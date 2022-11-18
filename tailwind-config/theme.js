const breakPoint = require("../apps-common/config/breakpoint");
const screens = {};
const sizes = Object.keys(breakPoint);
for (const size in breakPoint) {
  screens[size] = `${breakPoint[size]}px`;
}
/*sizes.forEach(
  (size, whichSize) =>
    (screens[size] = {
      min: `${breakPoint[size]}px`,
      ...(whichSize < sizes.length - 1
        ? { max: `${breakPoint[sizes[whichSize + 1]] - 1}px` }
        : {}),
    })
);*/

module.exports = {
  screens,
  colors: {
    red: "#f34d50",
    blue: "#1fb6ff",
    purple: "#7e5bef",
    pink: "#ff49db",
    orange: "#ff7849",
    green: "#13ce66",
    yellow: "#fccc00",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  extend: {
    colors: {
      primary: "var(--topic-primary)",
      secondary: "var(--topic-secondary)",
      activated: "#fff",
    },
    spacing: {
      "8xl": "96rem",
      "9xl": "128rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
};
