import { escape2Html } from '@topics-components/utils/use-slots';

const template = document.createElement('template');
let slots = [];

const compiler = (templateStr) => {
  template.innerHTML = templateStr = escape2Html(templateStr);
  class Template extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      );
    }
  }
  slots = (
    templateStr.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi) || []
  ).map((slot) => ({
    content: slot.replace(/(<\/?slot.*?>)/gi, '')
  }));
  !customElements.get('web-template') &&
    customElements.define('web-template', Template);
  return { slots };
};
export default compiler;
