import { isDev } from "@common-config";

export const useEventNameStore = defineStore("event-name", {
  state: () => ({
    eventName: isDev ? "twentyYears" : "",
  }),
  actions: {
    setEventName(name) {
      !this.eventName && (this.eventName = name);
    },
  },
});
