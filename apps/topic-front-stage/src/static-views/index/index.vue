<template>
  <div
    class="tw-mx-auto tw-h-[calc(100%_-_3.5rem)] tw-overflow-auto md:tw-h-fit md:tw-min-h-full"
    :style="compileStyle(bg)"
  >
    <v-img
      width="100%"
      :src="banner"
      :aspect-ratio="device === 'H5' ? 2.5 : 3.2"
    />
    <v-container class="tw-overflow-auto tw-px-8 tw-py-0 lg:tw-w-4/5">
      <ui-tabs class="lg:tw-w-11/12" />
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <template #default>
            <v-card class="tw-p-4 lg:tw-max-h-full">
              <component :is="Component" :key="route.path" />
            </v-card>
          </template>
        </transition>
      </router-view>
    </v-container>
  </div>
</template>

<script setup>
import compileStyle from '@topic-front-stage-components/utils/compile-styles-from-backend';
import UiTabs from '@topic-front-stage-components/front-stage/ui-tabs';

const { device } = storeToRefs(useDeviceStore());
const { currentIndexStyle } = storeToRefs(useAsyncRoutesStore());
const banner = computed(
  () =>
    currentIndexStyle.value?.[`banner${device.value}`] ||
    currentIndexStyle.value?.bannerPC
);
const bg = computed(
  () =>
    currentIndexStyle.value?.[`bg${device.value}`] ||
    currentIndexStyle.value?.bgPC
);
const routeName = 'index';
const redirect = () =>
  $router.replace({
    name: $router.options.routes.find(({ name }) => name === routeName)
      .children[0]?.name
  });

onMounted(async () => {
  useRoute().name === routeName && redirect();
});
</script>
