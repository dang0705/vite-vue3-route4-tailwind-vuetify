import k2Bc from '@common-utils/kebab-case-2-big-CamelCase';
import allSlots from '@topics-configs/custom-extends-sfc';

const slots = [];
for (const slot in allSlots) {
  const fileName = slot.substring(
    slot.lastIndexOf('/') + 1,
    slot.lastIndexOf('.')
  );
  const name = k2Bc(fileName);
  const component =
    allSlots[`/src/custom-extends/${topicName}/slots/${fileName}.vue`];

  component && slots.push({ name, component });
  /*    : isDev &&
      console.warn(
        `You maybe need to add a slot file,the path should be "custom-extends/${topicName}/slots/[ slots-home | slots-index ].vue"`
      );*/
}

const allSlotsNames = import.meta.glob('/src/custom-extends/**/slots/index.js');
export const getSlotsName = () =>
  allSlotsNames[`/src/custom-extends/${topicName}/slots/index.js`]();

export default slots;
