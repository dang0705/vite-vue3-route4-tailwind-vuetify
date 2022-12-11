<template>
  <div v-html="routesData.value" />
</template>

<script setup>
const $asyncRoute = useAsyncRoutesStore();
const { routesData } = storeToRefs($asyncRoute);
</script>
