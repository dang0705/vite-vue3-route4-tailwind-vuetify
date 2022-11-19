<template>
  <v-text-field v-if="slotName === 'target-slot-1'" />
  <v-select v-if="slotName === 'target-slot-2'" />
  <v-select v-if="slotName === 'time-line-slot-1'" />
</template>

<script setup>
const props = defineProps({
  slots: {
    type: Array,
    default: () => {
      [];
    }
  },
  slotName: {
    type: String,
    default: ''
  }
});
</script>
