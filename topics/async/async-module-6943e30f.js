import"./async-module-134258d5.js";import{b as u,e as g,c as f}from"./async-module-823b47d6.js";import{ac as b,Z as e,a4 as s,aa as i,a9 as n,a5 as p,F as _,a7 as y,u as $,g as h,X as x,a0 as k}from"./async-module-dbbfdeee.js";const v={class:"topic-target-and-line tw-flex tw-justify-center"},w={key:0},E={class:"tw-w-full tw-max-w-3xl tw-flex-col"},T={key:0},j=["slot"],B={key:1},C={key:1},F={mixins:[u]},D=Object.assign(F,{__name:"topic-time-line",setup(N){let r='<ul style="margin: 0;padding: 0;">';const d=(()=>{const{configs:t}=h().proxy.value;return t.forEach(({color:{bg:a,text:l},content:o},m)=>{r+=`<li class='steps'
                     style='background-color: ${a};
                            color: ${l};
                            border-color:${a};
                            list-style:none;
                            position:relative;
                            justify-content:center;
                            align-items:center;
                            flex-direction:column;
                            display: flex;
                            border-radius: 6px;
                            padding:20px 10px'>

 ${g(o)}${m<t.length-1?'<i style="position:absolute;bottom:-11px;border-top:12px;border-top-color:inherit;border-top-style:solid;border-left:10px solid transparent;border-right:10px solid transparent;width:0;height:0;"></i>':""}</li>`}),r+="</ul>",f(r)})(),c=b({props:{},emits:{},template:r,styles:["p{margin:0;padding:0}",".steps{border-radius: 10px;padding:10px}",".steps +.steps{margin-top: 24px}"]});return!customElements.get("web-steps")&&customElements.define("web-steps",c),(t,a)=>(e(),s("div",v,[t.$slots.left?(e(),s("div",w,[i(t.$slots,"left")])):n("",!0),p("div",E,[t.$slots.top?(e(),s("div",T,[i(t.$slots,"top")])):n("",!0),p("web-steps",null,[(e(!0),s(_,null,y($(d),({content:l},o)=>(e(),s("div",{slot:`slot-${o+1}`,key:o},[i(t.$slots,`time-line-slot-${o+1}`,{content:l},()=>[x(k(l),1)])],8,j))),128))]),t.$slots.bottom?(e(),s("div",B,[i(t.$slots,"bottom")])):n("",!0)]),t.$slots.right?(e(),s("div",C,[i(t.$slots,"right")])):n("",!0)]))}});export{D as default};
