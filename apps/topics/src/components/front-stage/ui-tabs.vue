<template>
  <ul class="tw-color tw-bg tw-flex tw-items-center">
    <router-link
      v-for="{ name } in currentTabs"
      :key="name"
      :to="{ name }"
      v-slot="{
        isActive,
        navigate,
        route: {
          meta: { title },
        },
      }"
      custom
    >
      <li
        @click="navigate"
        :class="[
          'tw-cursor-pointer',
          'tw-list-none',
          'tw-border',
          'tw-border-primary',
        ]"
      >
        {{ title }}
        <img v-if="device === 'tablet' || device === 'H5'" src="" alt="" />
      </li>
    </router-link>
  </ul>
</template>

<script setup>
import tabs from "@topics-routes/inner-tabs";
let currentTabs = tabs[useTopicNameStore().topicName];
const device = computed(() => useDeviceStore().device);
const $routesStore = useAsyncRoutesStore();
</script>
