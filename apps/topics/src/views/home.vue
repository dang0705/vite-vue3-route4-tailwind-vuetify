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
        :is="isComponent(key)"
        v-for="{ key, value } in components"
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
const homeSlots = ['target-slot-1', 'target-slot-2', 'time-line-slot-1'];

let components = ref([]);
let homePageStyle = ref({});
let banner = ref('');
const $device = useDeviceStore();
const initHomePage = async () => {
  try {
    const {
      // title,
      pageTitle,
      components: comp,
      bannerPC,
      bannerH5,
      bg
    } = await $http.get(new URL('../../mock/data.json', import.meta.url).href, {
      mock: true
    });
    document.title = pageTitle;
    banner.value = useDeviceStore().device === 'H5' ? bannerH5 : bannerPC;
    components.value = comp;
    homePageStyle.value = bgType(bg);
  } catch (e) {
    console.log(e);
  }
};

const isComponent = (key) => `topic-${cf(key)}`;

onMounted(async () => {
  initHomePage();
});
</script>
