import { topics } from "@topics/configs/topic-names";

const defaultTabs = ({ topicInfo = "活动介绍" } = {}) => [
  {
    path: "topic-info",
    name: "topic-info",
    component: () => import("@topics-views/inner-tabs/topic-info.vue"),
    meta: {
      title: topicInfo,
    },
  },
];

export default {
  [topics["20th"]]: defaultTabs(),
};
