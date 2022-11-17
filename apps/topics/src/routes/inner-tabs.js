import { events } from "@topics/configs/topic-names";

const defaultTabs = ({ eventInfo = "活动介绍" } = {}) => [
  {
    path: "event-info",
    name: "event-info",
    component: () => import("@topics-views/inner-tabs/event-info.vue"),
    meta: {
      title: eventInfo,
    },
  },
];

export default {
  [events["20th"]]: defaultTabs(),
  [events.qinglipai]: defaultTabs().push({
    path: "event-test",
    name: "event-test",
    component: () => import("@topics-views/inner-tabs/event-test.vue"),
    meta: {
      title: "测试",
    },
  }),
};
