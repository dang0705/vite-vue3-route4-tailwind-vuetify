const template = document.createElement("template");
let slots = [];
const compiler = (templateStr) => {
  template.innerHTML = templateStr
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  class Template extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).appendChild(
        template.content.cloneNode(true)
      );
    }
  }

  slots = (
    templateStr.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi) || []
  ).map((slot) => ({
    content: slot.replace(/(<\/?slot.*?>)/gi, ""),
  }));
  !customElements.get("ui-template") &&
    customElements.define("ui-template", Template);
  return { slots };
};
export default compiler;
