System.register(["./async-module-6a75a392-legacy.js","./async-module-a1285373-legacy.js","./async-module-c5a7bb54-legacy.js"],(function(t){"use strict";var e,n,o,s,l,i,r,c,a,p,d,u,f,g,m;return{setters:[function(t,e){},function(t){e=t.b,n=t.e,o=t.c},function(t){s=t.ac,l=t.Z,i=t.a4,r=t.aa,c=t.a9,a=t.a5,p=t.F,d=t.a7,u=t.u,f=t.g,g=t.X,m=t.a0}],execute:function(){var y={class:"topic-target-and-line tw-flex tw-justify-center"},b={key:0},x={class:"tw-w-full tw-max-w-3xl tw-flex-col"},v={key:0},w=["slot"],h={key:1},$={key:1},j={mixins:[e]};t("default",Object.assign(j,{__name:"topic-time-line",setup:function(t){var e,j='<ul style="margin: 0;padding: 0;">',k=((e=f().proxy.value.configs).forEach((function(t,o){var s=t.color,l=s.bg,i=s.text,r=t.content;j+="<li class='steps'\n                     style='background-color: ".concat(l,";\n                            color: ").concat(i,";\n                            border-color:").concat(l,";\n                            list-style:none;\n                            position:relative;\n                            justify-content:center;\n                            align-items:center;\n                            flex-direction:column;\n                            display: flex;\n                            border-radius: 6px;\n                            padding:20px 10px'>\n\n ").concat(n(r)).concat(o<e.length-1?'<i style="position:absolute;bottom:-11px;border-top:12px;border-top-color:inherit;border-top-style:solid;border-left:10px solid transparent;border-right:10px solid transparent;width:0;height:0;"></i>':"","</li>")})),o(j+="</ul>")),E=s({props:{},emits:{},template:j,styles:["p{margin:0;padding:0}",".steps{border-radius: 10px;padding:10px}",".steps +.steps{margin-top: 24px}"]});return!customElements.get("web-steps")&&customElements.define("web-steps",E),function(t,e){return l(),i("div",y,[t.$slots.left?(l(),i("div",b,[r(t.$slots,"left")])):c("",!0),a("div",x,[t.$slots.top?(l(),i("div",v,[r(t.$slots,"top")])):c("",!0),a("web-steps",null,[(l(!0),i(p,null,d(u(k),(function(e,n){var o=e.content;return l(),i("div",{slot:"slot-".concat(n+1),key:n},[r(t.$slots,"time-line-slot-".concat(n+1),{content:o},(function(){return[g(m(o),1)]}))],8,w)})),128))]),t.$slots.bottom?(l(),i("div",h,[r(t.$slots,"bottom")])):c("",!0)]),t.$slots.right?(l(),i("div",$,[r(t.$slots,"right")])):c("",!0)])}}}))}}}));