<template>
  <Wrapper v-bind="props">
    <v-text-field />
  </Wrapper>
</template>

<script setup>
  const Wrapper = UiInput;
  const props = defineProps(UiInputProps);
</script>
