<template>
  <ul class="tw-color tw-bg tw-flex tw-items-center">
    <router-link
      v-for="{ name } in currentTabs"
      v-slot="{
        isActive,
        navigate,
        route: {
          meta: { title, icon }
        }
      }"
      :key="name"
      :to="{ name }"
      replace
      custom
    >
      <li
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
        @click="navigate"
      >
        {{ title }}
        <img v-if="icon" src="" alt="" />
      </li>
    </router-link>
  </ul>
</template>

<script setup>
import formattedRoute from '@topics/utils/formatted-route';
const {
  options: { routes }
} = useRouter();

let currentTabs = [
  routes.find(({ name }) => name === formattedRoute('home')),
  ...routes.find(({ name }) => name === formattedRoute('index')).children
];

const device = computed(() => useDeviceStore().device);
</script>
