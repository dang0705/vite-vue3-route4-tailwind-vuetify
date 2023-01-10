<template>
  <v-card>
    <v-card-title v-text="title" />
    <v-card-text>
      <form-view
        v-bind="$attrs"
        v-model="formData"
        :form-controls="formControls"
      >
        <template v-for="(_, slotName) in $slots" #[slotName]>
          <slot :name="slotName" />
        </template>
      </form-view>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn rounded variant="text" @click.passive="close">取消</v-btn>
      <v-btn rounded variant="text" color="primary" @click.passive="save">
        确认
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import FormView from '@common-form-interface/form-view.vue';
  import viewsMixins from '@common-form-interface/views-mixins';
  const { props, formData, breadcrumbs } = viewsMixins();
  let dvProps;
  dvProps = defineProps({
    ...props,
    dialog: {
      type: Boolean,
      default: false
    }
  });
  const isNew = ref(false);
  const title = computed(() => (isNew ? '新建' : '编辑'));
  const close = () => useBus.emit('close');
  const save = () => close();
</script>
