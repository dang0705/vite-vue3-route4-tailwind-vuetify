<template>
  <v-text-field v-if="slotName === 'target-slot-1'" :placeholder="content" />
  <v-select v-if="slotName === 'target-slot-2'" :placeholder="content" />
  <v-select v-if="slotName === 'time-line-slot-1'" :placeholder="content" />
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
  },
  content: {
    type: String,
    default: ''
  }
});
</script>
