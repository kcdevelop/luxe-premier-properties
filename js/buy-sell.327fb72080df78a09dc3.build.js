/*! For license information please see buy-sell.326fb72080df68a09dc3.build.js.LICENSE.txt */
(()=>{var e={830:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(294),o=r(697),i=r.n(o),u=function(e){return n.createElement("h1",{className:e.headingClass},e.headingText)};u.propTypes={headingClass:i().string.isRequired,headingText:i().string.isRequired};const a=u},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var u,a,s=o(e),c=1;c<arguments.length;c++){for(var l in u=Object(arguments[c]))r.call(u,l)&&(s[l]=u[l]);if(t){a=t(u);for(var f=0;f<a.length;f++)n.call(u,a[f])&&(s[a[f]]=u[a[f]])}}return s}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,u){if(u!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},408:(e,t,r)=>{"use strict";var n=r(418),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,a=60110,s=60112;t.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),u=f("react.provider"),a=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=g.prototype=new v;b.constructor=g,n(b,h.prototype),b.isPureReactComponent=!0;var _={current:null},O=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,i={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)O.call(t,n)&&!E.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:u,ref:a,props:i,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,r,n,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return u=u(s=e),e=""===n?"."+C(s,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),j(u,t,r,"",(function(e){return e}))):null!=u&&(S(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),t.push(u)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+C(a=e[c],c);s+=j(a,t,r,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)s+=j(a=a.value,t,r,l=n+C(a,c++),u);else if("object"===a)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,r){if(null==e)return e;var n=[],o=0;return j(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function k(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function x(){var e=R.current;if(null===e)throw Error(m(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(m(143));return e}},t.Component=h,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var i=n({},e.props),u=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=_.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)O.call(t,l)&&!E.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:o,type:e.type,key:u,ref:a,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=q,t.createFactory=function(e){var t=q.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:k}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return x().useCallback(e,t)},t.useContext=function(e,t){return x().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return x().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return x().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return x().useLayoutEffect(e,t)},t.useMemo=function(e,t){return x().useMemo(e,t)},t.useReducer=function(e,t,r){return x().useReducer(e,t,r)},t.useRef=function(e){return x().useRef(e)},t.useState=function(e){return x().useState(e)},t.version="17.0.2"},294:(e,t,r)=>{"use strict";e.exports=r(408)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(294),t=r(697),n=r.n(t),o=r(830),i=function(t){return e.createElement("section",{id:t.sectionID,className:"content display-flex direction-column justify-center"},e.createElement(o.Z,{headingClass:t.headingClass,headingText:t.headingBuy}),e.createElement("article",{className:"content display-flex direction-column"},t.contentBuyParagraphs.map((function(t,r){return e.createElement("p",{key:r},t)}))),e.createElement(o.Z,{headingClass:t.headingClass,headingText:t.headingSell}),e.createElement("article",{className:"content display-flex direction-column"},t.contentSellParagraphs.map((function(t,r){return e.createElement("p",{key:r},t)}))))};i.propTypes={sectionID:n().string.isRequired,contentBuyParagraphs:n().arrayOf(n().string.isRequired),contentSellParagraphs:n().arrayOf(n().string.isRequired)},i.defaultProps={sectionID:"interior-content",headingClass:"section-title",headingBuy:"BUY",headingSell:"SELL",contentBuyParagraphs:["Quod ii legunt saepius claritas est etiam processus dynamicus qui. Facit eorum claritatem Investigationes demonstraverunt lectores legere me lius sequitur mutationem consuetudium lectorum. Decima eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes in! Esse molestie consequat vel illum dolore eu feugiat nulla.","Processus dynamicus qui sequitur mutationem consuetudium lectorum mirum est notare quam littera gothica quam nunc. Esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero. Assum typi non habent claritatem insitam est usus legentis in iis qui facit. Vulputate velit eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit."],contentSellParagraphs:["Typi qui nunc nobis videntur parum, clari fiant sollemnes in. Consequat duis autem vel eum iriure dolor in hendrerit in vulputate velit esse. Minim veniam quis nostrud, exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex. Dolore magna aliquam erat volutpat ut wisi enim ad ea commodo molestie consequat. Placerat facer possim assum typi non habent claritatem, insitam est usus legentis in. Consuetudium lectorum mirum est notare quam littera gothica quam nunc putamus parum claram anteposuerit litterarum.","Augue duis dolore te feugait nulla facilisi nam liber tempor cum soluta nobis eleifend option congue. Dolore magna aliquam erat volutpat ut wisi enim ad minim? Elit sed diam nonummy nibh euismod tincidunt ut laoreet veniam quis. Iusto odio dignissim qui blandit praesent luptatum zzril. Iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore, eu feugiat nulla."]}})()})();