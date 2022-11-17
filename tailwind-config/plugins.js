const plugin = require('tailwindcss/plugin');
module.exports = [
  plugin(({ addComponents, theme }) => {
    const importantTitle = {
      '.important-title': {}
    };
    addComponents(importantTitle);
  })
];
