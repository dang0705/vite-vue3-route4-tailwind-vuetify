<template>
  <div
    class="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row xl:tw-w-4/5"
  >
    <a
      v-for="({ href, clickable }, which) in value"
      :key="which"
      :class="[
        'tw-my-4',
        'tw-w-full',
        'md:tw-mx-4',
        'lg:tw-my-0',
        {
          'lg:tw-cursor-not-allowed': !clickable
        }
      ]"
      href="javascript:;"
      @click.passive="handleNav(which, clickable)"
    >
      <v-img
        :src="href"
        :style="{
          flexBasis:
            $device.device !== 'H5'
              ? `calc(${(1 / (value.length + 0.1)) * 100}%)`
              : '60%'
        }"
      />
    </a>
  </div>
</template>

<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
<script setup>
import matchIsPreviewRoute from '@topics/utils/formatted-route';
const $router = useRouter();
const $route = useRoute();
const $device = useDeviceStore();
const handleNav = (type, clickable) =>
  clickable &&
  $router.push({
    name: matchIsPreviewRoute('index', $route),
    params: { type }
  });
</script>
