<template>
  <v-select v-if="slotName === 'info-slot-left'" :class="$attrs.class" />
  <v-text-field v-if="slotName === 'info-slot-right'" :class="$attrs.class" />
</template>

<script>
import homeSlotsMixins from '@topics/custom-extends/mixins/home-slots-mixins';
export default {
  mixins: [homeSlotsMixins]
};
</script>
