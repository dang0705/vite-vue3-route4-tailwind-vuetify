import { pl, zhHans } from "vuetify/locale";
import thresholds from "./breakpoint";
export default {
  display: {
    thresholds,
    mobileBreakpoint: "sm",
  },
  locale: {
    locale: "zhHans",
    fallback: "sv",
    messages: { zhHans, pl },
  },
};
