!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,i(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,t)},o(t)}function r(t,e,n){return r=u()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&c(r,n.prototype),r},r.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}System.register(["./async-module-b3167c01-legacy.js","./async-module-7c1e4148-legacy.js","./async-module-bb5034dd-legacy.js","./async-module-c5200140-legacy.js","./async-module-d0519129-legacy.js"],(function(t){"use strict";var r,l,a,f,s,p,y,m,d,b,h,v,g,w,j,S,O;return{setters:[function(t){r=t.F,l=t.A,a=t.S},function(t){f=t.u},function(t,e){},function(t){s=t.j,p=t.k},function(t){y=t.Z,m=t._,d=t.$,b=t.X,h=t.a0,v=t.E,g=t.a4,w=t.aa,j=t.u,S=t.a5,O=t.a9}],execute:function(){var _={lt:"<",gt:">",amp:"&",quot:'"'},x=t("e",(function(t){return t.replace(/&(lt|gt|amp|quot);/gi,(function(t,e){return _[e]}))})),E=function(t){return t.replace(/(<\/?slot.*?>)/gi,"")},N=(t("c",(function(t){return(e=x(t),e.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi)||[]).map((function(t){return{content:E(t)}}));var e})),document.createElement("template")),P=[],k=function(t){N.innerHTML=t=x(t),N.innerHTML+="<style>*{margin: 0;padding: 0;} img{max-width: 100%;height: auto}</style>";var r=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(p,t);var o,r,l,a,f,s=(o=p,r=u(),function(){var t,e=i(o);if(r){var u=i(this).constructor;t=Reflect.construct(e,arguments,u)}else t=e.apply(this,arguments);return n(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).attachShadow({mode:"open"}).appendChild(N.content.cloneNode(!0)),t}return l=p,a&&e(l.prototype,a),f&&e(l,f),Object.defineProperty(l,"prototype",{writable:!1}),l}(o(HTMLElement));return P=(t.match(/<slot\b[^<]*(?:(?!<\/slot>)<[^<]*)*<\/slot>/gi)||[]).map((function(t){return{content:t.replace(/(<\/?slot.*?>)/gi,"")}})),!customElements.get("web-template")&&customElements.define("web-template",r),{slots:P}},R={__name:"ui-slot-default-content",props:{name:{type:String,default:""},content:{type:String,default:""}},setup:function(t){return function(e,n){return y(),m(p,null,{default:d((function(){return[b(h(t.name)+" ",1),v(s,{activator:"parent",location:"start"},{default:d((function(){return[b(h(t.content||t.name),1)]})),_:1})]})),_:1})}}},T={class:"topic-layout tw-relative tw-flex tw-w-full !tw-flex-row tw-items-center tw-justify-center"},$={class:"tw-flex tw-w-full tw-flex-col tw-justify-center"},M={__name:"topic-layout",props:{slotName:r(),slots:l()},setup:function(t){var e=t,n=e.slotName({dir:"left"}),o=e.slotName({dir:"top"}),r=e.slotName({dir:"right"}),u=e.slotName({dir:"bottom"}),c=function(t){var n;return null===(n=e.slots)||void 0===n?void 0:n.includes(e.slotName({dir:t}))};return function(t,e){return y(),g("div",T,[c("left")?w(t.$slots,j(n),{key:0,class:"left"},(function(){return[v(R,{name:j(n)},null,8,["name"])]})):S("",!0),O("div",$,[c("top")?w(t.$slots,j(o),{key:0},(function(){return[v(R,{name:j(o)},null,8,["name"])]})):S("",!0),w(t.$slots,"default"),c("bottom")?w(t.$slots,j(u),{key:1},(function(){return[v(R,{name:j(u)},null,8,["name"])]})):S("",!0)]),c("right")?w(t.$slots,j(r),{key:1,class:"right"},(function(){return[v(R,{name:j(r)},null,8,["name"])]})):S("",!0)])}}};t("b",{props:{value:{type:[String,Array,Object],default:""},componentKey:a()},components:{UiSlotDefaultContent:R,UiLayout:M},data:function(){var t=this.$route.name;return{name:t,slots:[],key:this.componentKey,slotSuffix:"".concat("home"===t?"":"".concat(t,"-")).concat(this.componentKey,"-slot")}},created:function(){var t,e=this,n=f();if("String"===(t=this.value,Object.prototype.toString.call(t).replace(/\[|\s|object|\]/g,""))){var o=k(this.value).slots;this.slots=o,o.forEach((function(t,o){return n.addSlot(e.slotName({index:o}),e.name)}))}},methods:{slotName:function(t){var e=t.index,n=t.dir;return"".concat(this.slotSuffix,"-").concat(e>=0?e+1:n)}}})}}}))}();