export default [
  {
    name: 'ListView',
    component: () => import('@common-form-interface/list-view.vue')
  },
  {
    name: 'DetailView',
    component: () => import('@common-form-interface/detail-view.vue')
  },
  {
    name: 'FormView',
    component: () => import('@common-form-interface/form-view.vue')
  }
];
