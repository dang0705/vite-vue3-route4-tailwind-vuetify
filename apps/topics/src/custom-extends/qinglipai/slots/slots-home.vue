<template>
  <v-text-field v-if="slotName === 'info-slot-1'" />
</template>

<script>
import homeSlotsMixins from '@topics/custom-extends/mixins/home-slots-mixins';
export default {
  mixins: [homeSlotsMixins]
};
</script>
