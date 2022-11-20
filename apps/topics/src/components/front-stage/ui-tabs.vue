<template>
  <ul class="tw-color tw-bg tw-flex tw-items-center">
    <router-link
      v-for="{ name } in currentTabs"
      :key="name"
      :to="{ name }"
      replace
      v-slot="{
        isActive,
        navigate,
        route: {
          meta: { title, icon }
        }
      }"
      custom
    >
      <li
        @click.passive="navigate"
        :class="[
          'md:tw-rounded-t-lg',
          'md:tw-w-24',
          'md:tw-mx-2',
          'md:tw-text-center',
          'md:tw-bg-yellow',
          'tw-py-2',
          'tw-cursor-pointer',
          {
            'md:active-red-white': isActive
          }
        ]"
      >
        {{ title }}
        <img v-if="icon" src="" alt="" />
      </li>
    </router-link>
  </ul>
</template>

<script setup>
import tabs from '@topics-routes/inner-tabs';
let currentTabs = tabs[useTopicNameStore().topicName];
console.log(currentTabs);
const device = computed(() => useDeviceStore().device);
const $routesStore = useAsyncRoutesStore();
</script>
