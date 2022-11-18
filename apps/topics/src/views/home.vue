<template>
  <div class="topics-home tw-p-6 sm:tw-text-center">
    <v-img
      id="topic-home_header"
      :src="useGlobalImagesStore().globalImages.arrowDown"
    />
    <component
      v-for="{ key, value } in components"
      :key="key"
      :is="isComponent(key)"
      :value="value"
    >
      <template #info-slot-1>
        <v-text-field />
      </template>
      <template #info-slot-2>
        <v-select />
      </template>
    </component>
  </div>
</template>

<script setup>
import { useGlobalImagesStore } from "@topics-store/global-images";
import getAllComponents from "@topics-apis/get-all-components";

let components = ref([]);
const getAllComponentsData = async () => {
  // await $http.get(getAllComponents);
  components.value = [
    {
      key: "target-and-time-line",
      value:
        'time-line <slot name="slot-1">请前端老师处理</slot>ppp<slot name="slot-2">请前端老师处理</slot>',
    },
    {
      key: "info",
      value:
        'info <slot name="slot-1">请前端老师处理</slot>ppp<slot name="slot-2">请前端老师处理</slot>',
    },
  ];
};
const isComponent = (key) => `topic-${key}`;
onMounted(async () => {
  getAllComponentsData();
});
</script>
