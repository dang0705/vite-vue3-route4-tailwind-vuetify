const l={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},a=t=>t.replace(/&(lt|gt|nbsp|amp|quot);/gi,(e,s)=>l[s]),c=t=>t.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi)||[],p=t=>t.replace(/(<\/?slot.*?>)/gi,""),m=t=>c(a(t)).map(e=>({content:p(e)})),o=document.createElement("template");let n=[];const r=t=>{o.innerHTML=t=a(t),o.innerHTML+="<style>*{margin: 0;padding: 0;}</style>";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(o.content.cloneNode(!0))}}return n=(t.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi)||[]).map(s=>({content:s.replace(/(<\/?slot.*?>)/gi,"")})),!customElements.get("web-template")&&customElements.define("web-template",e),{slots:n}},i=t=>Object.prototype.toString.call(t).replace(/\[|\s|object|\]/g,""),g={props:{value:{type:[String,Array,Object],default:""}},data:()=>({slots:[]}),created(){if(i(this.value)==="String"){const{slots:t}=r(this.value);this.slots=t}}};export{g as b,m as c,a as e};