<template>
  <div class="topic-target-and-line tw-flex tw-justify-center">
    <div v-if="$slots.left">
      <slot name="left" />
    </div>
    <div class="tw-flex-col">
      <div v-if="$slots.top"><slot name="top" /></div>
      <web-steps>
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
      <div v-if="$slots.bottom"><slot name="bottom" /></div>
    </div>
    <div v-if="$slots.right">
      <slot name="right" />
    </div>
  </div>
</template>
<script>
import backStageMixins from '@topics-components/mixins/back-stage-mixins';
export default {
  mixins: [backStageMixins]
};
</script>
<script setup>
import { defineCustomElement } from 'vue';
import {
  escape2Html,
  compileAndFormatSlots
} from '@topics-components/utils/html-compilers';

let template = '<ul style="margin: 0;padding: 0;">';

const initTemplate = () => {
  const { configs } = getCurrentInstance().proxy.value;

  configs.forEach(({ color: { bg, text }, content }, which) => {
    template += `<li class='steps'
                     style='background-color: ${bg};
                            color: ${text};
                            border-color:${bg};
                            list-style:none;
                            position:relative;
                            justify-content:center;
                            align-items:center;
                            flex-direction:column;
                            display: flex;
                            border-radius: 6px;
                            padding:20px 10px'>

 ${escape2Html(content)}${
      which < configs.length - 1
        ? '<i style="position:absolute;bottom:-11px;' +
          'border-top:12px;border-top-color:inherit;' +
          'border-top-style:solid;border-left:10px solid transparent;' +
          'border-right:10px solid transparent;width:0;height:0;"></i>'
        : ''
    }</li>`;
  });
  template += '</ul>';
  return compileAndFormatSlots(template);
};
const slots = initTemplate();

const TimeLine = defineCustomElement({
  props: {},
  emits: {},
  template,
  styles: [
    'p{margin:0;padding:0}',
    '.steps{border-radius: 10px;padding:10px}',
    '.steps +.steps{margin-top: 24px}'
  ]
});

!customElements.get('web-steps') &&
  customElements.define('web-steps', TimeLine);
</script>
