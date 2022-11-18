export default [
  {
    name: "TopicCouplet",
    component: () => import("@topics-components/back-stage/topic-couplet.vue"),
  },
  {
    name: "TopicImageNav",
    component: () =>
      import("@topics-components/back-stage/topic-image-nav.vue"),
  },
  {
    name: "TopicInfo",
    component: () => import("@topics-components/back-stage/topic-info.vue"),
  },
  {
    name: "TopicOperationButtons",
    component: () =>
      import("@topics-components/back-stage/topic-operation-buttons.vue"),
  },
  {
    name: "TopicOrg",
    component: () => import("@topics-components/back-stage/topic-org.vue"),
  },
  {
    name: "TopicSubscribe",
    component: () =>
      import("@topics-components/back-stage/topic-subscribe.vue"),
  },
  {
    name: "TopicTargetAndTimeLine",
    component: () =>
      import("@topics-components/back-stage/topic-target-and-time-line.vue"),
  },
];
