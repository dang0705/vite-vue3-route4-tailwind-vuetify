<template>
  <ui-layout :slot-name="slotName">
    <web-template>
      <div
        v-for="({ content }, index) in slots"
        :slot="`slot-${index + 1}`"
        :key="index"
      >
        <slot :name="slotName({ index })" :content="content">
          <ui-slot-default-content
            :name="slotName({ index })"
            :content="content"
          />
        </slot>
      </div>
    </web-template>
  </ui-layout>
</template>

<script>
import backStageMixins from '@topic-front-stage-components/mixins/back-stage-comp-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
