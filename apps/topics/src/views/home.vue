<template>
  <div
    class="topics-home tw-flex tw-flex-col tw-items-center tw-text-center"
    :style="styleParsing(homePageStyle)"
  >
    <v-img
      width="100%"
      :src="banner"
      :aspect-ratio="$device.device === 'H5' ? 2.5 : 3.2"
    />
    <div class="tw-px-2 md:tw-px-12">
      <component
        :is="isComponent(key)"
        v-for="{ key, value, label } in components"
        :key="label"
        :value="value"
        :class="['tw-mx-auto', 'tw-mt-8', camelCase2KebabCase(key)]"
      >
        <template
          v-for="slotName in homeSlots"
          :key="slotName"
          #[slotName]="slotData"
        >
          <!--          各组件的集中定制-->
          <component
            :is="homeSlots.length ? 'slots-home' : ''"
            :slot-name="slotName"
            :slots="homeSlots"
            v-bind="slotData"
          />
        </template>
      </component>
    </div>
  </div>
</template>

<script setup>
import cf from '@common-utils/capitalize-the-first-letter';
import camelCase2KebabCase from '@common-utils/camelCase-2-kebab-case';
import styleParsing from '@topics-components/utils/style';
import slotsNames from '@topics/slots/slots-names';
// import jsonp from '@topics/utils/jsonp';

let components = ref([]);
let homePageStyle = ref({});
let banner = ref('');
let homeSlots = ref([]);
const $device = useDeviceStore();
const initHomePage = async () => {
  const isH5 = $device.device === 'H5';
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
    homePageStyle.value = styleParsing(isH5 ? bgH5 : bgPC);
  } catch (e) {
    console.log(e);
  }
};

const isComponent = (key) => `topic-${cf(key)}`;

onMounted(async () => {
  await initHomePage();
  homeSlots.value = (await slotsNames()).homeSlots;
});
</script>
