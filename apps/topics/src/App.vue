<template>
  <v-layout :class="[appClassName]">
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
  </v-layout>
</template>
<script setup>
import { useDisplay } from 'vuetify';
const ss = sessionStorage;
const showDialog = ref(false);
const $deviceStore = useDeviceStore();
const { device } = storeToRefs($deviceStore);
$deviceStore.setDevice(useDisplay().name.value);

const loading = ref(false);
const errMsg = ref('');
const globalImages = ref({});
const appClassName = ref('');

const catchStatus = () => {
  useBus.on('err', (msg) => (errMsg.value = msg));
  useBus.on('loading', (isLoading) => (loading.value = isLoading));
};

onMounted(async () => {
  appClassName.value = `${$appName} ${$appName}_${topicName} ${device.value}`;
  globalImages.value = useGlobalImagesStore().globalImages =
    await getCurrentInstance().proxy.$mappingImages({
      common: 'common',
      project: topicName,
      device: device.value
    });
  catchStatus();
});
</script>
