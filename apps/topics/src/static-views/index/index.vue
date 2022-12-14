<template>
  <div
    class="tw-mx-auto tw-h-[calc(100%_-_3.5rem)] lg:tw-h-full"
    :style="compileStyle(bg)"
  >
    <v-img
      width="100%"
      :src="banner"
      :aspect-ratio="device === 'H5' ? 2.5 : 3.2"
    />
    <v-container class="tw-px-8 tw-py-0 lg:tw-w-4/5">
      <ui-tabs class="tw-mx-auto lg:tw-w-11/12" />
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <template #default>
            <v-card class="tw-p-4">
              <component :is="Component" :key="route.path" />
            </v-card>
          </template>
        </transition>
      </router-view>
    </v-container>
  </div>
</template>

<script setup>
import compileStyle from '@topics-components/utils/compile-styles-from-backend';
import UiTabs from '@topics-components/front-stage/ui-tabs';

const $device = useDeviceStore();
const $asyncRoutesStore = useAsyncRoutesStore();
const { device } = storeToRefs($device);
const { currentIndexStyle } = storeToRefs($asyncRoutesStore);
const banner = computed(
  () => currentIndexStyle.value?.[`banner${device.value}`]
);
const bg = computed(() => currentIndexStyle.value?.[`bg${device.value}`]);
const routeName = 'index';
const redirect = () =>
  $router.replace({
    name: $router.options.routes.find(({ name }) => name === routeName)
      .children[0]?.name
  });

onMounted(() => useRoute().name === routeName && redirect());
</script>
