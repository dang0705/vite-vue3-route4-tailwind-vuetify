<template>
  <v-app :class="[appClassName]" v-resize.active="onResize">
    <v-app-bar flat :density="styleDependOnDevice.appBarDensity" ref="app-bar">
      <template #prepend>
        <v-img
          :src="globalImages.top"
          :width="styleDependOnDevice.logoWidth"
          cover
        />
      </template>
    </v-app-bar>
    <v-main scrollable tag="div" class="main">
      <router-view />
    </v-main>
    <v-overlay
      v-model="showAlert"
      width="100%"
      height="100%"
      scroll-strategy="block"
      close-on-content-click
    >
      <v-alert
        style="background-color: #fff"
        closable
        elevation="12"
        type="error"
        rounded
        position="fixed"
        width="100%"
        max-width="500px"
        location="center"
        border="start"
        variant="text"
      >
        <v-alert-title>系统错误</v-alert-title>
        {{ errMsg }}
      </v-alert>
    </v-overlay>
  </v-app>
</template>
<script setup>
import switchWhetherIsPreview from '@topics-configs/switch-whether-is-preview';
import { useDisplay, useTheme } from 'vuetify';
import debounce from '@common-utils/debounce';

const $deviceStore = useDeviceStore();
const $previewStore = useIsPreviewStore();
const showAlert = ref(false);
const errMsg = ref('');

const { isPreview } = storeToRefs($previewStore);

const catchStatus = () => {
  useBus.on('err', (msg) => {
    showAlert.value = true;
    errMsg.value = msg;
  });
  useBus.on('loading', (isLoading) => (loading.value = isLoading));
};

const { proxy } = getCurrentInstance();
const { device, threshold } = storeToRefs($deviceStore);
const loading = ref(false);
const globalImages = ref({});
const styleDependOnDevice = computed(() => ({
  appBarDensity: device.value === 'H5' ? 'compact' : 'default',
  logoWidth: device.value === 'H5' ? 200 : 300
}));

const appClassName = computed(
  () =>
    `${$appName} ${$appName}_${topicName} ${device.value} ${useRoute().name} ${
      isPreview.value ? 'preview' : ''
    }`
);
const { name } = useDisplay();
const onResize = () => $deviceStore.setDevice(name.value);

catchStatus();
$previewStore.isPreview === null &&
  ($previewStore.isPreview = isDev ? switchWhetherIsPreview : self !== top);

// console.log(useTheme().global);
onMounted(async () => {
  globalImages.value = useGlobalImagesStore().globalImages =
    await proxy.$mappingImages({
      common: 'common',
      project: topicName,
      device: device.value
    });

  if (isPreview.value) {
    const { default: subscribeParentEvent } = await import(
      '@topics/subscribe-iframe-event'
    );
    subscribeParentEvent();
    useBus.on('updatePreview', async () => location.reload());
    await nextTick();
    onResize();
  }
});
</script>
