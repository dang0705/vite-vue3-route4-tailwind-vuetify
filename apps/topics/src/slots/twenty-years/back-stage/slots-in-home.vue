<template>
  <v-text-field v-if="slotName === 'target-slot-1'" :placeholder="content" />
  <v-select v-if="slotName === 'target-slot-2'" :placeholder="content" />
  <v-select v-if="slotName === 'time-line-slot-1'" :placeholder="content" />
  <div
    v-if="slotName === 'button-slot-3'"
    :style="{ color: style.color.text }"
    @click.passive="handleClick"
    v-text="content"
  />
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
  },
  style: {
    type: Object,
    default: () => ({})
  }
});

const handleClick = () => alert('slot 触发');
</script>
