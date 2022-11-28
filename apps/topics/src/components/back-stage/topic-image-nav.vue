<template>
  <div
    class="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row xl:tw-w-4/5"
  >
    <v-img
      v-for="({ href, clickable }, which) in value"
      :src="href"
      :style="{
        flexBasis:
          $device.device !== 'H5'
            ? `calc(${(1 / (value.length + 0.1)) * 100}%)`
            : '60%'
      }"
      class="tw-my-4 tw-w-full tw-cursor-pointer md:tw-mx-4 lg:tw-my-0"
      @click="handleNav(which, clickable)"
    />
  </div>
</template>

<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
<script setup>
const $route = useRouter();
const $device = useDeviceStore();
const handleNav = (type, clickable) =>
  clickable && $route.push({ name: 'index', params: { type } });
</script>
