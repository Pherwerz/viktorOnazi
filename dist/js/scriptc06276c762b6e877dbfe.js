!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=88)}([function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));n(68),n(77);var e={switcher:Array.from(document.querySelectorAll(".header__button")),close:document.querySelector(".navigation__close"),navbtn:document.querySelector(".header__nav"),navigation:document.querySelector(".navigation"),features:Array.from(document.querySelectorAll(".features__btn")),featuresimg:Array.from(document.querySelectorAll(".features__img")),logo:Array.from(document.querySelectorAll(".header__logo")),switcherimage:Array.from(document.querySelectorAll(".header__button--image")),headerNavImage:document.querySelector(".header__nav--btn"),navimage:document.querySelector(".navigation__image"),body:document.querySelector("body"),featuresItem:Array.from(document.querySelectorAll(".features__item")),featuresPara:Array.from(document.querySelectorAll(".features__para")),btnHead:document.querySelector(".header__btn"),arrowDown:document.querySelector(".arrowdown"),aboutImg:document.querySelector(".about__img"),about:document.querySelector(".about__btn"),link:Array.from(document.querySelectorAll(".navigation__link")),tracker:!0}},function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||Function("return this")()}).call(this,n(44))},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,n){var e=n(1),o=n(33),i=n(2),c=n(34),u=n(39),a=n(59),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,r,n){var e=n(6),o=n(9),i=n(11);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,n){var e=n(7);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var e=n(6),o=n(27),i=n(8),c=n(16),u=Object.defineProperty;r.f=e?u:function(t,r,n){if(i(t),r=c(r,!0),i(n),o)try{return u(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(1),o=n(25).f,i=n(5),c=n(29),u=n(17),a=n(47),f=n(54);t.exports=function(t,r){var n,s,l,p,v,y=t.target,g=t.global,d=t.stat;if(n=g?e:d?e[y]||u(y,{}):(e[y]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(g?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r){t.exports={}},function(t,r,n){var e=n(26),o=n(12);t.exports=function(t){return e(o(t))}},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r,n){var e=n(7);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,n){var e=n(1),o=n(5);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(33),o=n(34),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports=!1},function(t,r){t.exports={}},function(t,r,n){var e=n(22),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,n){var e=n(12);t.exports=function(t){return Object(e(t))}},function(t,r,n){var e=n(6),o=n(45),i=n(11),c=n(14),u=n(16),a=n(2),f=n(27),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=c(t),r=u(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r,n){var e=n(3),o=n(15),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r,n){var e=n(6),o=n(3),i=n(28);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(1),o=n(7),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,r,n){var e=n(1),o=n(5),i=n(2),c=n(17),u=n(30),a=n(32),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,r,n,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof r||i(n,"name")||o(n,"name",r),s(n).source=l.join("string"==typeof r?r:"")),t!==e?(a?!p&&t[r]&&(f=!0):delete t[r],f?t[r]=n:o(t,r,n)):f?t[r]=n:c(r,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,r,n){var e=n(31),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,r,n){var e=n(1),o=n(17),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,n){var e,o,i,c=n(46),u=n(1),a=n(7),f=n(5),s=n(2),l=n(18),p=n(20),v=u.WeakMap;if(c){var y=new v,g=y.get,d=y.has,h=y.set;e=function(t,r){return h.call(y,t,r),r},o=function(t){return g.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var m=l("state");p[m]=!0,e=function(t,r){return f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(19),o=n(31);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},function(t,r,n){var e=n(49),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r,n){var e=n(2),o=n(14),i=n(51).indexOf,c=n(20);t.exports=function(t,r){var n,u=o(t),a=0,f=[];for(n in u)!e(c,n)&&e(u,n)&&f.push(n);for(;r.length>a;)e(u,n=r[a++])&&(~i(f,n)||f.push(n));return f}},function(t,r,n){"use strict";var e=n(55).forEach,o=n(60),i=n(61),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,r,n){var e=n(56);t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},function(t,r,n){var e=n(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,r,n){"use strict";var e,o,i,c=n(41),u=n(5),a=n(2),f=n(4),s=n(19),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||u(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,r,n){var e=n(2),o=n(24),i=n(18),c=n(81),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,r,n){var e=n(9).f,o=n(2),i=n(4)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},function(t,r,n){"use strict";var e=n(10),o=n(37);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(1),o=n(30),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r,n){var e=n(2),o=n(48),i=n(25),c=n(9);t.exports=function(t,r){for(var n=o(r),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||u(t,s,a(r,s))}}},function(t,r,n){var e=n(35),o=n(50),i=n(53),c=n(8);t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(c(t)),n=i.f;return n?r.concat(n(t)):r}},function(t,r,n){var e=n(1);t.exports=e},function(t,r,n){var e=n(36),o=n(23).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r,n){var e=n(14),o=n(21),i=n(52),c=function(t){return function(r,n,c){var u,a=e(r),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,r,n){var e=n(22),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(3),o=/#|\.prototype\./,i=function(t,r){var n=u[c(t)];return n==f||n!=a&&("function"==typeof r?e(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,r,n){var e=n(38),o=n(26),i=n(24),c=n(21),u=n(57),a=[].push,f=function(t){var r=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,g,d){for(var h,m,b=i(v),S=o(b),x=e(y,g,3),w=c(S.length),O=0,_=d||u,A=r?_(v,w):n?_(v,0):void 0;w>O;O++)if((p||O in S)&&(m=x(h=S[O],O,b),t))if(r)A[O]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:a.call(A,h)}else if(s)return!1;return l?-1:f||s?s:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,n){var e=n(7),o=n(58),i=n(4)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},function(t,r,n){var e=n(15);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,r,n){var e=n(39);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){"use strict";var e=n(3);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},function(t,r,n){var e=n(6),o=n(3),i=n(2),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,r){if(i(u,t))return u[t];r||(r={});var n=[][t],f=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:a,l=i(r,1)?r[1]:void 0;return u[t]=!!n&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,l)}))}},function(t,r,n){"use strict";var e=n(10),o=n(63);e({target:"String",proto:!0,forced:n(64)("link")},{link:function(t){return o(this,"a","href",t)}})},function(t,r,n){var e=n(12),o=/"/g;t.exports=function(t,r,n,i){var c=String(e(t)),u="<"+r;return""!==n&&(u+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),u+">"+c+"</"+r+">"}},function(t,r,n){var e=n(3);t.exports=function(t){return e((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},function(t,r,n){var e=n(1),o=n(66),i=n(37),c=n(5);for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){},function(t,r,n){var e=n(10),o=n(69);e({target:"Array",stat:!0,forced:!n(76)((function(t){Array.from(t)}))},{from:o})},function(t,r,n){"use strict";var e=n(38),o=n(24),i=n(70),c=n(71),u=n(21),a=n(72),f=n(73);t.exports=function(t){var r,n,s,l,p,v,y=o(t),g="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,m=void 0!==h,b=f(y),S=0;if(m&&(h=e(h,d>2?arguments[2]:void 0,2)),null==b||g==Array&&c(b))for(n=new g(r=u(y.length));r>S;S++)v=m?h(y[S],S):y[S],a(n,S,v);else for(p=(l=b.call(y)).next,n=new g;!(s=p.call(l)).done;S++)v=m?i(l,h,[s.value,S],!0):s.value,a(n,S,v);return n.length=S,n}},function(t,r,n){var e=n(8);t.exports=function(t,r,n,o){try{return o?r(e(n)[0],n[1]):r(n)}catch(r){var i=t.return;throw void 0!==i&&e(i.call(t)),r}}},function(t,r,n){var e=n(4),o=n(13),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,r,n){"use strict";var e=n(16),o=n(9),i=n(11);t.exports=function(t,r,n){var c=e(r);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,r,n){var e=n(74),o=n(13),i=n(4)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,r,n){var e=n(75),o=n(15),i=n(4)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?n:c?o(r):"Object"==(e=o(r))&&"function"==typeof r.callee?"Arguments":e}},function(t,r,n){var e={};e[n(4)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,r,n){var e=n(4)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var n=!1;try{var i={};i[e]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,r,n){"use strict";var e=n(78).charAt,o=n(32),i=n(79),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,r=u(this),n=r.string,o=r.index;return o>=n.length?{value:void 0,done:!0}:(t=e(n,o),r.index+=t.length,{value:t,done:!1})}))},function(t,r,n){var e=n(22),o=n(12),i=function(t){return function(r,n){var i,c,u=String(o(r)),a=e(n),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,r,n){"use strict";var e=n(10),o=n(80),i=n(41),c=n(86),u=n(42),a=n(5),f=n(29),s=n(4),l=n(19),p=n(13),v=n(40),y=v.IteratorPrototype,g=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),h=function(){return this};t.exports=function(t,r,n,s,v,m,b){o(n,r,s);var S,x,w,O=function(t){if(t===v&&L)return L;if(!g&&t in E)return E[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},_=r+" Iterator",A=!1,E=t.prototype,j=E[d]||E["@@iterator"]||v&&E[v],L=!g&&j||O(v),P="Array"==r&&E.entries||j;if(P&&(S=i(P.call(new t)),y!==Object.prototype&&S.next&&(l||i(S)===y||(c?c(S,y):"function"!=typeof S[d]&&a(S,d,h)),u(S,_,!0,!0),l&&(p[_]=h))),"values"==v&&j&&"values"!==j.name&&(A=!0,L=function(){return j.call(this)}),l&&!b||E[d]===L||a(E,d,L),p[r]=L,v)if(x={values:O("values"),keys:m?L:O("keys"),entries:O("entries")},b)for(w in x)(g||A||!(w in E))&&f(E,w,x[w]);else e({target:r,proto:!0,forced:g||A},x);return x}},function(t,r,n){"use strict";var e=n(40).IteratorPrototype,o=n(82),i=n(11),c=n(42),u=n(13),a=function(){return this};t.exports=function(t,r,n){var f=r+" Iterator";return t.prototype=o(e,{next:i(1,n)}),c(t,f,!1,!0),u[f]=a,t}},function(t,r,n){var e=n(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,n){var e,o=n(8),i=n(83),c=n(23),u=n(20),a=n(85),f=n(28),s=n(18),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;y=e?function(t){t.write(v("")),t.close();var r=t.parentWindow.Object;return t=null,r}(e):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete y.prototype[c[n]];return y()};u[l]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=y(),void 0===r?n:i(n,r)}},function(t,r,n){var e=n(6),o=n(9),i=n(8),c=n(84);t.exports=e?Object.defineProperties:function(t,r){i(t);for(var n,e=c(r),u=e.length,a=0;u>a;)o.f(t,n=e[a++],r[n]);return t}},function(t,r,n){var e=n(36),o=n(23);t.exports=Object.keys||function(t){return e(t,o)}},function(t,r,n){var e=n(35);t.exports=e("document","documentElement")},function(t,r,n){var e=n(8),o=n(87);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,i){return e(n),o(i),r?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,r,n){var e=n(7);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,n){"use strict";n.r(r);n(43),n(62),n(65),n(67);var e=n(0);e.a.switcher.forEach((function(t){return t.addEventListener("click",(function(){e.a.tracker?(e.a.switcherimage.forEach((function(t){t.src="./img/sun.svg"})),e.a.logo.forEach((function(t){t.src="./img/Victor Onazi white.png"})),e.a.arrowDown.src="./img/arrow-down-white.svg",e.a.navimage.src="./img/close-white.svg",e.a.headerNavImage.src="./img/menu-white.svg",e.a.featuresimg.forEach((function(t){t.src="./img/arrow-right-white.svg"})),e.a.body.dataset.theme="dark",e.a.tracker=!1):(e.a.switcherimage.forEach((function(t){t.src="./img/moon.svg"})),e.a.logo.forEach((function(t){t.src="./img/Victor Onazi.png"})),e.a.arrowDown.src="./img/arrow-down.svg",e.a.navimage.src="./img/close.svg",e.a.headerNavImage.src="./img/menu.svg",e.a.featuresimg.forEach((function(t){t.src="./img/arrow-right.svg"})),e.a.body.dataset.theme="light",e.a.tracker=!0)}))})),e.a.close.addEventListener("click",(function(){e.a.navigation.style.visibility="hidden",e.a.navigation.style.opacity="0"})),e.a.navbtn.addEventListener("click",(function(){e.a.navigation.style.visibility="visible",e.a.navigation.style.opacity="1"})),e.a.link.forEach((function(t){t.addEventListener("click",(function(){e.a.navigation.style.visibility="hidden",e.a.navigation.style.opacity="0"}))})),e.a.btnHead.addEventListener("mouseover",(function(){e.a.tracker&&(e.a.arrowDown.src="./img/arrow-down-white.svg")})),e.a.features.forEach((function(t,r){t.addEventListener("mouseover",(function(){e.a.tracker&&(e.a.featuresimg[r].src="./img/arrow-right-white.svg")}))})),e.a.btnHead.addEventListener("mouseleave",(function(){e.a.tracker&&(e.a.arrowDown.src="./img/arrow-down.svg")})),e.a.features.forEach((function(t,r){e.a.featuresPara[r].style.visibility="hidden",e.a.features[r].style.visibility="hidden",t.addEventListener("mouseleave",(function(){e.a.tracker&&(e.a.featuresimg[r].src="./img/arrow-right.svg")}))})),window.addEventListener("scroll",(function(){e.a.featuresItem.forEach((function(t,r){window.pageYOffset>=t.offsetTop-200&&(e.a.featuresPara[r].style.visibility="visible",e.a.features[r].style.visibility="visible",e.a.featuresPara[r].style.animation="fadeIn 1s backwards",e.a.features[r].style.animation="slideDown 1s .5s backwards")}))}))}]);