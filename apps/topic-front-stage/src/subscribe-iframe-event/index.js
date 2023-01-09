const events = {
  updatePreviewData() {
    useIsPreviewStore().updatePreviewData();
  }
};
export default () => {
  window.onmessage = ({ data: { event, data } }) =>
    events[event] && events[event](data);
};
