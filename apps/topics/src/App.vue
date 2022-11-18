<template>
  <v-layout :class="[appClassName]">
    <v-app-bar flat>
      <template #prepend>
        <v-img :src="globalImages.top" width="300" cover />
      </template>
    </v-app-bar>
    <v-main>
      <v-img :src="globalImages.leaderPlanHeader" />
      <router-view />
    </v-main>
    <v-dialog v-model="showDialog">
      {{ errMsg }}
    </v-dialog>
  </v-layout>
</template>
<script setup>
import { useDisplay } from "vuetify";
const ss = sessionStorage;
const showDialog = ref(false);
const $deviceStore = useDeviceStore();
const { device } = storeToRefs($deviceStore);
$deviceStore.setDevice(useDisplay().name.value);

let loading = ref(false);
let errMsg = ref("");
let globalImages = ref({});

const appClassName = computed(
  () => `${$appName} ${$appName}_${useTopicNameStore().topicName} ${device}`
);

const catchStatus = () => {
  useBus.on("err", (msg) => (errMsg = msg));
  useBus.on("loading", (isLoading) => (loading = isLoading));
};

onMounted(async () => {
  globalImages.value = useGlobalImagesStore().globalImages =
    await getCurrentInstance().proxy.$mappingImages({
      common: "common",
      project: topicName,
      device: device.value,
    });
  catchStatus();
});
</script>
