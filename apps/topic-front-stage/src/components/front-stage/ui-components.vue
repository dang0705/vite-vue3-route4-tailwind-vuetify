<template>
  <component
    :is="isComponent(key)"
    v-for="{ key, value } in components"
    :key="key"
    :slots="slots"
    :component-key="c2k(key)"
    :value="value"
    :class="['tw-mx-auto', 'tw-flex', 'tw-flex-col', 'tw-mb-8', c2k(key)]"
  >
    <template v-for="slotName in slots" :key="slotName" #[slotName]="slotData">
      <!--          所有专题各组件的集中定制-->
      <component
        :is="slots?.length ? slotsName : ''"
        :slot-name="slotName"
        :slots="slots"
        v-bind="slotData"
      />
    </template>
  </component>
</template>

<script setup>
import c2k from '@common-utils/camelCase-2-kebab-case';

defineProps({
  components: ARRAY(),
  slotsName: STRING(),
  slots: ARRAY(),
  backendSlots: ARRAY(),
  frontendSlots: ARRAY()
});
const isComponent = (key) => `topic-${key}`;
</script>
