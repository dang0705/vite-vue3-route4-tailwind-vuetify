<template>
  <div v-if="value">
    <web-template>
      <div
        v-for="({ content }, index) in slots"
        :slot="`slot-${index + 1}`"
        :key="index"
      >
        <slot :name="`info-slot-${index + 1}`" :content="content">{{
          content
        }}</slot>
      </div>
    </web-template>
  </div>
</template>

<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
