function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),u=new N(o||[]);return n(a,"_invoke",{value:O(e,r,u)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function p(){}function v(){}function d(){}var h={};c(h,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(E([])));y&&y!==t&&r.call(y,i)&&(h=y);var g=d.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(n,i,a,u){var c=f(e[n],e,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==_typeof(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){o("next",e,a,u)}),(function(e){o("throw",e,a,u)})):t.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return o("throw",e,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function O(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var o=f(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,l;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function E(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=c(d,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,u,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=E,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}var Sentry=function(e){"use strict";var t;function r(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function n(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))}var o=function(e){return"object"===_typeof(e)&&null!==e&&!Array.isArray(e)};function i(e){for(var t=new WeakSet,r=function e(r,n){if("object"!==_typeof(r)||"object"!==_typeof(n))return n;if(t.has(n))return n;t.add(n);var o=Array.isArray(r)?_toConsumableArray(r):Object.assign({},r);if(Array.isArray(n))for(var i=0;i<n.length;i++)o[i]=i in r?e(r[i],n[i]):n[i];else for(var a in n){var u=n[a],c=o[a];o[a]="object"===_typeof(u)&&null!==u&&"object"===_typeof(c)&&null!==c?e(c,u):u}return t.delete(n),o},n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return o.forEach((function(t){e=r(e,t)})),e}var a=1024,u=Math.pow(a,2),c=Math.pow(a,3),s=20*u,f=function(e){return new Blob([e]).size},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return f(e)>t},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"!=typeof e||e<=0?"":e>c?"".concat((e/c).toFixed(t),"G"):e>u?"".concat((e/u).toFixed(t),"M"):e>a?"".concat((e/a).toFixed(t),"K"):"".concat(e,"B")};function v(){if(!window.fetch)return!1;try{return new Headers,new Request(""),new Response,(e=window.fetch)&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}catch(e){return!1}var e}var d=200,h=500,m=[400,429],y=1,g=1e3;function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n(this,void 0,void 0,_regeneratorRuntime().mark((function o(){var i,a,u,c,s,f=this;return _regeneratorRuntime().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return i=0,a="number"==typeof r.maxRetries?r.maxRetries:y,u="number"==typeof r.retryDelay?r.retryDelay:g,c=function(){return n(f,void 0,void 0,_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",fetch(e,t).then((function(e){if(!e.ok){var t=new Error("Failed with status ".concat(e.status));throw t.status=e.status,t}return e.json()})));case 1:case"end":return r.stop()}}),r)})))},s=function t(){return n(f,void 0,void 0,_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(++i<=a)){r.next=5;break}return r.abrupt("return",new Promise((function(e){setTimeout((function(){e(c())}),u)})).then((function(e){return e})).catch((function(){return t()})));case 5:throw new Error("Max retries (".concat(a,") exceeded for ").concat(e));case 6:case"end":return r.stop()}}),r)})))},o.abrupt("return",c().catch((function(e){if(e.status&&m.includes(e.status))throw e;return s()})));case 6:case"end":return o.stop()}}),o)})))}var w=["GET","POST","HEAD","PUT","OPTIONS","DELETE","CONNECT"];function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n(this,void 0,void 0,_regeneratorRuntime().mark((function i(){var a,u,c,s,f,l,p,v,h=this;return _regeneratorRuntime().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=0,u="number"==typeof r.maxRetries?r.maxRetries:y,c="number"==typeof r.retryDelay?r.retryDelay:g,s=o(t.headers)?t.headers:{},f=t.body,l="string"==typeof t.method&&w.includes(t.method)?t.method:"GET",p=function(){return n(h,void 0,void 0,_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){var n=new XMLHttpRequest;for(var o in n.onerror=function(e){return r(e)},n.onload=function(){if(4===n.readyState&&n.status===d&&n.response){var e=JSON.parse(n.response);t(e)}else{var o=new Error("Failed with status ".concat(n.status));o.status=n.status,r(o)}},n.open(l,e),s)Object.prototype.hasOwnProperty.call(s,o)&&n.setRequestHeader(o,s[o]);n.send(f)})));case 1:case"end":return t.stop()}}),t)})))},v=function t(){return n(h,void 0,void 0,_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(++a<=u)){r.next=5;break}return r.abrupt("return",new Promise((function(e){setTimeout((function(){e(p())}),c)})).then((function(e){return e})).catch((function(){return t()})));case 5:throw new Error("Max retries (".concat(u,") exceeded for ").concat(e));case 6:case"end":return r.stop()}}),r)})))},i.abrupt("return",p().catch((function(e){if(e.status&&m.includes(e.status))throw e;return v()})));case 9:case"end":return i.stop()}}),i)})))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n(this,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",v()?b(e,t,r):O(e,t,r));case 1:case"end":return n.stop()}}),n)})))}var _=(_defineProperty(t={},400,"Bad Request"),_defineProperty(t,429,"Too Many Requests"),_defineProperty(t,h,"Internal Server Error"),t);function j(e){return{code:0,data:e,message:""}}function N(e){var t=h;return e.status&&"number"==typeof e.status&&e.status<1e3&&_[e.status]&&(t=e.status),{code:t,data:null,message:_[t]}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var E,S,k,L,T,A={},P={},R={get exports(){return P},set exports(e){P=e}};function I(){return E||(E=1,R.exports=function(){function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function t(e){return e.charAt(0).toUpperCase()+e.substring(1)}function r(e){return function(){return this[e]}}var n=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],i=["fileName","functionName","source"],a=["args"],u=["evalOrigin"],c=n.concat(o,i,a,u);function s(e){if(e)for(var r=0;r<c.length;r++)void 0!==e[c[r]]&&this["set"+t(c[r])](e[c[r]])}s.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof s)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new s(e)}},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",r=this.getColumnNumber()||"",n=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+r+")":"[eval]:"+t+":"+r:n?n+" ("+e+":"+t+":"+r+")":e+":"+t+":"+r}},s.fromString=function(e){var t=e.indexOf("("),r=e.lastIndexOf(")"),n=e.substring(0,t),o=e.substring(t+1,r).split(","),i=e.substring(r+1);if(0===i.indexOf("@"))var a=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),u=a[1],c=a[2],f=a[3];return new s({functionName:n,args:o||void 0,fileName:u,lineNumber:c||void 0,columnNumber:f||void 0})};for(var f=0;f<n.length;f++)s.prototype["get"+t(n[f])]=r(n[f]),s.prototype["set"+t(n[f])]=function(e){return function(t){this[e]=Boolean(t)}}(n[f]);for(var l=0;l<o.length;l++)s.prototype["get"+t(o[l])]=r(o[l]),s.prototype["set"+t(o[l])]=function(t){return function(r){if(!e(r))throw new TypeError(t+" must be a Number");this[t]=Number(r)}}(o[l]);for(var p=0;p<i.length;p++)s.prototype["get"+t(i[p])]=r(i[p]),s.prototype["set"+t(i[p])]=function(e){return function(t){this[e]=String(t)}}(i[p]);return s}()),P}({get exports(){return A},set exports(e){A=e}}).exports=(S=I(),k=/(^|@)\S+:\d+/,L=/^\s*at .*(\S+:\d+|\(native\))/m,T=/^(eval@)?(\[native code])?$/,{parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(L))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(e){return e.stack.split("\n").filter((function(e){return!!e.match(L)}),this).map((function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var t=e.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),r=t.match(/ (\(.+\)$)/);t=r?t.replace(r[0],""):t;var n=this.extractLocation(r?r[1]:t),o=r&&t||void 0,i=["eval","<anonymous>"].indexOf(n[0])>-1?void 0:n[0];return new S({functionName:o,fileName:i,lineNumber:n[1],columnNumber:n[2],source:e})}),this)},parseFFOrSafari:function(e){return e.stack.split("\n").filter((function(e){return!e.match(T)}),this).map((function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),-1===e.indexOf("@")&&-1===e.indexOf(":"))return new S({functionName:e});var t=/((.*".+"[^@]*)?[^@]*)(?:@)/,r=e.match(t),n=r&&r[1]?r[1]:void 0,o=this.extractLocation(e.replace(t,""));return new S({functionName:n,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})}),this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(e){for(var t=/Line (\d+).*script (?:in )?(\S+)/i,r=e.message.split("\n"),n=[],o=2,i=r.length;o<i;o+=2){var a=t.exec(r[o]);a&&n.push(new S({fileName:a[2],lineNumber:a[1],source:r[o]}))}return n},parseOpera10:function(e){for(var t=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=e.stacktrace.split("\n"),n=[],o=0,i=r.length;o<i;o+=2){var a=t.exec(r[o]);a&&n.push(new S({functionName:a[3]||void 0,fileName:a[2],lineNumber:a[1],source:r[o]}))}return n},parseOpera11:function(e){return e.stack.split("\n").filter((function(e){return!!e.match(k)&&!e.match(/^Error created at/)}),this).map((function(e){var t,r=e.split("@"),n=this.extractLocation(r.pop()),o=r.shift()||"",i=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;o.match(/\(([^)]*)\)/)&&(t=o.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var a=void 0===t||"[arguments not available]"===t?void 0:t.split(",");return new S({functionName:i,args:a,fileName:n[0],lineNumber:n[1],columnNumber:n[2],source:e})}),this)}});var F=A,G=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,$="1.0.0",q="sentry.javascript.browser",C={dsn:"",enabled:!0,platform:"javascript",level:"error",serverName:window.location.hostname,environment:"production",envelope:!0},M={ip_address:"{{auto}}"},D=Object.assign({},M),H={},K={};function J(){return{method:"GET",url:window.location.href,headers:{Referer:window.document.referrer,"User-Agent":window.navigator.userAgent}}}function U(e){"object"===_typeof(e)&&(D=e?Object.assign(Object.assign({},D),e):Object.assign({},M))}function B(e,t){"string"==typeof e&&"string"==typeof t&&(H[e]=t)}function W(e){"string"==typeof e&&delete H[e]}function z(e,t){"string"==typeof e&&(K[e]=t)}function V(e){"string"==typeof e&&delete K[e]}function Y(){D=Object.assign({},M),H={},K={}}function X(){var e=C.envelope?"envelope":"store",t=function(){if(!C.dsn)return{uri:"",publicKey:"",projectId:""};var e=G.exec(C.dsn),t=e?e.slice(1):[],r=t[0],n=t[1],o=t[3],i=t[4]||"",a=t[5];return{uri:"".concat(r,"://").concat(o).concat(i,"/api/"),publicKey:n,projectId:a}}();return"".concat(t.uri).concat(t.projectId,"/").concat(e,"/?sentry_version=7&sentry_client=").concat(q).concat($,"&sentry_key=").concat(t.publicKey)}function Q(e){if(!o(e))return{url:"",headers:{},payload:""};var t=e.user,n=void 0===t?{}:t,a=e.request,u=void 0===a?{}:a,c=e.tags,s=void 0===c?{}:c,f=e.extra,l=void 0===f?{}:f,p=e.platform,v=void 0===p?C.platform:p,d=e.level,h=void 0===d?C.level:d,m=e.server_name,y=void 0===m?C.serverName:m,g=e.environment,b=void 0===g?C.environment:g,w=r(e,["user","request","tags","extra","platform","level","server_name","environment"]),O=Object.assign({platform:v,level:h,server_name:y,environment:b,timestamp:(new Date).toISOString(),user:Object.assign(Object.assign({},D),n),sdk:{name:q,version:$},request:i(J(),u),tags:Object.assign(Object.assign({},H),s),extra:i(K,l)},w);return{url:X(),headers:{Accept:"application/json","Content-Type":"application/json"},payload:JSON.stringify(O)}}function Z(e){if(!o(e))return{url:"",headers:{},payload:""};var t=e.user,n=void 0===t?{}:t,a=e.request,u=void 0===a?{}:a,c=e.tags,s=void 0===c?{}:c,f=e.extra,l=void 0===f?{}:f,p=e.type,v=void 0===p?"event":p,d=e.platform,h=void 0===d?C.platform:d,m=e.level,y=void 0===m?C.level:m,g=e.server_name,b=void 0===g?C.serverName:g,w=e.environment,O=void 0===w?C.environment:w,x=e.event_id,_=void 0===x?"":x,j=r(e,["user","request","tags","extra","type","platform","level","server_name","environment","event_id"]),N=Object.assign({platform:h,level:y,server_name:b,environment:O,type:v,user:Object.assign(Object.assign({},D),n),request:i(J(),u),tags:Object.assign(Object.assign({},H),s),extra:i(K,l)},j),E=Object.assign({sent_at:(new Date).toISOString(),sdk:{name:q,version:$}},_&&{event_id:_}),S={type:v},k=JSON.stringify(E)+"\n"+JSON.stringify(S)+"\n"+JSON.stringify(N)+"\n";return{url:X(),headers:{},payload:k}}function ee(e){return n(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var r,n,o,i;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=C.envelope?Z(e):Q(e),n=r.url,o=r.headers,i=r.payload,!l(i)){t.next=6;break}return t.abrupt("return",Promise.reject("The current size of the log to be uploaded has exceeded the ".concat(p(s)," limit")));case 6:return t.abrupt("return",x(n,{method:"POST",headers:o,body:i}).then(j).catch(N));case 7:case"end":return t.stop()}}),t)})))}return e.captureException=function(e,t){if(C.enabled&&"object"===_typeof(e)&&e instanceof Error){var n=F.parse(e),i=[];n.length>0&&(i=n.map((function(e){return{function:e.functionName||"",filename:e.fileName||"",abs_path:e.fileName||"",lineno:e.lineNumber,colno:e.columnNumber,in_app:!0}})));var a={values:[{type:e.name,value:e.message,stacktrace:{frames:i}}]};if(void 0===t)return ee({exception:a});if(o(t)){var u=t.exception,c=void 0===u?{}:u,s=r(t,["exception"]);return ee(Object.assign({exception:Object.assign(Object.assign({},a),c)},s))}}},e.captureMessage=function(e,t){if(C.enabled&&"string"==typeof e&&""!==e){var n={level:"info"};if(void 0===t)return ee(Object.assign({message:e},n));if(o(t)){var i=t.message,a=void 0===i?e:i,u=r(t,["message"]);return ee(Object.assign(Object.assign({message:a},n),u))}}},e.configureScope=function(e){"function"==typeof e&&e({setUser:U,setTag:B,removeTag:W,setExtra:z,removeExtra:V,clear:Y})},e.init=function(e){o(e)&&"string"==typeof e.dsn&&G.test(e.dsn)&&(C.dsn=e.dsn,"boolean"==typeof e.enabled&&(C.enabled=e.enabled),"boolean"==typeof e.envelope&&(C.envelope=e.envelope))},e}({});
