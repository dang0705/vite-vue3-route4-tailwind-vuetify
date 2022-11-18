<template>
  <ui-template>
    <div v-for="(_, index) in slots" :slot="`slot-${index + 1}`" :key="index">
      <slot :name="`info-slot-${index + 1}`" />
    </div>
  </ui-template>
</template>

<script setup>
import publicProps from "@topics-components/mixins/props";
const props = defineProps(publicProps);
const { slots } = templateCompiler(props.value);
</script>
