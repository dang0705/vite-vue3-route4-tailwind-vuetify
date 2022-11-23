<template>
  <div
    class="topics-home tw-flex tw-flex-col tw-items-center tw-text-center"
    :style="homePageStyle"
  >
    <v-img
      :src="banner"
      width="100%"
      :aspect-ratio="$device.device === 'H5' ? 2.5 : 3.2"
    />
    <div class="tw-px-6">
      <component
        v-for="{ key, value } in components"
        class="tw-my-12"
        :is="isComponent(key)"
        :key="key"
        :value="value"
      >
        <template
          v-for="slotName in homeSlots"
          :key="slotName"
          #[slotName]="{ content }"
        >
          <component
            :is="homeSlots.length ? 'slots-in-home' : ''"
            :slot-name="slotName"
            :content="content"
            :slots="homeSlots"
          />
        </template>
      </component>
    </div>
  </div>
</template>

<script setup>
import cf from '@common-utils/capitalize-the-first-letter';
import bgType from '@topics-components/utils/bg-type';
// import jsonp from '@topics/utils/jsonp';
const homeSlots = ['target-slot-1', 'target-slot-2', 'time-line-slot-1'];

let components = ref([]);
let homePageStyle = ref({});
let banner = ref('');
const $device = useDeviceStore();
const initHomePage = async () => {
  const isH5 = useDeviceStore().device === 'H5';
  try {
    const {
      // title,
      pageTitle,
      components: comp,
      bannerPC,
      bannerH5,
      bgH5,
      bgPC
    } = await $http.get(new URL('../../mock/data.json', import.meta.url).href, {
      mock: true
    });
    document.title = pageTitle;
    banner.value = isH5 ? bannerH5 : bannerPC;
    components.value = comp;
    homePageStyle.value = bgType(isH5 ? bgH5 : bgPC);
  } catch (e) {
    console.log(e);
  }
};

const isComponent = (key) => `topic-${cf(key)}`;

onMounted(async () => {
  initHomePage();
  /*  window.module = {};
  window.exports = {};
  await jsonp('http://topic.qinglipai.cn:8899/dist/low-code-components.js');
  console.log(exports);*/
});
</script>
