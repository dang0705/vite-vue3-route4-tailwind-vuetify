const arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' };

export const escape2Html = (str) =>
  str.replace(/&(lt|gt|nbsp|amp|quot);/gi, (_, t) => arrEntities[t]);

export const matchSlots = (str) =>
  str.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi) || [];

export const getSlotContent = (slot) => slot.replace(/(<\/?slot.*?>)/gi, '');

export const getSlots = (str) =>
  matchSlots(escape2Html(str)).map((slot) => ({
    content: getSlotContent(slot)
  }));
