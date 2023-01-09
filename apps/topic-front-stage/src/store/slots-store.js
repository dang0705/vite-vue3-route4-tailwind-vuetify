export const useSlotsStore = defineStore('slots', {
  state: () => ({
    slots: {
      home: [],
      index: []
    }
  }),
  getters: {
    homeBackendSlots: ({ slots }) => slots.home
  },
  actions: {
    addSlot(slot, route) {
      this.slots[route === 'home' ? route : 'index'].push(slot);
    }
  }
});
