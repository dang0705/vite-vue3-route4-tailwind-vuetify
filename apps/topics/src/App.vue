<template>
  <v-app :class="[appClassName]" v-resize="debounce(onResize, 100)">
    <v-app-bar flat>
      <template #prepend>
        <v-img :src="globalImages.top" width="300" cover />
      </template>
    </v-app-bar>
    <v-main v-if="topicIdOrName">
      <router-view />
    </v-main>
    <v-overlay
      v-model="showAlert"
      :scrim="false"
      width="100%"
      height="100%"
      z-index="999"
      contained
      scroll-strategy="block"
    >
      <v-alert
        v-model="showAlert"
        prominent
        type="error"
        varaint="text"
        rounded
        position="fixed"
        width="100%"
        max-width="500px"
        closable
        location="center center"
        border="start"
        variant="tonal"
      >
        <v-alert-title>系统错误</v-alert-title>
        {{ errMsg }}
      </v-alert>
    </v-overlay>
  </v-app>
</template>
<script setup>
const showAlert = ref(false);
const errMsg = ref('');
const topicIdOrName = topicName;
const catchStatus = () => {
  useBus.on('err', (msg) => {
    showAlert.value = true;
    errMsg.value = msg;
  });
  useBus.on('loading', (isLoading) => (loading.value = isLoading));
};
catchStatus();

const checkTopicId = async () => {
  if (!topicName) {
    showAlert.value = true;
    errMsg.value =
      'There is no topic id or topic name in url path,check the url path first,please';
  }
};
checkTopicId();
import { useDisplay } from 'vuetify';
import debounce from '@common-utils/debounce';
import { useIsPreviewStore } from '@topics-store/is-preview';
const $deviceStore = useDeviceStore();

const $vuetifyDisplay = useDisplay();
const { proxy } = getCurrentInstance();
const { device, threshold } = storeToRefs($deviceStore);

const loading = ref(false);
const globalImages = ref({});
const appClassName = computed(
  () =>
    `${$appName} ${$appName}_${topicName} ${device.value} ${useRoute().name} ${
      useIsPreviewStore().isPreview ? 'preview' : ''
    }`
);

const onResize = () => $deviceStore.setDevice($vuetifyDisplay.name.value);
// console.log($vuetifyTheme, theme);
// vuetifyDynamicChangeTheme({ theme: vuetifyTheme });
onMounted(async () => {
  globalImages.value = useGlobalImagesStore().globalImages =
    await proxy.$mappingImages({
      common: 'common',
      project: topicName,
      device: device.value
    });
});
</script>
<style>
.preview {
  a {
    //pointer-events: none;
  }
}
</style>
