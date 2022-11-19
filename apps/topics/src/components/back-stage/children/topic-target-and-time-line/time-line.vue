<template>
  <ui-steps>
    <div
      v-for="({ content }, whichSlot) in slots"
      :slot="`slot-${whichSlot + 1}`"
      :key="whichSlot"
    >
      <slot :name="`time-line-slot-${whichSlot + 1}`" :content="content">
        {{ content }}
      </slot>
    </div>
  </ui-steps>
</template>

<script setup>
import publicProps from '@topics-components/mixins/props';
import { defineCustomElement } from 'vue';
import { escape2Html, getSlots } from '@topics-components/utils/use-slots';

const props = defineProps(publicProps);

let template = '<ul>';
const initTemplate = () => {
  const {
    steps: { configs, value }
  } = props.value;
  configs.forEach(({ color: { bg, text }, content }) => {
    template += `<li class='steps' style='background-color: ${bg};color: ${text}'>${escape2Html(
      content
    )}</li>`;
  });
  template += '</ul>';
  return getSlots(escape2Html(template));
};
const slots = initTemplate();

const TimeLine = defineCustomElement({
  props: {},
  emits: {},
  template,
  styles: [
    'p{margin:0;padding:0}',
    'ul{margin:0;padding:0}',
    'li{list-style:none}',
    '.steps{border-radius: 10px;padding:10px 20px}',
    '.steps +.steps{margin-top: 20px}'
  ]
});
customElements.define('ui-steps', TimeLine);
</script>
