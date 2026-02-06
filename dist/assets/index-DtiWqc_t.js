(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();var me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vc={exports:{}},kt={},Gc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),Pp=Symbol.for("react.portal"),Np=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),Ip=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Mp=Symbol.for("react.suspense"),Ap=Symbol.for("react.memo"),Dp=Symbol.for("react.lazy"),ko=Symbol.iterator;function Fp(e){return e===null||typeof e!="object"?null:(e=ko&&e[ko]||e["@@iterator"],typeof e=="function"?e:null)}var Kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$c=Object.assign,Qc={};function gi(e,n,i){this.props=e,this.context=n,this.refs=Qc,this.updater=i||Kc}gi.prototype.isReactComponent={};gi.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yc(){}Yc.prototype=gi.prototype;function ml(e,n,i){this.props=e,this.context=n,this.refs=Qc,this.updater=i||Kc}var fl=ml.prototype=new Yc;fl.constructor=ml;$c(fl,gi.prototype);fl.isPureReactComponent=!0;var xo=Array.isArray,Jc=Object.prototype.hasOwnProperty,bl={current:null},Xc={key:!0,ref:!0,__self:!0,__source:!0};function Zc(e,n,i){var a,t={},s=null,l=null;if(n!=null)for(a in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(s=""+n.key),n)Jc.call(n,a)&&!Xc.hasOwnProperty(a)&&(t[a]=n[a]);var o=arguments.length-2;if(o===1)t.children=i;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];t.children=c}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)t[a]===void 0&&(t[a]=o[a]);return{$$typeof:da,type:e,key:s,ref:l,props:t,_owner:bl.current}}function Op(e,n){return{$$typeof:da,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===da}function Wp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return n[i]})}var zo=/\/+/g;function Kt(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Wp(""+e.key):n.toString(36)}function Da(e,n,i,a,t){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case da:case Pp:l=!0}}if(l)return l=e,t=t(l),e=a===""?"."+Kt(l,0):a,xo(t)?(i="",e!=null&&(i=e.replace(zo,"$&/")+"/"),Da(t,n,i,"",function(d){return d})):t!=null&&(gl(t)&&(t=Op(t,i+(!t.key||l&&l.key===t.key?"":(""+t.key).replace(zo,"$&/")+"/")+e)),n.push(t)),1;if(l=0,a=a===""?".":a+":",xo(e))for(var o=0;o<e.length;o++){s=e[o];var c=a+Kt(s,o);l+=Da(s,n,i,c,t)}else if(c=Fp(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=a+Kt(s,o++),l+=Da(s,n,i,c,t);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ga(e,n,i){if(e==null)return e;var a=[],t=0;return Da(e,a,"","",function(s){return n.call(i,s,t++)}),a}function Bp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Fa={transition:null},Hp={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:bl};function ed(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:ga,forEach:function(e,n,i){ga(e,function(){n.apply(this,arguments)},i)},count:function(e){var n=0;return ga(e,function(){n++}),n},toArray:function(e){return ga(e,function(n){return n})||[]},only:function(e){if(!gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=gi;T.Fragment=Np;T.Profiler=Ip;T.PureComponent=ml;T.StrictMode=Tp;T.Suspense=Mp;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp;T.act=ed;T.cloneElement=function(e,n,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=$c({},e.props),t=e.key,s=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,l=bl.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)Jc.call(n,c)&&!Xc.hasOwnProperty(c)&&(a[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)a.children=i;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];a.children=o}return{$$typeof:da,type:e.type,key:t,ref:s,props:a,_owner:l}};T.createContext=function(e){return e={$$typeof:jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rp,_context:e},e.Consumer=e};T.createElement=Zc;T.createFactory=function(e){var n=Zc.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Lp,render:e}};T.isValidElement=gl;T.lazy=function(e){return{$$typeof:Dp,_payload:{_status:-1,_result:e},_init:Bp}};T.memo=function(e,n){return{$$typeof:Ap,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=Fa.transition;Fa.transition={};try{e()}finally{Fa.transition=n}};T.unstable_act=ed;T.useCallback=function(e,n){return de.current.useCallback(e,n)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,n){return de.current.useEffect(e,n)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,n,i){return de.current.useImperativeHandle(e,n,i)};T.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return de.current.useMemo(e,n)};T.useReducer=function(e,n,i){return de.current.useReducer(e,n,i)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,n,i){return de.current.useSyncExternalStore(e,n,i)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";Gc.exports=T;var ra=Gc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=ra,Vp=Symbol.for("react.element"),Gp=Symbol.for("react.fragment"),Kp=Object.prototype.hasOwnProperty,$p=Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qp={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,n,i){var a,t={},s=null,l=null;i!==void 0&&(s=""+i),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(l=n.ref);for(a in n)Kp.call(n,a)&&!Qp.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)t[a]===void 0&&(t[a]=n[a]);return{$$typeof:Vp,type:e,key:s,ref:l,props:t,_owner:$p.current}}kt.Fragment=Gp;kt.jsx=nd;kt.jsxs=nd;Vc.exports=kt;var j=Vc.exports,id={exports:{}},qe={},ad={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(z,C){var P=z.length;z.push(C);e:for(;0<P;){var V=P-1>>>1,Y=z[V];if(0<t(Y,C))z[V]=C,z[P]=Y,P=V;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var C=z[0],P=z.pop();if(P!==C){z[0]=P;e:for(var V=0,Y=z.length,fa=Y>>>1;V<fa;){var Sn=2*(V+1)-1,Gt=z[Sn],Cn=Sn+1,ba=z[Cn];if(0>t(Gt,P))Cn<Y&&0>t(ba,Gt)?(z[V]=ba,z[Cn]=P,V=Cn):(z[V]=Gt,z[Sn]=P,V=Sn);else if(Cn<Y&&0>t(ba,P))z[V]=ba,z[Cn]=P,V=Cn;else break e}}return C}function t(z,C){var P=z.sortIndex-C.sortIndex;return P!==0?P:z.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],u=1,f=null,m=3,y=!1,g=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,r=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var C=i(d);C!==null;){if(C.callback===null)a(d);else if(C.startTime<=z)a(d),C.sortIndex=C.expirationTime,n(c,C);else break;C=i(d)}}function w(z){if(b=!1,v(z),!g)if(i(c)!==null)g=!0,Ut(x);else{var C=i(d);C!==null&&Vt(w,C.startTime-z)}}function x(z,C){g=!1,b&&(b=!1,p(S),S=-1),y=!0;var P=m;try{for(v(C),f=i(c);f!==null&&(!(f.expirationTime>C)||z&&!Ie());){var V=f.callback;if(typeof V=="function"){f.callback=null,m=f.priorityLevel;var Y=V(f.expirationTime<=C);C=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===i(c)&&a(c),v(C)}else a(c);f=i(c)}if(f!==null)var fa=!0;else{var Sn=i(d);Sn!==null&&Vt(w,Sn.startTime-C),fa=!1}return fa}finally{f=null,m=P,y=!1}}var q=!1,_=null,S=-1,U=5,I=-1;function Ie(){return!(e.unstable_now()-I<U)}function yi(){if(_!==null){var z=e.unstable_now();I=z;var C=!0;try{C=_(!0,z)}finally{C?ki():(q=!1,_=null)}}else q=!1}var ki;if(typeof r=="function")ki=function(){r(yi)};else if(typeof MessageChannel<"u"){var yo=new MessageChannel,Cp=yo.port2;yo.port1.onmessage=yi,ki=function(){Cp.postMessage(null)}}else ki=function(){E(yi,0)};function Ut(z){_=z,q||(q=!0,ki())}function Vt(z,C){S=E(function(){z(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,Ut(x))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return i(c)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var P=m;m=C;try{return z()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,C){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var P=m;m=z;try{return C()}finally{m=P}},e.unstable_scheduleCallback=function(z,C,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,z={id:u++,callback:C,priorityLevel:z,startTime:P,expirationTime:Y,sortIndex:-1},P>V?(z.sortIndex=P,n(d,z),i(c)===null&&z===i(d)&&(b?(p(S),S=-1):b=!0,Vt(w,P-V))):(z.sortIndex=Y,n(c,z),g||y||(g=!0,Ut(x))),z},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(z){var C=m;return function(){var P=m;m=C;try{return z.apply(this,arguments)}finally{m=P}}}})(td);ad.exports=td;var Yp=ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp=ra,ze=Yp;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sd=new Set,Vi={};function Wn(e,n){di(e,n),di(e+"Capture",n)}function di(e,n){for(Vi[e]=n,e=0;e<n.length;e++)sd.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=Object.prototype.hasOwnProperty,Xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qo={},_o={};function Zp(e){return ys.call(_o,e)?!0:ys.call(qo,e)?!1:Xp.test(e)?_o[e]=!0:(qo[e]=!0,!1)}function ev(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nv(e,n,i,a){if(n===null||typeof n>"u"||ev(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function re(e,n,i,a,t,s,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new re(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wl,hl);ne[n]=new re(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wl,hl);ne[n]=new re(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wl,hl);ne[n]=new re(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,n,i,a){var t=ne.hasOwnProperty(n)?ne[n]:null;(t!==null?t.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(nv(n,i,t,a)&&(i=null),a||t===null?Zp(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):t.mustUseProperty?e[t.propertyName]=i===null?t.type===3?!1:"":i:(n=t.attributeName,a=t.attributeNamespace,i===null?e.removeAttribute(n):(t=t.type,i=t===3||t===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var an=Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),ks=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),od=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),xs=Symbol.for("react.suspense"),zs=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),cd=Symbol.for("react.offscreen"),So=Symbol.iterator;function xi(e){return e===null||typeof e!="object"?null:(e=So&&e[So]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,$t;function Ni(e){if($t===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||""}return`
`+$t+e}var Qt=!1;function Yt(e,n){if(!e||Qt)return"";Qt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var a=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){a=d}e.call(n.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var t=d.stack.split(`
`),s=a.stack.split(`
`),l=t.length-1,o=s.length-1;1<=l&&0<=o&&t[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(t[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||t[l]!==s[o]){var c=`
`+t[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Qt=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Ni(e):""}function iv(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=Yt(e.type,!1),e;case 11:return e=Yt(e.type.render,!1),e;case 1:return e=Yt(e.type,!0),e;default:return""}}function qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Un:return"Portal";case ks:return"Profiler";case kl:return"StrictMode";case xs:return"Suspense";case zs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case od:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case xl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return n=e.displayName||null,n!==null?n:qs(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return qs(e(n))}catch{}}return null}function av(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qs(n);case 8:return n===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tv(e){var n=dd(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,s=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(l){a=""+l,s.call(this,l)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ha(e){e._valueTracker||(e._valueTracker=tv(e))}function rd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=dd(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function Ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _s(e,n){var i=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Co(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=hn(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function pd(e,n){n=n.checked,n!=null&&yl(e,"checked",n,!1)}function Ss(e,n){pd(e,n);var i=hn(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Cs(e,n.type,i):n.hasOwnProperty("defaultValue")&&Cs(e,n.type,hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Eo(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Cs(e,n,i){(n!=="number"||Ya(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ti=Array.isArray;function ai(e,n,i,a){if(e=e.options,n){n={};for(var t=0;t<i.length;t++)n["$"+i[t]]=!0;for(i=0;i<e.length;i++)t=n.hasOwnProperty("$"+e[i].value),e[i].selected!==t&&(e[i].selected=t),t&&a&&(e[i].defaultSelected=!0)}else{for(i=""+hn(i),n=null,t=0;t<e.length;t++){if(e[t].value===i){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}n!==null||e[t].disabled||(n=e[t])}n!==null&&(n.selected=!0)}}function Es(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Po(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(h(92));if(Ti(i)){if(1<i.length)throw Error(h(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:hn(i)}}function vd(e,n){var i=hn(n.value),a=hn(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function No(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ps(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ud(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ya,md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,t){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,t)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Gi(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sv=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(e){sv.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Li[n]=Li[e]})});function fd(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Li.hasOwnProperty(e)&&Li[e]?(""+n).trim():n+"px"}function bd(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,t=fd(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,t):e[i]=t}}var lv=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ns(e,n){if(n){if(lv[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function Ts(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,ti=null,si=null;function To(e){if(e=ua(e)){if(typeof Rs!="function")throw Error(h(280));var n=e.stateNode;n&&(n=St(n),Rs(e.stateNode,e.type,n))}}function gd(e){ti?si?si.push(e):si=[e]:ti=e}function wd(){if(ti){var e=ti,n=si;if(si=ti=null,To(e),n)for(e=0;e<n.length;e++)To(n[e])}}function hd(e,n){return e(n)}function yd(){}var Jt=!1;function kd(e,n,i){if(Jt)return e(n,i);Jt=!0;try{return hd(e,n,i)}finally{Jt=!1,(ti!==null||si!==null)&&(yd(),wd())}}function Ki(e,n){var i=e.stateNode;if(i===null)return null;var a=St(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(h(231,n,typeof i));return i}var js=!1;if(Xe)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){js=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{js=!1}function ov(e,n,i,a,t,s,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(i,d)}catch(u){this.onError(u)}}var Mi=!1,Ja=null,Xa=!1,Ls=null,cv={onError:function(e){Mi=!0,Ja=e}};function dv(e,n,i,a,t,s,l,o,c){Mi=!1,Ja=null,ov.apply(cv,arguments)}function rv(e,n,i,a,t,s,l,o,c){if(dv.apply(this,arguments),Mi){if(Mi){var d=Ja;Mi=!1,Ja=null}else throw Error(h(198));Xa||(Xa=!0,Ls=d)}}function Bn(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function xd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Io(e){if(Bn(e)!==e)throw Error(h(188))}function pv(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var i=e,a=n;;){var t=i.return;if(t===null)break;var s=t.alternate;if(s===null){if(a=t.return,a!==null){i=a;continue}break}if(t.child===s.child){for(s=t.child;s;){if(s===i)return Io(t),e;if(s===a)return Io(t),n;s=s.sibling}throw Error(h(188))}if(i.return!==a.return)i=t,a=s;else{for(var l=!1,o=t.child;o;){if(o===i){l=!0,i=t,a=s;break}if(o===a){l=!0,a=t,i=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===i){l=!0,i=s,a=t;break}if(o===a){l=!0,a=s,i=t;break}o=o.sibling}if(!l)throw Error(h(189))}}if(i.alternate!==a)throw Error(h(190))}if(i.tag!==3)throw Error(h(188));return i.stateNode.current===i?e:n}function zd(e){return e=pv(e),e!==null?qd(e):null}function qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=qd(e);if(n!==null)return n;e=e.sibling}return null}var _d=ze.unstable_scheduleCallback,Ro=ze.unstable_cancelCallback,vv=ze.unstable_shouldYield,uv=ze.unstable_requestPaint,G=ze.unstable_now,mv=ze.unstable_getCurrentPriorityLevel,_l=ze.unstable_ImmediatePriority,Sd=ze.unstable_UserBlockingPriority,Za=ze.unstable_NormalPriority,fv=ze.unstable_LowPriority,Cd=ze.unstable_IdlePriority,xt=null,Ue=null;function bv(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(xt,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:hv,gv=Math.log,wv=Math.LN2;function hv(e){return e>>>=0,e===0?32:31-(gv(e)/wv|0)|0}var ka=64,xa=4194304;function Ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function et(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,t=e.suspendedLanes,s=e.pingedLanes,l=i&268435455;if(l!==0){var o=l&~t;o!==0?a=Ii(o):(s&=l,s!==0&&(a=Ii(s)))}else l=i&~t,l!==0?a=Ii(l):s!==0&&(a=Ii(s));if(a===0)return 0;if(n!==0&&n!==a&&!(n&t)&&(t=a&-a,s=n&-n,t>=s||t===16&&(s&4194240)!==0))return n;if(a&4&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-Ae(n),t=1<<i,a|=e[i],n&=~t;return a}function yv(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Ae(s),o=1<<l,c=t[l];c===-1?(!(o&i)||o&a)&&(t[l]=yv(o,n)):c<=n&&(e.expiredLanes|=o),s&=~o}}function Ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ed(){var e=ka;return ka<<=1,!(ka&4194240)&&(ka=64),e}function Xt(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function pa(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=i}function xv(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var t=31-Ae(i),s=1<<t;n[t]=0,a[t]=-1,e[t]=-1,i&=~s}}function Sl(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-Ae(i),t=1<<a;t&n|e[a]&n&&(e[a]|=n),i&=~t}}var L=0;function Pd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nd,Cl,Td,Id,Rd,As=!1,za=[],pn=null,vn=null,un=null,$i=new Map,Qi=new Map,on=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jo(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":$i.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(n.pointerId)}}function qi(e,n,i,a,t,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:s,targetContainers:[t]},n!==null&&(n=ua(n),n!==null&&Cl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),e)}function qv(e,n,i,a,t){switch(n){case"focusin":return pn=qi(pn,e,n,i,a,t),!0;case"dragenter":return vn=qi(vn,e,n,i,a,t),!0;case"mouseover":return un=qi(un,e,n,i,a,t),!0;case"pointerover":var s=t.pointerId;return $i.set(s,qi($i.get(s)||null,e,n,i,a,t)),!0;case"gotpointercapture":return s=t.pointerId,Qi.set(s,qi(Qi.get(s)||null,e,n,i,a,t)),!0}return!1}function jd(e){var n=Tn(e.target);if(n!==null){var i=Bn(n);if(i!==null){if(n=i.tag,n===13){if(n=xd(i),n!==null){e.blockedOn=n,Rd(e.priority,function(){Td(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Ds(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Is=a,i.target.dispatchEvent(a),Is=null}else return n=ua(i),n!==null&&Cl(n),e.blockedOn=i,!1;n.shift()}return!0}function Lo(e,n,i){Oa(e)&&i.delete(n)}function _v(){As=!1,pn!==null&&Oa(pn)&&(pn=null),vn!==null&&Oa(vn)&&(vn=null),un!==null&&Oa(un)&&(un=null),$i.forEach(Lo),Qi.forEach(Lo)}function _i(e,n){e.blockedOn===n&&(e.blockedOn=null,As||(As=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,_v)))}function Yi(e){function n(t){return _i(t,e)}if(0<za.length){_i(za[0],e);for(var i=1;i<za.length;i++){var a=za[i];a.blockedOn===e&&(a.blockedOn=null)}}for(pn!==null&&_i(pn,e),vn!==null&&_i(vn,e),un!==null&&_i(un,e),$i.forEach(n),Qi.forEach(n),i=0;i<on.length;i++)a=on[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<on.length&&(i=on[0],i.blockedOn===null);)jd(i),i.blockedOn===null&&on.shift()}var li=an.ReactCurrentBatchConfig,nt=!0;function Sv(e,n,i,a){var t=L,s=li.transition;li.transition=null;try{L=1,El(e,n,i,a)}finally{L=t,li.transition=s}}function Cv(e,n,i,a){var t=L,s=li.transition;li.transition=null;try{L=4,El(e,n,i,a)}finally{L=t,li.transition=s}}function El(e,n,i,a){if(nt){var t=Ds(e,n,i,a);if(t===null)cs(e,n,a,it,i),jo(e,a);else if(qv(t,e,n,i,a))a.stopPropagation();else if(jo(e,a),n&4&&-1<zv.indexOf(e)){for(;t!==null;){var s=ua(t);if(s!==null&&Nd(s),s=Ds(e,n,i,a),s===null&&cs(e,n,a,it,i),s===t)break;t=s}t!==null&&a.stopPropagation()}else cs(e,n,a,null,i)}}var it=null;function Ds(e,n,i,a){if(it=null,e=ql(a),e=Tn(e),e!==null)if(n=Bn(e),n===null)e=null;else if(i=n.tag,i===13){if(e=xd(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return it=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mv()){case _l:return 1;case Sd:return 4;case Za:case fv:return 16;case Cd:return 536870912;default:return 16}default:return 16}}var dn=null,Pl=null,Wa=null;function Md(){if(Wa)return Wa;var e,n=Pl,i=n.length,a,t="value"in dn?dn.value:dn.textContent,s=t.length;for(e=0;e<i&&n[e]===t[e];e++);var l=i-e;for(a=1;a<=l&&n[i-a]===t[s-a];a++);return Wa=t.slice(e,1<a?1-a:void 0)}function Ba(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qa(){return!0}function Mo(){return!1}function _e(e){function n(i,a,t,s,l){this._reactName=i,this._targetInst=t,this.type=a,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(i=e[o],this[o]=i?i(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Mo,this.isPropagationStopped=Mo,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),n}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=_e(wi),va=B({},wi,{view:0,detail:0}),Ev=_e(va),Zt,es,Si,zt=B({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(Zt=e.screenX-Si.screenX,es=e.screenY-Si.screenY):es=Zt=0,Si=e),Zt)},movementY:function(e){return"movementY"in e?e.movementY:es}}),Ao=_e(zt),Pv=B({},zt,{dataTransfer:0}),Nv=_e(Pv),Tv=B({},va,{relatedTarget:0}),ns=_e(Tv),Iv=B({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=_e(Iv),jv=B({},wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lv=_e(jv),Mv=B({},wi,{data:0}),Do=_e(Mv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fv[e])?!!n[e]:!1}function Tl(){return Ov}var Wv=B({},va,{key:function(e){if(e.key){var n=Av[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=_e(Wv),Hv=B({},zt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=_e(Hv),Uv=B({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),Vv=_e(Uv),Gv=B({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=_e(Gv),$v=B({},zt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=_e($v),Yv=[9,13,27,32],Il=Xe&&"CompositionEvent"in window,Ai=null;Xe&&"documentMode"in document&&(Ai=document.documentMode);var Jv=Xe&&"TextEvent"in window&&!Ai,Ad=Xe&&(!Il||Ai&&8<Ai&&11>=Ai),Oo=" ",Wo=!1;function Dd(e,n){switch(e){case"keyup":return Yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function Xv(e,n){switch(e){case"compositionend":return Fd(n);case"keypress":return n.which!==32?null:(Wo=!0,Oo);case"textInput":return e=n.data,e===Oo&&Wo?null:e;default:return null}}function Zv(e,n){if(Gn)return e==="compositionend"||!Il&&Dd(e,n)?(e=Md(),Wa=Pl=dn=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ad&&n.locale!=="ko"?null:n.data;default:return null}}var eu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!eu[e.type]:n==="textarea"}function Od(e,n,i,a){gd(a),n=at(n,"onChange"),0<n.length&&(i=new Nl("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var Di=null,Ji=null;function nu(e){Jd(e,0)}function qt(e){var n=Qn(e);if(rd(n))return e}function iu(e,n){if(e==="change")return n}var Wd=!1;if(Xe){var is;if(Xe){var as="oninput"in document;if(!as){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),as=typeof Ho.oninput=="function"}is=as}else is=!1;Wd=is&&(!document.documentMode||9<document.documentMode)}function Uo(){Di&&(Di.detachEvent("onpropertychange",Bd),Ji=Di=null)}function Bd(e){if(e.propertyName==="value"&&qt(Ji)){var n=[];Od(n,Ji,e,ql(e)),kd(nu,n)}}function au(e,n,i){e==="focusin"?(Uo(),Di=n,Ji=i,Di.attachEvent("onpropertychange",Bd)):e==="focusout"&&Uo()}function tu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qt(Ji)}function su(e,n){if(e==="click")return qt(n)}function lu(e,n){if(e==="input"||e==="change")return qt(n)}function ou(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:ou;function Xi(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var t=i[a];if(!ys.call(n,t)||!Fe(e[t],n[t]))return!1}return!0}function Vo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Go(e,n){var i=Vo(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Vo(i)}}function Hd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ud(){for(var e=window,n=Ya();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Ya(e.document)}return n}function Rl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cu(e){var n=Ud(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Hd(i.ownerDocument.documentElement,i)){if(a!==null&&Rl(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var t=i.textContent.length,s=Math.min(a.start,t);a=a.end===void 0?s:Math.min(a.end,t),!e.extend&&s>a&&(t=a,a=s,s=t),t=Go(i,s);var l=Go(i,a);t&&l&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(t.node,t.offset),e.removeAllRanges(),s>a?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var du=Xe&&"documentMode"in document&&11>=document.documentMode,Kn=null,Fs=null,Fi=null,Os=!1;function Ko(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Os||Kn==null||Kn!==Ya(a)||(a=Kn,"selectionStart"in a&&Rl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fi&&Xi(Fi,a)||(Fi=a,a=at(Fs,"onSelect"),0<a.length&&(n=new Nl("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Kn)))}function _a(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var $n={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},ts={},Vd={};Xe&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function _t(e){if(ts[e])return ts[e];if(!$n[e])return e;var n=$n[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Vd)return ts[e]=n[i];return e}var Gd=_t("animationend"),Kd=_t("animationiteration"),$d=_t("animationstart"),Qd=_t("transitionend"),Yd=new Map,$o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,n){Yd.set(e,n),Wn(n,[e])}for(var ss=0;ss<$o.length;ss++){var ls=$o[ss],ru=ls.toLowerCase(),pu=ls[0].toUpperCase()+ls.slice(1);kn(ru,"on"+pu)}kn(Gd,"onAnimationEnd");kn(Kd,"onAnimationIteration");kn($d,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Qd,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function Qo(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,rv(a,n,void 0,e),e.currentTarget=null}function Jd(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],t=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var l=a.length-1;0<=l;l--){var o=a[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==s&&t.isPropagationStopped())break e;Qo(t,o,d),s=c}else for(l=0;l<a.length;l++){if(o=a[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==s&&t.isPropagationStopped())break e;Qo(t,o,d),s=c}}}if(Xa)throw e=Ls,Xa=!1,Ls=null,e}function A(e,n){var i=n[Vs];i===void 0&&(i=n[Vs]=new Set);var a=e+"__bubble";i.has(a)||(Xd(n,e,2,!1),i.add(a))}function os(e,n,i){var a=0;n&&(a|=4),Xd(i,e,a,n)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Sa]){e[Sa]=!0,sd.forEach(function(i){i!=="selectionchange"&&(vu.has(i)||os(i,!1,e),os(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Sa]||(n[Sa]=!0,os("selectionchange",!1,n))}}function Xd(e,n,i,a){switch(Ld(n)){case 1:var t=Sv;break;case 4:t=Cv;break;default:t=El}i=t.bind(null,n,i,e),t=void 0,!js||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(n,i,{capture:!0,passive:t}):e.addEventListener(n,i,!0):t!==void 0?e.addEventListener(n,i,{passive:t}):e.addEventListener(n,i,!1)}function cs(e,n,i,a,t){var s=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var o=a.stateNode.containerInfo;if(o===t||o.nodeType===8&&o.parentNode===t)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===t||c.nodeType===8&&c.parentNode===t))return;l=l.return}for(;o!==null;){if(l=Tn(o),l===null)return;if(c=l.tag,c===5||c===6){a=s=l;continue e}o=o.parentNode}}a=a.return}kd(function(){var d=s,u=ql(i),f=[];e:{var m=Yd.get(e);if(m!==void 0){var y=Nl,g=e;switch(e){case"keypress":if(Ba(i)===0)break e;case"keydown":case"keyup":y=Bv;break;case"focusin":g="focus",y=ns;break;case"focusout":g="blur",y=ns;break;case"beforeblur":case"afterblur":y=ns;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ao;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Vv;break;case Gd:case Kd:case $d:y=Rv;break;case Qd:y=Kv;break;case"scroll":y=Ev;break;case"wheel":y=Qv;break;case"copy":case"cut":case"paste":y=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Fo}var b=(n&4)!==0,E=!b&&e==="scroll",p=b?m!==null?m+"Capture":null:m;b=[];for(var r=d,v;r!==null;){v=r;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,p!==null&&(w=Ki(r,p),w!=null&&b.push(ea(r,w,v)))),E)break;r=r.return}0<b.length&&(m=new y(m,g,null,i,u),f.push({event:m,listeners:b}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&i!==Is&&(g=i.relatedTarget||i.fromElement)&&(Tn(g)||g[Ze]))break e;if((y||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=i.relatedTarget||i.toElement,y=d,g=g?Tn(g):null,g!==null&&(E=Bn(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=d),y!==g)){if(b=Ao,w="onMouseLeave",p="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(b=Fo,w="onPointerLeave",p="onPointerEnter",r="pointer"),E=y==null?m:Qn(y),v=g==null?m:Qn(g),m=new b(w,r+"leave",y,i,u),m.target=E,m.relatedTarget=v,w=null,Tn(u)===d&&(b=new b(p,r+"enter",g,i,u),b.target=v,b.relatedTarget=E,w=b),E=w,y&&g)n:{for(b=y,p=g,r=0,v=b;v;v=Hn(v))r++;for(v=0,w=p;w;w=Hn(w))v++;for(;0<r-v;)b=Hn(b),r--;for(;0<v-r;)p=Hn(p),v--;for(;r--;){if(b===p||p!==null&&b===p.alternate)break n;b=Hn(b),p=Hn(p)}b=null}else b=null;y!==null&&Yo(f,m,y,b,!1),g!==null&&E!==null&&Yo(f,E,g,b,!0)}}e:{if(m=d?Qn(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var x=iu;else if(Bo(m))if(Wd)x=lu;else{x=tu;var q=au}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=su);if(x&&(x=x(e,d))){Od(f,x,i,u);break e}q&&q(e,m,d),e==="focusout"&&(q=m._wrapperState)&&q.controlled&&m.type==="number"&&Cs(m,"number",m.value)}switch(q=d?Qn(d):window,e){case"focusin":(Bo(q)||q.contentEditable==="true")&&(Kn=q,Fs=d,Fi=null);break;case"focusout":Fi=Fs=Kn=null;break;case"mousedown":Os=!0;break;case"contextmenu":case"mouseup":case"dragend":Os=!1,Ko(f,i,u);break;case"selectionchange":if(du)break;case"keydown":case"keyup":Ko(f,i,u)}var _;if(Il)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Gn?Dd(e,i)&&(S="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(S="onCompositionStart");S&&(Ad&&i.locale!=="ko"&&(Gn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Gn&&(_=Md()):(dn=u,Pl="value"in dn?dn.value:dn.textContent,Gn=!0)),q=at(d,S),0<q.length&&(S=new Do(S,e,null,i,u),f.push({event:S,listeners:q}),_?S.data=_:(_=Fd(i),_!==null&&(S.data=_)))),(_=Jv?Xv(e,i):Zv(e,i))&&(d=at(d,"onBeforeInput"),0<d.length&&(u=new Do("onBeforeInput","beforeinput",null,i,u),f.push({event:u,listeners:d}),u.data=_))}Jd(f,n)})}function ea(e,n,i){return{instance:e,listener:n,currentTarget:i}}function at(e,n){for(var i=n+"Capture",a=[];e!==null;){var t=e,s=t.stateNode;t.tag===5&&s!==null&&(t=s,s=Ki(e,i),s!=null&&a.unshift(ea(e,s,t)),s=Ki(e,n),s!=null&&a.push(ea(e,s,t))),e=e.return}return a}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yo(e,n,i,a,t){for(var s=n._reactName,l=[];i!==null&&i!==a;){var o=i,c=o.alternate,d=o.stateNode;if(c!==null&&c===a)break;o.tag===5&&d!==null&&(o=d,t?(c=Ki(i,s),c!=null&&l.unshift(ea(i,c,o))):t||(c=Ki(i,s),c!=null&&l.push(ea(i,c,o)))),i=i.return}l.length!==0&&e.push({event:n,listeners:l})}var uu=/\r\n?/g,mu=/\u0000|\uFFFD/g;function Jo(e){return(typeof e=="string"?e:""+e).replace(uu,`
`).replace(mu,"")}function Ca(e,n,i){if(n=Jo(n),Jo(e)!==n&&i)throw Error(h(425))}function tt(){}var Ws=null,Bs=null;function Hs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Us=typeof setTimeout=="function"?setTimeout:void 0,fu=typeof clearTimeout=="function"?clearTimeout:void 0,Xo=typeof Promise=="function"?Promise:void 0,bu=typeof queueMicrotask=="function"?queueMicrotask:typeof Xo<"u"?function(e){return Xo.resolve(null).then(e).catch(gu)}:Us;function gu(e){setTimeout(function(){throw e})}function ds(e,n){var i=n,a=0;do{var t=i.nextSibling;if(e.removeChild(i),t&&t.nodeType===8)if(i=t.data,i==="/$"){if(a===0){e.removeChild(t),Yi(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=t}while(i);Yi(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Zo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),He="__reactFiber$"+hi,na="__reactProps$"+hi,Ze="__reactContainer$"+hi,Vs="__reactEvents$"+hi,wu="__reactListeners$"+hi,hu="__reactHandles$"+hi;function Tn(e){var n=e[He];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ze]||i[He]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Zo(e);e!==null;){if(i=e[He])return i;e=Zo(e)}return n}e=i,i=e.parentNode}return null}function ua(e){return e=e[He]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function St(e){return e[na]||null}var Gs=[],Yn=-1;function xn(e){return{current:e}}function D(e){0>Yn||(e.current=Gs[Yn],Gs[Yn]=null,Yn--)}function M(e,n){Yn++,Gs[Yn]=e.current,e.current=n}var yn={},le=xn(yn),be=xn(!1),Mn=yn;function ri(e,n){var i=e.type.contextTypes;if(!i)return yn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var t={},s;for(s in i)t[s]=n[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),t}function ge(e){return e=e.childContextTypes,e!=null}function st(){D(be),D(le)}function ec(e,n,i){if(le.current!==yn)throw Error(h(168));M(le,n),M(be,i)}function Zd(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var t in a)if(!(t in n))throw Error(h(108,av(e)||"Unknown",t));return B({},i,a)}function lt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Mn=le.current,M(le,e),M(be,be.current),!0}function nc(e,n,i){var a=e.stateNode;if(!a)throw Error(h(169));i?(e=Zd(e,n,Mn),a.__reactInternalMemoizedMergedChildContext=e,D(be),D(le),M(le,e)):D(be),M(be,i)}var $e=null,Ct=!1,rs=!1;function er(e){$e===null?$e=[e]:$e.push(e)}function yu(e){Ct=!0,er(e)}function zn(){if(!rs&&$e!==null){rs=!0;var e=0,n=L;try{var i=$e;for(L=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}$e=null,Ct=!1}catch(t){throw $e!==null&&($e=$e.slice(e+1)),_d(_l,zn),t}finally{L=n,rs=!1}}return null}var Jn=[],Xn=0,ot=null,ct=0,Se=[],Ce=0,An=null,Qe=1,Ye="";function En(e,n){Jn[Xn++]=ct,Jn[Xn++]=ot,ot=e,ct=n}function nr(e,n,i){Se[Ce++]=Qe,Se[Ce++]=Ye,Se[Ce++]=An,An=e;var a=Qe;e=Ye;var t=32-Ae(a)-1;a&=~(1<<t),i+=1;var s=32-Ae(n)+t;if(30<s){var l=t-t%5;s=(a&(1<<l)-1).toString(32),a>>=l,t-=l,Qe=1<<32-Ae(n)+t|i<<t|a,Ye=s+e}else Qe=1<<s|i<<t|a,Ye=e}function jl(e){e.return!==null&&(En(e,1),nr(e,1,0))}function Ll(e){for(;e===ot;)ot=Jn[--Xn],Jn[Xn]=null,ct=Jn[--Xn],Jn[Xn]=null;for(;e===An;)An=Se[--Ce],Se[Ce]=null,Ye=Se[--Ce],Se[Ce]=null,Qe=Se[--Ce],Se[Ce]=null}var xe=null,ke=null,F=!1,Me=null;function ir(e,n){var i=Ee(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function ic(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,ke=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=An!==null?{id:Qe,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=Ee(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,xe=e,ke=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(F){var n=ke;if(n){var i=n;if(!ic(e,n)){if(Ks(e))throw Error(h(418));n=mn(i.nextSibling);var a=xe;n&&ic(e,n)?ir(a,i):(e.flags=e.flags&-4097|2,F=!1,xe=e)}}else{if(Ks(e))throw Error(h(418));e.flags=e.flags&-4097|2,F=!1,xe=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Ea(e){if(e!==xe)return!1;if(!F)return ac(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Hs(e.type,e.memoizedProps)),n&&(n=ke)){if(Ks(e))throw ar(),Error(h(418));for(;n;)ir(e,n),n=mn(n.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){ke=mn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}ke=null}}else ke=xe?mn(e.stateNode.nextSibling):null;return!0}function ar(){for(var e=ke;e;)e=mn(e.nextSibling)}function pi(){ke=xe=null,F=!1}function Ml(e){Me===null?Me=[e]:Me.push(e)}var ku=an.ReactCurrentBatchConfig;function Ci(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(h(309));var a=i.stateNode}if(!a)throw Error(h(147,e));var t=a,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(l){var o=t.refs;l===null?delete o[s]:o[s]=l},n._stringRef=s,n)}if(typeof e!="string")throw Error(h(284));if(!i._owner)throw Error(h(290,e))}return e}function Pa(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function tc(e){var n=e._init;return n(e._payload)}function tr(e){function n(p,r){if(e){var v=p.deletions;v===null?(p.deletions=[r],p.flags|=16):v.push(r)}}function i(p,r){if(!e)return null;for(;r!==null;)n(p,r),r=r.sibling;return null}function a(p,r){for(p=new Map;r!==null;)r.key!==null?p.set(r.key,r):p.set(r.index,r),r=r.sibling;return p}function t(p,r){return p=wn(p,r),p.index=0,p.sibling=null,p}function s(p,r,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<r?(p.flags|=2,r):v):(p.flags|=2,r)):(p.flags|=1048576,r)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,r,v,w){return r===null||r.tag!==6?(r=gs(v,p.mode,w),r.return=p,r):(r=t(r,v),r.return=p,r)}function c(p,r,v,w){var x=v.type;return x===Vn?u(p,r,v.props.children,w,v.key):r!==null&&(r.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===sn&&tc(x)===r.type)?(w=t(r,v.props),w.ref=Ci(p,r,v),w.return=p,w):(w=Qa(v.type,v.key,v.props,null,p.mode,w),w.ref=Ci(p,r,v),w.return=p,w)}function d(p,r,v,w){return r===null||r.tag!==4||r.stateNode.containerInfo!==v.containerInfo||r.stateNode.implementation!==v.implementation?(r=ws(v,p.mode,w),r.return=p,r):(r=t(r,v.children||[]),r.return=p,r)}function u(p,r,v,w,x){return r===null||r.tag!==7?(r=Ln(v,p.mode,w,x),r.return=p,r):(r=t(r,v),r.return=p,r)}function f(p,r,v){if(typeof r=="string"&&r!==""||typeof r=="number")return r=gs(""+r,p.mode,v),r.return=p,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case wa:return v=Qa(r.type,r.key,r.props,null,p.mode,v),v.ref=Ci(p,null,r),v.return=p,v;case Un:return r=ws(r,p.mode,v),r.return=p,r;case sn:var w=r._init;return f(p,w(r._payload),v)}if(Ti(r)||xi(r))return r=Ln(r,p.mode,v,null),r.return=p,r;Pa(p,r)}return null}function m(p,r,v,w){var x=r!==null?r.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:o(p,r,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return v.key===x?c(p,r,v,w):null;case Un:return v.key===x?d(p,r,v,w):null;case sn:return x=v._init,m(p,r,x(v._payload),w)}if(Ti(v)||xi(v))return x!==null?null:u(p,r,v,w,null);Pa(p,v)}return null}function y(p,r,v,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(v)||null,o(r,p,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wa:return p=p.get(w.key===null?v:w.key)||null,c(r,p,w,x);case Un:return p=p.get(w.key===null?v:w.key)||null,d(r,p,w,x);case sn:var q=w._init;return y(p,r,v,q(w._payload),x)}if(Ti(w)||xi(w))return p=p.get(v)||null,u(r,p,w,x,null);Pa(r,w)}return null}function g(p,r,v,w){for(var x=null,q=null,_=r,S=r=0,U=null;_!==null&&S<v.length;S++){_.index>S?(U=_,_=null):U=_.sibling;var I=m(p,_,v[S],w);if(I===null){_===null&&(_=U);break}e&&_&&I.alternate===null&&n(p,_),r=s(I,r,S),q===null?x=I:q.sibling=I,q=I,_=U}if(S===v.length)return i(p,_),F&&En(p,S),x;if(_===null){for(;S<v.length;S++)_=f(p,v[S],w),_!==null&&(r=s(_,r,S),q===null?x=_:q.sibling=_,q=_);return F&&En(p,S),x}for(_=a(p,_);S<v.length;S++)U=y(_,p,S,v[S],w),U!==null&&(e&&U.alternate!==null&&_.delete(U.key===null?S:U.key),r=s(U,r,S),q===null?x=U:q.sibling=U,q=U);return e&&_.forEach(function(Ie){return n(p,Ie)}),F&&En(p,S),x}function b(p,r,v,w){var x=xi(v);if(typeof x!="function")throw Error(h(150));if(v=x.call(v),v==null)throw Error(h(151));for(var q=x=null,_=r,S=r=0,U=null,I=v.next();_!==null&&!I.done;S++,I=v.next()){_.index>S?(U=_,_=null):U=_.sibling;var Ie=m(p,_,I.value,w);if(Ie===null){_===null&&(_=U);break}e&&_&&Ie.alternate===null&&n(p,_),r=s(Ie,r,S),q===null?x=Ie:q.sibling=Ie,q=Ie,_=U}if(I.done)return i(p,_),F&&En(p,S),x;if(_===null){for(;!I.done;S++,I=v.next())I=f(p,I.value,w),I!==null&&(r=s(I,r,S),q===null?x=I:q.sibling=I,q=I);return F&&En(p,S),x}for(_=a(p,_);!I.done;S++,I=v.next())I=y(_,p,S,I.value,w),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?S:I.key),r=s(I,r,S),q===null?x=I:q.sibling=I,q=I);return e&&_.forEach(function(yi){return n(p,yi)}),F&&En(p,S),x}function E(p,r,v,w){if(typeof v=="object"&&v!==null&&v.type===Vn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:e:{for(var x=v.key,q=r;q!==null;){if(q.key===x){if(x=v.type,x===Vn){if(q.tag===7){i(p,q.sibling),r=t(q,v.props.children),r.return=p,p=r;break e}}else if(q.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===sn&&tc(x)===q.type){i(p,q.sibling),r=t(q,v.props),r.ref=Ci(p,q,v),r.return=p,p=r;break e}i(p,q);break}else n(p,q);q=q.sibling}v.type===Vn?(r=Ln(v.props.children,p.mode,w,v.key),r.return=p,p=r):(w=Qa(v.type,v.key,v.props,null,p.mode,w),w.ref=Ci(p,r,v),w.return=p,p=w)}return l(p);case Un:e:{for(q=v.key;r!==null;){if(r.key===q)if(r.tag===4&&r.stateNode.containerInfo===v.containerInfo&&r.stateNode.implementation===v.implementation){i(p,r.sibling),r=t(r,v.children||[]),r.return=p,p=r;break e}else{i(p,r);break}else n(p,r);r=r.sibling}r=ws(v,p.mode,w),r.return=p,p=r}return l(p);case sn:return q=v._init,E(p,r,q(v._payload),w)}if(Ti(v))return g(p,r,v,w);if(xi(v))return b(p,r,v,w);Pa(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,r!==null&&r.tag===6?(i(p,r.sibling),r=t(r,v),r.return=p,p=r):(i(p,r),r=gs(v,p.mode,w),r.return=p,p=r),l(p)):i(p,r)}return E}var vi=tr(!0),sr=tr(!1),dt=xn(null),rt=null,Zn=null,Al=null;function Dl(){Al=Zn=rt=null}function Fl(e){var n=dt.current;D(dt),e._currentValue=n}function Qs(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function oi(e,n){rt=e,Al=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:n,next:null},Zn===null){if(rt===null)throw Error(h(308));Zn=e,rt.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return n}var In=null;function Ol(e){In===null?In=[e]:In.push(e)}function lr(e,n,i,a){var t=n.interleaved;return t===null?(i.next=i,Ol(n)):(i.next=t.next,t.next=i),n.interleaved=i,en(e,a)}function en(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var ln=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function or(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function fn(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,R&2){var t=a.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),a.pending=n,en(e,i)}return t=a.interleaved,t===null?(n.next=n,Ol(a)):(n.next=t.next,t.next=n),a.interleaved=n,en(e,i)}function Ha(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Sl(e,i)}}function sc(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var t=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?t=s=l:s=s.next=l,i=i.next}while(i!==null);s===null?t=s=n:s=s.next=n}else t=s=n;i={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function pt(e,n,i,a){var t=e.updateQueue;ln=!1;var s=t.firstBaseUpdate,l=t.lastBaseUpdate,o=t.shared.pending;if(o!==null){t.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==l&&(o===null?u.firstBaseUpdate=d:o.next=d,u.lastBaseUpdate=c))}if(s!==null){var f=t.baseState;l=0,u=d=c=null,o=s;do{var m=o.lane,y=o.eventTime;if((a&m)===m){u!==null&&(u=u.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,b=o;switch(m=n,y=i,b.tag){case 1:if(g=b.payload,typeof g=="function"){f=g.call(y,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,m=typeof g=="function"?g.call(y,f,m):g,m==null)break e;f=B({},f,m);break e;case 2:ln=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=t.effects,m===null?t.effects=[o]:m.push(o))}else y={eventTime:y,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(d=u=y,c=f):u=u.next=y,l|=m;if(o=o.next,o===null){if(o=t.shared.pending,o===null)break;m=o,o=m.next,m.next=null,t.lastBaseUpdate=m,t.shared.pending=null}}while(!0);if(u===null&&(c=f),t.baseState=c,t.firstBaseUpdate=d,t.lastBaseUpdate=u,n=t.shared.interleaved,n!==null){t=n;do l|=t.lane,t=t.next;while(t!==n)}else s===null&&(t.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=f}}function lc(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],t=a.callback;if(t!==null){if(a.callback=null,a=i,typeof t!="function")throw Error(h(191,t));t.call(a)}}}var ma={},Ve=xn(ma),ia=xn(ma),aa=xn(ma);function Rn(e){if(e===ma)throw Error(h(174));return e}function Bl(e,n){switch(M(aa,n),M(ia,e),M(Ve,ma),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ps(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ps(n,e)}D(Ve),M(Ve,n)}function ui(){D(Ve),D(ia),D(aa)}function cr(e){Rn(aa.current);var n=Rn(Ve.current),i=Ps(n,e.type);n!==i&&(M(ia,e),M(Ve,i))}function Hl(e){ia.current===e&&(D(Ve),D(ia))}var O=xn(0);function vt(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ps=[];function Ul(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var Ua=an.ReactCurrentDispatcher,vs=an.ReactCurrentBatchConfig,Dn=0,W=null,$=null,J=null,ut=!1,Oi=!1,ta=0,xu=0;function ae(){throw Error(h(321))}function Vl(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Fe(e[i],n[i]))return!1;return!0}function Gl(e,n,i,a,t,s){if(Dn=s,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ua.current=e===null||e.memoizedState===null?Su:Cu,e=i(a,t),Oi){s=0;do{if(Oi=!1,ta=0,25<=s)throw Error(h(301));s+=1,J=$=null,n.updateQueue=null,Ua.current=Eu,e=i(a,t)}while(Oi)}if(Ua.current=mt,n=$!==null&&$.next!==null,Dn=0,J=$=W=null,ut=!1,n)throw Error(h(300));return e}function Kl(){var e=ta!==0;return ta=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?W.memoizedState=J=e:J=J.next=e,J}function Te(){if($===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var n=J===null?W.memoizedState:J.next;if(n!==null)J=n,$=e;else{if(e===null)throw Error(h(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},J===null?W.memoizedState=J=e:J=J.next=e}return J}function sa(e,n){return typeof n=="function"?n(e):n}function us(e){var n=Te(),i=n.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=e;var a=$,t=a.baseQueue,s=i.pending;if(s!==null){if(t!==null){var l=t.next;t.next=s.next,s.next=l}a.baseQueue=t=s,i.pending=null}if(t!==null){s=t.next,a=a.baseState;var o=l=null,c=null,d=s;do{var u=d.lane;if((Dn&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=f,l=a):c=c.next=f,W.lanes|=u,Fn|=u}d=d.next}while(d!==null&&d!==s);c===null?l=a:c.next=o,Fe(a,n.memoizedState)||(fe=!0),n.memoizedState=a,n.baseState=l,n.baseQueue=c,i.lastRenderedState=a}if(e=i.interleaved,e!==null){t=e;do s=t.lane,W.lanes|=s,Fn|=s,t=t.next;while(t!==e)}else t===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function ms(e){var n=Te(),i=n.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=e;var a=i.dispatch,t=i.pending,s=n.memoizedState;if(t!==null){i.pending=null;var l=t=t.next;do s=e(s,l.action),l=l.next;while(l!==t);Fe(s,n.memoizedState)||(fe=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),i.lastRenderedState=s}return[s,a]}function dr(){}function rr(e,n){var i=W,a=Te(),t=n(),s=!Fe(a.memoizedState,t);if(s&&(a.memoizedState=t,fe=!0),a=a.queue,$l(ur.bind(null,i,a,e),[e]),a.getSnapshot!==n||s||J!==null&&J.memoizedState.tag&1){if(i.flags|=2048,la(9,vr.bind(null,i,a,t,n),void 0,null),X===null)throw Error(h(349));Dn&30||pr(i,n,t)}return t}function pr(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function vr(e,n,i,a){n.value=i,n.getSnapshot=a,mr(n)&&fr(e)}function ur(e,n,i){return i(function(){mr(n)&&fr(e)})}function mr(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Fe(e,i)}catch{return!0}}function fr(e){var n=en(e,1);n!==null&&De(n,e,1,-1)}function oc(e){var n=Be();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n.queue=e,e=e.dispatch=_u.bind(null,W,e),[n.memoizedState,e]}function la(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function br(){return Te().memoizedState}function Va(e,n,i,a){var t=Be();W.flags|=e,t.memoizedState=la(1|n,i,void 0,a===void 0?null:a)}function Et(e,n,i,a){var t=Te();a=a===void 0?null:a;var s=void 0;if($!==null){var l=$.memoizedState;if(s=l.destroy,a!==null&&Vl(a,l.deps)){t.memoizedState=la(n,i,s,a);return}}W.flags|=e,t.memoizedState=la(1|n,i,s,a)}function cc(e,n){return Va(8390656,8,e,n)}function $l(e,n){return Et(2048,8,e,n)}function gr(e,n){return Et(4,2,e,n)}function wr(e,n){return Et(4,4,e,n)}function hr(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yr(e,n,i){return i=i!=null?i.concat([e]):null,Et(4,4,hr.bind(null,n,e),i)}function Ql(){}function kr(e,n){var i=Te();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&Vl(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function xr(e,n){var i=Te();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&Vl(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function zr(e,n,i){return Dn&21?(Fe(i,n)||(i=Ed(),W.lanes|=i,Fn|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=i)}function zu(e,n){var i=L;L=i!==0&&4>i?i:4,e(!0);var a=vs.transition;vs.transition={};try{e(!1),n()}finally{L=i,vs.transition=a}}function qr(){return Te().memoizedState}function qu(e,n,i){var a=gn(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},_r(e))Sr(n,i);else if(i=lr(e,n,i,a),i!==null){var t=ce();De(i,e,a,t),Cr(i,n,a)}}function _u(e,n,i){var a=gn(e),t={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(_r(e))Sr(n,t);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var l=n.lastRenderedState,o=s(l,i);if(t.hasEagerState=!0,t.eagerState=o,Fe(o,l)){var c=n.interleaved;c===null?(t.next=t,Ol(n)):(t.next=c.next,c.next=t),n.interleaved=t;return}}catch{}finally{}i=lr(e,n,t,a),i!==null&&(t=ce(),De(i,e,a,t),Cr(i,n,a))}}function _r(e){var n=e.alternate;return e===W||n!==null&&n===W}function Sr(e,n){Oi=ut=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Cr(e,n,i){if(i&4194240){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Sl(e,i)}}var mt={readContext:Ne,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Su={readContext:Ne,useCallback:function(e,n){return Be().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:cc,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Va(4194308,4,hr.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Va(4194308,4,e,n)},useInsertionEffect:function(e,n){return Va(4,2,e,n)},useMemo:function(e,n){var i=Be();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=Be();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=qu.bind(null,W,e),[a.memoizedState,e]},useRef:function(e){var n=Be();return e={current:e},n.memoizedState=e},useState:oc,useDebugValue:Ql,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=oc(!1),n=e[0];return e=zu.bind(null,e[1]),Be().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=W,t=Be();if(F){if(i===void 0)throw Error(h(407));i=i()}else{if(i=n(),X===null)throw Error(h(349));Dn&30||pr(a,n,i)}t.memoizedState=i;var s={value:i,getSnapshot:n};return t.queue=s,cc(ur.bind(null,a,s,e),[e]),a.flags|=2048,la(9,vr.bind(null,a,s,i,n),void 0,null),i},useId:function(){var e=Be(),n=X.identifierPrefix;if(F){var i=Ye,a=Qe;i=(a&~(1<<32-Ae(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=ta++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=xu++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Cu={readContext:Ne,useCallback:kr,useContext:Ne,useEffect:$l,useImperativeHandle:yr,useInsertionEffect:gr,useLayoutEffect:wr,useMemo:xr,useReducer:us,useRef:br,useState:function(){return us(sa)},useDebugValue:Ql,useDeferredValue:function(e){var n=Te();return zr(n,$.memoizedState,e)},useTransition:function(){var e=us(sa)[0],n=Te().memoizedState;return[e,n]},useMutableSource:dr,useSyncExternalStore:rr,useId:qr,unstable_isNewReconciler:!1},Eu={readContext:Ne,useCallback:kr,useContext:Ne,useEffect:$l,useImperativeHandle:yr,useInsertionEffect:gr,useLayoutEffect:wr,useMemo:xr,useReducer:ms,useRef:br,useState:function(){return ms(sa)},useDebugValue:Ql,useDeferredValue:function(e){var n=Te();return $===null?n.memoizedState=e:zr(n,$.memoizedState,e)},useTransition:function(){var e=ms(sa)[0],n=Te().memoizedState;return[e,n]},useMutableSource:dr,useSyncExternalStore:rr,useId:qr,unstable_isNewReconciler:!1};function je(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Ys(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:B({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Pt={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=ce(),t=gn(e),s=Je(a,t);s.payload=n,i!=null&&(s.callback=i),n=fn(e,s,t),n!==null&&(De(n,e,t,a),Ha(n,e,t))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=ce(),t=gn(e),s=Je(a,t);s.tag=1,s.payload=n,i!=null&&(s.callback=i),n=fn(e,s,t),n!==null&&(De(n,e,t,a),Ha(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=ce(),a=gn(e),t=Je(i,a);t.tag=2,n!=null&&(t.callback=n),n=fn(e,t,a),n!==null&&(De(n,e,a,i),Ha(n,e,a))}};function dc(e,n,i,a,t,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,l):n.prototype&&n.prototype.isPureReactComponent?!Xi(i,a)||!Xi(t,s):!0}function Er(e,n,i){var a=!1,t=yn,s=n.contextType;return typeof s=="object"&&s!==null?s=Ne(s):(t=ge(n)?Mn:le.current,a=n.contextTypes,s=(a=a!=null)?ri(e,t):yn),n=new n(i,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Pt,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),n}function rc(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&Pt.enqueueReplaceState(n,n.state,null)}function Js(e,n,i,a){var t=e.stateNode;t.props=i,t.state=e.memoizedState,t.refs={},Wl(e);var s=n.contextType;typeof s=="object"&&s!==null?t.context=Ne(s):(s=ge(n)?Mn:le.current,t.context=ri(e,s)),t.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Ys(e,n,s,i),t.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(n=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&Pt.enqueueReplaceState(t,t.state,null),pt(e,i,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,n){try{var i="",a=n;do i+=iv(a),a=a.return;while(a);var t=i}catch(s){t=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:t,digest:null}}function fs(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Xs(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Pu=typeof WeakMap=="function"?WeakMap:Map;function Pr(e,n,i){i=Je(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){bt||(bt=!0,cl=a),Xs(e,n)},i}function Nr(e,n,i){i=Je(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=n.value;i.payload=function(){return a(t)},i.callback=function(){Xs(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){Xs(e,n),typeof a!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),i}function pc(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new Pu;var t=new Set;a.set(n,t)}else t=a.get(n),t===void 0&&(t=new Set,a.set(n,t));t.has(i)||(t.add(i),e=Hu.bind(null,e,n,i),n.then(e,e))}function vc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function uc(e,n,i,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Je(-1,1),n.tag=2,fn(i,n,1))),i.lanes|=1),e)}var Nu=an.ReactCurrentOwner,fe=!1;function oe(e,n,i,a){n.child=e===null?sr(n,null,i,a):vi(n,e.child,i,a)}function mc(e,n,i,a,t){i=i.render;var s=n.ref;return oi(n,t),a=Gl(e,n,i,a,s,t),i=Kl(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,nn(e,n,t)):(F&&i&&jl(n),n.flags|=1,oe(e,n,a,t),n.child)}function fc(e,n,i,a,t){if(e===null){var s=i.type;return typeof s=="function"&&!ao(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=s,Tr(e,n,s,a,t)):(e=Qa(i.type,null,a,n,n.mode,t),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&t)){var l=s.memoizedProps;if(i=i.compare,i=i!==null?i:Xi,i(l,a)&&e.ref===n.ref)return nn(e,n,t)}return n.flags|=1,e=wn(s,a),e.ref=n.ref,e.return=n,n.child=e}function Tr(e,n,i,a,t){if(e!==null){var s=e.memoizedProps;if(Xi(s,a)&&e.ref===n.ref)if(fe=!1,n.pendingProps=a=s,(e.lanes&t)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,nn(e,n,t)}return Zs(e,n,i,a,t)}function Ir(e,n,i){var a=n.pendingProps,t=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(ni,ye),ye|=i;else{if(!(i&1073741824))return e=s!==null?s.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(ni,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:i,M(ni,ye),ye|=a}else s!==null?(a=s.baseLanes|i,n.memoizedState=null):a=i,M(ni,ye),ye|=a;return oe(e,n,t,i),n.child}function Rr(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Zs(e,n,i,a,t){var s=ge(i)?Mn:le.current;return s=ri(n,s),oi(n,t),i=Gl(e,n,i,a,s,t),a=Kl(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,nn(e,n,t)):(F&&a&&jl(n),n.flags|=1,oe(e,n,i,t),n.child)}function bc(e,n,i,a,t){if(ge(i)){var s=!0;lt(n)}else s=!1;if(oi(n,t),n.stateNode===null)Ga(e,n),Er(n,i,a),Js(n,i,a,t),a=!0;else if(e===null){var l=n.stateNode,o=n.memoizedProps;l.props=o;var c=l.context,d=i.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=ge(i)?Mn:le.current,d=ri(n,d));var u=i.getDerivedStateFromProps,f=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==a||c!==d)&&rc(n,l,a,d),ln=!1;var m=n.memoizedState;l.state=m,pt(n,a,l,t),c=n.memoizedState,o!==a||m!==c||be.current||ln?(typeof u=="function"&&(Ys(n,i,u,a),c=n.memoizedState),(o=ln||dc(n,i,o,a,m,c,d))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=c),l.props=a,l.state=c,l.context=d,a=o):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,or(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:je(n.type,o),l.props=d,f=n.pendingProps,m=l.context,c=i.contextType,typeof c=="object"&&c!==null?c=Ne(c):(c=ge(i)?Mn:le.current,c=ri(n,c));var y=i.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==f||m!==c)&&rc(n,l,a,c),ln=!1,m=n.memoizedState,l.state=m,pt(n,a,l,t);var g=n.memoizedState;o!==f||m!==g||be.current||ln?(typeof y=="function"&&(Ys(n,i,y,a),g=n.memoizedState),(d=ln||dc(n,i,d,a,m,g,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,g,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,g,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=g),l.props=a,l.state=g,l.context=c,a=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),a=!1)}return el(e,n,i,a,s,t)}function el(e,n,i,a,t,s){Rr(e,n);var l=(n.flags&128)!==0;if(!a&&!l)return t&&nc(n,i,!1),nn(e,n,s);a=n.stateNode,Nu.current=n;var o=l&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&l?(n.child=vi(n,e.child,null,s),n.child=vi(n,null,o,s)):oe(e,n,o,s),n.memoizedState=a.state,t&&nc(n,i,!0),n.child}function jr(e){var n=e.stateNode;n.pendingContext?ec(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ec(e,n.context,!1),Bl(e,n.containerInfo)}function gc(e,n,i,a,t){return pi(),Ml(t),n.flags|=256,oe(e,n,i,a),n.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lr(e,n,i){var a=n.pendingProps,t=O.current,s=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(t&2)!==0),o?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),M(O,t&1),e===null)return $s(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=a.children,e=a.fallback,s?(a=n.mode,s=n.child,l={mode:"hidden",children:l},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=It(l,a,0,null),e=Ln(e,a,i,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=il(i),n.memoizedState=nl,e):Yl(n,l));if(t=e.memoizedState,t!==null&&(o=t.dehydrated,o!==null))return Tu(e,n,l,a,o,t,i);if(s){s=a.fallback,l=n.mode,t=e.child,o=t.sibling;var c={mode:"hidden",children:a.children};return!(l&1)&&n.child!==t?(a=n.child,a.childLanes=0,a.pendingProps=c,n.deletions=null):(a=wn(t,c),a.subtreeFlags=t.subtreeFlags&14680064),o!==null?s=wn(o,s):(s=Ln(s,l,i,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,a=s,s=n.child,l=e.child.memoizedState,l=l===null?il(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~i,n.memoizedState=nl,a}return s=e.child,e=s.sibling,a=wn(s,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function Yl(e,n){return n=It({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Na(e,n,i,a){return a!==null&&Ml(a),vi(n,e.child,null,i),e=Yl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tu(e,n,i,a,t,s,l){if(i)return n.flags&256?(n.flags&=-257,a=fs(Error(h(422))),Na(e,n,l,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=a.fallback,t=n.mode,a=It({mode:"visible",children:a.children},t,0,null),s=Ln(s,t,l,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,n.mode&1&&vi(n,e.child,null,l),n.child.memoizedState=il(l),n.memoizedState=nl,s);if(!(n.mode&1))return Na(e,n,l,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var o=a.dgst;return a=o,s=Error(h(419)),a=fs(s,a,void 0),Na(e,n,l,a)}if(o=(l&e.childLanes)!==0,fe||o){if(a=X,a!==null){switch(l&-l){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|l)?0:t,t!==0&&t!==s.retryLane&&(s.retryLane=t,en(e,t),De(a,e,t,-1))}return io(),a=fs(Error(h(421))),Na(e,n,l,a)}return t.data==="$?"?(n.flags|=128,n.child=e.child,n=Uu.bind(null,e),t._reactRetry=n,null):(e=s.treeContext,ke=mn(t.nextSibling),xe=n,F=!0,Me=null,e!==null&&(Se[Ce++]=Qe,Se[Ce++]=Ye,Se[Ce++]=An,Qe=e.id,Ye=e.overflow,An=n),n=Yl(n,a.children),n.flags|=4096,n)}function wc(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Qs(e.return,n,i)}function bs(e,n,i,a,t){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:t}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=i,s.tailMode=t)}function Mr(e,n,i){var a=n.pendingProps,t=a.revealOrder,s=a.tail;if(oe(e,n,a.children,i),a=O.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,i,n);else if(e.tag===19)wc(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(M(O,a),!(n.mode&1))n.memoizedState=null;else switch(t){case"forwards":for(i=n.child,t=null;i!==null;)e=i.alternate,e!==null&&vt(e)===null&&(t=i),i=i.sibling;i=t,i===null?(t=n.child,n.child=null):(t=i.sibling,i.sibling=null),bs(n,!1,t,i,s);break;case"backwards":for(i=null,t=n.child,n.child=null;t!==null;){if(e=t.alternate,e!==null&&vt(e)===null){n.child=t;break}e=t.sibling,t.sibling=i,i=t,t=e}bs(n,!0,i,null,s);break;case"together":bs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ga(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function nn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,i=wn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=wn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Iu(e,n,i){switch(n.tag){case 3:jr(n),pi();break;case 5:cr(n);break;case 1:ge(n.type)&&lt(n);break;case 4:Bl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,t=n.memoizedProps.value;M(dt,a._currentValue),a._currentValue=t;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(M(O,O.current&1),n.flags|=128,null):i&n.child.childLanes?Lr(e,n,i):(M(O,O.current&1),e=nn(e,n,i),e!==null?e.sibling:null);M(O,O.current&1);break;case 19:if(a=(i&n.childLanes)!==0,e.flags&128){if(a)return Mr(e,n,i);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),M(O,O.current),a)break;return null;case 22:case 23:return n.lanes=0,Ir(e,n,i)}return nn(e,n,i)}var Ar,al,Dr,Fr;Ar=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};al=function(){};Dr=function(e,n,i,a){var t=e.memoizedProps;if(t!==a){e=n.stateNode,Rn(Ve.current);var s=null;switch(i){case"input":t=_s(e,t),a=_s(e,a),s=[];break;case"select":t=B({},t,{value:void 0}),a=B({},a,{value:void 0}),s=[];break;case"textarea":t=Es(e,t),a=Es(e,a),s=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=tt)}Ns(i,a);var l;i=null;for(d in t)if(!a.hasOwnProperty(d)&&t.hasOwnProperty(d)&&t[d]!=null)if(d==="style"){var o=t[d];for(l in o)o.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vi.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in a){var c=a[d];if(o=t!=null?t[d]:void 0,a.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(i||(i={}),i[l]=c[l])}else i||(s||(s=[]),s.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&A("scroll",e),s||o===c||(s=[])):(s=s||[]).push(d,c))}i&&(s=s||[]).push("style",i);var d=s;(n.updateQueue=d)&&(n.flags|=4)}};Fr=function(e,n,i,a){i!==a&&(n.flags|=4)};function Ei(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)i|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function Ru(e,n,i){var a=n.pendingProps;switch(Ll(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return ge(n.type)&&st(),te(n),null;case 3:return a=n.stateNode,ui(),D(be),D(le),Ul(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ea(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(pl(Me),Me=null))),al(e,n),te(n),null;case 5:Hl(n);var t=Rn(aa.current);if(i=n.type,e!==null&&n.stateNode!=null)Dr(e,n,i,a,t),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(h(166));return te(n),null}if(e=Rn(Ve.current),Ea(n)){a=n.stateNode,i=n.type;var s=n.memoizedProps;switch(a[He]=n,a[na]=s,e=(n.mode&1)!==0,i){case"dialog":A("cancel",a),A("close",a);break;case"iframe":case"object":case"embed":A("load",a);break;case"video":case"audio":for(t=0;t<Ri.length;t++)A(Ri[t],a);break;case"source":A("error",a);break;case"img":case"image":case"link":A("error",a),A("load",a);break;case"details":A("toggle",a);break;case"input":Co(a,s),A("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},A("invalid",a);break;case"textarea":Po(a,s),A("invalid",a)}Ns(i,s),t=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?a.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ca(a.textContent,o,e),t=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ca(a.textContent,o,e),t=["children",""+o]):Vi.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&A("scroll",a)}switch(i){case"input":ha(a),Eo(a,s,!0);break;case"textarea":ha(a),No(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=tt)}a=t,n.updateQueue=a,a!==null&&(n.flags|=4)}else{l=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ud(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(i,{is:a.is}):(e=l.createElement(i),i==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,i),e[He]=n,e[na]=a,Ar(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ts(i,a),i){case"dialog":A("cancel",e),A("close",e),t=a;break;case"iframe":case"object":case"embed":A("load",e),t=a;break;case"video":case"audio":for(t=0;t<Ri.length;t++)A(Ri[t],e);t=a;break;case"source":A("error",e),t=a;break;case"img":case"image":case"link":A("error",e),A("load",e),t=a;break;case"details":A("toggle",e),t=a;break;case"input":Co(e,a),t=_s(e,a),A("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=B({},a,{value:void 0}),A("invalid",e);break;case"textarea":Po(e,a),t=Es(e,a),A("invalid",e);break;default:t=a}Ns(i,t),o=t;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?bd(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&md(e,c)):s==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&Gi(e,c):typeof c=="number"&&Gi(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vi.hasOwnProperty(s)?c!=null&&s==="onScroll"&&A("scroll",e):c!=null&&yl(e,s,c,l))}switch(i){case"input":ha(e),Eo(e,a,!1);break;case"textarea":ha(e),No(e);break;case"option":a.value!=null&&e.setAttribute("value",""+hn(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?ai(e,!!a.multiple,s,!1):a.defaultValue!=null&&ai(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=tt)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Fr(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(h(166));if(i=Rn(aa.current),Rn(Ve.current),Ea(n)){if(a=n.stateNode,i=n.memoizedProps,a[He]=n,(s=a.nodeValue!==i)&&(e=xe,e!==null))switch(e.tag){case 3:Ca(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ca(a.nodeValue,i,(e.mode&1)!==0)}s&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[He]=n,n.stateNode=a}return te(n),null;case 13:if(D(O),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ke!==null&&n.mode&1&&!(n.flags&128))ar(),pi(),n.flags|=98560,s=!1;else if(s=Ea(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(h(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(h(317));s[He]=n}else pi(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),s=!1}else Me!==null&&(pl(Me),Me=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||O.current&1?Q===0&&(Q=3):io())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return ui(),al(e,n),e===null&&Zi(n.stateNode.containerInfo),te(n),null;case 10:return Fl(n.type._context),te(n),null;case 17:return ge(n.type)&&st(),te(n),null;case 19:if(D(O),s=n.memoizedState,s===null)return te(n),null;if(a=(n.flags&128)!==0,l=s.rendering,l===null)if(a)Ei(s,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=vt(e),l!==null){for(n.flags|=128,Ei(s,!1),a=l.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)s=i,e=a,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return M(O,O.current&1|2),n.child}e=e.sibling}s.tail!==null&&G()>fi&&(n.flags|=128,a=!0,Ei(s,!1),n.lanes=4194304)}else{if(!a)if(e=vt(l),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!F)return te(n),null}else 2*G()-s.renderingStartTime>fi&&i!==1073741824&&(n.flags|=128,a=!0,Ei(s,!1),n.lanes=4194304);s.isBackwards?(l.sibling=n.child,n.child=l):(i=s.last,i!==null?i.sibling=l:n.child=l,s.last=l)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=G(),n.sibling=null,i=O.current,M(O,a?i&1|2:i&1),n):(te(n),null);case 22:case 23:return no(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?ye&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function ju(e,n){switch(Ll(n),n.tag){case 1:return ge(n.type)&&st(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ui(),D(be),D(le),Ul(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Hl(n),null;case 13:if(D(O),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));pi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(O),null;case 4:return ui(),null;case 10:return Fl(n.type._context),null;case 22:case 23:return no(),null;case 24:return null;default:return null}}var Ta=!1,se=!1,Lu=typeof WeakSet=="function"?WeakSet:Set,k=null;function ei(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){H(e,n,a)}else i.current=null}function tl(e,n,i){try{i()}catch(a){H(e,n,a)}}var hc=!1;function Mu(e,n){if(Ws=nt,e=Ud(),Rl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var t=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var l=0,o=-1,c=-1,d=0,u=0,f=e,m=null;n:for(;;){for(var y;f!==i||t!==0&&f.nodeType!==3||(o=l+t),f!==s||a!==0&&f.nodeType!==3||(c=l+a),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break n;if(m===i&&++d===t&&(o=l),m===s&&++u===a&&(c=l),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}i=o===-1||c===-1?null:{start:o,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Bs={focusedElem:e,selectionRange:i},nt=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,E=g.memoizedState,p=n.stateNode,r=p.getSnapshotBeforeUpdate(n.elementType===n.type?b:je(n.type,b),E);p.__reactInternalSnapshotBeforeUpdate=r}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){H(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return g=hc,hc=!1,g}function Wi(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var s=t.destroy;t.destroy=void 0,s!==void 0&&tl(n,i,s)}t=t.next}while(t!==a)}}function Nt(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function sl(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Or(e){var n=e.alternate;n!==null&&(e.alternate=null,Or(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[na],delete n[Vs],delete n[wu],delete n[hu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wr(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=tt));else if(a!==4&&(e=e.child,e!==null))for(ll(e,n,i),e=e.sibling;e!==null;)ll(e,n,i),e=e.sibling}function ol(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ol(e,n,i),e=e.sibling;e!==null;)ol(e,n,i),e=e.sibling}var Z=null,Le=!1;function tn(e,n,i){for(i=i.child;i!==null;)Br(e,n,i),i=i.sibling}function Br(e,n,i){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(xt,i)}catch{}switch(i.tag){case 5:se||ei(i,n);case 6:var a=Z,t=Le;Z=null,tn(e,n,i),Z=a,Le=t,Z!==null&&(Le?(e=Z,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Z.removeChild(i.stateNode));break;case 18:Z!==null&&(Le?(e=Z,i=i.stateNode,e.nodeType===8?ds(e.parentNode,i):e.nodeType===1&&ds(e,i),Yi(e)):ds(Z,i.stateNode));break;case 4:a=Z,t=Le,Z=i.stateNode.containerInfo,Le=!0,tn(e,n,i),Z=a,Le=t;break;case 0:case 11:case 14:case 15:if(!se&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var s=t,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&tl(i,n,l),t=t.next}while(t!==a)}tn(e,n,i);break;case 1:if(!se&&(ei(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(o){H(i,n,o)}tn(e,n,i);break;case 21:tn(e,n,i);break;case 22:i.mode&1?(se=(a=se)||i.memoizedState!==null,tn(e,n,i),se=a):tn(e,n,i);break;default:tn(e,n,i)}}function kc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Lu),n.forEach(function(a){var t=Vu.bind(null,e,a);i.has(a)||(i.add(a),a.then(t,t))})}}function Re(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var t=i[a];try{var s=e,l=n,o=l;e:for(;o!==null;){switch(o.tag){case 5:Z=o.stateNode,Le=!1;break e;case 3:Z=o.stateNode.containerInfo,Le=!0;break e;case 4:Z=o.stateNode.containerInfo,Le=!0;break e}o=o.return}if(Z===null)throw Error(h(160));Br(s,l,t),Z=null,Le=!1;var c=t.alternate;c!==null&&(c.return=null),t.return=null}catch(d){H(t,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hr(n,e),n=n.sibling}function Hr(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),We(e),a&4){try{Wi(3,e,e.return),Nt(3,e)}catch(b){H(e,e.return,b)}try{Wi(5,e,e.return)}catch(b){H(e,e.return,b)}}break;case 1:Re(n,e),We(e),a&512&&i!==null&&ei(i,i.return);break;case 5:if(Re(n,e),We(e),a&512&&i!==null&&ei(i,i.return),e.flags&32){var t=e.stateNode;try{Gi(t,"")}catch(b){H(e,e.return,b)}}if(a&4&&(t=e.stateNode,t!=null)){var s=e.memoizedProps,l=i!==null?i.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&pd(t,s),Ts(o,l);var d=Ts(o,s);for(l=0;l<c.length;l+=2){var u=c[l],f=c[l+1];u==="style"?bd(t,f):u==="dangerouslySetInnerHTML"?md(t,f):u==="children"?Gi(t,f):yl(t,u,f,d)}switch(o){case"input":Ss(t,s);break;case"textarea":vd(t,s);break;case"select":var m=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ai(t,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?ai(t,!!s.multiple,s.defaultValue,!0):ai(t,!!s.multiple,s.multiple?[]:"",!1))}t[na]=s}catch(b){H(e,e.return,b)}}break;case 6:if(Re(n,e),We(e),a&4){if(e.stateNode===null)throw Error(h(162));t=e.stateNode,s=e.memoizedProps;try{t.nodeValue=s}catch(b){H(e,e.return,b)}}break;case 3:if(Re(n,e),We(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Yi(n.containerInfo)}catch(b){H(e,e.return,b)}break;case 4:Re(n,e),We(e);break;case 13:Re(n,e),We(e),t=e.child,t.flags&8192&&(s=t.memoizedState!==null,t.stateNode.isHidden=s,!s||t.alternate!==null&&t.alternate.memoizedState!==null||(Zl=G())),a&4&&kc(e);break;case 22:if(u=i!==null&&i.memoizedState!==null,e.mode&1?(se=(d=se)||u,Re(n,e),se=d):Re(n,e),We(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(k=e,u=e.child;u!==null;){for(f=k=u;k!==null;){switch(m=k,y=m.child,m.tag){case 0:case 11:case 14:case 15:Wi(4,m,m.return);break;case 1:ei(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){a=m,i=m.return;try{n=a,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(b){H(a,i,b)}}break;case 5:ei(m,m.return);break;case 22:if(m.memoizedState!==null){zc(f);continue}}y!==null?(y.return=m,k=y):zc(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{t=f.stateNode,d?(s=t.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=fd("display",l))}catch(b){H(e,e.return,b)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){H(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Re(n,e),We(e),a&4&&kc(e);break;case 21:break;default:Re(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Wr(i)){var a=i;break e}i=i.return}throw Error(h(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&(Gi(t,""),a.flags&=-33);var s=yc(e);ol(e,s,t);break;case 3:case 4:var l=a.stateNode.containerInfo,o=yc(e);ll(e,o,l);break;default:throw Error(h(161))}}catch(c){H(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Au(e,n,i){k=e,Ur(e)}function Ur(e,n,i){for(var a=(e.mode&1)!==0;k!==null;){var t=k,s=t.child;if(t.tag===22&&a){var l=t.memoizedState!==null||Ta;if(!l){var o=t.alternate,c=o!==null&&o.memoizedState!==null||se;o=Ta;var d=se;if(Ta=l,(se=c)&&!d)for(k=t;k!==null;)l=k,c=l.child,l.tag===22&&l.memoizedState!==null?qc(t):c!==null?(c.return=l,k=c):qc(t);for(;s!==null;)k=s,Ur(s),s=s.sibling;k=t,Ta=o,se=d}xc(e)}else t.subtreeFlags&8772&&s!==null?(s.return=t,k=s):xc(e)}}function xc(e){for(;k!==null;){var n=k;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||Nt(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!se)if(i===null)a.componentDidMount();else{var t=n.elementType===n.type?i.memoizedProps:je(n.type,i.memoizedProps);a.componentDidUpdate(t,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&lc(n,s,a);break;case 3:var l=n.updateQueue;if(l!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}lc(n,l,i)}break;case 5:var o=n.stateNode;if(i===null&&n.flags&4){i=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Yi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}se||n.flags&512&&sl(n)}catch(m){H(n,n.return,m)}}if(n===e){k=null;break}if(i=n.sibling,i!==null){i.return=n.return,k=i;break}k=n.return}}function zc(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var i=n.sibling;if(i!==null){i.return=n.return,k=i;break}k=n.return}}function qc(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Nt(4,n)}catch(c){H(n,i,c)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var t=n.return;try{a.componentDidMount()}catch(c){H(n,t,c)}}var s=n.return;try{sl(n)}catch(c){H(n,s,c)}break;case 5:var l=n.return;try{sl(n)}catch(c){H(n,l,c)}}}catch(c){H(n,n.return,c)}if(n===e){k=null;break}var o=n.sibling;if(o!==null){o.return=n.return,k=o;break}k=n.return}}var Du=Math.ceil,ft=an.ReactCurrentDispatcher,Jl=an.ReactCurrentOwner,Pe=an.ReactCurrentBatchConfig,R=0,X=null,K=null,ee=0,ye=0,ni=xn(0),Q=0,oa=null,Fn=0,Tt=0,Xl=0,Bi=null,ue=null,Zl=0,fi=1/0,Ke=null,bt=!1,cl=null,bn=null,Ia=!1,rn=null,gt=0,Hi=0,dl=null,Ka=-1,$a=0;function ce(){return R&6?G():Ka!==-1?Ka:Ka=G()}function gn(e){return e.mode&1?R&2&&ee!==0?ee&-ee:ku.transition!==null?($a===0&&($a=Ed()),$a):(e=L,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function De(e,n,i,a){if(50<Hi)throw Hi=0,dl=null,Error(h(185));pa(e,i,a),(!(R&2)||e!==X)&&(e===X&&(!(R&2)&&(Tt|=i),Q===4&&cn(e,ee)),we(e,a),i===1&&R===0&&!(n.mode&1)&&(fi=G()+500,Ct&&zn()))}function we(e,n){var i=e.callbackNode;kv(e,n);var a=et(e,e===X?ee:0);if(a===0)i!==null&&Ro(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&Ro(i),n===1)e.tag===0?yu(_c.bind(null,e)):er(_c.bind(null,e)),bu(function(){!(R&6)&&zn()}),i=null;else{switch(Pd(a)){case 1:i=_l;break;case 4:i=Sd;break;case 16:i=Za;break;case 536870912:i=Cd;break;default:i=Za}i=Xr(i,Vr.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Vr(e,n){if(Ka=-1,$a=0,R&6)throw Error(h(327));var i=e.callbackNode;if(ci()&&e.callbackNode!==i)return null;var a=et(e,e===X?ee:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=wt(e,a);else{n=a;var t=R;R|=2;var s=Kr();(X!==e||ee!==n)&&(Ke=null,fi=G()+500,jn(e,n));do try{Wu();break}catch(o){Gr(e,o)}while(!0);Dl(),ft.current=s,R=t,K!==null?n=0:(X=null,ee=0,n=Q)}if(n!==0){if(n===2&&(t=Ms(e),t!==0&&(a=t,n=rl(e,t))),n===1)throw i=oa,jn(e,0),cn(e,a),we(e,G()),i;if(n===6)cn(e,a);else{if(t=e.current.alternate,!(a&30)&&!Fu(t)&&(n=wt(e,a),n===2&&(s=Ms(e),s!==0&&(a=s,n=rl(e,s))),n===1))throw i=oa,jn(e,0),cn(e,a),we(e,G()),i;switch(e.finishedWork=t,e.finishedLanes=a,n){case 0:case 1:throw Error(h(345));case 2:Pn(e,ue,Ke);break;case 3:if(cn(e,a),(a&130023424)===a&&(n=Zl+500-G(),10<n)){if(et(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){ce(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Us(Pn.bind(null,e,ue,Ke),n);break}Pn(e,ue,Ke);break;case 4:if(cn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,t=-1;0<a;){var l=31-Ae(a);s=1<<l,l=n[l],l>t&&(t=l),a&=~s}if(a=t,a=G()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Du(a/1960))-a,10<a){e.timeoutHandle=Us(Pn.bind(null,e,ue,Ke),a);break}Pn(e,ue,Ke);break;case 5:Pn(e,ue,Ke);break;default:throw Error(h(329))}}}return we(e,G()),e.callbackNode===i?Vr.bind(null,e):null}function rl(e,n){var i=Bi;return e.current.memoizedState.isDehydrated&&(jn(e,n).flags|=256),e=wt(e,n),e!==2&&(n=ue,ue=i,n!==null&&pl(n)),e}function pl(e){ue===null?ue=e:ue.push.apply(ue,e)}function Fu(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var t=i[a],s=t.getSnapshot;t=t.value;try{if(!Fe(s(),t))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cn(e,n){for(n&=~Xl,n&=~Tt,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Ae(n),a=1<<i;e[i]=-1,n&=~a}}function _c(e){if(R&6)throw Error(h(327));ci();var n=et(e,0);if(!(n&1))return we(e,G()),null;var i=wt(e,n);if(e.tag!==0&&i===2){var a=Ms(e);a!==0&&(n=a,i=rl(e,a))}if(i===1)throw i=oa,jn(e,0),cn(e,n),we(e,G()),i;if(i===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Pn(e,ue,Ke),we(e,G()),null}function eo(e,n){var i=R;R|=1;try{return e(n)}finally{R=i,R===0&&(fi=G()+500,Ct&&zn())}}function On(e){rn!==null&&rn.tag===0&&!(R&6)&&ci();var n=R;R|=1;var i=Pe.transition,a=L;try{if(Pe.transition=null,L=1,e)return e()}finally{L=a,Pe.transition=i,R=n,!(R&6)&&zn()}}function no(){ye=ni.current,D(ni)}function jn(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,fu(i)),K!==null)for(i=K.return;i!==null;){var a=i;switch(Ll(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&st();break;case 3:ui(),D(be),D(le),Ul();break;case 5:Hl(a);break;case 4:ui();break;case 13:D(O);break;case 19:D(O);break;case 10:Fl(a.type._context);break;case 22:case 23:no()}i=i.return}if(X=e,K=e=wn(e.current,null),ee=ye=n,Q=0,oa=null,Xl=Tt=Fn=0,ue=Bi=null,In!==null){for(n=0;n<In.length;n++)if(i=In[n],a=i.interleaved,a!==null){i.interleaved=null;var t=a.next,s=i.pending;if(s!==null){var l=s.next;s.next=t,a.next=l}i.pending=a}In=null}return e}function Gr(e,n){do{var i=K;try{if(Dl(),Ua.current=mt,ut){for(var a=W.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}ut=!1}if(Dn=0,J=$=W=null,Oi=!1,ta=0,Jl.current=null,i===null||i.return===null){Q=1,oa=n,K=null;break}e:{var s=e,l=i.return,o=i,c=n;if(n=ee,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=vc(l);if(y!==null){y.flags&=-257,uc(y,l,o,s,n),y.mode&1&&pc(s,d,n),n=y,c=d;var g=n.updateQueue;if(g===null){var b=new Set;b.add(c),n.updateQueue=b}else g.add(c);break e}else{if(!(n&1)){pc(s,d,n),io();break e}c=Error(h(426))}}else if(F&&o.mode&1){var E=vc(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),uc(E,l,o,s,n),Ml(mi(c,o));break e}}s=c=mi(c,o),Q!==4&&(Q=2),Bi===null?Bi=[s]:Bi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var p=Pr(s,c,n);sc(s,p);break e;case 1:o=c;var r=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof r.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(bn===null||!bn.has(v)))){s.flags|=65536,n&=-n,s.lanes|=n;var w=Nr(s,o,n);sc(s,w);break e}}s=s.return}while(s!==null)}Qr(i)}catch(x){n=x,K===i&&i!==null&&(K=i=i.return);continue}break}while(!0)}function Kr(){var e=ft.current;return ft.current=mt,e===null?mt:e}function io(){(Q===0||Q===3||Q===2)&&(Q=4),X===null||!(Fn&268435455)&&!(Tt&268435455)||cn(X,ee)}function wt(e,n){var i=R;R|=2;var a=Kr();(X!==e||ee!==n)&&(Ke=null,jn(e,n));do try{Ou();break}catch(t){Gr(e,t)}while(!0);if(Dl(),R=i,ft.current=a,K!==null)throw Error(h(261));return X=null,ee=0,Q}function Ou(){for(;K!==null;)$r(K)}function Wu(){for(;K!==null&&!vv();)$r(K)}function $r(e){var n=Jr(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Qr(e):K=n,Jl.current=null}function Qr(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=ju(i,n),i!==null){i.flags&=32767,K=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,K=null;return}}else if(i=Ru(i,n,ye),i!==null){K=i;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);Q===0&&(Q=5)}function Pn(e,n,i){var a=L,t=Pe.transition;try{Pe.transition=null,L=1,Bu(e,n,i,a)}finally{Pe.transition=t,L=a}return null}function Bu(e,n,i,a){do ci();while(rn!==null);if(R&6)throw Error(h(327));i=e.finishedWork;var t=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var s=i.lanes|i.childLanes;if(xv(e,s),e===X&&(K=X=null,ee=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Ia||(Ia=!0,Xr(Za,function(){return ci(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=Pe.transition,Pe.transition=null;var l=L;L=1;var o=R;R|=4,Jl.current=null,Mu(e,i),Hr(i,e),cu(Bs),nt=!!Ws,Bs=Ws=null,e.current=i,Au(i),uv(),R=o,L=l,Pe.transition=s}else e.current=i;if(Ia&&(Ia=!1,rn=e,gt=t),s=e.pendingLanes,s===0&&(bn=null),bv(i.stateNode),we(e,G()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)t=n[i],a(t.value,{componentStack:t.stack,digest:t.digest});if(bt)throw bt=!1,e=cl,cl=null,e;return gt&1&&e.tag!==0&&ci(),s=e.pendingLanes,s&1?e===dl?Hi++:(Hi=0,dl=e):Hi=0,zn(),null}function ci(){if(rn!==null){var e=Pd(gt),n=Pe.transition,i=L;try{if(Pe.transition=null,L=16>e?16:e,rn===null)var a=!1;else{if(e=rn,rn=null,gt=0,R&6)throw Error(h(331));var t=R;for(R|=4,k=e.current;k!==null;){var s=k,l=s.child;if(k.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(k=d;k!==null;){var u=k;switch(u.tag){case 0:case 11:case 15:Wi(8,u,s)}var f=u.child;if(f!==null)f.return=u,k=f;else for(;k!==null;){u=k;var m=u.sibling,y=u.return;if(Or(u),u===d){k=null;break}if(m!==null){m.return=y,k=m;break}k=y}}}var g=s.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}k=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,k=l;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var r=e.current;for(k=r;k!==null;){l=k;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,k=v;else e:for(l=r;k!==null;){if(o=k,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Nt(9,o)}}catch(x){H(o,o.return,x)}if(o===l){k=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,k=w;break e}k=o.return}}if(R=t,zn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(xt,e)}catch{}a=!0}return a}finally{L=i,Pe.transition=n}}return!1}function Sc(e,n,i){n=mi(i,n),n=Pr(e,n,1),e=fn(e,n,1),n=ce(),e!==null&&(pa(e,1,n),we(e,n))}function H(e,n,i){if(e.tag===3)Sc(e,e,i);else for(;n!==null;){if(n.tag===3){Sc(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(bn===null||!bn.has(a))){e=mi(i,e),e=Nr(n,e,1),n=fn(n,e,1),e=ce(),n!==null&&(pa(n,1,e),we(n,e));break}}n=n.return}}function Hu(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&i,X===e&&(ee&i)===i&&(Q===4||Q===3&&(ee&130023424)===ee&&500>G()-Zl?jn(e,0):Xl|=i),we(e,n)}function Yr(e,n){n===0&&(e.mode&1?(n=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):n=1);var i=ce();e=en(e,n),e!==null&&(pa(e,n,i),we(e,i))}function Uu(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Yr(e,i)}function Vu(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(i=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(h(314))}a!==null&&a.delete(n),Yr(e,i)}var Jr;Jr=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||be.current)fe=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return fe=!1,Iu(e,n,i);fe=!!(e.flags&131072)}else fe=!1,F&&n.flags&1048576&&nr(n,ct,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Ga(e,n),e=n.pendingProps;var t=ri(n,le.current);oi(n,i),t=Gl(null,n,a,e,t,i);var s=Kl();return n.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ge(a)?(s=!0,lt(n)):s=!1,n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,Wl(n),t.updater=Pt,n.stateNode=t,t._reactInternals=n,Js(n,a,e,i),n=el(null,n,a,!0,s,i)):(n.tag=0,F&&s&&jl(n),oe(null,n,t,i),n=n.child),n;case 16:a=n.elementType;e:{switch(Ga(e,n),e=n.pendingProps,t=a._init,a=t(a._payload),n.type=a,t=n.tag=Ku(a),e=je(a,e),t){case 0:n=Zs(null,n,a,e,i);break e;case 1:n=bc(null,n,a,e,i);break e;case 11:n=mc(null,n,a,e,i);break e;case 14:n=fc(null,n,a,je(a.type,e),i);break e}throw Error(h(306,a,""))}return n;case 0:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:je(a,t),Zs(e,n,a,t,i);case 1:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:je(a,t),bc(e,n,a,t,i);case 3:e:{if(jr(n),e===null)throw Error(h(387));a=n.pendingProps,s=n.memoizedState,t=s.element,or(e,n),pt(n,a,null,i);var l=n.memoizedState;if(a=l.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){t=mi(Error(h(423)),n),n=gc(e,n,a,i,t);break e}else if(a!==t){t=mi(Error(h(424)),n),n=gc(e,n,a,i,t);break e}else for(ke=mn(n.stateNode.containerInfo.firstChild),xe=n,F=!0,Me=null,i=sr(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(pi(),a===t){n=nn(e,n,i);break e}oe(e,n,a,i)}n=n.child}return n;case 5:return cr(n),e===null&&$s(n),a=n.type,t=n.pendingProps,s=e!==null?e.memoizedProps:null,l=t.children,Hs(a,t)?l=null:s!==null&&Hs(a,s)&&(n.flags|=32),Rr(e,n),oe(e,n,l,i),n.child;case 6:return e===null&&$s(n),null;case 13:return Lr(e,n,i);case 4:return Bl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=vi(n,null,a,i):oe(e,n,a,i),n.child;case 11:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:je(a,t),mc(e,n,a,t,i);case 7:return oe(e,n,n.pendingProps,i),n.child;case 8:return oe(e,n,n.pendingProps.children,i),n.child;case 12:return oe(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,t=n.pendingProps,s=n.memoizedProps,l=t.value,M(dt,a._currentValue),a._currentValue=l,s!==null)if(Fe(s.value,l)){if(s.children===t.children&&!be.current){n=nn(e,n,i);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===a){if(s.tag===1){c=Je(-1,i&-i),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=i,c=s.alternate,c!==null&&(c.lanes|=i),Qs(s.return,i,n),o.lanes|=i;break}c=c.next}}else if(s.tag===10)l=s.type===n.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(h(341));l.lanes|=i,o=l.alternate,o!==null&&(o.lanes|=i),Qs(l,i,n),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===n){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}oe(e,n,t.children,i),n=n.child}return n;case 9:return t=n.type,a=n.pendingProps.children,oi(n,i),t=Ne(t),a=a(t),n.flags|=1,oe(e,n,a,i),n.child;case 14:return a=n.type,t=je(a,n.pendingProps),t=je(a.type,t),fc(e,n,a,t,i);case 15:return Tr(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,t=n.pendingProps,t=n.elementType===a?t:je(a,t),Ga(e,n),n.tag=1,ge(a)?(e=!0,lt(n)):e=!1,oi(n,i),Er(n,a,t),Js(n,a,t,i),el(null,n,a,!0,e,i);case 19:return Mr(e,n,i);case 22:return Ir(e,n,i)}throw Error(h(156,n.tag))};function Xr(e,n){return _d(e,n)}function Gu(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,i,a){return new Gu(e,n,i,a)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ku(e){if(typeof e=="function")return ao(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xl)return 11;if(e===zl)return 14}return 2}function wn(e,n){var i=e.alternate;return i===null?(i=Ee(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Qa(e,n,i,a,t,s){var l=2;if(a=e,typeof e=="function")ao(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vn:return Ln(i.children,t,s,n);case kl:l=8,t|=8;break;case ks:return e=Ee(12,i,n,t|2),e.elementType=ks,e.lanes=s,e;case xs:return e=Ee(13,i,n,t),e.elementType=xs,e.lanes=s,e;case zs:return e=Ee(19,i,n,t),e.elementType=zs,e.lanes=s,e;case cd:return It(i,t,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:l=10;break e;case od:l=9;break e;case xl:l=11;break e;case zl:l=14;break e;case sn:l=16,a=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=Ee(l,i,n,t),n.elementType=e,n.type=a,n.lanes=s,n}function Ln(e,n,i,a){return e=Ee(7,e,a,n),e.lanes=i,e}function It(e,n,i,a){return e=Ee(22,e,a,n),e.elementType=cd,e.lanes=i,e.stateNode={isHidden:!1},e}function gs(e,n,i){return e=Ee(6,e,null,n),e.lanes=i,e}function ws(e,n,i){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $u(e,n,i,a,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xt(0),this.expirationTimes=Xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xt(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function to(e,n,i,a,t,s,l,o,c){return e=new $u(e,n,i,o,c),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ee(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wl(s),e}function Qu(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function Zr(e){if(!e)return yn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var i=e.type;if(ge(i))return Zd(e,i,n)}return n}function ep(e,n,i,a,t,s,l,o,c){return e=to(i,a,!0,e,t,s,l,o,c),e.context=Zr(null),i=e.current,a=ce(),t=gn(i),s=Je(a,t),s.callback=n??null,fn(i,s,t),e.current.lanes=t,pa(e,t,a),we(e,a),e}function Rt(e,n,i,a){var t=n.current,s=ce(),l=gn(t);return i=Zr(i),n.context===null?n.context=i:n.pendingContext=i,n=Je(s,l),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=fn(t,n,l),e!==null&&(De(e,t,l,s),Ha(e,t,l)),l}function ht(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function so(e,n){Cc(e,n),(e=e.alternate)&&Cc(e,n)}function Yu(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function lo(e){this._internalRoot=e}jt.prototype.render=lo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));Rt(e,n,null,null)};jt.prototype.unmount=lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;On(function(){Rt(null,e,null,null)}),n[Ze]=null}};function jt(e){this._internalRoot=e}jt.prototype.unstable_scheduleHydration=function(e){if(e){var n=Id();e={blockedOn:null,target:e,priority:n};for(var i=0;i<on.length&&n!==0&&n<on[i].priority;i++);on.splice(i,0,e),i===0&&jd(e)}};function oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lt(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function Ju(e,n,i,a,t){if(t){if(typeof a=="function"){var s=a;a=function(){var d=ht(l);s.call(d)}}var l=ep(n,a,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=l,e[Ze]=l.current,Zi(e.nodeType===8?e.parentNode:e),On(),l}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var o=a;a=function(){var d=ht(c);o.call(d)}}var c=to(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=c,e[Ze]=c.current,Zi(e.nodeType===8?e.parentNode:e),On(function(){Rt(n,c,i,a)}),c}function Mt(e,n,i,a,t){var s=i._reactRootContainer;if(s){var l=s;if(typeof t=="function"){var o=t;t=function(){var c=ht(l);o.call(c)}}Rt(n,l,e,t)}else l=Ju(i,n,e,t,a);return ht(l)}Nd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Ii(n.pendingLanes);i!==0&&(Sl(n,i|1),we(n,G()),!(R&6)&&(fi=G()+500,zn()))}break;case 13:On(function(){var a=en(e,1);if(a!==null){var t=ce();De(a,e,1,t)}}),so(e,1)}};Cl=function(e){if(e.tag===13){var n=en(e,134217728);if(n!==null){var i=ce();De(n,e,134217728,i)}so(e,134217728)}};Td=function(e){if(e.tag===13){var n=gn(e),i=en(e,n);if(i!==null){var a=ce();De(i,e,n,a)}so(e,n)}};Id=function(){return L};Rd=function(e,n){var i=L;try{return L=e,n()}finally{L=i}};Rs=function(e,n,i){switch(n){case"input":if(Ss(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var t=St(a);if(!t)throw Error(h(90));rd(a),Ss(a,t)}}}break;case"textarea":vd(e,i);break;case"select":n=i.value,n!=null&&ai(e,!!i.multiple,n,!1)}};hd=eo;yd=On;var Xu={usingClientEntryPoint:!1,Events:[ua,Qn,St,gd,wd,eo]},Pi={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zu={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||Yu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{xt=Ra.inject(Zu),Ue=Ra}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xu;qe.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oo(n))throw Error(h(200));return Qu(e,n,null,i)};qe.createRoot=function(e,n){if(!oo(e))throw Error(h(299));var i=!1,a="",t=np;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),n=to(e,1,!1,null,null,i,!1,a,t),e[Ze]=n.current,Zi(e.nodeType===8?e.parentNode:e),new lo(n)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=zd(n),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return On(e)};qe.hydrate=function(e,n,i){if(!Lt(n))throw Error(h(200));return Mt(null,e,n,!0,i)};qe.hydrateRoot=function(e,n,i){if(!oo(e))throw Error(h(405));var a=i!=null&&i.hydratedSources||null,t=!1,s="",l=np;if(i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),n=ep(n,null,e,1,i??null,t,!1,s,l),e[Ze]=n.current,Zi(e),a)for(e=0;e<a.length;e++)i=a[e],t=i._getVersion,t=t(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,t]:n.mutableSourceEagerHydrationData.push(i,t);return new jt(n)};qe.render=function(e,n,i){if(!Lt(n))throw Error(h(200));return Mt(null,e,n,!1,i)};qe.unmountComponentAtNode=function(e){if(!Lt(e))throw Error(h(40));return e._reactRootContainer?(On(function(){Mt(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};qe.unstable_batchedUpdates=eo;qe.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!Lt(i))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Mt(e,n,i,!1,a)};qe.version="18.3.1-next-f1338f8080-20240426";function ip(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip)}catch(e){console.error(e)}}ip(),id.exports=qe;var em=id.exports,ap,Pc=em;ap=Pc.createRoot,Pc.hydrateRoot;var co={},ro={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var n;(function(a){a.Root="root",a.Text="text",a.Directive="directive",a.Comment="comment",a.Script="script",a.Style="style",a.Tag="tag",a.CDATA="cdata",a.Doctype="doctype"})(n=e.ElementType||(e.ElementType={}));function i(a){return a.type===n.Tag||a.type===n.Script||a.type===n.Style}e.isTag=i,e.Root=n.Root,e.Text=n.Text,e.Directive=n.Directive,e.Comment=n.Comment,e.Script=n.Script,e.Style=n.Style,e.Tag=n.Tag,e.CDATA=n.CDATA,e.Doctype=n.Doctype})(ro);var N={},qn=me&&me.__extends||function(){var e=function(n,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])},e(n,i)};return function(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");e(n,i);function a(){this.constructor=n}n.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}}(),Ui=me&&me.__assign||function(){return Ui=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Ui.apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});N.cloneNode=N.hasChildren=N.isDocument=N.isDirective=N.isComment=N.isText=N.isCDATA=N.isTag=N.Element=N.Document=N.CDATA=N.NodeWithChildren=N.ProcessingInstruction=N.Comment=N.Text=N.DataNode=N.Node=void 0;var he=ro,po=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(n){this.parent=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(n){this.prev=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(n){this.next=n},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(n){return n===void 0&&(n=!1),vo(this,n)},e}();N.Node=po;var At=function(e){qn(n,e);function n(i){var a=e.call(this)||this;return a.data=i,a}return Object.defineProperty(n.prototype,"nodeValue",{get:function(){return this.data},set:function(i){this.data=i},enumerable:!1,configurable:!0}),n}(po);N.DataNode=At;var tp=function(e){qn(n,e);function n(){var i=e!==null&&e.apply(this,arguments)||this;return i.type=he.ElementType.Text,i}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),n}(At);N.Text=tp;var sp=function(e){qn(n,e);function n(){var i=e!==null&&e.apply(this,arguments)||this;return i.type=he.ElementType.Comment,i}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),n}(At);N.Comment=sp;var lp=function(e){qn(n,e);function n(i,a){var t=e.call(this,a)||this;return t.name=i,t.type=he.ElementType.Directive,t}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),n}(At);N.ProcessingInstruction=lp;var Dt=function(e){qn(n,e);function n(i){var a=e.call(this)||this;return a.children=i,a}return Object.defineProperty(n.prototype,"firstChild",{get:function(){var i;return(i=this.children[0])!==null&&i!==void 0?i:null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"childNodes",{get:function(){return this.children},set:function(i){this.children=i},enumerable:!1,configurable:!0}),n}(po);N.NodeWithChildren=Dt;var op=function(e){qn(n,e);function n(){var i=e!==null&&e.apply(this,arguments)||this;return i.type=he.ElementType.CDATA,i}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),n}(Dt);N.CDATA=op;var cp=function(e){qn(n,e);function n(){var i=e!==null&&e.apply(this,arguments)||this;return i.type=he.ElementType.Root,i}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),n}(Dt);N.Document=cp;var dp=function(e){qn(n,e);function n(i,a,t,s){t===void 0&&(t=[]),s===void 0&&(s=i==="script"?he.ElementType.Script:i==="style"?he.ElementType.Style:he.ElementType.Tag);var l=e.call(this,t)||this;return l.name=i,l.attribs=a,l.type=s,l}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"tagName",{get:function(){return this.name},set:function(i){this.name=i},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"attributes",{get:function(){var i=this;return Object.keys(this.attribs).map(function(a){var t,s;return{name:a,value:i.attribs[a],namespace:(t=i["x-attribsNamespace"])===null||t===void 0?void 0:t[a],prefix:(s=i["x-attribsPrefix"])===null||s===void 0?void 0:s[a]}})},enumerable:!1,configurable:!0}),n}(Dt);N.Element=dp;function rp(e){return(0,he.isTag)(e)}N.isTag=rp;function pp(e){return e.type===he.ElementType.CDATA}N.isCDATA=pp;function vp(e){return e.type===he.ElementType.Text}N.isText=vp;function up(e){return e.type===he.ElementType.Comment}N.isComment=up;function mp(e){return e.type===he.ElementType.Directive}N.isDirective=mp;function fp(e){return e.type===he.ElementType.Root}N.isDocument=fp;function nm(e){return Object.prototype.hasOwnProperty.call(e,"children")}N.hasChildren=nm;function vo(e,n){n===void 0&&(n=!1);var i;if(vp(e))i=new tp(e.data);else if(up(e))i=new sp(e.data);else if(rp(e)){var a=n?hs(e.children):[],t=new dp(e.name,Ui({},e.attribs),a);a.forEach(function(c){return c.parent=t}),e.namespace!=null&&(t.namespace=e.namespace),e["x-attribsNamespace"]&&(t["x-attribsNamespace"]=Ui({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(t["x-attribsPrefix"]=Ui({},e["x-attribsPrefix"])),i=t}else if(pp(e)){var a=n?hs(e.children):[],s=new op(a);a.forEach(function(d){return d.parent=s}),i=s}else if(fp(e)){var a=n?hs(e.children):[],l=new cp(a);a.forEach(function(d){return d.parent=l}),e["x-mode"]&&(l["x-mode"]=e["x-mode"]),i=l}else if(mp(e)){var o=new lp(e.name,e.data);e["x-name"]!=null&&(o["x-name"]=e["x-name"],o["x-publicId"]=e["x-publicId"],o["x-systemId"]=e["x-systemId"]),i=o}else throw new Error("Not implemented yet: ".concat(e.type));return i.startIndex=e.startIndex,i.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(i.sourceCodeLocation=e.sourceCodeLocation),i}N.cloneNode=vo;function hs(e){for(var n=e.map(function(a){return vo(a,!0)}),i=1;i<n.length;i++)n[i].prev=n[i-1],n[i-1].next=n[i];return n}(function(e){var n=me&&me.__createBinding||(Object.create?function(o,c,d,u){u===void 0&&(u=d);var f=Object.getOwnPropertyDescriptor(c,d);(!f||("get"in f?!c.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return c[d]}}),Object.defineProperty(o,u,f)}:function(o,c,d,u){u===void 0&&(u=d),o[u]=c[d]}),i=me&&me.__exportStar||function(o,c){for(var d in o)d!=="default"&&!Object.prototype.hasOwnProperty.call(c,d)&&n(c,o,d)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var a=ro,t=N;i(N,e);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},l=function(){function o(c,d,u){this.dom=[],this.root=new t.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof d=="function"&&(u=d,d=s),typeof c=="object"&&(d=c,c=void 0),this.callback=c??null,this.options=d??s,this.elementCB=u??null}return o.prototype.onparserinit=function(c){this.parser=c},o.prototype.onreset=function(){this.dom=[],this.root=new t.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},o.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},o.prototype.onerror=function(c){this.handleCallback(c)},o.prototype.onclosetag=function(){this.lastNode=null;var c=this.tagStack.pop();this.options.withEndIndices&&(c.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(c)},o.prototype.onopentag=function(c,d){var u=this.options.xmlMode?a.ElementType.Tag:void 0,f=new t.Element(c,d,void 0,u);this.addNode(f),this.tagStack.push(f)},o.prototype.ontext=function(c){var d=this.lastNode;if(d&&d.type===a.ElementType.Text)d.data+=c,this.options.withEndIndices&&(d.endIndex=this.parser.endIndex);else{var u=new t.Text(c);this.addNode(u),this.lastNode=u}},o.prototype.oncomment=function(c){if(this.lastNode&&this.lastNode.type===a.ElementType.Comment){this.lastNode.data+=c;return}var d=new t.Comment(c);this.addNode(d),this.lastNode=d},o.prototype.oncommentend=function(){this.lastNode=null},o.prototype.oncdatastart=function(){var c=new t.Text(""),d=new t.CDATA([c]);this.addNode(d),c.parent=d,this.lastNode=c},o.prototype.oncdataend=function(){this.lastNode=null},o.prototype.onprocessinginstruction=function(c,d){var u=new t.ProcessingInstruction(c,d);this.addNode(u)},o.prototype.handleCallback=function(c){if(typeof this.callback=="function")this.callback(c,this.dom);else if(c)throw c},o.prototype.addNode=function(c){var d=this.tagStack[this.tagStack.length-1],u=d.children[d.children.length-1];this.options.withStartIndices&&(c.startIndex=this.parser.startIndex),this.options.withEndIndices&&(c.endIndex=this.parser.endIndex),d.children.push(c),u&&(c.prev=u,u.next=c),c.parent=d,this.lastNode=null},o}();e.DomHandler=l,e.default=l})(co);var uo={},mo={};Object.defineProperty(mo,"__esModule",{value:!0});var Nc="html",Tc="head",ja="body",im=/<([a-zA-Z]+[0-9]?)/,Ic=/<head[^]*>/i,Rc=/<body[^]*>/i,yt=function(e,n){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},vl=function(e,n){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},jc=typeof window=="object"&&window.DOMParser;if(typeof jc=="function"){var am=new jc,tm="text/html";vl=function(e,n){return n&&(e="<".concat(n,">").concat(e,"</").concat(n,">")),am.parseFromString(e,tm)},yt=vl}if(typeof document=="object"&&document.implementation){var La=document.implementation.createHTMLDocument();yt=function(e,n){if(n){var i=La.documentElement.querySelector(n);return i&&(i.innerHTML=e),La}return La.documentElement.innerHTML=e,La}}var Ma=typeof document=="object"&&document.createElement("template"),ul;Ma&&Ma.content&&(ul=function(e){return Ma.innerHTML=e,Ma.content.childNodes});function sm(e){var n,i,a=e.match(im),t=a&&a[1]?a[1].toLowerCase():"";switch(t){case Nc:{var s=vl(e);if(!Ic.test(e)){var l=s.querySelector(Tc);(n=l==null?void 0:l.parentNode)===null||n===void 0||n.removeChild(l)}if(!Rc.test(e)){var l=s.querySelector(ja);(i=l==null?void 0:l.parentNode)===null||i===void 0||i.removeChild(l)}return s.querySelectorAll(Nc)}case Tc:case ja:{var o=yt(e).querySelectorAll(t);return Rc.test(e)&&Ic.test(e)?o[0].parentNode.childNodes:o}default:{if(ul)return ul(e);var l=yt(e,ja).querySelector(ja);return l.childNodes}}}mo.default=sm;var bi={},bp={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(n,i){return n[i.toLowerCase()]=i,n},{})})(bp);Object.defineProperty(bi,"__esModule",{value:!0});bi.formatDOM=bi.formatAttributes=void 0;var Aa=co,lm=bp;function om(e){return lm.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function gp(e){for(var n={},i=0,a=e.length;i<a;i++){var t=e[i];n[t.name]=t.value}return n}bi.formatAttributes=gp;function cm(e){e=e.toLowerCase();var n=om(e);return n||e}function wp(e,n,i){n===void 0&&(n=null);for(var a=[],t,s=0,l=e.length;s<l;s++){var o=e[s];switch(o.nodeType){case 1:{var c=cm(o.nodeName);t=new Aa.Element(c,gp(o.attributes)),t.children=wp(c==="template"?o.content.childNodes:o.childNodes,t);break}case 3:t=new Aa.Text(o.nodeValue);break;case 8:t=new Aa.Comment(o.nodeValue);break;default:continue}var d=a[s-1]||null;d&&(d.next=t),t.parent=n,t.prev=d,t.next=null,a.push(t)}return i&&(t=new Aa.ProcessingInstruction(i.substring(0,i.indexOf(" ")).toLowerCase(),i),t.next=a[0]||null,t.parent=n,a.unshift(t),a[1]&&(a[1].prev=a[0])),a}bi.formatDOM=wp;var dm=me&&me.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uo,"__esModule",{value:!0});var rm=dm(mo),pm=bi,vm=/<(![a-zA-Z\s]+)>/;function um(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];var n=e.match(vm),i=n?n[1]:void 0;return(0,pm.formatDOM)((0,rm.default)(e),null,i)}uo.default=um;var Oe={},Ft={},mm=0;Ft.SAME=mm;var fm=1;Ft.CAMELCASE=fm;Ft.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const hp=0,_n=1,Ot=2,Wt=3,fo=4,yp=5,kp=6;function bm(e){return ie.hasOwnProperty(e)?ie[e]:null}function pe(e,n,i,a,t,s,l){this.acceptsBooleans=n===Ot||n===Wt||n===fo,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=l}const ie={},gm=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];gm.forEach(e=>{ie[e]=new pe(e,hp,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,n])=>{ie[e]=new pe(e,_n,!1,n,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(e=>{ie[e]=new pe(e,Ot,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{ie[e]=new pe(e,Ot,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{ie[e]=new pe(e,Wt,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(e=>{ie[e]=new pe(e,Wt,!0,e,null,!1,!1)});["capture","download"].forEach(e=>{ie[e]=new pe(e,fo,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(e=>{ie[e]=new pe(e,kp,!1,e,null,!1,!1)});["rowSpan","start"].forEach(e=>{ie[e]=new pe(e,yp,!1,e.toLowerCase(),null,!1,!1)});const bo=/[\-\:]([a-z])/g,go=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{const n=e.replace(bo,go);ie[n]=new pe(n,_n,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{const n=e.replace(bo,go);ie[n]=new pe(n,_n,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(e=>{const n=e.replace(bo,go);ie[n]=new pe(n,_n,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(e=>{ie[e]=new pe(e,_n,!1,e.toLowerCase(),null,!1,!1)});const wm="xlinkHref";ie[wm]=new pe("xlinkHref",_n,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(e=>{ie[e]=new pe(e,_n,!1,e.toLowerCase(),null,!0,!0)});const{CAMELCASE:hm,SAME:ym,possibleStandardNames:Lc}=Ft,km=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",xm=km+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",zm=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+xm+"]*$")),qm=Object.keys(Lc).reduce((e,n)=>{const i=Lc[n];return i===ym?e[n]=n:i===hm?e[n.toLowerCase()]=n:e[n]=i,e},{});Oe.BOOLEAN=Wt;Oe.BOOLEANISH_STRING=Ot;Oe.NUMERIC=yp;Oe.OVERLOADED_BOOLEAN=fo;Oe.POSITIVE_NUMERIC=kp;Oe.RESERVED=hp;Oe.STRING=_n;Oe.getPropertyInfo=bm;Oe.isCustomAttribute=zm;Oe.possibleStandardNames=qm;var wo={},ho={},Mc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,_m=/\n/g,Sm=/^\s*/,Cm=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Em=/^:\s*/,Pm=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Nm=/^[;\s]*/,Tm=/^\s+|\s+$/g,Im=`
`,Ac="/",Dc="*",Nn="",Rm="comment",jm="declaration",Lm=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var i=1,a=1;function t(g){var b=g.match(_m);b&&(i+=b.length);var E=g.lastIndexOf(Im);a=~E?g.length-E:a+g.length}function s(){var g={line:i,column:a};return function(b){return b.position=new l(g),d(),b}}function l(g){this.start=g,this.end={line:i,column:a},this.source=n.source}l.prototype.content=e;function o(g){var b=new Error(n.source+":"+i+":"+a+": "+g);if(b.reason=g,b.filename=n.source,b.line=i,b.column=a,b.source=e,!n.silent)throw b}function c(g){var b=g.exec(e);if(b){var E=b[0];return t(E),e=e.slice(E.length),b}}function d(){c(Sm)}function u(g){var b;for(g=g||[];b=f();)b!==!1&&g.push(b);return g}function f(){var g=s();if(!(Ac!=e.charAt(0)||Dc!=e.charAt(1))){for(var b=2;Nn!=e.charAt(b)&&(Dc!=e.charAt(b)||Ac!=e.charAt(b+1));)++b;if(b+=2,Nn===e.charAt(b-1))return o("End of comment missing");var E=e.slice(2,b-2);return a+=2,t(E),e=e.slice(b),a+=2,g({type:Rm,comment:E})}}function m(){var g=s(),b=c(Cm);if(b){if(f(),!c(Em))return o("property missing ':'");var E=c(Pm),p=g({type:jm,property:Fc(b[0].replace(Mc,Nn)),value:E?Fc(E[0].replace(Mc,Nn)):Nn});return c(Nm),p}}function y(){var g=[];u(g);for(var b;b=m();)b!==!1&&(g.push(b),u(g));return g}return d(),y()};function Fc(e){return e?e.replace(Tm,Nn):Nn}var Mm=me&&me.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ho,"__esModule",{value:!0});var Am=Mm(Lm);function Dm(e,n){var i=null;if(!e||typeof e!="string")return i;var a=(0,Am.default)(e),t=typeof n=="function";return a.forEach(function(s){if(s.type==="declaration"){var l=s.property,o=s.value;t?n(l,o,s):o&&(i=i||{},i[l]=o)}}),i}ho.default=Dm;var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.camelCase=void 0;var Fm=/^--[a-zA-Z0-9-]+$/,Om=/-([a-z])/g,Wm=/^[^-]+$/,Bm=/^-(webkit|moz|ms|o|khtml)-/,Hm=/^-(ms)-/,Um=function(e){return!e||Wm.test(e)||Fm.test(e)},Vm=function(e,n){return n.toUpperCase()},Oc=function(e,n){return"".concat(n,"-")},Gm=function(e,n){return n===void 0&&(n={}),Um(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(Hm,Oc):e=e.replace(Bm,Oc),e.replace(Om,Vm))};Bt.camelCase=Gm;var Km=me&&me.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wo,"__esModule",{value:!0});var $m=Km(ho),Qm=Bt;function Ym(e,n){var i={};return!e||typeof e!="string"||(0,$m.default)(e,function(a,t){a&&t&&(i[(0,Qm.camelCase)(a,n)]=t)}),i}wo.default=Ym;var Jm=ra,Xm=wo.default,Zm=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function ef(e,n){return e.indexOf("-")===-1?n&&typeof n.is=="string":!Zm.has(e)}var nf={reactCompat:!0};function af(e,n){if(e!=null)try{n.style=Xm(e,nf)}catch{n.style={}}}var tf=Jm.version.split(".")[0]>=16,xp=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);function sf(e){return!xp.has(e.name)}function lf(e){return e}var zp={PRESERVE_CUSTOM_ATTRIBUTES:tf,ELEMENTS_WITH_NO_TEXT_CHILDREN:xp,isCustomComponent:ef,setStyleProp:af,canTextBeChildOfNode:sf,returnFirstArg:lf},ji=Oe,Wc=zp,of=["checked","value"],cf=["input","select","textarea"],df={reset:!0,submit:!0},qp=function(n,i){n=n||{};var a,t,s,l,o,c={},d=n.type&&df[n.type];for(a in n){if(s=n[a],ji.isCustomAttribute(a)){c[a]=s;continue}if(t=a.toLowerCase(),l=Bc(t),l){switch(o=ji.getPropertyInfo(l),of.indexOf(l)!==-1&&cf.indexOf(i)!==-1&&!d&&(l=Bc("default"+t)),c[l]=s,o&&o.type){case ji.BOOLEAN:c[l]=!0;break;case ji.OVERLOADED_BOOLEAN:s===""&&(c[l]=!0);break}continue}Wc.PRESERVE_CUSTOM_ATTRIBUTES&&(c[a]=s)}return Wc.setStyleProp(n.style,c),c};function Bc(e){return ji.possibleStandardNames[e]}var rf=ra,pf=qp,ca=zp,vf=ca.setStyleProp,uf=ca.canTextBeChildOfNode;function _p(e,n){n=n||{};for(var i=n.library||rf,a=i.cloneElement,t=i.createElement,s=i.isValidElement,l=[],o,c,d=typeof n.replace=="function",u=n.transform||ca.returnFirstArg,f,m,y,g=n.trim,b=0,E=e.length;b<E;b++){if(o=e[b],d&&(f=n.replace(o),s(f))){E>1&&(f=a(f,{key:f.key||b})),l.push(u(f,o,b));continue}if(o.type==="text"){if(c=!o.data.trim().length,c&&o.parent&&!uf(o.parent)||g&&c)continue;l.push(u(o.data,o,b));continue}switch(m=o.attribs,mf(o)?vf(m.style,m):m&&(m=pf(m,o.name)),y=null,o.type){case"script":case"style":o.children[0]&&(m.dangerouslySetInnerHTML={__html:o.children[0].data});break;case"tag":o.name==="textarea"&&o.children[0]?m.defaultValue=o.children[0].data:o.children&&o.children.length&&(y=_p(o.children,n));break;default:continue}E>1&&(m.key=b),l.push(u(t(o.name,m,y),o,b))}return l.length===1?l[0]:l}function mf(e){return ca.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&ca.isCustomComponent(e.name,e.attribs)}var ff=_p,Ht=co,ii=uo.default,bf=qp,Sp=ff;ii=typeof ii.default=="function"?ii.default:ii;var gf={lowerCaseAttributeNames:!1};function Ge(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");return e===""?[]:(n=n||{},Sp(ii(e,n.htmlparser2||gf),n))}Ge.domToReact=Sp;Ge.htmlToDOM=ii;Ge.attributesToProps=bf;Ge.Comment=Ht.Comment;Ge.Element=Ht.Element;Ge.ProcessingInstruction=Ht.ProcessingInstruction;Ge.Text=Ht.Text;var wf=Ge;Ge.default=Ge;const ve=Ep(wf);ve.domToReact;ve.htmlToDOM;ve.attributesToProps;ve.Comment;ve.Element;ve.ProcessingInstruction;ve.Text;const hf=`<div class="svg-images-container w-embed"><style>
.navhome-login-arrow{
  clip-path: path("M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z");
  background-color:rgb(119,65,216);
}
.script-container-underlne{
		clip-path:path("M47.2602 1.64763C46.1596 1.49108 45.0581 1.3694 43.9571 1.23222C43.5939 1.18528 43.2279 1.17702 42.8642 1.14945C42.0747 1.08903 41.2852 1.03247 40.4957 0.972053C40.0566 0.938906 39.6158 0.901848 39.1767 0.872573C39.0485 0.865808 38.9222 0.859078 38.7939 0.856185C38.5072 0.849718 38.2202 0.851007 37.9334 0.848413C36.6298 0.819016 35.3242 0.797304 34.0206 0.767907C33.7094 0.760887 33.3996 0.769422 33.0882 0.770147C32.3181 0.772151 31.5497 0.77806 30.7815 0.780106C29.9132 0.783771 29.0471 0.771993 28.1783 0.798891C26.7731 0.836941 25.3698 0.878901 23.9647 0.916951C23.1506 0.94121 22.3389 0.946161 21.5243 0.993655C20.1219 1.07826 18.7215 1.15901 17.3192 1.23974C16.5538 1.28447 15.7867 1.31754 15.0207 1.38938C13.57 1.52326 12.1194 1.65328 10.6687 1.78716C9.89319 1.85878 9.11824 1.90716 8.34361 2.0253C6.89665 2.24449 5.45157 2.46372 4.00461 2.68292C3.69212 2.73011 3.37962 2.77732 3.06713 2.82451C2.44214 2.9189 1.81952 3.07532 1.19563 3.2046C1.15576 3.21532 1.11776 3.22609 1.07797 3.23294C1.00344 3.27388 0.935665 3.34983 0.878424 3.46089C0.793549 3.62557 0.741147 3.85686 0.73582 4.09307C0.730493 4.32928 0.772416 4.5627 0.849693 4.73491C0.91986 4.88759 1.045 5.02988 1.15503 5.00524C1.9079 4.84788 2.65906 4.68272 3.41285 4.56799C4.11168 4.46365 4.8087 4.35539 5.50753 4.25105C6.26887 4.13649 7.03021 4.02192 7.79155 3.90737C8.09839 3.86005 8.40557 3.79725 8.71386 3.76933C9.89975 3.66047 11.0856 3.55548 12.2714 3.45049C13.0109 3.38193 13.7504 3.31726 14.4899 3.24871C14.7944 3.2207 15.101 3.18499 15.4072 3.16478C16.5809 3.09439 17.7563 3.0318 18.9298 2.96916C19.6423 2.93098 20.3529 2.88887 21.0653 2.8507C21.3054 2.83674 21.5436 2.81889 21.7834 2.81267C23.0507 2.77926 24.3178 2.74971 25.585 2.72018C26.2932 2.70128 26.9994 2.68621 27.7077 2.66731C27.9588 2.66135 28.2121 2.6477 28.4631 2.64949C29.7691 2.65182 31.0752 2.65415 32.3813 2.65648C33.1967 2.6555 34.0101 2.65834 34.825 2.68059C36.2114 2.7196 37.5979 2.75474 38.9824 2.79371C39.2559 2.79988 39.5289 2.8293 39.802 2.85483C40.5669 2.91857 41.3299 2.98227 42.0948 3.04601C42.6675 3.09379 43.2402 3.14158 43.8148 3.18941C44.2217 3.22183 44.6259 3.29292 45.0324 3.34858C46.2273 3.50726 47.4221 3.67369 48.6148 3.85168C48.9176 3.89725 49.2203 3.95056 49.523 4.00387C49.8483 4.0577 50.1735 4.1154 50.4963 4.1963C50.5469 4.21293 50.5955 4.23341 50.6459 4.25779C50.773 4.3149 50.896 4.30218 51.0141 4.16924C51.1226 4.04383 51.2067 3.83264 51.2461 3.58945C51.3256 3.07983 51.187 2.53043 50.9412 2.38154C50.7251 2.25269 50.4999 2.19724 50.2764 2.14571C50.1225 2.11125 49.9704 2.07295 49.8164 2.03848C49.5217 1.96984 49.2243 1.93213 48.9292 1.87898C48.3746 1.78124 47.8173 1.71832 47.2604 1.6399L47.2602 1.64763Z");
    background-color:rgb(139, 92, 246);

}
.fullstack-developer-underline{
  clip-path:path("M413.893 1.79794C404.081 1.54403 394.269 1.35291 384.457 1.13387C381.22 1.05859 377.966 1.05298 374.729 1.01256C367.701 0.923792 360.673 0.841993 353.646 0.753226C349.737 0.70468 345.813 0.649138 341.905 0.607564C340.764 0.598632 339.64 0.589716 338.5 0.587757C335.95 0.583376 333.401 0.592961 330.851 0.595552C319.261 0.57564 307.654 0.569613 296.064 0.549701C293.296 0.544946 290.545 0.568149 287.778 0.577338C280.934 0.60044 274.108 0.630525 267.281 0.653656C259.565 0.682232 251.866 0.682958 244.151 0.753365C231.671 0.857421 219.209 0.968469 206.729 1.07252C199.5 1.1368 192.287 1.16626 185.058 1.27236C172.612 1.46014 160.183 1.64093 147.737 1.82174C140.943 1.92162 134.133 2.00057 127.34 2.14925C114.475 2.42694 101.609 2.69768 88.7436 2.97538C81.8664 3.12392 74.9892 3.23063 68.1286 3.46286C55.3132 3.89402 42.5146 4.32518 29.6992 4.75634C26.9314 4.84919 24.1637 4.94208 21.396 5.03493C15.8605 5.22063 10.3584 5.51793 4.83965 5.76641C4.48738 5.78672 4.15189 5.80707 3.79963 5.82041C3.14535 5.89598 2.55804 6.03439 2.07128 6.23574C1.34952 6.5343 0.929476 6.95191 0.928745 7.3772C0.928015 7.80249 1.34662 8.22154 2.06734 8.52955C2.72102 8.80258 3.86116 9.05553 4.83408 9.00839C11.4935 8.7061 18.1362 8.38982 24.8123 8.16424C31.002 7.95874 37.1748 7.74624 43.3645 7.54074C50.1077 7.31528 56.8509 7.08981 63.594 6.86434C66.3115 6.7714 69.0289 6.65059 71.763 6.59254C82.2802 6.36659 92.7973 6.14759 103.314 5.92861C109.873 5.7865 116.431 5.65138 122.99 5.50926C125.691 5.45116 128.408 5.37912 131.125 5.33498C141.542 5.17858 151.975 5.03618 162.391 4.89372C168.715 4.80697 175.022 4.71319 181.345 4.62645C183.475 4.59525 185.589 4.55708 187.719 4.53982C198.974 4.44761 210.229 4.36235 221.484 4.2771C227.774 4.22516 234.047 4.18016 240.337 4.12822C242.568 4.11113 244.816 4.08016 247.047 4.07702C258.654 4.04816 270.261 4.01928 281.868 3.99042C289.114 3.96801 296.343 3.95253 303.589 3.97195C315.917 4.00707 328.245 4.03522 340.557 4.07031C342.989 4.07449 345.421 4.12053 347.853 4.15957C354.663 4.25493 361.456 4.35026 368.265 4.44562C373.364 4.51713 378.463 4.58865 383.579 4.66019C387.202 4.70825 390.808 4.82597 394.431 4.91586C405.081 5.1712 415.732 5.44051 426.365 5.73069C429.066 5.80505 431.766 5.89333 434.466 5.98163C437.368 6.07028 440.269 6.1659 443.154 6.30333C443.607 6.33199 444.043 6.36762 444.496 6.41023C445.636 6.5098 446.727 6.48378 447.75 6.24152C448.69 6.01306 449.395 5.6308 449.698 5.19209C450.303 4.27282 448.963 3.28749 446.749 3.02572C444.804 2.79927 442.791 2.70517 440.796 2.61808C439.42 2.55994 438.062 2.49486 436.686 2.43672C434.053 2.32065 431.403 2.26028 428.77 2.1721C423.822 2.01021 418.857 1.91108 413.893 1.78402L413.893 1.79794Z");
  background-color:rgb(139, 92, 246);

}
.your-triners-underline{
  clip-path:path("M156.615 1.2969C152.894 1.06504 149.173 0.892904 145.452 0.694201C144.225 0.625778 142.991 0.623642 141.763 0.588376C139.098 0.510852 136.433 0.439955 133.768 0.362431C132.286 0.320096 130.798 0.271124 129.316 0.235421C128.884 0.228047 128.457 0.22067 128.025 0.219927C127.058 0.218266 126.091 0.229887 125.124 0.234857C120.729 0.227306 116.327 0.232979 111.932 0.225428C110.883 0.223625 109.84 0.248397 108.79 0.259857C106.195 0.288555 103.606 0.323877 101.017 0.352587C98.091 0.387348 95.1714 0.395603 92.2454 0.470152C87.5128 0.581387 82.7866 0.699255 78.054 0.81049C75.3124 0.878725 72.5772 0.913832 69.8356 1.02186C65.1156 1.21269 60.402 1.39686 55.682 1.58106C53.1057 1.68274 50.5231 1.76452 47.9468 1.91262C43.0676 2.18939 38.1885 2.45954 33.3093 2.73631C30.7012 2.88435 28.0931 2.9926 25.4912 3.22023C20.6308 3.64292 15.7769 4.06559 10.9166 4.48828C9.86688 4.57932 8.81721 4.67038 7.76753 4.76142C5.66818 4.94349 3.58137 5.23167 1.48827 5.47343C1.35466 5.4931 1.22741 5.51278 1.09382 5.52582C0.845623 5.59833 0.622769 5.73056 0.437978 5.92256C0.163978 6.20724 0.00427749 6.60485 0.00358251 7.00937C0.00288753 7.41388 0.161221 7.81205 0.43423 8.1043C0.681853 8.36335 1.11397 8.60282 1.48297 8.55704C4.00869 8.26296 6.52806 7.95561 9.06001 7.73449C11.4075 7.53295 13.7486 7.32477 16.096 7.12323C18.6534 6.90215 21.2108 6.68107 23.7682 6.45999C24.7988 6.36892 25.8294 6.25135 26.8663 6.19345C30.8549 5.9682 34.8435 5.74957 38.832 5.53095C41.3193 5.38933 43.8066 5.25437 46.2939 5.11275C47.318 5.05483 48.3486 4.98364 49.3791 4.939C53.3294 4.78 57.286 4.6343 61.2363 4.48856C63.6344 4.39984 66.0262 4.30445 68.4244 4.21573C69.2322 4.18396 70.0338 4.14558 70.8416 4.12707C75.1098 4.0283 79.378 3.93615 83.6462 3.84401C86.0316 3.78843 88.4106 3.73946 90.796 3.68387C91.642 3.66543 92.4944 3.63376 93.3403 3.62858C97.742 3.58973 102.144 3.55085 106.545 3.512C109.293 3.48356 112.035 3.46173 114.783 3.47309C119.458 3.49438 124.133 3.50904 128.802 3.53032C129.724 3.53191 130.646 3.57331 131.568 3.60805C134.151 3.69206 136.727 3.77606 139.309 3.86007C141.242 3.92307 143.176 3.98609 145.116 4.04911C146.49 4.09126 147.857 4.19968 149.231 4.28162C153.27 4.51403 157.308 4.75971 161.34 5.02527C162.364 5.09334 163.388 5.17465 164.412 5.25599C165.513 5.33746 166.613 5.42556 167.707 5.55343C167.878 5.58025 168.044 5.61371 168.215 5.65379C168.648 5.74738 169.061 5.72156 169.45 5.49013C169.806 5.2719 170.074 4.90763 170.189 4.49005C170.42 3.6151 169.912 2.67922 169.073 2.43242C168.336 2.21895 167.573 2.13142 166.816 2.05055C166.294 1.9966 165.779 1.93603 165.258 1.88208C164.259 1.77427 163.254 1.71946 162.256 1.63817C160.38 1.48905 158.497 1.39964 156.615 1.28367L156.615 1.2969Z");
  background-color:rgb(139, 92, 246);
}
.view-curriculum-arrow {
    clip-path: path("M9.74998 6.71063C9.32748 7.10063 9.32748 7.73063 9.74998 8.12063L13.9533 12.0006L9.74998 15.8806C9.32748 16.2706 9.32748 16.9006 9.74998 17.2906C10.1725 17.6806 10.855 17.6806 11.2775 17.2906L16.25 12.7006C16.6725 12.3106 16.6725 11.6806 16.25 11.2906L11.2775 6.70063C10.8658 6.32063 10.1725 6.32063 9.74998 6.71063Z");
    background-color: rgb(119,65,216);
}

.faq-dropdown-arrow {
    clip-path: path("M9.74998 6.71063C9.32748 7.10063 9.32748 7.73063 9.74998 8.12063L13.9533 12.0006L9.74998 15.8806C9.32748 16.2706 9.32748 16.9006 9.74998 17.2906C10.1725 17.6806 10.855 17.6806 11.2775 17.2906L16.25 12.7006C16.6725 12.3106 16.6725 11.6806 16.25 11.2906L11.2775 6.70063C10.8658 6.32063 10.1725 6.32063 9.74998 6.71063Z");
    background-color: rgb(71,85,105);
    transform: rotatez(90deg);
}


</style></div><div class="svg-images-container w-embed"><style>
.your-seniours-got-placed-underline{
clip-path:path("M205.026 1.43287C200.155 1.18745 195.284 1.00483 190.413 0.794269C188.806 0.721788 187.191 0.718995 185.584 0.681374C182.095 0.598688 178.606 0.522969 175.117 0.440283C173.177 0.395117 171.228 0.342971 169.288 0.304778C168.722 0.296833 168.164 0.288889 167.598 0.287916C166.332 0.285741 165.067 0.297531 163.801 0.302329C158.047 0.292443 152.284 0.296458 146.53 0.286572C145.156 0.284212 143.791 0.309794 142.417 0.321377C139.019 0.3504 135.63 0.386391 132.241 0.415428C128.41 0.450679 124.588 0.458065 120.758 0.535148C114.562 0.649999 108.375 0.771829 102.179 0.88668C98.5902 0.957206 95.0094 0.992905 91.4203 1.10526C85.2412 1.30381 79.0705 1.49535 72.8915 1.68693C69.5188 1.79268 66.1379 1.87752 62.7651 2.03209C56.3778 2.32091 49.9904 2.60278 43.603 2.8916C40.1886 3.04609 36.7743 3.15875 33.3681 3.39692C27.0055 3.83916 20.6511 4.28139 14.2885 4.72364C12.9143 4.81889 11.5402 4.91417 10.1661 5.00941C7.41781 5.19991 4.686 5.50196 1.94595 5.75521C1.77105 5.77583 1.60447 5.79647 1.42958 5.81012C1.10469 5.88625 0.813001 6.02517 0.571168 6.22694C0.212589 6.52612 0.00369466 6.94409 0.00296398 7.36939C0.00223331 7.79468 0.20969 8.21337 0.567227 8.52075C0.891516 8.79322 1.45733 9.04518 1.94038 8.9972C5.24677 8.68914 8.54485 8.36712 11.8594 8.13576C14.9325 7.92491 17.9972 7.70707 21.0703 7.49622C24.4182 7.26492 27.7661 7.03361 31.114 6.80232C32.4631 6.70703 33.8123 6.58387 35.1697 6.52345C40.3912 6.2884 45.6127 6.06031 50.8342 5.83223C54.0904 5.68444 57.3465 5.54365 60.6026 5.39586C61.9434 5.33541 63.2925 5.26102 64.6416 5.21454C69.813 5.04912 74.9927 4.89769 80.1641 4.74622C83.3036 4.65401 86.4347 4.55477 89.5742 4.46256C90.6318 4.42951 91.6811 4.38952 92.7387 4.37042C98.3263 4.26847 103.914 4.17347 109.502 4.07849C112.624 4.02111 115.739 3.97068 118.862 3.91329C119.969 3.89428 121.085 3.86136 122.192 3.85629C127.955 3.81739 133.717 3.77847 139.48 3.73956C143.077 3.71088 146.666 3.68915 150.263 3.7023C156.384 3.72676 162.504 3.74424 168.616 3.76869C169.824 3.77076 171.031 3.8147 172.238 3.85163C175.619 3.94111 178.991 4.03055 182.372 4.12002C184.903 4.18712 187.435 4.25423 189.974 4.32134C191.773 4.36627 193.563 4.48087 195.361 4.56762C200.649 4.81375 205.936 5.07385 211.215 5.35483C212.555 5.42685 213.896 5.51279 215.236 5.59876C216.677 5.6849 218.117 5.77801 219.549 5.91294C219.774 5.94121 219.991 5.97646 220.215 6.01868C220.781 6.11726 221.323 6.0903 221.831 5.84716C222.298 5.61788 222.648 5.23502 222.799 4.79604C223.1 3.87625 222.436 2.89208 221.337 2.63223C220.371 2.40746 219.372 2.31511 218.382 2.22974C217.699 2.17279 217.024 2.10888 216.342 2.05194C215.035 1.93814 213.719 1.88007 212.412 1.79416C209.956 1.63656 207.491 1.54171 205.026 1.41896L205.026 1.43287Z");
  background-color:rgb(139, 92, 246);

}
.blue-down-arrow {
    background-color: #1565D8;
    width: 18px;
    height: 28px;
    clip-path: path("M-0.0012328 14.9899L8.84345 28L18 15.2097L10.1353 20.9025L10.1353 -3.43776e-07L7.80551 -4.45615e-07L7.80551 20.8827L-0.0012328 14.9899Z");
}

.your-seniors-got-placed-right-arrow,.your-seniors-got-placed-left-arrow{
	clip-path:path("M9.74998 6.71063C9.32748 7.10063 9.32748 7.73063 9.74998 8.12063L13.9533 12.0006L9.74998 15.8806C9.32748 16.2706 9.32748 16.9006 9.74998 17.2906C10.1725 17.6806 10.855 17.6806 11.2775 17.2906L16.25 12.7006C16.6725 12.3106 16.6725 11.6806 16.25 11.2906L11.2775 6.70063C10.8658 6.32063 10.1725 6.32063 9.74998 6.71063Z");
      background-color:#475569;
}
.your-seniors-got-placed-left-arrow{
			transform:rotatez(180deg);
}
.clock{
  background-color:rgb(138,150,168);
  clip-path:path("M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z");
}

</style></div><div id="landing-section" data-sectionid="sections" class="intensive-hero-section"><div class="div-block-183198052144000"><div class="navbar-intensive"><div data-collapse="medium" data-animation="default" data-duration="400" data-doc-height="1" data-easing="ease" data-easing2="ease" role="banner" class="navbar-9 w-nav"><div class="container-28 intensive-2-0 w-container"><a href="#" class="brand-9 w-nav-brand"><div class="intensive-new-logo w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/690d6fab0cae49e13e2d5ef9_Group%201000005139.png' alt='' width="200px" /></div></a><div class="menu-button-6 w-nav-button"><div class="icon-34 w-icon-nav-menu"></div></div><nav role="navigation" class="nav-menu-home-3 w-nav-menu"><div class="logo-div"><div class="nxtwave-white-logo-2 w-embed"><img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_White_logo.svg" alt="Nxtwave" width="100%" loading="lazy"></div></div><a href="#curriculum" id="curriculum-primary-navbar" class="desktop-navbar-items track-class w-nav-link">Curriculum</a><a href="#job-support" id="job-support-primary-navbar" class="desktop-navbar-items track-class w-nav-link">Job Support</a><a href="#reviews" id="reviews-primary-navbar" class="desktop-navbar-items track-class w-nav-link">Reviews</a><a href="#pricing" id="pricing-primary-navbar" class="desktop-navbar-items track-class w-nav-link">Fee</a><a href="#faqs" id="faqs-primary-navbar" class="desktop-navbar-items track-class w-nav-link">FAQs</a><a id="login-primary-navbar" href="https://learning.ccbp.in/" class="link-block-599 track-class w-inline-block"><div>Login</div><div class="navhome-login-arrow"></div></a></nav></div></div></div>`;function yf(){return j.jsx(j.Fragment,{children:ve(hf)})}const kf=`<div class="div-block-1831980521448706"><img
    src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/693301165bf6189393f060d8_Fireworks%202-min.png"
    loading="lazy" alt="" class="image-8128822585" />
  <div class="div-block-1831980521448703"><img loading="lazy"
      src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6824425d984c364e52b5550c_%F0%9F%8E%89.png" alt=""
      class="image-8128822584" />
    <div class="div-block-1831980521448704">
      <div class="text-block-941288240474">NxtWave Intensive Offline Center is starting in Hyderabad.</div><a
        id="join-free-session-notification-bar" href="/software-training-center-in-hyderabad"
        class="div-block-1831980521448705 track-button w-inline-block">
        <div class="text-block-941288240473">Check It Out</div><svg xmlns="http://www.w3.org/2000/svg" width="100%"
          viewBox="0 0 20 20" fill="none" class="svg-214">
          <path d="M5 15L15 5M15 5L8.33333 5M15 5L15 11.6667" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
  </div><img
    src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/693301165bf6189393f060d8_Fireworks%202-min.png"
    loading="lazy" alt="" class="image-8128822586" />
</div>
<div class="intensive-hero-section-div int-tce">
  <div class="new-track-div-copy">
    <div class="div-block-1831980521447265">
      <div class="text-block-9412882478">NEW</div>
    </div>
    <div class="text-block-94128895-copy">Intensive 3.0 to 3x your placement chances</div>
  </div>
  <div class="div-block-183198052219">
    <div class="div-block-183198052157">
      <div class="div-block-1831980521254">
        <div class="div-block-183198052212">
          <h1 class="heading-sathosi-font">A Proven Program ToÂ MakeÂ You a</h1>
          <div class="div-block-183198052190">
            <div data-w-id="15223fc5-faed-1013-6a91-6d1ea862ec96" class="job-tracks-div">
              <div class="text-block-9412881915">Full Stack Developer</div>
              <div class="text-block-9412881915">Data Analyst</div>
              <div class="text-block-9412881915">QA Engineer</div>
              <div class="text-block-9412881915">Software Developer</div>
              <div class="text-block-9412881915">Full Stack Developer</div>
            </div>
          </div>
          <div class="fullstack-developer-underline"></div>
        </div>
        <div class="intensive-description-div">
          <div class="div-block-183198052209">
            <div class="w-layout-grid grid-8652">
              <div id="w-node-_15223fc5-faed-1013-6a91-6d1ea862eca5-d23a40cb" class="div-block-183198052203">
                <div class="div-block-183198052205">
                  <div class="html-embed-41917 w-embed"><img
                      src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/course-duration-icon.png' alt=''
                      loading='lazy' /></div>
                </div>
                <div class="div-block-183198052204">
                  <div class="text-block-94128920">Course Duration</div>
                  <div class="text-block-94128921 clr">5-8 months based on the Job Track youÂ choose.</div>
                </div>
              </div>
              <div id="w-node-_15223fc5-faed-1013-6a91-6d1ea862ecad-d23a40cb" class="div-block-183198052203">
                <div class="div-block-183198052205">
                  <div class="html-embed-41917 w-embed"><img
                      src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/eligibility-icon.png' alt=''
                      loading='lazy' /></div>
                </div>
                <div class="div-block-183198052204">
                  <div class="text-block-94128920">Eligibility</div>
                  <div class="text-block-94128921">B. Tech (all branches), BSc, B.Com, BBA,Â etc. No CGPA cut-off</div>
                </div>
              </div>
              <div id="w-node-_15223fc5-faed-1013-6a91-6d1ea862ecb5-d23a40cb" class="div-block-183198052203">
                <div class="div-block-183198052205">
                  <div class="html-embed-41917 w-embed"><img
                      src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/online-icon.png' alt=''
                      loading='lazy' /></div>
                </div>
                <div class="div-block-183198052204">
                  <div class="text-block-94128920">Online</div>
                  <div class="text-block-94128921">3 Hours Classes and 3 Hours Labs EveryÂ Day</div>
                </div>
              </div>
              <div id="w-node-_5efd8d37-e4b1-deea-a5d4-2de8bd831354-d23a40cb" class="div-block-1831980521447044">
                <div class="div-block-1831980521447045">
                  <div class="html-embed-82605 w-embed"><img
                      src='https://nxtwave.imgix.net/ccbp-website/intensive/live-sessions-icon-referral.png' alt=''
                      loading='lazy' /></div>
                </div>
                <div class="div-block-1831980521447046">
                  <div class="div-block-183198052144700">
                    <div class="text-block-9412882406">Support</div>
                    <div class="div-block-1831980521447270">
                      <div class="text-block-9412882482">NEW</div>
                    </div>
                  </div>
                  <div class="text-block-9412882405">Live Sessions every week day with course mentors for doubts
                    clarification</div>
                </div>
              </div>
            </div>
            <div class="fee-increase-strip pricing">
              <div class="text-block-94128877">Fee increases from March 31st</div><img
                src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/63d50e0656bafb711a8de818_fee-increase-strip-image.svg"
                loading="lazy" alt="" class="image-8730082" /><img
                src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/63d50e24050b7658779c93b3_trending-up.png"
                loading="lazy" alt="" class="image-8730083 strip-up" />
            </div>
          </div>
          <div class="div-block-183198052156">
            <div data-delay="4000" data-animation="slide" class="hs-testimonials-slider-v1-2 w-slider"
              data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false"
              data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
              <div class="w-slider-mask">
                <div class="hs-testimonials-slide w-slide">
                  <div class="hs-testimonials-slide-card1">
                    <div class="hs-testimonials-card-div-jfs">
                      <div class="hs-testimonials-card-txt">2000+</div>
                      <div>Companies Hired Our Students</div>
                    </div>
                    <div class="hs-testimonials-card-companies-image w-embed"><img
                        src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/companies-image-hero-section.png'
                        alt='' /></div>
                  </div>
                </div>
                <div class="hs-testimonials-slide w-slide">
                  <div class="hs-testimonials-slide-card2">
                    <div class="hs-testimonials-heading-container-2">
                      <div class="hs-testimonials-quote-image w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/left-quote+1.png'
                          alt='' loading='lazy' /></div>
                      <div>Mechanical Engineering to <br />â‚¹9 LPA Software Job</div>
                    </div>
                    <div class="hs-testimonials-content-div">
                      <div class="hs-testimonials-profile-details-container">
                        <div class="hs-testimonials-profile-image w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/surya.png'
                            alt='' loading='lazy' /></div>
                        <div class="hs-testimonials-profile-details-div-2">
                          <div class="hs-testimonials-leaer-name-2">Surya Vamsi</div>
                          <div>Mechanical Engineering</div>
                        </div>
                      </div>
                      <div class="hs-testimonials-company-logo">
                        <div class="w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/asecent-academy-company.png'
                            alt='' width="100px" loading='lazy' /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hs-testimonials-slide w-slide">
                  <div class="hs-testimonials-slide-card3">
                    <div class="hs-testimonials-doubts-image-div">
                      <div class="w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/doubts-clarifiication-image.png'
                          alt='' width="100%" loading='lazy' /></div>
                    </div>
                    <div class="hs-testimonials-doubts-content-div-2">
                      <div class="hs-testimonials-doubts-heading-2">9AM - 9PM Doubts Clarification.</div>
                      <div>1500+ Mentors to help you.</div>
                    </div>
                  </div>
                </div>
                <div class="hs-testimonials-slide w-slide">
                  <div class="hs-testimonials-slide-card2">
                    <div class="hs-testimonials-heading-container-2">
                      <div class="hs-testimonials-quote-image w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/left-quote+1.png'
                          alt='' loading='lazy' /></div>
                      <div>Mock interviews by the placement teamÂ helped me improve.</div>
                    </div>
                    <div class="hs-testimonials-content-div">
                      <div class="hs-testimonials-profile-details-container">
                        <div class="hs-testimonials-profile-image w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/bhargavi.png'
                            alt='' loading='lazy' /></div>
                        <div class="hs-testimonials-profile-details-div-2">
                          <div class="hs-testimonials-leaer-name-2">Bhargavi</div>
                          <div>CSE, JNTU</div>
                        </div>
                      </div>
                      <div class="hs-testimonials-company-logo">
                        <div class="w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/systech.png'
                            alt='' width="86px" loading='lazy' /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hs-testimonials-slide w-slide">
                  <div class="hs-testimonials-slide-card3">
                    <div class="hs-testimonials-doubts-image-div _2nd-image">
                      <div class="w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/online-labs-24-7.png'
                          alt='' loading='lazy' /></div>
                    </div>
                    <div class="hs-testimonials-doubts-content-div-2">
                      <div class="hs-testimonials-doubts-heading-2">24/7 Online Labs Accessible</div>
                      <div> for hands-on practice</div>
                    </div>
                  </div>
                </div>
                <div class="hs-testimonials-slide w-slide">
                  <div class="hs-testimonials-slide-card2">
                    <div class="hs-testimonials-heading-container-2">
                      <div class="hs-testimonials-quote-image w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/left-quote+1.png'
                          alt='' loading='lazy' /></div>
                      <div>B.Sc Graduate to a Software Engineer</div>
                    </div>
                    <div class="hs-testimonials-content-div">
                      <div class="hs-testimonials-profile-details-container">
                        <div class="hs-testimonials-profile-image w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/divya.png'
                            alt='' loading='lazy' /></div>
                        <div class="hs-testimonials-profile-details-div-2">
                          <div class="hs-testimonials-leaer-name-2">Devi Vyshnavi</div>
                          <div>Adikavi Nannaya University</div>
                        </div>
                      </div>
                      <div class="hs-testimonials-company-logo">
                        <div class="w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/NeoSoft.png'
                            alt='' width="86px" loading='lazy' /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hs-testimonials-slide w-slide">
                  <div class="hs-testimonials-slide-card2">
                    <div class="hs-testimonials-heading-container-2">
                      <div class="hs-testimonials-quote-image w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/left-quote+1.png'
                          alt='' loading='lazy' /></div>
                      <div>From being a Delivery Boy in Swiggy to Programmer Analyst in an MNC!</div>
                    </div>
                    <div class="hs-testimonials-content-div">
                      <div class="hs-testimonials-profile-details-container">
                        <div class="hs-testimonials-profile-image w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/sai.png'
                            alt='' loading='lazy' /></div>
                        <div class="hs-testimonials-profile-details-div-2">
                          <div class="hs-testimonials-leaer-name-2">Venkat Sai </div>
                          <div>Mechanical Engineering</div>
                        </div>
                      </div>
                      <div class="hs-testimonials-company-logo">
                        <div class="w-embed"><img
                            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/exl.png'
                            alt='' width="86px" loading='lazy' /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hs-testimonials-left-arrow w-slider-arrow-left"></div>
              <div class="hs-testimonials-right-arrow w-slider-arrow-right"></div>
              <div class="w-slider-nav"></div>
            </div>
          </div>
          <div class="div-block-183198052211">
            <div class="text-block-94128923">Product of</div>
            <div class="html-embed-41921 w-embed"><img
                srcset='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/nxtwave-logo.svg'
                sizes="(max-width: 479px) 100vw" alt='' loading='lazy' /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="hero-section" class="div-block-1831980521252">
  <div class="div-block-1831980521255">
    <div class="div-block-1747">
      <div class="div-block-183198052210">
        <div class="text-block-9412881914">Book a Live Demo<br />For Free !</div>
        <div class="script-container-underlne"></div>
      </div>
      <div class="html-embed-41933 w-embed"><img
          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/demo-embed-form-person-image.png'
          alt='' loading='lazy' /></div>
    </div>
    <div class="div-block-1831980521436 mobile-fee-increases-strip">
      <div class="text-block-94128877 orange">Fee increases from March 31st</div>
    </div>
<div id="book-a-free-demo-intensive" class="scholarship-form">
  <form id="demoForm">
    <label class="field-label">Name
      <input type="text" name="name" placeholder="Enter Your Name" required />
    </label>
    
    <label class="field-label">Mobile Number (WhatsApp Number)
      <div class="phone-row">
        <select name="country" class="country-select">
          <option>IN +91</option>
        </select>
        <input type="tel" id="mobileInput" name="mobile" placeholder="+91 Enter Mobile Number" required />
      </div>
    </label>
    
    <div id="mobileError" class="error-message" style="display: none; color: #dc2626; font-size: 12px; margin-top: 4px;">
      *Required
    </div>
    
    <label class="field-label">Highest Qualification
      <div class="select-wrapper">
        <select name="qualification" id="qualificationSelect" required>
          <option value="" selected disabled>Select Highest Qualification</option>
          <option>Graduation (Completed)</option>
          <option>Graduation (Ongoing)</option>
          <option>Post Graduation (Completed)</option>
          <option>Post Graduation (Ongoing)</option>
          <option>12th / Intermediate</option>
          <option>Diploma</option>
        </select>
      </div>
    </label>
    
    <label class="field-label">Native State
      <div class="select-wrapper">
        <select name="state" id="stateSelect" required>
          <option value="" selected disabled>Enter your State</option>
          <option>Andhra Pradesh</option>
          <option>Telangana</option>
          <option>Karnataka</option>
          <option>Tamil Nadu</option>
          <option>Other</option>
        </select>
      </div>
    </label>
    
    <div class="terms-note">
      By proceeding further, I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> of NxtWave
    </div>
    
    <button type="submit" class="submit-btn">Book My Demo</button>
  </form>
  
  <style>
    .demo-form-card {
      width: 360px;
      background: #fff;
      border-radius: 12px;
      padding: 22px 20px;
      box-shadow: 0 12px 30px rgba(8, 28, 43, 0.12);
      font-family: inherit;
      color: #1e2b3b;
      max-height: 520px;
      overflow: auto;
    }

    .field-label {
      display: block;
      font-size: 13px;
      color: #55606a;
      margin-top: 14px;
      font-weight: 500;
    }

    .field-label input,
    .field-label select {
      display: block;
      width: 100%;
      padding: 12px 14px;
      margin-top: 8px;
      border: 1px solid #e6e9ef;
      border-radius: 8px;
      background: #fff;
      font-size: 14px;
      color: #1e2b3b;
    }

    .phone-row {
      display: flex;
      gap: 8px;
    }

    .country-select {
      width: 28%;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #e6e9ef;
      background: #fafbfd;
      font-size: 14px;
    }

    .phone-row input {
      flex: 1;
    }

    /* Custom select wrapper for arrow rotation */
    .select-wrapper {
      position: relative;
      margin-top: 8px;
    }

    .select-wrapper select {
      width: 100%;
      padding: 12px 40px 12px 14px;
      margin-top: 0;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
    }

    .select-wrapper::after {
      content: '▼';
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      transition: transform 0.3s ease;
      font-size: 12px;
      color: #55606a;
    }

    .select-wrapper.open::after {
      transform: translateY(-50%) rotate(180deg);
    }

    .terms-note {
      font-size: 12px;
      color: #6b7280;
      margin-top: 14px;
      line-height: 1.5;
    }

    .terms-note a {
      color: #1463ff;
      text-decoration: underline;
    }

    .submit-btn {
      width: 100%;
      margin-top: 14px;
      background: linear-gradient(90deg, #6f2bd0, #7b5af5);
      color: #fff;
      padding: 12px;
      border-radius: 10px;
      border: 0;
      font-weight: 700;
      cursor: pointer;
      font-size: 14px;
    }

    .submit-btn:hover {
      opacity: 0.9;
    }

    @media (max-width: 991px) {
      .demo-form-card {
        width: 100%;
        box-shadow: none;
        border-radius: 8px;
        padding: 16px;
      }
    }
  </style>
  
  <script>
    // Mobile validation
    const mobileInput = document.getElementById('mobileInput');
    const mobileError = document.getElementById('mobileError');
    const demoForm = document.getElementById('demoForm');
    
    mobileInput.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        mobileError.style.display = 'block';
      } else {
        mobileError.style.display = 'none';
      }
    });
    
    mobileInput.addEventListener('input', function() {
      if (this.value.trim() !== '') {
        mobileError.style.display = 'none';
      }
    });
    
    // Dropdown arrow rotation
    const qualificationSelect = document.getElementById('qualificationSelect');
    const stateSelect = document.getElementById('stateSelect');
    
    function toggleDropdownArrow(selectElement) {
      const wrapper = selectElement.parentElement;
      
      selectElement.addEventListener('focus', function() {
        wrapper.classList.add('open');
      });
      
      selectElement.addEventListener('blur', function() {
        wrapper.classList.remove('open');
      });
      
      selectElement.addEventListener('click', function() {
        wrapper.classList.toggle('open');
      });
    }
    
    toggleDropdownArrow(qualificationSelect);
    toggleDropdownArrow(stateSelect);
    
    // Form submission
    demoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (mobileInput.value.trim() === '') {
        mobileError.style.display = 'block';
        mobileInput.focus();
        return false;
      }
      
      console.log('Form submitted successfully!');
      // Add your form submission logic here
    });
  <\/script>
</div>
    <div class="image-8730088-copy w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/intensive/vector.png'
        loading='lazy' alt='vector' /></div>
    <div class="div-block-183198052211 desktop">
      <div class="text-block-94128923">Product of</div>
      <div class="html-embed-41921 w-embed"><img
          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/nxtwave-logo-white-color.svg'
          alt='' /></div>
    </div>
  </div>
  <div class="w-embed">
    <style>
      .new-track-div {
        background-image: url(https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/desktop-new-track-confitee-image.png);
        background-size: cover;
        background-position: 100% 100%;
      }

      @media (min-width: 1200px) and (max-width: 1900px) {
        .intensive-hero-section {
          background-image: url(https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/hero-section-desktop-bg.png);
          background-size: cover;

        }
      }

      @media (min-width: 320px) and (max-width: 767px) {
        .new-track-div {
          background-image: url(https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/coniftte-new-track.png);
          background-size: cover;
          background-position: 50% 50%;
        }
      }

      @media (min-width: 320px) and (max-width: 767px) {
        .intensive-description-div {
          background-image: url(https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/hero-section-mobile.png);
          background-size: cover;
          background-position: 100% 50%;
        }
      }
    </style>
  </div>
</div>
<div id="course-details" class="div-block-183198052221">
  <div class="div-block-183198052209 desktop">
    <div class="w-layout-grid grid-8652">
      <div id="w-node-d6aa8992-a836-8aea-3ccd-b98bd26c1b2d-d23a40cb" class="div-block-183198052203">
        <div class="div-block-183198052205">
          <div class="html-embed-41917 w-embed"><img
              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/course-duration-icon.png'
              alt='' loading='lazy' /></div>
        </div>
        <div class="div-block-183198052204">
          <div class="text-block-94128920">Course Duration</div>
          <div class="text-block-94128921">5-8 months based on the Job Track you choose</div>
        </div>
      </div>
      <div id="w-node-d6aa8992-a836-8aea-3ccd-b98bd26c1b35-d23a40cb" class="div-block-183198052203">
        <div class="div-block-183198052205">
          <div class="html-embed-41917 w-embed"><img
              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/eligibility-icon.png'
              alt='' loading='lazy' /></div>
        </div>
        <div class="div-block-183198052204">
          <div class="text-block-94128920">Eligibility</div>
          <div class="text-block-94128921">B. Tech (all branches), BSc, B.Com, BBA, etc.<br />No CGPA cut-off</div>
        </div>
      </div>
      <div id="w-node-d6aa8992-a836-8aea-3ccd-b98bd26c1b3f-d23a40cb" class="div-block-183198052203">
        <div class="div-block-183198052205">
          <div class="html-embed-41917 w-embed"><img
              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/online-icon.png'
              alt='' loading='lazy' /></div>
        </div>
        <div class="div-block-183198052204">
          <div class="text-block-94128920">Online</div>
          <div class="text-block-94128921">3 Hours Classes and 3Â Hours Labs EveryÂ Day</div>
        </div>
      </div>
      <div id="w-node-_15cebc3a-fb2f-f35f-776d-c6b55b2e8277-d23a40cb" class="div-block-1831980521447044">
        <div class="div-block-1831980521447045">
          <div class="html-embed-82605 w-embed"><img
              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/live-sessions-icon-referral.png'
              alt='' loading='lazy' /></div>
        </div>
        <div class="div-block-1831980521447046">
          <div class="div-block-183198052144700">
            <div class="text-block-9412882406">Support</div>
            <div class="div-block-1831980521447269">
              <div class="text-block-9412882481">NEW</div>
            </div>
          </div>
          <div class="text-block-9412882405">Dedicated Success Coach and Live Sessions with course mentors</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div id="intensive-upgrades" data-sectionid="sections" class="expanded">
  <div class="frame-1000004064">
    <div class="frame-1000004069">
      <div class="div-block-1831980521447267">
        <div class="div-block-1831980521447268">
          <div class="text-block-9412882480">NEW</div>
        </div>
      </div>
      <div class="we-ve-worked-with-th-3">The All New Intensive 3.0 Upgrades to Supercharge Your Career</div>
      <div class="desktop-vector">
        <div class="vectors-wrapper-163 w-embed"><img
            src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/2.0-upgrades-underline-vector.png'
            alt='' height="11px" loading='lazy' /></div>
      </div>
      <div class="mobile-vector">
        <div class="vectors-wrapper-163 w-embed"><img
            src='https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mobile-underline.png' alt=''
            height="11px" loading='lazy' /></div>
      </div>
    </div>
    <div id="upgradesContainer" class="all-upgrades-container">
      <div id="upgradesContainer1" class="upgrades-container-1">
        <div class="frame-1000004066">
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/live-streaming-3.0-upgrades.png'
                alt='' width="80px" loading='lazy' /></div>
            <div class="frame-1000004070">
              <div class="user-research">Live Sessions (Monday to Friday)</div>
              <div class="we-take-pride-in-mak">To lea coding best practices, get interview tips, discuss doubts and
                more from experts.</div>
            </div>
          </div>
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-personal-success-coach.png'
                alt='' width="80px" loading='lazy' /></div>
            <div class="frame-1000004067">
              <div class="user-research">Dedicated Success Coach for Every Student</div>
              <div class="we-take-pride-in-mak">To guide you and ensure a smooth leaing jouey</div>
            </div>
          </div>
        </div>
        <div class="frame-1000004066">
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-placements-success-manager-icon.png'
                width="80px" alt='' loading='lazy' /></div>
            <div class="frame-1000004070">
              <div class="user-research">Placement Success Manager</div>
              <div class="we-take-pride-in-mak">To give feedback on your interview performance and boost your confidence
              </div>
            </div>
          </div>
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-offline-drives.png'
                alt='' width="80px" loading='lazy' /></div>
            <div class="frame-1000004067">
              <div class="user-research">Mega Offline Placement Drives</div>
              <div class="we-take-pride-in-mak">Once in every 3 months</div>
            </div>
          </div>
        </div>
      </div>
      <div id="upgradesContainer2" class="upgrades-container-2">
        <div class="frame-1000004066">
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mock-interviews.png' alt=''
                width="80px" loading='lazy' /></div>
            <div class="frame-1000004065">
              <div class="user-research">AI-Powered Mock Interviews</div>
              <div class="we-take-pride-in-mak">Practice with realistic mock interviews and get tailored feedback
                immediately</div>
            </div>
          </div>
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-masterclasses.png' alt=''
                width="80px" loading='lazy' /></div>
            <div class="frame-1000004070">
              <div class="user-research">Masterclasses by Industry Experts</div>
              <div class="we-take-pride-in-mak">To keep you updated with the latest trends and industry-aligned</div>
            </div>
          </div>
        </div>
        <div class="frame-1000004066">
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mentorship.png' alt='' width="80px"
                loading='lazy' /></div>
            <div class="frame-1000004067">
              <div class="user-research">Mentorship from Successful Seniors</div>
              <div class="we-take-pride-in-mak">Alumni from 2000+ companies to make your placement preparation flawless
              </div>
            </div>
          </div>
          <div class="frame-1000004068">
            <div class="html-embed-82606 w-embed"><img
                src='https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-nxt-bytes.png' alt='' width="80px"
                loading='lazy' /></div>
            <div class="frame-1000004067">
              <div class="user-research">Effortless Revision with NxtBytes</div>
              <div class="we-take-pride-in-mak">Where you master key concepts through engaging reels and quizzes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="show-more-intensive-3.o-upgrades" class="show-more-upgrades track-button">
    <div class="hide-show-txt">Show all Upgrades</div>
    <div class="down-arrow-icon w-embed"><img
        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/arrow-down.svg'
        alt='' loading='lazy' /></div>
  </div>
  <div class="w-embed w-script"></div>
</div>
<section id="lea-the-best-from-the-alumni-of-intensive-page" data-sectionid="sections" class="section-2648">
  <div class="lea-the-best-section w-container">
    <div class="best-alumni-div-2">
      <div class="div-block-1831980521414">
        <h4 class="heading-sathosi-font font-size-48">Your Trainers are Alumni of</h4>
        <div loading="lazy" class="your-triners-underline"></div>
      </div>
      <div class="html-embed-41936 w-embed"><img
          src='https://nxtwave.imgix.net/ccbp-website/intensive/lea-the-best-from-the-alumni/Alumni_2x.png'
          alt='lea from best alumni' width='100%' loading='lazy' /></div>
      <div class="html-embed-41935 w-embed"><img
          src='https://nxtwave.imgix.net/ccbp-website/intensive/lea-the-best-from-the-alumni/alumni-mobile.png'
          alt='test image' width='100%' loading='lazy' /></div>
      <p class="home-many-more-2">and many more...</p>
    </div>
  </div>
</section>
<div id="reviews" data-sectionid="sections" class="section-2674">
  <div class="div-block-1831980521447038 intensive-2-0-page">
    <div class="div-block-1831980521447040 heading-div2">
      <h2 class="heading-sathosi-font font-size-48 color-light">Your Seniors Got Placed. Itâ€™sÂ YourÂ TuÂ Now!</h2>
      <div loading="lazy" class="your-seniours-got-placed-underline"></div>
    </div>
    <div class="div-block-1831980521447033">
      <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100"
        class="tabs-37 w-tabs">
        <div class="tab-menu-categories w-tab-menu"><a data-w-tab="Tab 1" id="all-tab-reviews"
            class="categories-tab track-button w-inline-block w-tab-link w--current">
            <div>All</div>
          </a><a data-w-tab="Tab 2" id="non-it-branch-to-it-job-tab-reviews" filter-by="Top MNC Companies"
            class="categories-tab track-button w-inline-block w-tab-link">
            <div class="text-block-9412882400">Non IT Branch to IT Job</div>
          </a><a data-w-tab="Tab 4" id="non-engineering-degree-tab-reviews" filter-by="Women in tech"
            class="categories-tab track-button w-inline-block w-tab-link">
            <div class="text-block-9412882401">Non-Engineering Degree</div>
          </a><a data-w-tab="Tab 9" id="career-gap-tab-reviews"
            class="categories-tab track-button w-inline-block w-tab-link">
            <div class="text-block-9412882398">Career Gap</div>
          </a><a data-w-tab="Tab 6" id="got-into-top-mncs-tab-reviews"
            class="categories-tab track-button w-inline-block w-tab-link">
            <div class="text-block-9412882399">Got Into Top MNCs</div>
          </a><a data-w-tab="Tab 10" id="non-it-job-to-it-job-tab-reviews"
            class="categories-tab track-button w-inline-block w-tab-link">
            <div class="text-block-9412882402">Non IT job to IT job</div>
          </a></div>
        <div class="w-tab-content">
          <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
            <div fs-cmsload-mode="replace" fs-cmsload-element="wrapper" class="tabs-content-cont">
              <div fs-cmsload-element="list" fs-list-element="list" class="swiper-combo-class swiper w-dyn-list">
                <div role="list" class="collection-list-combo swiper-wrapper w-dyn-items w-row">
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/73c78911-c674-464b-b32d-252e28d79002.png'
                              alt='Bairy Vishnu Vardhan-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lti-mindtree.png'
                              alt='LTI Mindtree-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Bairy Vishnu Vardhan</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">26</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/bairy-vishnu-vardhan/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Thrilled to share that Iâ€™ve started my career as a Graduate
                          Engineer Trainee at LTI Mindtree! Grateful to NxtWave for the mentorship, mock interviews, and
                          guidance that made this possible.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/75dd4c64-e2e8-4a28-a18f-4fd7d30d2e9c.png'
                              alt='Kulkai Rohith Kumar-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/aaro7.png'
                              alt='Aaro7-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Kulkai Rohith Kumar</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Jan</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">26</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kulkai-rohith-kumar-886878111/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I didnâ€™t expect to move into tech after so long, but here I
                          am. Leaing through NxtWave made this transition feel possible.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/319c8144-2a13-4206-b698-64c7d00b4e74.png'
                              alt='Sai Ram Polisetty-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/aaro7.png'
                              alt='Aaro7-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Ram Polisetty</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Jan</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">26</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sairam-polisetty/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I focused on building real skills instead of worrying about
                          outcomes. Getting selected through NxtWave feels like a strong start for me.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/29ca95a6-6ed0-4a3a-9c71-a298ce4c7efa.png'
                              alt='Sanjeevan Thangaraj-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/gvcc-solutions-private-limited-.png'
                              alt='GVCC Solutions Private Limited -logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sanjeevan Thangaraj</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Jan</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">26</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sanjeevan-thangaraj/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This is my first job, and it came after a lot of leaing and
                          trial. NxtWave helped me move faster and feel more confident.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/83d8e6f2-a772-44d5-bc3d-94df0fd8962c.png'
                              alt='Manoj Kancharla-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/ngenue---natural-gas-operational-excellence.png'
                              alt='nGenue - Natural Gas Operational Excellence-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Manoj Kancharla</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Jan</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">26</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/manoj-kancharla-384590231/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™d been trying for a while, so getting this opportunity
                          through NxtWave feels reassuring. Happy to finally get started.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/ebd193b1-c20d-4f25-b369-7481780b343c.png'
                              alt='Chethan Gondrala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/skynetic-ventures.png'
                              alt='Skynetic Ventures-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Chethan Gondrala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/chethan-gondrala/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I wasnâ€™t great at coding when I started. Now Iâ€™m building
                          real projects and stepping into my first Software Engineer role, thanks to NxtWave</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/657bba00-1a6c-4c3a-b033-4791e3d9d716.png'
                              alt='Kavya D M-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/media-nv.png'
                              alt='Media Nv-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Kavya D M</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kavya-d-m-2003dm/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I got selected once and then heard nothing. Thatâ€™s when I
                          knew I needed real skills, not hope. NxtWave helped me restart properly.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/0d045cad-09bb-4ac5-b6a9-225f2b46c010.png'
                              alt='Gaikwad Kaustubh Nitin-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lloyd-technologies.png'
                              alt='Lloyd Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Gaikwad Kaustubh Nitin</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kaustubh-gaikwad2332/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">After graduation, I struggled to convert opportunities.
                          Applying through NxtWave changed that and helped me start my career as a Software Engineer.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/806d1748-0920-458c-93c4-22dd08712751.png'
                              alt='Mohammed Ashik-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/skylights-energy.png'
                              alt='Skylights Energy-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Mohammed Ashik</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/mohammed-ashik-130727385/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I was already working, but NxtWave helped me level up. What I
                          leaed there helped me crack better software roles and keep moving forward.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/fef4964c-3a9e-4fdf-9581-10017ef6d588.png'
                              alt='J. Vishnu Vardhan Babu-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/media-nv.png'
                              alt='Media Nv-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">J. Vishnu Vardhan Babu</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/vishnu-jangam/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I joined another platform after college, but nothing moved.
                          NxtWave felt different because someone actually guided me step by step.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/8ee82530-2750-40be-bc77-0a381c2b8932.png'
                              alt='Rishika Goud -img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/media-nv.png'
                              alt='Media Nv-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Rishika Goud </p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/rishika-goud-298a372a8/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">After trying placements elsewhere and hearing nothing,
                          NxtWave was the first place that helped me land my first full-stack role.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/99e7eab6-debd-4e00-b235-bb0979c2a27f.png'
                              alt='Manisha Kumari Sah-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Manisha Kumari Sah</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/manisha-kumari-sah-290309276/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I used to doubt myself because no company replied. NxtWave
                          gave me the push and support I was missing. Without NxtWaveâ€™s support, I honestly feel Iâ€™d
                          still be waiting for replies.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/95ebb1bb-99d4-4fd2-9b34-ed94a92c13a5.png'
                              alt='Nandyala Swaalatha-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Nandyala Swaalatha</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/swaalatha-nandyala-829970289/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m from an ECE background. After many failed attempts,
                          NxtWave support is what finally led to my first job at Capgemini.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/c4100cb1-7039-47f1-8bed-1d808fe31d24.png'
                              alt='Sreeniketh Raj Kothakonda-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/platinumrx.png'
                              alt='PlatinumRx-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sreeniketh Raj Kothakonda</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sreeniketh-raj-602371299/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I faced rejections and had very limited experience before
                          NxtWave. With structured prep and placement guidance, I finally secured my first opportunity
                          at PlatinumRx.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/97c23d1f-4b83-438a-9bd6-0f089af6aaf9.png'
                              alt='Rahul Padidhela-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/media-nv.png'
                              alt='Media Nv-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Rahul Padidhela</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/rahul-padidhela/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I planned to go abroad, but when that didnâ€™t work out, I
                          chose to build skills instead. With NxtWaveâ€™s guidance, Iâ€™m starting my first job as a
                          Fullstack Developer at MediaNV.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/c8bfa960-eae8-49b8-9420-2dc918c351a9.png'
                              alt='Nikhil Kumar Itharaju-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/latracal-solutions-private-limited.png'
                              alt='Latracal Solutions Private Limited-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Nikhil Kumar Itharaju</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/nikhil-itharaju/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I didnâ€™t take leaing seriously at first. When I finally
                          did, the results followed. Thanks to NxtWave, Iâ€™m starting my first inteship now.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/5e0a0fd6-1ef8-43c1-90b9-aba0912ecef1.png'
                              alt='Durga Prasad Tadi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lmv-financial-services-pvt-ltd.png'
                              alt='LMV Financial Services Pvt Ltd-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Durga Prasad Tadi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/durgaprasadtadi/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I spent months trying other institutes and still felt stuck.
                          Joining NxtWave changed everything. The support and leaing gave me confidence. Now, Iâ€™ve
                          landed my first IT job at LMV.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/a21a848c-e7cd-4e86-b99c-1045e65e4b20.png'
                              alt='Sai Kumar Gattu-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/vesonix-techlabs-private-limited.png'
                              alt='Vesonix TechLabs Private Limited-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Kumar Gattu</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/saikumar-gattu/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Leaing tech felt tough at first. Classes in my native
                          language, mock interviews, and patience helped me crack my first software job.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/34986b0f-aa0a-4ce8-b835-2c344735c991.png'
                              alt='Abhisikta Moharana-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/vyapar.png'
                              alt='Vyapar-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Abhisikta Moharana</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/abhisikta-moharana-983052270/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Switching from biotechnology to a tech role wasnâ€™t easy,
                          but NxtWave helped make it possible. Happy with how this new chapter has started.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/635abf12-32ad-4580-a685-2419d7922eeb.png'
                              alt='Gangavarapu Uday Kumar Reddy-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/digitaltrust-technologies.png'
                              alt='DigitalTrust Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Gangavarapu Uday Kumar Reddy</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/gukr/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Getting placed through NxtWave in my very first application
                          feels exciting. Happy to start my career alongside a friend in the same company.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/36ebc7a5-5d1e-4707-a7b3-a9b8cf365f59.png'
                              alt='Chittibomma Vara Prasanna Parvathi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/accedepro-private-limited.png'
                              alt='Accedepro Private Limited-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Chittibomma Vara Prasanna Parvathi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/chittibomma-vara-prasanna-parvathi-10b217256/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I liked how straightforward things were through NxtWave.
                          Getting this software role feels aligned with the experience Iâ€™ve built so far.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/1f32d1c4-e994-40f7-8dcc-1d967fe86499.png'
                              alt='Nadimidoddi Surya Kiran-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/ashling-partners.png'
                              alt='Ashling Partners-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Nadimidoddi Surya Kiran</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/suryakirannadimidoddi/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This is my first job, and it came after a long phase of
                          leaing and patience. NxtWave played a steady role in that jouey.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/22079222-84e3-4cfc-beeb-ebdc16d9c701.png'
                              alt='Sai Sesha Reddy Chundi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/kajkarma.png'
                              alt='Kajkarma-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Sesha Reddy Chundi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sai-sesha-reddy/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Recently joined as a Full-Stack Developer and things feel
                          steady. After a brief break, NxtWave helped me get back on track with the right opportunity.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/94308a85-8b68-49bb-bac7-405121dbc223.png'
                              alt='Dinesh Thallapaku-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png'
                              alt='ADP-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Dinesh Thallapaku</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/dineshthallapku/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I built confidence in my skills through NxtWave, and that
                          helped me step into my first role as a Functional Consultant.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/b01b514e-599e-47c4-8ef6-b27900a2a6ca.png'
                              alt='Sanjay Kumar Vanapatla-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/cararth.png'
                              alt='cararth-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sanjay Kumar Vanapatla</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sanjay-kumar-vanapatla-35131022b/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I started leaing with NxtWave from my first year itself. That
                          early start helped me build real skills and step into my first developer role now.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/c9a8d2cb-8ae5-4bee-8e69-e4e39885e1b5.png'
                              alt='Tanguturi Venkata Sai Sharath-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lpar-systems-llc.png'
                              alt='LPAR systems LLC-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Tanguturi Venkata Sai Sharath</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/tvs-sharath-911925258/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I knew theory from college, but I actually leaed backend
                          development at NxtWave. That clarity helped me start my career as a backend developer.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/4fe408d3-7fd6-4999-bc6b-c81e05a8fe8b.png'
                              alt='Anthony Gopu-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/jaihokisan.png'
                              alt='Jaihokisan-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Anthony Gopu</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/anthony-reddy-439223257/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWave felt less like a course and more like practice for
                          real work. Starting my first job as a ME developer now feels like a natural continuation of
                          that work.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/50526ccd-a746-4ae8-8282-e8dc05704cd6.png'
                              alt='Kowshik Chamala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/medianv.png'
                              alt='MediaNV-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Kowshik Chamala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kowshik-reddy-chamala-ab367825b/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I trusted a friendâ€™s suggestion and joined NxtWave. That
                          decision helped me find direction and start my career as a ME Stack Developer.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/ada26901-e37f-41ff-ae74-d28164636b49.png'
                              alt='Hemanth Kumar Addagada-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deepklarity.png'
                              alt='DeepKlarity-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Hemanth Kumar Addagada</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/hemanth14/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This is my first job, and I joined it while studying. Leaing
                          step by step at NxtWave made handling actual tasks feel doable for me.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/ab574166-ac2f-4ad6-a262-8a8c4c19302c.png'
                              alt='Jakka Sreehari -img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/winfo-solutions.png'
                              alt='Winfo Solutions-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Jakka Sreehari </p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sreehari-jakka-1912b929a/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I was applying regularly and almost decided to join NxtWave,
                          and then this offer came through. Seeing my parents happy after the placement means more to me
                          than anything else.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/f67aad26-6d49-4630-8435-986a80e1cda5.png'
                              alt='Raga Sandeep Reddy Bobba-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/probe-42.png'
                              alt='Probe 42-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Raga Sandeep Reddy Bobba</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/raga-sandeep-reddy-bobba/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I joined NxtWave early in college and kept building skills
                          alongside academics. That consistency helped me land this Software Engineer role at Probe 42.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/96831e20-1938-4e0a-b20e-d0a1dfe5076e.png'
                              alt='Rahul Rajpurohit-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/agivant-technologies.png'
                              alt='Agivant Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Rahul Rajpurohit</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/rahul-rajpurohit-here/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I was clear that I wanted a tech role, not just any offer.
                          Through NxtWave, I got the right opportunity and consistent updates till selection.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/69613471-b81c-4c6d-86fb-ff422cbb9814.png'
                              alt='Nand Narayan Singh-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/isimplexity.png'
                              alt='Isimplexity-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Nand Narayan Singh</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/nand-narayan-singh-7167b2230/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I had already done a 6-month inteship, and this role feels
                          like the right next step. Things finally moved once I started applying through NxtWave.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/114541ab-ad63-4d62-ab95-ed735c84404f.png'
                              alt='Aniket Ranjan-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/crayon-data.png'
                              alt='Crayon Data-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Aniket Ranjan</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/aniket-ranjan-32b8a4247/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m still in final year and got selected as an AI Engineer
                          Inte at Crayon Data. NxtWave helped me apply to roles that actually fit my skills.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/444c1943-44b8-421f-876c-e3af44c95977.png'
                              alt='Sampath Zakkula-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/metayb.png'
                              alt='Metayb-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sampath Zakkula</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/zakkulasampath/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I didnâ€™t know coding properly before NxtWave. After leaing
                          there, I felt ready for interviews and now Iâ€™m starting my first job as a ME developer.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/2668235c-fa93-44c9-99a6-017affea4a2b.png'
                              alt='Mohammed Azad Ali-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/metayb.png'
                              alt='Metayb-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Mohammed Azad Ali</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/mohammed-azad-ali-developer?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">After trying for jobs for a long time, getting selected
                          through NxtWave in my first attempt feels like a big relief and a good start for me.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/6b2551ab-0b12-4558-8b34-3ddd9d1dab8b.png'
                              alt='Rushi Bokka-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/jaihokisan.png'
                              alt='Jaihokisan-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Rushi Bokka</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/rushi-b-bb5708254/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m from an EEE background, but I always liked web
                          development. Happy to start my career as a UI/ME Developer.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/6cabac56-af62-455f-8d68-79c7284f9684.png'
                              alt='Samineni Sai Deepthi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/agivant-technologies.png'
                              alt='Agivant Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Samineni Sai Deepthi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/saideepthi-samineni/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I secured my Associate Engineer role through focused
                          interview preparation. My leaing and practice with NxtWave helped me convert this opportunity.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/de43219f-7ad6-4fcd-9163-f8639b7f0d7c.png'
                              alt='Jayasundhar Chalakaveri-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/jaihokisan.png'
                              alt='Jaihokisan-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Jayasundhar Chalakaveri</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/jayasundhar/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This first job offer feels like a strong start to my career.
                          NxtWaveâ€™s consistent guidance and timely support helped me improve with every interview
                          attempt.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/32a66e93-3ca9-40bf-aa68-df4f8de5d5b3.png'
                              alt='Surya Sai Pranav Mortha-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/winfo-solutions.png'
                              alt='Winfo Solutions-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Surya Sai Pranav Mortha</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/suryasaipranavmortha/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWaveâ€™s focused training and interview prep helped me
                          convert leaing into results. Starting my career as a Software Engineer feels like the right
                          move.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/5f07632a-19c3-4301-938d-fafcf0175e4f.png'
                              alt='Vinay Malyala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/datagaps.png'
                              alt='DataGaps-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Vinay Malyala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/vinay-malyala-7bbaa1240/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Getting selected as an Associate Developer feels rewarding.
                          NxtWave helped me build strong fundamentals and consistency that made me confident in
                          interviews.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/f712cc40-01cd-4d86-85f6-6e6b0c93e1f4.png'
                              alt='Koduru Suresh Chandra Reddy-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/jaihokisan.png'
                              alt='Jaihokisan-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Koduru Suresh Chandra Reddy</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kodurusureshchandrareddy/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This opportunity reflects the skills I built through
                          consistent practice. NxtWaveâ€™s clear leaing path and hands-on approach prepared me well for
                          this role.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/45f45460-0aac-4e55-badb-3cae63749a5b.png'
                              alt='R.Bhanu Prakash Repaka-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/datagaps.png'
                              alt='DataGaps-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">R.Bhanu Prakash Repaka</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/bhanu-repaka/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Choosing NxtWave early in my jouey helped me build strong
                          fundamentals through projects, and that confidence played a key role in starting my career as
                          a developer.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/2eca7063-3798-43c0-9bc2-0a538381b7f0.png'
                              alt='Lakshmi Priya Chilakalapudi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Lakshmi Priya Chilakalapudi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/lakshmi-priya-729582292"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Starting my career at Capgemini feels exciting. NxtWave
                          played an important role in helping me take this first step with confidence.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/7c991bc7-31ed-494a-b0fa-300d8cba1e0f.png'
                              alt='Guru Nitheesh Kumar Patnam-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/datagaps.png'
                              alt='DataGaps-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Guru Nitheesh Kumar Patnam</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/guru-nitheesh-patnam-523a42253/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Joining as an Associate Developer feels like a solid start.
                          NxtWave helped me build the skills and consistency I needed to step into a real development
                          role.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/bf6fc03c-9443-411a-8567-d036a4a9c94e.png'
                              alt='Venkata Rama Prasanth Erapaneedi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/cubastion-consulting.png'
                              alt='Cubastion Consulting-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Venkata Rama Prasanth Erapaneedi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/erapaneedi-venkata-rama-prasanth-a4ab131b7/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">My jouey took time and had ups and downs, but the support I
                          got from NxtWave kept me moving. Starting my first tech role now feels worth all the patience.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/510fa9c4-bd77-47df-811b-ad586ad504ab.png'
                              alt='Safura Tehreen-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Safura Tehreen</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/safura-tehreen-91434127a/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">When college placements didnâ€™t give much hope, NxtWave
                          really helped. Getting placed now gives me confidence that I can stand on my own feet.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/06d1c61e-7384-4908-bbdd-09c7ca40e8bf.png'
                              alt='Banothu Nithin-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/innoira.png'
                              alt='Innoira-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Banothu Nithin</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/banothu-nithin/recent-activity/all/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I always believed Iâ€™d make it one day. NxtWaveâ€™s hands-on
                          projects, flexibility, and placement support helped me land my first job as an Agentic AI
                          Engineer.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/c70c6c23-cf56-469a-af19-2337e882329b.png'
                              alt='Harika Vadlamudi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/datagaps.png'
                              alt='DataGaps-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Harika Vadlamudi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/harika-vadlamudi-53aa69268/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Campus placements didnâ€™t work out, but NxtWave did. The
                          structured leaing helped me gain clarity and confidence, and I cracked my first interview on
                          my first attempt.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/8c68c64f-4cbf-4066-a2bc-bcd9ac3cb7f1.png'
                              alt='Raveen Karri-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/pasovit-technologies.png'
                              alt='Pasovit Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Raveen Karri</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/raveenkarri/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This is my first job, and I couldnâ€™t be happier.
                          NxtWaveâ€™s hands-on leaing, mocks, and guidance helped me move into full-stack development
                          from a non-tech background.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="arrow-container">
                <div id="right-button" loading="lazy" class="left-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-84">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
                <div id="right-button" loading="lazy" class="right-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-83">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 2" class="w-tab-pane">
            <div fs-cmsload-mode="replace" fs-cmsload-element="wrapper" class="tabs-content-cont">
              <div fs-cmsload-element="list" fs-list-element="list" class="swiper-combo-class swiper w-dyn-list">
                <div role="list" class="collection-list-combo swiper-wrapper w-dyn-items w-row">
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/34986b0f-aa0a-4ce8-b835-2c344735c991.png'
                              alt='Abhisikta Moharana-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/vyapar.png'
                              alt='Vyapar-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Abhisikta Moharana</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/abhisikta-moharana-983052270/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Switching from biotechnology to a tech role wasnâ€™t easy,
                          but NxtWave helped make it possible. Happy with how this new chapter has started.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/610d0c8e-195c-4b1a-8f3d-c1fc99ff5123.png'
                              alt='Bhargav Sunil Yalamati-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/rapidcaregroup.png'
                              alt='RapidCareGroup-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Bhargav Sunil Yalamati</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/bhargav-sunil-yalamati/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">From being unsure about coding to working as a Fullstack AI
                          inte, my jouey at NxtWave gave me the confidence to make this shift.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/6b2551ab-0b12-4558-8b34-3ddd9d1dab8b.png'
                              alt='Rushi Bokka-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/jaihokisan.png'
                              alt='Jaihokisan-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Rushi Bokka</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/rushi-b-bb5708254/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m from an EEE background, but I always liked web
                          development. Happy to start my career as a UI/ME Developer.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/d975f505-471e-48d1-b7b4-11ac8cc0104d.png'
                              alt='Shayan Zafar Ansari-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/anand-rathi.png'
                              alt='Anand Rathi-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Shayan Zafar Ansari</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/shayan-zafar-4202b4257?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Getting selected for my first SDE role while still in college
                          feels exciting. Grateful to NxtWave for making the entire placement process seamless.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/06d1c61e-7384-4908-bbdd-09c7ca40e8bf.png'
                              alt='Banothu Nithin-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/innoira.png'
                              alt='Innoira-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Banothu Nithin</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/banothu-nithin/recent-activity/all/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I always believed Iâ€™d make it one day. NxtWaveâ€™s hands-on
                          projects, flexibility, and placement support helped me land my first job as an Agentic AI
                          Engineer.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/8c68c64f-4cbf-4066-a2bc-bcd9ac3cb7f1.png'
                              alt='Raveen Karri-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/pasovit-technologies.png'
                              alt='Pasovit Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Raveen Karri</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/raveenkarri/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This is my first job, and I couldnâ€™t be happier.
                          NxtWaveâ€™s hands-on leaing, mocks, and guidance helped me move into full-stack development
                          from a non-tech background.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/319c8144-2a13-4206-b698-64c7d00b4e74.png'
                              alt='Sai Ram Polisetty-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/aaro7.png'
                              alt='Aaro7-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Ram Polisetty</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Jan</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2026</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sairam-polisetty/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I focused on building real skills instead of worrying about
                          outcomes. Getting selected through NxtWave feels like a strong start for me.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/75dd4c64-e2e8-4a28-a18f-4fd7d30d2e9c.png'
                              alt='Kulkai Rohith Kumar-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/aaro7.png'
                              alt='Aaro7-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Kulkai Rohith Kumar</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Jan</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2026</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kulkai-rohith-kumar-886878111/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I didnâ€™t expect to move into tech after so long, but here I
                          am. Leaing through NxtWave made this transition feel possible.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/12fffd8a-50b1-4ea8-a996-b42af49379b6.png'
                              alt='Praneeth Eagala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/parivartan-software-&amp;-multimedia-pvt.-ltd..png'
                              alt='Parivartan Software &amp; Multimedia Pvt. Ltd.-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Praneeth Eagala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/praneeth-4e33/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I switched from a non-IT background and stayed consistent
                          with NxtWave. Working as a ME developer now feels like the right tu in my career.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/806d1748-0920-458c-93c4-22dd08712751.png'
                              alt='Mohammed Ashik-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/skylights-energy.png'
                              alt='Skylights Energy-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Mohammed Ashik</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/mohammed-ashik-130727385/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I was already working, but NxtWave helped me level up. What I
                          leaed there helped me crack better software roles and keep moving forward.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/95ebb1bb-99d4-4fd2-9b34-ed94a92c13a5.png'
                              alt='Nandyala Swaalatha-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Nandyala Swaalatha</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/swaalatha-nandyala-829970289/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m from an ECE background. After many failed attempts,
                          NxtWave support is what finally led to my first job at Capgemini.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/99e7eab6-debd-4e00-b235-bb0979c2a27f.png'
                              alt='Manisha Kumari Sah-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Manisha Kumari Sah</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/manisha-kumari-sah-290309276/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I used to doubt myself because no company replied. NxtWave
                          gave me the push and support I was missing. Without NxtWaveâ€™s support, I honestly feel Iâ€™d
                          still be waiting for replies.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/88dc8394-9a0b-4334-94ac-9c97166387c9.png'
                              alt='Yugandhar Gubbala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/cubic-corporation.png'
                              alt='Cubic Corporation-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Yugandhar Gubbala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/yugandhargubbala34/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWave didnâ€™t just teach me tech. It made consistency a
                          habit, and thatâ€™s what helped me land my role at Cubic.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/97c23d1f-4b83-438a-9bd6-0f089af6aaf9.png'
                              alt='Rahul Padidhela-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/media-nv.png'
                              alt='Media Nv-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Rahul Padidhela</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/rahul-padidhela/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I planned to go abroad, but when that didnâ€™t work out, I
                          chose to build skills instead. With NxtWaveâ€™s guidance, Iâ€™m starting my first job as a
                          Fullstack Developer at MediaNV.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/b5984172-bd2d-4f18-aa15-b30c95ce2bf0.png'
                              alt='Ramu Runja-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/innoworks-software-solutions-private-limited.png'
                              alt='InnoWorks Software Solutions Private Limited-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Ramu Runja</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/ramu-runja-8744a0272/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I already had 8 months of work experience, but NxtWaveâ€™s
                          support helped me switch confidently and land my role at InnoWorks on my first attempt.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/4128748e-caa2-45b7-bbb4-176955ee6d6c.png'
                              alt='Naga Anvesh Sodisetti-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/innomick.png'
                              alt='Innomick-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Naga Anvesh Sodisetti</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/anvesh-software/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m an EEE graduate and started coding only after NxtWave.
                          It took time, but the leaing helped me crack a Fullstack role at Innomick.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/128be44a-8cf9-4602-b190-cb3a36c77b87.png'
                              alt='Praveen kumar Alluri-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/cubic-corporation.png'
                              alt='Cubic Corporation-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Praveen kumar Alluri</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/alluri-praveen-kumar/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Everyone in my family is in govement jobs, but NxtWave helped
                          me build my own path in tech. Proud to start my career at Cubic Corporation as an Engineering
                          Trainee.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/9b44c937-e886-48e6-bbc9-a857511004e4.png'
                              alt='Shani Kasaudhan-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/anand-rathi.png'
                              alt='Anand Rathi-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Shani Kasaudhan</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/shani-kasaudhan-912630252/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m still in my final year, yet I cracked an SDE Inte role
                          at Anand Rathi on my first try, thanks to NxtWaveâ€™s test and placement support.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/e7d89ff4-6d4f-4baa-8442-bfef159482f0.png'
                              alt='Vikas Chaudhary-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/anand-rathi.png'
                              alt='Anand Rathi-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Vikas Chaudhary</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/vikas-chaudhary-a84624251/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWave kept sharing interviews, called after every round,
                          and guided me with feedback. That support helped me finally land an SDE Inte offer at Anand
                          Rathi.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/6e95968f-341a-4e69-ac82-1355ee5271a3.png'
                              alt='Sai Kiran Devara-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/ashling-partners.png'
                              alt='Ashling Partners-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Kiran Devara</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">2025</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/devara-sai-kiran-4b7514257/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I tried so many times and failed, but I didnâ€™t stop. With
                          NxtWaveâ€™s support, I finally got my first IT job at Ashling Partners. Seeing my parents
                          proud makes all the pain worth it.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="arrow-container">
                <div id="right-button" loading="lazy" class="left-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-84">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
                <div id="right-button" loading="lazy" class="right-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-83">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 4" id="non-engineering" class="w-tab-pane">
            <div fs-cmsload-mode="replace" fs-cmsload-element="wrapper" class="tabs-content-cont">
              <div fs-cmsload-element="list" fs-list-element="list" class="swiper-combo-class swiper w-dyn-list">
                <div role="list" class="collection-list-combo swiper-wrapper w-dyn-items w-row">
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/657bba00-1a6c-4c3a-b033-4791e3d9d716.png'
                              alt='Kavya D M-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/media-nv.png'
                              alt='Media Nv-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Kavya D M</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kavya-d-m-2003dm/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I got selected once and then heard nothing. Thatâ€™s when I
                          knew I needed real skills, not hope. NxtWave helped me restart properly.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/5e0a0fd6-1ef8-43c1-90b9-aba0912ecef1.png'
                              alt='Durga Prasad Tadi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lmv-financial-services-pvt-ltd.png'
                              alt='LMV Financial Services Pvt Ltd-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Durga Prasad Tadi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Dec</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/durgaprasadtadi/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I spent months trying other institutes and still felt stuck.
                          Joining NxtWave changed everything. The support and leaing gave me confidence. Now, Iâ€™ve
                          landed my first IT job at LMV.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/ebb61d12-aec2-4824-8fe2-cb4a3c91caa4.png'
                              alt='Md Saber Ahmad-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/growth-market-intelligence.png'
                              alt='Growth Market Intelligence-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Md Saber Ahmad</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/mdsaberahmad/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I struggled to get into IT after MCA. Then I joined NxtWave.
                          Their guidance helped me build real skills and finally crack Growth Market Intelligence as a
                          Jr. Software Developer.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/8c9a2029-ba88-4ec3-a26d-cfd7184cea7d.png'
                              alt='Venkata Tejesh Dumpala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/i-vista-web-solutions.png'
                              alt='i-Vista Web Solutions-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Venkata Tejesh Dumpala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/venkata-tejesh-dumpala/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I wasnâ€™t consistent at first, but NxtWaveâ€™s clear
                          teaching and daily placement support helped me improve and secure a Web Developer position at
                          i-Vista.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/05ce7b4a-9a87-40df-95ab-d226d79e4730.png'
                              alt='Veerababu Teki-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lovasit.png'
                              alt='LovasIT-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Veerababu Teki</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/veera-babu-t-37793a23b/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Coming from a non-tech background and facing multiple
                          rejections, I stayed committed, leaed from zero at NxtWave, and secured my first IT role as an
                          Oracle CPQ Trainee at LovasIT.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/f180bd19-3dc3-4818-b9fd-802a35b9c9b6.png'
                              alt='Sai Sreeja Meesala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/qwipo.png'
                              alt='Qwipo-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Sreeja Meesala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/saisreeja-meesala/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWave&#x27;s hands-on leaing and assignments gave me
                          confidence to build real applications. Today, Iâ€™m excited to begin my next chapter as a
                          Junior Software Developer at Qwipo!</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="arrow-container">
                <div id="right-button" loading="lazy" class="left-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-84">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
                <div id="right-button" loading="lazy" class="right-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-83">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 9" class="w-tab-pane">
            <div fs-cmsload-mode="replace" fs-cmsload-element="wrapper" class="tabs-content-cont">
              <div fs-cmsload-element="list" fs-list-element="list" class="swiper-combo-class swiper w-dyn-list">
                <div role="list" class="collection-list-combo swiper-wrapper w-dyn-items w-row">
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/444c1943-44b8-421f-876c-e3af44c95977.png'
                              alt='Sampath Zakkula-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/metayb.png'
                              alt='Metayb-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sampath Zakkula</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/zakkulasampath/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I didnâ€™t know coding properly before NxtWave. After leaing
                          there, I felt ready for interviews and now Iâ€™m starting my first job as a ME developer.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/aa5158b9-ff83-4308-b74b-bc65e70e251d.png'
                              alt='Veeresh B-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/homes247.in.png'
                              alt='Homes247.in-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Veeresh B</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/veeresh-b-b88531299/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I planned for govement exams, but NxtWave changed my
                          direction. With no tech background, I leaed from scratch and finally landed my first job as a
                          Web Developer Inte at Homes247.in.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/3f9fda16-84bf-4b5d-8aae-ca946bb10e22.png'
                              alt='Anjali Chimata-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/arizon-digital.png'
                              alt='Arizon Digital-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Anjali Chimata</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/anjalichimata520741/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Balancing motherhood, responsibilities, and leaing wasnâ€™t
                          easy, but with NxtWaveâ€™s support I restarted my career and became a Full Stack Developer.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/49425ad2-ca57-4bab-93f0-1af16614610a.png'
                              alt='Daveed Gangi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/global-orizon.png'
                              alt='Global Orizon-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Daveed Gangi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/g-daveed-365958190/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">The practical leaing approach and structured curriculum
                          helped me lea things and apply them effectively. Really happy to share that Iâ€™ve received a
                          job offer as a Full Stack Developer</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/12f4588a-5334-4dfe-be98-71db07d38a5c.png'
                              alt='Harshavardhan Penumala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/arizon-digital.png'
                              alt='Arizon Digital-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Harshavardhan Penumala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/harshavardhan332/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I had a long career break after graduation and never expected
                          to get an IT job. Thanks to NxtWave, I finally got placed at Arizon Digital as a Full Stack
                          Developer.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/7af72b25-ec06-4758-b05e-096eda14b0b9.png'
                              alt='Kalyan Pandaga-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/qwipo.png'
                              alt='Qwipo-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Kalyan Pandaga</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kalyan-pandaga/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">After a 1.5-year career break, I rebuilt my skills and
                          confidence with NxtWave. Today, Iâ€™m excited to start as a Junior Software Developer.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="arrow-container">
                <div id="right-button" loading="lazy" class="left-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-84">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
                <div id="right-button" loading="lazy" class="right-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-83">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 6" class="w-tab-pane">
            <div fs-cmsload-mode="replace" fs-cmsload-element="wrapper" class="tabs-content-cont">
              <div fs-cmsload-element="list" fs-list-element="list" class="swiper-combo-class swiper w-dyn-list">
                <div role="list" class="collection-list-combo swiper-wrapper w-dyn-items w-row">
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/2eca7063-3798-43c0-9bc2-0a538381b7f0.png'
                              alt='Lakshmi Priya Chilakalapudi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Lakshmi Priya Chilakalapudi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/lakshmi-priya-729582292"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Starting my career at Capgemini feels exciting. NxtWave
                          played an important role in helping me take this first step with confidence.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/510fa9c4-bd77-47df-811b-ad586ad504ab.png'
                              alt='Safura Tehreen-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png'
                              alt='Capgemini-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Safura Tehreen</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/safura-tehreen-91434127a/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">When college placements didnâ€™t give much hope, NxtWave
                          really helped. Getting placed now gives me confidence that I can stand on my own feet.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/134d2a43-1ffa-41b3-8473-3973551362fc.png'
                              alt='Sai Prasad Golla-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lti-mindtree.png'
                              alt='LTI Mindtree-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Prasad Golla</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sai-prasad-g-181b75263/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">It feels extra special to begin my first job at LTI Mindtree
                          and even more so because Iâ€™m joining alongside my friend who leaed with me at NxtWave.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/6e540051-dc3a-4804-962b-716d4b7ba99d.png'
                              alt='Boddu Gowri Priya-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lti-mindtree.png'
                              alt='LTI Mindtree-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Boddu Gowri Priya</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/gowripriya-yadav/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">From leaing the basics of tech to landing my first IT job at
                          LTI Mindtree. Big thanks to NxtWave for their mentorship, workshops, and constant guidance.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/f79720fe-03ef-496a-a2d5-ea22901eda49.png'
                              alt='Paidimuddala Shalini-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/lti-mindtree.png'
                              alt='LTI Mindtree-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Paidimuddala Shalini</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/paidimuddala-shalini-8a366b1b3/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Even when others doubted, I kept going with NxtWaveâ€™s
                          guidance and my parentsâ€™ support, Iâ€™m proud to have started my career at LTI Mindtree.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/04c2618c-c0fc-4819-ab69-6a4444600591.png'
                              alt='Madineni Kamali U-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png'
                              alt='ADP-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Madineni Kamali U</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/madineni-kamali-u-5073a4213/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Sometimes all it takes is starting again. After missing my
                          GATE target, I went back to NxtWave, stayed consistent, and within months, landed my first job
                          at ADP.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/81ef5456-ccb0-453b-a9fb-083c7378a677.png'
                              alt='Bharath Narasimha Nandyala-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png'
                              alt='ADP-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Bharath Narasimha Nandyala</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/bharath716/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Coming from an EEE background, NxtWaveâ€™s structured
                          approach made my transition into tech smooth and helped me start my career at ADP.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/a45bc8ff-aebd-4463-97b9-32e7242261b7.png'
                              alt='Bharath Kumar Padira-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png'
                              alt='ADP-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Bharath Kumar Padira</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/bharathkumar-padira/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Started leaing tech out of curiosity, and before even
                          completing my course, I landed my first job at ADP. NxtWave made me confident in the tech
                          world.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/7fca6217-d331-4b85-8fe4-482bb64ed6f2.png'
                              alt='Pitchika Manaswi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png'
                              alt='ADP-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Pitchika Manaswi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/manaswi-pitchika-71b924215/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">After college, I joined NxtWave through my cousin. With their
                          support and my commitment to leaing, I built the right skills and landed a job at ADP.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/6cc4d8ff-f1cf-4cf1-9ba6-3931419b5090.png'
                              alt='Bommina Srinivasarao-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/highradius.png'
                              alt='HighRadius-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Bommina Srinivasarao</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/srinivasarao-bommina/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">After facing tough days and many rejections, this placement
                          at HighRadius feels like a dream come true. NxtWaveâ€™s mentorship and constant support made
                          this achievement possible.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/8f92c752-a72a-4498-8294-9c79f3f17cee.png'
                              alt='Ganesh Bandaru-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/highradius.png'
                              alt='HighRadius-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Ganesh Bandaru</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/ganesh-bandaru-287081247/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">The jouey to landing my first tech job wasnâ€™t easy, but
                          NxtWave helped me stay on track. Today, Iâ€™m proud to join HighRadius as an SDE-1.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/7d34912e-c78a-45b3-a1fb-eb13502b2fac.png'
                              alt='Kamal Teja Pasham-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/highradius.png'
                              alt='HighRadius-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Kamal Teja Pasham</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/kamalteja1/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Getting my first job at HighRadius feels amazing. The
                          mentorship and support from NxtWave helped me stay on track and succeed.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/bced93b3-79f9-459f-8b51-afb623f76e5f.png'
                              alt='Manoj Chunchu-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/highradius.png'
                              alt='HighRadius-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Manoj Chunchu</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/manoj-chunchu-4a66bb260/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWave gave me guidance, opportunities, and the confidence
                          to start my career right after graduation. Iâ€™m proud to begin my next chapter at HighRadius
                          as an SDE-1.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/e488a95c-24aa-4a50-b96d-497e0b9344e0.png'
                              alt='Burra Vikram-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/highradius.png'
                              alt='HighRadius-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Burra Vikram</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/vikramburra/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I wanted to surprise my parents, so I didnâ€™t tell them
                          about my interviews. When I finally shared that I got placed at HighRadius, the joy on their
                          faces was priceless. Thank you NxtWave.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/f4d90a5a-6c60-49ed-93a7-2f1bbcdd0f50.png'
                              alt='DivyaVardhan Marrivada-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/highradius.png'
                              alt='HighRadius-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">DivyaVardhan Marrivada</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Sep</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/vardhanmarriwada/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">What started as small steps in my first year at NxtWave has
                          now tued into my first job at HighRadius. The jouey gave me both skills and the confidence to
                          achieve it.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/65b5ed20-c4c3-4091-a6c4-8c8694c682db.png'
                              alt='Chilveri Prathamesh-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/phenom.png'
                              alt='Phenom-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Chilveri Prathamesh</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Aug</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/chilveri-prathamesh-369b51258/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Balancing college and NxtWave wasnâ€™t easy, but I stayed
                          consistent. That jouey helped me crack my very first interview and get placed at Phenom.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="arrow-container">
                <div id="right-button" loading="lazy" class="left-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-84">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
                <div id="right-button" loading="lazy" class="right-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-83">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
              </div>
            </div>
          </div>
          <div data-w-tab="Tab 10" class="w-tab-pane">
            <div fs-cmsload-mode="replace" fs-cmsload-element="wrapper" class="tabs-content-cont">
              <div fs-cmsload-element="list" fs-list-element="list" class="swiper-combo-class swiper w-dyn-list">
                <div role="list" class="collection-list-combo swiper-wrapper w-dyn-items w-row">
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/635abf12-32ad-4580-a685-2419d7922eeb.png'
                              alt='Gangavarapu Uday Kumar Reddy-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/digitaltrust-technologies.png'
                              alt='DigitalTrust Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Gangavarapu Uday Kumar Reddy</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/gukr/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Getting placed through NxtWave in my very first application
                          feels exciting. Happy to start my career alongside a friend in the same company.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/22079222-84e3-4cfc-beeb-ebdc16d9c701.png'
                              alt='Sai Sesha Reddy Chundi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/kajkarma.png'
                              alt='Kajkarma-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sai Sesha Reddy Chundi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sai-sesha-reddy/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Recently joined as a Full-Stack Developer and things feel
                          steady. After a brief break, NxtWave helped me get back on track with the right opportunity.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/36ebc7a5-5d1e-4707-a7b3-a9b8cf365f59.png'
                              alt='Chittibomma Vara Prasanna Parvathi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/accedepro-private-limited.png'
                              alt='Accedepro Private Limited-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Chittibomma Vara Prasanna Parvathi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/chittibomma-vara-prasanna-parvathi-10b217256/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I liked how straightforward things were through NxtWave.
                          Getting this software role feels aligned with the experience Iâ€™ve built so far.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/1f32d1c4-e994-40f7-8dcc-1d967fe86499.png'
                              alt='Nadimidoddi Surya Kiran-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/ashling-partners.png'
                              alt='Ashling Partners-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Nadimidoddi Surya Kiran</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/suryakirannadimidoddi/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This is my first job, and it came after a long phase of
                          leaing and patience. NxtWave played a steady role in that jouey.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/038da790-29b1-4296-aa73-7049cff1fe5d.png'
                              alt='Ananya Majety-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/quad-one.png'
                              alt='Quad One-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Ananya Majety</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/ananyamajety/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m leaing a lot in my first month as a Data Science
                          Engineer. The timely support from NxtWave during the interview made a real difference.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/ce19f555-2c0f-4dc9-8d69-00850072f490.png'
                              alt='Bhanuteja Gutti-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/image-infosystems-private-limited.png'
                              alt='Image InfoSystems Private Limited-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Bhanuteja Gutti</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/bhanu-teja/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I didnâ€™t lea much in college, but things changed after
                          joining NxtWave. That leaing helped me land this software role and feel ready for real work.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/9258a19c-1853-491e-ac5b-b3c80ef9a5f5.png'
                              alt='Siripurapu Srija-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bridgesoft-solutions.png'
                              alt='Bridgesoft Solutions-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Siripurapu Srija</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Oct</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/siripurapu-srija-a38a44255/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Starting my career as a Java developer and leaing on the job
                          feels reassuring. Applying through NxtWave worked out well for me.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/94308a85-8b68-49bb-bac7-405121dbc223.png'
                              alt='Dinesh Thallapaku-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png'
                              alt='ADP-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Dinesh Thallapaku</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/dineshthallapku/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I built confidence in my skills through NxtWave, and that
                          helped me step into my first role as a Functional Consultant.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/b01b514e-599e-47c4-8ef6-b27900a2a6ca.png'
                              alt='Sanjay Kumar Vanapatla-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/cararth.png'
                              alt='cararth-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Sanjay Kumar Vanapatla</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sanjay-kumar-vanapatla-35131022b/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I started leaing with NxtWave from my first year itself. That
                          early start helped me build real skills and step into my first developer role now.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/4fe408d3-7fd6-4999-bc6b-c81e05a8fe8b.png'
                              alt='Anthony Gopu-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/jaihokisan.png'
                              alt='Jaihokisan-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Anthony Gopu</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/anthony-reddy-439223257/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWave felt less like a course and more like practice for
                          real work. Starting my first job as a ME developer now feels like a natural continuation of
                          that work.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/ada26901-e37f-41ff-ae74-d28164636b49.png'
                              alt='Hemanth Kumar Addagada-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deepklarity.png'
                              alt='DeepKlarity-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Hemanth Kumar Addagada</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/hemanth14/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This is my first job, and I joined it while studying. Leaing
                          step by step at NxtWave made handling actual tasks feel doable for me.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/ab574166-ac2f-4ad6-a262-8a8c4c19302c.png'
                              alt='Jakka Sreehari -img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/winfo-solutions.png'
                              alt='Winfo Solutions-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Jakka Sreehari </p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/sreehari-jakka-1912b929a/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I was applying regularly and almost decided to join NxtWave,
                          and then this offer came through. Seeing my parents happy after the placement means more to me
                          than anything else.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/f67aad26-6d49-4630-8435-986a80e1cda5.png'
                              alt='Raga Sandeep Reddy Bobba-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/probe-42.png'
                              alt='Probe 42-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Raga Sandeep Reddy Bobba</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/raga-sandeep-reddy-bobba/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I joined NxtWave early in college and kept building skills
                          alongside academics. That consistency helped me land this Software Engineer role at Probe 42.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/96831e20-1938-4e0a-b20e-d0a1dfe5076e.png'
                              alt='Rahul Rajpurohit-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/agivant-technologies.png'
                              alt='Agivant Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Rahul Rajpurohit</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/rahul-rajpurohit-here/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I was clear that I wanted a tech role, not just any offer.
                          Through NxtWave, I got the right opportunity and consistent updates till selection.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/69613471-b81c-4c6d-86fb-ff422cbb9814.png'
                              alt='Nand Narayan Singh-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/isimplexity.png'
                              alt='Isimplexity-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Nand Narayan Singh</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/nand-narayan-singh-7167b2230/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I had already done a 6-month inteship, and this role feels
                          like the right next step. Things finally moved once I started applying through NxtWave.</p>
                        <img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/114541ab-ad63-4d62-ab95-ed735c84404f.png'
                              alt='Aniket Ranjan-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/crayon-data.png'
                              alt='Crayon Data-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Aniket Ranjan</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/aniket-ranjan-32b8a4247/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">Iâ€™m still in final year and got selected as an AI Engineer
                          Inte at Crayon Data. NxtWave helped me apply to roles that actually fit my skills.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/2668235c-fa93-44c9-99a6-017affea4a2b.png'
                              alt='Mohammed Azad Ali-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/metayb.png'
                              alt='Metayb-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Mohammed Azad Ali</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/mohammed-azad-ali-developer?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">After trying for jobs for a long time, getting selected
                          through NxtWave in my first attempt feels like a big relief and a good start for me.</p><img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/6cabac56-af62-455f-8d68-79c7284f9684.png'
                              alt='Samineni Sai Deepthi-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/agivant-technologies.png'
                              alt='Agivant Technologies-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Samineni Sai Deepthi</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow"
                            href="https://www.linkedin.com/in/saideepthi-samineni/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">I secured my Associate Engineer role through focused
                          interview preparation. My leaing and practice with NxtWave helped me convert this opportunity.
                        </p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/de43219f-7ad6-4fcd-9163-f8639b7f0d7c.png'
                              alt='Jayasundhar Chalakaveri-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/jaihokisan.png'
                              alt='Jaihokisan-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Jayasundhar Chalakaveri</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/jayasundhar/" target="_blank"
                            class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">This first job offer feels like a strong start to my career.
                          NxtWaveâ€™s consistent guidance and timely support helped me improve with every interview
                          attempt.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" class="collection-list-item swiper-slide w-dyn-item w-col w-col-6">
                    <div class="testimonial-card">
                      <div class="first-card-cont">
                        <div class="profile-company-logo">
                          <div class="profile-image w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/32a66e93-3ca9-40bf-aa68-df4f8de5d5b3.png'
                              alt='Surya Sai Pranav Mortha-img' loading='lazy' /></div>
                          <div class="testimonial-company-logo w-embed"><img
                              src='https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/winfo-solutions.png'
                              alt='Winfo Solutions-logo' loading='lazy' /></div>
                        </div>
                        <div class="name-date-linkdln">
                          <div>
                            <p class="user-fullname">Surya Sai Pranav Mortha</p>
                            <div class="div-block-1831980521448558">
                              <div class="placed-date-user">Placed in</div>
                              <p class="user-placed-date">Nov</p>
                              <div class="user-placed-date">&#x27;</div>
                              <p class="user-placed-date">25</p>
                            </div>
                          </div><a rel="nofollow" href="https://www.linkedin.com/in/suryasaipranavmortha/"
                            target="_blank" class="w-inline-block"><img loading="lazy"
                              src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7bf_Frame%2030.png"
                              alt="" class="image-8128822516" /></a>
                        </div>
                      </div>
                      <div class="second-card-cont"><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/677e6451fc6cb6276fe0d145_format%20quote.png"
                          alt="quote" class="testimonials-quotes" />
                        <p class="testimonial-review-para">NxtWaveâ€™s focused training and interview prep helped me
                          convert leaing into results. Starting my career as a Software Engineer feels like the right
                          move.</p><img loading="lazy"
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/67769538a712464238aaa7be_format%20quote.svg"
                          alt="quote" class="testimonials-quote-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="arrow-container">
                <div id="right-button" loading="lazy" class="left-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-84">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
                <div id="right-button" loading="lazy" class="right-button"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 32 32" fill="none" class="svg-83">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6686 23.5314C11.0438 22.9065 11.0438 21.8935 11.6686 21.2686L16.9373 16L11.6686 10.7314C11.0438 10.1065 11.0438 9.09347 11.6686 8.46863C12.2935 7.84379 13.3065 7.84379 13.9314 8.46863L20.3314 14.8686C20.9562 15.4935 20.9562 16.5065 20.3314 17.1314L13.9314 23.5314C13.3065 24.1562 12.2935 24.1562 11.6686 23.5314Z"
                      fill="#475569"></path>
                  </svg></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-dyn-list">
      <div role="list" class="w-dyn-items">
        <div role="listitem" class="w-dyn-item">
          <div class="date-changes-cms-collection-container-your-reviews">
            <div class="intensive-batch-details-div-your-seniors">
              <div class="start-batch-circle"></div>
              <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
            </div>
            <div class="dates-changing-ctas">
              <div class="embed-btn w-embed"><a id="book-a-free-demo-your-seniors-got-placed" href=#hero-section
                  class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a></div><a
                id="view-all-reviews-your-seniors-got-placed" href="https://www.ccbp.in/reviews" target="_blank"
                class="text-link-block track-class w-inline-block">
                <div>View All Reviews</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="w-embed">
  <style>
    /* More specific selector to override sticky */
    .section-2647 .container-30.cc-flex-h .col-left {
      position: relative !important;
      top: 0 !important;
    }
    
    .section-2647 .col-left {
      position: relative !important;
      top: 0 !important;
      flex: 0 0 45%;
      align-self: flex-start;
    }

    .col-left {
      position: relative !important;
      top: 0 !important;
    }

    .lea_wrapper {
      position: relative;
    }

    .abs-div {
      position: absolute;
    }

    .container-30.cc-flex-h {
      display: flex;
      gap: 40px;
      align-items: flex-start;
    }

    .col-right {
      flex: 1;
    }

    @media (max-width: 991px) {
      .container-30.cc-flex-h {
        flex-direction: column;
      }
      
      .col-left {
        position: relative !important;
        flex: 1 1 100%;
        width: 100%;
      }
      
      .col-right {
        min-height: auto;
      }
    }
  </style>
</div>
    <div class="div-block-1831980521256"></div>
    <div class="container-30 cc-flex-h">
      <div class="col-left">
        <div class="lea_wrapper">
          <div class="section-heading-div">
            <h2 class="heading-sathosi-font font-size-48 width mobile-heading">Get Ready for Your IT Career<br />in 3
              Steps</h2>
            <div class="html-embed-41922 w-embed"><img
                src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/3-steps-underline.svg'
                alt='' loading='lazy' /></div>
            <h2 class="heading-sathosi-font font-size-48 width desktop-heading">Get Ready for Your IT Career in 3 Steps
            </h2>
          </div>
          <div class="collection-list-wrapper-4 show w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <div class="date-changes-cms-collection-container-intensive left-aligin pt-0">
                  <div class="intensive-batch-starts">
                    <div class="start-batch-circle"></div>
                    <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
                  </div>
                  <div class="embed-btn w-embed">
                    <div class="dates-changing-ctas">

                      <a id="book-a-free-demo-your-it-career-in-3-steps-desktop" href="#hero-section"
                        class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

                      <a style=display:none href="" id="-your-it-career-in-3-steps-desktop" class=""></a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="abs-div">
          <div class="div-block-1831980521447512"></div>
          <div class="div-block-1831980521447514"></div>
        </div>
      </div>
      <div class="col-right">
        <div class="div-right">
          <div class="div-block-18319715">
            <div id="fundamentals" class="div-block-183198052218">
              <div class="fundamentals-div">
                <div class="div-block-183198052182 step1">
                  <div class="text-block-94128911">1</div>
                </div>
                <div class="div-block-183198052181">
                  <div class="text-block-9412881916">Fundamentals</div>
                  <div class="div-block-183198052172">
                    <div class="w-embed"><img
                        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/clock.svg'
                        alt='' loading='lazy' /></div>
                    <div class="text-block-94124857">Duration: <span class="text-block-94128904">2 Months</span></div>
                  </div>
                  <div class="div-block-183198052172">
                    <div class="html-embed-41907 w-embed"><img
                        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/laptop-icon.svg'
                        alt='' width='100%' loading='lazy' /></div>
                    <div class="text-block-94128904">3 Hours Classes and 3 Hours Labs perÂ day</div>
                  </div>
                  <div class="div-block-183198052172">
                    <div class="html-embed-41907 w-embed"><img
                        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/book.svg'
                        alt='Clarify your doubts by Domain Experts' width='100%' loading='lazy' /></div>
                    <div class="text-block-94128904">Courses Include</div>
                  </div>
                  <div>
                    <div class="w-layout-grid grid-8654">
                      <div id="w-node-fc306785-3ec7-bb92-3112-24894182b43e-4182b406" class="div-block-183198052173">
                        <div class="div-block-183198052174">
                          <div class="html-embed-41908 w-embed"><img
                              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/html.png'
                              alt='' width='100%' loading='lazy' /></div>
                          <div class="text-block-94128905">HTML</div>
                        </div>
                      </div>
                      <div id="w-node-fc306785-3ec7-bb92-3112-24894182b443-4182b406" class="div-block-183198052173">
                        <div class="div-block-183198052174">
                          <div class="html-embed-41908 w-embed"><img
                              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/css.png'
                              alt='' width='100%' loading='lazy' /></div>
                          <div class="text-block-94128905">CSS</div>
                        </div>
                      </div>
                      <div id="w-node-fc306785-3ec7-bb92-3112-24894182b448-4182b406" class="div-block-183198052173">
                        <div class="div-block-183198052174">
                          <div class="html-embed-41908 w-embed"><img
                              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/python.png'
                              alt='' width='100%' loading='lazy' /></div>
                          <div class="text-block-94128905">Python</div>
                        </div>
                      </div>
                      <div id="w-node-fc306785-3ec7-bb92-3112-24894182b44d-4182b406" class="div-block-183198052173">
                        <div class="div-block-183198052174">
                          <div class="html-embed-41908 w-embed"><img
                              src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/sql.png'
                              alt='' width='100%' loading='lazy' /></div>
                          <div class="text-block-94128905">SQL</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="div-block-183198052172">
                    <div class="html-embed-41907 w-embed"><img
                        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/clipboard-icon.svg'
                        alt='Clarify your doubts by Domain Experts' width='100%' loading='lazy' /></div>
                    <div class="text-block-94128904">Fundamentals Exam</div>
                  </div><a id="view-curriculum-fundamentals" rel="nofollow" view-curriculum="fundamentals-curriculum"
                    popup="true"
                    href="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/fundamentals-curriculum-intensive.pdf"
                    target="_blank" class="link-block-597 track-button w-inline-block">
                    <div>View Curriculum</div>
                    <div class="view-curriculum-arrow"></div>
                  </a>
                  <div data-delay="4000" data-animation="slide" class="slider-398 w-slider" data-autoplay="true"
                    data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                    data-nav-spacing="3" data-duration="500" data-infinite="true">
                    <div class="mask-43 w-slider-mask">
                      <div class="slide-83 w-slide">
                        <div class="html-embed-41909 w-embed"><img
                            src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/food-munch-project-status.png'
                            alt='' width='100%' loading='lazy' /></div>
                      </div>
                      <div class="slide-83 w-slide">
                        <div class="html-embed-41909 w-embed"><img
                            src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/website-chat-project-status.png'
                            alt='' width='100%' loading='lazy' /></div>
                      </div>
                      <div class="slide-83 w-slide">
                        <div class="slider-image w-embed"><img
                            src='https://nxtwave.imgix.net/ccbp-website/intensive/slider-fundamenatils-image.png' alt=''
                            width='100%' loading='lazy' /></div>
                      </div>
                    </div>
                    <div class="left-arrow-12356 w-slider-arrow-left">
                      <div class="w-icon-slider-left"></div>
                    </div>
                    <div class="right-arrow-2169 w-slider-arrow-right">
                      <div class="w-icon-slider-right"></div>
                    </div>
                    <div class="w-slider-nav"></div>
                  </div>
                </div>
              </div>
              <div id="choose-your-job-track" class="div-1234">
                <div class="div-block-183198052182 step2">
                  <div class="text-block-94128911">2</div>
                </div>
                <div class="div-block-183198052184">
                  <div class="text-block-9412881916">Choose your Job Track</div>
                  <div class="text-block-94128924">Based on your Fundamentals exam score, we&#x27;ll also recommend you
                    a suitable Job Track.</div>
                  <div class="w-layout-grid grid-8664">
                    <div class="div-block-1831980521447319">
                      <div class="text-block-94128819917">OPTION 1</div>
                      <div class="text-block-94128819928">ME Full Stack</div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce0585e2088c3ea5f6407_course-duration.svg"
                          loading="lazy" alt="course duration" />
                        <div class="text-block-941288239910 child">Duration: <span class="text-block-94128819930">6
                            Months</span></div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce058b9a90e00ef416aee_fresher-salary.svg"
                          loading="lazy" alt="fresher salary" />
                        <div class="div-block-1831980521447321">
                          <div class="text-block-94124857-copy">Fresher Salaries :<br />In India</div>
                          <div><span class="text-block-94128819930">3 LPA - 12 LPA</span></div>
                        </div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069237834b9ae4e6c83_reat-time-projects.svg"
                          loading="lazy" alt="real time projects" />
                        <div class="text-block-94128819930">Real-time project</div>
                      </div>
                      <div class="div-block-1831980521447326"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069cd2f43c2e7ded321_mongo-db.svg"
                          loading="lazy" alt="mongo db" /><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce05870df5f121652d750_express-js.svg"
                          loading="lazy" alt="express js" /><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce06939e31c5511a175ad_react-js.svg"
                          loading="lazy" alt="react js" /><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069f1102598f6d3fafe_node-js.svg"
                          loading="lazy" alt="node js" /></div><a id="view-curriculum-me-full-stack" rel="nofollow"
                        view-curriculum="me-fullstack-curriculum-intensive" popup="true"
                        href="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/me-fullstack-curriculum-intensive.pdf"
                        target="_blank" class="link-block-597 track-button w-inline-block">
                        <div>View Curriculum</div>
                        <div class="view-curriculum-arrow"></div>
                      </a>
                      <div class="div-block-1831980521447511"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/668390295748ef26d50f21ec_checked.svg"
                          loading="lazy" alt="" />
                        <div class="text-block-941288239924">Seats Available</div>
                      </div>
                    </div>
                    <div class="div-block-1831980521447319">
                      <div class="text-block-94128819917 orange">OPTION 2</div>
                      <div class="text-block-94128819928">Java Full Stack</div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce0585e2088c3ea5f6407_course-duration.svg"
                          loading="lazy" alt="course duration" />
                        <div class="text-block-941288239910 child">Duration: <span class="text-block-94128819930">6
                            Months</span></div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce058b9a90e00ef416aee_fresher-salary.svg"
                          loading="lazy" alt="fresher salary" />
                        <div class="div-block-1831980521447321">
                          <div class="text-block-94124857-copy">Fresher Salaries :<br />In India</div>
                          <div><span class="text-block-94128819930">3 LPA - 12 LPA</span></div>
                        </div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069237834b9ae4e6c83_reat-time-projects.svg"
                          loading="lazy" alt="real time projects" />
                        <div class="text-block-94128819930">Real-time project</div>
                      </div>
                      <div class="div-block-1831980521447326"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce06939e31c5511a175ad_react-js.svg"
                          loading="lazy" alt="react js" /><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce06939cc19b1b4129373_react-original%208.svg"
                          loading="lazy" alt="java" /><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce06a296b9db18c9100de_spring-boot.svg"
                          loading="lazy" alt="spring boot" /></div><a id="view-curriculum-java-full-stack"
                        rel="nofollow" view-curriculum="java-fullstack-curriculum" popup="true"
                        href="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/java-fullstack-curriculum.pdf"
                        target="_blank" class="link-block-597 track-button w-inline-block">
                        <div>View Curriculum</div>
                        <div class="view-curriculum-arrow"></div>
                      </a>
                      <div class="div-block-1831980521447511"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/668390295748ef26d50f21ec_checked.svg"
                          loading="lazy" alt="" />
                        <div class="text-block-941288239924">Seats Available</div>
                      </div>
                    </div>
                    <div class="div-block-1831980521447319">
                      <div class="text-block-94128819917 volite">OPTION 3</div>
                      <div class="text-block-94128819928">QA/Automation Testing</div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce0585e2088c3ea5f6407_course-duration.svg"
                          loading="lazy" alt="course duration" />
                        <div class="text-block-941288239910 child">Duration: <span class="text-block-94128819930">3
                            Months</span></div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce058b9a90e00ef416aee_fresher-salary.svg"
                          loading="lazy" alt="fresher salary" />
                        <div class="div-block-1831980521447321">
                          <div class="text-block-94124857-copy">Fresher Salaries :<br />In India</div>
                          <div><span class="text-block-94128819930">2 LPA - 7 LPA</span></div>
                        </div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069237834b9ae4e6c83_reat-time-projects.svg"
                          loading="lazy" alt="real time projects" />
                        <div class="text-block-94128819930">Real-time project</div>
                      </div><img
                        src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce06a41249f4a8daf48e3_selenium.svg"
                        loading="lazy" alt="spring boot" class="image-8128822190" /><a
                        id="view-curriculum-qa-testing-full-stack" rel="nofollow"
                        view-curriculum="qa-testing-curriculum-intensive" popup="true"
                        href="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/qa-testing-curriculum-intensive-v2.pdf"
                        target="_blank" class="link-block-597 track-button w-inline-block">
                        <div>View Curriculum</div>
                        <div class="view-curriculum-arrow"></div>
                      </a>
                      <div class="div-block-1831980521447511"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6683928ef9bd6412dc52fd49_seat-close.svg"
                          loading="lazy" alt="" />
                        <div class="text-block-941288239924 seat-lock">Seats filled. Next batch starts on<br />01 Jul
                          2026</div>
                      </div>
                    </div>
                    <div class="div-block-1831980521447319">
                      <div class="text-block-94128819917 green">OPTION 4</div>
                      <div class="text-block-94128819928">Data Analytics</div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce0585e2088c3ea5f6407_course-duration.svg"
                          loading="lazy" alt="course duration" />
                        <div class="text-block-941288239910 child">Duration: <span class="text-block-94128819930">3
                            Months</span></div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce058b9a90e00ef416aee_fresher-salary.svg"
                          loading="lazy" alt="fresher salary" />
                        <div class="div-block-1831980521447321">
                          <div class="text-block-94124857-copy">Fresher Salaries :<br />In India</div>
                          <div><span class="text-block-94128819930">2 LPA - 7 LPA</span></div>
                        </div>
                      </div>
                      <div class="div-block-1831980521447328"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069237834b9ae4e6c83_reat-time-projects.svg"
                          loading="lazy" alt="real time projects" />
                        <div class="text-block-94128819930">Real-time project</div>
                      </div>
                      <div class="div-block-1831980521447326"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069bf5cc7d1c3bafbc7_power-bi.svg"
                          loading="lazy" alt="power bi" /><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/667ce069b3f2eba435c2915e_tableau.svg"
                          loading="lazy" alt="tableau" /></div><a id="view-curriculum-data-analytics-full-stack"
                        rel="nofollow" view-curriculum="data-analytics" popup="true"
                        href="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/data-analytics-intensive-curriculum.pdf"
                        target="_blank" class="link-block-597 track-button w-inline-block">
                        <div>View Curriculum</div>
                        <div class="view-curriculum-arrow"></div>
                      </a>
                      <div class="div-block-1831980521447511"><img
                          src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6683928ef9bd6412dc52fd49_seat-close.svg"
                          loading="lazy" alt="" />
                        <div class="text-block-941288239924 seat-lock">Seats filled. Next batch starts on<br />01 Jul
                          2026</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fullstack-developer-popup">
                  <div id="close-overlay-india-tab-mobile-entire-home-kit-store" class="close-overlay track-button">
                  </div>
                  <div class="div-block-1831980521401">
                    <div class="div-block-183198052188">
                      <div class="div-block-183198052186">
                        <div class="div-block-1831980521400">
                          <h3 class="heading-3670892">Full Stack Developer</h3>
                          <div class="text-block-94128912">Lea advanced frameworks for frontend and backend development
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-block-94128913">You Will Lea</div>
                        <div>
                          <ul role="list" class="list-59">
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming Constructs with Instruction Flows</div>
                            </li>
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming Constructs with Instruction Flows</div>
                            </li>
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming with Python</div>
                            </li>
                            <li>
                              <div class="text-block-94128914">Fundamentals of Computer Science</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="div-block-183198052187"><a href="#" class="link-block-596 w-inline-block">
                        <div class="text-block-94128915">View Full Curriculum</div>
                        <div class="view-curriculum-arrow"></div>
                      </a></div>
                  </div>
                </div>
                <div class="data-analyst-popup">
                  <div id="close-overlay-india-tab-mobile-entire-home-kit-store" class="close-overlay track-button">
                  </div>
                  <div class="div-block-1831980521401">
                    <div class="div-block-183198052188">
                      <div class="div-block-183198052186">
                        <div class="div-block-1831980521400">
                          <h3 class="heading-3670892">Full Stack Developer</h3>
                          <div class="text-block-94128912">Lea advanced frameworks for frontend and backend development
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-block-94128913">You Will Learn</div>
                        <div>
                          <ul role="list" class="list-59">
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming Constructs with Instruction Flows</div>
                            </li>
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming Constructs with Instruction Flows</div>
                            </li>
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming with Python</div>
                            </li>
                            <li>
                              <div class="text-block-94128914">Fundamentals of Computer Science</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="div-block-183198052187"><a href="#" class="link-block-596 w-inline-block">
                        <div class="text-block-94128915">View Full Curriculum</div>
                        <div class="view-curriculum-arrow"></div>
                      </a></div>
                  </div>
                </div>
                <div class="qa-automationtesting-popup">
                  <div id="close-overlay-india-tab-mobile-entire-home-kit-store" class="close-overlay track-button">
                  </div>
                  <div class="div-block-1831980521401">
                    <div class="div-block-183198052188">
                      <div class="div-block-183198052186">
                        <div class="div-block-1831980521400">
                          <h3 class="heading-3670892">Full Stack Developer</h3>
                          <div class="text-block-94128912">Lea advanced frameworks for frontend and backend development
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-block-94128913">You Will Lea</div>
                        <div>
                          <ul role="list" class="list-59">
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming Constructs with Instruction Flows</div>
                            </li>
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming Constructs with Instruction Flows</div>
                            </li>
                            <li class="list-item-14659">
                              <div class="text-block-94128914">Programming with Python</div>
                            </li>
                            <li>
                              <div class="text-block-94128914">Fundamentals of Computer Science</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="div-block-183198052187"><a href="#" class="link-block-596 w-inline-block">
                        <div class="text-block-94128915">View Full Curriculum</div>
                        <div class="view-curriculum-arrow"></div>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="job-support" class="div-1234 width-100">
              <div class="div-block-183198052182 step-3">
                <div class="text-block-94128911">3</div>
              </div>
              <div class="div-block-183198052184">
                <div class="text-block-9412881916">Placement Assistance forÂ YourÂ Job</div>
                <div>
                  <div class="text-block-94128908">Up to 16 Months from the date of joining</div>
                  <div class="inter-600-font-16px">Free Add-ons:</div>
                  <div class="div-block-183198052179 width-auto">
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/Aptitude.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Aptitude Training</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/soft-skills-coaching.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Soft Skills Training</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/resume-preparation.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Resume Preparation</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-mock-interviews.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">AI-Powered Mock Interviews</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/mock-interviews.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Mock Interviews by<br />Tech and HR Panels</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/scheduling.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Scheduling Interviews</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/access-interview-experiences.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Access to 300+ Senior Interview Experiences</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/access-placement-coer.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Access to Placement Portal</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-offline-drives.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Mega Offline Placement Drives</div>
                    </div>
                    <div class="div-block-183198052178 grid-child-width">
                      <div class="html-embed-41912 w-embed"><img
                          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/negotiation-with-companies.png'
                          alt='' width='100%' loading='lazy' /></div>
                      <div class="text-block-94128905">Negotiation with companies<br />for higher salaries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-183198052217">
              <div data-delay="6000" data-animation="slide" class="slider-399 w-slider" data-autoplay="false"
                data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                data-nav-spacing="4" data-duration="500" data-infinite="true">
                <div class="mask-48 w-slider-mask">
                  <div class="slide-73 w-slide">
                    <div class="html-embed-41925 w-embed"><img
                        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/placement-dashboard.png'
                        alt='' width='100%' loading='lazy' /></div>
                  </div>
                  <div class="slide-73 w-slide">
                    <div class="html-embed-41925 w-embed"><img
                        src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/mock-interview.png'
                        alt='' width='100%' loading='lazy' style="padding:0px 17px" /></div>
                  </div>
                </div>
                <div id="placement-support-left-arrow" class="left-arrow-107 w-slider-arrow-left"></div>
                <div id="placement-support-right-arrow" class="right-arrow-2168 w-slider-arrow-right"></div>
                <div class="slide-nav-49 w-slider-nav"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="collection-list-wrapper-4 w-dyn-list">
          <div role="list" class="w-dyn-items">
            <div role="listitem" class="w-dyn-item">
              <div class="date-changes-cms-collection-container-intensive">
                <div class="intensive-batch-starts">
                  <div class="start-batch-circle"></div>
                  <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
                </div>
                <div class="embed-btn w-embed">
                  <div class="dates-changing-ctas">

                    <a id="book-a-free-demo-your-it-career-in-3-steps-mobile" href="#hero-section"
                      class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

                    <a style=display:none id="-your-it-career-in-3-steps-mobile" href="" class=""></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="get-your-doubts-clarified-faster" data-sectionid="sections" class="doubts-clarified-section">
  <div class="w-embed">
    <style>
      .doubts-clarified-section {
        background: linear-gradient(181.91deg, #F1F5F9 1.62%, #FFFFFF 69.6%);
      }

      .doubts-clarified-section-bg {
        background-image: url("https://cdn.prod.website-files.com/6413e0030367922facca6873/641d6e2a39bc9bf7a6ca45b0_doubts-clarified-bg-desktop.svg");
        background-size: cover;
      }

      .underline-light-violet {
        background-image: url("https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-doubts-underline.svg");
        background-size: cover;
      }

      .underline-yellow {
        background-image: url("https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-book-a-free-demo-underline.svg");
        background-size: cover;
      }

      .dc-bafd-container {
        background-image: url("https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-book-a-free-demo-bg-desktop.svg");
        background-size: cover;
      }

      .dc-bafb-img-container {
        background-image: url("");
        background-size: cover;
      }


      .dc-td-container {
        background-image: url("https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-doubts-bg-desktop.svg");
        background-size: cover;

      }




      @media screen and (max-width:479px) {

        .dc-bafd-container {
          background-image: url("");
          background-size: cover;
        }

        .dc-bafb-img-container {
          background-image: url("https://cdn.prod.website-files.com/6413e0030367922facca6873/6419a3047843f4c2cd3863b3_Slice%205.svg") !important;
          background-size: cover;
        }

        .doubts-clarified-section {
          background: linear-gradient(181.91deg, #F1F5F9 1.62%, #FFFFFF 69.6%);
        }

        .doubts-clarified-section-bg {
          background-image: url("https://cdn.prod.website-files.com/6413e0030367922facca6873/641d6e2a39bc9bf7a6ca45b0_doubts-clarified-bg-desktop.svg");
          background-size: cover;
        }


        .dc-td-container {
          background-image: url("https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-doubts-bg-desktop.svg");
          background-size: cover;
          background-position: 50% 50%;
        }
        /* Sticky scroll behavior for IT Career section */
.container-30.cc-flex-h {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.col-left {
  position: relative; /* Changed from sticky */
  /* top: 100px; - Remove this */
  flex: 0 0 45%;
  align-self: flex-start;
  transition: all 0.3s ease;
}

.col-right {
  flex: 1;
  /* min-height: 150vh; - You can remove this if not needed */
}

/* Mobile responsive */
@media (max-width: 991px) {
  .container-30.cc-flex-h {
    flex-direction: column;
  }
  
  .col-left {
    position: relative;
    flex: 1 1 100%;
    width: 100%;
  }
  
  .col-right {
    min-height: auto;
  }
}
      }
    </style>
  </div>
  <div id="doubts-clarification" class="doubts-clarified-section-bg">
    <div class="doubts-clarified-container">
      <div class="dc-main-info-container">
        <h2 class="h1c _475569">Get Your Doubts Clarified<br />Faster than in Offline Classes</h2>
        <div class="underline-light-violet"></div>
        <div class="inter-4-24-32 _64748b">Our highly motivated team of experts are ready to help you with your doubts
          from<span><strong>9AM - 9PM Everyday</strong></span></div>
      </div>
      <div class="dc-bafd-container">
        <div class="dc-bafb-img-container">
          <div class="dc-bafd-illustartion w-embed"><img
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-book-a-free-demo-illustration.png"
              loading="lazy" style="width:auto"></div>
        </div>
        <div class="dc-bafd-info-container">
          <div class="dc-bafd-info-h">1500<span class="text-span-160">+</span> Mentors to Resolve Your Doubts</div>
          <div class="dc-bafd-info-info">Including Subject Matter Experts, IITians, Teaching Assistants, NxtWave Alumni,
            etc.</div>
          <div class="dc-bafd-cta-container desktop">
            <div class="embed-btn w-embed"><a id="compaines-book-a-demo" href="#hero-section"
                class="book-a-free-demo-main-btn track-class w-button">Book a free Demo</a></div>
          </div>
        </div>
      </div>
      <div class="dc-td-container">
        <div class="dc-td-info-container">
          <div class="dc-td-info-h">1000+ Doubts</div>
          <div class="dc-td-info-info-1">are resolved within</div>
          <div class="dc-td-info-info-2">15 minutes Everyday !</div>
          <div class="underline-yellow"></div>
        </div>
        <div class="dc-td-img-container">
          <div class="dc-td-illustration w-embed"><img
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-doubts-illustartions.png"
              loading="lazy" style="width:auto"></div>
        </div>
      </div>
      <div class="collection-list-wrapper-4 w-dyn-list">
        <div role="list" class="w-dyn-items">
          <div role="listitem" class="w-dyn-item">
            <div class="date-changes-cms-collection-container-intensive">
              <div class="intensive-batch-starts">
                <div class="start-batch-circle"></div>
                <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
              </div>
              <div class="embed-btn w-embed">
                <div class="dates-changing-ctas">

                  <a id="book-a-free-demo-doubts-clarification-mobile" href="#hero-section"
                    class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

                  <a style=display:none id="-doubts-clarification-mobile" href="" class=""></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="trusted-by-thousands-to-become-it" data-sectionid="sections" class="section-2665 intensive-page--2-0">
  <div class="div-block-21067">
    <div class="div-block-1831980521410">
      <h2 class="heading-sathosi-font width font-size-24-copy">Trusted by Thousands to BecomeÂ ITÂ Professionals</h2>
      <div class="trusted-by-under-line w-embed"><img
          src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/thousands-underline.svg'
          alt='' loading='lazy' /></div>
    </div>
    <div>
      <div class="div-block-21072 div1290">
        <div class="div-block-21068 div-width">
          <div class="w-layout-grid grid-8644 intensive--20">
            <div id="w-node-_3c0fab3a-dc57-ab48-ea16-da47c19497c4-c19497ba" class="div-block-21070">
              <div class="w-embed"><img
                  src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-icon.png'
                  width='48' alt='' loading='lazy' /></div>
              <div class="div-block-21071">
                <div class="text-block-909">2000+ Companies</div>
                <div class="text-block-910">Hired NxtWave Leaers</div>
              </div>
            </div>
            <div id="w-node-_3c0fab3a-dc57-ab48-ea16-da47c19497cb-c19497ba" class="div-block-21070">
              <div class="w-embed"><img
                  src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/package-icon.png'
                  width='48' alt='' loading='lazy' /></div>
              <div class="div-block-21071">
                <div class="text-block-909">â‚¹38Â LPA</div>
                <div class="text-block-910">Highest package<br /></div>
              </div>
            </div>
          </div>
          <div>
            <div class="collection-list-wrapper-4 show w-dyn-list">
              <div role="list" class="w-dyn-items">
                <div role="listitem" class="w-dyn-item">
                  <div class="date-changes-cms-collection-container-intensive left-aligin">
                    <div class="intensive-batch-starts">
                      <div class="start-batch-circle"></div>
                      <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
                    </div>
                    <div class="embed-btn w-embed">
                      <div class="dates-changing-ctas">

                        <a id="book-a-free-demo-trusted-by-thousands-desktop" href="#hero-section"
                          class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

                        <a style=display:none href="" id="-trusted-by-thousands-desktop" class=""></a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-block-21073">
          <div class="div-block-183198052126 intensive-2-0"></div>
          <div class="logo-row-wrapper">
            <div class="logo-row-left-div">
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/sayak-dutta.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Sayak Dutta</div>
                  <div class="text-block-912">Software Engineer</div>
                  <div class="company-logo w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/google.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/bhardwaj.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Bharadhwaj</div>
                  <div class="text-block-912">Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/amazon.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/nikhil.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Nikhil</div>
                  <div class="text-block-912">Software Developer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/samsung.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/sussantth.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Sushanth</div>
                  <div class="text-block-912">Fullstack Developer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/needle-ai.svg"
                      height="27px" alt="" /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/sivaram.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Yalla Sivaram</div>
                  <div class="text-block-912">Assoc. Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/bosch.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/maddineni-bhargava.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Maddineni Bhargava</div>
                  <div class="text-block-912">ML Engineer (Inte)</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/microsoft.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/manvendra-shah.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Manvendra Shah</strong></div>
                  <div class="text-block-912">Associate Product Manager</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/ank-aha.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/izajur-rahaman.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Izajur Rahaman</strong></div>
                  <div class="text-block-912">Secured Inteship in</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/adobe.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/janardhanan.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Janardhanan</strong></div>
                  <div class="text-block-912">Assistant System Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/ibm.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
            </div>
            <div class="logo-row-right-div">
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/sushma.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Sushma Duvva</div>
                  <div class="text-block-912">Assoc. App Developer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/accenture.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/kiranmai.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Kasa Kiranmai</div>
                  <div class="text-block-912">Inte Analyst</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/deloitte-v1.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/surya-sai.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Surya Sai</div>
                  <div class="text-block-912">System Engineer Trainee</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/infosys.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/jaya-prathyusha.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Jaya Prathyusha</div>
                  <div class="text-block-912">Senior Tech Associate</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/bank-of-america.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/dinesh-varma.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Dinesh Varma</div>
                  <div class="text-block-912">Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/wipro.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/meghna-bawl.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Meghna Bawl</strong></div>
                  <div class="text-block-912">Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/flipkart.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/shailesh.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Shailesh</strong></div>
                  <div class="text-block-912">Member Technical</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/adp.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/pavan-kumar.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Pavan Kumar</strong></div>
                  <div class="text-block-912">Analyst</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/capgemini.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/subhash.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Subhash</strong></div>
                  <div class="text-block-912">Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/hcl.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
            </div>
            <div class="logo-row-left-div">
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/sonali-kothapalli.avif"
                    width="36" alt="" /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911">Sonali Kothapalli</div>
                  <div class="text-block-912">Junior Data Analyst</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/adf-company.jpeg"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/rahul-kumar.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Rahul Kumar</strong></div>
                  <div class="text-block-912">Software Developer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/reliance-jio.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/ranjith-tevnan.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Ranjith Tevnan</strong></div>
                  <div class="text-block-912">ML Engineer (Inte)</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/disney-hotstar.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/chandan-prakash.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Chandan Prakash</strong></div>
                  <div class="text-block-912">Member of Technical Staff</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/oracle.svg"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/vineet-singla.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Vineet Singla</strong></div>
                  <div class="text-block-912">Analyst</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/goldman-sachs.svg"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/hetarth-dave.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Hetarth Dave</strong></div>
                  <div class="text-block-912">Secured Inteship</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/mastercard.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/shaik-syed-basha.avif"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Syed Basha</strong></div>
                  <div class="text-block-912">Trainee software engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/global-logic.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/balla-divya.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Balla Divya</strong></div>
                  <div class="text-block-912">Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/persistent-v1.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/surya-satya-kommanapalli.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Surya Satya</strong></div>
                  <div class="text-block-912">Associate Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/virtusa.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
            </div>
            <div class="logo-row-right-div">
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/yashi-agarwal.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Yashi Agarwal</strong></div>
                  <div class="text-block-912">Software engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/mentor-graphics.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/gulshan-mohiddin.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Gulshan Mohiddin</strong></div>
                  <div class="text-block-912">Associate Process Analyst</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/delhivery.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/soumya-ranjan-mishra.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Soumya Ranjan Mishra</strong><br /></div>
                  <div class="text-block-912">Technical Analyst</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/citicorp.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/milinda-reddy.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Milinda Reddy</strong></div>
                  <div class="text-block-912">Software Engineer (Inte)</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/standard-chartered.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/jayant-mathur.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Jayant Mathur</strong></div>
                  <div class="text-block-912">Software Developer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/tcs.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/jayakar-reddy.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Jayakar Reddy</strong></div>
                  <div class="text-block-912">Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/gep.svg"
                      height="27px" alt="" /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/krishna-murthy-cyient.avif"
                    width="36" alt="" /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Krishna Murthy</strong></div>
                  <div class="text-block-912">Software engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/cyient-v1.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/dheeraj-meena.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Dheeraj Meena</strong></div>
                  <div class="text-block-912">Assoc. Software Engineer</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/blackboard.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
              <div class="div-block-183198052117">
                <div class="w-embed"><img
                    src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/profile-images/divya-thokala.png"
                    width="36" alt="" loading='lazy' /></div>
                <div class="div-block-183198052092">
                  <div class="text-block-911"><strong>Divya</strong></div>
                  <div class="text-block-912">Associate consultant</div>
                  <div class="w-embed"><img class="company-logo-testimonial"
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-logos/atos-syntel.png"
                      height="27px" alt="" loading='lazy' /></div>
                </div>
              </div>
            </div>
          </div>
          <div class="marquee-css-2 w-embed">
            <style>
              .logo-row-left-div {
                white-space: nowrap;
                will-change: transform;
                animation: marquee-right 40s linear infinite;
                /*manipulate the speed of the marquee by changing "40s" line above*/
              }


              .logo-row-right-div {
                white-space: nowrap;
                will-change: transform;
                animation: marquee-left 40s linear infinite;
                /* manipulate the speed of the marquee by changing "40s" line above*/
              }

              /*.left combo class*/
              .logo-row-left-div.left {
                animation: marquee-left 40s linear infinite;
              }

              .logo-row-right-div.right {
                animation: marquee-right 40s linear infinite;
              }

              @keyframes marquee-right {
                from {
                  transform: translateX(-50%);
                }

                to {
                  transform: translateX(0%);
                }
              }

              @keyframes marquee-left {
                from {
                  transform: translateX(0);
                }

                to {
                  transform: translateX(-50%);
                }
              }
            </style>
          </div>
          <div class="div-block-183198052126-copy intensive-2-0-right"></div>
        </div>
      </div>
      <div>
        <div class="collection-list-wrapper-4 w-dyn-list">
          <div role="list" class="w-dyn-items">
            <div role="listitem" class="w-dyn-item">
              <div class="date-changes-cms-collection-container-intensive plr-16">
                <div class="intensive-batch-starts">
                  <div class="start-batch-circle"></div>
                  <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
                </div>
                <div class="embed-btn w-embed">
                  <div class="dates-changing-ctas">

                    <a id="book-a-free-demo-trusted-by-thousands-mobile" href="#hero-section"
                      class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

                    <a style=display:none id="-trusted-by-thousands-mobile" href="" class=""></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<section id="hiring-companies-intensive" data-sectionid="sections">
  <div class="hiring-companies-scroll-section">
    <div>
      <div>
        <div class="div-block-1996">
          <div class="div-block-1557">
            <div class="div-block-867-copy-2 div234">
              <h2 class="heading-sathosi-font font-size-48 center">2000+ Companies Hired NxtWave Leaers</h2>
              <div class="_1500-companies-underline under-line w-embed"><img
                  src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/1500-compines.svg'
                  alt='' loading='lazy' /></div>
            </div>
          </div>
        </div>
        <div class="div-block-1831980521408">
          <div class="html-embed-82636 w-embed">
            <style>
              .companies-img {
                height: 52px;
              }

              @media screen and (max-width:478px) {
                .companies-img {
                  height: 32px;
                  object-fit: cover;
                }
              }

              .marquee1 {
                display: flex;
                overflow: hidden;
                user-select: none;
                gap: 24px;
              }

              .marquee__group1 {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 24px;
                min-width: 100%;
                animation: scroll 40s linear infinite;
                white-space: nowrap;
                overflow: hidden;
                overflow-x: -webkit-marquee;
                -webkit-marquee-direction: backwards;
                -webkit-marquee-style: alteate;
                -webkit-marquee-speed: normal;
                -webkit-marquee-increment: small;
                -webkit-marquee-repetition: 4;

              }

              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }

                100% {
                  transform: translateX(calc(-100% - 24px));
                }
              }
            </style>
            <div class="marquee1">

              <div class="marquee__group1">
                <img class="companies-img"
                  src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-1.png"
                  loading='lazy'>
              </div>

              <div aria-hidden="true" class="marquee__group1">
                <img class="companies-img"
                  src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-1.png"
                  loading='lazy'>

              </div>

            </div>
          </div>
          <div class="w-embed">
            <style>
              .companies-img2 {
                height: 52px;
              }

              @media screen and (max-width:478px) {
                .companies-img2 {
                  height: 32px;
                  object-fit: cover;
                }
              }

              .marquee2 {
                display: flex;
                overflow: hidden;
                user-select: none;
                gap: 24px;
              }

              .marquee__group2 {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 24px;
                min-width: 100%;
                animation: scroll 40s linear infinite;
                white-space: nowrap;
                overflow: hidden;
                overflow-x: -webkit-marquee;
                -webkit-marquee-direction: backwards;
                -webkit-marquee-style: alteate;
                -webkit-marquee-speed: normal;
                -webkit-marquee-increment: small;
                -webkit-marquee-repetition: 4;
              }
            </style>
            <div class="marquee2">

              <div class="marquee__group2">
                <img class="companies-img"
                  src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-2.png"
                  loading='lazy'>
              </div>

              <div aria-hidden="true" class="marquee__group2">
                <img class="companies-img"
                  src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-2.png"
                  loading='lazy'>
              </div>

            </div>
          </div>
          <div class="w-embed">
            <style>
              .companies-img {
                height: 52px;
              }

              @media screen and (max-width:478px) {
                .companies-img {
                  height: 32px;
                  object-fit: cover;
                }
              }

              .marquee3 {
                display: flex;
                overflow: hidden;
                user-select: none;
                gap: 24px;
              }

              .marquee__group3 {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 24px;
                min-width: 100%;
                animation: scroll 40s linear infinite;
                white-space: nowrap;
                overflow: hidden;
                overflow-x: -webkit-marquee;
                -webkit-marquee-direction: backwards;
                -webkit-marquee-style: alteate;
                -webkit-marquee-speed: normal;
                -webkit-marquee-increment: small;
                -webkit-marquee-repetition: 4;
              }
            </style>
            <div class="marquee3">

              <div class="marquee__group3">
                <img class="companies-img"
                  src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-3.png"
                  loading='lazy'>
              </div>

              <div aria-hidden="true" class="marquee__group3">
                <img class="companies-img"
                  src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/company-scroll-strip-img-3.png"
                  loading='lazy'>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-dyn-list">
      <div role="list" class="w-dyn-items">
        <div role="listitem" class="w-dyn-item">
          <div class="date-changes-cms-collection-container-intensive plr-16">
            <div class="intensive-batch-starts">
              <div class="start-batch-circle"></div>
              <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
            </div>
            <div class="dates-changing-ctas">
              <div class="embed-btn w-embed"><a id="compaines-book-a-demo" href="#hero-section"
                  class="book-a-free-demo-main-btn track-class w-button">Book a free Demo</a></div><a
                id="view-all-companies-hiring-companies" rel="nofollow"
                href="https://nxtwave.notion.site/nxtwave/4a5b98d9e45f4bba9526eb5084d84476?v=1b29091aa30946e5a5c2a86f75f2024b"
                target="_blank" class="text-link-block track-class w-inline-block">
                <div>View All Companies</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Add this right before </body> -->
    <style>
      .section-2647 .container-30.cc-flex-h .col-left,
      .section-2647 .col-left,
      .col-left {
        position: relative !important;
        top: 0 !important;
      }
    </style>
  </body>
</html>`;function xf(){return j.jsx(j.Fragment,{children:ve(kf)})}const zf=`<section id="prefers-nxtwave-students" data-sectionid="sections" class="why-top-companies">
   <div class="why-top-compines-main-container">
      <div class="div-block-1831980521447253">
         <div class="div-block-1831980521447251">
            <div class="text-block-9412882471">Why <span class="blue-highlight-span-txt-copy">Top Companies</span>
               Prefer <span class="blue-highlight-span-txt-copy">NxtWave Students</span></div>
            <p class="paragraph-693">NxtWave students carved a name for themselves in the IT industry. Hear it directly
               from the CEOs, CXOs and HRs of tech companies.</p>
         </div>
         <div class="div-block-1831980521447252">
            <div id="companies-hired-videocompanies-experiences" style="padding-top:56.17021276595745%"
               class="w-embed-youtubevideo youtube-2 track-button"><iframe
                  src="https://www.youtube.com/embed/-U_YQ3W50nE?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=3"
                  frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
                  allow="autoplay; encrypted-media" allowfullscreen=""
                  title="NxtWave Celebrates a Major Milestone | 2000+ Companies Hired NxtWave Students | Next Wave of Hiring"></iframe>
            </div>
         </div>
      </div>
      <div data-delay="4000" data-animation="slide" class="why-top-compaines-sliders w-slider" data-autoplay="false"
         data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
         data-nav-spacing="3" data-duration="500" data-infinite="true">
         <div class="top-compaines-mask w-slider-mask">
            <div class="top-compines-slide w-slide">
               <div id="kloudworkx-experience-videocompanies-experiences" style="padding-top:56.17021276595745%"
                  class="w-embed-youtubevideo youtube-3 track-button"><iframe
                     src="https://www.youtube.com/embed/Y9aGu-fp1JA?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                     frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
                     allow="autoplay; encrypted-media" allowfullscreen=""
                     title="NxtWave Hire: Transforming Hiring Experiences for Startups | NxtWave Placements 2023 | KloudWorx"></iframe>
               </div>
            </div>
            <div class="top-compines-slide w-slide">
               <div id="epsoft-experience-videocompanies-experiences" style="padding-top:56.17021276595745%"
                  class="w-embed-youtubevideo youtube-3 track-button"><iframe
                     src="https://www.youtube.com/embed/66ZBOqaHyho?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                     frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
                     allow="autoplay; encrypted-media" allowfullscreen=""
                     title="NxtWave Hire - We&#x27;ll continue to hire from NxtWave | EP Soft | NxtWave Placements 2023"></iframe>
               </div>
            </div>
            <div class="top-compines-slide w-slide">
               <div id="shilpa-hr-experience-videocompanies-experiences" style="padding-top:56.17021276595745%"
                  class="w-embed-youtubevideo youtube-3 track-button"><iframe
                     src="https://www.youtube.com/embed/X4YpCUk5FeQ?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=1"
                     frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
                     allow="autoplay; encrypted-media" allowfullscreen=""
                     title="NxtWave Hire - One Stop Solution For Hiring Best Candidates | NxtWave Placements 2023"></iframe>
               </div>
            </div>
            <div class="top-compines-slide w-slide">
               <div id="rahul-cto-experience-videocompanies-experiences" style="padding-top:56.17021276595745%"
                  class="w-embed-youtubevideo youtube-3 track-button"><iframe
                     src="https://www.youtube.com/embed/91mJXAKrji0?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                     frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
                     allow="autoplay; encrypted-media" allowfullscreen=""
                     title="NxtWave Hire - Candidates better than freshers straight from college | @NxtWaveTech"></iframe>
               </div>
            </div>
            <div class="top-compines-slide w-slide">
               <div id="mohammad-hr-experience-videocompanies-experiences" style="padding-top:56.17021276595745%"
                  class="w-embed-youtubevideo youtube-3 track-button"><iframe
                     src="https://www.youtube.com/embed/kSKFhkfq5hg?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                     frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
                     allow="autoplay; encrypted-media" allowfullscreen=""
                     title="NxtWave Hire - A Reliable Resource for Hiring Developers | Caprus IT | NxtWave Placements 2023"></iframe>
               </div>
            </div>
         </div>
         <div id="left-arrow-companies-experiences" class="left-arrow-12382 track-button w-slider-arrow-left">
            <div class="companies-left-arrow"></div>
            <div class="mobile-hide-arrows-copy w-embed"><img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/roundarrow.svg"
                  loading="lazy" /></div>
         </div>
         <div id="right-arrow-companies-experiences" class="right-arrow-2192 track-button w-slider-arrow-right">
            <div class="companies-right-arrow"></div>
            <div class="mobile-hide-arrows-copy w-embed"><img
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/roundbutton.svg"
                  loading="lazy" /></div>
         </div>
         <div class="nav-sllide w-slider-nav w-round"></div>
      </div>
      <div class="collection-list-wrapper-11 w-dyn-list">
         <div role="list" class="w-dyn-items">
            <div role="listitem" class="w-dyn-item">
               <div class="date-changes-cms-collection-container-intensive _100">
                  <div class="intensive-batch-starts">
                     <div class="start-batch-circle"></div>
                     <div class="int-batch-txt-copy">Next batch starts on Feb 9th</div>
                  </div>
                  <div class="embed-btn w-embed">
                     <div class="dates-changing-ctas">

                        <a id="book-a-free-demo-companies-experiences" href="#hero-section"
                           class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

                        <a style=display:none id="-recognised-by" href="" class=""></a>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>`;function qf(){return j.jsx(j.Fragment,{children:ve(zf)})}const _f=`<section id="certificate" data-sectionid="sections" class="irc-certificate-section"><div class="get-certified-div"><div class="div-block-1877"><div class="div-block-1880"><div class="div-block-1831980521433"><div class="heading-sathosi-font font-size-48">Get Certified</div><div class="get-certified-under-line w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/get-certified-underline.svg' alt='' loading='lazy' /></div></div><div class="text-block-836">Yes, youâ€™ll get a certificate representing your Industry Readiness once you submit your projects and clear the pre placement test.</div><div class="div-block-1878"><div class="image-745 w-embed"><img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/certificate-mobile.svg" loading="lazy"/></div><div class="irc-image w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/irc-image.svg' alt='irc' loading='lazy' /></div><div class="div-block-1879"><div class="text-block-835">Industry-Ready Certification [IRC]</div><div class="text-block-837">Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness.</div></div></div><div class="div-block-1878"><div class="image-745 w-embed"><img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/sharable-mobile.svg" loading="lazy"/></div><div class="shareable-image w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/sharabel-image.svg' alt='' loading='lazy' /></div><div class="div-block-1879"><div class="text-block-835">Shareable, Credible and Official</div><div class="text-block-837">Add it to your LinkedIn, share it on Twitter &amp; WhatsApp, or via Email. Make your profile stand out everywhere.</div></div></div><div class="div-block-1878"><div class="image-745 w-embed"><img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/search-mobile.svg" loading="lazy"/></div><div class="companies-search w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/search-image.svg' alt='' loading='lazy' /></div><div class="div-block-1879"><div class="text-block-835">Let companies compete for you</div><div class="text-block-837">IRC certifies your industry-readiness and gets you placed with higher salaries.</div></div></div><div class="div-block-1881"><a href="#" id="Reserve-seat-hero-section" class="button-101 w-button">Reserve seat</a><a href="#" id="see-pricing-hero-section" class="see-pricing-2 w-button">See Pricing</a><a id="Request-a-Call-Back-Hero-Section" href="https://forms.ccbp.in/public/form/talk-to-career-expert" class="requestcallback w-button">Request Callback</a><a id="Request-a-Call-Back-IRC-Certificate-section" href="https://forms.ccbp.in/public/form/talk-to-career-expert" class="reserve-seat-cta w-inline-block"><div class="text-block-831">Request Callback</div></a></div></div><div class="div-block-1882"><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/certificate.png' alt='IRC certificate' width='100%' loading='lazy' /></div></div></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="date-changes-cms-collection-container-intensive-copy left-aligin"><div class="intensive-batch-starts"><div class="start-batch-circle"></div><div class="int-batch-txt-copy">Next batch starts on Feb 9th</div></div><div class="embed-btn w-embed"><div class="dates-changing-ctas">

<a id="book-a-free-demo-get-certified" href="#hero-section"
   class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

<a style=display:none href=""
   id="-get-certified"
   class=""></a>

</div></div></div></div></div></div></div></section><section id="why-join-intensive" data-sectionid="sections" class="div-block-1831980521415"><div id="check--ins" class="why-join-intensive-container-div"><div class="why-int-content-container"><div class="why-int-heading-container"><div class="h2a">Why Join Intensive?</div></div><div class="why-int-comaprison-table"><div class="comparison-row-div"><div class="comparison-row-heading-div"></div><div class="comparison-rows-container"><div class="comparison-odd-rows"><div>Curriculum</div></div><div class="comparison-even-rows"><div class="comparison-txt2">Doubts Clarification</div></div><div class="comparison-odd-rows trainers"><div>Trainers</div></div><div class="comparison-even-rows"><div class="comparison-txt2">Placements Record</div></div><div class="comparison-odd-rows"><div class="comparison-txt2">Placements Opportunities</div></div><div class="comparison-even-rows"><div class="comparison-txt2">Institute Recognised by</div></div><div class="comparison-odd-rows"><div>Projects</div></div><div class="comparison-even-rows"><div class="comparison-txt2">Access to Labs</div></div><div class="comparison-odd-rows"><div class="comparison-txt2">AI Mock Interviews</div></div><div class="comparison-even-rows"><div class="comparison-txt2">Expert Mock Interviews</div></div><div class="comparison-odd-rows"><div class="comparison-txt2">Seniorsâ€™ Interview Experiences</div></div><div class="comparison-even-rows last-row-height"><div class="comparison-txt2">Scheduling Interviews</div></div><div class="comparison-odd-rows"><div class="comparison-txt2">Salary Negotiation with <br/>Companies</div></div></div></div><div class="comparison-column-div"><div class="comparison-int-col-container"><div class="text-block-9412882261">Intensive <span class="text-span-1625">3.0</span></div><div class="comparison-txt1">Designed as per companiesâ€™ current requirements</div><div class="comparison-txt1">9AM - 9PM Doubt Clarification.<br/>1500+ Mentors to help you.</div><div class="comparison-txt1">Alumni of IIT &amp; Top MNCs like Amazon, Microsoft. <br/>BuiltÂ world-classÂ products</div><div class="comparison-txt1">Proven results for every branch, degree, CGPA</div><div class="comparison-txt1">Unlimited from a pool of <br/>3000+ companies</div><div class="comparison-content-div"><div class="comparison-txt">Recognized by</div><div class="comparison-image-div"><div class="w-embed"><img class="awards-section-imgs" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-nsdc.svg" loading="lazy">

<style>
.awards-section-imgs{
height:32px;
width:100px;
}
</style></div><div class="w-embed"><img  class="awards-section-imgs" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-nasscom.svg" loading="lazy"></div></div></div><div class="comparison-txt1">10+ Real-time Projects that makes your resume strong</div><div class="comparison-txt1">24x7 Online State-of-the-art Labs. NoÂ installation/setup needed.</div><div class="comparison-txt1">with NxtMock</div><div class="comparison-txt1">with Dedicated Tech &amp; HR Panels</div><div class="comparison-txt1">Access to 300+ Sessions</div><div class="comparison-content-div"><div class="w-embed"><img class="close-and-tick-marks-icons1" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/tick-circle.png" loading='lazy'></div></div><div class="comparison-content-div"><div class="w-embed"><img class="close-and-tick-marks-icons1" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/tick-circle.png" loading='lazy'>

<style>
.close-and-tick-marks-icons1{
height:48px;
width:48px;
}

@media (min-width: 320px) and (max-width: 767px) {
.close-and-tick-marks-icons1{
height: 32px;
width: 32px;
}
}
</style></div><div class="comparison-txt">For higher salaries</div></div></div><div class="comparison-other-col-container"><div class="comparison-col2-heading">Other Coaching Institutes</div><div class="comparison-txt1">Not industry-aligned</div><div class="comparison-txt1">Only 1-2 hours per day</div><div class="comparison-txt1">No real world project experience</div><div class="comparison-txt1">For only select branches, degrees</div><div class="comparison-txt1">Limited (15-20)</div><div class="comparison-txt1">No recognition</div><div class="comparison-txt1">~1-2 real time projects</div><div class="comparison-txt1">Only 2 hours/day</div><div class="comparison-content-div"><div class="w-embed"><img class="close-and-tick-marks-icons1" src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/close-circle.png" >

<style>
.close-and-tick-marks-icons1{
height:48px;
width:48px;
}
@media (min-width: 320px) and (max-width: 767px) {
.close-and-tick-marks-icons1{
height: 32px;
width: 32px;
}
}
</style></div></div><div class="comparison-content-div"><div class="w-embed"><img class="close-and-tick-marks-icons1" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/close-circle.png" loading='lazy' >

<style>
.close-and-tick-marks-icons1{
height:48px;
width:48px;
}
@media (min-width: 320px) and (max-width: 767px) {
.close-and-tick-marks-icons1{
height: 32px;
width: 32px;
}
}
</style></div></div><div class="comparison-content-div"><div class="w-embed"><img class="close-and-tick-marks-icons1" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/close-circle.png" loading='lazy' ></div></div><div class="comparison-content-div"><div class="w-embed"><img class="close-and-tick-marks-icons1" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/close-circle.png" loading='lazy' ></div></div><div class="comparison-content-div"><div class="w-embed"><img class="close-and-tick-marks-icons1" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/close-circle.png" loading='lazy' ></div></div></div></div></div><div class="div-block-1831980521387"></div></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="date-changes-cms-collection-container left-aligin plr-16"><div class="intensive-batch-starts"><div class="start-batch-circle"></div><div class="int-batch-txt-copy">Next batch starts on Feb 9th</div></div><div class="dates-changing-ctas"><div class="embed-btn w-embed"><div class="dates-changing-ctas">

<a id="book-a-free-demo-why-join-intensive" href="#hero-section"
   class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

<a style=display:none
   id="-why-join-intensive" href=""
   class=""></a>

</div></div></div></div></div></div></div></div></section><section id="awards" data-sectionid="sections" class="awarded-slider"><div class="awarded-slider-main-container"><div data-delay="4000" data-animation="slide" class="slider-awarded w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true"><div class="awarded-mask w-slider-mask"><div class="each-slide wef-card w-slide"><div class="each-div-container"><div class="card-1 wef-card"><div class="text-block-9412882473-copy"><span class="span-gold-color-bold">World Economic Forum</span> recognized <span class="span-gold-color-bold">NxtWave</span> as <span class="span-gold-color-bold">â€œTechnology Pioneer 2024â€</span></div><div class="code-embed-12 w-embed"><img src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/66827959aad3e4f98cb9863c_wef-achievement.png" loading='lazy' alt="forbed-img" width='100%' height='100%'/></div><div class="code-embed-12-copy w-embed"><img src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/66827bd5003bed78e2cfd745_wef-mobile.png" loading='lazy' alt="forbed-img" width='100%' height='100%'/></div></div></div></div><div class="each-slide w-slide"><div class="each-div-container"><div class="card-1"><div class="text-block-9412882473">Founders <span class="span-gold-color-bold">Mr. Anupam Pedarla and Mr. Sashank Gujjula </span>made it to the <span class="span-gold-color-bold">prestigious 2024 Forbes India 30 Under 30 list!</span></div><div class="div-block-1831980521447257"><div class="html-embed-82634 w-embed"><img src="https://nxtwave.imgix.net/ccbp-website/Home/forbes-30-v3.png" alt="forbed-img" width='100%' height='100%'/></div></div></div></div></div><div class="each-slide w-slide"><div class="each-div-container"><div class="eachcard-2"><div class="card-text">Recognized as the Greatest Brand in Education</div><div class="each-card-div"><div class="edtech-award-div"><div class="html-embed-82624 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/best-skill.png' alt='' loading='lazy' class='awardImage' /></div><div class="div-block-1831980521447243-copy"><div class="text-block-9412882465-copy">Recognised as</div><div class="text-block-9412882466-copy">Best Tech Skilling<br/>EdTech Company</div><div class="text-block-9412882467-copy">by Times Business Awards in 2022</div></div></div><div class="div-block-1831980521447242-copy"><div class="html-embed-82624-copy w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/trusted-brand.png' alt='' loading='lazy'  height='75px'/></div><div class="div-block-1831980521447243-copy-copy"><div class="text-block-9412882465-copy">Recognised as</div><div class="text-block-9412882466-copy">Trusted Brand in Education</div><div class="text-block-9412882467-copy">by Prime Insights in 2023</div></div></div><div class="div-block-1831980521447259"><div class="html-embed-82632 w-embed"><img class = "business-award"
src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/most-preffered-brands-award.png" loading='lazy'></div></div><div class="div-block-1831980521447256"><div class="html-embed-82633 w-embed"><img class = "business-award"
src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/indias-greatest-brands-award.png" loading='lazy'></div></div></div></div></div></div><div class="each-slide w-slide"><div class="each-div-container"><div class="card-1"><p class="paragraph-695"><span class="span-gold-color-bold">Mr. Sashank Gujjula, Co-founder, NxtWave, </span>receiving the <span class="span-gold-color-bold">â€˜Best Tech Skilling EdTech Companyâ€™ award</span> by Times Business Awards</p><div class="div-block-1831980521447257-copy-2"><div class="html-embed-82634-copy w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/award-by-time-business.png' alt='award-by-time-business' loading='lazy' /></div></div></div></div></div><div class="each-slide w-slide"><div class="each-div-container"><div class="card-1"><div class="text-block-9412882473"><span class="span-gold-color-bold">Mr. Sashank Gujjula, Co-founder,</span> NxtWave, receiving the <span class="span-gold-color-bold">prestigious award by T-Hub</span></div><div class="div-block-1831980521447257-copy"><div class="html-embed-82634-copy w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/t-hub-award.png' alt='' loading='lazy' /></div></div></div></div></div><div class="each-slide w-slide"><div class="each-div-container"><div class="card-1"><div class="recognised-text">Recognised by</div><div class="card-bg-container"><div class="div-block-1831980521447258"><div><div class="w-embed"><style>
.nasscom{
width:180px;
height:40px;
}
</style>
<img class = "nasscom"
src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards-section/awards-section-nasscom-mobile.svg" loading='lazy'/></div></div><div><div class="w-embed"><style>
.nsdc-india{
width:180px;
height:40px;
}
</style>
<img class = "nsdc-india"
src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards-section/awards-section-nsdc-mobile.svg" loading='lazy'/></div></div><div><div class="w-embed"><style>
.startup-india{
width:180px;
height:40px;
}
</style>
<img class = "startup-india"
src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards-section/awards-section-startup-india-mobile-mobile-mobile.svg" loading='lazy'></div></div></div><div><div class="w-embed"><style>
.ministry-india{
width:100%;
height:40px;
}
</style>
<img class = "ministry-india"
src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards-section/awards-section-ministry-of-india-mobile.png" loading='lazy'></div></div></div></div></div></div></div><div id="left-arrow-recognised-by" class="recogined-left-arrow track-button w-slider-arrow-left"><div class="recogined-companies-left-arrow"></div></div><div id="right-arrow-recognised-by" class="recogined-right-arrow track-button w-slider-arrow-right"><div class="recogined-companies-right-arrow"></div></div><div class="slide-nav-dots w-slider-nav"></div></div><div class="w-embed"><style>
.card1{
background-image: url("https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/recognized-by-patterns-card1.png");
background-size: cover;
}
.card2{
background-image: url("https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/recognized-by-patterns-card2.png");
background-size: cover;}

@media screen and (max-width:478px){
.card1{
background-image: url("https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/recognized-by-patterns-card1-mobile.png");
background-size: cover;
}
.card2{
background-image: url("https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/recognized-by-patterns-card2-mobile.png");
background-size: cover;
}

\r
}\r
</style></div></div><div class="w-embed"><style>
.artboard-1,.artboard-2{
background-image: url("https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards-section/awards-section-artboard-bg-desktop.svg");
background-size: cover;
}

@media screen and (max-width:478px){
.artboard-1,.artboard-2{
background-image: url("https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards-section/awards-section-artboard-bg-mobile.svg");
background-size: cover;
}
}
</style></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="date-changes-cms-collection-container-intensive _100"><div class="intensive-batch-starts"><div class="start-batch-circle"></div><div class="int-batch-txt-copy">Next batch starts on Feb 9th</div></div><div class="embed-btn w-embed"><div class="dates-changing-ctas">

<a id="book-a-free-demo-recognised-by" href="#hero-section"
   class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a>

<a style=display:none
   id="-recognised-by" href=""
   class=""></a>

</div></div></div></div></div></div></section>`;function Sf(){return j.jsx(j.Fragment,{children:ve(_f)})}const Cf=`<div id="pricing" data-sectionid="sections" class="div-block-1831980521417"><div class="div-block-1831980521412 left-and-right-spacings"><div class="heading-sathosi-font font-size-48">Your Success is our Success</div><div class="div-block-1831980521388"><div class="image-812882265 w-embed"><img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/index.png" loading="lazy" /></div><div class="text-block-941248787">Choose your Payment Plan</div></div><div class="pricing-tabs"><div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="w-tabs"><div class="tabs-menu-19 w-tab-menu"><a data-w-tab="Tab 1" id="postpaid-tab-pricing" class="postpaid track-class w-inline-block w-tab-link w--current"><div class="text-block-9412881919">Post-paid</div></a><a data-w-tab="Tab 2" id="prepaid-tab-pricing" class="prepaid track-class w-inline-block w-tab-link"><div class="text-block-9412881920">Pre-paid</div></a></div><div class="tabs-content-26 w-tab-content"><div data-w-tab="Tab 1" class="w-tab-pane w--tab-active"><div class="div-block-1831980521390"><div class="text-block-941248788">Whatâ€™s included ?</div><div class="div-block-1831980521404"><div><div class="pricing-logos-container"><div class="w-embed"><style>
.pricing-logos-post-paid{
height:48px;
width:48px;
}

@media screen and (max-width:478px){
.pricing-logos-post-paid{
height:32px;
width:32px;
}
}
</style>
<img class="pricing-logos-post-paid" 
src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-iot.svg"></div><div class="text-block-941248789-copy">Fundamentals of IT</div></div><div class="pricing-list-items"><div class="pricing-logos-list muliple-job-tracks"><div class="w-embed"><img class="pricing-logos-post-paid" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-job-track.svg"></div><div><div class="text-block-941248789-copy top-padding">Multiple Job Tracks</div><div class="div-block-1831980521411"><div class="div-block-183198052008"><div class="w-embed"><img width="36px" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/java-fullstack.png"></div><div class="text-block-9412881928">Java Full Stack</div></div><div class="div-block-183198052008"><div class="w-embed"><img width="36px" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/mern-full-stack.svg"></div><div class="text-block-9412881928">MERN Full Stack</div></div><div class="da-seats-container"><div class="div-block-183198052008"><div class="w-embed"><img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/data-analytics.svg"  width="36px" height="36px" ></div><div class="text-block-9412881928">Data Analytics</div></div><div class="div-block-1831980521447572"><img src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6683928ef9bd6412dc52fd49_seat-close.svg" loading="lazy" alt=""/><div class="text-block-941288239924 seat-lock">Seats filled. Next batch starts on<br/>01 Jul 2026</div></div></div><div class="da-seats-container"><div class="div-block-183198052008"><div class="w-embed"><img width="36px"  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/automation-testing.svg"></div><div class="text-block-9412881928">QA / Automation Testing</div></div><div class="div-block-1831980521447572"><img src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6683928ef9bd6412dc52fd49_seat-close.svg" loading="lazy" alt=""/><div class="text-block-941288239924 seat-lock">Seats filled. Next batch starts on<br/>01 Jul 2026</div></div></div></div></div></div></div><div class="pricing-logos-container"><div class="w-embed"><style>
.pricing-logos{
height:24px;
width:24px;
}
</style>
<img class="pricing-logos-post-paid"  src="
https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-hours.svg"></div><div class="text-block-941248789-copy">3 Hours classes and 3 Hours Labs Everyday</div></div><div class="pricing-logos-container"><div><div class="html-embed-41938 w-embed"><img class="pricing-logos-post-paid" 
src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-trainers.svg" loading='lazy'/></div></div><div class="text-block-941248789-copy">Trainers: IIT alumni &amp; Top MNCs like Amazon, Microsoft</div></div></div><div><div class="pricing-logos-container"><div class="w-embed"><img class="pricing-logos-post-paid" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-unlimited.svg"></div><div class="text-block-941248789-copy">Unlimited opportunities from aÂ poolÂ ofÂ 3000+ companies</div></div><div class="pricing-list-items"><div class="pricing-logos-list"><div class="w-embed"><img class="pricing-logos-post-paid" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-placements.svg"></div><div class="text-block-941248789-copy">Placement Support</div></div><ul role="list" class="list-301"><li><div>Aptitude Training</div></li><li><div>Soft Skills Training</div></li><li><div>Resume Preparation</div></li><li><div>AI-Powered Mock Interviews</div></li><li><div>Mock Interviews by Tech and HR Panels</div></li><li><div>300+ Senior Interview Experiences</div></li><li><div>Scheduling Interviews</div></li><li><div>Access to Placement Portal</div></li><li><div>Mega Offline Placement Drives</div></li><li><div>Negotiation with companies for higher salaries</div></li></ul></div></div><div><div class="pricing-logos-container"><div class="w-embed"><img class="pricing-logos-post-paid" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-doubts.svg"></div><div class="text-block-941248789-copy">9AM - 9PM Doubt Clarification.<br/>1500+ Mentors to help you.</div></div><div class="pricing-logos-container"><div class="w-embed"><img class="pricing-logos-post-paid" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-projects.svg"></div><div class="text-block-941248789-copy">10+ Real-time Projects for strong resume</div></div><div class="pricing-logos-container"><div class="w-embed"><img class="pricing-logos-post-paid" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/pricing-section/pricing-section-online.svg"></div><div class="text-block-941248789-copy top-padding">24/7 Online Lab Access</div></div><div id="scrap-btn-py" class="pricing-logos-container"><div><div data-delay="0" data-hover="true" class="tooltip-dropdown w-dropdown"><div id="nxtwave-program-postpaid-tab-pricing" class="tooltip-content track-button w-dropdown-toggle"><div class="tooltip-text"><div class="logo-height-2 w-embed"><img class="pricing-logos-post-paid" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/blue-bag.svg"></div><div class="text-block-941248789-copy light-red _475569">NxtWave Intensive is not a Job <br/>Guarantee Program.</div><div class="image-812882270 w-embed"><img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/i-info.svg"></div></div></div><nav class="tooltip-anchor top w-dropdown-list"><div data-cy="step5" class="tooltip-wrapper"><div class="tooltip-container"><div class="tooltip-title">2000+ companies hired thousands of our students in the last 3 years. Every month, 100s of companies reach out to NxtWave to hire our students. NxtWave&#x27;s placement support has only become better and stronger.</div><div class="tooltip-title">NxtWave will help you build industry-relevant skills and support you by providing mock interviews, interview experiences of senior students, aptitude and soft-skills training, resume preparation, placement tests, etc.</div><div class="tooltip-title last">This disclaimer is to make it clear to a few students who might think that they can get a job by just joining the course without learning efforts.</div></div><div class="tooltip-diamond bottom"></div></div><div class="w-embed"><style> .tooltip-anchor { display: none; } </style></div></nav></div></div></div></div></div><div><div class="div-block-1831980521391-copy"><div class="div-block-1831980521441"><div class="div-block-1831980521407"><div class="discount-price-5"><div class="discounted-program-price">â‚¹75,000/-</div><img loading="lazy" src="https://cdn.prod.website-files.com/636e65bc652392383abfa5ea/63bbe3e2a5f15f101e88fb0b_strike-image.png" alt="" class="strike-3-copy"/></div><div class="program-original-price">â‚¹49,000/-</div><div class="program-pricing-term">Non-refundable Upfront Fee</div></div><div class="text-block-941248790-copy">+</div><div class="div-block-1831980521406"><div class="program-price-term1">12% of Annual CTC</div><div class="program-pricing-term">Pay after you get a job</div></div></div><div class="div-block-183198052143938"><div id="scholarship-pricing" class="new-scholar-ship-pricing-container-jfs"><div class="ribbion-container-2"><div class="apply-scholorship-text-2">Additional Scholarships Up To</div><div class="ribbon-glow"><div class="ribbion-glow-2"></div><div class="ribbion-glow-1"></div></div><img loading="lazy" src="https://cdn.prod.website-files.com/6413e0030367922facca6873/641bfef222ca746d6bd6ece3_Slice%201.png" alt="" class="image-812882290"/></div><div class="scholarship-pricing-container"><div class="pricing-text-2">â‚¹16,000/-</div><div class="w-embed"><a id="book-a-free-demo-to-know-more-postpaid-tab-pricing-desktop" href="#hero-section" class="book-a-free-demo-container track-class w-inline-block"><div class="request-acall-back-link">Book a Free Demo to know more.</div><div class="anchor-svg w-embed"><img height="11" width="11" src="https://assets-global.website-files.com/6413e0030367922facca6873/641bf0016de2d684c62d7109_Icon.svg"></div></a></div></div><div class="pricing-logo w-embed"><style>
.ribbon-glow{
animation:flow 1.5s linear infinite;
}

@keyframes flow {
  0% { left:0px; opacity:0;}
  10%{ left:10px; opacity:0.5;}
	50% {left:100px;opacity:1;}
  100%{ left:236px;opacity:0;}
}

@media screen and (max-width:479px){
.ribbon-glow{
animation:flow 1.5s linear infinite;
}

@keyframes flow {
  0% { left:0px; opacity:0;}
  10%{ left:10px; opacity:0.5;}
	50% {left:100px;opacity:1;}
  100%{ left:246px;opacity:0;}
}

}

.money-image-styles{
height:109px;
width:114px;
}

@media screen and (max-width:478px){
.money-image-styles{
height:72px;
width:79px;
}
}
</style>
<img class="money-image-styles" src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/money-image.png"></div></div></div></div><div class="fee-increase-strip-2"><div>Fee increases from February 1st</div><div class="fee-increase-image w-embed"><img  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/fee-increases-icon.svg"></div><div class="fee-increase-image2 w-embed"><img  src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/trending-up-fee-increases-strip.png"></div></div></div></div><div id="scholarship-pricing-mobile" class="scholarship-pricing-mobile"><div class="new-scholar-ship-pricing-container-jfs"><div class="ribbion-container-2"><div class="apply-scholorship-text-2">Additional Scholarships Up To</div><div class="ribbon-glow"><div class="ribbion-glow-2"></div><div class="ribbion-glow-1"></div></div><img loading="lazy" src="https://cdn.prod.website-files.com/6413e0030367922facca6873/641bfef222ca746d6bd6ece3_Slice%201.png" alt="" class="image-812882290"/></div><div class="scholarship-pricing-container"><div class="pricing-text-2">â‚¹16,000/-</div><div class="w-embed"><a id="book-a-free-demo-to-know-more-postpaid-tab-pricing-mobile" href="#hero-section" class="book-a-free-demo-container track-class w-inline-block"><div class="request-acall-back-link">Book a Free Demo to know more.</div><div class="anchor-svg w-embed"><img height="11" width="11" src="https://assets-global.website-files.com/6413e0030367922facca6873/641bf0016de2d684c62d7109_Icon.svg"></div></a></div></div><div class="pricing-logo w-embed"><style>
.ribbon-glow{
animation:flow 1.5s linear infinite;
}

@keyframes flow {
  0% { left:0px; opacity:0;}
  10%{ left:10px; opacity:0.5;}
	50% {left:100px;opacity:1;}
  100%{ left:236px;opacity:0;}
}

@media screen and (max-width:479px){
.ribbon-glow{
animation:flow 1.5s linear infinite;
}

@keyframes flow {
  0% { left:0px; opacity:0;}
  10%{ left:10px; opacity:0.5;}
	50% {left:100px;opacity:1;}
  100%{ left:246px;opacity:0;}
}

}

.money-image-styles{
height:109px;
width:114px;
}

@media screen and (max-width:478px){
.money-image-styles{
height:72px;
width:79px;
}
}
</style>
<img class="money-image-styles" src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/money-image.png"></div></div></div><div class="post-paid-collection w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="date-changes-cms-collection-container left-aligin"><div class="intensive-batch-starts"><div class="start-batch-circle"></div><div class="int-batch-txt-copy">Next batch starts on Feb 9th</div></div><div class="dates-changing-ctas"><div class="embed-btn w-embed"><a href=#hero-section target="_blank" id="book-a-free-demo-postpaid-tab-pricing" class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a></div><a id="reserve-a-seat-for-postpaid-tab-pricing" href="https://accounts.ccbp.in/register/intensive-book-your-seat" target="_blank" class="reserve-seat-postpaid-button track-class w-button">Book Your Seat for 2000/-</a></div></div></div></div></div></div><div data-w-tab="Tab 2" class="w-tab-pane"><div class="pricing-prepaid-tab-content"><div class="pricing-pre-paid-title">Whatâ€™s included ?</div><div class="prepaid-features-container"><div class="prepaid-txt1">Everything in Postpaid</div><div class="prepaid-txt2">+</div><div class="prepaid-txt3">After you complete the course, if you don&#x27;t get a job, the amount paid will be refunded with a deduction (<a href="https://www.ccbp.in/terms-and-conditions#Intensive-Terms" id="terms-and-conditions-apply-pre-paid-fee" target="_blank" class="link-block-blue-color track-class">TermsÂ and Conditions Apply</a>).</div></div><div class="prepaid-pricing-details-div"><div class="discounted-price"><div>â‚¹1,50,000/-</div><img loading="lazy" src="https://cdn.prod.website-files.com/636e65bc652392383abfa5ea/63bbe3e2a5f15f101e88fb0b_strike-image.png" alt="" class="strike-3"/></div><div class="program-price">â‚¹90,000/-</div></div></div><div class="pre-paid-collection w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="date-changes-cms-collection-container left-aligin"><div class="intensive-batch-starts"><div class="start-batch-circle"></div><div class="int-batch-txt-copy">Next batch starts on Feb 9th</div></div><div class="dates-changing-ctas"><div class="embed-btn w-embed"><a href=#hero-section id="book-a-free-demo-prepaid-tab-pricing" target="_blank" class="book-a-free-demo-main-btn track-class w-button">Book a Free Demo</a></div><a id="reserve-a-seat-for-prepaid-tab-pricing" href="https://accounts.ccbp.in/register/intensive-book-your-seat" target="_blank" class="reserve-seat-postpaid-button track-class w-button">Book Your Seat for 2000/-</a></div></div></div></div></div></div></div></div></div></div></div>`;function Ef(){return j.jsx(j.Fragment,{children:ve(Cf)})}const Pf='<div id="faqs" data-sectionid="sections" class="faq-section"><div class="faq-main-container"><h2 class="faq-main-heading">Frequently Asked Questions</h2><div class="faqs-all-tabs-main-container"><div data-duration-in="300" data-duration-out="100" data-current="Tab 3" data-easing="ease" class="tabs-13 w-tabs"><div class="faqs-all-tabs w-tab-menu"><a data-w-tab="Tab 3" id="training-details-tab-faqs" class="faq-tab-link track-button w-inline-block w-tab-link w--current"><div>TrainingÂ Details</div></a><a data-w-tab="Tab 2" id="eligibility-tab-faqs" class="faq-tab-link track-button w-inline-block w-tab-link"><div>Eligibility</div></a><a data-w-tab="Tab 4" id="placement-support-tab-faqs" class="faq-tab-link track-button w-inline-block w-tab-link"><div>Placement Support</div></a><a data-w-tab="Tab 7" id="irc-tab-faqs" class="faq-tab-link track-button w-inline-block w-tab-link"><div>IRC</div></a><a data-w-tab="Tab 6" id="fee-tab-faqs" class="faq-tab-link track-button w-inline-block w-tab-link"><div>Fee</div></a></div><div class="faqs-tab-content-2 w-tab-content"><div data-w-tab="Tab 3" class="w-tab-pane w--tab-active"><div class="question-answers-container"><div class="faq-qaa-main-conatainer"><div id="what-is-the-duration-of-the-program-training-details-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">What is the duration of the program?</h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">The Fundamentals phase usually takes 2 months, followed by a 6-month job track, either MERN Full Stack or Java Full Stack. While learning, youâ€™ll work on multiple real-world projects to build a portfolio that you can showcase to recruiters, and youâ€™ll also receive continuous placement support until you secure a job, including resume guidance, mock interviews, and interview preparation. The program is self-paced, so you can learn at your own convenience. </p></div></div></div><div class="faq-qaa-main-conatainer"><div id="what-is-the-nxtwave-intensive-curriculum-training-details-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">What is the NxtWave Intensive curriculum? Why is it so successful in getting tech jobs?</h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">The NxtWave Intensive curriculum is a reverse-engineered, industry-aligned program created by gathering insights from 3,000+ hiring companies to understand the exact skills they look for. It takes you from zero coding knowledge to building real-world projects, starting with Fundamentals and then moving to a job track, either MERN Full Stack or Java Full Stack, based on your fundamentals exam. Youâ€™ll build projects like a mini-Zomato app, a social feed app, and a portfolio website, while coding practice, assessments, and mock tests prepare you for interviews. </p><p class="faq-ans-p">This is why 100+ companies come to hire from NxtWave every month, and 1000s of students have already landed tech jobs</p></div></div></div><div class="faq-qaa-main-conatainer"><div id="why-is-everyone-saying-nxtwave-online-sessions-training-details-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Why is NxtWaveâ€™s Intensive program so effective?</h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">NxtWave is not just about classes. Itâ€™s a complete learning ecosystem designed to make you job-ready, not just course completed.<br/></p><p class="faq-ans-p">Here&#x27;s how it works:<br/><strong>Learn â†’ Practice â†’ Apply: </strong><br/>Every concept is followed by hands-on coding practice in 24x7 labs in our advanced learning portal.</p><p class="faq-ans-p"><strong>Live doubt support (11 AM â€“ 8 PM): </strong><br/>You donâ€™t stay stuck. Domain experts clear your doubts fast.</p><p class="faq-ans-p"><strong>Dedicated Success Coach: </strong><br/>You get personal guidance to stay on track and maintain consistency.</p><p class="faq-ans-p"><strong>Vernacular learning: </strong><br/>Concepts are explained in your mother tongue, making even complex topics easy to understand.</p><p class="faq-ans-p"><strong>Cheat sheets &amp; summary notes: </strong><br/>No need to prepare notes manually; key concepts are already organised for you.</p><p class="faq-ans-p">With this support, 1000s of students have already secured tech jobs.</p><p class="faq-ans-p">Read more success stories here: <a id="reviews-everyone-saying-nxtwave-training-details-faqs" href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" class="link-89 track-button">https://www.ccbp.in/reviews</a><br/></p></div></div></div><div class="faq-qaa-main-conatainer"><div id="how-flexible-are-the-timings-of-nxtWave-intensive-program-training-details-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">How flexible are the timings of NxtWave Intensive program?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">You have the flexibility to learn at your convenient time and pace. However, we suggest you stick to a consistent time every day. Only when online live webinars happen, you need to attend them at a particular time. Mostly such webinars happen during weekends or in the evenings of working days. All the learning modules are very interactive.</p></div></div></div><div class="faq-qaa-main-conatainer"><div id="what-if-i-get-doubts-while-learning-training-details-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">How can I clarify my doubts while learning?</h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Itâ€™s natural to have doubts while learning. At NxtWave, you can get help through live doubt sessions and the discussion forum, with domain experts available from 11 AM to 8 PM. You can post questions anytime and also refer to other learnersâ€™ discussions to understand concepts quickly.</p></div></div></div><div class="faq-qaa-main-conatainer"><div id="why-isit-recommended-training-details-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Why is it recommended that you learn right from fundamentals at NxtWave Intensive?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">In any skill, when you&#x27;re strong with the fundamentals, you learn quickly and master it faster. And software development is no exception. If you build solid foundations, you can learn advanced concepts, languages and frameworks easily.</p><p class="faq-ans-p">So we recommend that you learn right from fundamentals at NxtWave Intensive even though you have undergone training at another learning program. It is because you learn programming in a non-conventional way here that helps you develop the thinking patterns of a world-class developer.<br/></p></div></div></div><div class="faq-qaa-main-conatainer last-child"><div id="how-can-i-learn-along-with-my-college-training-details-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">How can I learn along with my college or office?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Learning in NxtWave Intensive is self-paced. You can join the program and learn after your working hours/regular college hours and on weekends.</p></div></div></div></div></div><div data-w-tab="Tab 2" class="w-tab-pane"><div class="question-answers-container"><div class="faq-qaa-main-conatainer"><div id="why-anyone-looking-for-a-tech-job-eligibility-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Why anyone looking for a tech job can join the program without worrying about their background?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">NxtWave Intensive program is designed to get anyone ready for a tech job within a short time. Your degree, branch, marks, or backlogs â€” nothing is a barrier to join the program and get a tech job. You need not have any previous coding knowledge. Youâ€™ll learn everything from scratch.</p><p class="faq-ans-p">You may be afraid of coding due to your previous experiences. But our passionate trainers will simplify every concept and teach by integrating science-backed methods. So you&#x27;ll understand concepts easily, and they stick in your mind instantly. Itâ€™s one of the reasons why many of your friends are recommending that you join NxtWave</p><p class="faq-ans-p">Within 2-3 weeks at NxtWave, youâ€™ll become amazingly confident about skills and fall in love with software development. By the time you complete the program, youâ€™ll reach a stage where companies compete for you.</p><p class="faq-ans-p">Itâ€™s because youâ€™ll build industry-aligned real-time projects during the program and develop a strong personal portfolio. Due to this, your background (degree, marks, backlogs etc.) becomes insignificant before your skills.</p><p class="faq-ans-p">Hundreds of NxtWave learners have proved that nothing matters to get a tech job except your willingness to learn. Read their inspiring success stories here: <a id="reviews-why-anyone-looking-for-a-tech-job-eligibility-tab-faqs" href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" class="link-89 track-button">https://www.ccbp.in/reviews</a></p><p class="faq-ans-p">The program is most suitable for final year students, job seekers, and those looking to switch to a tech career.</p></div></div></div><div class="faq-qaa-main-conatainer"><div id="how-are-many-graduates-with-ba-bcom-bsc-mba-degrees-eligibility-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">How are many graduates with B.A, B.Com, BSc, MBA degrees getting tech jobs? <strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Your degree is not a barrier to get a tech job. Itâ€™s because companies look for candidates with practical skills. As youâ€™ll build many real-world projects during the program, your resume will become very powerful. And many NxtWave learners have proved it by getting placed on par with those who hold a Computer Science degree.</p><p class="faq-ans-p">For example, Sonali, a NxtWave Intensive learner who has a specialization in Chemistry got a tech job with â‚¹7 Lakhs annual salary at ADF, a US-based tech company.</p><p class="faq-ans-p">Similarly, there are many such successful career transformation stories. You can read them here: <a id="reviews-how-are-many-graduates-eligibility-tab-faqs" href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" class="link-89 track-button">https://www.ccbp.in/reviews</a></p></div></div></div><div class="faq-qaa-main-conatainer"><div id="even-with-career-gap-how-many-graduates-getting-tech-job-eligibility-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Even with a career gap, how are many graduates getting a tech job?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Your career gap is not a barrier to getting a tech job. Itâ€™s because companies need candidates with practical skills. As youâ€™ll build many real-world projects during the program, youâ€™ll develop skills that companies look for. Similarly, there are many such successful career transformation stories of graduates with gaps in their resumes. You can read their reviews and success stories here: <a id="reviews-even-with-career-gap-eligibility-tab-faqs" href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" class="link-89 track-button">https://www.ccbp.in/reviews</a><br/></p><p class="faq-ans-p">So, youâ€™ll have a good possibility to get hired by companies that are not concerned with your career gap. Though opportunities for candidates with career gaps are relatively lesser than recent graduates, there are many opportunities even then.</p><p class="faq-ans-p">For example, <strong>Sindhu Nangunuri</strong>, a NxtWave learner graduated in 2014. She resigned from her job in 2016 to prepare for government exams. Later, she got married and couldn&#x27;t pursue a career as she took care of her family. <strong>She lost nearly 6 years before joining NxtWave in 2022</strong>. Later Sindhu got <strong>placed as Associate Engineer at Lloyds Technology Centre in 2023</strong>. </p><p class="faq-ans-p">You can read her journey here: <a id="linkedin-even-with-career-gap-eligibility-tab-faqs" href="https://www.linkedin.com/posts/sindhu-nangunuri_success-professionalwomen-transformation-activity-7176138890053849088-Duxw/?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" target="_blank" rel="nofollow" class="link-89 track-button">https://www.linkedin.com/posts/sindhu-nangunuri_success-professionalwomen-transformation-activity-7176138890053849088-Duxw/</a></p><p class="faq-ans-p">Similarly, there are many such successful career transformation stories of graduates with gaps in their resumes. You can read their reviews and success stories here: <a id="reviews-2-even-with-career-gap-eligibility-tab-faqs" href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" class="link-89 track-button">https://www.ccbp.in/reviews</a><br/></p></div></div></div><div class="faq-qaa-main-conatainer"><div id="how-many-non-cs-branch-graduates-getting-tech-jobs-eligibility-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">How are many Non-CS branch (Mech, Civil, ECE, EEE, Chemical) graduates getting tech jobs?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Your branch is not a barrier to get a tech job. Itâ€™s because companies look for candidates with practical skills. As youâ€™ll build many real-world projects during the program, your resume will become so powerful that your branch will become insignificant before your skills. And many NxtWave learners have proved it by getting placed on par with Computer Science students.<br/></p><p class="faq-ans-p">For example, Sushanth is a civil engineering graduate. After building programming skills from scratch at NxtWave, he cleared his first-ever tech interview in the first attempt itself. Now, he got placed as a Full Stack Developer at needl.ai with â‚¹11 lakhs per annum salary.</p><p class="faq-ans-p">Similarly, hundreds of non-CS graduates got tech jobs with NxtWave Intensive. You can read their reviews and success stories here: <a id="reviews-how-many-non-cs-branch-graduates-eligibility-tab-faqs" href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" class="link-89">https://www.ccbp.in/reviews</a></p></div></div></div><div class="faq-qaa-main-conatainer last-child"><div id="do-i-need-a-laptop-to-attend-nxtwave-intensive-program-eligibility-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Do I need a laptop to attend NxtWave Intensive program?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Yes, you need a laptop to learn effectively. While you can attend sessions, participate in quizzes on your mobile, you will need a laptop to work on coding assignments and projects.<br/></p><p class="faq-ans-p"><strong>Recommended Specifications:<br/>â€</strong>Windows 10/Ubuntu/macOS<br/> 8GB RAM<br/>SSD<br/></p></div></div></div></div></div><div data-w-tab="Tab 4" class="w-tab-pane"><div class="question-answers-container"><div class="faq-qaa-main-conatainer"><div id="how-long-will-i-receive-the-placement-support-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">How long will I receive the placement support?</h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">After finishing your chosen job track, youâ€™ll get continuous support to land a tech job. This includes aptitude and communication training, resume help, and mock interviews. You can attend as many interviews as needed, and NxtWave will keep arranging opportunities until you get placed.<br/></p><p class="faq-ans-p">Even though the standard support is 16 months, if you havenâ€™t landed a job by then, weâ€™ll check your progress and guide you further. So far, we have helped 1000s of students from different backgrounds successfully get tech jobs in 2000+ companies. <br/></p><p class="faq-ans-p">Read their stories here: <a id="reviews-the-placement-support-tab-faqs" href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section" class="link-89 track-button"> https://www.ccbp.in/reviews</a><br/></p></div></div></div><div class="faq-qaa-main-conatainer last-child"><div id="do-i-have-to-take-the-first-job-i-m-offered-placement-support-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Do I have to take the first job I&#x27;m offered?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Yes. Once the placement process begins, we will recommend you to MNCs and startups in our network. You need to accept the job offer if you clear the selection process.<br/></p></div></div></div></div></div><div data-w-tab="Tab 7" class="w-tab-pane"><div class="question-answers-container"><div class="faq-qaa-main-conatainer"><div id="what-is-irc-tab-faqs" class="faq-q-icon-container track-button"><h3 class="faq-q-h">What is IRC? <strong class="bold-text-132"><br/></strong></h3><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">IRC stands for Industry Ready Certification. Unlike any other study certificate, IRC represents your readiness for a job and approves that you have skills that companies look for.<br/></p><p class="faq-ans-p">NxtWave is one of the very few EdTech companies that is an Official Partner for <em>NSDC, under the Ministry of Skill Development &amp; Entrepreneurship, Govt. of India.</em><br/></p><p class="faq-ans-p">Your skills will be jointly certified by NxtWave and NSDC. It means youâ€˜ll become more in demand for companies that hire NxtWave learners.<br/></p></div></div></div><div class="faq-qaa-main-conatainer last-child"><div id="why-is-irc-more-powerful-than-regular-study-certificates-irc-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Why is IRC more powerful than regular study certificates?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Itâ€™s because an individual gets an IRC only after completing industry-aligned projects, assignments and tests designed by world-class developers in the NxtWave curriculum.<br/></p><p class="faq-ans-p">NxtWave is one of the very few EdTech companies that is an Official Partner for <strong><em>NSDC, under the Ministry of Skill Development &amp; Entrepreneurship, Govt. of India.</em></strong><br/></p><p class="faq-ans-p">Governments/Govt. Organizations recognize only those training programs that are proven to bring results after an extensive evaluation process. So if you hold a certificate recognized by NSDC, companies have greater trust in your skills. It gives you an edge during interviews.<br/></p></div></div></div></div></div><div data-w-tab="Tab 6" class="w-tab-pane"><div class="question-answers-container"><div class="faq-qaa-main-conatainer"><div id="is-there-an-emi-option-to-pay-the-fee-for-nxtwave-intensive-fee-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">Is there an EMI option to pay the fee for NxtWave Intensive?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Yes, EMI support is available for credit cards. Please select the EMI option while making payment for more information.<br/></p></div></div></div><div class="faq-qaa-main-conatainer last-child"><div id="what-are-the-terms-of-the-refund-fee-tab-faqs" class="faq-q-icon-container track-button"><h4 class="faq-q-h">What are the terms of the refund?<strong class="bold-text-132"><br/></strong></h4><div class="icon-14"><div class="faq-dropdown-arrow"></div></div></div><div class="faq-ans"><div class="faq-anws-container"><p class="faq-ans-p">Please check the refund policy here: <a id="terms-and-conditions-the-refund-fee-tab-faqs" href="https://www.ccbp.in/terms-and-conditions#payments" target="_blank" class="link-88 track-button">https://www.ccbp.in/terms-and-conditions#payments</a><br/></p></div></div></div></div></div></div></div></div><div class="w-embed w-script"></div></div></div>';function Nf(){return j.jsx(j.Fragment,{children:ve(Pf)})}const Tf=`<section id="nxtwave-learners-experience" data-sectionid="sections" class="learner-expriences-videos-section"><div class="learner-review-main-container"><h2 class="learner-heading">Hear NxtWave learners&#x27; experiences</h2><div data-delay="3000" data-animation="slide" class="slider-432 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true"><div class="mask-77 w-slider-mask"><div class="slide-139 w-slide"><div id="vijaya-lakshmi-agraharapu-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/KGKJgq7sBfU?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="Living My Dream Moment | Next Wave of Surprises | Vijaya&#x27;s Telugu Review | CCBP"></iframe></div></div><div class="slide-139 w-slide"><div id="leela-prasanthi-karri-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/m_LshX1kT_s?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="NxtWave Helped Me to Beat All The Odds! | CCBP 4.0"></iframe></div></div><div class="slide-139 w-slide"><div id="rogul-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/ET9KDQo3BQ0?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="NxtWave&#x27;s Guidance Led To My Tech Success | Next Wave of Success | CCBP"></iframe></div></div><div class="slide-139 w-slide"><div id="siva-kumar-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/zhkh_tVBJQc?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="NxtWave is why I&#x27;m enjoying my success | Next Wave of Excitement | CCBP"></iframe></div></div><div class="slide-139 w-slide"><div id="sukanya-thimmigalla-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/JHMx0JNO0GQ?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="NxtWave Helped Me Get What I Wanted | Next Wave of Excitement | CCBP"></iframe></div></div><div class="slide-139 w-slide"><div id="sai-keerthana-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/Sp8lFmKCToQ?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="A Dream Turned Into Reality | Next Wave of Tech Career | CCBP | Telugu"></iframe></div></div><div class="slide-139 w-slide"><div id="vepamanu-srinivasulu-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/NlkL72bqsug?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="I Became Industry-Ready With NxtWave | Next Wave of Transformation | CCBP"></iframe></div></div><div class="slide-139 w-slide"><div id="praveen-chasta-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/8olMwD8o8uY?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="My one decision earned me a dream tech career | Next Wave of Success | CCBP"></iframe></div></div><div class="slide-139 w-slide"><div id="prudhvi-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/agzG-mLc9UE?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="Prudhvi&#x27;s Inspiring Tech Success | Next Wave of Inspiration | CCBP | Telugu"></iframe></div></div><div id="jayasri-learners-experience" class="slide-139 w-slide"><div id="vijaya-lakshmi-agraharapu-learners-experience" style="padding-top:56.17021276595745%" class="w-embed-youtubevideo lerner-youtube track-button"><iframe src="https://www.youtube.com/embed/3GzlIgsV_Os?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="Jayasri built her career against all odds | Next Wave of New Life | CCBP | Telugu"></iframe></div></div></div><div id="left-arrow-learner-experience" class="left-arrow-12394 track-button w-slider-arrow-left"><div class="slider-video-left-arrow-new"></div><div class="mobile-hide-arrows-copy-copy w-embed"><img  src="https://nxtwave.imgix.net/ccbp-website/intensive/roundarrow.svg" loading="lazy"/></div></div><div id="right-arrow-learner-experience" class="right-arrow-2202 track-button w-slider-arrow-right"><div class="slider-video-right-arrow-new"></div><div class="mobile-hide-arrows-copy-copy w-embed"><img src="https://nxtwave.imgix.net/ccbp-website/intensive/roundbutton.svg" loading="lazy"/></div></div><div class="slide-nav-18-copy w-slider-nav w-round"></div></div></div></section><section id="articles-in-media" data-sectionid="sections" class="atricles-media"><div class="media-main-container"><h2 class="media-heading">NxtWave in the media<br/></h2><div class="slider-container"><div data-delay="6000" data-animation="slide" class="nxtwave-media-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="4" data-duration="500" data-infinite="true"><div class="media-mask w-slider-mask"><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b51e0119fcdbdd3db541_india-today.avif' alt='video-testimonials' width='60%' loading='lazy' /></div><div class="date">08 Oct 2024</div></div><div class="w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b5f77a66d3c2a4df447c_compaines-count.avif' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">Over 2000 Companies Hire NxtWave Learners, Addressing the Talent...</div><a id="india-today-nxtwave-in-media" rel="nofollow" href="https://www.indiatoday.in/pr-newswire?rkey=20241008EN25620&amp;filter=4315" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="code-embed-32 w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b51dfb6a947fa17e2419_hindustan-times.avif' alt='video-testimonials'  loading='lazy' /></div><div class="date">04 Sep 2024</div></div><div class="w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b5f755390610f3c2eb81_eou.avif' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">NxtWave and NSDC launch SkillUp India 4.0, aims to empower over...</div><a id="hindustan-times-nxtwave-in-media" rel="nofollow" href="https://www.google.com/amp/s/www.hindustantimes.com/education/news/nxtwave-and-nsdc-launch-skillup-india-4-0-aims-to-empower-over-30-lakh-students-101725365770655-amp.html" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="code-embed-33 w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b51dde303ac190230f70_cnbc-tv.avif' alt='video-testimonials' loading='lazy' /></div><div class="date">03 Sep 2024</div></div><div class="w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b5f755390610f3c2eb81_eou.avif' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">NSDC, NxtWave join hands to upskill 3 million students</div><a id="cbn-nxtwave-in-media" rel="nofollow" href="https://www.cnbctv18.com/education/nsdc-nxtwave-mou-skill-india-mission-ai-ml-workshops-3-million-students-19470158.htm" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="code-embed-32 w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b51d62bd1d5e5fa79b73_financial-express.avif' alt='video-testimonials' loading='lazy' /></div><div class="date">11 Jun 2024</div></div><div class="w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b5f60c3379f320f94bbf_pioneer-financial-express.avif' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">NxtWave recognized as a â€˜Technology Pioneerâ€™ by World Economic Forum</div><a id="financial-express-nxtwave-in-media" rel="nofollow" href="https://www.financialexpress.com/jobs-career/education/nxtwave-recognized-as-a-technology-pioneer-by-world-economic-forum/3522172/" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="code-embed-32 w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b51d66fa18a1add569e2_the-time-of-india.avif' alt='video-testimonials' loading='lazy' /></div><div class="date">13 Jun 2024</div></div><div class="w-embed"><img src='https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/6720b5f63749884b556d5243_pioneer-times-of-india.avif' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">NxtWave, has been named a Tech Pioneer 2024 by the World...</div><a id="the-times-of-india-nxtwave-in-media" rel="nofollow" href="https://timesofindia.indiatimes.com/india/wef-recognises-edtech-startup-as-tech-pioneer-2024/articleshow/110973253.cms" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/forbes-30-logo.png' alt='video-testimonials' width='40' height='40' loading='lazy' /></div><div class="date">26 Feb 2024</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/forbes-30-article.png' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">Anupam Pedarla and Sashank Reddy Gujjula: Bridging the gap</div><a id="forbes-30-under-30nxtwave-in-media" rel="nofollow" href="https://www.forbesindia.com/article/30-under-30-2024/anupam-pedarla-and-sashank-reddy-gujjula-bridging-the-gap/91651/1" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/the-week-logo.png' alt='video-testimonials' width='147' height='40' loading='lazy' /></div><div class="date">16 Feb 2024</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/the-week-article.png' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">Nxtwave founders earn the prestigious Forbes India 30 under...</div><a id="the-week-30-under-30nxtwave-in-media" rel="nofollow" href="https://www.theweek.in/wire-updates/business/2024/02/16/dcm54-nxtwave.html" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/economic-times-logo.png' alt='video-testimonials' width='160' height='40' loading='lazy' /></div><div class="date">21 Feb 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/economic-times-article.png' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">Edtech startup NxtWave raises $33 million in fresh funding</div><a id="economic-times-fundingnxtwave-in-media" rel="nofollow" href="https://economictimes.indiatimes.com/tech/funding/nxtwave-raises-33-million-in-funding-round-led-by-greater-pacific-capital/articleshow/98112172.cms" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="html-embed-82631 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/your-story-logo.png' width='147'  height='40' loading='lazy' /></div><div class="date">21 Feb 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/financial-express-article.png' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">Edtech startup Nxtwave raises $33M in series a round led by...</div><a id="yourstory-fundingnxtwave-in-media" rel="nofollow" href="https://yourstory.com/2023/02/edtech-startup-nxtwave-series-a-funding-greater-pacific-capital" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="html-embed-82631 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/financial-express-logo.png' width='147'   height='40' loading='lazy' /></div><div class="date">17 April 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/apis-partnership-logo.png' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">APIS partners with NxtWave Disruptive Technologies to enhan...</div><a id="financial-express-apis-partnerednxtwave-in-media" rel="nofollow" href="https://www.financialexpress.com/jobs-career/education-apis-partners-with-nxtwave-disruptive-technologies-to-enhance-startup-ecosystem-in-ap-3050509/" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/financial-express-logo.png' alt='video-testimonials' width='147' height='40' loading='lazy' /></div><div class="date">13 Sep 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/gen-ai-article.png' alt='video-testimonials' width='100%' loading='lazy' /></div><div class="card-description">NxtWave aims to empower tech students with Generative AI...</div><a id="financial-express-gen-ainxtwave-in-media" rel="nofollow" href="https://www.financialexpress.com/jobs-career/education-nxtwave-aims-to-empower-tech-students-with-generative-ai-workshop-on-world-youth-skills-day-3170269/" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/cxo-logo.png' alt='media-spotlight' width='147' height='40' loading='lazy' /></div><div class="date">30 Nov 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/startup-spotlight-article.png' alt='media-spotlight' width='100%' loading='lazy' /></div><div class="card-description">NxtWave Awarded the Startup Spotlight Award by T-Hub</div><a id="cxotoday-t-hubnxtwave-in-media" rel="nofollow" href="https://cxotoday.com/press-release/nxtwave-awarded-the-startup-spotlight-award-by-t-hub/" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/financial-express-logo.png' alt='video-testimonials' width='147' height='40' loading='lazy' /></div><div class="date">10 April 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/dubai-camp-article.png' alt='media-spotlight' width='100%' loading='lazy' /></div><div class="card-description">NxtWave hosts 4-day â€˜4.0 Tech Campâ€™ in Dubai to upskill students...</div><a id="financial-express-dubai-4.0-campnxtwave-in-media" rel="nofollow" href="https://www.financialexpress.com/jobs-career/education-nxtwave-hosts-4-day-4-0-tech-camp-in-dubai-to-upskill-students-in-emerging-technologies-3041040/" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/csr-mandate-logo.png' alt='media-spotlight' width='145' height='40' loading='lazy' /></div><div class="date">05 Oct 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/csr-mandate-article.png' alt='media-spotlight' width='100%' loading='lazy' /></div><div class="card-description">NxtWave Marks Impactful CSR Initiatives and Blood Donation...</div><a id="csr-mandate-blood-donationnxtwave-in-media" rel="nofollow" href="https://www.csrmandate.org/nxtwave-marks-impactful-csr-initiatives-and-blood-donation-drive/" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/business-week-logo.png' alt='media-spotlight' width='145' height='40' loading='lazy' /></div><div class="date">30 Nov 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/ministry-recognision-article.png' width='100%' loading='lazy' /></div><div class="card-description">NxtWave Graduates Shine at the 2nd Kaushal Deekshant Samaroh...</div><a id="business-week-award-from-ministrynxtwave-in-media" rel="nofollow" href="https://businessnewsthisweek.com/business/nxtwave-graduates-shine-at-the-2nd-kaushal-deekshant-samaroh-new-delhi/#google_vignette" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div><div class="mask-slide w-slide"><div class="each-card-container"><div class="date-compaine-container"><div class="w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/financial-express-logo.png' alt='media-spotlight' width='145' height='40' loading='lazy' /></div><div class="date">26 Sep 2023</div></div><div class="w-embed"><img src='https://nxtwave.imgix.net/ccbp-website/Home/ethical-hacking-logo.png' alt='media-spotlight' width='100%' loading='lazy' /></div><div class="card-description">NxtWave to host workshop on â€˜Ethical Hacking â€“ Building Indiaâ€™s..</div><a id="financial-express-ethical-hackingnxtwave-in-media" rel="nofollow" href="https://www.financialexpress.com/jobs-career/education-nxtwave-to-host-workshop-on-ethical-hacking-building-indias-cyber-army-3255252/" target="_blank" class="read-more-container track-button w-inline-block"><div class="read-more-tex">Read Article</div><div class="read-more-arrow"></div></a></div></div></div><div id="left-arrow-nxtwave-in-media" class="nxtwave-media-slider-left-arrow track-button w-slider-arrow-left"><div class="spotlight-slider-left-arrow-2"></div></div><div id="right-arrow-nxtwave-in-media" class="nxtwave-media-slider-right-arrow track-button w-slider-arrow-right"><div class="spotlight-slider-right-arrow-2"></div></div><div class="slide-nav-18-copy display-block-copy w-slider-nav"></div></div></div></div></section>`;function If(){return j.jsx(j.Fragment,{children:ve(Tf)})}const Rf=`<div id="footer" data-sectionid="sections" class="section-137"><div><div class="container-24"><div class="footer-row-3"><div class="footer-info-2"><a href="https://www.ccbp.in/" id="footer-nxtwave-logo" class="footer-logo-link-2 track-button w-inline-block"><div class="nxtwave-white-logo-2 w-embed"><style>
.location-footer{
	 background-color:#64748B;
 
   clip-path:path("M5 9.26562C5 5.39563 8.13 2.26562 12 2.26562C15.87 2.26562 19 5.39563 19 9.26562C19 13.4356 14.58 19.1856 12.77 21.3756C12.37 21.8556 11.64 21.8556 11.24 21.3756C9.42 19.1856 5 13.4356 5 9.26562ZM9.5 9.26562C9.5 10.6456 10.62 11.7656 12 11.7656C13.38 11.7656 14.5 10.6456 14.5 9.26562C14.5 7.88562 13.38 6.76562 12 6.76562C10.62 6.76562 9.5 7.88562 9.5 9.26562Z");
}
</style>

<img src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_White_logo.svg" alt="Nxtwave" width="100%" loading="lazy"></div></a><div class="footer-menu-column-3 reachus email"><h6 class="h6-small-2">Reach Us</h6><div class="div-block-183198052034"><a id="whatsapp-only-footer" href="https://forms.ccbp.in/public/form/whatsapp-us-have-a-query/?_gl=1*l0322q*_gcl_au*MjA1NzEwNTc4NC4xNzYzNTQ5NjA4LjQwMjAyNjg2MS4xNzY0MzE1MDA5LjE3NjQzMTUwMDk.*_ga*MjYwMzEwNDU3LjE3NjM1NDk2MDg.*_ga_G14P2PSGM6*czE3NjQ5MTE0NTUkbzIyJGcxJHQxNzY0OTE0NjAwJGo1NCRsMCRoMA.." target="_blank" class="whastapp-button track-button w-inline-block"><div class="whatsapp---icon-2 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/whatsapp-icon.svg' alt='whatsapp' loading='lazy'/></div><div><div class="whatsapp-link">+919390111761<br/>(WhatsApp only)</div></div></a><a id="support-nxtwave-footer" href="mailto:support@nxtwave.tech" class="email-button track-button w-inline-block"><div class="email---icon-2 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/email.icon.svg' at='email' /></div><div><div class="whatsapp-link">support@nxtwave.tech</div></div></a></div></div></div><div class="footer-menus-row-2"><div class="div-block-1904"><h6 class="h6-small-2 quicklinks">Quick Links</h6><div class="div-block-1911"><div class="footer-menu-column-3"><ul role="list" class="link-menu-2 links w-list-unstyled"><li class="link-menu-item-2"><a href="https://www.ccbp.in/" id="footer-home" class="footer-link-3 track-button">Home<br/></a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/academy" id="footer-academy" class="footer-link-3 track-button">Academy<br/></a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/intensive" id="footer-intensive" class="footer-link-3 track-button">Intensive<br/></a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/hire" id="footer-Hire-with-us" class="footer-link-3 track-button">Hire withÂ us<br/></a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/contact-us" id="footer-contact-us" class="footer-link-3 track-button">Contact Us<br/></a></li><li class="link-menu-items-22"><a href="https://www.ccbp.in/blog" id="footer-blog" class="footer-link-3 track-button">Blog<br/></a></li><li class="link-menu-items-22"><a href="/our-tech" id="footer-our-tech" class="footer-link-3 track-button">Our Tech<br/></a></li><li class="link-menu-items-22"><a href="/careers" id="footer-nxtwave-careers" target="_blank" class="footer-link-3 track-button">NxtWave Careers<br/></a></li></ul></div><div class="div-block-1908"><ul role="list" class="link-menu-2 links _2nd w-list-unstyled"><li class="link-menu-item-2"><a href="https://www.ccbp.in/about-us" id="footer-about-us" class="footer-link-3 track-button">About Us<br/></a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/reviews" id="footer-reviews" class="footer-link-3 track-button">Reviews <br/></a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/tech-community" id="footer-community" class="footer-link-3 track-button">Community<br/></a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/4-0-champions" id="footer-4.0champions" class="footer-link-3 track-button">4.0Â Champions<br/></a></li><li class="link-menu-item-2"><a href="https://www.youtube.com/watch?v=fpPwEFB86d4" id="footer-nxtwave-year-end-review" target="_blank" class="footer-link-3 track-button">NxtWave&#x27;23 Review</a></li><li class="link-menu-item-2"><a href="https://www.ccbp.in/blog/python-tutorial" id="footer-python-tutorial" class="footer-link-3 track-button">Python Tutorial</a></li></ul></div></div></div><div class="footer-menu-column-3 reachus email"><h6 class="h6-small-2">Payment Methods</h6><div class="div-block-1912"><div id="w-node-_0b7bf02e-928f-b167-4694-3955e233b0fb-5c75ea4e" class="payment-imgs w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/visa-icon.svg' alt='payment method' loading='lazy' /></div><div id="w-node-_23b5fcd5-3a03-fae3-7c63-7fc79f400fce-5c75ea4e" class="payment-imgs w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/master-card-icon.svg' alt='payment method' loading='lazy' /></div><div id="w-node-be142f15-7672-17ec-96b3-e3b98483875b-5c75ea4e" class="payment-imgs w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/payment-method-icon.svg' alt='payment method' loading='lazy' /></div><div id="w-node-dbb848d6-9043-4126-44db-01a50f818adb-5c75ea4e" class="payment-imgs w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/Razor-pay-icon.svg' alt='payment method' loading='lazy' /></div><div id="w-node-dfe2dbad-02ac-2352-0586-fdac016eb89c-5c75ea4e" class="payment-imgs w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/upi-icon.svg' alt='payment method' loading='lazy' /></div><div id="w-node-_03166f1d-fefc-c243-91ff-b32fd01e206e-5c75ea4e" class="payment-imgs w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/rupay-icon.svg' alt='payment method' loading='lazy' /></div></div><div class="div-block-1909"><div class="div-block-1831980521422"><div class="location-footer"></div></div><div><div class="text-block-851">NxtWave, WeWork Rajapushpa Summit, Nanakramguda Rd, Financial District, Manikonda Jagir, Telangana 500032</div></div></div></div></div></div><a href="/llm-info" class="link-186">Hey AI, learn about us</a><div class="div-block-1910"></div><div class="div-block-1907"><div class="div-block-1371"><a id="footer-facebook-profile-link" rel="nofollow" href="https://www.facebook.com/NxtWave-106729994530632/" target="_blank" class="link-block-45 track-button w-inline-block"><div class="image-762 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/facebook-icon.svg' alt='socal media' loading='lazy' /></div></a><a id="footer-instagram-profile-link" rel="nofollow" href="https://www.instagram.com/ccbp_nxtwave/" target="_blank" class="link-block-45 track-button w-inline-block"><div class="image-762 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/instgram-icon.svg' alt='socal media' loading='lazy' /></div></a><a id="footer-twitter-profile-link" rel="nofollow" href="https://twitter.com/nxtwave_tech" target="_blank" class="link-block-45 track-button w-inline-block"><div class="image-762 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/twitterimage.svg' alt='socal media' loading='lazy' /></div></a><a id="footer-linkedin-profile-link" rel="nofollow" href="https://www.linkedin.com/company/nxtwavetech" target="_blank" class="link-block-45 track-button w-inline-block"><div class="image-762 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/linkedin-icon.svg' alt='socal media' loading='lazy' /></div></a><a id="footer-youtube-profile-link" rel="nofollow" href="https://www.youtube.com/c/NxtWaveTech" target="_blank" class="link-block-43 track-button w-inline-block"><div class="image-762 w-embed"><img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/youtube-icon.svg' alt='socal media' loading='lazy' /></div></a></div><div class="footer-policy-container"><div class="div-block-183198052143944"><div class="footer-link-copy-2"><a href="https://www.ccbp.in/privacy-policy" id="footer-privacy-policy" class="link-73 track-button">PrivacyÂ Policy</a><br/></div><div class="cookies-footer"><a href="https://www.ccbp.in/cookie-policy" id="footer-cookie-policy" class="link-73 track-button">Cookie Policy</a><br/></div><div class="tnc-footer"><a href="https://www.ccbp.in/terms-and-conditions" id="footer-terms-and-conditions" class="link-73 track-button">Terms and Conditions</a><br/></div><div class="gr-footer"><a href="https://www.ccbp.in/grievance-redressal" id="footer-grievance-redressal" class="link-73 track-button">Grievance Redressal</a><br/></div><div class="gr-footer-copy-copy"><a href="https://www.ccbp.in/corporate-information" id="footer-corporate-information" class="link-73 track-button">Corporate Information</a><br/></div><div class="footer-link-copy-2 cookie-policy-mobile"><a href="https://www.ccbp.in/cookie-policy" id="footer-mobile-cookie-policy" class="link-73 track-button">Cookie Policy</a><br/></div><div id="footer-vision-and-value-statement" class="gr-footer-copy"><a href="https://www.ccbp.in/vision-and-values" id="footer-vision-and-value" class="link-87 track-button">Vision and Values</a><br/></div><div id="corporate-social-responsibility-policy" class="csr-policy w-node-_6b2acc65-fb30-7f26-a8b5-a875df865b50-5c75ea4e"><a href="/csr-policy" class="link-87 track-button">Corporate Social Responsibility Policy</a><br/></div></div></div></div><div class="div-block-1910"></div><div id="course-track"><h6 class="h6-small-2 course-tracks new">Course Tracks</h6><div class="div-block-183198052143954"><div class="div-block-183198052143957"><a id="software-training-institute-footer" href="/intensive/software-training-institute" target="_blank" class="link-110 size-h track-button">Software Training Institute</a></div><div class="div-block-183198052143957"><a id="footer-mern-stack-developer-course-track" href="https://www.ccbp.in/intensive/mern-stack-developer-course" class="link-110 size-h track-button">MERN Stack Developer course</a><div class="div-block-183198052143956"><div class="fsd-cites"><a id="footer-mer-stack-developer-course-hyderabad-track" href="/intensive/mern-stack-developer-course-in-hyderabad" class="link-110 size-p track-button">Hyderabad</a><div class="text-block-9412881958">|</div><a id="footer-mern-stack-developer-course-bangalore-track" href="/intensive/mern-stack-developer-course-in-bangalore" class="link-110 size-p track-button">Bangalore</a><div class="text-block-9412881958">|</div><a id="footer-mern-stack-developer-course-mumbai-track" href="/intensive/mern-stack-developer-course-in-mumbai" class="link-110 size-p track-button">Mumbai</a><div class="text-block-9412881958">|</div><a id="footer-mern-stack-developer-course-pune-track" href="/intensive/mern-stack-developer-course-in-pune" class="link-110 size-p track-button">Pune</a><div class="text-block-9412881958">|</div><a id="footer-mern-stack-developer-course-chennai-track" href="/intensive/mern-stack-developer-course-in-chennai" class="link-110 size-p track-button">Chennai</a></div></div></div><div class="div-block-183198052143957"><a id="footer-full-stack-developer-course-track" href="https://www.ccbp.in/intensive/full-stack-developer-course" class="link-110 size-h track-button">Full Stack Developer course</a><div class="div-block-183198052143956"><div class="fsd-cites"><a id="footer-full-stack-developer-course-hyderabad-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-hyderabad" class="link-110 size-p track-button">Hyderabad</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-bangalore-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-bangalore" class="link-110 size-p track-button">Bangalore</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-pune-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-pune" class="link-110 size-p track-button">Pune</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-mumbai-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-mumbai" class="link-110 size-p track-button">Mumbai</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-delhi-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-delhi" class="link-110 size-p track-button">Delhi</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-ahmedabad-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-ahmedabad" class="link-110 size-p track-button">Ahmedabad</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-coimbatore-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-coimbatore" class="link-110 size-p track-button">Coimbatore</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-chennai-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-chennai" class="link-110 size-p track-button">Chennai</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-chandigarh-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-chandigarh" class="link-110 size-p track-button">Chandigarh</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-noida-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-noida" class="link-110 size-p track-button">Noida</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-kolkata-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-kolkata" class="link-110 size-p track-button">Kolkata</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-kochi-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-kochi" class="link-110 size-p track-button">KochiÂ Â </a><div class="text-block-9412881958 ds-hide mb-hide">|</div><a id="footer-full-stack-developer-course-bhubaneswar-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-bhubaneswar" class="link-110 size-p track-button">Bhubaneswar</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-visakhapatnam-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-visakhapatnam" class="link-110 size-p track-button">Visakhapatnam</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-vijayawada-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-vijayawada" class="link-110 size-p track-button">Vijayawada</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-gurgaon-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-gurgaon" class="link-110 size-p track-button">Gurgaon</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-jaipur-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-jaipur" class="link-110 size-p track-button">JaipurÂ Â </a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-indore-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-indore" class="link-110 size-p track-button">Indore</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-kanpur-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-kanpur" class="link-110 size-p track-button">Kanpur</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-nagpur-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-nagpur" class="link-110 size-p track-button">Nagpur</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-madurai-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-madurai" class="link-110 size-p track-button">Madurai</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-bhopal-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-bhopal" class="link-110 size-p track-button">Bhopal</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-trivandrum-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-trivandrum" class="link-110 size-p track-button">Trivandrum</a><div class="text-block-9412881958 ds-hide">|</div><a id="footer-full-stack-developer-course-guwahati-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-guwahati" class="link-110 size-p track-button">Guwahati</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-patna-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-patna" class="link-110 size-p track-button">PatnaÂ Â </a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-aurangabad-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-aurangabad" class="link-110 size-p track-button">AurangabadÂ </a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-trichy-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-trichy" class="link-110 size-p track-button">Trichy Â </a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-full-stack-developer-course-salem-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-salem" class="link-110 size-p track-button">Salem</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-thane-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-thane" class="link-110 size-p track-button">Thane</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-kerala-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-kerala" class="link-110 size-p track-button">Kerala</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-mysore-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-mysore" class="link-110 size-p track-button">Mysore</a><div class="text-block-9412881958 mb-hide">|</div><div class="text-block-9412881958 ds-hide mb-hide">|</div><a id="footer-full-stack-developer-course-telugu-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-telugu" class="link-110 size-p track-button">Telugu</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-tamil-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-tamil" class="link-110 size-p track-button">Tamil</a><div class="text-block-9412881958">|</div><a id="footer-full-stack-developer-course-hindi-track" href="https://www.ccbp.in/intensive/full-stack-developer-course-in-hindi" class="link-110 size-p track-button">Hindi</a></div></div></div><div class="div-block-183198052143957"><a id="footer-data-analyst-course-track" href="https://www.ccbp.in/intensive/data-analyst-course" class="link-110 size-h track-button">Data Analytics course</a><div class="div-block-183198052144022"><div class="da-cities"><a id="footer-data-analytics-course-hyderabad-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-hyderabad" class="link-110 size-p track-button">Hyderabad</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-bangalore-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-bangalore" class="link-110 size-p track-button">Bangalore</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-pune-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-pune" class="link-110 size-p track-button">Pune</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-mumbai-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-mumbai" class="link-110 size-p track-button">Mumbai</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-delhi-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-delhi" class="link-110 size-p track-button">Delhi</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-chennai-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-chennai" class="link-110 size-p track-button">Chennai</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-kolkata-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-kolkata" class="link-110 size-p track-button">Kolkata</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-chandigarh-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-chandigarh" class="link-110 size-p track-button">Chandigarh</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-ahmedabad-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-ahmedabad" class="link-110 size-p track-button">Ahmedabad</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-coimbatore-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-coimbatore" class="link-110 size-p track-button">Coimbatore</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-gurgaon-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-gurgaon" class="link-110 size-p track-button">Gurgaon Â </a><div class="text-block-9412881958 ds-hide">|</div><a id="footer-data-analytics-course-noida-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-noida" class="link-110 size-p track-button">Noida</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-kerala-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-kerala" class="link-110 size-p track-button">Kerala</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-nagpur-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-nagpur" class="link-110 size-p track-button">Nagpur</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-indore-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-indore" class="link-110 size-p track-button">Indore</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-jaipur-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-jaipur" class="link-110 size-p track-button">Jaipur</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-lucknow-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-lucknow" class="link-110 size-p track-button">Lucknow</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-thane-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-thane" class="link-110 size-p track-button">Thane</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-bhopal-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-bhopal" class="link-110 size-p track-button">Bhopal</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-dehradun-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-dehradun" class="link-110 size-p track-button">Dehradun</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-bhubaneswar-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-bhubaneswar" class="link-110 size-p track-button">Bhubaneswar</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-mysore-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-mysore" class="link-110 size-p track-button">Mysore</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-vadodara-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-vadodara" class="link-110 size-p track-button">Vadodara</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-kanpur-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-kanpur" class="link-110 size-p track-button">Kanpur</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-trivandrum-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-trivandrum" class="link-110 size-p track-button">Trivandrum</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-surat-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-surat" class="link-110 size-p track-button">Surat</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-nashik-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-nashik" class="link-110 size-p track-button">NashikÂ  </a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-madurai-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-madurai" class="link-110 size-p track-button">Madurai Â Â </a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-patna-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-patna" class="link-110 size-p track-button">Patna</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-aurangabad-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-aurangabad" class="link-110 size-p track-button">Aurangabad</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-ghaziabad-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-ghaziabad" class="link-110 size-p track-button">Ghaziabad</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-meerut-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-meerut" class="link-110 size-p track-button">Meerut</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-guwahati-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-guwahati" class="link-110 size-p track-button">Guwahati</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-kolhapur-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-kolhapur" class="link-110 size-p track-button">Kolhapur</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-kochi-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-kochi" class="link-110 size-p track-button">Kochi</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-trichy-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-trichy" class="link-110 size-p track-button">Trichy</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-telugu-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-telugu" class="link-110 size-p track-button">Telugu</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-data-analytics-course-tamil-track" href="https://www.ccbp.in/intensive/data-analyst-course-in-tamil" class="link-110 size-p track-button">Tamil</a><div class="text-block-9412881958">|</div><a id="footer-data-analytics-course-hindi-track" href="https://www.ccbp.in/intensive/data-analyst-course/hindi" class="link-110 size-p track-button">Hindi</a></div></div></div><div class="div-block-183198052143957"><a id="footer-automtation-testing-course-track" href="https://www.ccbp.in/intensive/automation-testing-course" class="link-110 size-h track-button">QA / Automation Testing course</a><div class="div-block-183198052143956"><div class="div-block-183198052143955"><a id="footer-automation-testing-course-bangalore-track" href="https://www.ccbp.in/intensive/automation-testing-course-in-bangalore" class="link-110 size-p track-button">Bangalore</a><div class="text-block-9412881958">|</div><a id="footer-automation-testing-course-hyderabad-track" href="https://www.ccbp.in/intensive/automation-testing-course-in-hyderabad" class="link-110 size-p track-button">Hyderabad</a><div class="text-block-9412881958">|</div><a id="footer-automation-testing-course-chennai-track" href="https://www.ccbp.in/intensive/automation-testing-course-in-chennai" class="link-110 size-p track-button">Chennai</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-automation-testing-course-pune-track" href="https://www.ccbp.in/intensive/automation-testing-course-in-pune" class="link-110 size-p track-button">Pune</a><div class="text-block-9412881958">|</div><a id="footer-automation-testing-course-coimbatore-track" href="https://www.ccbp.in/intensive/automation-testing-course-in-coimbatore" class="link-110 size-p track-button">Coimbatore</a><div class="text-block-9412881958">|</div><a id="footer-automation-testing-course-noida-track" href="https://www.ccbp.in/intensive/automation-testing-course-in-noida" class="link-110 size-p track-button">Noida</a><div class="text-block-9412881958 mb-hide">|</div><a id="footer-automation-testing-course-telugu-track" href="https://www.ccbp.in/intensive/software-automation-testing-course-in-telugu" class="link-110 size-p track-button">Telugu</a><div class="text-block-9412881958">|</div><a id="footer-automation-testing-course-tamil-track" href="https://www.ccbp.in/intensive/software-automation-testing-course-in-tamil" class="link-110 size-p track-button">Tamil</a><div class="text-block-9412881958">|</div><a id="footer-automation-testing-course-hindi-track" href="https://www.ccbp.in/intensive/software-automation-testing-course-in-hindi" class="link-110 size-p track-button">Hindi</a></div></div></div></div></div></div></div></div><div id="chat-with-us-div" class="home-page-whatsappdiv intensive"><div id="chat-with-us-intensive" class="link-block-697 homepage track-button whatsapp-us-segment"><div class="text-block-941288240181">Chat with us</div><div class="html-embed-82705 w-embed"><img src="https://nxtwave.imgix.net/ccbp-website/Intensive+2.0/intensive-whatsapp-logo.png?auto=format,compress&q=80" width="48" height="48"></div></div></div><div id="view-academy-curriculum-form-popup" class="view-academy-curriculum-form-popup"><div class="div-block-1831980521448530"><div class="div-block-1831980521448531"><img id="closePopup" loading="lazy" alt="" src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/68baa6a7e5ea7e6552a331b8_650ade296238375baaa0ba39_x.png" class="closepopup"/></div><div class="div-block-1831980521448532"><div class="div-block-1831980521448533"><img sizes="(max-width: 479px) 100vw, 239.984375px, 100vw" srcset="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/68baa6a7e5ea7e6552a331bb_1935%2520(1)-p-500.png 500w, https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/68baa6a7e5ea7e6552a331bb_1935%20(1).png 590w" alt="" src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/68baa6a7e5ea7e6552a331bb_1935%20(1).png" loading="lazy" class="image-8128822503"/></div><div class="div-block-1831980521448529"><h4 class="heading-3671133">Download Curriculum Now!</h4><div id="download-intensive-curriculum"></div></div></div><div class="waiting-card"><h4 class="heading-3671134">Downloading Curriculum</h4><img loading="lazy" src="https://cdn.prod.website-files.com/67ed1b422e8485c813e183d7/67ed1b422e8485c813e1a38d_download-03.svg" alt=""/><a id="clickhere-link" href="#" target="_blank" class="clickhere-link">click here</a></div></div></div><!-- DISABLED: Webflow form scripts that caused error modal - using custom form instead -->
    <!-- <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fa61cbbf0d432b3230f62b1" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"><\/script> -->
    <!-- <script src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.e0c428ff9737f919.js" type="text/javascript" integrity="sha384-ar82P9eriV3WGOD8Lkag3kPxxkFE9GSaSPalaC0MRlR/5aACGoFQNfyqt0dNuYvt" crossorigin="anonymous"><\/script> -->
    <!-- <script src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.de644438c202300b.js" type="text/javascript" integrity="sha384-DdVxPjTKzP3HCBiHvaBTGzLtqmI/SKmT9ucguZiwgfevmBcoAWXTy1ght4cyUnVq" crossorigin="anonymous"><\/script> -->
    <!-- <script src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.1a1ee8e2.aee8c20b60a57432.js" type="text/javascript" integrity="sha384-Vn4K1MfkrEGOxgxPlRH5qtDb9Qq0FRPtMSaBQZrh5S0Xtl+GiY7tD/aDh411ZERq" crossorigin="anonymous"><\/script> -->
        
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe rel="nofollow" src="https://www.googletagmanager.com/ns.html?id=GTM-KPFWFTR"         
    height="0" width="0" style="display:none;visibility:hidden">
    </iframe>
    </noscript>


    <script defer>
  function cookieRun(cookieDivEl, okBtnEl) {
    var cookieKey = 'jSiq8H2QV2';
    
    if (typeof Cookies !== 'undefined') {
      if (Cookies.get(cookieKey) !== undefined) {
        cookieDivEl.style.display = "none";
      }

      if (okBtnEl) {
        okBtnEl.onclick = function() {
          if (Cookies.get(cookieKey) === undefined) {
            Cookies.set(cookieKey, 'true', { expires: 30 });
          }
        };
      }

    } else {
      console.warn("Cookies library not available. Skipping cookie logic.");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var cookieDivEl = document.getElementById("modal2");
    var okBtnEl = document.getElementById("close-modal2");

    if (cookieDivEl && okBtnEl) {
      cookieRun(cookieDivEl, okBtnEl);
    }
  });
    <\/script>
   <script defer>
document.addEventListener('DOMContentLoaded', () => {
  // Select all anchors with an href attribute that contains "ccbp.in"
  const anchors = document.querySelectorAll('a[href*="ccbp.in"]');

  // Loop through the selected anchors
  for (const anchor of anchors) {
    // Set the referrer policy for the anchor to "no-referrer-when-downgrade"
    anchor.referrerPolicy = 'no-referrer-when-downgrade';
  }
});
<\/script>

<script>
const blockedIPs = [
  "103.172.179.82","103.172.179.83","103.172.179.84","103.172.179.85",
  "45.249.76.98","45.249.76.99","45.249.76.100","45.249.76.101",
  "45.249.76.102","45.249.76.103","45.249.76.104","45.249.76.105",
  "45.249.76.106","45.249.76.107","45.249.76.108","45.249.76.109",
  "103.77.26.50","103.77.26.51","103.77.26.52","103.77.26.53",
  "103.42.251.98","103.42.251.99","103.42.251.100","103.42.251.101",
  "111.93.17.114","111.93.17.115","111.93.17.116","111.93.17.117",
  "103.172.179.81","103.172.179.86","45.249.76.97","45.249.76.110",
  "103.77.26.49","103.77.26.54","103.42.251.97","103.42.251.102",
  "111.93.17.113", "111.93.17.118"
];

fetch("https://api64.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const userIp = data.ip;
    console.log("Visitor IP:", userIp);

    if (!blockedIPs.includes(userIp)) {
      console.log("âœ… Allowed â†’ Loading Convertful");
      const script = document.createElement("script");
      script.src = "https://app.convertful.com/Convertful.js?owner=82067";
      document.head.appendChild(script);
    } else {
      console.log("ðŸš« Blocked Convertful for IP:", userIp);
    }
  })
  .catch(err => {
    console.error("âš ï¸ IP check failed, not loading Convertful", err);
  });
<\/script>



<!--<script type="module" src=https://forms.ccbp.in/webflow/runtime.04a87b6ca23119ec.js><\/script>
<script type="module" src=https://forms.ccbp.in/webflow/polyfills.1d5f1fd314a77b8e.js><\/script>
<script type="module" src=https://forms.ccbp.in/webflow/bookAFreeDemo.6625763167140730.js><\/script>
<script type="module" src=https://forms.ccbp.in/webflow/techIntensiveDownloadCurriculum.3af1e68df6602c0f.js><\/script>
-->
<script type="module" src=https://forms.ccbp.in/webflow/runtime.7ade6786083c3cdb.js><\/script>
<script type="module" src=https://forms.ccbp.in/webflow/polyfills.22b45ce383b6ed1d.js><\/script>
<script type="module" src=https://forms.ccbp.in/webflow/bookAFreeDemo.93619acbbc6cdbad.js><\/script>
<script type="module" src=https://forms.ccbp.in/webflow/techIntensiveDownloadCurriculum.166c75ca908a2657.js><\/script>
<script>

document.addEventListener("DOMContentLoaded", () => {
  const curriculumUrls = {
  "fundamentals-curriculum": "nxtwave-intensive-2.0/fundamentals-curriculum-intensive",
  "mern-fullstack-curriculum-intensive": "nxtwave-intensive-2.0/mern-fullstack-curriculum-intensive",
  "java-fullstack-curriculum": "intensive/java-fullstack-curriculum",
  "qa-testing-curriculum-intensive": "nxtwave-intensive-2.0/qa-testing-curriculum-intensive-v2",
  "data-analytics": "nxtwave-intensive-2.0/data-analytics-intensive-curriculum"
};
let curriculumKey;
  const popup = document.getElementById("view-academy-curriculum-form-popup");
  const closeBtn = document.getElementById("closePopup");

  document.querySelectorAll('[popup="true"]').forEach(trigger => {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      curriculumKey = trigger.getAttribute("view-curriculum");
      const isLoggedIn = JSON.parse(
  sessionStorage.getItem(\`is_logged_in_\`) || "false"
);

    if (isLoggedIn) {
      const url = \`https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/\${curriculumUrls[curriculumKey]}.pdf\`;
      window.open(url, "_blank");
    } else {
      popup.style.display = 'flex';
      document.body.style.overflow = "hidden";  
      document.querySelector(".learn_wrapper").style.zIndex = "-1";
      document.querySelector(".slider-398").style.zIndex = "-1";
      document.querySelector(".slider-399").style.zIndex = "-1";
  // close popup
    if (closeBtn) {
    closeBtn.addEventListener("click", () => {
     popup.style.display = 'none';
      document.body.style.overflow = "";
      document.querySelector(".learn_wrapper").style.zIndex = "1";
      document.querySelector(".slider-398").style.zIndex = "1";
      document.querySelector(".slider-399").style.zIndex = "1";     
    });
  }
}
    });
  });
  window.addEventListener("message", (event) => {
  
  if (event.data.type === "PUBLIC_FORM_SUBMISSION_SUCCESS") {
    const url = \`https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/\${curriculumUrls[curriculumKey]}.pdf\`;
      window.open(url, "_blank");
  document.querySelector(".waiting-card").style.display ='flex';
   const linkh = document.querySelector(".clickhere-link");
     linkh.href = \`https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/\${curriculumUrls[curriculumKey]}.pdf\`;
 sessionStorage.setItem(
  \`is_logged_in_\`,
  JSON.stringify(true)
);

   setTimeout(() => {
    popup.style.display = 'none';
     document.querySelector(".learn_wrapper").style.zIndex = "1";
     document.querySelector(".slider-398").style.zIndex = "1";
     document.querySelector(".slider-399").style.zIndex = "1";
     document.body.style.overflow = "";

}, 5000);
  }
});

});

<\/script>


    
   





<!--



-->




















`;function jf(){return j.jsx(j.Fragment,{children:ve(Rf)})}function Lf(){return j.jsxs(j.Fragment,{children:[j.jsx(yf,{}),j.jsx(xf,{}),j.jsx(qf,{}),j.jsx(Sf,{}),j.jsx(Ef,{}),j.jsx(Nf,{}),j.jsx(If,{}),j.jsx(jf,{})]})}const Mf=`\uFEFF----- SCRIPT 1 -----\r
WebFont.load({  google: {    families: ["Droid Sans:400,700","Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Exo:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Anton:300,400,500,600,700","Caveat:300,400,500,600,700","DM Sans:300,400,500,600,700","Dela Gothic One:300,400,500,600,700","Figtree:300,400,500,600,700","Handjet:300,400,500,600,700","Inter:300,400,500,600,700","Inter:300,400,500,600,700","Kalam:300,400,500,600,700","Orbitron:300,400,500,600,700","Outfit:300,400,500,600,700","Plus Jakarta Sans:300,400,500,600,700","Source Code Pro:300,400,500,600,700"]  }});\r
\r
----- SCRIPT 2 -----\r
try{Typekit.load();}catch(e){}\r
\r
----- SCRIPT 3 -----\r
!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);\r
\r
----- SCRIPT 4 -----\r
function shouldForwardQueryParams() {
    return document.location.search.substring(1) !== ''
}

function forwardQueryParams() {
    if(shouldForwardQueryParams()) {
        var destinationDomains;
        var joinDemoURL = window.location.toString().includes("intensive-ad")
        if (joinDemoURL) {
            destinationDomains = ['forms.ccbp.in','www.ccbp.in', 'accounts.ccbp.in', 'nxtwave.freshteam.com','www.niatindia.com', 'apply.niatindia.com']
        } 
        else {
            destinationDomains = ['forms.ccbp.in','www.ccbp.in', 'accounts.ccbp.in', 'nxtwave.freshteam.com','www.niatindia.com', 'apply.niatindia.com']
        }

        var currentLocationParams = new URLSearchParams(
            document.location.search.substring(1)
        )
        const queryParams = [
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_content',
            'invite_code',
        ]
        var links = document.querySelectorAll('a')
  for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
    var currentLinkElement = links[linkIndex]
    var linkURL = currentLinkElement.href
    try { 
      linkURL = new URL(linkURL)
      if (destinationDomains.includes(linkURL.host)) {
        var linkSearchParams = new URLSearchParams(linkURL.search.substring(1))
        for (
          var queryParamIndex = 0;
          queryParamIndex < queryParams.length;
          queryParamIndex++
        ) {
          var queryParam = queryParams[queryParamIndex]
          if (
            !linkSearchParams.has(queryParam) &&
            currentLocationParams.has(queryParam)
          ) {
            linkSearchParams.append(
              queryParam,
              currentLocationParams.get(queryParam)
            )
          }
        }
        linkURL.search = '?' + linkSearchParams.toString()
        currentLinkElement.href = linkURL.toString()
      }
    } catch (e) {
      console.log('Linkurl', linkURL, e.message)
    }
  }
    }
}\r
\r
----- SCRIPT 5 -----\r
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            
    new Date().getTime(),event:'gtm.js'});let f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KPFWFTR');\r
\r
----- SCRIPT 6 -----\r
/* Whatsapp Bot */
    function getLegitUTMParams() {
      const queryParams = new Set([
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "invite_code",
      ]);
      const currentLocationParams = new URLSearchParams(document.location.search);
      const validUTMs = {};
      queryParams.forEach((queryParam) => {
      if (currentLocationParams.has(queryParam)) {
        validUTMs[queryParam] = currentLocationParams.get(queryParam);
      }
    });
      return validUTMs;
    }
    var NonPrintableCoder = {
      NON_PRINTABLES: ["\\u200b", "\\u200c", "\\u200d", "\\u200e"],
      SEPARATOR: "\\u200f",
      encode: function(str) {
        var base = this.NON_PRINTABLES.length;
        var output = "";
 
        for (var i = 0; i < str.length; i++) {
            var num = str.charCodeAt(i);
            var encodedChar = "";
            while (num > 0) {
                encodedChar = this.NON_PRINTABLES[num % base] + encodedChar;
                num = Math.floor(num / base);
            }
            output += encodedChar + this.SEPARATOR;
        }
 
        return output;
    },
    };
    function combineUTMParams(params) {
      return Object.keys(params)
        .map(
          (key) => \`\${encodeURIComponent(key)}:\${encodeURIComponent(params[key])}\`
        )
        .join("|");
    }\r
\r
----- SCRIPT 7 -----\r
const utmParams = getLegitUTMParams();
  const combinedUTM = combineUTMParams(utmParams);
  const encodedUTM = NonPrintableCoder.encode(combinedUTM);\r
\r
----- SCRIPT 8 -----\r
jQuery(function($) {
        var $showMoreUpgrades = $('.show-more-upgrades'); // Button container class
        var $upgradesContainer2 = $('.upgrades-container-2'); // The container to show/hide
        var $downArrow = $('.down-arrow-icon'); // Icon class within button container
        var $hideShowText = $('.hide-show-txt'); // Text class within button container

        $showMoreUpgrades.click(function() {
            // Toggle 'open' class to change state
            $(this).toggleClass('open');
            
            // Check if the container is now 'open'
            if ($(this).hasClass('open')) {
                // If now open, show container and change text and icon
                $upgradesContainer2.slideDown(400);
                $downArrow.css({
                    transform: 'rotate(180deg)',
                    transition: 'all 0.4s ease'
                });
                $hideShowText.text("Hide All Upgrades");
            } else {
                // If not open, hide container and revert text and icon
                $upgradesContainer2.slideUp(400);
                $downArrow.css({
                    transform: 'rotate(0deg)',
                    transition: 'all 0.4s ease'
                });
                $hideShowText.text("Show All Upgrades");
            }
        });
    });\r
\r
----- SCRIPT 9 -----\r
jQuery(function ($) {
var $question = $('.faq-q-icon-container'); //question and icon container class
      var $answer = $('.faq-ans'); //paragraph container class
      var $icon = $('.icon-14') // icon class which is in question icon cotainer
      
        $question.click(function(){
            $answer.slideUp(600) 		// Hide all answers
        
            // Check if this answer is already open
            if($(this).hasClass('open')){
                // If already open, remove 'open' class and hide answer
                $(this).removeClass('open')
                        .next($answer).slideUp(400)
    // transforms icon 
                $(this).find(".icon-14").css({
           transform: 'rotate(0deg)',
                    transition: 'all 0.4s ease'
          })
                              
            // If it is not open...
            }else{
                // Remove 'open' class from all other questions
                $question.removeClass('open')
    // transforms icon 
          $question.find(".icon-14").css({
           transform: 'rotate(0deg)',
                    transition: 'all 0.4s ease'
          })
    
                // Open this answer and add 'open' class
                
                $(this).addClass('open')
                    .next($answer).slideDown(400)
    // transforms icon 
                $(this).find(".icon-14").css({
            transform: 'rotate(180deg)',
                    transition: 'all 0.4s ease'
          })
                
                       
                         
            }
        });
    
    });\r
\r
----- SCRIPT 10 -----\r
function cookieRun(cookieDivEl, okBtnEl) {
    var cookieKey = 'jSiq8H2QV2';
    
    if (typeof Cookies !== 'undefined') {
      if (Cookies.get(cookieKey) !== undefined) {
        cookieDivEl.style.display = "none";
      }

      if (okBtnEl) {
        okBtnEl.onclick = function() {
          if (Cookies.get(cookieKey) === undefined) {
            Cookies.set(cookieKey, 'true', { expires: 30 });
          }
        };
      }

    } else {
      console.warn("Cookies library not available. Skipping cookie logic.");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var cookieDivEl = document.getElementById("modal2");
    var okBtnEl = document.getElementById("close-modal2");

    if (cookieDivEl && okBtnEl) {
      cookieRun(cookieDivEl, okBtnEl);
    }
  });\r
\r
----- SCRIPT 11 -----\r
document.addEventListener('DOMContentLoaded', () => {
  // Select all anchors with an href attribute that contains "ccbp.in"
  const anchors = document.querySelectorAll('a[href*="ccbp.in"]');

  // Loop through the selected anchors
  for (const anchor of anchors) {
    // Set the referrer policy for the anchor to "no-referrer-when-downgrade"
    anchor.referrerPolicy = 'no-referrer-when-downgrade';
  }
});\r
\r
----- SCRIPT 12 -----\r
const blockedIPs = [
  "103.172.179.82","103.172.179.83","103.172.179.84","103.172.179.85",
  "45.249.76.98","45.249.76.99","45.249.76.100","45.249.76.101",
  "45.249.76.102","45.249.76.103","45.249.76.104","45.249.76.105",
  "45.249.76.106","45.249.76.107","45.249.76.108","45.249.76.109",
  "103.77.26.50","103.77.26.51","103.77.26.52","103.77.26.53",
  "103.42.251.98","103.42.251.99","103.42.251.100","103.42.251.101",
  "111.93.17.114","111.93.17.115","111.93.17.116","111.93.17.117",
  "103.172.179.81","103.172.179.86","45.249.76.97","45.249.76.110",
  "103.77.26.49","103.77.26.54","103.42.251.97","103.42.251.102",
  "111.93.17.113", "111.93.17.118"
];

fetch("https://api64.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const userIp = data.ip;
    console.log("Visitor IP:", userIp);

    if (!blockedIPs.includes(userIp)) {
      console.log("âœ… Allowed â†’ Loading Convertful");
      const script = document.createElement("script");
      script.src = "https://app.convertful.com/Convertful.js?owner=82067";
      document.head.appendChild(script);
    } else {
      console.log("ðŸš« Blocked Convertful for IP:", userIp);
    }
  })
  .catch(err => {
    console.error("âš ï¸ IP check failed, not loading Convertful", err);
  });\r
\r
----- SCRIPT 13 -----\r
document.addEventListener("DOMContentLoaded", () => {
  const curriculumUrls = {
  "fundamentals-curriculum": "nxtwave-intensive-2.0/fundamentals-curriculum-intensive",
  "mern-fullstack-curriculum-intensive": "nxtwave-intensive-2.0/mern-fullstack-curriculum-intensive",
  "java-fullstack-curriculum": "intensive/java-fullstack-curriculum",
  "qa-testing-curriculum-intensive": "nxtwave-intensive-2.0/qa-testing-curriculum-intensive-v2",
  "data-analytics": "nxtwave-intensive-2.0/data-analytics-intensive-curriculum"
};
let curriculumKey;
  const popup = document.getElementById("view-academy-curriculum-form-popup");
  const closeBtn = document.getElementById("closePopup");

  document.querySelectorAll('[popup="true"]').forEach(trigger => {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      curriculumKey = trigger.getAttribute("view-curriculum");
      const isLoggedIn = JSON.parse(
  sessionStorage.getItem(\`is_logged_in_\`) || "false"
);

    if (isLoggedIn) {
      const url = \`https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/\${curriculumUrls[curriculumKey]}.pdf\`;
      window.open(url, "_blank");
    } else {
      popup.style.display = 'flex';
      document.body.style.overflow = "hidden";  
      document.querySelector(".learn_wrapper").style.zIndex = "-1";
      document.querySelector(".slider-398").style.zIndex = "-1";
      document.querySelector(".slider-399").style.zIndex = "-1";
  // close popup
    if (closeBtn) {
    closeBtn.addEventListener("click", () => {
     popup.style.display = 'none';
      document.body.style.overflow = "";
      document.querySelector(".learn_wrapper").style.zIndex = "1";
      document.querySelector(".slider-398").style.zIndex = "1";
      document.querySelector(".slider-399").style.zIndex = "1";     
    });
  }
}
    });
  });
  window.addEventListener("message", (event) => {
  
  if (event.data.type === "PUBLIC_FORM_SUBMISSION_SUCCESS") {
    const url = \`https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/\${curriculumUrls[curriculumKey]}.pdf\`;
      window.open(url, "_blank");
  document.querySelector(".waiting-card").style.display ='flex';
   const linkh = document.querySelector(".clickhere-link");
     linkh.href = \`https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/\${curriculumUrls[curriculumKey]}.pdf\`;
 sessionStorage.setItem(
  \`is_logged_in_\`,
  JSON.stringify(true)
);

   setTimeout(() => {
    popup.style.display = 'none';
     document.querySelector(".learn_wrapper").style.zIndex = "1";
     document.querySelector(".slider-398").style.zIndex = "1";
     document.querySelector(".slider-399").style.zIndex = "1";
     document.body.style.overflow = "";

}, 5000);
  }
});

});\r
\r
----- SCRIPT 14 -----\r
forwardQueryParams()
window.addEventListener('load', (event) => {
    forwardQueryParams()

});
document.addEventListener('readystatechange', event => {
   if (event.target.readyState === 'complete') {
   forwardQueryParams()
  
  }
});\r
\r
----- SCRIPT 15 -----\r
//Mouse scroll animation
       const floatingButtonwhatsppbutton = document.getElementById("chat-with-us-div");
    //  const cookiediv = document.getElementById("modal2");

function pageScroll(){
   if(screen.width<480)
      {
  if (window.pageYOffset > 1500) {
      floatingButtonwhatsppbutton.style.display = "flex";
   
   //  cookiediv.style.position="fixed";
     // cookiediv.style.bottom="10%";
    
  }
  else{
      floatingButtonwhatsppbutton.style.display = "none";
      // cookiediv.style.position="fixed";
    //  cookiediv.style.bottom="0%"; 
 
  }
}
}
window.addEventListener("scroll", () => pageScroll());\r
\r
----- SCRIPT 16 -----\r
let popupObjects = [
{
  'event': 'popup_visit',
  'popup_id':'f66330cecd393',
  'popup_name': 'book_a_slot_popup',
},
{
  'event': 'popup_visit',
  'popup_id':'d555562c27fe6',
  'popup_name': 'scholarship_popup_organic',
},
]


let uniqueInterval = setInterval(()=>{
var numItems = $("#modelBackdrip").length;
if(numItems === 1){
clearInterval(uniqueInterval)


let popid = document.getElementById("modelBackdrip").getAttribute("data-poptin-id")

  popupObjects.forEach(Element => {
    if(Element.popup_id === popid){
    window.dataLayer.push(Element)
    }
  })

}

},1000)

// give attribute "[data-sectionid]" to sections which you want to trace the data 


let lastY = 0;
const targetElements = document.querySelectorAll('[data-sectionid]');
const options = { root: null, rootMargin: "-30%" };

try {
  targetElements.forEach(targetElement => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionid = entry.target.closest('[data-sectionid]').id;

          if (entry.boundingClientRect.y < lastY) {
            dataLayer.push({
              'event': 'section_viewed',
              'section_id': sectionid,
              'scroll_direction': \`bottom_to_top\`
            });
          } else {
            dataLayer.push({
              'event': 'section_viewed',
              'section_id': sectionid,
              'scroll_direction': \`top_to_bottom\`
            });
          }
        }
      });
    }, options);
    observer.observe(targetElement);
  });
} catch (error) {
  console.error('An error occurred:', error);
}\r
\r
----- SCRIPT 17 -----\r
let messageToCombineInWhatsapp = "Hi"
let encodebotelement = document.getElementById("chat-with-us-intensive");
//let urlforencodebotelement = "https://forms.ccbp.in/public/form/whatsapp-us-have-a-query"
let urlforencodebotelement = "https://wa.me/918688815840?text="+encodeURIComponent(messageToCombineInWhatsapp + encodedUTM);
encodebotelement.addEventListener('click',()=>{
window.open(urlforencodebotelement, "_blank");
})\r
\r
----- SCRIPT 18 -----\r
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-content-cont').forEach(parent => {
    const swiperEl = parent.querySelector('.swiper');
    const nextBtn = parent.querySelector('.right-button');
    const prevBtn = parent.querySelector('.left-button');
    const slides = swiperEl.querySelectorAll('.swiper-slide');

    if (slides.length < 4) {
      nextBtn.style.display = 'none';
      prevBtn.style.display = 'none';
    } else {
      new Swiper(swiperEl, {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        navigation: { nextEl: nextBtn, prevEl: prevBtn },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    }
  });
});\r
\r
\r
`,Af=["https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fa61cbbf0d432b3230f62b1","https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.e0c428ff9737f919.js","https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.schunk.de644438c202300b.js","https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/js/ccbp-4-0-technical-intensive-project.1a1ee8e2.aee8c20b60a57432.js"],Df=["https://forms.ccbp.in/webflow/runtime.7ade6786083c3cdb.js","https://forms.ccbp.in/webflow/polyfills.22b45ce383b6ed1d.js","https://forms.ccbp.in/webflow/bookAFreeDemo.93619acbbc6cdbad.js","https://forms.ccbp.in/webflow/techIntensiveDownloadCurriculum.166c75ca908a2657.js"];function Ff(e){return e.split(/----- SCRIPT \d+ -----/g).map(n=>n.trim()).filter(Boolean)}function Hc(e,n={}){return new Promise((i,a)=>{const t=document.createElement("script");t.src=e,t.async=!1,n.type&&(t.type=n.type),t.onload=()=>i(),t.onerror=()=>a(new Error(`Failed to load ${e}`)),document.body.appendChild(t)})}function Uc(e){e.forEach(n=>{const i=document.createElement("script");i.text=n,document.body.appendChild(i)})}function Of(){return ra.useEffect(()=>{let e=!1;return(async()=>{try{const i=Ff(Mf),a=i.slice(7,9),t=i.slice(9);Uc(a);for(const s of Af){if(e)return;await Hc(s)}for(const s of Df){if(e)return;await Hc(s,{type:"module"})}if(e)return;Uc(t)}catch(i){console.error(i)}})(),()=>{e=!0}},[]),null}function Wf(){return j.jsxs(j.Fragment,{children:[j.jsx(Lf,{}),j.jsx(Of,{})]})}const Bf=ap(document.getElementById("root"));Bf.render(j.jsx(Wf,{}));
