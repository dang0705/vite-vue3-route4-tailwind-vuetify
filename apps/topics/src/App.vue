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
<script></script>
<script setup>
import { useDisplay } from "vuetify";
const showDialog = ref(false);
const eventName = useEventNameStore().eventName;
const device = useDeviceStore().device;
let loading = ref(false);
let errMsg = ref("");

const appClassName = computed(
  () =>
    `${$appName}_${useEventNameStore().eventName} ${useDeviceStore().device}`
);
const catchStatus = () => {
  useBus.on("err", (msg) => (errMsg = msg));
  useBus.on("loading", (isLoading) => (loading = isLoading));
};
let globalImages = ref({});
useDeviceStore().setDevice(useDisplay().name.value);
onMounted(async () => {
  globalImages.value = useGlobalImagesStore().globalImages =
    await getCurrentInstance().proxy.$mappingImages({
      common: "common",
      eventName,
      device,
    });
  catchStatus();
});
</script>
