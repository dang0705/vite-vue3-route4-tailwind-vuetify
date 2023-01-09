<template>
  <ui-layout :slot-name="slotName">
    <div id="operate-button">
      <ul
        class="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row lg:tw-justify-around"
      >
        <li
          v-for="(
            {
              image = '',
              style = {},
              name = '',
              operation: { type, href, steps } = {},
              slot
            },
            index
          ) in value"
          :key="index"
          :class="[
            'tw-mt-6',
            'lg:tw-mt-0',
            'tw-w-full',
            'tw-flex',
            'tw-items-center',
            'tw-rounded-4xl',
            'tw-cursor-pointer',
            'tw-max-w-xs',
            'md:tw-max-w-sm',
            {
              'tw-mx-3':
                $device.device === 'PC' && index && index < value.length - 1
            }
          ]"
          :style="{
            ...styleParsing(style)
          }"
          @click.passive="handleButtonClick(type, steps)"
        >
          <component
            :is="href ? 'a' : 'div'"
            v-if="!slot"
            :target="href ? '_blank' : ''"
            :download="!!href"
            :href="href || 'javascript:;'"
            style="color: inherit"
            class="tw-flex-shrink-0 tw-no-underline"
          >
            {{ name }}
            <img v-if="image" :src="image" width="100%" alt="" />
          </component>
          <slot
            v-else
            :name="slotName({ index })"
            :style="{ image, ...style }"
            :content="name"
          >
            <ui-slot-default-content :name="slotName({ index })" />
          </slot>
        </li>
      </ul>
      <v-dialog v-model="dialog" :max-width="400">
        <v-card>
          <v-toolbar color="primary" title="青梨派校级官方认证流程" />
          <v-list lines="three">
            <v-list-item
              v-for="item in progress"
              :key="item"
              :subtitle="item"
            />
          </v-list>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">
              知道了
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </ui-layout>
</template>

<script>
import backStageMixins from '@topic-front-stage-components/mixins/back-stage-comp-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
<script setup>
import styleParsing from '@topic-front-stage-components/utils/compile-styles-from-backend';
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<style scoped>
:deep(.v-toolbar-title) {
  margin-left: 0;
  &__placeholder {
    text-align: center;
  }
}
:deep(.v-list) {
  max-width: 90%;
  margin: 0 auto;
  .v-list-item-subtitle {
    line-height: 1.2 !important;
    font-size: 16px;
    text-align: center;
  }
  .v-list-item {
    min-height: unset !important;
    display: block !important;
    border-radius: 8px;
    padding: 10px 0;
    border: 3px solid #fcb700;
    background-color: #fdfdc9;
    position: relative;
    &:not(:first-child) {
      margin-top: 40px;
    }
    &:not(:last-child) {
      &::after {
        content: '';
        position: absolute;
        width: 47px;
        height: 16px;
        left: calc(50% - (47px / 2));
        bottom: -32px;
        background: url('/src/assets/images/common/arrow-down.png') no-repeat
          center / contain;
      }
    }
  }
}
</style>
