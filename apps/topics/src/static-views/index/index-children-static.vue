<template>
  <div v-html="pageData.value" />
</template>

<script setup>
const $previewStore = useIsPreviewStore();
const { pageData } = storeToRefs($previewStore);
</script>
