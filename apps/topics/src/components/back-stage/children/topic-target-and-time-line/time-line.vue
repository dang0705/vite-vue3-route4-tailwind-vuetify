<template>
  <web-steps>
    <!--    <web-component-slot prefix="time-line" :slots="slots">{{
      $uiSlots
    }}</web-component-slot>-->
    <div
      v-for="({ content }, whichSlot) in slots"
      :slot="`slot-${whichSlot + 1}`"
      :key="whichSlot"
    >
      <slot :name="`time-line-slot-${whichSlot + 1}`" :content="content">
        {{ content }}
      </slot>
    </div>
  </web-steps>
</template>
<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>

<script setup>
import { defineCustomElement } from 'vue';
import { escape2Html, getSlots } from '@topics-components/utils/use-slots';

let template = '<ul>';

const initTemplate = () => {
  const {
    steps: { configs }
  } = getCurrentInstance().proxy.value;
  configs.forEach(({ color: { bg, text }, content }, which) => {
    template += `<li class='steps ' style='background-color: ${bg};color: ${text};border-color:${bg}'>${escape2Html(
      content
    )}${which < configs.length - 1 ? '<i></i>' : ''}</li>`;
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
    'li{list-style:none;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}',
    'li i{position:absolute;bottom:-11px;border-top:12px;border-top-color:inherit;border-top-style:solid;border-left:10px solid transparent;border-right:10px solid transparent;width:0;height:0;}',
    '.steps{border-radius: 10px;padding:10px}',
    '.steps +.steps{margin-top: 24px}'
  ]
});
customElements.define('web-steps', TimeLine);
</script>
