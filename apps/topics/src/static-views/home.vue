<template>
  <div
    class="topics-home tw-flex tw-h-fit tw-min-h-full tw-flex-col tw-items-center"
    :style="compileStyle(pageStyles)"
  >
    <v-img
      width="100%"
      class="tw-flex-none"
      :src="banner"
      :aspect-ratio="device === 'H5' ? 2.5 : 3.2"
    />
    <div
      v-if="components?.length"
      class="tw-w-full tw-px-6 tw-py-8 md:tw-px-12 lg:tw-px-24 xl:tw-px-32"
    >
      <ui-components
        :components="components"
        :slots="homeSlots"
        slots-name="slots-home"
      />
    </div>
  </div>
</template>

<script setup>
import compileStyle from '@topics-components/utils/compile-styles-from-backend';
import { useSlotsStore } from '@topics-store/slots-store';
import { getSlotsName } from '@topics/configs/slots';
import getHomeComponents from '@topics-apis/get-home-components';
import UiComponents from '@topics-components/front-stage/ui-components.vue';
const components = ref([]);
const banners = ref({});
const homePageStyles = ref({});
const homeSlots = ref([]);
const { device } = storeToRefs(useDeviceStore());
const { homeBackendSlots } = storeToRefs(useSlotsStore());
const initHomePage = async () => {
  try {
    const {
      pageTitle,
      bannerPC,
      bannerH5,
      bgH5,
      bgPC,
      components: comp
    } = await $http.get(getHomeComponents);
    document.title = pageTitle;
    components.value = comp;
    banners.value = { bannerH5, bannerPC };
    homePageStyles.value = { bgH5, bgPC };
  } catch (e) {
    console.log(e);
  }
};
const banner = computed(
  () => banners.value[`banner${device.value}`] || banners.value.bannerPC
);
const pageStyles = computed(
  () => homePageStyles.value[`bg${device.value}`] || homePageStyles.value.bgPC
);
onMounted(async () => {
  await initHomePage();
  homeSlots.value = [
    ...((await getSlotsName())?.homeSlots || []),
    ...homeBackendSlots.value
  ];
});
</script>
