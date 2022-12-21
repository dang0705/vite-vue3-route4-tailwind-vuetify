<template>
  <ui-components
    v-if="!indexComponents.slot"
    :components="indexComponents.components"
  />
</template>

<script setup>
import UiComponents from '@topics-components/front-stage/ui-components.vue';
const { indexComponents } = storeToRefs(useAsyncRoutesStore());
</script>
