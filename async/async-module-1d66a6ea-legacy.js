!function(){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(e)}System.register([],(function(e){"use strict";return{execute:function(e,t){var n=function(e){return function(e){return!!e&&"object"===r(e)}(e)&&!function(r){var e=Object.prototype.toString.call(r);return"[object RegExp]"===e||"[object Date]"===e||function(r){return r.$$typeof===o}(r)}(e)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(r,e){return!1!==e.clone&&e.isMergeableObject(r)?y((t=r,Array.isArray(t)?[]:{}),r,e):r;var t}function u(r,e,t){return r.concat(e).map((function(r){return c(r,t)}))}function i(r){return Object.keys(r).concat(function(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter((function(e){return r.propertyIsEnumerable(e)})):[]}(r))}function a(r,e){try{return e in r}catch(t){return!1}}function f(r,e,t){var n={};return t.isMergeableObject(r)&&i(r).forEach((function(e){n[e]=c(r[e],t)})),i(e).forEach((function(o){(function(r,e){return a(r,e)&&!(Object.hasOwnProperty.call(r,e)&&Object.propertyIsEnumerable.call(r,e))})(r,o)||(a(r,o)&&t.isMergeableObject(e[o])?n[o]=function(r,e){if(!e.customMerge)return y;var t=e.customMerge(r);return"function"==typeof t?t:y}(o,t)(r[o],e[o],t):n[o]=c(e[o],t))})),n}function y(r,e,t){(t=t||{}).arrayMerge=t.arrayMerge||u,t.isMergeableObject=t.isMergeableObject||n,t.cloneUnlessOtherwiseSpecified=c;var o=Array.isArray(e);return o===Array.isArray(r)?o?t.arrayMerge(r,e,t):f(r,e,t):c(e,t)}y.all=function(r,e){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce((function(r,t){return y(r,t,e)}),{})};e("c",y)}}}))}();