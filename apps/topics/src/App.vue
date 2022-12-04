<template>
  <v-app :class="[appClassName]" v-resize="debounce(onResize, 100)">
    <v-app-bar flat>
      <template #prepend>
        <v-img :src="globalImages.top" width="300" cover />
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-dialog v-model="showDialog">
      {{ errMsg }}
    </v-dialog>
  </v-app>
</template>
<script setup>
import { useDisplay } from 'vuetify';
import { useIsPreviewStore } from '@topics-store/is-preview';
import debounce from '@common-utils/debounce';
const $previewStore = useIsPreviewStore();

const $deviceStore = useDeviceStore();

const $vuetifyDisplay = useDisplay();
const { proxy } = getCurrentInstance();
const { device, threshold } = storeToRefs($deviceStore);

const ss = sessionStorage;
const showDialog = ref(false);

const loading = ref(false);
const errMsg = ref('');
const globalImages = ref({});

const catchStatus = () => {
  useBus.on('err', (msg) => (errMsg.value = msg));
  useBus.on('loading', (isLoading) => (loading.value = isLoading));
};

const onResize = () => $deviceStore.setDevice($vuetifyDisplay.name.value);

const appClassName = computed(
  () =>
    `${$appName} ${$appName}_${topicName} ${device.value} ${useRoute().name}`
);
onMounted(async () => {
  globalImages.value = useGlobalImagesStore().globalImages =
    await proxy.$mappingImages({
      common: 'common',
      project: topicName,
      device: device.value
    });
  catchStatus();
});
</script>
