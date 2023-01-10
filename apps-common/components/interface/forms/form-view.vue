<template>
  <v-form lazy-validation>
    <v-container>
      <v-row class="ma-0">
        <component
          :is="`Form${cfl(config.type)}`"
          v-for="config in formControls"
          :key="config.key"
          v-model="fvFormData[config.key]"
          :config="config"
          :layout="controlsLayout"
          :formData="formData"
          :controls="formControls"
          v-bind="$attrs"
        >
          <template v-for="(_, slotName) in $slots" #[slotName]>
            <slot :name="slotName" />
          </template>
        </component>
      </v-row>
    </v-container>
    <v-card
      v-if="controlsLayout === 'row'"
      class="pt-1 pb-1 tw-flex tw-justify-center"
      flat
    >
      <v-btn color="primary">搜索</v-btn>
      &nbsp; &nbsp;
      <v-btn>重置</v-btn>
    </v-card>
  </v-form>
</template>

<script setup>
  const props = defineProps({
    formData: {
      type: Object,
      default: () => ({})
    },
    formControls: {
      type: Array,
      default: () => []
    },
    controlsLayout: {
      type: String,
      default: 'column'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
  const fvFormData = computed({
    get: () => props.formData,
    set: (value) => useBus.emit('update', value)
  });
</script>
