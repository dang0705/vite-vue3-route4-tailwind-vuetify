<template>
  <v-layout :class="[appClassName, 'md:tw-text-primary']">
    <v-app-bar flat>
      <template #image>
        <v-img :src="globalImages.top" width="100" cover />
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
import { useDisplay } from "vuetify";
const ss = sessionStorage;
const { device, setDevice } = useDeviceStore();
const { addRoute } = useAsyncRoutesStore();
const showDialog = ref(false);

let loading = ref(false);
let errMsg = ref("");
let globalImages = ref({});

setDevice(useDisplay().name.value);

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
      eventName: useTopicNameStore().topicName,
      device,
    });
  catchStatus();
});
</script>
