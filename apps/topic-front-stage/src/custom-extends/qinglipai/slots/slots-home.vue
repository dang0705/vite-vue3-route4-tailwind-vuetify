<template>
  <v-select v-if="slotName === 'target-slot-left'" :class="$attrs.class" />
  <v-text-field v-if="slotName === 'target-slot-right'" :class="$attrs.class" />
</template>

<script>
import homeSlotsMixins from '@topic-front-stage/custom-extends/mixins/home-slots-mixins';
export default {
  mixins: [homeSlotsMixins]
};
</script>
