<template>
  <v-btn>
    {{ name }}
    <v-tooltip activator="parent" location="start">{{
      content || name
    }}</v-tooltip>
  </v-btn>
</template>

<script setup>
defineProps({
  name: { type: String, default: '' },
  content: { type: String, default: '' }
});
</script>
