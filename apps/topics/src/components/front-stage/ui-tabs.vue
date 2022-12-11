<template>
  <ul
    class="tw-color tw-bg-white tw-fixed tw-bottom-0 tw-left-0 tw-flex tw-w-full tw-items-center tw-shadow md:tw-static md:tw-shadow-none lg:tw-w-fit"
  >
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
          'md:tw-text-base',
          'md:tw-h-11',
          'lg:tw-cursor-pointer',
          'tw-flex',
          'tw-flex-col',
          'tw-justify-center',
          'tw-h-14',
          'tw-flex-1',
          'md:tw-flex-none',
          'tw-text-center',
          'tw-text-xs',
          'tw-transition-all',
          {
            'md:tabs-active-md': isActive,
            'tabs-active-sm': isActive
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
