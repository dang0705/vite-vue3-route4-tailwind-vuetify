<template>
  <ul
    class="tw-flex tw-basis-1/3 tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row"
  >
    <li
      v-for="(
        { bg, name, href, operationType = 0, steps = '' }, which
      ) in value"
      :key="which"
      :class="`tw-basis-1/${value.length}`"
      :style="bgType(bg)"
    >
      <a
        v-if="operationType === typeMapping.downLoad"
        :href="href"
        download
        v-text="bg.startsWith('http') ? '' : name"
      />
    </li>
  </ul>
</template>

<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
<script setup>
import bgType from '@topics-components/utils/bg-type';
const typeMapping = {
  downLoad: 0,
  click: 1
};
</script>
