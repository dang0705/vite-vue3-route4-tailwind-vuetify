<template>
  <div
    class="topics-home tw-flex tw-flex-col tw-items-center tw-p-6 tw-text-center"
  >
    <component
      :is="isComponent(key)"
      v-for="{ key, value } in components"
      :key="key"
      :value="value"
    >
      <template v-for="slotName in homeSlots" :key="slotName" #[slotName]>
        <component
          :is="homeSlots.length ? 'slots-in-home' : ''"
          :slot-name="slotName"
          :slots="homeSlots"
        />
      </template>
    </component>
  </div>
</template>

<script setup>
import getAllComponents from '@topics-apis/get-all-components';
import cf from '@common-utils/capitalize-the-first-letter';
const homeSlots = ['target-slot-1', 'target-slot-2', 'time-line-slot-1'];

let components = ref([]);
const getAllComponentsData = async () => {
  try {
    components.value = await $http.get(
      new URL('../../mock/data.json', import.meta.url).href,
      {
        mock: true
      }
    );
  } catch (e) {}
};
const isComponent = (key) => `topic-${cf(key)}`;
onMounted(async () => {
  getAllComponentsData();
});
</script>
