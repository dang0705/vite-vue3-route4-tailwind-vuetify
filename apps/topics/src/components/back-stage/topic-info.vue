<template>
  <web-template>
    <div
      v-for="({ content }, index) in slots"
      :slot="`slot-${index + 1}`"
      :key="index"
    >
      <slot :name="`info-slot-${index + 1}`" :content="content">
        <v-btn>
          info-slot-{{ index + 1 }}
          <v-tooltip activator="parent" location="start">{{
            content
          }}</v-tooltip>
        </v-btn>
      </slot>
    </div>
  </web-template>
</template>

<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
