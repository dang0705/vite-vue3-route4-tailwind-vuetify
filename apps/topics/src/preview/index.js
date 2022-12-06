import { useAsyncRoutesStore } from '@topics-store/async-routes';

const events = {
  getAsyncRouteData({ routeName, value }) {
    useAsyncRoutesStore().getAsyncRouteData(routeName, value);
  }
};
export default () =>
  (window.onmessage = ({ data: { event, data } }) => {
    events[event] && events[event](data);
  });
