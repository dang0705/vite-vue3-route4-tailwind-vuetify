export default [
  {
    name: 'TopicCouplet',
    component: () => import('@topics-components/back-stage/topic-couplet.vue')
  },
  {
    name: 'TopicImageNav',
    component: () => import('@topics-components/back-stage/topic-image-nav.vue')
  },
  {
    name: 'TopicInfo',
    component: () => import('@topics-components/back-stage/topic-info.vue')
  },
  {
    name: 'TopicOperationButton',
    component: () =>
      import('@topics-components/back-stage/topic-operation-button.vue')
  },
  {
    name: 'TopicOrg',
    component: () => import('@topics-components/back-stage/topic-org.vue')
  },
  {
    name: 'TopicOfficialAccounts',
    component: () =>
      import('@topics-components/back-stage/topic-official-accounts.vue')
  },
  {
    name: 'TopicTarget',
    component: () => import('@topics-components/back-stage/topic-target')
  },
  {
    name: 'TopicTimeLine',
    component: () => import('@topics-components/back-stage/topic-time-line.vue')
  }
];
