<template>
  <ul
    class="tw-flex tw-basis-1/3 tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row"
  >
    <li
      v-for="(
        { color: { bg, text }, name, operation: { type, href, steps }, slot },
        which
      ) in value"
      :key="which"
      :class="[
        `tw-basis-1/${value.length}`,
        'tw-flex',
        'tw-mx-20',
        'tw-items-center',
        'tw-rounded-4xl'
      ]"
      :style="bgType(bg)"
    >
      <a
        v-text="bg.startsWith('http') ? '' : name"
        class="tw-block tw-w-full tw-py-4 tw-no-underline"
        :href="href"
        :target="href ? '_blank' : ''"
        :download="href"
        :style="{ color: text }"
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
