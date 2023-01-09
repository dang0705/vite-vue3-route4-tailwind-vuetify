// const arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' };
const arrEntities = { lt: '<', gt: '>', amp: '&', quot: '"' };

/**
 * @解析富文本中手动输入的html字符串
 * @param htmlTemplate--html模板字符串
 * @returns String
 */
export const escape2Html = (htmlTemplate) =>
  // htmlTemplate.replace(/&(lt|gt|nbsp|amp|quot);/gi, (_, t) => arrEntities[t]);
  htmlTemplate.replace(/&(lt|gt|amp|quot);/gi, (_, t) => arrEntities[t]);

/**
 * @获取已解析模板中的插槽slot数量
 * @param compliedTemplate--已解析的html模板字符串
 * @returns Array
 */
export const matchSlots = (compliedTemplate) =>
  compliedTemplate.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi) || [];

/**
 * @获取插槽中内容
 * @param slot--插槽内容
 * @returns String
 */
export const getSlotContent = (slot) => slot.replace(/(<\/?slot.*?>)/gi, '');

/**
 * @结合上面所有方法并返回可遍历的带有插槽内容的数组
 * @param htmlTemplate--html模板字符串
 * @returns {{content: String}[]}
 */
export const compileAndFormatSlots = (htmlTemplate) =>
  matchSlots(escape2Html(htmlTemplate)).map((slot) => ({
    content: getSlotContent(slot)
  }));
