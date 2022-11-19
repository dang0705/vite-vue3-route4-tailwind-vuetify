<template>
  <div class="topic-target-and-line tw-flex tw-justify-center">
    <div v-if="$slots.left">
      <slot name="left" />
    </div>
    <div class="tw-flex-col">
      <div v-if="$slots.top"><slot name="top" /></div>
      <target :value="value.targets">
        <template v-for="(_, slotName) in $slots" #[slotName]>
          <slot :name="slotName" />
        </template>
      </target>
      <time-line :value="value">
        <template v-for="(_, slotName) in $slots" #[slotName]>
          <slot :name="slotName" />
        </template>
      </time-line>
      <div v-if="$slots.bottom"><slot name="bottom" /></div>
    </div>
    <div v-if="$slots.right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
import publicProps from '@topics-components/mixins/props';
import target from '@topics-components/back-stage/children/topic-target-and-time-line/target';
import timeLine from '@topics-components/back-stage/children/topic-target-and-time-line/time-line';

const props = defineProps(publicProps);
console.log(useSlots());
</script>
