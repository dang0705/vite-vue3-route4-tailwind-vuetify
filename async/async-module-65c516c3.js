import"./async-module-67e99e1b.js";import{b as u,e as f,c as g}from"./async-module-cecd8ef3.js";import{ad as b,Y as h,Z as e,a4 as s,aa as l,a5 as n,a9 as d,F as y,a7 as $,u as N,g as w,E as _}from"./async-module-41637851.js";import"./async-module-2d8ca9ba.js";import"./async-module-9f6a1234.js";import"./async-module-a32d81cd.js";import"./async-module-f484b82a.js";import"./async-module-cb235303.js";const v={class:"topic-target-and-line tw-flex tw-items-center tw-justify-center"},k={key:0},E={class:"tw-w-full tw-max-w-3xl tw-flex-col"},j={key:0},B=["slot"],C={key:1},F={key:1},S={mixins:[u]},q=Object.assign(S,{__name:"topic-time-line",setup(T){let i='<ul style="margin: 0;padding: 0;">';const m=(()=>{const{configs:t}=w().proxy.value;return t.forEach(({style:{backgroundColor:a,color:p},content:r},o)=>{i+=`<li class='steps'
                     style='background-color: ${a};
                            color: ${p};
                            border-color:${a};
                            list-style:none;
                            position:relative;
                            justify-content:center;
                            align-items:center;
                            flex-direction:column;
                            display: flex;
                            border-radius: 6px;
                            padding:20px 10px'>

 ${f(r)}${o<t.length-1?'<i style="position:absolute;bottom:-11px;border-top:12px;border-top-color:inherit;border-top-style:solid;border-left:10px solid transparent;border-right:10px solid transparent;width:0;height:0;"></i>':""}</li>`}),i+="</ul>",g(i)})(),c=b({props:{},emits:{},template:i,styles:["p{margin:0;padding:0}",".steps{border-radius: 10px;padding:10px}",".steps +.steps{margin-top: 24px}"]});return!customElements.get("web-steps")&&customElements.define("web-steps",c),(t,a)=>{const p=h("ui-slot-default-content");return e(),s("div",v,[t.$slots[t.slotName({dir:"left"})]?(e(),s("div",k,[l(t.$slots,[t.slotName({dir:"left"})])])):n("",!0),d("div",E,[t.$slots[[t.slotName({dir:"top"})]]?(e(),s("div",j,[l(t.$slots,[t.slotName({dir:"top"})])])):n("",!0),d("web-steps",null,[(e(!0),s(y,null,$(N(m),({content:r},o)=>(e(),s("div",{slot:`slot-${o+1}`,key:o},[l(t.$slots,t.slotName({index:o}),{content:r},()=>[_(p,{name:t.slotName({index:o}),content:r},null,8,["name","content"])])],8,B))),128))]),t.$slots[[t.slotName({dir:"bottom"})]]?(e(),s("div",C,[l(t.$slots,[t.slotName({dir:"bottom"})])])):n("",!0)]),t.$slots[[t.slotName({dir:"right"})]]?(e(),s("div",F,[l(t.$slots,[t.slotName({dir:"right"})])])):n("",!0)])}}});export{q as default};
