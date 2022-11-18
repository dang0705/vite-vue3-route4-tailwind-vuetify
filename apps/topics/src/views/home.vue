<template>
  <div class="event-home tw-p-6 sm:tw-text-center">
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
// import vuetifyDynamicChangeTheme from "@common-config/vuetify-dynamic-change-theme";
import kebabCase2BigCamelCase from "@common-utils/kebab-case-2-big-CamelCase";

// getCurrentInstance().proxy.$mappingImages({ project, device });

let components = ref([]);
const getAllComponentsData = async () => {
  // await $http.get(getAllComponents);
  components.value = [
    {
      key: "topic-target-and-time-line",
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
const isComponent = (name) => `ui-${name}`;
// vuetifyDynamicChangeTheme({ theme: { primary: "#9aee85" } });
onMounted(async () => {
  getAllComponentsData();
});
</script>
