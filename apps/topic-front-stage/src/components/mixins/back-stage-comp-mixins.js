import dataType from '@common-utils/data-type';
import { useSlotsStore } from '@topic-front-stage-store/slots-store';
import UiSlotDefaultContent from '@topic-front-stage-components/front-stage/ui-slot-default-content.vue';
import UiLayout from '@topic-front-stage-components/back-stage/topic-layout.vue';

export default {
  props: {
    value: { type: [String, Array, Object], default: '' },
    componentKey: STRING()
  },
  components: { UiSlotDefaultContent, UiLayout },

  data() {
    const { name } = this.$route;
    return {
      name,
      slots: [],
      key: this.componentKey,
      slotSuffix: `${name === 'home' ? '' : `${name}-`}${
        this.componentKey
      }-slot`
    };
  },
  created() {
    const $slotsStore = useSlotsStore();
    if (dataType(this.value) === 'String') {
      const { slots } = createWebComponent(this.value);
      this.slots = slots;
      slots.forEach((_, index) =>
        $slotsStore.addSlot(this.slotName({ index }), this.name)
      );
    }
  },
  methods: {
    slotName({ index, dir }) {
      return `${this.slotSuffix}-${index >= 0 ? index + 1 : dir}`;
    }
  }
};
