const events = {
  loaded({ device }) {
    console.log(window.$vuetify.display.name.value);
    const $device = useDeviceStore();
    $device.setDevice(device);
    console.log($device.device);
  }
};
export default () => {
  window.addEventListener('message', ({ data: { event, data } }) => {
    events[event] && events[event](data);
  });
};
