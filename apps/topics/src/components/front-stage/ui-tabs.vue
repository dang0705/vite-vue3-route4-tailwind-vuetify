<template>
  <ul
    class="tw-color tw-bg-white md:tw-bg-trans tw-fixed tw-bottom-0 tw-left-0 tw-flex tw-w-full tw-items-center tw-shadow md:tw-static md:tw-shadow-none lg:tw-w-fit"
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
          'md:tw-bg-yellow',
          'md:tw-text-base',
          'md:tw-h-11',
          'md:tw-cursor-pointer',
          'tw-flex',
          'tw-flex-col',
          'tw-justify-center',
          'tw-items-center',
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
        <img
          v-if="icon && device === 'H5'"
          :src="icon"
          alt=""
          style="width: 20px; height: 20px"
        />
        {{ title }}
      </li>
    </router-link>
  </ul>
</template>

<script setup>
const $deviceStore = useDeviceStore();
const { device } = storeToRefs($deviceStore);
const {
  options: { routes }
} = useRouter();

let currentTabs = [
  routes.find(({ name }) => name === 'home'),
  ...routes.find(({ name }) => name === 'index').children
];
</script>
