<template>
  <div
    class="topic-layout tw-relative tw-flex tw-w-full !tw-flex-row tw-items-center tw-justify-center"
  >
    <!--    左插槽-->
    <ui-slot-default-content :name="leftSlot" />
    <div class="tw-flex tw-w-full tw-flex-col tw-justify-center">
      <!--    上插槽-->
      <ui-slot-default-content :name="topSlot" />
      <!--     真正组件的插槽-->
      <slot />
      <!--    下插槽-->
      <ui-slot-default-content :name="bottomSlot" />
    </div>
    <!--    右插槽-->
    <ui-slot-default-content :name="rightSlot" />
  </div>
</template>

<script setup>
import UiSlotDefaultContent from '@topics-components/front-stage/ui-slot-default-content.vue';
const props = defineProps({
  slotName: FUNCTION(),
  slots: ARRAY()
});
const leftSlot = props.slotName({ dir: 'left' });
const topSlot = props.slotName({ dir: 'top' });
const rightSlot = props.slotName({ dir: 'right' });
const bottomSlot = props.slotName({ dir: 'bottom' });
const $slots = useSlots();
console.log($slots);
</script>
