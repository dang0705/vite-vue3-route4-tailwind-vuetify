import kebabCase2BigCamelCase from "@common-utils/kebab-case-2-big-CamelCase";
const allSlots = import.meta.glob("/src/slots/**/**.vue");
const slots = [];

for (const slot in allSlots) {
  const name = kebabCase2BigCamelCase(
    slot.substring(slot.lastIndexOf("/") + 1, slot.lastIndexOf("."))
  );
  const component = allSlots[slot];
  slots.push({ name, component });
}

export default slots;
