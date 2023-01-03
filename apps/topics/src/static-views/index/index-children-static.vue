<template>
  <ui-components
    v-if="indexComponents.slot === slotType.backend"
    :components="indexComponents.components"
  />
  <div
    v-if="indexComponents.slot === slotType.comingSoon"
    class="tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-flex-row"
  >
    <div
      class="triangle-right tw-relative tw-flex tw-items-center tw-rounded-2xl tw-border-orange tw-bg-orange tw-px-20 tw-py-8 tw-text-white md:tw-self-baseline"
    >
      敬请期待
    </div>
    <v-img
      :src="globalImages.logo"
      width="200"
      class="tw-max-w-xs tw-flex-none"
    />
  </div>
</template>

<script setup>
import UiComponents from '@topics-components/front-stage/ui-components.vue';

const slotType = {
  backend: 0,
  frontend: 1,
  comingSoon: 2
};
const { indexComponents } = storeToRefs(useAsyncRoutesStore());
const { globalImages } = storeToRefs(useGlobalImagesStore());
</script>
