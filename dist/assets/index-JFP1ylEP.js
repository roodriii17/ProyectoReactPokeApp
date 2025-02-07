import{useNavigate as _c,Navigate as bT,Link as Eo,useParams as LT,BrowserRouter as MT,Routes as FT,Route as po}from"react-router-dom";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function UT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function jT(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var o=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return r[s]}})}),t}var fd={exports:{}},xa={},pd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function zT(){if(_g)return ke;_g=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,H={};function $(V,W,he){this.props=V,this.context=W,this.refs=H,this.updater=he||x}$.prototype.isReactComponent={},$.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},$.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function le(){}le.prototype=$.prototype;function pe(V,W,he){this.props=V,this.context=W,this.refs=H,this.updater=he||x}var ge=pe.prototype=new le;ge.constructor=pe,j(ge,$.prototype),ge.isPureReactComponent=!0;var Ee=Array.isArray,Me=Object.prototype.hasOwnProperty,ce={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(V,W,he){var Re,Pe={},Ne=null,Fe=null;if(W!=null)for(Re in W.ref!==void 0&&(Fe=W.ref),W.key!==void 0&&(Ne=""+W.key),W)Me.call(W,Re)&&!N.hasOwnProperty(Re)&&(Pe[Re]=W[Re]);var ze=arguments.length-2;if(ze===1)Pe.children=he;else if(1<ze){for(var He=Array(ze),vt=0;vt<ze;vt++)He[vt]=arguments[vt+2];Pe.children=He}if(V&&V.defaultProps)for(Re in ze=V.defaultProps,ze)Pe[Re]===void 0&&(Pe[Re]=ze[Re]);return{$$typeof:r,type:V,key:Ne,ref:Fe,props:Pe,_owner:ce.current}}function R(V,W){return{$$typeof:r,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function P(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(he){return W[he]})}var k=/\/+/g;function I(V,W){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):W.toString(36)}function ee(V,W,he,Re,Pe){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Fe=!1;if(V===null)Fe=!0;else switch(Ne){case"string":case"number":Fe=!0;break;case"object":switch(V.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=V,Pe=Pe(Fe),V=Re===""?"."+I(Fe,0):Re,Ee(Pe)?(he="",V!=null&&(he=V.replace(k,"$&/")+"/"),ee(Pe,W,he,"",function(vt){return vt})):Pe!=null&&(D(Pe)&&(Pe=R(Pe,he+(!Pe.key||Fe&&Fe.key===Pe.key?"":(""+Pe.key).replace(k,"$&/")+"/")+V)),W.push(Pe)),1;if(Fe=0,Re=Re===""?".":Re+":",Ee(V))for(var ze=0;ze<V.length;ze++){Ne=V[ze];var He=Re+I(Ne,ze);Fe+=ee(Ne,W,he,He,Pe)}else if(He=C(V),typeof He=="function")for(V=He.call(V),ze=0;!(Ne=V.next()).done;)Ne=Ne.value,He=Re+I(Ne,ze++),Fe+=ee(Ne,W,he,He,Pe);else if(Ne==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Fe}function ne(V,W,he){if(V==null)return V;var Re=[],Pe=0;return ee(V,Re,"","",function(Ne){return W.call(he,Ne,Pe++)}),Re}function we(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(he){(V._status===0||V._status===-1)&&(V._status=1,V._result=he)},function(he){(V._status===0||V._status===-1)&&(V._status=2,V._result=he)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var U={current:null},q={transition:null},ie={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:q,ReactCurrentOwner:ce};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:ne,forEach:function(V,W,he){ne(V,function(){W.apply(this,arguments)},he)},count:function(V){var W=0;return ne(V,function(){W++}),W},toArray:function(V){return ne(V,function(W){return W})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ke.Component=$,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=pe,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,ke.act=Z,ke.cloneElement=function(V,W,he){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=j({},V.props),Pe=V.key,Ne=V.ref,Fe=V._owner;if(W!=null){if(W.ref!==void 0&&(Ne=W.ref,Fe=ce.current),W.key!==void 0&&(Pe=""+W.key),V.type&&V.type.defaultProps)var ze=V.type.defaultProps;for(He in W)Me.call(W,He)&&!N.hasOwnProperty(He)&&(Re[He]=W[He]===void 0&&ze!==void 0?ze[He]:W[He])}var He=arguments.length-2;if(He===1)Re.children=he;else if(1<He){ze=Array(He);for(var vt=0;vt<He;vt++)ze[vt]=arguments[vt+2];Re.children=ze}return{$$typeof:r,type:V.type,key:Pe,ref:Ne,props:Re,_owner:Fe}},ke.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},ke.createElement=S,ke.createFactory=function(V){var W=S.bind(null,V);return W.type=V,W},ke.createRef=function(){return{current:null}},ke.forwardRef=function(V){return{$$typeof:d,render:V}},ke.isValidElement=D,ke.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:we}},ke.memo=function(V,W){return{$$typeof:v,type:V,compare:W===void 0?null:W}},ke.startTransition=function(V){var W=q.transition;q.transition={};try{V()}finally{q.transition=W}},ke.unstable_act=Z,ke.useCallback=function(V,W){return U.current.useCallback(V,W)},ke.useContext=function(V){return U.current.useContext(V)},ke.useDebugValue=function(){},ke.useDeferredValue=function(V){return U.current.useDeferredValue(V)},ke.useEffect=function(V,W){return U.current.useEffect(V,W)},ke.useId=function(){return U.current.useId()},ke.useImperativeHandle=function(V,W,he){return U.current.useImperativeHandle(V,W,he)},ke.useInsertionEffect=function(V,W){return U.current.useInsertionEffect(V,W)},ke.useLayoutEffect=function(V,W){return U.current.useLayoutEffect(V,W)},ke.useMemo=function(V,W){return U.current.useMemo(V,W)},ke.useReducer=function(V,W,he){return U.current.useReducer(V,W,he)},ke.useRef=function(V){return U.current.useRef(V)},ke.useState=function(V){return U.current.useState(V)},ke.useSyncExternalStore=function(V,W,he){return U.current.useSyncExternalStore(V,W,he)},ke.useTransition=function(){return U.current.useTransition()},ke.version="18.3.1",ke}var Eg;function il(){return Eg||(Eg=1,pd.exports=zT()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function BT(){if(wg)return xa;wg=1;var r=il(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,g,v){var E,T={},C=null,x=null;v!==void 0&&(C=""+v),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(x=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(d&&d.defaultProps)for(E in g=d.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:d,key:C,ref:x,props:T,_owner:o.current}}return xa.Fragment=t,xa.jsx=h,xa.jsxs=h,xa}var Tg;function $T(){return Tg||(Tg=1,fd.exports=BT()),fd.exports}var Q=$T(),Ze=il(),ku={},md={exports:{}},Xt={},gd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function qT(){return Ig||(Ig=1,function(r){function e(q,ie){var Z=q.length;q.push(ie);e:for(;0<Z;){var V=Z-1>>>1,W=q[V];if(0<o(W,ie))q[V]=ie,q[Z]=W,Z=V;else break e}}function t(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var ie=q[0],Z=q.pop();if(Z!==ie){q[0]=Z;e:for(var V=0,W=q.length,he=W>>>1;V<he;){var Re=2*(V+1)-1,Pe=q[Re],Ne=Re+1,Fe=q[Ne];if(0>o(Pe,Z))Ne<W&&0>o(Fe,Pe)?(q[V]=Fe,q[Ne]=Z,V=Ne):(q[V]=Pe,q[Re]=Z,V=Re);else if(Ne<W&&0>o(Fe,Z))q[V]=Fe,q[Ne]=Z,V=Ne;else break e}}return ie}function o(q,ie){var Z=q.sortIndex-ie.sortIndex;return Z!==0?Z:q.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var g=[],v=[],E=1,T=null,C=3,x=!1,j=!1,H=!1,$=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(q){for(var ie=t(v);ie!==null;){if(ie.callback===null)s(v);else if(ie.startTime<=q)s(v),ie.sortIndex=ie.expirationTime,e(g,ie);else break;ie=t(v)}}function Ee(q){if(H=!1,ge(q),!j)if(t(g)!==null)j=!0,we(Me);else{var ie=t(v);ie!==null&&U(Ee,ie.startTime-q)}}function Me(q,ie){j=!1,H&&(H=!1,le(S),S=-1),x=!0;var Z=C;try{for(ge(ie),T=t(g);T!==null&&(!(T.expirationTime>ie)||q&&!P());){var V=T.callback;if(typeof V=="function"){T.callback=null,C=T.priorityLevel;var W=V(T.expirationTime<=ie);ie=r.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&s(g),ge(ie)}else s(g);T=t(g)}if(T!==null)var he=!0;else{var Re=t(v);Re!==null&&U(Ee,Re.startTime-ie),he=!1}return he}finally{T=null,C=Z,x=!1}}var ce=!1,N=null,S=-1,R=5,D=-1;function P(){return!(r.unstable_now()-D<R)}function k(){if(N!==null){var q=r.unstable_now();D=q;var ie=!0;try{ie=N(!0,q)}finally{ie?I():(ce=!1,N=null)}}else ce=!1}var I;if(typeof pe=="function")I=function(){pe(k)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=k,I=function(){ne.postMessage(null)}}else I=function(){$(k,0)};function we(q){N=q,ce||(ce=!0,I())}function U(q,ie){S=$(function(){q(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_continueExecution=function(){j||x||(j=!0,we(Me))},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(q){switch(C){case 1:case 2:case 3:var ie=3;break;default:ie=C}var Z=C;C=ie;try{return q()}finally{C=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(q,ie){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=C;C=q;try{return ie()}finally{C=Z}},r.unstable_scheduleCallback=function(q,ie,Z){var V=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?V+Z:V):Z=V,q){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=Z+W,q={id:E++,callback:ie,priorityLevel:q,startTime:Z,expirationTime:W,sortIndex:-1},Z>V?(q.sortIndex=Z,e(v,q),t(g)===null&&q===t(v)&&(H?(le(S),S=-1):H=!0,U(Ee,Z-V))):(q.sortIndex=W,e(g,q),j||x||(j=!0,we(Me))),q},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(q){var ie=C;return function(){var Z=C;C=ie;try{return q.apply(this,arguments)}finally{C=Z}}}}(yd)),yd}var Sg;function HT(){return Sg||(Sg=1,gd.exports=qT()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function WT(){if(Ag)return Xt;Ag=1;var r=il(),e=HT();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function C(n){return g.call(T,n)?!0:g.call(E,n)?!1:v.test(n)?T[n]=!0:(E[n]=!0,!1)}function x(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function j(n,i,a,c){if(i===null||typeof i>"u"||x(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function H(n,i,a,c,f,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new H(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function pe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(le,pe);$[i]=new H(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(le,pe);$[i]=new H(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(le,pe);$[i]=new H(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,i,a,c){var f=$.hasOwnProperty(i)?$[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(j(i,a,f,c)&&(a=null),c||f===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),ce=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),P=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),q=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var he=!1;function Re(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),m=c.stack.split(`
`),_=f.length-1,A=m.length-1;1<=_&&0<=A&&f[_]!==m[A];)A--;for(;1<=_&&0<=A;_--,A--)if(f[_]!==m[A]){if(_!==1||A!==1)do if(_--,A--,0>A||f[_]!==m[A]){var O=`
`+f[_].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=_&&0<=A);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Pe(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ce:return"Portal";case R:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case k:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case we:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ze(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(n){var i=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function cr(n){n._valueTracker||(n._valueTracker=vt(n))}function ws(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ur(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ni(n,i){var a=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ts(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ze(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Uo(n,i){i=i.checked,i!=null&&ge(n,"checked",i,!1)}function jo(n,i){Uo(n,i);var a=ze(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Is(n,i.type,a):i.hasOwnProperty("defaultValue")&&Is(n,i.type,ze(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function pl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Is(n,i,a){(i!=="number"||Ur(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var hr=Array.isArray;function dr(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ze(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function zo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ss(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(hr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ze(a)}}function As(n,i){var a=ze(i.value),c=ze(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Bo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fr,$o=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function jr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Di=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(n){Di.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Oi[i]=Oi[n]})});function qo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Oi.hasOwnProperty(n)&&Oi[n]?(""+i).trim():i+"px"}function Ho(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=qo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Wo=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(n,i){if(i){if(Wo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Go(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function Rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Cs=null,cn=null,Wn=null;function Ps(n){if(n=va(n)){if(typeof Cs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ql(i),Cs(n.stateNode,n.type,i))}}function Kn(n){cn?Wn?Wn.push(n):Wn=[n]:cn=n}function Qo(){if(cn){var n=cn,i=Wn;if(Wn=cn=null,Ps(n),i)for(n=0;n<i.length;n++)Ps(i[n])}}function Vi(n,i){return n(i)}function Yo(){}var pr=!1;function Xo(n,i,a){if(pr)return n(i,a);pr=!0;try{return Vi(n,i,a)}finally{pr=!1,(cn!==null||Wn!==null)&&(Yo(),Qo())}}function it(n,i){var a=n.stateNode;if(a===null)return null;var c=ql(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ks=!1;if(d)try{var An={};Object.defineProperty(An,"passive",{get:function(){ks=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{ks=!1}function bi(n,i,a,c,f,m,_,A,O){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(X){this.onError(X)}}var Li=!1,Ns=null,Rn=!1,Jo=null,zc={onError:function(n){Li=!0,Ns=n}};function Os(n,i,a,c,f,m,_,A,O){Li=!1,Ns=null,bi.apply(zc,arguments)}function ml(n,i,a,c,f,m,_,A,O){if(Os.apply(this,arguments),Li){if(Li){var z=Ns;Li=!1,Ns=null}else throw Error(t(198));Rn||(Rn=!0,Jo=z)}}function Cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Mi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Pn(n){if(Cn(n)!==n)throw Error(t(188))}function gl(n){var i=n.alternate;if(!i){if(i=Cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return Pn(f),n;if(m===c)return Pn(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var _=!1,A=f.child;A;){if(A===a){_=!0,a=f,c=m;break}if(A===c){_=!0,c=f,a=m;break}A=A.sibling}if(!_){for(A=m.child;A;){if(A===a){_=!0,a=m,c=f;break}if(A===c){_=!0,c=m,a=f;break}A=A.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Zo(n){return n=gl(n),n!==null?Ds(n):null}function Ds(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ds(n);if(i!==null)return i;n=n.sibling}return null}var xs=e.unstable_scheduleCallback,ea=e.unstable_cancelCallback,yl=e.unstable_shouldYield,Bc=e.unstable_requestPaint,We=e.unstable_now,vl=e.unstable_getCurrentPriorityLevel,Fi=e.unstable_ImmediatePriority,zr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,ta=e.unstable_LowPriority,_l=e.unstable_IdlePriority,Ui=null,en=null;function El(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Tl,na=Math.log,wl=Math.LN2;function Tl(n){return n>>>=0,n===0?32:31-(na(n)/wl|0)|0}var Vs=64,bs=4194304;function Br(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ji(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var A=_&~f;A!==0?c=Br(A):(m&=_,m!==0&&(c=Br(m)))}else _=a&~f,_!==0?c=Br(_):m!==0&&(c=Br(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&f)&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-jt(i),f=1<<a,c|=n[a],i&=~f;return c}function $c(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-jt(m),A=1<<_,O=f[_];O===-1?(!(A&a)||A&c)&&(f[_]=$c(A,i)):O<=i&&(n.expiredLanes|=A),m&=~A}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zi(){var n=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),n}function $r(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-jt(i),n[i]=a}function qe(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-jt(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function Hr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-jt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Ve=0;function Wr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Il,Ls,Sl,Al,Rl,ra=!1,Gn=[],St=null,kn=null,Nn=null,Kr=new Map,dn=new Map,Qn=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cl(n,i){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Kr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function qt(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=va(i),i!==null&&Ls(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Hc(n,i,a,c,f){switch(i){case"focusin":return St=qt(St,n,i,a,c,f),!0;case"dragenter":return kn=qt(kn,n,i,a,c,f),!0;case"mouseover":return Nn=qt(Nn,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return Kr.set(m,qt(Kr.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,dn.set(m,qt(dn.get(m)||null,n,i,a,c,f)),!0}return!1}function Pl(n){var i=Wi(n.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=Mi(a),i!==null){n.blockedOn=i,Rl(n.priority,function(){Sl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ms(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);xi=c,a.target.dispatchEvent(c),xi=null}else return i=va(a),i!==null&&Ls(i),n.blockedOn=a,!1;i.shift()}return!0}function Bi(n,i,a){gr(n)&&a.delete(i)}function kl(){ra=!1,St!==null&&gr(St)&&(St=null),kn!==null&&gr(kn)&&(kn=null),Nn!==null&&gr(Nn)&&(Nn=null),Kr.forEach(Bi),dn.forEach(Bi)}function On(n,i){n.blockedOn===i&&(n.blockedOn=null,ra||(ra=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kl)))}function Dn(n){function i(f){return On(f,n)}if(0<Gn.length){On(Gn[0],n);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&On(St,n),kn!==null&&On(kn,n),Nn!==null&&On(Nn,n),Kr.forEach(i),dn.forEach(i),a=0;a<Qn.length;a++)c=Qn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qn.length&&(a=Qn[0],a.blockedOn===null);)Pl(a),a.blockedOn===null&&Qn.shift()}var yr=Ee.ReactCurrentBatchConfig,Gr=!0;function Xe(n,i,a,c){var f=Ve,m=yr.transition;yr.transition=null;try{Ve=1,ia(n,i,a,c)}finally{Ve=f,yr.transition=m}}function Wc(n,i,a,c){var f=Ve,m=yr.transition;yr.transition=null;try{Ve=4,ia(n,i,a,c)}finally{Ve=f,yr.transition=m}}function ia(n,i,a,c){if(Gr){var f=Ms(n,i,a,c);if(f===null)rh(n,i,c,$i,a),Cl(n,c);else if(Hc(f,n,i,a,c))c.stopPropagation();else if(Cl(n,c),i&4&&-1<qc.indexOf(n)){for(;f!==null;){var m=va(f);if(m!==null&&Il(m),m=Ms(n,i,a,c),m===null&&rh(n,i,c,$i,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else rh(n,i,c,null,a)}}var $i=null;function Ms(n,i,a,c){if($i=null,n=Rs(c),n=Wi(n),n!==null)if(i=Cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Mi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return $i=n,null}function sa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vl()){case Fi:return 1;case zr:return 4;case hn:case ta:return 16;case _l:return 536870912;default:return 16}default:return 16}}var nn=null,Fs=null,Ht=null;function oa(){if(Ht)return Ht;var n,i=Fs,a=i.length,c,f="value"in nn?nn.value:nn.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===f[m-c];c++);return Ht=f.slice(n,1<c?1-c:void 0)}function Us(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Yn(){return!0}function aa(){return!1}function At(n){function i(a,c,f,m,_){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Yn:aa,this.isPropagationStopped=aa,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},js=At(xn),Xn=Z({},xn,{view:0,detail:0}),Kc=At(Xn),zs,vr,Qr,qi=Z({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qr&&(Qr&&n.type==="mousemove"?(zs=n.screenX-Qr.screenX,vr=n.screenY-Qr.screenY):vr=zs=0,Qr=n),zs)},movementY:function(n){return"movementY"in n?n.movementY:vr}}),Bs=At(qi),la=Z({},qi,{dataTransfer:0}),Nl=At(la),$s=Z({},Xn,{relatedTarget:0}),qs=At($s),Ol=Z({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),_r=At(Ol),Dl=Z({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xl=At(Dl),Vl=Z({},xn,{data:0}),ua=At(Vl),Hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ll(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bl[n])?!!i[n]:!1}function Jn(){return Ll}var u=Z({},Xn,{key:function(n){if(n.key){var i=Hs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Us(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(n){return n.type==="keypress"?Us(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Us(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=At(u),y=Z({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(y),L=Z({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),B=At(L),re=Z({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=At(re),ft=Z({},qi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),be=At(ft),_t=[9,13,27,32],at=d&&"CompositionEvent"in window,fn=null;d&&"documentMode"in document&&(fn=document.documentMode);var rn=d&&"TextEvent"in window&&!fn,Hi=d&&(!at||fn&&8<fn&&11>=fn),Ws=" ",fp=!1;function pp(n,i){switch(n){case"keyup":return _t.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function Dw(n,i){switch(n){case"compositionend":return mp(i);case"keypress":return i.which!==32?null:(fp=!0,Ws);case"textInput":return n=i.data,n===Ws&&fp?null:n;default:return null}}function xw(n,i){if(Ks)return n==="compositionend"||!at&&pp(n,i)?(n=oa(),Ht=Fs=nn=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hi&&i.locale!=="ko"?null:i.data;default:return null}}var Vw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Vw[n.type]:i==="textarea"}function yp(n,i,a,c){Kn(c),i=zl(i,"onChange"),0<i.length&&(a=new js("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ca=null,ha=null;function bw(n){bp(n,0)}function Ml(n){var i=Js(n);if(ws(i))return n}function Lw(n,i){if(n==="change")return i}var vp=!1;if(d){var Gc;if(d){var Qc="oninput"in document;if(!Qc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Qc=typeof _p.oninput=="function"}Gc=Qc}else Gc=!1;vp=Gc&&(!document.documentMode||9<document.documentMode)}function Ep(){ca&&(ca.detachEvent("onpropertychange",wp),ha=ca=null)}function wp(n){if(n.propertyName==="value"&&Ml(ha)){var i=[];yp(i,ha,n,Rs(n)),Xo(bw,i)}}function Mw(n,i,a){n==="focusin"?(Ep(),ca=i,ha=a,ca.attachEvent("onpropertychange",wp)):n==="focusout"&&Ep()}function Fw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ml(ha)}function Uw(n,i){if(n==="click")return Ml(i)}function jw(n,i){if(n==="input"||n==="change")return Ml(i)}function zw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Vn=typeof Object.is=="function"?Object.is:zw;function da(n,i){if(Vn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!g.call(i,f)||!Vn(n[f],i[f]))return!1}return!0}function Tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ip(n,i){var a=Tp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Sp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ap(){for(var n=window,i=Ur();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ur(n.document)}return i}function Yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bw(n){var i=Ap(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sp(a.ownerDocument.documentElement,a)){if(c!==null&&Yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=Ip(a,m);var _=Ip(a,c);f&&_&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $w=d&&"documentMode"in document&&11>=document.documentMode,Gs=null,Xc=null,fa=null,Jc=!1;function Rp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Gs==null||Gs!==Ur(c)||(c=Gs,"selectionStart"in c&&Yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fa&&da(fa,c)||(fa=c,c=zl(Xc,"onSelect"),0<c.length&&(i=new js("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Gs)))}function Fl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Qs={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Zc={},Cp={};d&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Ul(n){if(Zc[n])return Zc[n];if(!Qs[n])return n;var i=Qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Cp)return Zc[n]=i[a];return n}var Pp=Ul("animationend"),kp=Ul("animationiteration"),Np=Ul("animationstart"),Op=Ul("transitionend"),Dp=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,i){Dp.set(n,i),l(i,[n])}for(var eh=0;eh<xp.length;eh++){var th=xp[eh],qw=th.toLowerCase(),Hw=th[0].toUpperCase()+th.slice(1);Yr(qw,"on"+Hw)}Yr(Pp,"onAnimationEnd"),Yr(kp,"onAnimationIteration"),Yr(Np,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Op,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Vp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ml(c,i,void 0,n),n.currentTarget=null}function bp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var A=c[_],O=A.instance,z=A.currentTarget;if(A=A.listener,O!==m&&f.isPropagationStopped())break e;Vp(f,A,z),m=O}else for(_=0;_<c.length;_++){if(A=c[_],O=A.instance,z=A.currentTarget,A=A.listener,O!==m&&f.isPropagationStopped())break e;Vp(f,A,z),m=O}}}if(Rn)throw n=Jo,Rn=!1,Jo=null,n}function Ge(n,i){var a=i[uh];a===void 0&&(a=i[uh]=new Set);var c=n+"__bubble";a.has(c)||(Lp(i,n,2,!1),a.add(c))}function nh(n,i,a){var c=0;i&&(c|=4),Lp(a,n,c,i)}var jl="_reactListening"+Math.random().toString(36).slice(2);function ma(n){if(!n[jl]){n[jl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ww.has(a)||nh(a,!1,n),nh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jl]||(i[jl]=!0,nh("selectionchange",!1,i))}}function Lp(n,i,a,c){switch(sa(i)){case 1:var f=Xe;break;case 4:f=Wc;break;default:f=ia}a=f.bind(null,i,a,n),f=void 0,!ks||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function rh(n,i,a,c,f){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(_===4)for(_=c.return;_!==null;){var O=_.tag;if((O===3||O===4)&&(O=_.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;_=_.return}for(;A!==null;){if(_=Wi(A),_===null)return;if(O=_.tag,O===5||O===6){c=m=_;continue e}A=A.parentNode}}c=c.return}Xo(function(){var z=m,X=Rs(a),J=[];e:{var Y=Dp.get(n);if(Y!==void 0){var se=js,de=n;switch(n){case"keypress":if(Us(a)===0)break e;case"keydown":case"keyup":se=p;break;case"focusin":de="focus",se=qs;break;case"focusout":de="blur",se=qs;break;case"beforeblur":case"afterblur":se=qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=B;break;case Pp:case kp:case Np:se=_r;break;case Op:se=$e;break;case"scroll":se=Kc;break;case"wheel":se=be;break;case"copy":case"cut":case"paste":se=xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var fe=(i&4)!==0,st=!fe&&n==="scroll",M=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var b=z,F;b!==null;){F=b;var te=F.stateNode;if(F.tag===5&&te!==null&&(F=te,M!==null&&(te=it(b,M),te!=null&&fe.push(ga(b,te,F)))),st)break;b=b.return}0<fe.length&&(Y=new se(Y,de,null,a,X),J.push({event:Y,listeners:fe}))}}if(!(i&7)){e:{if(Y=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",Y&&a!==xi&&(de=a.relatedTarget||a.fromElement)&&(Wi(de)||de[Er]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(de=a.relatedTarget||a.toElement,se=z,de=de?Wi(de):null,de!==null&&(st=Cn(de),de!==st||de.tag!==5&&de.tag!==6)&&(de=null)):(se=null,de=z),se!==de)){if(fe=Bs,te="onMouseLeave",M="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(fe=w,te="onPointerLeave",M="onPointerEnter",b="pointer"),st=se==null?Y:Js(se),F=de==null?Y:Js(de),Y=new fe(te,b+"leave",se,a,X),Y.target=st,Y.relatedTarget=F,te=null,Wi(X)===z&&(fe=new fe(M,b+"enter",de,a,X),fe.target=F,fe.relatedTarget=st,te=fe),st=te,se&&de)t:{for(fe=se,M=de,b=0,F=fe;F;F=Ys(F))b++;for(F=0,te=M;te;te=Ys(te))F++;for(;0<b-F;)fe=Ys(fe),b--;for(;0<F-b;)M=Ys(M),F--;for(;b--;){if(fe===M||M!==null&&fe===M.alternate)break t;fe=Ys(fe),M=Ys(M)}fe=null}else fe=null;se!==null&&Mp(J,Y,se,fe,!1),de!==null&&st!==null&&Mp(J,st,de,fe,!0)}}e:{if(Y=z?Js(z):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var me=Lw;else if(gp(Y))if(vp)me=jw;else{me=Fw;var ve=Mw}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=Uw);if(me&&(me=me(n,z))){yp(J,me,a,X);break e}ve&&ve(n,Y,z),n==="focusout"&&(ve=Y._wrapperState)&&ve.controlled&&Y.type==="number"&&Is(Y,"number",Y.value)}switch(ve=z?Js(z):window,n){case"focusin":(gp(ve)||ve.contentEditable==="true")&&(Gs=ve,Xc=z,fa=null);break;case"focusout":fa=Xc=Gs=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Rp(J,a,X);break;case"selectionchange":if($w)break;case"keydown":case"keyup":Rp(J,a,X)}var _e;if(at)e:{switch(n){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ks?pp(n,a)&&(Se="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Hi&&a.locale!=="ko"&&(Ks||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ks&&(_e=oa()):(nn=X,Fs="value"in nn?nn.value:nn.textContent,Ks=!0)),ve=zl(z,Se),0<ve.length&&(Se=new ua(Se,n,null,a,X),J.push({event:Se,listeners:ve}),_e?Se.data=_e:(_e=mp(a),_e!==null&&(Se.data=_e)))),(_e=rn?Dw(n,a):xw(n,a))&&(z=zl(z,"onBeforeInput"),0<z.length&&(X=new ua("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:z}),X.data=_e))}bp(J,i)})}function ga(n,i,a){return{instance:n,listener:i,currentTarget:a}}function zl(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=it(n,a),m!=null&&c.unshift(ga(n,m,f)),m=it(n,i),m!=null&&c.push(ga(n,m,f))),n=n.return}return c}function Ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mp(n,i,a,c,f){for(var m=i._reactName,_=[];a!==null&&a!==c;){var A=a,O=A.alternate,z=A.stateNode;if(O!==null&&O===c)break;A.tag===5&&z!==null&&(A=z,f?(O=it(a,m),O!=null&&_.unshift(ga(a,O,A))):f||(O=it(a,m),O!=null&&_.push(ga(a,O,A)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var Kw=/\r\n?/g,Gw=/\u0000|\uFFFD/g;function Fp(n){return(typeof n=="string"?n:""+n).replace(Kw,`
`).replace(Gw,"")}function Bl(n,i,a){if(i=Fp(i),Fp(n)!==i&&a)throw Error(t(425))}function $l(){}var ih=null,sh=null;function oh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,Qw=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Yw=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(n){return Up.resolve(null).then(n).catch(Xw)}:ah;function Xw(n){setTimeout(function(){throw n})}function lh(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Dn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Dn(i)}function Xr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function jp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Xs,ya="__reactProps$"+Xs,Er="__reactContainer$"+Xs,uh="__reactEvents$"+Xs,Jw="__reactListeners$"+Xs,Zw="__reactHandles$"+Xs;function Wi(n){var i=n[Zn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Er]||a[Zn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=jp(n);n!==null;){if(a=n[Zn])return a;n=jp(n)}return i}n=a,a=n.parentNode}return null}function va(n){return n=n[Zn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ql(n){return n[ya]||null}var ch=[],Zs=-1;function Jr(n){return{current:n}}function Qe(n){0>Zs||(n.current=ch[Zs],ch[Zs]=null,Zs--)}function Ke(n,i){Zs++,ch[Zs]=n.current,n.current=i}var Zr={},Dt=Jr(Zr),Wt=Jr(!1),Ki=Zr;function eo(n,i){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Kt(n){return n=n.childContextTypes,n!=null}function Hl(){Qe(Wt),Qe(Dt)}function zp(n,i,a){if(Dt.current!==Zr)throw Error(t(168));Ke(Dt,i),Ke(Wt,a)}function Bp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Fe(n)||"Unknown",f));return Z({},a,c)}function Wl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Ki=Dt.current,Ke(Dt,n),Ke(Wt,Wt.current),!0}function $p(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bp(n,i,Ki),c.__reactInternalMemoizedMergedChildContext=n,Qe(Wt),Qe(Dt),Ke(Dt,n)):Qe(Wt),Ke(Wt,a)}var wr=null,Kl=!1,hh=!1;function qp(n){wr===null?wr=[n]:wr.push(n)}function eT(n){Kl=!0,qp(n)}function ei(){if(!hh&&wr!==null){hh=!0;var n=0,i=Ve;try{var a=wr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}wr=null,Kl=!1}catch(f){throw wr!==null&&(wr=wr.slice(n+1)),xs(Fi,ei),f}finally{Ve=i,hh=!1}}return null}var to=[],no=0,Gl=null,Ql=0,pn=[],mn=0,Gi=null,Tr=1,Ir="";function Qi(n,i){to[no++]=Ql,to[no++]=Gl,Gl=n,Ql=i}function Hp(n,i,a){pn[mn++]=Tr,pn[mn++]=Ir,pn[mn++]=Gi,Gi=n;var c=Tr;n=Ir;var f=32-jt(c)-1;c&=~(1<<f),a+=1;var m=32-jt(i)+f;if(30<m){var _=f-f%5;m=(c&(1<<_)-1).toString(32),c>>=_,f-=_,Tr=1<<32-jt(i)+f|a<<f|c,Ir=m+n}else Tr=1<<m|a<<f|c,Ir=n}function dh(n){n.return!==null&&(Qi(n,1),Hp(n,1,0))}function fh(n){for(;n===Gl;)Gl=to[--no],to[no]=null,Ql=to[--no],to[no]=null;for(;n===Gi;)Gi=pn[--mn],pn[mn]=null,Ir=pn[--mn],pn[mn]=null,Tr=pn[--mn],pn[mn]=null}var sn=null,on=null,Je=!1,bn=null;function Wp(n,i){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Kp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,sn=n,on=Xr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,sn=n,on=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gi!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function ph(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mh(n){if(Je){var i=on;if(i){var a=i;if(!Kp(n,i)){if(ph(n))throw Error(t(418));i=Xr(a.nextSibling);var c=sn;i&&Kp(n,i)?Wp(c,a):(n.flags=n.flags&-4097|2,Je=!1,sn=n)}}else{if(ph(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,sn=n}}}function Gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Yl(n){if(n!==sn)return!1;if(!Je)return Gp(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!oh(n.type,n.memoizedProps)),i&&(i=on)){if(ph(n))throw Qp(),Error(t(418));for(;i;)Wp(n,i),i=Xr(i.nextSibling)}if(Gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){on=Xr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}on=null}}else on=sn?Xr(n.stateNode.nextSibling):null;return!0}function Qp(){for(var n=on;n;)n=Xr(n.nextSibling)}function ro(){on=sn=null,Je=!1}function gh(n){bn===null?bn=[n]:bn.push(n)}var tT=Ee.ReactCurrentBatchConfig;function _a(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var A=f.refs;_===null?delete A[m]:A[m]=_},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Xl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yp(n){var i=n._init;return i(n._payload)}function Xp(n){function i(M,b){if(n){var F=M.deletions;F===null?(M.deletions=[b],M.flags|=16):F.push(b)}}function a(M,b){if(!n)return null;for(;b!==null;)i(M,b),b=b.sibling;return null}function c(M,b){for(M=new Map;b!==null;)b.key!==null?M.set(b.key,b):M.set(b.index,b),b=b.sibling;return M}function f(M,b){return M=li(M,b),M.index=0,M.sibling=null,M}function m(M,b,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<b?(M.flags|=2,b):F):(M.flags|=2,b)):(M.flags|=1048576,b)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,b,F,te){return b===null||b.tag!==6?(b=ad(F,M.mode,te),b.return=M,b):(b=f(b,F),b.return=M,b)}function O(M,b,F,te){var me=F.type;return me===N?X(M,b,F.props.children,te,F.key):b!==null&&(b.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===we&&Yp(me)===b.type)?(te=f(b,F.props),te.ref=_a(M,b,F),te.return=M,te):(te=wu(F.type,F.key,F.props,null,M.mode,te),te.ref=_a(M,b,F),te.return=M,te)}function z(M,b,F,te){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=ld(F,M.mode,te),b.return=M,b):(b=f(b,F.children||[]),b.return=M,b)}function X(M,b,F,te,me){return b===null||b.tag!==7?(b=rs(F,M.mode,te,me),b.return=M,b):(b=f(b,F),b.return=M,b)}function J(M,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=ad(""+b,M.mode,F),b.return=M,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Me:return F=wu(b.type,b.key,b.props,null,M.mode,F),F.ref=_a(M,null,b),F.return=M,F;case ce:return b=ld(b,M.mode,F),b.return=M,b;case we:var te=b._init;return J(M,te(b._payload),F)}if(hr(b)||ie(b))return b=rs(b,M.mode,F,null),b.return=M,b;Xl(M,b)}return null}function Y(M,b,F,te){var me=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return me!==null?null:A(M,b,""+F,te);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:return F.key===me?O(M,b,F,te):null;case ce:return F.key===me?z(M,b,F,te):null;case we:return me=F._init,Y(M,b,me(F._payload),te)}if(hr(F)||ie(F))return me!==null?null:X(M,b,F,te,null);Xl(M,F)}return null}function se(M,b,F,te,me){if(typeof te=="string"&&te!==""||typeof te=="number")return M=M.get(F)||null,A(b,M,""+te,me);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Me:return M=M.get(te.key===null?F:te.key)||null,O(b,M,te,me);case ce:return M=M.get(te.key===null?F:te.key)||null,z(b,M,te,me);case we:var ve=te._init;return se(M,b,F,ve(te._payload),me)}if(hr(te)||ie(te))return M=M.get(F)||null,X(b,M,te,me,null);Xl(b,te)}return null}function de(M,b,F,te){for(var me=null,ve=null,_e=b,Se=b=0,Tt=null;_e!==null&&Se<F.length;Se++){_e.index>Se?(Tt=_e,_e=null):Tt=_e.sibling;var je=Y(M,_e,F[Se],te);if(je===null){_e===null&&(_e=Tt);break}n&&_e&&je.alternate===null&&i(M,_e),b=m(je,b,Se),ve===null?me=je:ve.sibling=je,ve=je,_e=Tt}if(Se===F.length)return a(M,_e),Je&&Qi(M,Se),me;if(_e===null){for(;Se<F.length;Se++)_e=J(M,F[Se],te),_e!==null&&(b=m(_e,b,Se),ve===null?me=_e:ve.sibling=_e,ve=_e);return Je&&Qi(M,Se),me}for(_e=c(M,_e);Se<F.length;Se++)Tt=se(_e,M,Se,F[Se],te),Tt!==null&&(n&&Tt.alternate!==null&&_e.delete(Tt.key===null?Se:Tt.key),b=m(Tt,b,Se),ve===null?me=Tt:ve.sibling=Tt,ve=Tt);return n&&_e.forEach(function(ui){return i(M,ui)}),Je&&Qi(M,Se),me}function fe(M,b,F,te){var me=ie(F);if(typeof me!="function")throw Error(t(150));if(F=me.call(F),F==null)throw Error(t(151));for(var ve=me=null,_e=b,Se=b=0,Tt=null,je=F.next();_e!==null&&!je.done;Se++,je=F.next()){_e.index>Se?(Tt=_e,_e=null):Tt=_e.sibling;var ui=Y(M,_e,je.value,te);if(ui===null){_e===null&&(_e=Tt);break}n&&_e&&ui.alternate===null&&i(M,_e),b=m(ui,b,Se),ve===null?me=ui:ve.sibling=ui,ve=ui,_e=Tt}if(je.done)return a(M,_e),Je&&Qi(M,Se),me;if(_e===null){for(;!je.done;Se++,je=F.next())je=J(M,je.value,te),je!==null&&(b=m(je,b,Se),ve===null?me=je:ve.sibling=je,ve=je);return Je&&Qi(M,Se),me}for(_e=c(M,_e);!je.done;Se++,je=F.next())je=se(_e,M,Se,je.value,te),je!==null&&(n&&je.alternate!==null&&_e.delete(je.key===null?Se:je.key),b=m(je,b,Se),ve===null?me=je:ve.sibling=je,ve=je);return n&&_e.forEach(function(VT){return i(M,VT)}),Je&&Qi(M,Se),me}function st(M,b,F,te){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:e:{for(var me=F.key,ve=b;ve!==null;){if(ve.key===me){if(me=F.type,me===N){if(ve.tag===7){a(M,ve.sibling),b=f(ve,F.props.children),b.return=M,M=b;break e}}else if(ve.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===we&&Yp(me)===ve.type){a(M,ve.sibling),b=f(ve,F.props),b.ref=_a(M,ve,F),b.return=M,M=b;break e}a(M,ve);break}else i(M,ve);ve=ve.sibling}F.type===N?(b=rs(F.props.children,M.mode,te,F.key),b.return=M,M=b):(te=wu(F.type,F.key,F.props,null,M.mode,te),te.ref=_a(M,b,F),te.return=M,M=te)}return _(M);case ce:e:{for(ve=F.key;b!==null;){if(b.key===ve)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){a(M,b.sibling),b=f(b,F.children||[]),b.return=M,M=b;break e}else{a(M,b);break}else i(M,b);b=b.sibling}b=ld(F,M.mode,te),b.return=M,M=b}return _(M);case we:return ve=F._init,st(M,b,ve(F._payload),te)}if(hr(F))return de(M,b,F,te);if(ie(F))return fe(M,b,F,te);Xl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(a(M,b.sibling),b=f(b,F),b.return=M,M=b):(a(M,b),b=ad(F,M.mode,te),b.return=M,M=b),_(M)):a(M,b)}return st}var io=Xp(!0),Jp=Xp(!1),Jl=Jr(null),Zl=null,so=null,yh=null;function vh(){yh=so=Zl=null}function _h(n){var i=Jl.current;Qe(Jl),n._currentValue=i}function Eh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function oo(n,i){Zl=n,yh=so=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Gt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(yh!==n)if(n={context:n,memoizedValue:i,next:null},so===null){if(Zl===null)throw Error(t(308));so=n,Zl.dependencies={lanes:0,firstContext:n}}else so=so.next=n;return i}var Yi=null;function wh(n){Yi===null?Yi=[n]:Yi.push(n)}function Zp(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,wh(i)):(a.next=f.next,f.next=a),i.interleaved=a,Sr(n,c)}function Sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function Th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function em(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ni(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ue&2){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Sr(n,a)}return f=c.interleaved,f===null?(i.next=i,wh(c)):(i.next=f.next,f.next=i),c.interleaved=i,Sr(n,a)}function eu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}function tm(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function tu(n,i,a,c){var f=n.updateQueue;ti=!1;var m=f.firstBaseUpdate,_=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var O=A,z=O.next;O.next=null,_===null?m=z:_.next=z,_=O;var X=n.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==_&&(A===null?X.firstBaseUpdate=z:A.next=z,X.lastBaseUpdate=O))}if(m!==null){var J=f.baseState;_=0,X=z=O=null,A=m;do{var Y=A.lane,se=A.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var de=n,fe=A;switch(Y=i,se=a,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){J=de.call(se,J,Y);break e}J=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,Y=typeof de=="function"?de.call(se,J,Y):de,Y==null)break e;J=Z({},J,Y);break e;case 2:ti=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,Y=f.effects,Y===null?f.effects=[A]:Y.push(A))}else se={eventTime:se,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(z=X=se,O=J):X=X.next=se,_|=Y;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(X===null&&(O=J),f.baseState=O,f.firstBaseUpdate=z,f.lastBaseUpdate=X,i=f.shared.interleaved,i!==null){f=i;do _|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Zi|=_,n.lanes=_,n.memoizedState=J}}function nm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ea={},er=Jr(Ea),wa=Jr(Ea),Ta=Jr(Ea);function Xi(n){if(n===Ea)throw Error(t(174));return n}function Ih(n,i){switch(Ke(Ta,i),Ke(wa,n),Ke(er,Ea),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:dt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=dt(i,n)}Qe(er),Ke(er,i)}function ao(){Qe(er),Qe(wa),Qe(Ta)}function rm(n){Xi(Ta.current);var i=Xi(er.current),a=dt(i,n.type);i!==a&&(Ke(wa,n),Ke(er,a))}function Sh(n){wa.current===n&&(Qe(er),Qe(wa))}var et=Jr(0);function nu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ah=[];function Rh(){for(var n=0;n<Ah.length;n++)Ah[n]._workInProgressVersionPrimary=null;Ah.length=0}var ru=Ee.ReactCurrentDispatcher,Ch=Ee.ReactCurrentBatchConfig,Ji=0,tt=null,pt=null,Et=null,iu=!1,Ia=!1,Sa=0,nT=0;function xt(){throw Error(t(321))}function Ph(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Vn(n[a],i[a]))return!1;return!0}function kh(n,i,a,c,f,m){if(Ji=m,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ru.current=n===null||n.memoizedState===null?oT:aT,n=a(c,f),Ia){m=0;do{if(Ia=!1,Sa=0,25<=m)throw Error(t(301));m+=1,Et=pt=null,i.updateQueue=null,ru.current=lT,n=a(c,f)}while(Ia)}if(ru.current=au,i=pt!==null&&pt.next!==null,Ji=0,Et=pt=tt=null,iu=!1,i)throw Error(t(300));return n}function Nh(){var n=Sa!==0;return Sa=0,n}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?tt.memoizedState=Et=n:Et=Et.next=n,Et}function yn(){if(pt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var i=Et===null?tt.memoizedState:Et.next;if(i!==null)Et=i,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?tt.memoizedState=Et=n:Et=Et.next=n}return Et}function Aa(n,i){return typeof i=="function"?i(n):i}function Oh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var _=f.next;f.next=m.next,m.next=_}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var A=_=null,O=null,z=m;do{var X=z.lane;if((Ji&X)===X)O!==null&&(O=O.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var J={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};O===null?(A=O=J,_=c):O=O.next=J,tt.lanes|=X,Zi|=X}z=z.next}while(z!==null&&z!==m);O===null?_=c:O.next=A,Vn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=O,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,tt.lanes|=m,Zi|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Dh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do m=n(m,_.action),_=_.next;while(_!==f);Vn(m,i.memoizedState)||(Gt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function im(){}function sm(n,i){var a=tt,c=yn(),f=i(),m=!Vn(c.memoizedState,f);if(m&&(c.memoizedState=f,Gt=!0),c=c.queue,xh(lm.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ra(9,am.bind(null,a,c,f,i),void 0,null),wt===null)throw Error(t(349));Ji&30||om(a,i,f)}return f}function om(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function am(n,i,a,c){i.value=a,i.getSnapshot=c,um(i)&&cm(n)}function lm(n,i,a){return a(function(){um(i)&&cm(n)})}function um(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Vn(n,a)}catch{return!0}}function cm(n){var i=Sr(n,1);i!==null&&Un(i,n,1,-1)}function hm(n){var i=tr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:n},i.queue=n,n=n.dispatch=sT.bind(null,tt,n),[i.memoizedState,n]}function Ra(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function dm(){return yn().memoizedState}function su(n,i,a,c){var f=tr();tt.flags|=n,f.memoizedState=Ra(1|i,a,void 0,c===void 0?null:c)}function ou(n,i,a,c){var f=yn();c=c===void 0?null:c;var m=void 0;if(pt!==null){var _=pt.memoizedState;if(m=_.destroy,c!==null&&Ph(c,_.deps)){f.memoizedState=Ra(i,a,m,c);return}}tt.flags|=n,f.memoizedState=Ra(1|i,a,m,c)}function fm(n,i){return su(8390656,8,n,i)}function xh(n,i){return ou(2048,8,n,i)}function pm(n,i){return ou(4,2,n,i)}function mm(n,i){return ou(4,4,n,i)}function gm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ym(n,i,a){return a=a!=null?a.concat([n]):null,ou(4,4,gm.bind(null,i,n),a)}function Vh(){}function vm(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ph(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function _m(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ph(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Em(n,i,a){return Ji&21?(Vn(a,i)||(a=zi(),tt.lanes|=a,Zi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function rT(n,i){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=Ch.transition;Ch.transition={};try{n(!1),i()}finally{Ve=a,Ch.transition=c}}function wm(){return yn().memoizedState}function iT(n,i,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Tm(n))Im(i,a);else if(a=Zp(n,i,a,c),a!==null){var f=$t();Un(a,n,c,f),Sm(a,i,c)}}function sT(n,i,a){var c=oi(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tm(n))Im(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,A=m(_,a);if(f.hasEagerState=!0,f.eagerState=A,Vn(A,_)){var O=i.interleaved;O===null?(f.next=f,wh(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}a=Zp(n,i,f,c),a!==null&&(f=$t(),Un(a,n,c,f),Sm(a,i,c))}}function Tm(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function Im(n,i){Ia=iu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sm(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hr(n,a)}}var au={readContext:gn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},oT={readContext:gn,useCallback:function(n,i){return tr().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:fm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,su(4194308,4,gm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return su(4194308,4,n,i)},useInsertionEffect:function(n,i){return su(4,2,n,i)},useMemo:function(n,i){var a=tr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=tr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=iT.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=tr();return n={current:n},i.memoizedState=n},useState:hm,useDebugValue:Vh,useDeferredValue:function(n){return tr().memoizedState=n},useTransition:function(){var n=hm(!1),i=n[0];return n=rT.bind(null,n[1]),tr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,f=tr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));Ji&30||om(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,fm(lm.bind(null,c,m,n),[n]),c.flags|=2048,Ra(9,am.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=tr(),i=wt.identifierPrefix;if(Je){var a=Ir,c=Tr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Sa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=nT++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},aT={readContext:gn,useCallback:vm,useContext:gn,useEffect:xh,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Oh,useRef:dm,useState:function(){return Oh(Aa)},useDebugValue:Vh,useDeferredValue:function(n){var i=yn();return Em(i,pt.memoizedState,n)},useTransition:function(){var n=Oh(Aa)[0],i=yn().memoizedState;return[n,i]},useMutableSource:im,useSyncExternalStore:sm,useId:wm,unstable_isNewReconciler:!1},lT={readContext:gn,useCallback:vm,useContext:gn,useEffect:xh,useImperativeHandle:ym,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Dh,useRef:dm,useState:function(){return Dh(Aa)},useDebugValue:Vh,useDeferredValue:function(n){var i=yn();return pt===null?i.memoizedState=n:Em(i,pt.memoizedState,n)},useTransition:function(){var n=Dh(Aa)[0],i=yn().memoizedState;return[n,i]},useMutableSource:im,useSyncExternalStore:sm,useId:wm,unstable_isNewReconciler:!1};function Ln(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function bh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Z({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var lu={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),f=oi(n),m=Ar(c,f);m.payload=i,a!=null&&(m.callback=a),i=ni(n,m,f),i!==null&&(Un(i,n,f,c),eu(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),f=oi(n),m=Ar(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ni(n,m,f),i!==null&&(Un(i,n,f,c),eu(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=oi(n),f=Ar(a,c);f.tag=2,i!=null&&(f.callback=i),i=ni(n,f,c),i!==null&&(Un(i,n,c,a),eu(i,n,c))}};function Am(n,i,a,c,f,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!da(a,c)||!da(f,m):!0}function Rm(n,i,a){var c=!1,f=Zr,m=i.contextType;return typeof m=="object"&&m!==null?m=gn(m):(f=Kt(i)?Ki:Dt.current,c=i.contextTypes,m=(c=c!=null)?eo(n,f):Zr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function Cm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&lu.enqueueReplaceState(i,i.state,null)}function Lh(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Th(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=gn(m):(m=Kt(i)?Ki:Dt.current,f.context=eo(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(bh(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&lu.enqueueReplaceState(f,f.state,null),tu(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function lo(n,i){try{var a="",c=i;do a+=Pe(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Mh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Fh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var uT=typeof WeakMap=="function"?WeakMap:Map;function Pm(n,i,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){mu||(mu=!0,Zh=c),Fh(n,i)},a}function km(n,i,a){a=Ar(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Fh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Fh(n,i),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Nm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new uT;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=IT.bind(null,n,i,a),i.then(n,n))}function Om(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dm(n,i,a,c,f){return n.mode&1?(n.flags|=65536,n.lanes=f,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ar(-1,1),i.tag=2,ni(a,i,1))),a.lanes|=1),n)}var cT=Ee.ReactCurrentOwner,Gt=!1;function Bt(n,i,a,c){i.child=n===null?Jp(i,null,a,c):io(i,n.child,a,c)}function xm(n,i,a,c,f){a=a.render;var m=i.ref;return oo(i,f),c=kh(n,i,a,c,m,f),a=Nh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Rr(n,i,f)):(Je&&a&&dh(i),i.flags|=1,Bt(n,i,c,f),i.child)}function Vm(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!od(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,bm(n,i,m,c,f)):(n=wu(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&f)){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(_,c)&&n.ref===i.ref)return Rr(n,i,f)}return i.flags|=1,n=li(m,c),n.ref=i.ref,n.return=i,i.child=n}function bm(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(da(m,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=m,(n.lanes&f)!==0)n.flags&131072&&(Gt=!0);else return i.lanes=n.lanes,Rr(n,i,f)}return Uh(n,i,a,c,f)}function Lm(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(co,an),an|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ke(co,an),an|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ke(co,an),an|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ke(co,an),an|=c;return Bt(n,i,f,a),i.child}function Mm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Uh(n,i,a,c,f){var m=Kt(a)?Ki:Dt.current;return m=eo(i,m),oo(i,f),a=kh(n,i,a,c,m,f),c=Nh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Rr(n,i,f)):(Je&&c&&dh(i),i.flags|=1,Bt(n,i,a,f),i.child)}function Fm(n,i,a,c,f){if(Kt(a)){var m=!0;Wl(i)}else m=!1;if(oo(i,f),i.stateNode===null)cu(n,i),Rm(i,a,c),Lh(i,a,c,f),c=!0;else if(n===null){var _=i.stateNode,A=i.memoizedProps;_.props=A;var O=_.context,z=a.contextType;typeof z=="object"&&z!==null?z=gn(z):(z=Kt(a)?Ki:Dt.current,z=eo(i,z));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof _.getSnapshotBeforeUpdate=="function";J||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==c||O!==z)&&Cm(i,_,c,z),ti=!1;var Y=i.memoizedState;_.state=Y,tu(i,c,_,f),O=i.memoizedState,A!==c||Y!==O||Wt.current||ti?(typeof X=="function"&&(bh(i,a,X,c),O=i.memoizedState),(A=ti||Am(i,a,A,c,Y,O,z))?(J||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),_.props=c,_.state=O,_.context=z,c=A):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,em(n,i),A=i.memoizedProps,z=i.type===i.elementType?A:Ln(i.type,A),_.props=z,J=i.pendingProps,Y=_.context,O=a.contextType,typeof O=="object"&&O!==null?O=gn(O):(O=Kt(a)?Ki:Dt.current,O=eo(i,O));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==J||Y!==O)&&Cm(i,_,c,O),ti=!1,Y=i.memoizedState,_.state=Y,tu(i,c,_,f);var de=i.memoizedState;A!==J||Y!==de||Wt.current||ti?(typeof se=="function"&&(bh(i,a,se,c),de=i.memoizedState),(z=ti||Am(i,a,z,c,Y,de,O)||!1)?(X||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,de,O),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,de,O)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=de),_.props=c,_.state=de,_.context=O,c=z):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),c=!1)}return jh(n,i,a,c,m,f)}function jh(n,i,a,c,f,m){Mm(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return f&&$p(i,a,!1),Rr(n,i,m);c=i.stateNode,cT.current=i;var A=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=io(i,n.child,null,m),i.child=io(i,null,A,m)):Bt(n,i,A,m),i.memoizedState=c.state,f&&$p(i,a,!0),i.child}function Um(n){var i=n.stateNode;i.pendingContext?zp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&zp(n,i.context,!1),Ih(n,i.containerInfo)}function jm(n,i,a,c,f){return ro(),gh(f),i.flags|=256,Bt(n,i,a,c),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function Bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function zm(n,i,a){var c=i.pendingProps,f=et.current,m=!1,_=(i.flags&128)!==0,A;if((A=_)||(A=n!==null&&n.memoizedState===null?!1:(f&2)!==0),A?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ke(et,f&1),n===null)return mh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(_=c.children,n=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=_):m=Tu(_,c,0,null),n=rs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Bh(a),i.memoizedState=zh,n):$h(i,_));if(f=n.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return hT(n,i,_,c,A,f,a);if(m){m=c.fallback,_=i.mode,f=n.child,A=f.sibling;var O={mode:"hidden",children:c.children};return!(_&1)&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=li(f,O),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?m=li(A,m):(m=rs(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=n.child.memoizedState,_=_===null?Bh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,i.memoizedState=zh,c}return m=n.child,n=m.sibling,c=li(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function $h(n,i){return i=Tu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function uu(n,i,a,c){return c!==null&&gh(c),io(i,n.child,null,a),n=$h(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function hT(n,i,a,c,f,m,_){if(a)return i.flags&256?(i.flags&=-257,c=Mh(Error(t(422))),uu(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Tu({mode:"visible",children:c.children},f,0,null),m=rs(m,f,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&io(i,n.child,null,_),i.child.memoizedState=Bh(_),i.memoizedState=zh,m);if(!(i.mode&1))return uu(n,i,_,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=Mh(m,c,void 0),uu(n,i,_,c)}if(A=(_&n.childLanes)!==0,Gt||A){if(c=wt,c!==null){switch(_&-_){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|_)?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Sr(n,f),Un(c,n,f,-1))}return sd(),c=Mh(Error(t(421))),uu(n,i,_,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=ST.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,on=Xr(f.nextSibling),sn=i,Je=!0,bn=null,n!==null&&(pn[mn++]=Tr,pn[mn++]=Ir,pn[mn++]=Gi,Tr=n.id,Ir=n.overflow,Gi=i),i=$h(i,c.children),i.flags|=4096,i)}function Bm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Eh(n.return,i,a)}function qh(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function $m(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Bt(n,i,c.children,a),c=et.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bm(n,a,i);else if(n.tag===19)Bm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ke(et,c),!(i.mode&1))i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&nu(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),qh(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&nu(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}qh(i,!0,a,null,m);break;case"together":qh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cu(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Rr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=li(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function dT(n,i,a){switch(i.tag){case 3:Um(i),ro();break;case 5:rm(i);break;case 1:Kt(i.type)&&Wl(i);break;case 4:Ih(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ke(Jl,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ke(et,et.current&1),i.flags|=128,null):a&i.child.childLanes?zm(n,i,a):(Ke(et,et.current&1),n=Rr(n,i,a),n!==null?n.sibling:null);Ke(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return $m(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,Lm(n,i,a)}return Rr(n,i,a)}var qm,Hh,Hm,Wm;qm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Hh=function(){},Hm=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Xi(er.current);var m=null;switch(a){case"input":f=Ni(n,f),c=Ni(n,c),m=[];break;case"select":f=Z({},f,{value:void 0}),c=Z({},c,{value:void 0}),m=[];break;case"textarea":f=zo(n,f),c=zo(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=$l)}Ko(a,c);var _;a=null;for(z in f)if(!c.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var A=f[z];for(_ in A)A.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in c){var O=c[z];if(A=f!=null?f[z]:void 0,c.hasOwnProperty(z)&&O!==A&&(O!=null||A!=null))if(z==="style")if(A){for(_ in A)!A.hasOwnProperty(_)||O&&O.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in O)O.hasOwnProperty(_)&&A[_]!==O[_]&&(a||(a={}),a[_]=O[_])}else a||(m||(m=[]),m.push(z,a)),a=O;else z==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,A=A?A.__html:void 0,O!=null&&A!==O&&(m=m||[]).push(z,O)):z==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(z,""+O):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(O!=null&&z==="onScroll"&&Ge("scroll",n),m||A===O||(m=[])):(m=m||[]).push(z,O))}a&&(m=m||[]).push("style",a);var z=m;(i.updateQueue=z)&&(i.flags|=4)}},Wm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ca(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function fT(n,i,a){var c=i.pendingProps;switch(fh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(i),null;case 1:return Kt(i.type)&&Hl(),Vt(i),null;case 3:return c=i.stateNode,ao(),Qe(Wt),Qe(Dt),Rh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Yl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,bn!==null&&(nd(bn),bn=null))),Hh(n,i),Vt(i),null;case 5:Sh(i);var f=Xi(Ta.current);if(a=i.type,n!==null&&i.stateNode!=null)Hm(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Vt(i),null}if(n=Xi(er.current),Yl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Zn]=i,c[ya]=m,n=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(f=0;f<pa.length;f++)Ge(pa[f],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Ts(c,m),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ge("invalid",c);break;case"textarea":Ss(c,m),Ge("invalid",c)}Ko(a,m),f=null;for(var _ in m)if(m.hasOwnProperty(_)){var A=m[_];_==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&Bl(c.textContent,A,n),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&Bl(c.textContent,A,n),f=["children",""+A]):o.hasOwnProperty(_)&&A!=null&&_==="onScroll"&&Ge("scroll",c)}switch(a){case"input":cr(c),pl(c,m,!0);break;case"textarea":cr(c),Bo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=$l)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Zn]=i,n[ya]=c,qm(n,i,!1,!1),i.stateNode=n;e:{switch(_=Go(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),f=c;break;case"iframe":case"object":case"embed":Ge("load",n),f=c;break;case"video":case"audio":for(f=0;f<pa.length;f++)Ge(pa[f],n);f=c;break;case"source":Ge("error",n),f=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),f=c;break;case"details":Ge("toggle",n),f=c;break;case"input":Ts(n,c),f=Ni(n,c),Ge("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=Z({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Ss(n,c),f=zo(n,c),Ge("invalid",n);break;default:f=c}Ko(a,f),A=f;for(m in A)if(A.hasOwnProperty(m)){var O=A[m];m==="style"?Ho(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&$o(n,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&jr(n,O):typeof O=="number"&&jr(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Ge("scroll",n):O!=null&&ge(n,m,O,_))}switch(a){case"input":cr(n),pl(n,c,!1);break;case"textarea":cr(n),Bo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ze(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?dr(n,!!c.multiple,m,!1):c.defaultValue!=null&&dr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=$l)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vt(i),null;case 6:if(n&&i.stateNode!=null)Wm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Xi(Ta.current),Xi(er.current),Yl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Zn]=i,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Bl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Bl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Zn]=i,i.stateNode=c}return Vt(i),null;case 13:if(Qe(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&on!==null&&i.mode&1&&!(i.flags&128))Qp(),ro(),i.flags|=98560,m=!1;else if(m=Yl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Zn]=i}else ro(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Vt(i),m=!1}else bn!==null&&(nd(bn),bn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||et.current&1?mt===0&&(mt=3):sd())),i.updateQueue!==null&&(i.flags|=4),Vt(i),null);case 4:return ao(),Hh(n,i),n===null&&ma(i.stateNode.containerInfo),Vt(i),null;case 10:return _h(i.type._context),Vt(i),null;case 17:return Kt(i.type)&&Hl(),Vt(i),null;case 19:if(Qe(et),m=i.memoizedState,m===null)return Vt(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)Ca(m,!1);else{if(mt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(_=nu(n),_!==null){for(i.flags|=128,Ca(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ke(et,et.current&1|2),i.child}n=n.sibling}m.tail!==null&&We()>ho&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304)}else{if(!c)if(n=nu(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Je)return Vt(i),null}else 2*We()-m.renderingStartTime>ho&&a!==1073741824&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=We(),i.sibling=null,a=et.current,Ke(et,c?a&1|2:a&1),i):(Vt(i),null);case 22:case 23:return id(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?an&1073741824&&(Vt(i),i.subtreeFlags&6&&(i.flags|=8192)):Vt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function pT(n,i){switch(fh(i),i.tag){case 1:return Kt(i.type)&&Hl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ao(),Qe(Wt),Qe(Dt),Rh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Sh(i),null;case 13:if(Qe(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ro()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(et),null;case 4:return ao(),null;case 10:return _h(i.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var hu=!1,bt=!1,mT=typeof WeakSet=="function"?WeakSet:Set,ae=null;function uo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,i,c)}else a.current=null}function Wh(n,i,a){try{a()}catch(c){rt(n,i,c)}}var Km=!1;function gT(n,i){if(ih=Gr,n=Ap(),Yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,A=-1,O=-1,z=0,X=0,J=n,Y=null;t:for(;;){for(var se;J!==a||f!==0&&J.nodeType!==3||(A=_+f),J!==m||c!==0&&J.nodeType!==3||(O=_+c),J.nodeType===3&&(_+=J.nodeValue.length),(se=J.firstChild)!==null;)Y=J,J=se;for(;;){if(J===n)break t;if(Y===a&&++z===f&&(A=_),Y===m&&++X===c&&(O=_),(se=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=se}a=A===-1||O===-1?null:{start:A,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:n,selectionRange:a},Gr=!1,ae=i;ae!==null;)if(i=ae,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ae=n;else for(;ae!==null;){i=ae;try{var de=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,st=de.memoizedState,M=i.stateNode,b=M.getSnapshotBeforeUpdate(i.elementType===i.type?fe:Ln(i.type,fe),st);M.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){rt(i,i.return,te)}if(n=i.sibling,n!==null){n.return=i.return,ae=n;break}ae=i.return}return de=Km,Km=!1,de}function Pa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Wh(i,a,m)}f=f.next}while(f!==c)}}function du(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Kh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Gm(n){var i=n.alternate;i!==null&&(n.alternate=null,Gm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Zn],delete i[ya],delete i[uh],delete i[Jw],delete i[Zw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qm(n){return n.tag===5||n.tag===3||n.tag===4}function Ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$l));else if(c!==4&&(n=n.child,n!==null))for(Gh(n,i,a),n=n.sibling;n!==null;)Gh(n,i,a),n=n.sibling}function Qh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Qh(n,i,a),n=n.sibling;n!==null;)Qh(n,i,a),n=n.sibling}var Rt=null,Mn=!1;function ri(n,i,a){for(a=a.child;a!==null;)Xm(n,i,a),a=a.sibling}function Xm(n,i,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:bt||uo(a,i);case 6:var c=Rt,f=Mn;Rt=null,ri(n,i,a),Rt=c,Mn=f,Rt!==null&&(Mn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Mn?(n=Rt,a=a.stateNode,n.nodeType===8?lh(n.parentNode,a):n.nodeType===1&&lh(n,a),Dn(n)):lh(Rt,a.stateNode));break;case 4:c=Rt,f=Mn,Rt=a.stateNode.containerInfo,Mn=!0,ri(n,i,a),Rt=c,Mn=f;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,_=m.destroy;m=m.tag,_!==void 0&&(m&2||m&4)&&Wh(a,i,_),f=f.next}while(f!==c)}ri(n,i,a);break;case 1:if(!bt&&(uo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){rt(a,i,A)}ri(n,i,a);break;case 21:ri(n,i,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,ri(n,i,a),bt=c):ri(n,i,a);break;default:ri(n,i,a)}}function Jm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new mT),i.forEach(function(c){var f=AT.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Fn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,_=i,A=_;e:for(;A!==null;){switch(A.tag){case 5:Rt=A.stateNode,Mn=!1;break e;case 3:Rt=A.stateNode.containerInfo,Mn=!0;break e;case 4:Rt=A.stateNode.containerInfo,Mn=!0;break e}A=A.return}if(Rt===null)throw Error(t(160));Xm(m,_,f),Rt=null,Mn=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(z){rt(f,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zm(i,n),i=i.sibling}function Zm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fn(i,n),nr(n),c&4){try{Pa(3,n,n.return),du(3,n)}catch(fe){rt(n,n.return,fe)}try{Pa(5,n,n.return)}catch(fe){rt(n,n.return,fe)}}break;case 1:Fn(i,n),nr(n),c&512&&a!==null&&uo(a,a.return);break;case 5:if(Fn(i,n),nr(n),c&512&&a!==null&&uo(a,a.return),n.flags&32){var f=n.stateNode;try{jr(f,"")}catch(fe){rt(n,n.return,fe)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,A=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&Uo(f,m),Go(A,_);var z=Go(A,m);for(_=0;_<O.length;_+=2){var X=O[_],J=O[_+1];X==="style"?Ho(f,J):X==="dangerouslySetInnerHTML"?$o(f,J):X==="children"?jr(f,J):ge(f,X,J,z)}switch(A){case"input":jo(f,m);break;case"textarea":As(f,m);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var se=m.value;se!=null?dr(f,!!m.multiple,se,!1):Y!==!!m.multiple&&(m.defaultValue!=null?dr(f,!!m.multiple,m.defaultValue,!0):dr(f,!!m.multiple,m.multiple?[]:"",!1))}f[ya]=m}catch(fe){rt(n,n.return,fe)}}break;case 6:if(Fn(i,n),nr(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(fe){rt(n,n.return,fe)}}break;case 3:if(Fn(i,n),nr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(i.containerInfo)}catch(fe){rt(n,n.return,fe)}break;case 4:Fn(i,n),nr(n);break;case 13:Fn(i,n),nr(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Jh=We())),c&4&&Jm(n);break;case 22:if(X=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(z=bt)||X,Fn(i,n),bt=z):Fn(i,n),nr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!X&&n.mode&1)for(ae=n,X=n.child;X!==null;){for(J=ae=X;ae!==null;){switch(Y=ae,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:Pa(4,Y,Y.return);break;case 1:uo(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){c=Y,a=Y.return;try{i=c,de.props=i.memoizedProps,de.state=i.memoizedState,de.componentWillUnmount()}catch(fe){rt(c,a,fe)}}break;case 5:uo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){ng(J);continue}}se!==null?(se.return=Y,ae=se):ng(J)}X=X.sibling}e:for(X=null,J=n;;){if(J.tag===5){if(X===null){X=J;try{f=J.stateNode,z?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=J.stateNode,O=J.memoizedProps.style,_=O!=null&&O.hasOwnProperty("display")?O.display:null,A.style.display=qo("display",_))}catch(fe){rt(n,n.return,fe)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(fe){rt(n,n.return,fe)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Fn(i,n),nr(n),c&4&&Jm(n);break;case 21:break;default:Fn(i,n),nr(n)}}function nr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Qm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(jr(f,""),c.flags&=-33);var m=Ym(n);Qh(n,m,f);break;case 3:case 4:var _=c.stateNode.containerInfo,A=Ym(n);Gh(n,A,_);break;default:throw Error(t(161))}}catch(O){rt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function yT(n,i,a){ae=n,eg(n)}function eg(n,i,a){for(var c=(n.mode&1)!==0;ae!==null;){var f=ae,m=f.child;if(f.tag===22&&c){var _=f.memoizedState!==null||hu;if(!_){var A=f.alternate,O=A!==null&&A.memoizedState!==null||bt;A=hu;var z=bt;if(hu=_,(bt=O)&&!z)for(ae=f;ae!==null;)_=ae,O=_.child,_.tag===22&&_.memoizedState!==null?rg(f):O!==null?(O.return=_,ae=O):rg(f);for(;m!==null;)ae=m,eg(m),m=m.sibling;ae=f,hu=A,bt=z}tg(n)}else f.subtreeFlags&8772&&m!==null?(m.return=f,ae=m):tg(n)}}function tg(n){for(;ae!==null;){var i=ae;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:bt||du(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bt)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Ln(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&nm(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}nm(i,_,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Dn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||i.flags&512&&Kh(i)}catch(Y){rt(i,i.return,Y)}}if(i===n){ae=null;break}if(a=i.sibling,a!==null){a.return=i.return,ae=a;break}ae=i.return}}function ng(n){for(;ae!==null;){var i=ae;if(i===n){ae=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ae=a;break}ae=i.return}}function rg(n){for(;ae!==null;){var i=ae;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{du(4,i)}catch(O){rt(i,a,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(O){rt(i,f,O)}}var m=i.return;try{Kh(i)}catch(O){rt(i,m,O)}break;case 5:var _=i.return;try{Kh(i)}catch(O){rt(i,_,O)}}}catch(O){rt(i,i.return,O)}if(i===n){ae=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ae=A;break}ae=i.return}}var vT=Math.ceil,fu=Ee.ReactCurrentDispatcher,Yh=Ee.ReactCurrentOwner,vn=Ee.ReactCurrentBatchConfig,Ue=0,wt=null,lt=null,Ct=0,an=0,co=Jr(0),mt=0,ka=null,Zi=0,pu=0,Xh=0,Na=null,Qt=null,Jh=0,ho=1/0,Cr=null,mu=!1,Zh=null,ii=null,gu=!1,si=null,yu=0,Oa=0,ed=null,vu=-1,_u=0;function $t(){return Ue&6?We():vu!==-1?vu:vu=We()}function oi(n){return n.mode&1?Ue&2&&Ct!==0?Ct&-Ct:tT.transition!==null?(_u===0&&(_u=zi()),_u):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:sa(n.type)),n):1}function Un(n,i,a,c){if(50<Oa)throw Oa=0,ed=null,Error(t(185));qr(n,a,c),(!(Ue&2)||n!==wt)&&(n===wt&&(!(Ue&2)&&(pu|=a),mt===4&&ai(n,Ct)),Yt(n,c),a===1&&Ue===0&&!(i.mode&1)&&(ho=We()+500,Kl&&ei()))}function Yt(n,i){var a=n.callbackNode;mr(n,i);var c=ji(n,n===wt?Ct:0);if(c===0)a!==null&&ea(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ea(a),i===1)n.tag===0?eT(sg.bind(null,n)):qp(sg.bind(null,n)),Yw(function(){!(Ue&6)&&ei()}),a=null;else{switch(Wr(c)){case 1:a=Fi;break;case 4:a=zr;break;case 16:a=hn;break;case 536870912:a=_l;break;default:a=hn}a=fg(a,ig.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function ig(n,i){if(vu=-1,_u=0,Ue&6)throw Error(t(327));var a=n.callbackNode;if(fo()&&n.callbackNode!==a)return null;var c=ji(n,n===wt?Ct:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=Eu(n,c);else{i=c;var f=Ue;Ue|=2;var m=ag();(wt!==n||Ct!==i)&&(Cr=null,ho=We()+500,ts(n,i));do try{wT();break}catch(A){og(n,A)}while(!0);vh(),fu.current=m,Ue=f,lt!==null?i=0:(wt=null,Ct=0,i=mt)}if(i!==0){if(i===2&&(f=tn(n),f!==0&&(c=f,i=td(n,f))),i===1)throw a=ka,ts(n,0),ai(n,c),Yt(n,We()),a;if(i===6)ai(n,c);else{if(f=n.current.alternate,!(c&30)&&!_T(f)&&(i=Eu(n,c),i===2&&(m=tn(n),m!==0&&(c=m,i=td(n,m))),i===1))throw a=ka,ts(n,0),ai(n,c),Yt(n,We()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Qt,Cr);break;case 3:if(ai(n,c),(c&130023424)===c&&(i=Jh+500-We(),10<i)){if(ji(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=ah(ns.bind(null,n,Qt,Cr),i);break}ns(n,Qt,Cr);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var _=31-jt(c);m=1<<_,_=i[_],_>f&&(f=_),c&=~m}if(c=f,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*vT(c/1960))-c,10<c){n.timeoutHandle=ah(ns.bind(null,n,Qt,Cr),c);break}ns(n,Qt,Cr);break;case 5:ns(n,Qt,Cr);break;default:throw Error(t(329))}}}return Yt(n,We()),n.callbackNode===a?ig.bind(null,n):null}function td(n,i){var a=Na;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=Eu(n,i),n!==2&&(i=Qt,Qt=a,i!==null&&nd(i)),n}function nd(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function _T(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!Vn(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ai(n,i){for(i&=~Xh,i&=~pu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-jt(i),c=1<<a;n[a]=-1,i&=~c}}function sg(n){if(Ue&6)throw Error(t(327));fo();var i=ji(n,0);if(!(i&1))return Yt(n,We()),null;var a=Eu(n,i);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(i=c,a=td(n,c))}if(a===1)throw a=ka,ts(n,0),ai(n,i),Yt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Qt,Cr),Yt(n,We()),null}function rd(n,i){var a=Ue;Ue|=1;try{return n(i)}finally{Ue=a,Ue===0&&(ho=We()+500,Kl&&ei())}}function es(n){si!==null&&si.tag===0&&!(Ue&6)&&fo();var i=Ue;Ue|=1;var a=vn.transition,c=Ve;try{if(vn.transition=null,Ve=1,n)return n()}finally{Ve=c,vn.transition=a,Ue=i,!(Ue&6)&&ei()}}function id(){an=co.current,Qe(co)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Qw(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(fh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Hl();break;case 3:ao(),Qe(Wt),Qe(Dt),Rh();break;case 5:Sh(c);break;case 4:ao();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:_h(c.type._context);break;case 22:case 23:id()}a=a.return}if(wt=n,lt=n=li(n.current,null),Ct=an=i,mt=0,ka=null,Xh=pu=Zi=0,Qt=Na=null,Yi!==null){for(i=0;i<Yi.length;i++)if(a=Yi[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=f,c.next=_}a.pending=c}Yi=null}return n}function og(n,i){do{var a=lt;try{if(vh(),ru.current=au,iu){for(var c=tt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}iu=!1}if(Ji=0,Et=pt=tt=null,Ia=!1,Sa=0,Yh.current=null,a===null||a.return===null){mt=1,ka=i,lt=null;break}e:{var m=n,_=a.return,A=a,O=i;if(i=Ct,A.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var z=O,X=A,J=X.tag;if(!(X.mode&1)&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Om(_);if(se!==null){se.flags&=-257,Dm(se,_,A,m,i),se.mode&1&&Nm(m,z,i),i=se,O=z;var de=i.updateQueue;if(de===null){var fe=new Set;fe.add(O),i.updateQueue=fe}else de.add(O);break e}else{if(!(i&1)){Nm(m,z,i),sd();break e}O=Error(t(426))}}else if(Je&&A.mode&1){var st=Om(_);if(st!==null){!(st.flags&65536)&&(st.flags|=256),Dm(st,_,A,m,i),gh(lo(O,A));break e}}m=O=lo(O,A),mt!==4&&(mt=2),Na===null?Na=[m]:Na.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var M=Pm(m,O,i);tm(m,M);break e;case 1:A=O;var b=m.type,F=m.stateNode;if(!(m.flags&128)&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ii===null||!ii.has(F)))){m.flags|=65536,i&=-i,m.lanes|=i;var te=km(m,A,i);tm(m,te);break e}}m=m.return}while(m!==null)}ug(a)}catch(me){i=me,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function ag(){var n=fu.current;return fu.current=au,n===null?au:n}function sd(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||!(Zi&268435455)&&!(pu&268435455)||ai(wt,Ct)}function Eu(n,i){var a=Ue;Ue|=2;var c=ag();(wt!==n||Ct!==i)&&(Cr=null,ts(n,i));do try{ET();break}catch(f){og(n,f)}while(!0);if(vh(),Ue=a,fu.current=c,lt!==null)throw Error(t(261));return wt=null,Ct=0,mt}function ET(){for(;lt!==null;)lg(lt)}function wT(){for(;lt!==null&&!yl();)lg(lt)}function lg(n){var i=dg(n.alternate,n,an);n.memoizedProps=n.pendingProps,i===null?ug(n):lt=i,Yh.current=null}function ug(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=pT(a,i),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,lt=null;return}}else if(a=fT(a,i,an),a!==null){lt=a;return}if(i=i.sibling,i!==null){lt=i;return}lt=i=n}while(i!==null);mt===0&&(mt=5)}function ns(n,i,a){var c=Ve,f=vn.transition;try{vn.transition=null,Ve=1,TT(n,i,a,c)}finally{vn.transition=f,Ve=c}return null}function TT(n,i,a,c){do fo();while(si!==null);if(Ue&6)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(qe(n,m),n===wt&&(lt=wt=null,Ct=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||gu||(gu=!0,fg(hn,function(){return fo(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=vn.transition,vn.transition=null;var _=Ve;Ve=1;var A=Ue;Ue|=4,Yh.current=null,gT(n,a),Zm(a,n),Bw(sh),Gr=!!ih,sh=ih=null,n.current=a,yT(a),Bc(),Ue=A,Ve=_,vn.transition=m}else n.current=a;if(gu&&(gu=!1,si=n,yu=f),m=n.pendingLanes,m===0&&(ii=null),El(a.stateNode),Yt(n,We()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(mu)throw mu=!1,n=Zh,Zh=null,n;return yu&1&&n.tag!==0&&fo(),m=n.pendingLanes,m&1?n===ed?Oa++:(Oa=0,ed=n):Oa=0,ei(),null}function fo(){if(si!==null){var n=Wr(yu),i=vn.transition,a=Ve;try{if(vn.transition=null,Ve=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,yu=0,Ue&6)throw Error(t(331));var f=Ue;for(Ue|=4,ae=n.current;ae!==null;){var m=ae,_=m.child;if(ae.flags&16){var A=m.deletions;if(A!==null){for(var O=0;O<A.length;O++){var z=A[O];for(ae=z;ae!==null;){var X=ae;switch(X.tag){case 0:case 11:case 15:Pa(8,X,m)}var J=X.child;if(J!==null)J.return=X,ae=J;else for(;ae!==null;){X=ae;var Y=X.sibling,se=X.return;if(Gm(X),X===z){ae=null;break}if(Y!==null){Y.return=se,ae=Y;break}ae=se}}}var de=m.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var st=fe.sibling;fe.sibling=null,fe=st}while(fe!==null)}}ae=m}}if(m.subtreeFlags&2064&&_!==null)_.return=m,ae=_;else e:for(;ae!==null;){if(m=ae,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Pa(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ae=M;break e}ae=m.return}}var b=n.current;for(ae=b;ae!==null;){_=ae;var F=_.child;if(_.subtreeFlags&2064&&F!==null)F.return=_,ae=F;else e:for(_=b;ae!==null;){if(A=ae,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:du(9,A)}}catch(me){rt(A,A.return,me)}if(A===_){ae=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,ae=te;break e}ae=A.return}}if(Ue=f,ei(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{Ve=a,vn.transition=i}}return!1}function cg(n,i,a){i=lo(a,i),i=Pm(n,i,1),n=ni(n,i,1),i=$t(),n!==null&&(qr(n,1,i),Yt(n,i))}function rt(n,i,a){if(n.tag===3)cg(n,n,a);else for(;i!==null;){if(i.tag===3){cg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=lo(a,n),n=km(i,n,1),i=ni(i,n,1),n=$t(),i!==null&&(qr(i,1,n),Yt(i,n));break}}i=i.return}}function IT(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Ct&a)===a&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>We()-Jh?ts(n,0):Xh|=a),Yt(n,i)}function hg(n,i){i===0&&(n.mode&1?(i=bs,bs<<=1,!(bs&130023424)&&(bs=4194304)):i=1);var a=$t();n=Sr(n,i),n!==null&&(qr(n,i,a),Yt(n,a))}function ST(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),hg(n,a)}function AT(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),hg(n,a)}var dg;dg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Gt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Gt=!1,dT(n,i,a);Gt=!!(n.flags&131072)}else Gt=!1,Je&&i.flags&1048576&&Hp(i,Ql,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;cu(n,i),n=i.pendingProps;var f=eo(i,Dt.current);oo(i,a),f=kh(null,i,c,n,f,a);var m=Nh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kt(c)?(m=!0,Wl(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Th(i),f.updater=lu,i.stateNode=f,f._reactInternals=i,Lh(i,c,n,a),i=jh(null,i,c,!0,m,a)):(i.tag=0,Je&&m&&dh(i),Bt(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(cu(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=CT(c),n=Ln(c,n),f){case 0:i=Uh(null,i,c,n,a);break e;case 1:i=Fm(null,i,c,n,a);break e;case 11:i=xm(null,i,c,n,a);break e;case 14:i=Vm(null,i,c,Ln(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ln(c,f),Uh(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ln(c,f),Fm(n,i,c,f,a);case 3:e:{if(Um(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,em(n,i),tu(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=lo(Error(t(423)),i),i=jm(n,i,c,a,f);break e}else if(c!==f){f=lo(Error(t(424)),i),i=jm(n,i,c,a,f);break e}else for(on=Xr(i.stateNode.containerInfo.firstChild),sn=i,Je=!0,bn=null,a=Jp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ro(),c===f){i=Rr(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return rm(i),n===null&&mh(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,_=f.children,oh(c,f)?_=null:m!==null&&oh(c,m)&&(i.flags|=32),Mm(n,i),Bt(n,i,_,a),i.child;case 6:return n===null&&mh(i),null;case 13:return zm(n,i,a);case 4:return Ih(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=io(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ln(c,f),xm(n,i,c,f,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,_=f.value,Ke(Jl,c._currentValue),c._currentValue=_,m!==null)if(Vn(m.value,_)){if(m.children===f.children&&!Wt.current){i=Rr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var A=m.dependencies;if(A!==null){_=m.child;for(var O=A.firstContext;O!==null;){if(O.context===c){if(m.tag===1){O=Ar(-1,a&-a),O.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?O.next=O:(O.next=X.next,X.next=O),z.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),Eh(m.return,a,i),A.lanes|=a;break}O=O.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,A=_.alternate,A!==null&&(A.lanes|=a),Eh(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}Bt(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,oo(i,a),f=gn(f),c=c(f),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,f=Ln(c,i.pendingProps),f=Ln(c.type,f),Vm(n,i,c,f,a);case 15:return bm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ln(c,f),cu(n,i),i.tag=1,Kt(c)?(n=!0,Wl(i)):n=!1,oo(i,a),Rm(i,c,f),Lh(i,c,f,a),jh(null,i,c,!0,n,a);case 19:return $m(n,i,a);case 22:return Lm(n,i,a)}throw Error(t(156,i.tag))};function fg(n,i){return xs(n,i)}function RT(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,i,a,c){return new RT(n,i,a,c)}function od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function CT(n){if(typeof n=="function")return od(n)?1:0;if(n!=null){if(n=n.$$typeof,n===k)return 11;if(n===ne)return 14}return 2}function li(n,i){var a=n.alternate;return a===null?(a=_n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function wu(n,i,a,c,f,m){var _=2;if(c=n,typeof n=="function")od(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return rs(a.children,f,m,i);case S:_=8,f|=8;break;case R:return n=_n(12,a,i,f|2),n.elementType=R,n.lanes=m,n;case I:return n=_n(13,a,i,f),n.elementType=I,n.lanes=m,n;case ee:return n=_n(19,a,i,f),n.elementType=ee,n.lanes=m,n;case U:return Tu(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:_=10;break e;case P:_=9;break e;case k:_=11;break e;case ne:_=14;break e;case we:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=_n(_,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function rs(n,i,a,c){return n=_n(7,n,c,i),n.lanes=a,n}function Tu(n,i,a,c){return n=_n(22,n,c,i),n.elementType=U,n.lanes=a,n.stateNode={isHidden:!1},n}function ad(n,i,a){return n=_n(6,n,null,i),n.lanes=a,n}function ld(n,i,a){return i=_n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function PT(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ud(n,i,a,c,f,m,_,A,O){return n=new PT(n,i,a,A,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=_n(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(m),n}function kT(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function pg(n){if(!n)return Zr;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Bp(n,a,i)}return i}function mg(n,i,a,c,f,m,_,A,O){return n=ud(a,c,!0,n,f,m,_,A,O),n.context=pg(null),a=n.current,c=$t(),f=oi(a),m=Ar(c,f),m.callback=i??null,ni(a,m,f),n.current.lanes=f,qr(n,f,c),Yt(n,c),n}function Iu(n,i,a,c){var f=i.current,m=$t(),_=oi(f);return a=pg(a),i.context===null?i.context=a:i.pendingContext=a,i=Ar(m,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ni(f,i,_),n!==null&&(Un(n,f,_,m),eu(n,f,_)),_}function Su(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function cd(n,i){gg(n,i),(n=n.alternate)&&gg(n,i)}function NT(){return null}var yg=typeof reportError=="function"?reportError:function(n){console.error(n)};function hd(n){this._internalRoot=n}Au.prototype.render=hd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Iu(n,i,null,null)},Au.prototype.unmount=hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){Iu(null,n,null,null)}),i[Er]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var i=Al();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qn.length&&i!==0&&i<Qn[a].priority;a++);Qn.splice(a,0,n),a===0&&Pl(n)}};function dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vg(){}function OT(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var z=Su(_);m.call(z)}}var _=mg(i,c,n,0,null,!1,!1,"",vg);return n._reactRootContainer=_,n[Er]=_.current,ma(n.nodeType===8?n.parentNode:n),es(),_}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var z=Su(O);A.call(z)}}var O=ud(n,0,!1,null,null,!1,!1,"",vg);return n._reactRootContainer=O,n[Er]=O.current,ma(n.nodeType===8?n.parentNode:n),es(function(){Iu(i,O,a,c)}),O}function Cu(n,i,a,c,f){var m=a._reactRootContainer;if(m){var _=m;if(typeof f=="function"){var A=f;f=function(){var O=Su(_);A.call(O)}}Iu(i,_,n,f)}else _=OT(a,i,n,f,c);return Su(_)}Il=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Br(i.pendingLanes);a!==0&&(Hr(i,a|1),Yt(i,We()),!(Ue&6)&&(ho=We()+500,ei()))}break;case 13:es(function(){var c=Sr(n,1);if(c!==null){var f=$t();Un(c,n,1,f)}}),cd(n,1)}},Ls=function(n){if(n.tag===13){var i=Sr(n,134217728);if(i!==null){var a=$t();Un(i,n,134217728,a)}cd(n,134217728)}},Sl=function(n){if(n.tag===13){var i=oi(n),a=Sr(n,i);if(a!==null){var c=$t();Un(a,n,i,c)}cd(n,i)}},Al=function(){return Ve},Rl=function(n,i){var a=Ve;try{return Ve=n,i()}finally{Ve=a}},Cs=function(n,i,a){switch(i){case"input":if(jo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=ql(c);if(!f)throw Error(t(90));ws(c),jo(c,f)}}}break;case"textarea":As(n,a);break;case"select":i=a.value,i!=null&&dr(n,!!a.multiple,i,!1)}},Vi=rd,Yo=es;var DT={usingClientEntryPoint:!1,Events:[va,Js,ql,Kn,Qo,rd]},Da={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xT={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zo(n),n===null?null:n.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||NT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Ui=Pu.inject(xT),en=Pu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DT,Xt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(i))throw Error(t(200));return kT(n,i,null,a)},Xt.createRoot=function(n,i){if(!dd(n))throw Error(t(299));var a=!1,c="",f=yg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ud(n,1,!1,null,null,a,!1,c,f),n[Er]=i.current,ma(n.nodeType===8?n.parentNode:n),new hd(i)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Zo(i),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return es(n)},Xt.hydrate=function(n,i,a){if(!Ru(i))throw Error(t(200));return Cu(null,n,i,!0,a)},Xt.hydrateRoot=function(n,i,a){if(!dd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",_=yg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=mg(i,null,n,1,a??null,f,!1,m,_),n[Er]=i.current,ma(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Au(i)},Xt.render=function(n,i,a){if(!Ru(i))throw Error(t(200));return Cu(null,n,i,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Xt.unstable_batchedUpdates=rd,Xt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cu(n,i,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Rg;function Nv(){if(Rg)return md.exports;Rg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),md.exports=WT(),md.exports}var Cg;function KT(){if(Cg)return ku;Cg=1;var r=Nv();return ku.createRoot=r.createRoot,ku.hydrateRoot=r.hydrateRoot,ku}var GT=KT(),Pg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},QT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],d=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Dv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,d=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let C=(d&15)<<2|v>>6,x=v&63;g||(x=64,h||(C=64)),s.push(t[E],t[T],t[C],t[x])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ov(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):QT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],d=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||d==null||v==null||T==null)throw new YT;const C=l<<2|d>>4;if(s.push(C),v!==64){const x=d<<4&240|v>>2;if(s.push(x),T!==64){const j=v<<6&192|T;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class YT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XT=function(r){const e=Ov(r);return Dv.encodeByteArray(e,!0)},Xu=function(r){return XT(r).replace(/\./g,"")},xv=function(r){try{return Dv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=()=>JT().__FIREBASE_DEFAULTS__,eI=()=>{if(typeof process>"u"||typeof Pg>"u")return;const r=Pg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},tI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&xv(r[1]);return e&&JSON.parse(e)},Ec=()=>{try{return ZT()||eI()||tI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Vv=r=>{var e,t;return(t=(e=Ec())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},nI=r=>{const e=Vv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},bv=()=>{var r;return(r=Ec())===null||r===void 0?void 0:r.config},Lv=r=>{var e;return(e=Ec())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Xu(JSON.stringify(t)),Xu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function oI(){var r;const e=(r=Ec())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mv(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function lI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uI(){const r=Ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function cI(){return!oI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fv(){try{return typeof indexedDB=="object"}catch{return!1}}function Uv(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function hI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="FirebaseError";class Hn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=dI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?fI(l,s):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Hn(o,d,s)}}function fI(r,e){return r.replace(pI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const pI=/\{\$([^}]+)}/g;function mI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ka(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(kg(l)&&kg(h)){if(!Ka(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function kg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ba(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function La(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function gI(r,e){const t=new yI(r,e);return t.subscribe.bind(t)}class yI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=vd),o.error===void 0&&(o.error=vd),o.complete===void 0&&(o.complete=vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function vd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1e3,EI=2,wI=4*60*60*1e3,TI=.5;function Ng(r,e=_I,t=EI){const s=e*Math.pow(t,r),o=Math.round(TI*s*(Math.random()-.5)*2);return Math.min(wI,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(r){return r&&r._delegate?r._delegate:r}class $n{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new rI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:SI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SI(r){return r===ss?void 0:r}function AI(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new II(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const CI={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},PI=Oe.INFO,kI={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},NI=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=kI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=NI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const OI=(r,e)=>e.some(t=>r instanceof t);let Og,Dg;function DI(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xI(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jv=new WeakMap,Md=new WeakMap,zv=new WeakMap,_d=new WeakMap,hf=new WeakMap;function VI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(mi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&jv.set(t,r)}).catch(()=>{}),hf.set(e,r),e}function bI(r){if(Md.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Md.set(r,e)}let Fd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Md.get(r);if(e==="objectStoreNames")return r.objectStoreNames||zv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function LI(r){Fd=r(Fd)}function MI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Ed(this),e,...t);return zv.set(s,e.sort?e.sort():[e]),mi(s)}:xI().includes(r)?function(...e){return r.apply(Ed(this),e),mi(jv.get(this))}:function(...e){return mi(r.apply(Ed(this),e))}}function FI(r){return typeof r=="function"?MI(r):(r instanceof IDBTransaction&&bI(r),OI(r,DI())?new Proxy(r,Fd):r)}function mi(r){if(r instanceof IDBRequest)return VI(r);if(_d.has(r))return _d.get(r);const e=FI(r);return e!==r&&(_d.set(r,e),hf.set(e,r)),e}const Ed=r=>hf.get(r);function Bv(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),d=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),d.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),d}const UI=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],wd=new Map;function xg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=jI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||UI.includes(t)))return;const l=async function(h,...d){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(d.shift())),(await Promise.all([v[t](...d),o&&g.done]))[0]};return wd.set(e,l),l}LI(r=>({...r,get:(e,t,s)=>xg(e,t)||r.get(e,t,s),has:(e,t)=>!!xg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(BI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function BI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ud="@firebase/app",Vg="0.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new wc("@firebase/app"),$I="@firebase/app-compat",qI="@firebase/analytics-compat",HI="@firebase/analytics",WI="@firebase/app-check-compat",KI="@firebase/app-check",GI="@firebase/auth",QI="@firebase/auth-compat",YI="@firebase/database",XI="@firebase/data-connect",JI="@firebase/database-compat",ZI="@firebase/functions",e0="@firebase/functions-compat",t0="@firebase/installations",n0="@firebase/installations-compat",r0="@firebase/messaging",i0="@firebase/messaging-compat",s0="@firebase/performance",o0="@firebase/performance-compat",a0="@firebase/remote-config",l0="@firebase/remote-config-compat",u0="@firebase/storage",c0="@firebase/storage-compat",h0="@firebase/firestore",d0="@firebase/vertexai",f0="@firebase/firestore-compat",p0="firebase",m0="11.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="[DEFAULT]",g0={[Ud]:"fire-core",[$I]:"fire-core-compat",[HI]:"fire-analytics",[qI]:"fire-analytics-compat",[KI]:"fire-app-check",[WI]:"fire-app-check-compat",[GI]:"fire-auth",[QI]:"fire-auth-compat",[YI]:"fire-rtdb",[XI]:"fire-data-connect",[JI]:"fire-rtdb-compat",[ZI]:"fire-fn",[e0]:"fire-fn-compat",[t0]:"fire-iid",[n0]:"fire-iid-compat",[r0]:"fire-fcm",[i0]:"fire-fcm-compat",[s0]:"fire-perf",[o0]:"fire-perf-compat",[a0]:"fire-rc",[l0]:"fire-rc-compat",[u0]:"fire-gcs",[c0]:"fire-gcs-compat",[h0]:"fire-fst",[f0]:"fire-fst-compat",[d0]:"fire-vertex","fire-js":"fire-js",[p0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Map,y0=new Map,zd=new Map;function bg(r,e){try{r.container.addComponent(e)}catch(t){br.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function lr(r){const e=r.name;if(zd.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;zd.set(e,r);for(const t of Ju.values())bg(t,r);for(const t of y0.values())bg(t,r);return!0}function gs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ln(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new ms("app","Firebase",v0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=m0;function $v(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=bv()),!t)throw gi.create("no-options");const l=Ju.get(o);if(l){if(Ka(t,l.options)&&Ka(s,l.config))return l;throw gi.create("duplicate-app",{appName:o})}const h=new RI(o);for(const g of zd.values())h.addComponent(g);const d=new _0(t,s,h);return Ju.set(o,d),d}function df(r=jd){const e=Ju.get(r);if(!e&&r===jd&&bv())return $v();if(!e)throw gi.create("no-app",{appName:r});return e}function Tn(r,e,t){var s;let o=(s=g0[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(d.join(" "));return}lr(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="firebase-heartbeat-database",w0=1,Ga="firebase-heartbeat-store";let Td=null;function qv(){return Td||(Td=Bv(E0,w0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ga)}catch(t){console.warn(t)}}}}).catch(r=>{throw gi.create("idb-open",{originalErrorMessage:r.message})})),Td}async function T0(r){try{const t=(await qv()).transaction(Ga),s=await t.objectStore(Ga).get(Hv(r));return await t.done,s}catch(e){if(e instanceof Hn)br.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(t.message)}}}async function Lg(r,e){try{const s=(await qv()).transaction(Ga,"readwrite");await s.objectStore(Ga).put(e,Hv(r)),await s.done}catch(t){if(t instanceof Hn)br.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});br.warn(s.message)}}}function Hv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=1024,S0=30;class A0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new C0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Mg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>S0){const h=P0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){br.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mg(),{heartbeatsToSend:s,unsentEntries:o}=R0(this._heartbeatsCache.heartbeats),l=Xu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return br.warn(t),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function R0(r,e=I0){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Fg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class C0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fv()?Uv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await T0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fg(r){return Xu(JSON.stringify({version:2,heartbeats:r})).length}function P0(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(r){lr(new $n("platform-logger",e=>new zI(e),"PRIVATE")),lr(new $n("heartbeat",e=>new A0(e),"PRIVATE")),Tn(Ud,Vg,r),Tn(Ud,Vg,"esm2017"),Tn("fire-js","")}k0("");function ff(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const N0=Wv,Kv=new ms("auth","Firebase",Wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new wc("@firebase/auth");function O0(r,...e){Zu.logLevel<=Oe.WARN&&Zu.warn(`Auth (${Do}): ${r}`,...e)}function zu(r,...e){Zu.logLevel<=Oe.ERROR&&Zu.error(`Auth (${Do}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(r,...e){throw mf(r,...e)}function Bn(r,...e){return mf(r,...e)}function pf(r,e,t){const s=Object.assign(Object.assign({},N0()),{[e]:t});return new ms("auth","Firebase",s).create(e,{appName:r.name})}function xr(r){return pf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function D0(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Sn(r,"argument-error"),pf(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Kv.create(r,...e)}function Te(r,e,...t){if(!r)throw mf(e,...t)}function Nr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw zu(e),new Error(e)}function Lr(r,e){r||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function x0(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x0()||Mv()||"connection"in navigator)?navigator.onLine:!0}function b0(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lr(t>e,"Short delay should be less than long delay!"),this.isMobile=sI()||lI()}get(){return V0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r,e){Lr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new ol(3e4,6e4);function Ri(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ci(r,e,t,s,o={}){return Qv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const d=sl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return aI()||(v.referrerPolicy="no-referrer"),Gv.fetch()(Yv(r,r.config.apiHost,t,d),v)})}async function Qv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},L0),e);try{const o=new U0(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Nu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[g,v]=d.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Nu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Nu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw pf(r,E,v);Sn(r,E)}}catch(o){if(o instanceof Hn)throw o;Sn(r,"network-request-failed",{message:String(o)})}}async function al(r,e,t,s,o={}){const l=await Ci(r,e,t,s,o);return"mfaPendingCredential"in l&&Sn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function Yv(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?gf(r.config,o):`${r.config.apiScheme}://${o}`}function F0(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Bn(this.auth,"network-request-failed")),M0.get())})}}function Nu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Bn(r,e,s);return o.customData._tokenResponse=t,o}function jg(r){return r!==void 0&&r.enterprise!==void 0}class j0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function z0(r,e){return Ci(r,"GET","/v2/recaptchaConfig",Ri(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(r,e){return Ci(r,"POST","/v1/accounts:delete",e)}async function Xv(r,e){return Ci(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $0(r,e=!1){const t=Nt(r),s=await t.getIdToken(e),o=yf(s);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:za(Id(o.auth_time)),issuedAtTime:za(Id(o.iat)),expirationTime:za(Id(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Id(r){return Number(r)*1e3}function yf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=xv(t);return o?JSON.parse(o):(zu("Failed to decode base64 JWT payload"),null)}catch(o){return zu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function zg(r){const e=yf(r);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Hn&&q0(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function q0({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Qa(r,Xv(t,{idToken:s}));Te(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Jv(l.providerUserInfo):[],d=K0(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(d!=null&&d.length),E=g?v:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new $d(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function W0(r){const e=Nt(r);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K0(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Jv(r){return r.map(e=>{var{providerId:t}=e,s=ff(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(r,e){const t=await Qv(r,{},async()=>{const s=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=Yv(r,o,"/v1/token",`key=${l}`),d=await r._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Gv.fetch()(h,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Q0(r,e){return Ci(r,"POST","/v2/accounts:revokeToken",Ri(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=zg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await G0(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new wo;return s&&(Te(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Te(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r,e){Te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Or{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new $d(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $0(this,e)}reload(){return W0(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Qa(this,B0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,d,g,v,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,j=(h=t.photoURL)!==null&&h!==void 0?h:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,le=(v=t.createdAt)!==null&&v!==void 0?v:void 0,pe=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ge,emailVerified:Ee,isAnonymous:Me,providerData:ce,stsTokenManager:N}=t;Te(ge&&N,e,"internal-error");const S=wo.fromJSON(this.name,N);Te(typeof ge=="string",e,"internal-error"),ci(T,e.name),ci(C,e.name),Te(typeof Ee=="boolean",e,"internal-error"),Te(typeof Me=="boolean",e,"internal-error"),ci(x,e.name),ci(j,e.name),ci(H,e.name),ci($,e.name),ci(le,e.name),ci(pe,e.name);const R=new Or({uid:ge,auth:e,email:C,emailVerified:Ee,displayName:T,isAnonymous:Me,photoURL:j,phoneNumber:x,tenantId:H,stsTokenManager:S,createdAt:le,lastLoginAt:pe});return ce&&Array.isArray(ce)&&(R.providerData=ce.map(D=>Object.assign({},D))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new wo;o.updateFromServerResponse(t);const l=new Or({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ec(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Jv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new wo;d.updateFromIdToken(s);const g=new Or({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new $d(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Map;function Dr(r){Lr(r instanceof Function,"Expected a class definition");let e=Bg.get(r);return e?(Lr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zv.type="NONE";const $g=Zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(r,e,t){return`firebase:${r}:${e}:${t}`}class To{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Bu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Bu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new To(Dr($g),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Dr($g);const h=Bu(s,e.config.apiKey,e.name);let d=null;for(const v of t)try{const E=await v._get(h);if(E){const T=Or._fromJSON(e,E);v!==l&&(d=T),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new To(l,e,s):(l=g[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new To(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(r_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s_(e))return"Blackberry";if(o_(e))return"Webos";if(t_(e))return"Safari";if((e.includes("chrome/")||n_(e))&&!e.includes("edge/"))return"Chrome";if(i_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function e_(r=Ut()){return/firefox\//i.test(r)}function t_(r=Ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n_(r=Ut()){return/crios\//i.test(r)}function r_(r=Ut()){return/iemobile/i.test(r)}function i_(r=Ut()){return/android/i.test(r)}function s_(r=Ut()){return/blackberry/i.test(r)}function o_(r=Ut()){return/webos/i.test(r)}function vf(r=Ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Y0(r=Ut()){var e;return vf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X0(){return uI()&&document.documentMode===10}function a_(r=Ut()){return vf(r)||i_(r)||o_(r)||s_(r)||/windows phone/i.test(r)||r_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(r,e=[]){let t;switch(r){case"Browser":t=qg(Ut());break;case"Worker":t=`${qg(Ut())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Do}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,d)=>{try{const g=e(l);h(g)}catch(g){d(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(r,e={}){return Ci(r,"GET","/v2/passwordPolicy",Ri(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=6;class tS{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:eS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,d;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(d=g.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new J0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xv(this,{idToken:e}),s=await Or._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ln(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===d)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(xr(this));const t=e?Nt(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z0(this),t=new tS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Q0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&O0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Pi(r){return Nt(r)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=gI(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rS(r){Tc=r}function u_(r){return Tc.loadJS(r)}function iS(){return Tc.recaptchaEnterpriseScript}function sS(){return Tc.gapiScript}function oS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class aS{constructor(){this.enterprise=new lS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const uS="recaptcha-enterprise",c_="NO_RECAPTCHA";class cS{constructor(e){this.type=uS,this.auth=Pi(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{z0(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const v=new j0(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(g=>{d(g)})})}function o(l,h,d){const g=window.grecaptcha;jg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(c_)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(d=>{if(!t&&jg(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=iS();g.length!==0&&(g+=d),u_(g).then(()=>{o(d,l,h)}).catch(v=>{h(v)})}}).catch(d=>{h(d)})})}}async function Wg(r,e,t,s=!1,o=!1){const l=new cS(r);let h;if(o)h=c_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const g=d.phoneEnrollmentInfo.phoneNumber,v=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const g=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function qd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Wg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Wg(r,e,t,t==="getOobCode");return s(r,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(r,e){const t=gs(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ka(l,e??{}))return o;Sn(o,"already-initialized")}return t.initialize({options:e})}function dS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fS(r,e,t){const s=Pi(r);Te(s._canInitEmulator,s,"emulator-config-failed"),Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=h_(e),{host:h,port:d}=pS(e),g=d===null?"":`:${d}`;s.config.emulator={url:`${l}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),mS()}function h_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function pS(r){const e=h_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Kg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Kg(h)}}}function Kg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function mS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}async function gS(r,e){return Ci(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(r,e){return al(r,"POST","/v1/accounts:signInWithPassword",Ri(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Ri(r,e))}async function _S(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Ri(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends _f{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ya(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ya(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qd(e,t,"signInWithPassword",yS);case"emailLink":return vS(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qd(e,s,"signUpPassword",gS);case"emailLink":return _S(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(r,e){return al(r,"POST","/v1/accounts:signInWithIdp",Ri(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="http://localhost";class us extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=ff(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new us(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Io(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:ES,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TS(r){const e=ba(La(r)).link,t=e?ba(La(e)).deep_link_id:null,s=ba(La(r)).deep_link_id;return(s?ba(La(s)).link:null)||s||t||e||r}class Ef{constructor(e){var t,s,o,l,h,d;const g=ba(La(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,T=wS((o=g.mode)!==null&&o!==void 0?o:null);Te(v&&E&&T,"argument-error"),this.apiKey=v,this.operation=T,this.code=E,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=g.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=TS(e);try{return new Ef(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,t){return Ya._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ef.parseLink(t);return Te(s,"argument-error"),Ya._fromEmailAndCode(e,s.code,s.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ll{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Pr.credential(t,s)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ll{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ll{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(r,e){return al(r,"POST","/v1/accounts:signUp",Ri(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Or._fromIdTokenResponse(e,s,o),h=Gg(s);return new cs({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Gg(s);return new cs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Gg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends Hn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new tc(e,t,s,o)}}function d_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(r,l,e,s):l})}async function SS(r,e,t=!1){const s=await Qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return cs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(r,e,t=!1){const{auth:s}=r;if(ln(s.app))return Promise.reject(xr(s));const o="reauthenticate";try{const l=await Qa(r,d_(s,o,e,r),t);Te(l.idToken,s,"internal-error");const h=yf(l.idToken);Te(h,s,"internal-error");const{sub:d}=h;return Te(r.uid===d,s,"user-mismatch"),cs._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(r,e,t=!1){if(ln(r.app))return Promise.reject(xr(r));const s="signIn",o=await d_(r,s,e),l=await cs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function RS(r,e){return f_(Pi(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(r){const e=Pi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CS(r,e,t){if(ln(r.app))return Promise.reject(xr(r));const s=Pi(r),h=await qd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&p_(r),g}),d=await cs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(d.user),d}function PS(r,e,t){return ln(r.app)?Promise.reject(xr(r)):RS(Nt(r),xo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&p_(r),s})}function kS(r,e,t,s){return Nt(r).onIdTokenChanged(e,t,s)}function NS(r,e,t){return Nt(r).beforeAuthStateChanged(e,t)}function m_(r,e,t,s){return Nt(r).onAuthStateChanged(e,t,s)}function OS(r){return Nt(r).signOut()}const nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1e3,xS=10;class y_ extends g_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);X0()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,xS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}y_.type="LOCAL";const VS=y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_ extends g_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}v_.type="SESSION";const __=v_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const d=Array.from(h).map(async v=>v(t.origin,l)),g=await bS(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,g)=>{const v=Tf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(C.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function MS(r){sr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function FS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function US(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function jS(){return E_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="firebaseLocalStorageDb",zS=1,rc="firebaseLocalStorage",T_="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sc(r,e){return r.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function BS(){const r=indexedDB.deleteDatabase(w_);return new ul(r).toPromise()}function Hd(){const r=indexedDB.open(w_,zS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(rc,{keyPath:T_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(rc)?e(s):(s.close(),await BS(),e(await Hd()))})})}async function Qg(r,e,t){const s=Sc(r,!0).put({[T_]:e,value:t});return new ul(s).toPromise()}async function $S(r,e){const t=Sc(r,!1).get(e),s=await new ul(t).toPromise();return s===void 0?null:s.value}function Yg(r,e){const t=Sc(r,!0).delete(e);return new ul(t).toPromise()}const qS=800,HS=3;class I_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>HS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(jS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await FS(),!this.activeServiceWorker)return;this.sender=new LS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||US()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hd();return await Qg(e,nc,"1"),await Yg(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>$S(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Sc(o,!1).getAll();return new ul(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I_.type="LOCAL";const WS=I_;new ol(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(r,e){return e?Dr(e):(Te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function KS(r){return f_(r.auth,new If(r),r.bypassAuthState)}function GS(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),AS(t,new If(r),r.bypassAuthState)}async function QS(r){const{auth:e,user:t}=r;return Te(t,e,"internal-error"),SS(t,new If(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KS;case"linkViaPopup":case"linkViaRedirect":return QS;case"reauthViaPopup":case"reauthViaRedirect":return GS;default:Sn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=new ol(2e3,1e4);async function Xg(r,e,t){if(ln(r.app))return Promise.reject(Bn(r,"operation-not-supported-in-this-environment"));const s=Pi(r);D0(r,e,wf);const o=S_(s,t);return new os(s,"signInViaPopup",e,o).executeNotNull()}class os extends A_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=Tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YS.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="pendingRedirect",$u=new Map;class JS extends A_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=$u.get(this.auth._key());if(!e){try{const s=await ZS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}$u.set(this.auth._key(),e)}return this.bypassAuthState||$u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZS(r,e){const t=nA(e),s=tA(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function eA(r,e){$u.set(r._key(),e)}function tA(r){return Dr(r._redirectPersistence)}function nA(r){return Bu(XS,r.config.apiKey,r.name)}async function rA(r,e,t=!1){if(ln(r.app))return Promise.reject(xr(r));const s=Pi(r),o=S_(s,e),h=await new JS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=10*60*1e3;class sA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!R_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Bn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function R_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(r,e={}){return Ci(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uA=/^https?/;async function cA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await aA(r);for(const t of e)try{if(hA(t))return}catch{}Sn(r,"unauthorized-domain")}function hA(r){const e=Bd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!uA.test(t))return!1;if(lA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new ol(3e4,6e4);function Zg(){const r=sr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function fA(r){return new Promise((e,t)=>{var s,o,l;function h(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),t(Bn(r,"network-request-failed"))},timeout:dA.get()})}if(!((o=(s=sr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const d=oS("iframefcb");return sr()[d]=()=>{gapi.load?h():t(Bn(r,"network-request-failed"))},u_(`${sS()}?onload=${d}`).catch(g=>t(g))}}).catch(e=>{throw qu=null,e})}let qu=null;function pA(r){return qu=qu||fA(r),qu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new ol(5e3,15e3),gA="__/auth/iframe",yA="emulator/auth/iframe",vA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_A=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EA(r){const e=r.config;Te(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?gf(e,yA):`https://${r.config.authDomain}/${gA}`,s={apiKey:e.apiKey,appName:r.name,v:Do},o=_A.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${sl(s).slice(1)}`}async function wA(r){const e=await pA(r),t=sr().gapi;return Te(t,r,"internal-error"),e.open({where:document.body,url:EA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Bn(r,"network-request-failed"),d=sr().setTimeout(()=>{l(h)},mA.get());function g(){sr().clearTimeout(d),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IA=500,SA=600,AA="_blank",RA="http://localhost";class ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CA(r,e,t,s=IA,o=SA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const g=Object.assign(Object.assign({},TA),{width:s.toString(),height:o.toString(),top:l,left:h}),v=Ut().toLowerCase();t&&(d=n_(v)?AA:t),e_(v)&&(e=e||RA,g.scrollbars="yes");const E=Object.entries(g).reduce((C,[x,j])=>`${C}${x}=${j},`,"");if(Y0(v)&&d!=="_self")return PA(e||"",d),new ey(null);const T=window.open(e||"",d,E);Te(T,r,"popup-blocked");try{T.focus()}catch{}return new ey(T)}function PA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="__/auth/handler",NA="emulator/auth/handler",OA=encodeURIComponent("fac");async function ty(r,e,t,s,o,l){Te(r.config.authDomain,r,"auth-domain-config-required"),Te(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Do,eventId:o};if(e instanceof wf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",mI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof ll){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const g=await r._getAppCheckToken(),v=g?`#${OA}=${encodeURIComponent(g)}`:"";return`${DA(r)}?${sl(d).slice(1)}${v}`}function DA({config:r}){return r.emulator?gf(r,NA):`https://${r.authDomain}/${kA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="webStorageSupport";class xA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=__,this._completeRedirectFn=rA,this._overrideRedirectResult=eA}async _openPopup(e,t,s,o){var l;Lr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await ty(e,t,s,Bd(),o);return CA(e,h,Tf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await ty(e,t,s,Bd(),o);return MS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Lr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wA(e),s=new sA(e);return t.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sd,{type:Sd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Sd];h!==void 0&&t(!!h),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return a_()||t_()||vf()}}const VA=xA;var ny="@firebase/auth",ry="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MA(r){lr(new $n("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=s.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:d,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l_(r)},v=new nS(s,o,l,g);return dS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),lr(new $n("auth-internal",e=>{const t=Pi(e.getProvider("auth").getImmediate());return(s=>new bA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(ny,ry,LA(r)),Tn(ny,ry,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=5*60,UA=Lv("authIdTokenMaxAge")||FA;let iy=null;const jA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>UA)return;const o=t==null?void 0:t.token;iy!==o&&(iy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ac(r=df()){const e=gs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=hS(r,{popupRedirectResolver:VA,persistence:[WS,VS,__]}),s=Lv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=jA(l.toString());NS(t,h,()=>h(t.currentUser)),kS(t,d=>h(d))}}const o=Vv("auth");return o&&fS(t,`http://${o}`),t}function zA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}rS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Bn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",zA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MA("Browser");var BA="firebase",$A="11.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(BA,$A,"app");var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,C_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function R(){}R.prototype=S.prototype,N.D=S.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(D,P,k){for(var I=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)I[ee-2]=arguments[ee];return S.prototype[P].apply(D,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,R){R||(R=0);var D=Array(16);if(typeof S=="string")for(var P=0;16>P;++P)D[P]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(P=0;16>P;++P)D[P]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=N.g[0],R=N.g[1],P=N.g[2];var k=N.g[3],I=S+(k^R&(P^k))+D[0]+3614090360&4294967295;S=R+(I<<7&4294967295|I>>>25),I=k+(P^S&(R^P))+D[1]+3905402710&4294967295,k=S+(I<<12&4294967295|I>>>20),I=P+(R^k&(S^R))+D[2]+606105819&4294967295,P=k+(I<<17&4294967295|I>>>15),I=R+(S^P&(k^S))+D[3]+3250441966&4294967295,R=P+(I<<22&4294967295|I>>>10),I=S+(k^R&(P^k))+D[4]+4118548399&4294967295,S=R+(I<<7&4294967295|I>>>25),I=k+(P^S&(R^P))+D[5]+1200080426&4294967295,k=S+(I<<12&4294967295|I>>>20),I=P+(R^k&(S^R))+D[6]+2821735955&4294967295,P=k+(I<<17&4294967295|I>>>15),I=R+(S^P&(k^S))+D[7]+4249261313&4294967295,R=P+(I<<22&4294967295|I>>>10),I=S+(k^R&(P^k))+D[8]+1770035416&4294967295,S=R+(I<<7&4294967295|I>>>25),I=k+(P^S&(R^P))+D[9]+2336552879&4294967295,k=S+(I<<12&4294967295|I>>>20),I=P+(R^k&(S^R))+D[10]+4294925233&4294967295,P=k+(I<<17&4294967295|I>>>15),I=R+(S^P&(k^S))+D[11]+2304563134&4294967295,R=P+(I<<22&4294967295|I>>>10),I=S+(k^R&(P^k))+D[12]+1804603682&4294967295,S=R+(I<<7&4294967295|I>>>25),I=k+(P^S&(R^P))+D[13]+4254626195&4294967295,k=S+(I<<12&4294967295|I>>>20),I=P+(R^k&(S^R))+D[14]+2792965006&4294967295,P=k+(I<<17&4294967295|I>>>15),I=R+(S^P&(k^S))+D[15]+1236535329&4294967295,R=P+(I<<22&4294967295|I>>>10),I=S+(P^k&(R^P))+D[1]+4129170786&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^P&(S^R))+D[6]+3225465664&4294967295,k=S+(I<<9&4294967295|I>>>23),I=P+(S^R&(k^S))+D[11]+643717713&4294967295,P=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(P^k))+D[0]+3921069994&4294967295,R=P+(I<<20&4294967295|I>>>12),I=S+(P^k&(R^P))+D[5]+3593408605&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^P&(S^R))+D[10]+38016083&4294967295,k=S+(I<<9&4294967295|I>>>23),I=P+(S^R&(k^S))+D[15]+3634488961&4294967295,P=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(P^k))+D[4]+3889429448&4294967295,R=P+(I<<20&4294967295|I>>>12),I=S+(P^k&(R^P))+D[9]+568446438&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^P&(S^R))+D[14]+3275163606&4294967295,k=S+(I<<9&4294967295|I>>>23),I=P+(S^R&(k^S))+D[3]+4107603335&4294967295,P=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(P^k))+D[8]+1163531501&4294967295,R=P+(I<<20&4294967295|I>>>12),I=S+(P^k&(R^P))+D[13]+2850285829&4294967295,S=R+(I<<5&4294967295|I>>>27),I=k+(R^P&(S^R))+D[2]+4243563512&4294967295,k=S+(I<<9&4294967295|I>>>23),I=P+(S^R&(k^S))+D[7]+1735328473&4294967295,P=k+(I<<14&4294967295|I>>>18),I=R+(k^S&(P^k))+D[12]+2368359562&4294967295,R=P+(I<<20&4294967295|I>>>12),I=S+(R^P^k)+D[5]+4294588738&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^P)+D[8]+2272392833&4294967295,k=S+(I<<11&4294967295|I>>>21),I=P+(k^S^R)+D[11]+1839030562&4294967295,P=k+(I<<16&4294967295|I>>>16),I=R+(P^k^S)+D[14]+4259657740&4294967295,R=P+(I<<23&4294967295|I>>>9),I=S+(R^P^k)+D[1]+2763975236&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^P)+D[4]+1272893353&4294967295,k=S+(I<<11&4294967295|I>>>21),I=P+(k^S^R)+D[7]+4139469664&4294967295,P=k+(I<<16&4294967295|I>>>16),I=R+(P^k^S)+D[10]+3200236656&4294967295,R=P+(I<<23&4294967295|I>>>9),I=S+(R^P^k)+D[13]+681279174&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^P)+D[0]+3936430074&4294967295,k=S+(I<<11&4294967295|I>>>21),I=P+(k^S^R)+D[3]+3572445317&4294967295,P=k+(I<<16&4294967295|I>>>16),I=R+(P^k^S)+D[6]+76029189&4294967295,R=P+(I<<23&4294967295|I>>>9),I=S+(R^P^k)+D[9]+3654602809&4294967295,S=R+(I<<4&4294967295|I>>>28),I=k+(S^R^P)+D[12]+3873151461&4294967295,k=S+(I<<11&4294967295|I>>>21),I=P+(k^S^R)+D[15]+530742520&4294967295,P=k+(I<<16&4294967295|I>>>16),I=R+(P^k^S)+D[2]+3299628645&4294967295,R=P+(I<<23&4294967295|I>>>9),I=S+(P^(R|~k))+D[0]+4096336452&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~P))+D[7]+1126891415&4294967295,k=S+(I<<10&4294967295|I>>>22),I=P+(S^(k|~R))+D[14]+2878612391&4294967295,P=k+(I<<15&4294967295|I>>>17),I=R+(k^(P|~S))+D[5]+4237533241&4294967295,R=P+(I<<21&4294967295|I>>>11),I=S+(P^(R|~k))+D[12]+1700485571&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~P))+D[3]+2399980690&4294967295,k=S+(I<<10&4294967295|I>>>22),I=P+(S^(k|~R))+D[10]+4293915773&4294967295,P=k+(I<<15&4294967295|I>>>17),I=R+(k^(P|~S))+D[1]+2240044497&4294967295,R=P+(I<<21&4294967295|I>>>11),I=S+(P^(R|~k))+D[8]+1873313359&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~P))+D[15]+4264355552&4294967295,k=S+(I<<10&4294967295|I>>>22),I=P+(S^(k|~R))+D[6]+2734768916&4294967295,P=k+(I<<15&4294967295|I>>>17),I=R+(k^(P|~S))+D[13]+1309151649&4294967295,R=P+(I<<21&4294967295|I>>>11),I=S+(P^(R|~k))+D[4]+4149444226&4294967295,S=R+(I<<6&4294967295|I>>>26),I=k+(R^(S|~P))+D[11]+3174756917&4294967295,k=S+(I<<10&4294967295|I>>>22),I=P+(S^(k|~R))+D[2]+718787259&4294967295,P=k+(I<<15&4294967295|I>>>17),I=R+(k^(P|~S))+D[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+P&4294967295,N.g[3]=N.g[3]+k&4294967295}s.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var R=S-this.blockSize,D=this.B,P=this.h,k=0;k<S;){if(P==0)for(;k<=R;)o(this,N,k),k+=this.blockSize;if(typeof N=="string"){for(;k<S;)if(D[P++]=N.charCodeAt(k++),P==this.blockSize){o(this,D),P=0;break}}else for(;k<S;)if(D[P++]=N[k++],P==this.blockSize){o(this,D),P=0;break}}this.h=P,this.o+=S},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var R=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=R&255,R/=256;for(this.u(N),N=Array(16),S=R=0;4>S;++S)for(var D=0;32>D;D+=8)N[R++]=this.g[S]>>>D&255;return N};function l(N,S){var R=d;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=S(N)}function h(N,S){this.h=S;for(var R=[],D=!0,P=N.length-1;0<=P;P--){var k=N[P]|0;D&&k==S||(R[P]=k,D=!1)}this.g=R}var d={};function g(N){return-128<=N&&128>N?l(N,function(S){return new h([S|0],0>S?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return $(v(-N));for(var S=[],R=1,D=0;N>=R;D++)S[D]=N/R|0,R*=4294967296;return new h(S,0)}function E(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return $(E(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(S,8)),D=T,P=0;P<N.length;P+=8){var k=Math.min(8,N.length-P),I=parseInt(N.substring(P,P+k),S);8>k?(k=v(Math.pow(S,k)),D=D.j(k).add(v(I))):(D=D.j(R),D=D.add(v(I)))}return D}var T=g(0),C=g(1),x=g(16777216);r=h.prototype,r.m=function(){if(H(this))return-$(this).m();for(var N=0,S=1,R=0;R<this.g.length;R++){var D=this.i(R);N+=(0<=D?D:4294967296+D)*S,S*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(j(this))return"0";if(H(this))return"-"+$(this).toString(N);for(var S=v(Math.pow(N,6)),R=this,D="";;){var P=Ee(R,S).g;R=le(R,P.j(S));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=P,j(R))return k+D;for(;6>k.length;)k="0"+k;D=k+D}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function j(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function H(N){return N.h==-1}r.l=function(N){return N=le(this,N),H(N)?-1:j(N)?0:1};function $(N){for(var S=N.g.length,R=[],D=0;D<S;D++)R[D]=~N.g[D];return new h(R,~N.h).add(C)}r.abs=function(){return H(this)?$(this):this},r.add=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],D=0,P=0;P<=S;P++){var k=D+(this.i(P)&65535)+(N.i(P)&65535),I=(k>>>16)+(this.i(P)>>>16)+(N.i(P)>>>16);D=I>>>16,k&=65535,I&=65535,R[P]=I<<16|k}return new h(R,R[R.length-1]&-2147483648?-1:0)};function le(N,S){return N.add($(S))}r.j=function(N){if(j(this)||j(N))return T;if(H(this))return H(N)?$(this).j($(N)):$($(this).j(N));if(H(N))return $(this.j($(N)));if(0>this.l(x)&&0>N.l(x))return v(this.m()*N.m());for(var S=this.g.length+N.g.length,R=[],D=0;D<2*S;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(var P=0;P<N.g.length;P++){var k=this.i(D)>>>16,I=this.i(D)&65535,ee=N.i(P)>>>16,ne=N.i(P)&65535;R[2*D+2*P]+=I*ne,pe(R,2*D+2*P),R[2*D+2*P+1]+=k*ne,pe(R,2*D+2*P+1),R[2*D+2*P+1]+=I*ee,pe(R,2*D+2*P+1),R[2*D+2*P+2]+=k*ee,pe(R,2*D+2*P+2)}for(D=0;D<S;D++)R[D]=R[2*D+1]<<16|R[2*D];for(D=S;D<2*S;D++)R[D]=0;return new h(R,0)};function pe(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ge(N,S){this.g=N,this.h=S}function Ee(N,S){if(j(S))throw Error("division by zero");if(j(N))return new ge(T,T);if(H(N))return S=Ee($(N),S),new ge($(S.g),$(S.h));if(H(S))return S=Ee(N,$(S)),new ge($(S.g),S.h);if(30<N.g.length){if(H(N)||H(S))throw Error("slowDivide_ only works with positive integers.");for(var R=C,D=S;0>=D.l(N);)R=Me(R),D=Me(D);var P=ce(R,1),k=ce(D,1);for(D=ce(D,2),R=ce(R,2);!j(D);){var I=k.add(D);0>=I.l(N)&&(P=P.add(R),k=I),D=ce(D,1),R=ce(R,1)}return S=le(N,P.j(S)),new ge(P,S)}for(P=T;0<=N.l(S);){for(R=Math.max(1,Math.floor(N.m()/S.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),k=v(R),I=k.j(S);H(I)||0<I.l(N);)R-=D,k=v(R),I=k.j(S);j(k)&&(k=C),P=P.add(k),N=le(N,I)}return new ge(P,N)}r.A=function(N){return Ee(this,N).h},r.and=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],D=0;D<S;D++)R[D]=this.i(D)&N.i(D);return new h(R,this.h&N.h)},r.or=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],D=0;D<S;D++)R[D]=this.i(D)|N.i(D);return new h(R,this.h|N.h)},r.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],D=0;D<S;D++)R[D]=this.i(D)^N.i(D);return new h(R,this.h^N.h)};function Me(N){for(var S=N.g.length+1,R=[],D=0;D<S;D++)R[D]=N.i(D)<<1|N.i(D-1)>>>31;return new h(R,N.h)}function ce(N,S){var R=S>>5;S%=32;for(var D=N.g.length-R,P=[],k=0;k<D;k++)P[k]=0<S?N.i(k+R)>>>S|N.i(k+R+1)<<32-S:N.i(k+R);return new h(P,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,C_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,yi=h}).apply(typeof sy<"u"?sy:typeof self<"u"?self:typeof window<"u"?window:{});var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P_,Ma,k_,Hu,Wd,N_,O_,D_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ou=="object"&&Ou];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,L={next:function(){if(!w&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function C(u,p,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,C.apply(null,arguments)}function x(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function j(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,L,B){for(var re=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)re[$e-2]=arguments[$e];return p.prototype[L].apply(w,re)}}function H(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function $(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=u.length||0,B=w.length||0;u.length=L+B;for(let re=0;re<B;re++)u[L+re]=w[re]}else u.push(w)}}class le{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function pe(u){return/^[\s\xa0]*$/.test(u)}function ge(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function Ee(u){return Ee[" "](u),u}Ee[" "]=function(){};var Me=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function ce(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function N(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function S(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let B=0;B<R.length;B++)y=R[B],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function P(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function k(u){d.setTimeout(()=>{throw u},0)}function I(){var u=ie;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ee{constructor(){this.h=this.g=null}add(p,y){const w=ne.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var ne=new le(()=>new we,u=>u.reset());class we{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let U,q=!1,ie=new ee,Z=()=>{const u=d.Promise.resolve(void 0);U=()=>{u.then(V)}};var V=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(y){k(y)}var p=ne;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}q=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};d.addEventListener("test",y,p),d.removeEventListener("test",y,p)}catch{}return u}();function Pe(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Me){e:{try{Ee(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}j(Pe,he);var Ne={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),ze=0;function He(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++ze,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cr(u){this.src=u,this.g={},this.h=0}cr.prototype.add=function(u,p,y,w,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var re=Ur(u,p,w,L);return-1<re?(p=u[re],y||(p.fa=!1)):(p=new He(p,this.src,B,!!w,L),p.fa=y,u.push(p)),p};function ws(u,p){var y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(w,L,1),B&&(vt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ur(u,p,y,w){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==w)return L}return-1}var Ni="closure_lm_"+(1e6*Math.random()|0),Ts={};function Uo(u,p,y,w,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Uo(u,p[B],y,w,L);return null}return y=Bo(y),u&&u[Fe]?u.K(p,y,v(w)?!!w.capture:!1,L):jo(u,p,y,!1,w,L)}function jo(u,p,y,w,L,B){if(!p)throw Error("Invalid event type");var re=v(L)?!!L.capture:!!L,$e=Ss(u);if($e||(u[Ni]=$e=new cr(u)),y=$e.add(p,y,w,re,B),y.proxy)return y;if(w=pl(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Re||(L=re),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(dr(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function pl(){function u(y){return p.call(u.src,u.listener,y)}const p=zo;return u}function Is(u,p,y,w,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)Is(u,p[B],y,w,L);else w=v(w)?!!w.capture:!!w,y=Bo(y),u&&u[Fe]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Ur(B,y,w,L),-1<y&&(vt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Ss(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ur(p,y,w,L)),(y=-1<u?p[u]:null)&&hr(y))}function hr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Fe])ws(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(dr(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Ss(p))?(ws(y,u),y.h==0&&(y.src=null,p[Ni]=null)):vt(u)}}}function dr(u){return u in Ts?Ts[u]:Ts[u]="on"+u}function zo(u,p){if(u.da)u=!0;else{p=new Pe(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&hr(u),u=y.call(w,p)}return u}function Ss(u){return u=u[Ni],u instanceof cr?u:null}var As="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bo(u){return typeof u=="function"?u:(u[As]||(u[As]=function(p){return u.handleEvent(p)}),u[As])}function ht(){W.call(this),this.i=new cr(this),this.M=this,this.F=null}j(ht,W),ht.prototype[Fe]=!0,ht.prototype.removeEventListener=function(u,p,y,w){Is(this,u,p,y,w)};function dt(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var L=p;p=new he(w,u),D(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var re=p.g=y[B];L=fr(re,w,!0,p)&&L}if(re=p.g=u,L=fr(re,w,!0,p)&&L,L=fr(re,w,!1,p)&&L,y)for(B=0;B<y.length;B++)re=p.g=y[B],L=fr(re,w,!1,p)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)vt(y[w]);delete u.g[p],u.h--}}this.F=null},ht.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ht.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function fr(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var re=p[B];if(re&&!re.da&&re.capture==y){var $e=re.listener,ft=re.ha||re.src;re.fa&&ws(u.i,re),L=$e.call(ft,w)!==!1&&L}}return L&&!w.defaultPrevented}function $o(u,p,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:d.setTimeout(u,p||0)}function jr(u){u.g=$o(()=>{u.g=null,u.i&&(u.i=!1,jr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Oi extends W{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(u){W.call(this),this.h=u,this.g={}}j(Di,W);var qo=[];function Ho(u){ce(u.g,function(p,y){this.g.hasOwnProperty(y)&&hr(p)},u),u.g={}}Di.prototype.N=function(){Di.aa.N.call(this),Ho(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wo=d.JSON.stringify,Ko=d.JSON.parse,Go=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function xi(){}xi.prototype.h=null;function Rs(u){return u.h||(u.h=u.i())}function Cs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){he.call(this,"d")}j(Wn,he);function Ps(){he.call(this,"c")}j(Ps,he);var Kn={},Qo=null;function Vi(){return Qo=Qo||new ht}Kn.La="serverreachability";function Yo(u){he.call(this,Kn.La,u)}j(Yo,he);function pr(u){const p=Vi();dt(p,new Yo(p))}Kn.STAT_EVENT="statevent";function Xo(u,p){he.call(this,Kn.STAT_EVENT,u),this.stat=p}j(Xo,he);function it(u){const p=Vi();dt(p,new Xo(p,u))}Kn.Ma="timingevent";function ks(u,p){he.call(this,Kn.Ma,u),this.size=p}j(ks,he);function An(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},p)}function bi(){this.g=!0}bi.prototype.xa=function(){this.g=!1};function Li(u,p,y,w,L,B){u.info(function(){if(u.g)if(B)for(var re="",$e=B.split("&"),ft=0;ft<$e.length;ft++){var be=$e[ft].split("=");if(1<be.length){var _t=be[0];be=be[1];var at=_t.split("_");re=2<=at.length&&at[1]=="type"?re+(_t+"="+be+"&"):re+(_t+"=redacted&")}}else re=null;else re=B;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+re})}function Ns(u,p,y,w,L,B,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+re})}function Rn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+zc(u,y)+(w?" "+w:"")})}function Jo(u,p){u.info(function(){return"TIMEOUT: "+p})}bi.prototype.info=function(){};function zc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var re=1;re<L.length;re++)L[re]=""}}}}return Wo(y)}catch{return p}}var Os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ml={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Mi(){}j(Mi,xi),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Cn=new Mi;function Pn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new Di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gl}function gl(){this.i=null,this.g="",this.h=!1}var Zo={},Ds={};function xs(u,p,y){u.L=1,u.v=Hr(tn(p)),u.m=y,u.P=!0,ea(u,null)}function ea(u,p){u.F=Date.now(),We(u),u.A=tn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Kr(y.i,"t",w),u.C=0,y=u.j.J,u.h=new gl,u.g=Vl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Oi(C(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(qo[0]=L.toString()),L=qo);for(var B=0;B<L.length;B++){var re=Uo(y,L[B],w||p.handleEvent,!1,p.h||p);if(!re)break;p.g[re.key]=re}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),pr(),Li(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Ht(u)==3?p.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const at=Ht(this.g);var p=this.g.Ba();const fn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||oa(this.g)))){this.J||at!=4||p==7||(p==8||0>=fn?pr(3):pr(2)),Fi(this);var y=this.g.Z();this.X=y;t:if(yl(this)){var w=oa(this.g);u="";var L=w.length,B=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),zr(this);var re="";break t}this.h.i=new d.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(B&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=y==200,Ns(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,ft=this.g;if(($e=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe($e)){var be=$e;break t}}be=null}if(y=be)Rn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,y);else{this.o=!1,this.s=3,it(12),hn(this),zr(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<re.length;)if(rn=Bc(this,re),rn==Ds){at==4&&(this.s=4,it(14),y=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Zo){this.s=4,it(15),Rn(this.i,this.l,re,"[Invalid Chunk]"),y=!1;break}else Rn(this.i,this.l,rn,null),ta(this,rn);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||re.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)Rn(this.i,this.l,re,"[Invalid Chunked Response]"),hn(this),zr(this);else if(0<re.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),la(_t),_t.M=!0,it(11))}}else Rn(this.i,this.l,re,null),ta(this,re);at==4&&hn(this),this.o&&!this.J&&(at==4?qs(this.j,this):(this.o=!1,We(this)))}else Us(this.g),y==400&&0<re.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),hn(this),zr(this)}}}catch{}finally{}};function yl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Bc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Ds:(y=Number(p.substring(y,w)),isNaN(y)?Zo:(w+=1,w+y>p.length?Ds:(p=p.slice(w,w+y),u.C=w+y,p)))}Pn.prototype.cancel=function(){this.J=!0,hn(this)};function We(u){u.S=Date.now()+u.I,vl(u,u.I)}function vl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(C(u.ba,u),p)}function Fi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Jo(this.i,this.A),this.L!=2&&(pr(),it(17)),hn(this),this.s=2,zr(this)):vl(this,this.S-u)};function zr(u){u.j.G==0||u.J||qs(u.j,u)}function hn(u){Fi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ho(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ta(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||jt(y.h,u))){if(!u.K&&jt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)$s(y),xn(y);else break e;Bs(y),it(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=An(C(y.Za,y),6e3));if(1>=El(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else _r(y,11)}else if((u.K||y.g==u)&&$s(y),!pe(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let be=L[p];if(y.T=be[0],be=be[1],y.G==2)if(be[0]=="c"){y.K=be[1],y.ia=be[2];const _t=be[3];_t!=null&&(y.la=_t,y.j.info("VER="+y.la));const at=be[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const fn=be[5];fn!=null&&typeof fn=="number"&&0<fn&&(w=1.5*fn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const rn=u.g;if(rn){const Hi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var B=w.h;B.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(na(B,B.h),B.h=null))}if(w.D){const Ws=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ws&&(w.ya=Ws,qe(w.I,w.D,Ws))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var re=u;if(w.qa=xl(w,w.J?w.ia:null,w.W),re.K){wl(w.h,re);var $e=re,ft=w.L;ft&&($e.I=ft),$e.B&&(Fi($e),We($e)),w.g=re}else qi(w);0<y.i.length&&Xn(y)}else be[0]!="stop"&&be[0]!="close"||_r(y,7);else y.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?_r(y,7):At(y):be[0]!="noop"&&y.l&&y.l.ta(be),y.v=0)}}pr(4)}catch{}}var _l=class{constructor(u,p){this.g=u,this.map=p}};function Ui(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function El(u){return u.h?1:u.g?u.g.size:0}function jt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function na(u,p){u.g?u.g.add(p):u.h=p}function wl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ui.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Tl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return H(u.i)}function Vs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function bs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Br(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=bs(u),w=Vs(u),L=w.length,B=0;B<L;B++)p.call(void 0,w[B],y&&y[B],u)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $c(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),L=null;if(0<=w){var B=u[y].substring(0,w);L=u[y].substring(w+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function mr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mr){this.h=u.h,zi(this,u.j),this.o=u.o,this.g=u.g,$r(this,u.s),this.l=u.l;var p=u.i,y=new Gn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),qr(this,y),this.m=u.m}else u&&(p=String(u).match(ji))?(this.h=!1,zi(this,p[1]||"",!0),this.o=Ve(p[2]||""),this.g=Ve(p[3]||"",!0),$r(this,p[4]),this.l=Ve(p[5]||"",!0),qr(this,p[6]||"",!0),this.m=Ve(p[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}mr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Wr(p,Ls,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Wr(p,Ls,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Wr(y,y.charAt(0)=="/"?Al:Sl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Wr(y,ra)),u.join("")};function tn(u){return new mr(u)}function zi(u,p,y){u.j=y?Ve(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function $r(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function qr(u,p,y){p instanceof Gn?(u.i=p,Qn(u.i,u.h)):(y||(p=Wr(p,Rl)),u.i=new Gn(p,u.h))}function qe(u,p,y){u.i.set(p,y)}function Hr(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ve(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Wr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Il),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Il(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ls=/[#\/\?@]/g,Sl=/[#\?:]/g,Al=/[#\?]/g,Rl=/[#\?@]/g,ra=/#/g;function Gn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function St(u){u.g||(u.g=new Map,u.h=0,u.i&&$c(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Gn.prototype,r.add=function(u,p){St(this),this.i=null,u=dn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function kn(u,p){St(u),p=dn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Nn(u,p){return St(u),p=dn(u,p),u.g.has(p)}r.forEach=function(u,p){St(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)},r.na=function(){St(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=u[w];for(let B=0;B<L.length;B++)y.push(p[w])}return y},r.V=function(u){St(this);let p=[];if(typeof u=="string")Nn(this,u)&&(p=p.concat(this.g.get(dn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return St(this),this.i=null,u=dn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Kr(u,p,y){kn(u,p),0<y.length&&(u.i=null,u.g.set(dn(u,p),H(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const B=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var L=B;re[w]!==""&&(L+="="+encodeURIComponent(String(re[w]))),u.push(L)}}return this.i=u.join("&")};function dn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Qn(u,p){p&&!u.j&&(St(u),u.i=null,u.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(kn(this,w),Kr(this,L,y))},u)),u.j=p}function qc(u,p){const y=new bi;if(d.Image){const w=new Image;w.onload=x(qt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=x(qt,y,"TestLoadImage: error",!1,p,w),w.onabort=x(qt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=x(qt,y,"TestLoadImage: timeout",!1,p,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Cl(u,p){const y=new bi,w=new AbortController,L=setTimeout(()=>{w.abort(),qt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(L),B.ok?qt(y,"TestPingServer: ok",!0,p):qt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),qt(y,"TestPingServer: error",!1,p)})}function qt(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Hc(){this.g=new Go}function Pl(u,p,y){const w=y||"";try{Br(u,function(L,B){let re=L;v(L)&&(re=Wo(L)),p.push(w+B+"="+encodeURIComponent(re))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function gr(u){this.l=u.Ub||null,this.j=u.eb||!1}j(gr,xi),gr.prototype.g=function(){return new Bi(this.l,this.j)},gr.prototype.i=function(u){return function(){return u}}({});function Bi(u,p){ht.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Bi,ht),r=Bi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Dn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||d).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?On(this):Dn(this),this.readyState==3&&kl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},r.Qa=function(u){this.g&&(this.response=u,On(this))},r.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yr(u){let p="";return ce(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Gr(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=yr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):qe(u,p,y))}function Xe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Xe,ht);var Wc=/^https?$/i,ia=["POST","PUT"];r=Xe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Rs(this.o):Rs(Cn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){$i(this,B);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())y.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ia,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,re]of y)this.g.setRequestHeader(B,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){$i(this,B)}};function $i(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ms(u),nn(u)}function Ms(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?sa(this):this.bb())},r.bb=function(){sa(this)};function sa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Ht(u)!=4||u.Z()!=2)){if(u.u&&Ht(u)==4)$o(u.Ea,0,u);else if(dt(u,"readystatechange"),Ht(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=re===0){var L=String(u.D).match(ji)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),w=!Wc.test(L?L.toLowerCase():"")}y=w}if(y)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var B=2<Ht(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Ms(u)}}finally{nn(u)}}}}function nn(u,p){if(u.g){Fs(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||dt(u,"ready");try{y.onreadystatechange=w}catch{}}}function Fs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Ht(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Ko(p)}};function oa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Us(u){const p={};u=(u.g&&2<=Ht(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(pe(u[w]))continue;var y=P(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}N(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function aa(u){this.Aa=0,this.i=[],this.j=new bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ui(u&&u.concurrentRequestLimit),this.Da=new Hc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=aa.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){it(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=xl(this,null,this.W),Xn(this)};function At(u){if(js(u),u.G==3){var p=u.U++,y=tn(u.I);if(qe(y,"SID",u.K),qe(y,"RID",p),qe(y,"TYPE","terminate"),vr(u,y),p=new Pn(u,u.j,p),p.L=2,p.v=Hr(tn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=p.v,y=!0),y||(p.g=Vl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}Dl(u)}function xn(u){u.g&&(la(u),u.g.cancel(),u.g=null)}function js(u){xn(u),u.u&&(d.clearTimeout(u.u),u.u=null),$s(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Xn(u){if(!en(u.h)&&!u.s){u.s=!0;var p=u.Ga;U||Z(),q||(U(),q=!0),ie.add(p,u),u.B=0}}function Kc(u,p){return El(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(C(u.Ga,u,p),Ol(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Pn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),D(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Qr(this,L,p),y=tn(this.I),qe(y,"RID",u),qe(y,"CVER",22),this.D&&qe(y,"X-HTTP-Session-Id",this.D),vr(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(yr(B)))+"&"+p:this.m&&Gr(y,this.m,B)),na(this.h,L),this.Ua&&qe(y,"TYPE","init"),this.P?(qe(y,"$req",p),qe(y,"SID","null"),L.T=!0,xs(L,y,null)):xs(L,y,p),this.G=2}}else this.G==3&&(u?zs(this,u):this.i.length==0||en(this.h)||zs(this))};function zs(u,p){var y;p?y=p.l:y=u.U++;const w=tn(u.I);qe(w,"SID",u.K),qe(w,"RID",y),qe(w,"AID",u.T),vr(u,w),u.m&&u.o&&Gr(w,u.m,u.o),y=new Pn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Qr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),na(u.h,y),xs(y,w,p)}function vr(u,p){u.H&&ce(u.H,function(y,w){qe(p,w,y)}),u.l&&Br({},function(y,w){qe(p,w,y)})}function Qr(u,p,y){y=Math.min(u.i.length,y);var w=u.l?C(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const re=["count="+y];B==-1?0<y?(B=L[0].g,re.push("ofs="+B)):B=0:re.push("ofs="+B);let $e=!0;for(let ft=0;ft<y;ft++){let be=L[ft].g;const _t=L[ft].map;if(be-=B,0>be)B=Math.max(0,L[ft].g-100),$e=!1;else try{Pl(_t,re,"req"+be+"_")}catch{w&&w(_t)}}if($e){w=re.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function qi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;U||Z(),q||(U(),q=!0),ie.add(p,u),u.v=0}}function Bs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(C(u.Fa,u),Ol(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),xn(this),Nl(this))};function la(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Nl(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=tn(u.qa);qe(p,"RID","rpc"),qe(p,"SID",u.K),qe(p,"AID",u.T),qe(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(p,"TO",u.ja),qe(p,"TYPE","xmlhttp"),vr(u,p),u.m&&u.o&&Gr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Hr(tn(p)),y.m=null,y.P=!0,ea(y,u)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),Bs(this),it(19))};function $s(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function qs(u,p){var y=null;if(u.g==p){$s(u),la(u),u.g=null;var w=2}else if(jt(u.h,p))y=p.D,wl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=Vi(),dt(w,new ks(w,y)),Xn(u)}else qi(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&Kc(u,p)||w==2&&Bs(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:_r(u,5);break;case 4:_r(u,10);break;case 3:_r(u,6);break;default:_r(u,2)}}}function Ol(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function _r(u,p){if(u.j.info("Error code "+p),p==2){var y=C(u.fb,u),w=u.Xa;const L=!w;w=new mr(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||zi(w,"https"),Hr(w),L?qc(w.toString(),y):Cl(w.toString(),y)}else it(2);u.G=0,u.l&&u.l.sa(p),Dl(u),js(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Dl(u){if(u.G=0,u.ka=[],u.l){const p=Tl(u.h);(p.length!=0||u.i.length!=0)&&($(u.ka,p),$(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function xl(u,p,y){var w=y instanceof mr?tn(y):new mr(y);if(w.g!="")p&&(w.g=p+"."+w.g),$r(w,w.s);else{var L=d.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new mr(null);w&&zi(B,w),p&&(B.g=p),L&&$r(B,L),y&&(B.l=y),w=B}return y=u.D,p=u.ya,y&&p&&qe(w,y,p),qe(w,"VER",u.la),vr(u,w),w}function Vl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Xe(new gr({eb:y})):new Xe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ua(){}r=ua.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Hs(){}Hs.prototype.g=function(u,p){return new zt(u,p)};function zt(u,p){ht.call(this),this.g=new aa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!pe(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!pe(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Jn(this)}j(zt,ht),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){At(this.g)},zt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Wo(u),u=y);p.i.push(new _l(p.Ya++,u)),p.G==3&&Xn(p)},zt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,zt.aa.N.call(this)};function bl(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}j(bl,Wn);function Ll(){Ps.call(this),this.status=1}j(Ll,Ps);function Jn(u){this.g=u}j(Jn,ua),Jn.prototype.ua=function(){dt(this.g,"a")},Jn.prototype.ta=function(u){dt(this.g,new bl(u))},Jn.prototype.sa=function(u){dt(this.g,new Ll)},Jn.prototype.ra=function(){dt(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,D_=function(){return new Hs},O_=function(){return Vi()},N_=Kn,Wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,Hu=Os,ml.COMPLETE="complete",k_=ml,Cs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ma=Cs,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,P_=Xe}).apply(typeof Ou<"u"?Ou:typeof self<"u"?self:typeof window<"u"?window:{});const oy="@firebase/firestore",ay="4.7.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo="11.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new wc("@firebase/firestore");function go(){return hs.logLevel}function oe(r,...e){if(hs.logLevel<=Oe.DEBUG){const t=e.map(Sf);hs.debug(`Firestore (${Vo}): ${r}`,...t)}}function Mr(r,...e){if(hs.logLevel<=Oe.ERROR){const t=e.map(Sf);hs.error(`Firestore (${Vo}): ${r}`,...t)}}function Ao(r,...e){if(hs.logLevel<=Oe.WARN){const t=e.map(Sf);hs.warn(`Firestore (${Vo}): ${r}`,...t)}}function Sf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r="Unexpected state"){const e=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: `+r;throw Mr(e),new Error(e)}function Be(r,e){r||Ie()}function Ce(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class HA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class WA{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},d=g=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>d(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?d(g):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string"),new x_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new Mt(e)}}class KA{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class GA{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new KA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QA{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ln(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0);const s=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ly(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new ly(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=YA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function Gd(r,e){const t=Kd().encode(r),s=Kd().encode(e);for(let o=0;o<Math.min(t.length,s.length);o++){const l=De(t[o],s[o]);if(l!==0)return l}return De(t.length,s.length)}function Ro(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=-62135596800,cy=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*cy);return new gt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uy)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cy}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-uy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new gt(0,0))}static max(){return new Ae(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(),s===void 0?s=e.length-t:s>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return De(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Gd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class Ye extends ir{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const XA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends ir{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return XA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hy}static keyField(){return new kt([hy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ue(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(s+=d,o++):(l(),o++)}if(l(),h)throw new ue(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ye.fromString(e))}static fromName(e){return new ye(Ye.fromString(e).popFirst(5))}static empty(){return new ye(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=-1;function JA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new gt(t+1,0):new gt(t,s));return new Ei(o,ye.empty(),e)}function ZA(r){return new Ei(r.readTime,r.key,Xa)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(Ae.min(),ye.empty(),Xa)}static max(){return new Ei(Ae.max(),ye.empty(),Xa)}}function eR(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(r){if(r.code!==G.FAILED_PRECONDITION||r.message!==tR)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,s)=>{t(e)})}static reject(e){return new K((t,s)=>{s(e)})}static waitFor(e){return new K((t,s)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},g=>s(g))}),h=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next(o=>o?K.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new K((s,o)=>{const l=e.length,h=new Array(l);let d=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next(E=>{h[v]=E,++d,d===l&&s(h)},E=>o(E))}})}static doWhile(e,t){return new K((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function rR(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Lo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Rc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=-1;function Cc(r){return r==null}function ic(r){return r===0&&1/r==-1/0}function iR(r){return typeof r=="number"&&Number.isInteger(r)&&!ic(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="";function sR(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=dy(e)),e=oR(r.get(t),e);return dy(e)}function oR(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case b_:t+="";break;default:t+=l}}return t}function dy(r){return r+b_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ys(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function L_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Du(this.root,e,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Du(this.root,e,this.comparator,!0)}}class Du{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new py(this.data.getIterator())}getIteratorFrom(e){return new py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new M_("Invalid base64 string: "+l):l}}(e);return new Ot(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const aR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(r){if(Be(!!r),typeof r=="string"){let e=0;const t=aR.exec(r);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ti(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="server_timestamp",U_="__type__",j_="__previous_value__",z_="__local_write_time__";function Rf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[U_])===null||t===void 0?void 0:t.stringValue)===F_}function Pc(r){const e=r.mapValue.fields[j_];return Rf(e)?Pc(e):e}function Ja(r){const e=wi(r.mapValue.fields[z_].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t,s,o,l,h,d,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=g,this.useFetchStreams=v}}const sc="(default)";class Za{constructor(e,t){this.projectId=e,this.database=t||sc}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database===sc}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="__type__",uR="__max__",xu={mapValue:{}},$_="__vector__",oc="value";function Ii(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Rf(r)?4:hR(r)?9007199254740991:cR(r)?10:11:Ie()}function ur(r,e){if(r===e)return!0;const t=Ii(r);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ja(r).isEqual(Ja(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=wi(o.timestampValue),d=wi(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Ti(o.bytesValue).isEqual(Ti(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ot(o.doubleValue),d=ot(l.doubleValue);return h===d?ic(h)===ic(d):isNaN(h)&&isNaN(d)}return!1}(r,e);case 9:return Ro(r.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(fy(h)!==fy(d))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(d[g]===void 0||!ur(h[g],d[g])))return!1;return!0}(r,e);default:return Ie()}}function el(r,e){return(r.values||[]).find(t=>ur(t,e))!==void 0}function Co(r,e){if(r===e)return 0;const t=Ii(r),s=Ii(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return function(l,h){const d=ot(l.integerValue||l.doubleValue),g=ot(h.integerValue||h.doubleValue);return d<g?-1:d>g?1:d===g?0:isNaN(d)?isNaN(g)?0:-1:1}(r,e);case 3:return my(r.timestampValue,e.timestampValue);case 4:return my(Ja(r),Ja(e));case 5:return Gd(r.stringValue,e.stringValue);case 6:return function(l,h){const d=Ti(l),g=Ti(h);return d.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),g=h.split("/");for(let v=0;v<d.length&&v<g.length;v++){const E=De(d[v],g[v]);if(E!==0)return E}return De(d.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const d=De(ot(l.latitude),ot(h.latitude));return d!==0?d:De(ot(l.longitude),ot(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return gy(r.arrayValue,e.arrayValue);case 10:return function(l,h){var d,g,v,E;const T=l.fields||{},C=h.fields||{},x=(d=T[oc])===null||d===void 0?void 0:d.arrayValue,j=(g=C[oc])===null||g===void 0?void 0:g.arrayValue,H=De(((v=x==null?void 0:x.values)===null||v===void 0?void 0:v.length)||0,((E=j==null?void 0:j.values)===null||E===void 0?void 0:E.length)||0);return H!==0?H:gy(x,j)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===xu.mapValue&&h===xu.mapValue)return 0;if(l===xu.mapValue)return 1;if(h===xu.mapValue)return-1;const d=l.fields||{},g=Object.keys(d),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const C=Gd(g[T],E[T]);if(C!==0)return C;const x=Co(d[g[T]],v[E[T]]);if(x!==0)return x}return De(g.length,E.length)}(r.mapValue,e.mapValue);default:throw Ie()}}function my(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=wi(r),s=wi(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function gy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Co(t[o],s[o]);if(l)return l}return De(t.length,s.length)}function Po(r){return Qd(r)}function Qd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ti(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ye.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Qd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Qd(t.fields[h])}`;return o+"}"}(r.mapValue):Ie()}function Wu(r){switch(Ii(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pc(r);return e?16+Wu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ti(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+Wu(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ys(s.fields,(l,h)=>{o+=l.length+Wu(h)}),o}(r.mapValue);default:throw Ie()}}function yy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Yd(r){return!!r&&"integerValue"in r}function Cf(r){return!!r&&"arrayValue"in r}function vy(r){return!!r&&"nullValue"in r}function _y(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ku(r){return!!r&&"mapValue"in r}function cR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[B_])===null||t===void 0?void 0:t.stringValue)===$_}function Ba(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ys(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ba(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ba(r.arrayValue.values[t]);return e}return Object.assign({},r)}function hR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===uR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ku(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=d.popLast()}h?s[d.lastSegment()]=Ba(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Ku(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ku(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ys(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new wn(Ba(this.value))}}function q_(r){const e=[];return ys(r.fields,(t,s)=>{const o=new kt([t]);if(Ku(s)){const l=q_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,o,l,h,d){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Ft(e,0,Ae.min(),Ae.min(),Ae.min(),wn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,Ae.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Ae.min(),Ae.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Ae.min(),Ae.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.position=e,this.inclusive=t}}function Ey(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=Co(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function wy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ur(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t="asc"){this.field=e,this.dir=t}}function dR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{}class ct extends H_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new pR(e,t,s):t==="array-contains"?new yR(e,s):t==="in"?new vR(e,s):t==="not-in"?new _R(e,s):t==="array-contains-any"?new ER(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new mR(e,s):new gR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Co(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends H_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new qn(e,t)}matches(e){return W_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function W_(r){return r.op==="and"}function K_(r){return fR(r)&&W_(r)}function fR(r){for(const e of r.filters)if(e instanceof qn)return!1;return!0}function Xd(r){if(r instanceof ct)return r.field.canonicalString()+r.op.toString()+Po(r.value);if(K_(r))return r.filters.map(e=>Xd(e)).join(",");{const e=r.filters.map(t=>Xd(t)).join(",");return`${r.op}(${e})`}}function G_(r,e){return r instanceof ct?function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&ur(s.value,o.value)}(r,e):r instanceof qn?function(s,o){return o instanceof qn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,d)=>l&&G_(h,o.filters[d]),!0):!1}(r,e):void Ie()}function Q_(r){return r instanceof ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Po(t.value)}`}(r):r instanceof qn?function(t){return t.op.toString()+" {"+t.getFilters().map(Q_).join(" ,")+"}"}(r):"Filter"}class pR extends ct{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class mR extends ct{constructor(e,t){super(e,"in",t),this.keys=Y_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gR extends ct{constructor(e,t){super(e,"not-in",t),this.keys=Y_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Y_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class yR extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cf(t)&&el(t.arrayValue,this.value)}}class vR extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&el(this.value.arrayValue,t)}}class _R extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!el(this.value.arrayValue,t)}}class ER extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>el(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,t=null,s=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.le=null}}function Ty(r,e=null,t=[],s=[],o=null,l=null,h=null){return new wR(r,e,t,s,o,l,h)}function Pf(r){const e=Ce(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Xd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Cc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Po(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Po(s)).join(",")),e.le=t}return e.le}function kf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!dR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!G_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!wy(r.startAt,e.startAt)&&wy(r.endAt,e.endAt)}function Jd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t=null,s=[],o=[],l=null,h="F",d=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function TR(r,e,t,s,o,l,h,d){return new Mo(r,e,t,s,o,l,h,d)}function X_(r){return new Mo(r)}function Iy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function J_(r){return r.collectionGroup!==null}function $a(r){const e=Ce(r);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new yt(kt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(d=d.add(v.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new tl(l,s))}),t.has(kt.keyField().canonicalString())||e.he.push(new tl(kt.keyField(),s))}return e.he}function or(r){const e=Ce(r);return e.Pe||(e.Pe=IR(e,$a(r))),e.Pe}function IR(r,e){if(r.limitType==="F")return Ty(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new tl(o.field,l)});const t=r.endAt?new ac(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ac(r.startAt.position,r.startAt.inclusive):null;return Ty(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Zd(r,e){const t=r.filters.concat([e]);return new Mo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function lc(r,e,t){return new Mo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function kc(r,e){return kf(or(r),or(e))&&r.limitType===e.limitType}function Z_(r){return`${Pf(or(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Q_(o)).join(", ")}]`),Cc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Po(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Po(o)).join(",")),`Target(${s})`}(or(r))}; limitType=${r.limitType})`}function Nc(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of $a(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,d,g){const v=Ey(h,d,g);return h.inclusive?v<=0:v<0}(s.startAt,$a(s),o)||s.endAt&&!function(h,d,g){const v=Ey(h,d,g);return h.inclusive?v>=0:v>0}(s.endAt,$a(s),o))}(r,e)}function SR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function eE(r){return(e,t)=>{let s=!1;for(const o of $a(r)){const l=AR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function AR(r,e,t){const s=r.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,d){const g=h.data.field(l),v=d.data.field(l);return g!==null&&v!==null?Co(g,v):Ie()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return L_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new nt(ye.comparator);function Fr(){return RR}const tE=new nt(ye.comparator);function Fa(...r){let e=tE;for(const t of r)e=e.insert(t.key,t);return e}function nE(r){let e=tE;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function as(){return qa()}function rE(){return qa()}function qa(){return new vs(r=>r.toString(),(r,e)=>r.isEqual(e))}const CR=new nt(ye.comparator),PR=new yt(ye.comparator);function xe(...r){let e=PR;for(const t of r)e=e.add(t);return e}const kR=new yt(De);function NR(){return kR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function iE(r){return{integerValue:""+r}}function OR(r,e){return iR(e)?iE(e):Nf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this._=void 0}}function DR(r,e,t){return r instanceof uc?function(o,l){const h={fields:{[U_]:{stringValue:F_},[z_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Rf(l)&&(l=Pc(l)),l&&(h.fields[j_]=l),{mapValue:h}}(t,e):r instanceof nl?oE(r,e):r instanceof rl?aE(r,e):function(o,l){const h=sE(o,l),d=Sy(h)+Sy(o.Ie);return Yd(h)&&Yd(o.Ie)?iE(d):Nf(o.serializer,d)}(r,e)}function xR(r,e,t){return r instanceof nl?oE(r,e):r instanceof rl?aE(r,e):t}function sE(r,e){return r instanceof cc?function(s){return Yd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class uc extends Oc{}class nl extends Oc{constructor(e){super(),this.elements=e}}function oE(r,e){const t=lE(e);for(const s of r.elements)t.some(o=>ur(o,s))||t.push(s);return{arrayValue:{values:t}}}class rl extends Oc{constructor(e){super(),this.elements=e}}function aE(r,e){let t=lE(e);for(const s of r.elements)t=t.filter(o=>!ur(o,s));return{arrayValue:{values:t}}}class cc extends Oc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Sy(r){return ot(r.integerValue||r.doubleValue)}function lE(r){return Cf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function VR(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof nl&&o instanceof nl||s instanceof rl&&o instanceof rl?Ro(s.elements,o.elements,ur):s instanceof cc&&o instanceof cc?ur(s.Ie,o.Ie):s instanceof uc&&o instanceof uc}(r.transform,e.transform)}class bR{constructor(e,t){this.version=e,this.transformResults=t}}class Vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Dc{}function uE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new hE(r.key,Vr.none()):new cl(r.key,r.data,Vr.none());{const t=r.data,s=wn.empty();let o=new yt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new _s(r.key,s,new zn(o.toArray()),Vr.none())}}function LR(r,e,t){r instanceof cl?function(o,l,h){const d=o.value.clone(),g=Ry(o.fieldTransforms,l,h.transformResults);d.setAll(g),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(r,e,t):r instanceof _s?function(o,l,h){if(!Gu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Ry(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(cE(o)),g.setAll(d),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ha(r,e,t,s){return r instanceof cl?function(l,h,d,g){if(!Gu(l.precondition,h))return d;const v=l.value.clone(),E=Cy(l.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(r,e,t,s):r instanceof _s?function(l,h,d,g){if(!Gu(l.precondition,h))return d;const v=Cy(l.fieldTransforms,g,h),E=h.data;return E.setAll(cE(l)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(l,h,d){return Gu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(r,e,t)}function MR(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=sE(s.transform,o||null);l!=null&&(t===null&&(t=wn.empty()),t.set(s.field,l))}return t||null}function Ay(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ro(s,o,(l,h)=>VR(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class cl extends Dc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _s extends Dc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function cE(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Ry(r,e,t){const s=new Map;Be(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,d=e.data.field(l.field);s.set(l.field,xR(h,d,t[o]))}return s}function Cy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,DR(l,h,e))}return s}class hE extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FR extends Dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&LR(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ha(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ha(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=rE();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const g=uE(h,d);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(t,s)=>Ay(t,s))&&Ro(this.baseMutations,e.baseMutations,(t,s)=>Ay(t,s))}}class Of{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length);let o=function(){return CR}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Of(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Le;function BR(r){switch(r){case G.OK:return Ie();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return Ie()}}function dE(r){if(r===void 0)return Mr("GRPC error has no .code"),G.UNKNOWN;switch(r){case ut.OK:return G.OK;case ut.CANCELLED:return G.CANCELLED;case ut.UNKNOWN:return G.UNKNOWN;case ut.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ut.INTERNAL:return G.INTERNAL;case ut.UNAVAILABLE:return G.UNAVAILABLE;case ut.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ut.NOT_FOUND:return G.NOT_FOUND;case ut.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ut.ABORTED:return G.ABORTED;case ut.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ut.DATA_LOSS:return G.DATA_LOSS;default:return Ie()}}(Le=ut||(ut={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new yi([4294967295,4294967295],0);function Py(r){const e=Kd().encode(r),t=new C_;return t.update(e),new Uint8Array(t.digest())}function ky(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,l],0)]}class Df{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ua(`Invalid padding: ${t}`);if(s<0)throw new Ua(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=yi.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare($R)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Py(e),[s,o]=ky(t);for(let l=0;l<this.hashCount;l++){const h=this.Ae(s,o,l);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Df(l,o,t);return s.forEach(d=>h.insert(d)),h}insert(e){if(this.Ee===0)return;const t=Py(e),[s,o]=ky(t);for(let l=0;l<this.hashCount;l++){const h=this.Ae(s,o,l);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new xc(Ae.min(),o,new nt(De),Fr(),xe())}}class hl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hl(s,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class fE{constructor(e,t){this.targetId=e,this.ge=t}}class pE{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Ny{constructor(){this.pe=0,this.ye=Oy(),this.we=Ot.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=xe(),t=xe(),s=xe();return this.ye.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ie()}}),new hl(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=Oy()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Be(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class qR{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Fr(),this.$e=Vu(),this.Ue=Vu(),this.Ke=new nt(De)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const l=o.target;if(Jd(l))if(s===0){const h=new ye(l.path);this.ze(t,h,Ft.newNoDocument(h,Ae.min()))}else Be(s===1);else{const h=this.et(t);if(h!==s){const d=this.tt(e),g=d?this.nt(d,e,h):1;if(g!==0){this.Ye(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=Ti(s).toUint8Array()}catch(g){if(g instanceof M_)return Ao("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{d=new Df(h,o,l)}catch(g){return Ao(g instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return d.Ee===0?null:d}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.ke.it(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((l,h)=>{const d=this.Xe(h);if(d){if(l.current&&Jd(d.target)){const g=new ye(d.target.path);this._t(g).has(h)||this.ut(h,g)||this.ze(h,g,Ft.newNoDocument(g,e))}l.ve&&(t.set(h,l.Fe()),l.Me())}});let s=xe();this.Ue.forEach((l,h)=>{let d=!0;h.forEachWhile(g=>{const v=this.Xe(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.Qe.forEach((l,h)=>h.setReadTime(e));const o=new xc(e,t,this.Ke,this.Qe,s);return this.Qe=Fr(),this.$e=Vu(),this.Ue=Vu(),this.Ke=new nt(De),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Ny,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new yt(De),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new yt(De),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Ny),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Vu(){return new nt(ye.comparator)}function Oy(){return new nt(ye.comparator)}const HR={asc:"ASCENDING",desc:"DESCENDING"},WR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KR={and:"AND",or:"OR"};class GR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ef(r,e){return r.useProto3Json||Cc(e)?e:{value:e}}function hc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function QR(r,e){return hc(r,e.toTimestamp())}function ar(r){return Be(!!r),Ae.fromTimestamp(function(t){const s=wi(t);return new gt(s.seconds,s.nanos)}(r))}function xf(r,e){return tf(r,e).canonicalString()}function tf(r,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function gE(r){const e=Ye.fromString(r);return Be(wE(e)),e}function nf(r,e){return xf(r.databaseId,e.path)}function Ad(r,e){const t=gE(e);if(t.get(1)!==r.databaseId.projectId)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(vE(t))}function yE(r,e){return xf(r.databaseId,e)}function YR(r){const e=gE(r);return e.length===4?Ye.emptyPath():vE(e)}function rf(r){return new Ye(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vE(r){return Be(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Dy(r,e,t){return{name:nf(r,e),fields:t.value.mapValue.fields}}function XR(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(v,E){return v.useProto3Json?(Be(E===void 0||typeof E=="string"),Ot.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ot.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(v){const E=v.code===void 0?G.UNKNOWN:dE(v.code);return new ue(E,v.message||"")}(h);t=new pE(s,o,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Ad(r,s.document.name),l=ar(s.document.updateTime),h=s.document.createTime?ar(s.document.createTime):Ae.min(),d=new wn({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,l,h,d),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Qu(v,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Ad(r,s.document),l=s.readTime?ar(s.readTime):Ae.min(),h=Ft.newNoDocument(o,l),d=s.removedTargetIds||[];t=new Qu([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Ad(r,s.document),l=s.removedTargetIds||[];t=new Qu([],l,o,null)}else{if(!("filter"in e))return Ie();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new zR(o,l),d=s.targetId;t=new fE(d,h)}}return t}function JR(r,e){let t;if(e instanceof cl)t={update:Dy(r,e.key,e.value)};else if(e instanceof hE)t={delete:nf(r,e.key)};else if(e instanceof _s)t={update:Dy(r,e.key,e.data),updateMask:aC(e.fieldMask)};else{if(!(e instanceof FR))return Ie();t={verify:nf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const d=h.transform;if(d instanceof uc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof nl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof rl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof cc)return{fieldPath:h.field.canonicalString(),increment:d.Ie};throw Ie()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:QR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie()}(r,e.precondition)),t}function ZR(r,e){return r&&r.length>0?(Be(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(Ae.min())&&(h=ar(l)),new bR(h,o.transformResults||[])}(t,e))):[]}function eC(r,e){return{documents:[yE(r,e.path)]}}function tC(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=yE(r,o);const l=function(v){if(v.length!==0)return EE(qn.create(v,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(v){if(v.length!==0)return v.map(E=>function(C){return{field:vo(C.field),direction:iC(C.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=ef(r,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ht:t,parent:o}}function nC(r){let e=YR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const C=_E(T);return C instanceof qn&&K_(C)?C.getFilters():[C]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(C=>function(j){return new tl(_o(j.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(j.direction))}(C))}(t.orderBy));let d=null;t.limit&&(d=function(T){let C;return C=typeof T=="object"?T.value:T,Cc(C)?null:C}(t.limit));let g=null;t.startAt&&(g=function(T){const C=!!T.before,x=T.values||[];return new ac(x,C)}(t.startAt));let v=null;return t.endAt&&(v=function(T){const C=!T.before,x=T.values||[];return new ac(x,C)}(t.endAt)),TR(e,o,h,l,d,"F",g,v)}function rC(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _E(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=_o(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=_o(t.unaryFilter.field);return ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(r):r.fieldFilter!==void 0?function(t){return ct.create(_o(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return qn.create(t.compositeFilter.filters.map(s=>_E(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie()}}(t.compositeFilter.op))}(r):Ie()}function iC(r){return HR[r]}function sC(r){return WR[r]}function oC(r){return KR[r]}function vo(r){return{fieldPath:r.canonicalString()}}function _o(r){return kt.fromServerFormat(r.fieldPath)}function EE(r){return r instanceof ct?function(t){if(t.op==="=="){if(_y(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(vy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_y(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(vy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:sC(t.op),value:t.value}}}(r):r instanceof qn?function(t){const s=t.getFilters().map(o=>EE(o));return s.length===1?s[0]:{compositeFilter:{op:oC(t.op),filters:s}}}(r):Ie()}function aC(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,o,l=Ae.min(),h=Ae.min(),d=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=g}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.Tt=e}}function uC(r){const e=nC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.Tn=new hC}addToCollectionParentIndex(e,t){return this.Tn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Ei.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class hC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ye.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},TE=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(TE,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ko(0)}static Kn(){return new ko(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="LruGarbageCollector",dC=1048576;function by([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class fC{constructor(e){this.Hn=e,this.buffer=new yt(by),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();by(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){oe(Vy,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Lo(t)?oe(Vy,"Ignoring IndexedDB error during garbage collection: ",t):await bo(t)}await this.er(3e5)})}}class mC{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Rc.ae);const s=new fC(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(xy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xy):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,l,h,d,g,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(v=Date.now(),go()<=Oe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(g-d)+`ms
	Removed ${T} documents in `+(v-g)+`ms
Total Duration: ${v-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function gC(r,e){return new mC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.changes=new vs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ha(s.mutation,o,zn.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,xe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=xe()){const o=as();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Fa();return l.forEach((d,g)=>{h=h.insert(d,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=as();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,xe()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,s,o){let l=Fr();const h=qa(),d=function(){return qa()}();return t.forEach((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof _s)?l=l.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Ha(E.mutation,v,E.mutation.getFieldMask(),gt.now())):h.set(v.key,zn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var T;return d.set(v,new vC(E,(T=h.get(v))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=qa();let o=new nt((h,d)=>h-d),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||zn.empty();E=d.applyToLocalView(v,E),s.set(g,E);const T=(o.get(d.batchId)||xe()).add(g);o=o.insert(d.batchId,T)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const g=d.getNext(),v=g.key,E=g.value,T=rE();E.forEach(C=>{if(!l.has(C)){const x=uE(t.get(C),s.get(C));x!==null&&T.set(C,x),l=l.add(C)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,T))}return K.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):J_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):K.resolve(as());let d=Xa,g=l;return h.next(v=>K.forEach(v,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(C=>{g=g.insert(E,C)}))).next(()=>this.populateOverlays(e,v,l)).next(()=>this.computeViews(e,g,v,xe())).next(E=>({batchId:d,changes:nE(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let o=Fa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Fa();return this.indexManager.getCollectionParents(e,l).next(d=>K.forEach(d,g=>{const v=function(T,C){return new Mo(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((T,C)=>{h=h.insert(T,C)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))});let d=Fa();return h.forEach((g,v)=>{const E=l.get(g);E!==void 0&&Ha(E.mutation,v,zn.empty(),gt.now()),Nc(t,v)&&(d=d.insert(g,v))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return K.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:uC(o.bundledQuery),readTime:ar(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.overlays=new nt(ye.comparator),this.Rr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=as();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.Et(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=as(),l=t.length+1,h=new ye(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const g=d.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new nt((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=l.get(v.largestBatchId);E===null&&(E=as(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const d=as(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,E)=>d.set(v,E)),!(d.size()>=o)););return K.resolve(d)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new jR(t,s));let l=this.Rr.get(t);l===void 0&&(l=xe(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.Vr=new yt(It.mr),this.gr=new yt(It.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new It(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new ye(new Ye([])),s=new It(t,e),o=new It(t,e+1),l=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),l.push(h.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ye(new Ye([])),s=new It(t,e),o=new It(t,e+1);let l=xe();return this.gr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new It(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ye.comparator(e.key,t.key)||De(e.Cr,t.Cr)}static pr(e,t){return De(e.Cr,t.Cr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new yt(It.mr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new UR(l,t,s,o);this.mutationQueue.push(h);for(const d of o)this.Mr=this.Mr.add(new It(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Af:this.Fr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,o],h=>{const d=this.Or(h.Cr);l.push(d)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(De);return t.forEach(o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,h],d=>{s=s.add(d.Cr)})}),K.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const h=new It(new ye(l),0);let d=new yt(De);return this.Mr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(d=d.add(g.Cr)),!0)},h),K.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return K.forEach(t.mutations,o=>{const l=new It(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new It(t,0),o=this.Mr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.kr=e,this.docs=function(){return new nt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Fr();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ft.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Fr();const h=t.path,d=new ye(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(d);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||eR(ZA(E),s)<=0||(o.has(E.key)||Nc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Ie()}qr(e,t){return K.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new AC(this)}getSize(e){return K.resolve(this.size)}}class AC extends yC{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),K.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.persistence=e,this.Qr=new vs(t=>Pf(t),kf),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Vf,this.targetCount=0,this.Kr=ko.Un()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),K.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new ko(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.zn(t),K.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Qr.forEach((h,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Rc(0),this.zr=!1,this.zr=!0,this.jr=new TC,this.referenceDelegate=e(this),this.Hr=new RC(this),this.indexManager=new cC,this.remoteDocumentCache=function(o){return new SC(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new lC(t),this.Yr=new EC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new IC(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new CC(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(l=>this.referenceDelegate.Xr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}ei(e,t){return K.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class CC extends nR{constructor(e){super(),this.currentSequenceNumber=e}}class bf{constructor(e){this.persistence=e,this.ti=new Vf,this.ni=null}static ri(e){return new bf(e)}get ii(){if(this.ni)return this.ni;throw Ie()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),K.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ii.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ii,s=>{const o=ye.fromPath(s);return this.si(e,o).next(l=>{l||t.removeEntry(o,Ae.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return K.or([()=>K.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class dc{constructor(e,t){this.persistence=e,this.oi=new vs(s=>sR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=gC(this,t)}static ri(e,t){return new dc(e,t)}Zr(){}Xr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return K.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(d=>{d||(s++,l.removeEntry(h,Ae.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),K.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wu(e.data.value)),t}ar(e,t,s){return K.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Lf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return cI()?8:rR(Ut())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.rs(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.ss(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new PC;return this._s(e,t,h).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,h,d.size)})}).next(()=>l.result)}us(e,t,s,o){return s.documentReadCount<this.es?(go()<=Oe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),K.resolve()):(go()<=Oe.DEBUG&&oe("QueryEngine","Query:",yo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(go()<=Oe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):K.resolve())}rs(e,t){if(Iy(t))return K.resolve(null);let s=or(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=lc(t,null,"F"),s=or(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=xe(...l);return this.ns.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.cs(t,d);return this.ls(t,v,h,g.readTime)?this.rs(e,lc(t,null,"F")):this.hs(e,v,t,g)}))})))}ss(e,t,s,o){return Iy(t)||o.isEqual(Ae.min())?K.resolve(null):this.ns.getDocuments(e,s).next(l=>{const h=this.cs(t,l);return this.ls(t,h,s,o)?K.resolve(null):(go()<=Oe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.hs(e,h,t,JA(o,Xa)).next(d=>d))})}cs(e,t){let s=new yt(eE(e));return t.forEach((o,l)=>{Nc(e,l)&&(s=s.add(l))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}_s(e,t,s){return go()<=Oe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",yo(t)),this.ns.getDocumentsMatchingQuery(e,t,Ei.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="LocalStore",NC=3e8;class OC{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new nt(De),this.Is=new vs(l=>Pf(l),kf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _C(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function DC(r,e,t,s){return new OC(r,e,t,s)}async function SE(r,e){const t=Ce(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],d=[];let g=xe();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of l){d.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Rs:v,removedBatchIds:h,addedBatchIds:d}))})})}function xC(r,e){const t=Ce(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,g,v,E){const T=v.batch,C=T.keys();let x=K.resolve();return C.forEach(j=>{x=x.next(()=>E.getEntry(g,j)).next(H=>{const $=v.docVersions.get(j);Be($!==null),H.version.compareTo($)<0&&(T.applyToRemoteDocument(H,v),H.isValidDocument()&&(H.setReadTime(v.commitVersion),E.addEntry(H)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(g,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let g=xe();for(let v=0;v<d.mutationResults.length;++v)d.mutationResults[v].transformResults.length>0&&(g=g.add(d.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function AE(r){const e=Ce(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function VC(r,e){const t=Ce(r),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const d=[];e.targetChanges.forEach((E,T)=>{const C=o.get(T);if(!C)return;d.push(t.Hr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,E.addedDocuments,T)));let x=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(Ot.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(E.resumeToken,s)),o=o.insert(T,x),function(H,$,le){return H.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=NC?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0}(C,x,E)&&d.push(t.Hr.updateTargetData(l,x))});let g=Fr(),v=xe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(bC(l,h,e.documentUpdates).next(E=>{g=E.Vs,v=E.fs})),!s.isEqual(Ae.min())){const E=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(E)}return K.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,v)).next(()=>g)}).then(l=>(t.Ts=o,l))}function bC(r,e,t){let s=xe(),o=xe();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=Fr();return t.forEach((d,g)=>{const v=l.get(d);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(d)),g.isNoDocument()&&g.version.isEqual(Ae.min())?(e.removeEntry(d,g.readTime),h=h.insert(d,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(d,g)):oe(Mf,"Ignoring outdated watch update for ",d,". Current version:",v.version," Watch version:",g.version)}),{Vs:h,fs:o}})}function LC(r,e){const t=Ce(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Af),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function MC(r,e){const t=Ce(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(l=>l?(o=l,K.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function sf(r,e,t){const s=Ce(r),o=s.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Lo(h))throw h;oe(Mf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function Ly(r,e,t){const s=Ce(r);let o=Ae.min(),l=xe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,E){const T=Ce(g),C=T.Is.get(E);return C!==void 0?K.resolve(T.Ts.get(C)):T.Hr.getTargetData(v,E)}(s,h,or(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,d.targetId).next(g=>{l=g})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:Ae.min(),t?l:xe())).next(d=>(FC(s,SR(e),d),{documents:d,gs:l})))}function FC(r,e,t){let s=r.Es.get(e)||Ae.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.Es.set(e,s)}class My{constructor(){this.activeTargetIds=NR()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UC{constructor(){this.ho=new My,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new My,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="ConnectivityMonitor";class Uy{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){oe(Fy,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){oe(Fy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu=null;function of(){return bu===null?bu=function(){return 268435456+Math.round(2147483648*Math.random())}():bu++,"0x"+bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="RestConnection",zC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BC{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===sc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,l){const h=of(),d=this.bo(e,t.toUriEncodedString());oe(Rd,`Sending RPC '${e}' ${h}:`,d,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,l),this.vo(e,d,g,s).then(v=>(oe(Rd,`Received RPC '${e}' ${h}: `,v),v),v=>{throw Ao(Rd,`RPC '${e}' ${h} failed with error: `,v,"url: ",d,"request:",s),v})}Co(e,t,s,o,l,h){return this.So(e,t,s,o,l)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}bo(e,t){const s=zC[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class qC extends BC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const l=of();return new Promise((h,d)=>{const g=new P_;g.setWithCredentials(!0),g.listenOnce(k_.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Hu.NO_ERROR:const E=g.getResponseJson();oe(Lt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Hu.TIMEOUT:oe(Lt,`RPC '${e}' ${l} timed out`),d(new ue(G.DEADLINE_EXCEEDED,"Request time out"));break;case Hu.HTTP_ERROR:const T=g.getStatus();if(oe(Lt,`RPC '${e}' ${l} failed with status:`,T,"response text:",g.getResponseText()),T>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const x=C==null?void 0:C.error;if(x&&x.status&&x.message){const j=function($){const le=$.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(le)>=0?le:G.UNKNOWN}(x.status);d(new ue(j,x.message))}else d(new ue(G.UNKNOWN,"Server responded with status "+g.getStatus()))}else d(new ue(G.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{oe(Lt,`RPC '${e}' ${l} completed.`)}});const v=JSON.stringify(o);oe(Lt,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",v,s,15)})}Wo(e,t,s){const o=of(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=D_(),d=O_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");oe(Lt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);let C=!1,x=!1;const j=new $C({Fo:$=>{x?oe(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(C||(oe(Lt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),C=!0),oe(Lt,`RPC '${e}' stream ${o} sending:`,$),T.send($))},Mo:()=>T.close()}),H=($,le,pe)=>{$.listen(le,ge=>{try{pe(ge)}catch(Ee){setTimeout(()=>{throw Ee},0)}})};return H(T,Ma.EventType.OPEN,()=>{x||(oe(Lt,`RPC '${e}' stream ${o} transport opened.`),j.Qo())}),H(T,Ma.EventType.CLOSE,()=>{x||(x=!0,oe(Lt,`RPC '${e}' stream ${o} transport closed`),j.Uo())}),H(T,Ma.EventType.ERROR,$=>{x||(x=!0,Ao(Lt,`RPC '${e}' stream ${o} transport errored:`,$),j.Uo(new ue(G.UNAVAILABLE,"The operation could not be completed")))}),H(T,Ma.EventType.MESSAGE,$=>{var le;if(!x){const pe=$.data[0];Be(!!pe);const ge=pe,Ee=(ge==null?void 0:ge.error)||((le=ge[0])===null||le===void 0?void 0:le.error);if(Ee){oe(Lt,`RPC '${e}' stream ${o} received error:`,Ee);const Me=Ee.status;let ce=function(R){const D=ut[R];if(D!==void 0)return dE(D)}(Me),N=Ee.message;ce===void 0&&(ce=G.INTERNAL,N="Unknown error status: "+Me+" with message "+Ee.message),x=!0,j.Uo(new ue(ce,N)),T.close()}else oe(Lt,`RPC '${e}' stream ${o} received:`,pe),j.Ko(pe)}}),H(d,N_.STAT_EVENT,$=>{$.stat===Wd.PROXY?oe(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Wd.NOPROXY&&oe(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{j.$o()},0),j}}function Cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(r){return new GR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="PersistentStream";class CE{constructor(e,t,s,o,l,h,d,g){this.Ti=e,this.n_=s,this.r_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new RE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Mr(t.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new ue(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return oe(jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(oe(jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HC extends CE{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=XR(this.serializer,e),s=function(l){if(!("targetChange"in l))return Ae.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ae.min():h.readTime?ar(h.readTime):Ae.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=rf(this.serializer),t.addTarget=function(l,h){let d;const g=h.target;if(d=Jd(g)?{documents:eC(l,g)}:{query:tC(l,g).ht},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=mE(l,h.resumeToken);const v=ef(l,h.expectedCount);v!==null&&(d.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ae.min())>0){d.readTime=hc(l,h.snapshotVersion.toTimestamp());const v=ef(l,h.expectedCount);v!==null&&(d.expectedCount=v)}return d}(this.serializer,e);const s=rC(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=rf(this.serializer),t.removeTarget=e,this.I_(t)}}class WC extends CE{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=ZR(e.writeResults,e.commitTime),s=ar(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=rf(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>JR(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{}class GC extends KC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.So(e,tf(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(G.UNKNOWN,l.toString())})}Co(e,t,s,o,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.Co(e,tf(t,s),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(G.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class QC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Mr(t),this.N_=!1):oe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="RemoteStore";class YC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(h=>{s.enqueueAndForget(async()=>{Es(this)&&(oe(ds,"Restarting streams for network reachability change."),await async function(g){const v=Ce(g);v.W_.add(4),await dl(v),v.j_.set("Unknown"),v.W_.delete(4),await bc(v)}(this))})}),this.j_=new QC(s,o)}}async function bc(r){if(Es(r))for(const e of r.G_)await e(!0)}async function dl(r){for(const e of r.G_)await e(!1)}function PE(r,e){const t=Ce(r);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),zf(t)?jf(t):Fo(t).c_()&&Uf(t,e))}function Ff(r,e){const t=Ce(r),s=Fo(t);t.K_.delete(e),s.c_()&&kE(t,e),t.K_.size===0&&(s.c_()?s.P_():Es(t)&&t.j_.set("Unknown"))}function Uf(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fo(r).y_(e)}function kE(r,e){r.H_.Ne(e),Fo(r).w_(e)}function jf(r){r.H_=new qR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.K_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Fo(r).start(),r.j_.B_()}function zf(r){return Es(r)&&!Fo(r).u_()&&r.K_.size>0}function Es(r){return Ce(r).W_.size===0}function NE(r){r.H_=void 0}async function XC(r){r.j_.set("Online")}async function JC(r){r.K_.forEach((e,t)=>{Uf(r,e)})}async function ZC(r,e){NE(r),zf(r)?(r.j_.q_(e),jf(r)):r.j_.set("Unknown")}async function eP(r,e,t){if(r.j_.set("Online"),e instanceof pE&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.K_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.K_.delete(d),o.H_.removeTarget(d))}(r,e)}catch(s){oe(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fc(r,s)}else if(e instanceof Qu?r.H_.We(e):e instanceof fE?r.H_.Ze(e):r.H_.je(e),!t.isEqual(Ae.min()))try{const s=await AE(r.localStore);t.compareTo(s)>=0&&await function(l,h){const d=l.H_.ot(h);return d.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.K_.get(v);E&&l.K_.set(v,E.withResumeToken(g.resumeToken,h))}}),d.targetMismatches.forEach((g,v)=>{const E=l.K_.get(g);if(!E)return;l.K_.set(g,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),kE(l,g);const T=new pi(E.target,g,v,E.sequenceNumber);Uf(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(r,t)}catch(s){oe(ds,"Failed to raise snapshot:",s),await fc(r,s)}}async function fc(r,e,t){if(!Lo(e))throw e;r.W_.add(1),await dl(r),r.j_.set("Offline"),t||(t=()=>AE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{oe(ds,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await bc(r)})}function OE(r,e){return e().catch(t=>fc(r,t,e))}async function Lc(r){const e=Ce(r),t=Si(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Af;for(;tP(e);)try{const o=await LC(e.localStore,s);if(o===null){e.U_.length===0&&t.P_();break}s=o.batchId,nP(e,o)}catch(o){await fc(e,o)}DE(e)&&xE(e)}function tP(r){return Es(r)&&r.U_.length<10}function nP(r,e){r.U_.push(e);const t=Si(r);t.c_()&&t.S_&&t.b_(e.mutations)}function DE(r){return Es(r)&&!Si(r).u_()&&r.U_.length>0}function xE(r){Si(r).start()}async function rP(r){Si(r).C_()}async function iP(r){const e=Si(r);for(const t of r.U_)e.b_(t.mutations)}async function sP(r,e,t){const s=r.U_.shift(),o=Of.from(s,e,t);await OE(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Lc(r)}async function oP(r,e){e&&Si(r).S_&&await async function(s,o){if(function(h){return BR(h)&&h!==G.ABORTED}(o.code)){const l=s.U_.shift();Si(s).h_(),await OE(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Lc(s)}}(r,e),DE(r)&&xE(r)}async function zy(r,e){const t=Ce(r);t.asyncQueue.verifyOperationInProgress(),oe(ds,"RemoteStore received new credentials");const s=Es(t);t.W_.add(3),await dl(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await bc(t)}async function aP(r,e){const t=Ce(r);e?(t.W_.delete(2),await bc(t)):e||(t.W_.add(2),await dl(t),t.j_.set("Unknown"))}function Fo(r){return r.J_||(r.J_=function(t,s,o){const l=Ce(t);return l.M_(),new HC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{xo:XC.bind(null,r),No:JC.bind(null,r),Lo:ZC.bind(null,r),p_:eP.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),zf(r)?jf(r):r.j_.set("Unknown")):(await r.J_.stop(),NE(r))})),r.J_}function Si(r){return r.Y_||(r.Y_=function(t,s,o){const l=Ce(t);return l.M_(),new WC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:rP.bind(null,r),Lo:oP.bind(null,r),D_:iP.bind(null,r),v_:sP.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await Lc(r)):(await r.Y_.stop(),r.U_.length>0&&(oe(ds,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,d=new Bf(e,t,h,o,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(r,e){if(Mr("AsyncQueue",`${e}: ${r}`),Lo(r))return new ue(G.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static emptySet(e){return new So(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Fa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new So;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.Z_=new nt(ye.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ie():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class No{constructor(e,t,s,o,l,h,d,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new No(e,t,So.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class uP{constructor(){this.queries=$y(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=Ce(t),l=o.queries;o.queries=$y(),l.forEach((h,d)=>{for(const g of d.ta)g.onError(s)})})(this,new ue(G.ABORTED,"Firestore shutting down"))}}function $y(){return new vs(r=>Z_(r),kc)}async function cP(r,e){const t=Ce(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.na()&&e.ra()&&(s=2):(l=new lP,s=e.ra()?0:1);try{switch(s){case 0:l.ea=await t.onListen(o,!0);break;case 1:l.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=$f(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&qf(t)}async function hP(r,e){const t=Ce(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.ta.indexOf(e);h>=0&&(l.ta.splice(h,1),l.ta.length===0?o=e.ra()?0:1:!l.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function dP(r,e){const t=Ce(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.ta)d.oa(o)&&(s=!0);h.ea=o}}s&&qf(t)}function fP(r,e,t){const s=Ce(r),o=s.queries.get(e);if(o)for(const l of o.ta)l.onError(t);s.queries.delete(e)}function qf(r){r.ia.forEach(e=>{e.next()})}var af,qy;(qy=af||(af={}))._a="default",qy.Cache="cache";class pP{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new No(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==af.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.key=e}}class bE{constructor(e){this.key=e}}class mP{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=xe(),this.mutatedKeys=xe(),this.ya=eE(e),this.wa=new So(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new By,o=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const C=o.get(E),x=Nc(this.query,T)?T:null,j=!!C&&this.mutatedKeys.has(C.key),H=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let $=!1;C&&x?C.data.isEqual(x.data)?j!==H&&(s.track({type:3,doc:x}),$=!0):this.va(C,x)||(s.track({type:2,doc:x}),$=!0,(g&&this.ya(x,g)>0||v&&this.ya(x,v)<0)&&(d=!0)):!C&&x?(s.track({type:0,doc:x}),$=!0):C&&!x&&(s.track({type:1,doc:C}),$=!0,(g||v)&&(d=!0)),$&&(x?(h=h.add(x),l=H?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{wa:h,Da:s,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((E,T)=>function(x,j){const H=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return H(x)-H(j)}(E.type,T.type)||this.ya(E.doc,T.doc)),this.Ca(s),o=o!=null&&o;const d=t&&!o?this.Fa():[],g=this.pa.size===0&&this.current&&!o?1:0,v=g!==this.ga;return this.ga=g,h.length!==0||v?{snapshot:new No(this.query,e.wa,l,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new By,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=xe(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new bE(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new VE(s))}),t}Oa(e){this.fa=e.gs,this.pa=xe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return No.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Hf="SyncEngine";class gP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class yP{constructor(e){this.key=e,this.Ba=!1}}class vP{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new vs(d=>Z_(d),kc),this.qa=new Map,this.Qa=new Set,this.$a=new nt(ye.comparator),this.Ua=new Map,this.Ka=new Vf,this.Wa={},this.Ga=new Map,this.za=ko.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function _P(r,e,t=!0){const s=zE(r);let o;const l=s.ka.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Na()):o=await LE(s,e,t,!0),o}async function EP(r,e){const t=zE(r);await LE(t,e,!0,!1)}async function LE(r,e,t,s){const o=await MC(r.localStore,or(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await wP(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&PE(r.remoteStore,o),d}async function wP(r,e,t,s,o){r.Ha=(T,C,x)=>async function(H,$,le,pe){let ge=$.view.ba(le);ge.ls&&(ge=await Ly(H.localStore,$.query,!1).then(({documents:N})=>$.view.ba(N,ge)));const Ee=pe&&pe.targetChanges.get($.targetId),Me=pe&&pe.targetMismatches.get($.targetId)!=null,ce=$.view.applyChanges(ge,H.isPrimaryClient,Ee,Me);return Wy(H,$.targetId,ce.Ma),ce.snapshot}(r,T,C,x);const l=await Ly(r.localStore,e,!0),h=new mP(e,l.gs),d=h.ba(l.documents),g=hl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(d,r.isPrimaryClient,g);Wy(r,t,v.Ma);const E=new gP(e,t,h);return r.ka.set(e,E),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),v.snapshot}async function TP(r,e,t){const s=Ce(r),o=s.ka.get(e),l=s.qa.get(o.targetId);if(l.length>1)return s.qa.set(o.targetId,l.filter(h=>!kc(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sf(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Ff(s.remoteStore,o.targetId),lf(s,o.targetId)}).catch(bo)):(lf(s,o.targetId),await sf(s.localStore,o.targetId,!0))}async function IP(r,e){const t=Ce(r),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ff(t.remoteStore,s.targetId))}async function SP(r,e,t){const s=OP(r);try{const o=await function(h,d){const g=Ce(h),v=gt.now(),E=d.reduce((x,j)=>x.add(j.key),xe());let T,C;return g.persistence.runTransaction("Locally write mutations","readwrite",x=>{let j=Fr(),H=xe();return g.ds.getEntries(x,E).next($=>{j=$,j.forEach((le,pe)=>{pe.isValidDocument()||(H=H.add(le))})}).next(()=>g.localDocuments.getOverlayedDocuments(x,j)).next($=>{T=$;const le=[];for(const pe of d){const ge=MR(pe,T.get(pe.key).overlayedDocument);ge!=null&&le.push(new _s(pe.key,ge,q_(ge.value.mapValue),Vr.exists(!0)))}return g.mutationQueue.addMutationBatch(x,v,le,d)}).next($=>{C=$;const le=$.applyToLocalDocumentSet(T,H);return g.documentOverlayCache.saveOverlays(x,$.batchId,le)})}).then(()=>({batchId:C.batchId,changes:nE(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,d,g){let v=h.Wa[h.currentUser.toKey()];v||(v=new nt(De)),v=v.insert(d,g),h.Wa[h.currentUser.toKey()]=v}(s,o.batchId,t),await fl(s,o.changes),await Lc(s.remoteStore)}catch(o){const l=$f(o,"Failed to persist write");t.reject(l)}}async function ME(r,e){const t=Ce(r);try{const s=await VC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ua.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?Be(h.Ba):o.removedDocuments.size>0&&(Be(h.Ba),h.Ba=!1))}),await fl(t,s,e)}catch(s){await bo(s)}}function Hy(r,e,t){const s=Ce(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((l,h)=>{const d=h.view.sa(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const g=Ce(h);g.onlineState=d;let v=!1;g.queries.forEach((E,T)=>{for(const C of T.ta)C.sa(d)&&(v=!0)}),v&&qf(g)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function AP(r,e,t){const s=Ce(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ua.get(e),l=o&&o.key;if(l){let h=new nt(ye.comparator);h=h.insert(l,Ft.newNoDocument(l,Ae.min()));const d=xe().add(l),g=new xc(Ae.min(),new Map,new nt(De),h,d);await ME(s,g),s.$a=s.$a.remove(l),s.Ua.delete(e),Wf(s)}else await sf(s.localStore,e,!1).then(()=>lf(s,e,t)).catch(bo)}async function RP(r,e){const t=Ce(r),s=e.batch.batchId;try{const o=await xC(t.localStore,e);UE(t,s,null),FE(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await fl(t,o)}catch(o){await bo(o)}}async function CP(r,e,t){const s=Ce(r);try{const o=await function(h,d){const g=Ce(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let E;return g.mutationQueue.lookupMutationBatch(v,d).next(T=>(Be(T!==null),E=T.keys(),g.mutationQueue.removeMutationBatch(v,T))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,d)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E)).next(()=>g.localDocuments.getDocuments(v,E))})}(s.localStore,e);UE(s,e,t),FE(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await fl(s,o)}catch(o){await bo(o)}}function FE(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function UE(r,e,t){const s=Ce(r);let o=s.Wa[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function lf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),t&&r.La.Ja(s,t);r.qa.delete(e),r.isPrimaryClient&&r.Ka.br(e).forEach(s=>{r.Ka.containsKey(s)||jE(r,s)})}function jE(r,e){r.Qa.delete(e.path.canonicalString());const t=r.$a.get(e);t!==null&&(Ff(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ua.delete(t),Wf(r))}function Wy(r,e,t){for(const s of t)s instanceof VE?(r.Ka.addReference(s.key,e),PP(r,s)):s instanceof bE?(oe(Hf,"Document no longer in limbo: "+s.key),r.Ka.removeReference(s.key,e),r.Ka.containsKey(s.key)||jE(r,s.key)):Ie()}function PP(r,e){const t=e.key,s=t.path.canonicalString();r.$a.get(t)||r.Qa.has(s)||(oe(Hf,"New document in limbo: "+t),r.Qa.add(s),Wf(r))}function Wf(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const t=new ye(Ye.fromString(e)),s=r.za.next();r.Ua.set(s,new yP(t)),r.$a=r.$a.insert(t,s),PE(r.remoteStore,new pi(or(X_(t.path)),s,"TargetPurposeLimboResolution",Rc.ae))}}async function fl(r,e,t){const s=Ce(r),o=[],l=[],h=[];s.ka.isEmpty()||(s.ka.forEach((d,g)=>{h.push(s.Ha(g,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(v){o.push(v);const T=Lf.Yi(g.targetId,v);l.push(T)}}))}),await Promise.all(h),s.La.p_(o),await async function(g,v){const E=Ce(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(v,C=>K.forEach(C.Hi,x=>E.persistence.referenceDelegate.addReference(T,C.targetId,x)).next(()=>K.forEach(C.Ji,x=>E.persistence.referenceDelegate.removeReference(T,C.targetId,x)))))}catch(T){if(!Lo(T))throw T;oe(Mf,"Failed to update sequence numbers: "+T)}for(const T of v){const C=T.targetId;if(!T.fromCache){const x=E.Ts.get(C),j=x.snapshotVersion,H=x.withLastLimboFreeSnapshotVersion(j);E.Ts=E.Ts.insert(C,H)}}}(s.localStore,l))}async function kP(r,e){const t=Ce(r);if(!t.currentUser.isEqual(e)){oe(Hf,"User change. New user:",e.toKey());const s=await SE(t.localStore,e);t.currentUser=e,function(l,h){l.Ga.forEach(d=>{d.forEach(g=>{g.reject(new ue(G.CANCELLED,h))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await fl(t,s.Rs)}}function NP(r,e){const t=Ce(r),s=t.Ua.get(e);if(s&&s.Ba)return xe().add(s.key);{let o=xe();const l=t.qa.get(e);if(!l)return o;for(const h of l){const d=t.ka.get(h);o=o.unionWith(d.view.Sa)}return o}}function zE(r){const e=Ce(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=ME.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AP.bind(null,e),e.La.p_=dP.bind(null,e.eventManager),e.La.Ja=fP.bind(null,e.eventManager),e}function OP(r){const e=Ce(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CP.bind(null,e),e}class pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return DC(this.persistence,new kC,e.initialUser,this.serializer)}Xa(e){return new IE(bf.ri,this.serializer)}Za(e){return new UC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pc.provider={build:()=>new pc};class DP extends pc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Be(this.persistence.referenceDelegate instanceof dc);const s=this.persistence.referenceDelegate.garbageCollector;return new pC(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new IE(s=>dc.ri(s,t),this.serializer)}}class uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kP.bind(null,this.syncEngine),await aP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uP}()}createDatastore(e){const t=Vc(e.databaseInfo.databaseId),s=function(l){return new qC(l)}(e.databaseInfo);return function(l,h,d,g){return new GC(l,h,d,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,d){return new YC(s,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Hy(this.syncEngine,t,0),function(){return Uy.D()?new Uy:new jC}())}createSyncEngine(e,t){return function(o,l,h,d,g,v,E){const T=new vP(o,l,h,d,g,v);return E&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ce(o);oe(ds,"RemoteStore shutting down."),l.W_.add(5),await dl(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}uf.provider={build:()=>new uf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Mr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="FirestoreClient";class VP{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=V_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{oe(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(oe(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=$f(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pd(r,e){r.asyncQueue.verifyOperationInProgress(),oe(Ai,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await SE(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Ky(r,e){r.asyncQueue.verifyOperationInProgress();const t=await bP(r);oe(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>zy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>zy(e.remoteStore,o)),r._onlineComponents=e}async function bP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(Ai,"Using user provided OfflineComponentProvider");try{await Pd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Ao("Error using user provided cache. Falling back to memory cache: "+t),await Pd(r,new pc)}}else oe(Ai,"Using default OfflineComponentProvider"),await Pd(r,new DP(void 0));return r._offlineComponents}async function BE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(Ai,"Using user provided OnlineComponentProvider"),await Ky(r,r._uninitializedComponentsProvider._online)):(oe(Ai,"Using default OnlineComponentProvider"),await Ky(r,new uf))),r._onlineComponents}function LP(r){return BE(r).then(e=>e.syncEngine)}async function MP(r){const e=await BE(r),t=e.eventManager;return t.onListen=_P.bind(null,e.syncEngine),t.onUnlisten=TP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IP.bind(null,e.syncEngine),t}function FP(r,e,t={}){const s=new vi;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,d,g,v){const E=new xP({next:C=>{E.su(),h.enqueueAndForget(()=>hP(l,T)),C.fromCache&&g.source==="server"?v.reject(new ue(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(C)},error:C=>v.reject(C)}),T=new pP(d,E,{includeMetadataChanges:!0,Ta:!0});return cP(l,T)}(await MP(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(r,e,t){if(!t)throw new ue(G.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function UP(r,e,t,s){if(e===!0&&s===!0)throw new ue(G.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Qy(r){if(!ye.isDocumentKey(r))throw new ue(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Yy(r){if(ye.isDocumentKey(r))throw new ue(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Mc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ie()}function mc(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mc(r);throw new ue(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="firestore.googleapis.com",Xy=!0;class Jy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=HE,this.ssl=Xy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Xy;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=TE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dC)throw new ue(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$E((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new qA;switch(s.type){case"firstParty":return new GA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Gy.get(t);s&&(oe("ComponentProvider","Removing Datastore"),Gy.delete(t),s.terminate())}(this),Promise.resolve()}}function jP(r,e,t,s={}){var o;const l=(r=mc(r,Fc))._getSettings(),h=`${e}:${t}`;if(l.host!==HE&&l.host!==h&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let d,g;if(typeof s.mockUserToken=="string")d=s.mockUserToken,g=Mt.MOCK_USER;else{d=iI(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ue(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}r._authCredentials=new HA(new x_(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ki(this.firestore,e,this._query)}}class In{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}}class _i extends ki{constructor(e,t,s){super(e,t,X_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new ye(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function Zy(r,e,...t){if(r=Nt(r),qE("collection","path",e),r instanceof Fc){const s=Ye.fromString(e,...t);return Yy(s),new _i(r,null,s)}{if(!(r instanceof In||r instanceof _i))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return Yy(s),new _i(r.firestore,null,s)}}function zP(r,e,...t){if(r=Nt(r),arguments.length===1&&(e=V_.newId()),qE("doc","path",e),r instanceof Fc){const s=Ye.fromString(e,...t);return Qy(s),new In(r,null,new ye(s))}{if(!(r instanceof In||r instanceof _i))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return Qy(s),new In(r.firestore,r instanceof _i?r.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="AsyncQueue";class tv{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new RE(this,"async_queue_retry"),this.Su=()=>{const s=Cd();s&&oe(ev,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=Cd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Cd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new vi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Lo(e))throw e;oe(ev,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(s);throw Mr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Bf.createAndSchedule(this,e,t,s,l=>this.Fu(l));return this.fu.push(o),o}Du(){this.gu&&Ie()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Kf extends Fc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new tv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tv(e),this._firestoreClient=void 0,await e}}}function BP(r,e){const t=typeof r=="object"?r:df(),s=typeof r=="string"?r:sc,o=gs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=nI("firestore");l&&jP(o,...l)}return o}function WE(r){if(r._terminated)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$P(r),r._firestoreClient}function $P(r){var e,t,s;const o=r._freezeSettings(),l=function(d,g,v,E){return new lR(d,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,$E(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new VP(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(d){const g=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oo(Ot.fromBase64String(e))}catch(t){throw new ue(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oo(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=/^__.*__$/;class HP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,t,this.fieldTransforms):new cl(e,this.data,t,this.fieldTransforms)}}function GE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class Xf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return gc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(GE(this.Lu)&&qP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class WP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Vc(e)}ju(e,t,s,o=!1){return new Xf({Lu:e,methodName:t,zu:s,path:kt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QE(r){const e=r._freezeSettings(),t=Vc(r._databaseId);return new WP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function KP(r,e,t,s,o,l={}){const h=r.ju(l.merge||l.mergeFields?2:0,e,t,o);JE("Data must be an object, but it was:",h,s);const d=YE(s,h);let g,v;if(l.merge)g=new zn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const C=QP(e,T,t);if(!h.contains(C))throw new ue(G.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);XP(E,C)||E.push(C)}g=new zn(E),v=h.fieldTransforms.filter(T=>g.covers(T.field))}else g=null,v=h.fieldTransforms;return new HP(new wn(d),g,v)}function GP(r,e,t,s=!1){return Jf(t,r.ju(s?4:3,e))}function Jf(r,e){if(XE(r=Nt(r)))return JE("Unsupported field value:",e,r),YE(r,e);if(r instanceof KE)return function(s,o){if(!GE(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const d of s){let g=Jf(d,o.Ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=Nt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return OR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=gt.fromDate(s);return{timestampValue:hc(o.serializer,l)}}if(s instanceof gt){const l=new gt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hc(o.serializer,l)}}if(s instanceof Qf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Oo)return{bytesValue:mE(o.serializer,s._byteString)};if(s instanceof In){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:xf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Yf)return function(h,d){return{mapValue:{fields:{[B_]:{stringValue:$_},[oc]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw d.Wu("VectorValues must only contain numeric values.");return Nf(d.serializer,v)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Mc(s)}`)}(r,e)}function YE(r,e){const t={};return L_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(r,(s,o)=>{const l=Jf(o,e.qu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function XE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof gt||r instanceof Qf||r instanceof Oo||r instanceof In||r instanceof KE||r instanceof Yf)}function JE(r,e,t){if(!XE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Mc(t);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function QP(r,e,t){if((e=Nt(e))instanceof Gf)return e._internalPath;if(typeof e=="string")return ZE(r,e);throw gc("Field path arguments must be of type string or ",r,!1,void 0,t)}const YP=new RegExp("[~\\*/\\[\\]]");function ZE(r,e,t){if(e.search(YP)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Gf(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function gc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ue(G.INVALID_ARGUMENT,d+r+g)}function XP(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JP extends ew{data(){return super.data()}}function Zf(r,e){return typeof e=="string"?ZE(r,e):e instanceof Gf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ep{}class tp extends ep{}function ek(r,e,...t){let s=[];e instanceof ep&&s.push(e),s=s.concat(t),function(l){const h=l.filter(g=>g instanceof rp).length,d=l.filter(g=>g instanceof np).length;if(h>1||h>0&&d>0)throw new ue(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class np extends tp{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new np(e,t,s)}_apply(e){const t=this._parse(e);return tw(e._query,t),new ki(e.firestore,e.converter,Zd(e._query,t))}_parse(e){const t=QE(e.firestore);return function(l,h,d,g,v,E,T){let C;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ue(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){rv(T,E);const j=[];for(const H of T)j.push(nv(g,l,H));C={arrayValue:{values:j}}}else C=nv(g,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||rv(T,E),C=GP(d,h,T,E==="in"||E==="not-in");return ct.create(v,E,C)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class rp extends ep{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rp(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const g of d)tw(h,g),h=Zd(h,g)}(e._query,t),new ki(e.firestore,e.converter,Zd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ip extends tp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ip(e,t)}_apply(e){const t=function(o,l,h){if(o.startAt!==null)throw new ue(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tl(l,h)}(e._query,this._field,this._direction);return new ki(e.firestore,e.converter,function(o,l){const h=o.explicitOrderBy.concat([l]);return new Mo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function tk(r,e="asc"){const t=e,s=Zf("orderBy",r);return ip._create(s,t)}class sp extends tp{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new sp(e,t,s)}_apply(e){return new ki(e.firestore,e.converter,lc(e._query,this._limit,this._limitType))}}function nk(r){return sp._create("limit",r,"F")}function nv(r,e,t){if(typeof(t=Nt(t))=="string"){if(t==="")throw new ue(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!J_(e)&&t.indexOf("/")!==-1)throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ye.fromString(t));if(!ye.isDocumentKey(s))throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return yy(r,new ye(s))}if(t instanceof In)return yy(r,t._key);throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(t)}.`)}function rv(r,e){if(!Array.isArray(r)||r.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tw(r,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rk{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ys(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[oc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>ot(h.doubleValue));return new Yf(l)}convertGeoPoint(e){return new Qf(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Pc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const t=wi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Be(wE(s));const o=new Za(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return o.isEqual(t)||Mr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sk extends ew{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Zf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Yu extends sk{data(e={}){return super.data(e)}}class ok{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Lu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Yu(this._firestore,this._userDataWriter,s.key,s,new Lu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const g=new Yu(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Lu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const g=new Yu(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Lu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return d.type!==0&&(v=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:ak(d.type),doc:g,oldIndex:v,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ak(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}class lk extends rk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new In(this.firestore,null,t)}}function uk(r){r=mc(r,ki);const e=mc(r.firestore,Kf),t=WE(e),s=new lk(e);return ZP(r._query),FP(t,r._query).then(o=>new ok(e,s,r,o))}function ck(r,e){const t=mc(r.firestore,Kf),s=zP(r),o=ik(r.converter,e);return hk(t,[KP(QE(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Vr.exists(!1))]).then(()=>s)}function hk(r,e){return function(s,o){const l=new vi;return s.asyncQueue.enqueueAndForget(async()=>SP(await LP(s),o,l)),l.promise}(WE(r),e)}(function(e,t=!0){(function(o){Vo=o})(Do),lr(new $n("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),d=new Kf(new WA(s.getProvider("auth-internal")),new QA(h,s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ue(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(v.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Tn(oy,ay,e),Tn(oy,ay,"esm2017")})();const nw="@firebase/installations",op="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=1e4,iw=`w:${op}`,sw="FIS_v2",dk="https://firebaseinstallations.googleapis.com/v1",fk=60*60*1e3,pk="installations",mk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fs=new ms(pk,mk,gk);function ow(r){return r instanceof Hn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw({projectId:r}){return`${dk}/projects/${r}/installations`}function lw(r){return{token:r.token,requestStatus:2,expiresIn:vk(r.expiresIn),creationTime:Date.now()}}async function uw(r,e){const s=(await e.json()).error;return fs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function cw({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function yk(r,{refreshToken:e}){const t=cw(r);return t.append("Authorization",_k(e)),t}async function hw(r){const e=await r();return e.status>=500&&e.status<600?r():e}function vk(r){return Number(r.replace("s","000"))}function _k(r){return`${sw} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=aw(r),o=cw(r),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={fid:t,authVersion:sw,appId:r.appId,sdkVersion:iw},d={method:"POST",headers:o,body:JSON.stringify(h)},g=await hw(()=>fetch(s,d));if(g.ok){const v=await g.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:lw(v.authToken)}}else throw await uw("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^[cdef][\w-]{21}$/,cf="";function Ik(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=Sk(r);return Tk.test(t)?t:cf}catch{return cf}}function Sk(r){return wk(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new Map;function pw(r,e){const t=Uc(r);mw(t,e),Ak(t,e)}function mw(r,e){const t=fw.get(r);if(t)for(const s of t)s(e)}function Ak(r,e){const t=Rk();t&&t.postMessage({key:r,fid:e}),Ck()}let ls=null;function Rk(){return!ls&&"BroadcastChannel"in self&&(ls=new BroadcastChannel("[Firebase] FID Change"),ls.onmessage=r=>{mw(r.data.key,r.data.fid)}),ls}function Ck(){fw.size===0&&ls&&(ls.close(),ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="firebase-installations-database",kk=1,ps="firebase-installations-store";let kd=null;function ap(){return kd||(kd=Bv(Pk,kk,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ps)}}})),kd}async function yc(r,e){const t=Uc(r),o=(await ap()).transaction(ps,"readwrite"),l=o.objectStore(ps),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&pw(r,e.fid),e}async function gw(r){const e=Uc(r),s=(await ap()).transaction(ps,"readwrite");await s.objectStore(ps).delete(e),await s.done}async function jc(r,e){const t=Uc(r),o=(await ap()).transaction(ps,"readwrite"),l=o.objectStore(ps),h=await l.get(t),d=e(h);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&pw(r,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(r){let e;const t=await jc(r.appConfig,s=>{const o=Nk(s),l=Ok(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===cf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Nk(r){const e=r||{fid:Ik(),registrationStatus:0};return yw(e)}function Ok(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Dk(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xk(r)}:{installationEntry:e}}async function Dk(r,e){try{const t=await Ek(r,e);return yc(r.appConfig,t)}catch(t){throw ow(t)&&t.customData.serverCode===409?await gw(r.appConfig):await yc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xk(r){let e=await iv(r.appConfig);for(;e.registrationStatus===1;)await dw(100),e=await iv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await lp(r);return s||t}return e}function iv(r){return jc(r,e=>{if(!e)throw fs.create("installation-not-found");return yw(e)})}function yw(r){return Vk(r)?{fid:r.fid,registrationStatus:0}:r}function Vk(r){return r.registrationStatus===1&&r.registrationTime+rw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk({appConfig:r,heartbeatServiceProvider:e},t){const s=Lk(r,t),o=yk(r,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={installation:{sdkVersion:iw,appId:r.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},g=await hw(()=>fetch(s,d));if(g.ok){const v=await g.json();return lw(v)}else throw await uw("Generate Auth Token",g)}function Lk(r,{fid:e}){return`${aw(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(r,e=!1){let t;const s=await jc(r.appConfig,l=>{if(!vw(l))throw fs.create("not-registered");const h=l.authToken;if(!e&&Uk(h))return l;if(h.requestStatus===1)return t=Mk(r,e),l;{if(!navigator.onLine)throw fs.create("app-offline");const d=zk(l);return t=Fk(r,d),d}});return t?await t:s.authToken}async function Mk(r,e){let t=await sv(r.appConfig);for(;t.authToken.requestStatus===1;)await dw(100),t=await sv(r.appConfig);const s=t.authToken;return s.requestStatus===0?up(r,e):s}function sv(r){return jc(r,e=>{if(!vw(e))throw fs.create("not-registered");const t=e.authToken;return Bk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Fk(r,e){try{const t=await bk(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await yc(r.appConfig,s),t}catch(t){if(ow(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await gw(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yc(r.appConfig,s)}throw t}}function vw(r){return r!==void 0&&r.registrationStatus===2}function Uk(r){return r.requestStatus===2&&!jk(r)}function jk(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+fk}function zk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function Bk(r){return r.requestStatus===1&&r.requestTime+rw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(r){const e=r,{installationEntry:t,registrationPromise:s}=await lp(e);return s?s.catch(console.error):up(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(r,e=!1){const t=r;return await Hk(t),(await up(t,e)).token}async function Hk(r){const{registrationPromise:e}=await lp(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(r){if(!r||!r.options)throw Nd("App Configuration");if(!r.name)throw Nd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Nd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Nd(r){return fs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="installations",Kk="installations-internal",Gk=r=>{const e=r.getProvider("app").getImmediate(),t=Wk(e),s=gs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Qk=r=>{const e=r.getProvider("app").getImmediate(),t=gs(e,_w).getImmediate();return{getId:()=>$k(t),getToken:o=>qk(t,o)}};function Yk(){lr(new $n(_w,Gk,"PUBLIC")),lr(new $n(Kk,Qk,"PRIVATE"))}Yk();Tn(nw,op);Tn(nw,op,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="analytics",Xk="firebase_id",Jk="origin",Zk=60*1e3,e1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new wc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},un=new ms("analytics","Analytics",t1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(r){if(!r.startsWith(cp)){const e=un.create("invalid-gtag-resource",{gtagURL:r});return Zt.warn(e.message),""}return r}function Ew(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function r1(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function i1(r,e){const t=r1("firebase-js-sdk-policy",{createScriptURL:n1}),s=document.createElement("script"),o=`${cp}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function s1(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function o1(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const g=(await Ew(t)).find(v=>v.measurementId===o);g&&await e[g.appId]}}catch(d){Zt.error(d)}r("config",o,l)}async function a1(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await Ew(t);for(const g of h){const v=d.find(T=>T.measurementId===g),E=v&&e[v.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){Zt.error(l)}}function l1(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[d,g]=h;await a1(r,e,t,d,g)}else if(l==="config"){const[d,g]=h;await o1(r,e,t,s,d,g)}else if(l==="consent"){const[d,g]=h;r("consent",d,g)}else if(l==="get"){const[d,g,v]=h;r("get",d,g,v)}else if(l==="set"){const[d]=h;r("set",d)}else r(l,...h)}catch(d){Zt.error(d)}}return o}function u1(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=l1(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function c1(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(cp)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=30,d1=1e3;class f1{constructor(e={},t=d1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ww=new f1;function p1(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function m1(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:p1(s)},l=e1.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let d="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(d=g.error.message)}catch{}throw un.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function g1(r,e=ww,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw un.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw un.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new _1;return setTimeout(async()=>{d.abort()},Zk),Tw({appId:s,apiKey:o,measurementId:l},h,d,e)}async function Tw(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=ww){var l;const{appId:h,measurementId:d}=r;try{await y1(s,e)}catch(g){if(d)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:d};throw g}try{const g=await m1(r);return o.deleteThrottleMetadata(h),g}catch(g){const v=g;if(!v1(v)){if(o.deleteThrottleMetadata(h),d)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:h,measurementId:d};throw g}const E=Number((l=v==null?void 0:v.customData)===null||l===void 0?void 0:l.httpStatus)===503?Ng(t,o.intervalMillis,h1):Ng(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,T),Zt.debug(`Calling attemptFetch again in ${E} millis`),Tw(r,T,s,o)}}function y1(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function v1(r){if(!(r instanceof Hn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class _1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function E1(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(){if(Fv())try{await Uv()}catch(r){return Zt.warn(un.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return Zt.warn(un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function T1(r,e,t,s,o,l,h){var d;const g=g1(r);g.then(x=>{t[x.measurementId]=x.appId,r.options.measurementId&&x.measurementId!==r.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>Zt.error(x)),e.push(g);const v=w1().then(x=>{if(x)return s.getId()}),[E,T]=await Promise.all([g,v]);c1(l)||i1(l,E.measurementId),o("js",new Date);const C=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return C[Jk]="firebase",C.update=!0,T!=null&&(C[Xk]=T),o("config",E.measurementId,C),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.app=e}_delete(){return delete Wa[this.app.options.appId],Promise.resolve()}}let Wa={},ov=[];const av={};let Od="dataLayer",S1="gtag",lv,Iw,uv=!1;function A1(){const r=[];if(Mv()&&r.push("This is a browser extension environment."),hI()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=un.create("invalid-analytics-context",{errorInfo:e});Zt.warn(t.message)}}function R1(r,e,t){A1();const s=r.options.appId;if(!s)throw un.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw un.create("no-api-key");if(Wa[s]!=null)throw un.create("already-exists",{id:s});if(!uv){s1(Od);const{wrappedGtag:l,gtagCore:h}=u1(Wa,ov,av,Od,S1);Iw=l,lv=h,uv=!0}return Wa[s]=T1(r,ov,av,e,lv,Od,t),new I1(r)}function C1(r=df()){r=Nt(r);const e=gs(r,vc);return e.isInitialized()?e.getImmediate():P1(r)}function P1(r,e={}){const t=gs(r,vc);if(t.isInitialized()){const o=t.getImmediate();if(Ka(e,t.getOptions()))return o;throw un.create("already-initialized")}return t.initialize({options:e})}function k1(r,e,t,s){r=Nt(r),E1(Iw,Wa[r.app.options.appId],e,t,s).catch(o=>Zt.error(o))}const cv="@firebase/analytics",hv="0.10.11";function N1(){lr(new $n(vc,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return R1(s,o,t)},"PUBLIC")),lr(new $n("analytics-internal",r,"PRIVATE")),Tn(cv,hv),Tn(cv,hv,"esm2017");function r(e){try{const t=e.getProvider(vc).getImmediate();return{logEvent:(s,o,l)=>k1(t,s,o,l)}}catch(t){throw un.create("interop-component-reg-failed",{reason:t})}}}N1();const O1={apiKey:"AIzaSyBiNRuXCgpNFyssi-5Cr-Kv03kuih0osqw",authDomain:"proyecto-pokeapi.firebaseapp.com",projectId:"proyecto-pokeapi",storageBucket:"proyecto-pokeapi.appspot.com",messagingSenderId:"649697336479",appId:"1:649697336479:web:c11f782e0e81b80fe196aa",measurementId:"G-HHVLCTNGCD"},hp=$v(O1);C1(hp);const ja=Ac(hp),dv=BP(hp);function D1(){const[r,e]=Ze.useState(""),[t,s]=Ze.useState(""),[o,l]=Ze.useState(!1),h=_c(),d=C=>e(C.target.value),g=C=>s(C.target.value),v=C=>{C.preventDefault(),o?CS(ja,r,t).then(x=>{console.log("User registered:",x.user),h("/")}).catch(x=>{console.error("Error registering:",x)}):PS(ja,r,t).then(x=>{console.log("User signed in:",x.user),h("/")}).catch(x=>{console.error("Error signing in:",x)})},E=()=>{const C=new Pr;Xg(ja,C).then(x=>{console.log("User signed in with Google:",x.user),h("/")}).catch(x=>{console.error("Error signing in with Google:",x)})},T=()=>{const C=new kr;Xg(ja,C).then(x=>{console.log("User signed in with GitHub:",x.user),h("/")}).catch(x=>{console.error("Error signing in with GitHub:",x)})};return Q.jsx("div",{className:"login-container",children:Q.jsxs("div",{className:"login-box",children:[Q.jsx("h1",{className:"login-title",children:o?"Register":"Login"}),Q.jsxs("form",{onSubmit:v,className:"login-form",children:[Q.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:d,required:!0,className:"login-input"}),Q.jsx("input",{type:"password",placeholder:"Password",value:t,onChange:g,required:!0,className:"login-input"}),Q.jsx("button",{type:"submit",className:"primary-button",children:o?"Registrarse":"Iniciar Sesión"})]}),Q.jsx("button",{onClick:E,className:"secondary-button",children:"Inicia sesión con Google"}),Q.jsx("button",{onClick:T,className:"secondary-button",children:"Inicia sesión con GitHub"}),Q.jsx("button",{onClick:()=>l(!o),className:"toggle-button",children:o?"Ya tienes una cuenta? Inicia Sesión":"Todavia no tienes cuenta? Registrate"})]})})}function fv({children:r}){return Ac().currentUser?r:Q.jsx(bT,{to:"/login",replace:!0})}var Mu={exports:{}},hi={},Dd={exports:{}},xd,pv;function x1(){if(pv)return xd;pv=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xd=r,xd}var Vd,mv;function V1(){if(mv)return Vd;mv=1;var r=x1();function e(){}function t(){}return t.resetWarningCache=e,Vd=function(){function s(h,d,g,v,E,T){if(T!==r){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Vd}var gv;function Sw(){return gv||(gv=1,Dd.exports=V1()()),Dd.exports}var Fu={exports:{}},En={},Uu={exports:{}},yv;function Aw(){return yv||(yv=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=E;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var t="none",s="contents",o=/^(input|select|textarea|button|object|iframe)$/;function l(T,C){return C.getPropertyValue("overflow")!=="visible"||T.scrollWidth<=0&&T.scrollHeight<=0}function h(T){var C=T.offsetWidth<=0&&T.offsetHeight<=0;if(C&&!T.innerHTML)return!0;try{var x=window.getComputedStyle(T),j=x.getPropertyValue("display");return C?j!==s&&l(T,x):j===t}catch{return console.warn("Failed to inspect element style"),!1}}function d(T){for(var C=T,x=T.getRootNode&&T.getRootNode();C&&C!==document.body;){if(x&&C===x&&(C=x.host.parentNode),h(C))return!1;C=C.parentNode}return!0}function g(T,C){var x=T.nodeName.toLowerCase(),j=o.test(x)&&!T.disabled||x==="a"&&T.href||C;return j&&d(T)}function v(T){var C=T.getAttribute("tabindex");C===null&&(C=void 0);var x=isNaN(C);return(x||C>=0)&&g(T,!x)}function E(T){var C=[].slice.call(T.querySelectorAll("*"),0).reduce(function(x,j){return x.concat(j.shadowRoot?E(j.shadowRoot):[j])},[]);return C.filter(v)}r.exports=e.default}(Uu,Uu.exports)),Uu.exports}var vv;function b1(){if(vv)return En;vv=1,Object.defineProperty(En,"__esModule",{value:!0}),En.resetState=h,En.log=d,En.handleBlur=g,En.handleFocus=v,En.markForFocusLater=E,En.returnFocus=T,En.popWithoutFocus=C,En.setupScopedFocus=x,En.teardownScopedFocus=j;var r=Aw(),e=t(r);function t(H){return H&&H.__esModule?H:{default:H}}var s=[],o=null,l=!1;function h(){s=[]}function d(){}function g(){l=!0}function v(){if(l){if(l=!1,!o)return;setTimeout(function(){if(!o.contains(document.activeElement)){var H=(0,e.default)(o)[0]||o;H.focus()}},0)}}function E(){s.push(document.activeElement)}function T(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,$=null;try{s.length!==0&&($=s.pop(),$.focus({preventScroll:H}));return}catch{console.warn(["You tried to return focus to",$,"but it is not in the DOM anymore"].join(" "))}}function C(){s.length>0&&s.pop()}function x(H){o=H,window.addEventListener?(window.addEventListener("blur",g,!1),document.addEventListener("focus",v,!0)):(window.attachEvent("onBlur",g),document.attachEvent("onFocus",v))}function j(){o=null,window.addEventListener?(window.removeEventListener("blur",g),document.removeEventListener("focus",v)):(window.detachEvent("onBlur",g),document.detachEvent("onFocus",v))}return En}var ju={exports:{}},_v;function L1(){return _v||(_v=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;var t=Aw(),s=o(t);function o(d){return d&&d.__esModule?d:{default:d}}function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return d.activeElement.shadowRoot?l(d.activeElement.shadowRoot):d.activeElement}function h(d,g){var v=(0,s.default)(d);if(!v.length){g.preventDefault();return}var E=void 0,T=g.shiftKey,C=v[0],x=v[v.length-1],j=l();if(d===j){if(!T)return;E=x}if(x===j&&!T&&(E=C),C===j&&T&&(E=x),E){g.preventDefault(),E.focus();return}var H=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=H!=null&&H[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var le=v.indexOf(j);if(le>-1&&(le+=T?-1:1),E=v[le],typeof E>"u"){g.preventDefault(),E=T?x:C,E.focus();return}g.preventDefault(),E.focus()}}r.exports=e.default}(ju,ju.exports)),ju.exports}var jn={},bd,Ev;function M1(){if(Ev)return bd;Ev=1;var r=function(){};return bd=r,bd}var rr={},Ld={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/var wv;function F1(){return wv||(wv=1,function(r){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),t={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};r.exports?r.exports=t:window.ExecutionEnvironment=t})()}(Ld)),Ld.exports}var Tv;function dp(){if(Tv)return rr;Tv=1,Object.defineProperty(rr,"__esModule",{value:!0}),rr.canUseDOM=rr.SafeNodeList=rr.SafeHTMLCollection=void 0;var r=F1(),e=t(r);function t(l){return l&&l.__esModule?l:{default:l}}var s=e.default,o=s.canUseDOM?window.HTMLElement:{};return rr.SafeHTMLCollection=s.canUseDOM?window.HTMLCollection:{},rr.SafeNodeList=s.canUseDOM?window.NodeList:{},rr.canUseDOM=s.canUseDOM,rr.default=o,rr}var Iv;function Rw(){if(Iv)return jn;Iv=1,Object.defineProperty(jn,"__esModule",{value:!0}),jn.resetState=l,jn.log=h,jn.assertNodeList=d,jn.setElement=g,jn.validateElement=v,jn.hide=E,jn.show=T,jn.documentNotReadyOrSSRTesting=C;var r=M1(),e=s(r),t=dp();function s(x){return x&&x.__esModule?x:{default:x}}var o=null;function l(){o&&(o.removeAttribute?o.removeAttribute("aria-hidden"):o.length!=null?o.forEach(function(x){return x.removeAttribute("aria-hidden")}):document.querySelectorAll(o).forEach(function(x){return x.removeAttribute("aria-hidden")})),o=null}function h(){}function d(x,j){if(!x||!x.length)throw new Error("react-modal: No elements were found for selector "+j+".")}function g(x){var j=x;if(typeof j=="string"&&t.canUseDOM){var H=document.querySelectorAll(j);d(H,j),j=H}return o=j||o,o}function v(x){var j=x||o;return j?Array.isArray(j)||j instanceof HTMLCollection||j instanceof NodeList?j:[j]:((0,e.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function E(x){var j=!0,H=!1,$=void 0;try{for(var le=v(x)[Symbol.iterator](),pe;!(j=(pe=le.next()).done);j=!0){var ge=pe.value;ge.setAttribute("aria-hidden","true")}}catch(Ee){H=!0,$=Ee}finally{try{!j&&le.return&&le.return()}finally{if(H)throw $}}}function T(x){var j=!0,H=!1,$=void 0;try{for(var le=v(x)[Symbol.iterator](),pe;!(j=(pe=le.next()).done);j=!0){var ge=pe.value;ge.removeAttribute("aria-hidden")}}catch(Ee){H=!0,$=Ee}finally{try{!j&&le.return&&le.return()}finally{if(H)throw $}}}function C(){o=null}return jn}var is={},Sv;function U1(){if(Sv)return is;Sv=1,Object.defineProperty(is,"__esModule",{value:!0}),is.resetState=s,is.log=o;var r={},e={};function t(v,E){v.classList.remove(E)}function s(){var v=document.getElementsByTagName("html")[0];for(var E in r)t(v,r[E]);var T=document.body;for(var C in e)t(T,e[C]);r={},e={}}function o(){}var l=function(E,T){return E[T]||(E[T]=0),E[T]+=1,T},h=function(E,T){return E[T]&&(E[T]-=1),T},d=function(E,T,C){C.forEach(function(x){l(T,x),E.add(x)})},g=function(E,T,C){C.forEach(function(x){h(T,x),T[x]===0&&E.remove(x)})};return is.add=function(E,T){return d(E.classList,E.nodeName.toLowerCase()=="html"?r:e,T.split(" "))},is.remove=function(E,T){return g(E.classList,E.nodeName.toLowerCase()=="html"?r:e,T.split(" "))},is}var mo={},Av;function Cw(){if(Av)return mo;Av=1,Object.defineProperty(mo,"__esModule",{value:!0}),mo.log=s,mo.resetState=o;function r(l,h){if(!(l instanceof h))throw new TypeError("Cannot call a class as a function")}var e=function l(){var h=this;r(this,l),this.register=function(d){h.openInstances.indexOf(d)===-1&&(h.openInstances.push(d),h.emit("register"))},this.deregister=function(d){var g=h.openInstances.indexOf(d);g!==-1&&(h.openInstances.splice(g,1),h.emit("deregister"))},this.subscribe=function(d){h.subscribers.push(d)},this.emit=function(d){h.subscribers.forEach(function(g){return g(d,h.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},t=new e;function s(){console.log("portalOpenInstances ----------"),console.log(t.openInstances.length),t.openInstances.forEach(function(l){return console.log(l)}),console.log("end portalOpenInstances ----------")}function o(){t=new e}return mo.default=t,mo}var Va={},Rv;function j1(){if(Rv)return Va;Rv=1,Object.defineProperty(Va,"__esModule",{value:!0}),Va.resetState=h,Va.log=d;var r=Cw(),e=t(r);function t(E){return E&&E.__esModule?E:{default:E}}var s=void 0,o=void 0,l=[];function h(){for(var E=[s,o],T=0;T<E.length;T++){var C=E[T];C&&C.parentNode&&C.parentNode.removeChild(C)}s=o=null,l=[]}function d(){console.log("bodyTrap ----------"),console.log(l.length);for(var E=[s,o],T=0;T<E.length;T++){var C=E[T],x=C||{};console.log(x.nodeName,x.className,x.id)}console.log("edn bodyTrap ----------")}function g(){l.length!==0&&l[l.length-1].focusContent()}function v(E,T){!s&&!o&&(s=document.createElement("div"),s.setAttribute("data-react-modal-body-trap",""),s.style.position="absolute",s.style.opacity="0",s.setAttribute("tabindex","0"),s.addEventListener("focus",g),o=s.cloneNode(),o.addEventListener("focus",g)),l=T,l.length>0?(document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild),document.body.lastChild!==o&&document.body.appendChild(o)):(s.parentElement&&s.parentElement.removeChild(s),o.parentElement&&o.parentElement.removeChild(o))}return e.default.subscribe(v),Va}var Cv;function z1(){return Cv||(Cv=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(ee){for(var ne=1;ne<arguments.length;ne++){var we=arguments[ne];for(var U in we)Object.prototype.hasOwnProperty.call(we,U)&&(ee[U]=we[U])}return ee},s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ee){return typeof ee}:function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},o=function(){function ee(ne,we){for(var U=0;U<we.length;U++){var q=we[U];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(ne,q.key,q)}}return function(ne,we,U){return we&&ee(ne.prototype,we),U&&ee(ne,U),ne}}(),l=il(),h=Sw(),d=Me(h),g=b1(),v=Ee(g),E=L1(),T=Me(E),C=Rw(),x=Ee(C),j=U1(),H=Ee(j),$=dp(),le=Me($),pe=Cw(),ge=Me(pe);j1();function Ee(ee){if(ee&&ee.__esModule)return ee;var ne={};if(ee!=null)for(var we in ee)Object.prototype.hasOwnProperty.call(ee,we)&&(ne[we]=ee[we]);return ne.default=ee,ne}function Me(ee){return ee&&ee.__esModule?ee:{default:ee}}function ce(ee,ne){if(!(ee instanceof ne))throw new TypeError("Cannot call a class as a function")}function N(ee,ne){if(!ee)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return ne&&(typeof ne=="object"||typeof ne=="function")?ne:ee}function S(ee,ne){if(typeof ne!="function"&&ne!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof ne);ee.prototype=Object.create(ne&&ne.prototype,{constructor:{value:ee,enumerable:!1,writable:!0,configurable:!0}}),ne&&(Object.setPrototypeOf?Object.setPrototypeOf(ee,ne):ee.__proto__=ne)}var R={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},D=function(ne){return ne.code==="Tab"||ne.keyCode===9},P=function(ne){return ne.code==="Escape"||ne.keyCode===27},k=0,I=function(ee){S(ne,ee);function ne(we){ce(this,ne);var U=N(this,(ne.__proto__||Object.getPrototypeOf(ne)).call(this,we));return U.setOverlayRef=function(q){U.overlay=q,U.props.overlayRef&&U.props.overlayRef(q)},U.setContentRef=function(q){U.content=q,U.props.contentRef&&U.props.contentRef(q)},U.afterClose=function(){var q=U.props,ie=q.appElement,Z=q.ariaHideApp,V=q.htmlOpenClassName,W=q.bodyOpenClassName,he=q.parentSelector,Re=he&&he().ownerDocument||document;W&&H.remove(Re.body,W),V&&H.remove(Re.getElementsByTagName("html")[0],V),Z&&k>0&&(k-=1,k===0&&x.show(ie)),U.props.shouldFocusAfterRender&&(U.props.shouldReturnFocusAfterClose?(v.returnFocus(U.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),U.props.onAfterClose&&U.props.onAfterClose(),ge.default.deregister(U)},U.open=function(){U.beforeOpen(),U.state.afterOpen&&U.state.beforeClose?(clearTimeout(U.closeTimer),U.setState({beforeClose:!1})):(U.props.shouldFocusAfterRender&&(v.setupScopedFocus(U.node),v.markForFocusLater()),U.setState({isOpen:!0},function(){U.openAnimationFrame=requestAnimationFrame(function(){U.setState({afterOpen:!0}),U.props.isOpen&&U.props.onAfterOpen&&U.props.onAfterOpen({overlayEl:U.overlay,contentEl:U.content})})}))},U.close=function(){U.props.closeTimeoutMS>0?U.closeWithTimeout():U.closeWithoutTimeout()},U.focusContent=function(){return U.content&&!U.contentHasFocus()&&U.content.focus({preventScroll:!0})},U.closeWithTimeout=function(){var q=Date.now()+U.props.closeTimeoutMS;U.setState({beforeClose:!0,closesAt:q},function(){U.closeTimer=setTimeout(U.closeWithoutTimeout,U.state.closesAt-Date.now())})},U.closeWithoutTimeout=function(){U.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},U.afterClose)},U.handleKeyDown=function(q){D(q)&&(0,T.default)(U.content,q),U.props.shouldCloseOnEsc&&P(q)&&(q.stopPropagation(),U.requestClose(q))},U.handleOverlayOnClick=function(q){U.shouldClose===null&&(U.shouldClose=!0),U.shouldClose&&U.props.shouldCloseOnOverlayClick&&(U.ownerHandlesClose()?U.requestClose(q):U.focusContent()),U.shouldClose=null},U.handleContentOnMouseUp=function(){U.shouldClose=!1},U.handleOverlayOnMouseDown=function(q){!U.props.shouldCloseOnOverlayClick&&q.target==U.overlay&&q.preventDefault()},U.handleContentOnClick=function(){U.shouldClose=!1},U.handleContentOnMouseDown=function(){U.shouldClose=!1},U.requestClose=function(q){return U.ownerHandlesClose()&&U.props.onRequestClose(q)},U.ownerHandlesClose=function(){return U.props.onRequestClose},U.shouldBeClosed=function(){return!U.state.isOpen&&!U.state.beforeClose},U.contentHasFocus=function(){return document.activeElement===U.content||U.content.contains(document.activeElement)},U.buildClassName=function(q,ie){var Z=(typeof ie>"u"?"undefined":s(ie))==="object"?ie:{base:R[q],afterOpen:R[q]+"--after-open",beforeClose:R[q]+"--before-close"},V=Z.base;return U.state.afterOpen&&(V=V+" "+Z.afterOpen),U.state.beforeClose&&(V=V+" "+Z.beforeClose),typeof ie=="string"&&ie?V+" "+ie:V},U.attributesFromObject=function(q,ie){return Object.keys(ie).reduce(function(Z,V){return Z[q+"-"+V]=ie[V],Z},{})},U.state={afterOpen:!1,beforeClose:!1},U.shouldClose=null,U.moveFromContentToOverlay=null,U}return o(ne,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(U,q){this.props.isOpen&&!U.isOpen?this.open():!this.props.isOpen&&U.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!q.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var U=this.props,q=U.appElement,ie=U.ariaHideApp,Z=U.htmlOpenClassName,V=U.bodyOpenClassName,W=U.parentSelector,he=W&&W().ownerDocument||document;V&&H.add(he.body,V),Z&&H.add(he.getElementsByTagName("html")[0],Z),ie&&(k+=1,x.hide(q)),ge.default.register(this)}},{key:"render",value:function(){var U=this.props,q=U.id,ie=U.className,Z=U.overlayClassName,V=U.defaultStyles,W=U.children,he=ie?{}:V.content,Re=Z?{}:V.overlay;if(this.shouldBeClosed())return null;var Pe={ref:this.setOverlayRef,className:this.buildClassName("overlay",Z),style:t({},Re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ne=t({id:q,ref:this.setContentRef,style:t({},he,this.props.style.content),className:this.buildClassName("content",ie),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",t({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Fe=this.props.contentElement(Ne,W);return this.props.overlayElement(Pe,Fe)}}]),ne}(l.Component);I.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},I.propTypes={isOpen:d.default.bool.isRequired,defaultStyles:d.default.shape({content:d.default.object,overlay:d.default.object}),style:d.default.shape({content:d.default.object,overlay:d.default.object}),className:d.default.oneOfType([d.default.string,d.default.object]),overlayClassName:d.default.oneOfType([d.default.string,d.default.object]),parentSelector:d.default.func,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,ariaHideApp:d.default.bool,appElement:d.default.oneOfType([d.default.instanceOf(le.default),d.default.instanceOf($.SafeHTMLCollection),d.default.instanceOf($.SafeNodeList),d.default.arrayOf(d.default.instanceOf(le.default))]),onAfterOpen:d.default.func,onAfterClose:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,role:d.default.string,contentLabel:d.default.string,aria:d.default.object,data:d.default.object,children:d.default.node,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func,testId:d.default.string},e.default=I,r.exports=e.default}(Fu,Fu.exports)),Fu.exports}function Pw(){var r=this.constructor.getDerivedStateFromProps(this.props,this.state);r!=null&&this.setState(r)}function kw(r){function e(t){var s=this.constructor.getDerivedStateFromProps(r,t);return s??null}this.setState(e.bind(this))}function Nw(r,e){try{var t=this.props,s=this.state;this.props=r,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,s)}finally{this.props=t,this.state=s}}Pw.__suppressDeprecationWarning=!0;kw.__suppressDeprecationWarning=!0;Nw.__suppressDeprecationWarning=!0;function B1(r){var e=r.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof r.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return r;var t=null,s=null,o=null;if(typeof e.componentWillMount=="function"?t="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(t="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?s="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(s="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?o="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),t!==null||s!==null||o!==null){var l=r.displayName||r.name,h=typeof r.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+h+" but also contains the following legacy lifecycles:"+(t!==null?`
  `+t:"")+(s!==null?`
  `+s:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof r.getDerivedStateFromProps=="function"&&(e.componentWillMount=Pw,e.componentWillReceiveProps=kw),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Nw;var d=e.componentDidUpdate;e.componentDidUpdate=function(v,E,T){var C=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:T;d.call(this,v,E,C)}}return r}const $1=Object.freeze(Object.defineProperty({__proto__:null,polyfill:B1},Symbol.toStringTag,{value:"Module"})),q1=jT($1);var Pv;function H1(){if(Pv)return hi;Pv=1,Object.defineProperty(hi,"__esModule",{value:!0}),hi.bodyOpenClassName=hi.portalClassName=void 0;var r=Object.assign||function(P){for(var k=1;k<arguments.length;k++){var I=arguments[k];for(var ee in I)Object.prototype.hasOwnProperty.call(I,ee)&&(P[ee]=I[ee])}return P},e=function(){function P(k,I){for(var ee=0;ee<I.length;ee++){var ne=I[ee];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(k,ne.key,ne)}}return function(k,I,ee){return I&&P(k.prototype,I),ee&&P(k,ee),k}}(),t=il(),s=$(t),o=Nv(),l=$(o),h=Sw(),d=$(h),g=z1(),v=$(g),E=Rw(),T=H(E),C=dp(),x=$(C),j=q1;function H(P){if(P&&P.__esModule)return P;var k={};if(P!=null)for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&(k[I]=P[I]);return k.default=P,k}function $(P){return P&&P.__esModule?P:{default:P}}function le(P,k){if(!(P instanceof k))throw new TypeError("Cannot call a class as a function")}function pe(P,k){if(!P)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k&&(typeof k=="object"||typeof k=="function")?k:P}function ge(P,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof k);P.prototype=Object.create(k&&k.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(P,k):P.__proto__=k)}var Ee=hi.portalClassName="ReactModalPortal",Me=hi.bodyOpenClassName="ReactModal__Body--open",ce=C.canUseDOM&&l.default.createPortal!==void 0,N=function(k){return document.createElement(k)},S=function(){return ce?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function R(P){return P()}var D=function(P){ge(k,P);function k(){var I,ee,ne,we;le(this,k);for(var U=arguments.length,q=Array(U),ie=0;ie<U;ie++)q[ie]=arguments[ie];return we=(ee=(ne=pe(this,(I=k.__proto__||Object.getPrototypeOf(k)).call.apply(I,[this].concat(q))),ne),ne.removePortal=function(){!ce&&l.default.unmountComponentAtNode(ne.node);var Z=R(ne.props.parentSelector);Z&&Z.contains(ne.node)?Z.removeChild(ne.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},ne.portalRef=function(Z){ne.portal=Z},ne.renderPortal=function(Z){var V=S(),W=V(ne,s.default.createElement(v.default,r({defaultStyles:k.defaultStyles},Z)),ne.node);ne.portalRef(W)},ee),pe(ne,we)}return e(k,[{key:"componentDidMount",value:function(){if(C.canUseDOM){ce||(this.node=N("div")),this.node.className=this.props.portalClassName;var ee=R(this.props.parentSelector);ee.appendChild(this.node),!ce&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(ee){var ne=R(ee.parentSelector),we=R(this.props.parentSelector);return{prevParent:ne,nextParent:we}}},{key:"componentDidUpdate",value:function(ee,ne,we){if(C.canUseDOM){var U=this.props,q=U.isOpen,ie=U.portalClassName;ee.portalClassName!==ie&&(this.node.className=ie);var Z=we.prevParent,V=we.nextParent;V!==Z&&(Z.removeChild(this.node),V.appendChild(this.node)),!(!ee.isOpen&&!q)&&!ce&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!C.canUseDOM||!this.node||!this.portal)){var ee=this.portal.state,ne=Date.now(),we=ee.isOpen&&this.props.closeTimeoutMS&&(ee.closesAt||ne+this.props.closeTimeoutMS);we?(ee.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,we-ne)):this.removePortal()}}},{key:"render",value:function(){if(!C.canUseDOM||!ce)return null;!this.node&&ce&&(this.node=N("div"));var ee=S();return ee(s.default.createElement(v.default,r({ref:this.portalRef,defaultStyles:k.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(ee){T.setElement(ee)}}]),k}(t.Component);return D.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(x.default),d.default.instanceOf(C.SafeHTMLCollection),d.default.instanceOf(C.SafeNodeList),d.default.arrayOf(d.default.instanceOf(x.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func},D.defaultProps={isOpen:!1,portalClassName:Ee,bodyOpenClassName:Me,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(k,I){return s.default.createElement("div",k,I)},contentElement:function(k,I){return s.default.createElement("div",k,I)}},D.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,j.polyfill)(D),hi.default=D,hi}var kv;function W1(){return kv||(kv=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=H1(),s=o(t);function o(l){return l&&l.__esModule?l:{default:l}}e.default=s.default,r.exports=e.default}(Mu,Mu.exports)),Mu.exports}var K1=W1();const Ow=UT(K1);Ow.setAppElement("#root");function G1(){const[r,e]=Ze.useState([]),[t,s]=Ze.useState(!1),[o,l]=Ze.useState(0),[h,d]=Ze.useState(null),[g,v]=Ze.useState(!1);_c();const E=j=>{s(!0),fetch(`https://pokeapi.co/api/v2/pokemon?offset=${j}&limit=8`).then(H=>H.json()).then(H=>{const $=H.results.map(le=>fetch(le.url).then(pe=>pe.json()));return Promise.all($)}).then(H=>{e($=>{const le=H.filter(pe=>!$.some(ge=>ge.id===pe.id));return[...$,...le]}),s(!1)}).catch(H=>{console.error("Error fetching Pokémon list:",H),s(!1)})};Ze.useEffect(()=>{E(o)},[o]);const T=()=>{l(j=>j+8)},C=j=>{d(j),v(!0)},x=()=>{v(!1),d(null)};return Q.jsxs("div",{className:"main-content",children:[Q.jsx("h1",{children:"Lista de Pokémon"}),Q.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:r.map((j,H)=>Q.jsxs("div",{className:"card",children:[Q.jsx("h2",{children:j.name}),Q.jsx("img",{src:j.sprites.front_default,alt:j.name}),Q.jsx("button",{onClick:()=>C(j),children:"Saber Más"})]},`${j.id}-${H}`))}),t&&Q.jsx("p",{children:"Cargando..."}),Q.jsx("button",{onClick:T,disabled:t,children:"Ver más Pokémon"}),Q.jsx(Ow,{isOpen:g,onRequestClose:x,contentLabel:"Detalles del Pokémon",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"400px",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}},children:h&&Q.jsxs("div",{children:[Q.jsx("h2",{children:h.name}),Q.jsx("img",{src:h.sprites.front_default,alt:h.name}),Q.jsxs("p",{children:["Altura: ",h.height/10," m"]}),Q.jsxs("p",{children:["Peso: ",h.weight/10," kg"]}),Q.jsxs("p",{children:["Tipo: ",h.types.map(j=>j.type.name).join(", ")]}),Q.jsxs("p",{children:["Habilidades: ",h.abilities.map(j=>j.ability.name).join(", ")]}),Q.jsx("button",{onClick:x,children:"Cerrar"})]})})]})}function Q1(){return Q.jsxs("div",{className:"landing-page",children:[Q.jsxs("header",{className:"landing-header",children:[Q.jsx("h1",{children:"Bienvenido a la PokeApp"}),Q.jsx("p",{children:"En esta aplicación tendrás todo acerca de Pokémon"})]}),Q.jsxs("main",{className:"landing-main",children:[Q.jsxs("section",{className:"landing-section",children:[Q.jsx("h2",{children:"Características"}),Q.jsxs("ul",{children:[Q.jsx("li",{children:"Consulta información detallada de cada Pokémon"}),Q.jsx("li",{children:"Juega y adivina el nombre de los Pokémon"}),Q.jsx("li",{children:"Guarda tus puntuaciones y compite con otros usuarios"})]})]}),Q.jsxs("section",{className:"landing-section",children:[Q.jsx("h2",{children:"Comienza ahora"}),Q.jsx("p",{children:"Inicia sesión o regístrate para empezar a explorar el mundo de Pokémon."}),Q.jsxs("div",{className:"landing-buttons",children:[Q.jsx(Eo,{to:"/login",className:"landing-button",children:"Iniciar Sesión"}),Q.jsx(Eo,{to:"/re",className:"landing-button",children:"Registrarse"})]})]})]})]})}function Y1(){return Q.jsxs("div",{children:[Q.jsx("h1",{children:"404 - Página no encontrada"}),Q.jsx("p",{children:"Lo sentimos, la página que estás buscando no existe."}),Q.jsx(Eo,{to:"/",children:"Volver al Inicio"})]})}function X1(){const[r,e]=Ze.useState(null),[t,s]=Ze.useState(""),[o,l]=Ze.useState(""),[h,d]=Ze.useState(3),[g,v]=Ze.useState(!0),[E,T]=Ze.useState([]),[C,x]=Ze.useState(0),[j,H]=Ze.useState(null);Ze.useEffect(()=>{const ce=m_(ja,N=>{H(N)});return()=>ce()},[]),Ze.useEffect(()=>{$(),Ee()},[]);const $=async()=>{const ce=Math.floor(Math.random()*1027)+1;try{const S=await(await fetch(`https://pokeapi.co/api/v2/pokemon/${ce}`)).json();e({name:S.name,hint:`Tipo: ${S.types.map(R=>R.type.name).join(", ")}, 
               Habilidades: ${S.abilities.map(R=>R.ability.name).join(", ")}, 
               Altura: ${S.height/10} m, 
               Peso: ${S.weight/10} kg`,image:S.sprites.front_default}),l(""),s(""),d(3)}catch(N){console.error("Error obteniendo Pokémon:",N)}},le=ce=>s(ce.target.value.toLowerCase()),pe=ce=>{if(ce.preventDefault(),t===r.name){l("¡Correcto! Eres una máquina");const N=C+1;x(N),$()}else{const N=h-1;d(N),N>0?l(`Incorrecto. Te quedan ${N} intentos.`):(l(`Oh! Me temo que tienes que ver más la serie. El Pokémon era ${r.name}.`),d(3),$())}s("")},ge=async ce=>{if(!j){console.error("No hay usuario autenticado.");return}try{await ck(Zy(dv,"puntuacion"),{user:j.displayName||j.email,score:ce}),Ee()}catch(N){console.error("Error al guardar la puntuación:",N)}},Ee=async()=>{try{const ce=ek(Zy(dv,"puntuacion"),tk("score","desc"),nk(3)),S=(await uk(ce)).docs.map(R=>R.data());T(S)}catch(ce){console.error("Error al obtener puntuaciones:",ce)}},Me=async()=>{C>0&&(await ge(C),x(0)),$()};return r?Q.jsx("div",{className:`modal ${g?"show":""}`,children:Q.jsxs("div",{className:"modal-content",children:[Q.jsx("h2",{children:"¿Qué Pokémon es?"}),Q.jsxs("p",{children:["Pista: ",r.hint]}),Q.jsx("img",{src:r.image,alt:"Imagen del Pokémon",style:{width:"200px",height:"200px"}}),Q.jsxs("form",{onSubmit:pe,children:[Q.jsx("input",{type:"text",placeholder:"Adivina el nombre del Pokémon",value:t,onChange:le,required:!0,style:{margin:"10px",padding:"5px"}}),Q.jsx("button",{type:"submit",style:{padding:"5px 10px"},children:"Adivinar"})]}),Q.jsx("button",{onClick:Me,style:{padding:"5px 10px",marginTop:"10px"},children:"Saltar Pokémon"}),Q.jsx("p",{children:o}),Q.jsxs("h3",{children:["Tu puntuación: ",C]}),Q.jsx("h3",{children:"Ranking de puntuaciones"}),Q.jsx("ul",{children:E.map((ce,N)=>Q.jsxs("li",{children:[ce.user,": ",ce.score]},N))})]})}):Q.jsx("p",{children:"Cargando..."})}const J1="/assets/Logo-C4Byou3h.png";function Z1({user:r,handleSignOut:e}){const t=_c(),s=()=>{t("/login")};return Q.jsxs("header",{className:"navbar",children:[Q.jsx("img",{src:J1,alt:"Pokémon Logo"}),Q.jsxs("nav",{children:[Q.jsx(Eo,{to:"/",children:"Inicio"}),Q.jsx(Eo,{to:"/pokemon",children:"Pokémon"}),Q.jsx(Eo,{to:"/jugar",children:"Jugar"})]}),r?Q.jsxs("div",{children:[Q.jsxs("p",{children:["Bienvenido, ",r.email]}),Q.jsx("button",{onClick:e,children:"Cerrar sesión"})]}):Q.jsx("button",{onClick:s,children:"Iniciar sesión o registrarse"})]})}function eN(){const{idPokemon:r}=LT(),[e,t]=Ze.useState(null);return Ze.useEffect(()=>{fetch(`https://pokeapi.co/api/v2/pokemon/${r}`).then(s=>s.json()).then(s=>t(s)).catch(s=>console.error("Error fetching Pokémon details:",s))},[r]),e?Q.jsxs("div",{children:[Q.jsx("h2",{children:e.name}),Q.jsx("img",{src:e.sprites.front_default,alt:e.name}),Q.jsxs("p",{children:["Altura: ",e.height/10," m"]}),Q.jsxs("p",{children:["Peso: ",e.weight/10," kg"]}),Q.jsxs("p",{children:["Tipo: ",e.types.map(s=>s.type.name).join(", ")]}),Q.jsxs("p",{children:["Habilidades: ",e.abilities.map(s=>s.ability.name).join(", ")]})]}):Q.jsx("p",{children:"Cargando..."})}function tN(){const[r,e]=Ze.useState(null);return Ze.useEffect(()=>{const t=Ac(),s=m_(t,o=>{e(o)});return()=>s()},[]),Q.jsx(MT,{children:Q.jsx(nN,{user:r})})}function nN({user:r}){const e=_c(),t=()=>{const s=Ac();OS(s).then(()=>{console.log("User signed out"),e("/")}).catch(o=>{console.error("Error signing out:",o)})};return Q.jsxs(Q.Fragment,{children:[Q.jsx(Z1,{user:r,handleSignOut:t}),Q.jsxs(FT,{children:[Q.jsx(po,{path:"/",element:Q.jsx(Q1,{})}),Q.jsx(po,{path:"/login",element:Q.jsx(D1,{})}),Q.jsx(po,{path:"/pokemon",element:Q.jsx(fv,{user:r,children:Q.jsx(G1,{})})}),Q.jsx(po,{path:"/jugar",element:Q.jsx(fv,{user:r,children:Q.jsx(X1,{})})}),Q.jsx(po,{path:"/detalle/:idPokemon",element:Q.jsx(eN,{})}),Q.jsx(po,{path:"*",element:Q.jsx(Y1,{})})]})]})}GT.createRoot(document.getElementById("root")).render(Q.jsx(Ze.StrictMode,{children:Q.jsx(tN,{})}));
