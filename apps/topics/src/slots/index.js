import k2Bc from '@common-utils/kebab-case-2-big-CamelCase';
const allSlots = import.meta.glob('/src/slots/**/**.vue');
const slots = [];
for (const slot in allSlots) {
  const fileName = slot.substring(
    slot.lastIndexOf('/') + 1,
    slot.lastIndexOf('.')
  );
  const name = k2Bc(fileName);
  const component =
    allSlots[`/src/slots/${topicName}/back-stage/${fileName}.vue`];

  component
    ? slots.push({ name, component })
    : console.warn(
        `You maybe need to add a slot file,the path should be "slots/${topicName}/back-stage/${fileName}.vue"`
      );
}
export default slots;
