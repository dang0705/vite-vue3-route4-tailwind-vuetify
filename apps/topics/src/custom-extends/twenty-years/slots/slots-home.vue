<template>
  <v-text-field
    v-if="slotName === 'info-slot-1'"
    class="tw-w-48"
    :placeholder="content"
  />
  <v-select v-if="slotName === 'target-slot-2'" :placeholder="content" />
  <v-select v-if="slotName === 'time-line-slot-1'" :placeholder="content" />
  <div
    v-if="slotName === 'button-slot-3'"
    :style="{ color: style.color.text }"
    @click.passive="handleClick"
    v-text="content"
  />
</template>
<script>
import homeSlotsMixins from '@topics/custom-extends/mixins/home-slots-mixins';
export default {
  mixins: [homeSlotsMixins]
};
</script>
<script setup>
const handleClick = () => alert('slot 触发');
</script>
