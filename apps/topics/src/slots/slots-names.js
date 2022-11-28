const allSlotsNames = import.meta.glob('/src/slots/**/**/back-stage/index.js');
export default function () {
  return allSlotsNames[`/src/slots/${topicName}/back-stage/index.js`]();
}
