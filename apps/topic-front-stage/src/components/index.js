export default [
  {
    name: 'TopicCouplet',
    component: () =>
      import('@topic-front-stage-components/back-stage/topic-couplet.vue')
  },
  {
    name: 'TopicImageNav',
    component: () =>
      import('@topic-front-stage-components/back-stage/topic-image-nav.vue')
  },
  {
    name: 'TopicInfo',
    component: () =>
      import('@topic-front-stage-components/back-stage/topic-info.vue')
  },
  {
    name: 'TopicOperationButton',
    component: () =>
      import(
        '@topic-front-stage-components/back-stage/topic-operation-button.vue'
      )
  },
  {
    name: 'TopicOrg',
    component: () =>
      import('@topic-front-stage-components/back-stage/topic-org.vue')
  },
  {
    name: 'TopicOfficialAccounts',
    component: () =>
      import(
        '@topic-front-stage-components/back-stage/topic-official-accounts.vue'
      )
  },
  {
    name: 'TopicTarget',
    component: () =>
      import('@topic-front-stage-components/back-stage/topic-target')
  },
  {
    name: 'TopicTimeLine',
    component: () =>
      import('@topic-front-stage-components/back-stage/topic-time-line.vue')
  },
  {
    name: 'UiComponents',
    component: () =>
      import('@topic-front-stage-components/front-stage/ui-components.vue')
  }
];
