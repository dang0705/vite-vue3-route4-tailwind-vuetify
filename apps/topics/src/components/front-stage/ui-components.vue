<template>
  <component
    :is="isComponent(key)"
    v-for="{ key, value } in components"
    :key="key"
    :value="value"
    :class="[
      'tw-mx-auto',
      'tw-flex',
      'tw-flex-col',
      'tw-mb-8',
      camelCase2KebabCase(key)
    ]"
  >
    <template v-for="slotName in slots" :key="slotName" #[slotName]="slotData">
      <!--          所有专题各组件的集中定制-->
      <component
        :is="slots.length ? slotsName : ''"
        :slot-name="slotName"
        :slots="slots"
        v-bind="slotData"
      />
    </template>
  </component>
</template>

<script setup>
import camelCase2KebabCase from '@common-utils/camelCase-2-kebab-case';

defineProps({
  components: {
    type: Array,
    default: () => []
  },
  slotsName: { type: String, default: '' },
  slots: { type: Array, default: () => [] }
});
const isComponent = (key) => `topic-${key}`;
</script>
