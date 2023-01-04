<template>
  <ui-layout v-if="value.length" :slot-name="slotName">
    <div class="tw-items-center tw-text-center">
      微信扫二维码关注
      <span
        class="title"
        v-text="accounts"
        style="font-weight: bold; font-size: 18px"
      />
      ，获取最新活动信息！
      <div
        class="tw-mt-6 tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row lg:tw-items-start"
      >
        <ul
          class="tw-flex tw-w-fit tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row"
        >
          <li v-for="({ href }, which) in value" :key="which">
            <v-img :src="href" aspect-ratio="1" cover width="120" />
          </li>
        </ul>
        <div class="tw-ml-0 tw-list-item tw-list-none lg:tw-ml-8">
          <v-img :src="globalImages.logo" width="140" aspect-ratio="0.72" />
        </div>
      </div>
    </div>
  </ui-layout>
</template>
<script>
import backStageMixins from '@topics-components/mixins/back-stage-comp-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
<script setup>
const { value } = getCurrentInstance().proxy;
const { globalImages } = storeToRefs(useGlobalImagesStore());
const accounts = computed(() =>
  value.reduce(
    (prev, { name }, index) => `${prev}${index ? '、' : ''}${name}`,
    ''
  )
);
</script>
<style scoped>
:deep(ul) {
  border: 2px solid #1eaa39;
  position: relative;
  width: fit-content;
  height: fit-content;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    right: -20px;
    border-right: 18px solid transparent;
    border-bottom: 18px solid #1eaa39;
    bottom: 40px;
  }
}
</style>
<style>
.topics {
  .official-accounts {
    ul {
      li {
        & + li {
          margin-top: 12px;
          margin-left: 0;
        }
      }
    }
  }
  &.PC {
    .official-accounts {
      ul {
        li {
          & + li {
            margin-top: 0;
            margin-left: 12px;
          }
        }
      }
    }
  }
}
</style>
