const events = {
  loaded({ device }) {
    const $device = useDeviceStore();
    // $device.setDevice(device);
  }
};
export default () => {
  window.addEventListener('message', ({ data: { event, data } }) => {
    events[event] && events[event](data);
  });
};
