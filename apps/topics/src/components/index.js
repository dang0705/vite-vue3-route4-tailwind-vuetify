export default [
  {
    name: "UiCouplet",
    component: () => import("@topics-components/back-stage/ui-couplet.vue"),
  },
  {
    name: "UiImageNav",
    component: () => import("@topics-components/back-stage/ui-image-nav.vue"),
  },
  {
    name: "UiInfo",
    component: () => import("@topics-components/back-stage/ui-info.vue"),
  },
  {
    name: "UiOperationButtons",
    component: () =>
      import("@topics-components/back-stage/ui-operation-buttons.vue"),
  },
  {
    name: "UiOrg",
    component: () => import("@topics-components/back-stage/ui-org.vue"),
  },
  {
    name: "UiSubscribe",
    component: () => import("@topics-components/back-stage/ui-subscribe.vue"),
  },
  {
    name: "UiTopicTargetAndTimeLine",
    component: () =>
      import("@topics-components/back-stage/ui-topic-target-and-time-line.vue"),
  },
];
