<template>
  <div id="operate-button">
    <ul
      class="tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row"
    >
      <li
        v-for="(
          {
            image = '',
            color: { bg, text } = {},
            name = '',
            operation: { type, href, steps } = {},
            slot
          },
          which
        ) in value"
        :key="which"
        :class="[
          'tw-basis-1',
          'tw-mt-6',
          'lg:tw-mt-0',
          'tw-w-4/5',
          'md:tw-w-2/4',
          'tw-flex',
          'tw-mx-10',
          'tw-items-center',
          'tw-rounded-4xl',
          'tw-cursor-pointer'
        ]"
        :style="{
          ...bgType(bg),
          flexBasis:
            $device.device === 'PC'
              ? `calc(${(1 / value.length) * 100}%)`
              : '100%'
        }"
      >
        <a
          v-if="!slot"
          :target="href ? '_blank' : ''"
          :download="!!href"
          :style="{ color: text }"
          :href="href || 'javascript:;'"
          class="tw-block tw-no-underline"
          @click.passive="handleButtonClick(type, steps)"
        >
          {{ bg.startsWith('http') ? '' : name }}
          <img v-if="image" :src="image" width="100%" alt="" />
        </a>
        <slot
          v-else
          :name="`button-slot-${which + 1}`"
          :style="{ image, color: { bg, text } }"
          :content="name"
        />
      </li>
    </ul>
    <v-dialog v-model="dialog" :max-width="400">
      <v-card>
        <v-toolbar color="primary" title="青梨派校级官方认证流程" />
        <v-list lines="three">
          <v-list-item v-for="item in progress" :key="item" :subtitle="item" />
        </v-list>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false"> 知道了 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
<script setup>
import bgType from '@topics-components/utils/bg-type';
const $device = useDeviceStore();
const dialog = ref(false);
const progress = ref([]);
const handleButtonClick = (type, steps) => {
  if (type === 'dialog') {
    dialog.value = true;
    !progress.length &&
      (progress.value = steps.split(/\n\n/).filter((step) => step));
  }
};
</script>
<style>
#operate-button li > * {
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
}
</style>
<style scoped>
:deep(.v-toolbar-title) {
  margin-left: 0;
}
:deep(.v-toolbar-title__placeholder) {
  text-align: center;
}
:deep(.v-list) {
  max-width: 90%;
  margin: 0 auto;
}
:deep(.v-list-item) {
  min-height: unset !important;
  display: block !important;
  border-radius: 8px;
  padding: 10px 0;
  border: 3px solid #fcb700;
  background-color: #fdfdc9;
  position: relative;
}
:deep(.v-list-item:not(:first-child)) {
  margin-top: 40px;
}
:deep(.v-list-item:not(:last-child)::after) {
  content: '';
  position: absolute;
  width: 47px;
  height: 16px;
  left: calc(50% - (47px / 2));
  bottom: -32px;
  background: url('/src/assets/images/common/arrow-down.png') no-repeat center /
    contain;
}
:deep(.v-list-item-subtitle) {
  line-height: 1.2 !important;
  font-size: 16px;
  text-align: center;
}
</style>
