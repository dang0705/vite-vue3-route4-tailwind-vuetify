export const useDeviceStore = defineStore('device', {
  state: () => ({
    device: 'PC',
    threshold: ''
  }),
  actions: {
    setDevice(size) {
      this.threshold = size;
      switch (size) {
        case 'sm':
        case 'xs':
          this.device = 'H5';
          break;
        case 'md':
          this.device = 'tablet';
          break;
        default:
          this.device = 'PC';
      }
    }
  }
});
