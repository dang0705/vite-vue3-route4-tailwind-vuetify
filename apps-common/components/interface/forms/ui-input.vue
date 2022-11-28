<template>
  <v-input
    :messages="helper"
    :append-icon="appendIcon"
    :prepend-icon="prependIcon"
  >
    <slot />
    <template #prepend>
      <v-img />
    </template>
  </v-input>
</template>

<script setup>
  defineProps(UiInputProps);
</script>
