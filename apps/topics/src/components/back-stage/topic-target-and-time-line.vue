<template>
  <ui-template />
</template>

<script setup>
import publicProps from "@topics-components/mixins/props";
const props = defineProps(publicProps);
const slots = templateCompiler(props.value).slots;
</script>
