const name = (name) => `Form${name}`;
export default [
  {
    name: name('Text'),
    component: () => import('@common-form-controls/ui-text-filed.vue')
  }
];
