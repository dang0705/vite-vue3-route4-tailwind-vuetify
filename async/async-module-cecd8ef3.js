import{F as $,A as b,S as _}from"./async-module-2d8ca9ba.js";import{u as k}from"./async-module-9f6a1234.js";import"./async-module-67e99e1b.js";import{j as T,k as x}from"./async-module-cb235303.js";import{Z as w,_ as E,$ as h,X as g,a0 as S,E as n,a4 as v,aa as l,u as s,a5 as m,a9 as C}from"./async-module-41637851.js";const j={lt:"<",gt:">",amp:"&",quot:'"'},N=t=>t.replace(/&(lt|gt|amp|quot);/gi,(e,o)=>j[o]),V=t=>t.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi)||[],A=t=>t.replace(/(<\/?slot.*?>)/gi,""),q=t=>V(N(t)).map(e=>({content:A(e)})),p=document.createElement("template");let y=[];const B=t=>{p.innerHTML=t=N(t),p.innerHTML+="<style>*{margin: 0;padding: 0;} img{max-width: 100%;height: auto}</style>";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0))}}return y=(t.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi)||[]).map(o=>({content:o.replace(/(<\/?slot.*?>)/gi,"")})),!customElements.get("web-template")&&customElements.define("web-template",e),{slots:y}},H=t=>Object.prototype.toString.call(t).replace(/\[|\s|object|\]/g,""),c={__name:"ui-slot-default-content",props:{name:{type:String,default:""},content:{type:String,default:""}},setup(t){return(e,o)=>(w(),E(x,null,{default:h(()=>[g(S(t.name)+" ",1),n(T,{activator:"parent",location:"start"},{default:h(()=>[g(S(t.content||t.name),1)]),_:1})]),_:1}))}},L={class:"topic-layout tw-relative tw-flex tw-w-full !tw-flex-row tw-items-center tw-justify-center"},M={class:"tw-flex tw-w-full tw-flex-col tw-justify-center"},D={__name:"topic-layout",props:{slotName:$(),slots:b()},setup(t){const e=t,o=e.slotName({dir:"left"}),r=e.slotName({dir:"top"}),d=e.slotName({dir:"right"}),f=e.slotName({dir:"bottom"}),i=a=>{var u;return(u=e.slots)==null?void 0:u.includes(e.slotName({dir:a}))};return(a,u)=>(w(),v("div",L,[i("left")?l(a.$slots,s(o),{key:0,class:"left"},()=>[n(c,{name:s(o)},null,8,["name"])]):m("",!0),C("div",M,[i("top")?l(a.$slots,s(r),{key:0},()=>[n(c,{name:s(r)},null,8,["name"])]):m("",!0),l(a.$slots,"default"),i("bottom")?l(a.$slots,s(f),{key:1},()=>[n(c,{name:s(f)},null,8,["name"])]):m("",!0)]),i("right")?l(a.$slots,s(d),{key:1,class:"right"},()=>[n(c,{name:s(d)},null,8,["name"])]):m("",!0)]))}},I={props:{value:{type:[String,Array,Object],default:""},componentKey:_()},components:{UiSlotDefaultContent:c,UiLayout:D},data(){const{name:t}=this.$route;return{name:t,slots:[],key:this.componentKey,slotSuffix:`${t==="home"?"":`${t}-`}${this.componentKey}-slot`}},created(){const t=k();if(H(this.value)==="String"){const{slots:e}=B(this.value);this.slots=e,e.forEach((o,r)=>t.addSlot(this.slotName({index:r}),this.name))}},methods:{slotName({index:t,dir:e}){return`${this.slotSuffix}-${t>=0?t+1:e}`}}};export{I as b,q as c,N as e};