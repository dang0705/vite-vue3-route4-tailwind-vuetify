<template>
  <div
    class="topic-layout tw-relative tw-flex tw-w-full !tw-flex-row tw-items-center tw-justify-center"
  >
    <!--    左插槽-->
    <slot v-if="hasDirSlot('left')" :name="leftSlot" class="left">
      <ui-slot-default-content :name="leftSlot" />
    </slot>

    <div class="tw-flex tw-w-full tw-flex-col tw-justify-center">
      <!--    上插槽-->
      <slot v-if="hasDirSlot('top')" :name="topSlot">
        <ui-slot-default-content :name="topSlot" />
      </slot>
      <!--     组件插槽-->
      <slot />
      <!--    下插槽-->
      <slot v-if="hasDirSlot('bottom')" :name="bottomSlot">
        <ui-slot-default-content :name="bottomSlot" />
      </slot>
    </div>

    <!--    右插槽-->
    <slot v-if="hasDirSlot('right')" :name="rightSlot" class="right">
      <ui-slot-default-content :name="rightSlot" />
    </slot>
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

const hasDirSlot = (dir) => props.slots?.includes(props.slotName({ dir }));
</script>
