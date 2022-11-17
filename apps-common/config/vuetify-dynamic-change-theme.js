export default ({ type = "light", theme }) =>
  (useVuetify().theme.themes[type] = theme);
