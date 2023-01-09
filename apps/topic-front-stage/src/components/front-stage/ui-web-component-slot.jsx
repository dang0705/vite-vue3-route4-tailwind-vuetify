// <template>
//   <div
//     v-for="({ content }, whichSlot) in slots"
//     :slot="`slot-${whichSlot + 1}`"
//     :key="whichSlot"
//   >
//     <slot :name="`${prefix}-slot-${whichSlot + 1}`" :content="content">
//       {{ content }}
//     </slot>
//   </div>
// </template>
//
// <script setup>
// const props = defineProps({
//   prefix: { type: String, default: '' },
//   slots: { type: Array, default: () => [] }
// });
// </script>

export default (props, { slots }) =>
  props.slots.map(({ content }, whichSlot) => (
    <div slot={`slot-${whichSlot + 1}`} key={whichSlot}>
      {slots[`${props.prefix}-slot-${whichSlot + 1}`]({ content })}
    </div>
  ));
