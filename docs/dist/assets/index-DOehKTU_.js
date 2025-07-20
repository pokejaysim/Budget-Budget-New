(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Zh={exports:{}},Pa={},ed={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function g0(){if(qm)return Re;qm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function P(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Y={};function W(V,q,B){this.props=V,this.context=q,this.refs=Y,this.updater=B||j}W.prototype.isReactComponent={},W.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},W.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ge(){}ge.prototype=W.prototype;function de(V,q,B){this.props=V,this.context=q,this.refs=Y,this.updater=B||j}var me=de.prototype=new ge;me.constructor=de,G(me,W.prototype),me.isPureReactComponent=!0;var Ie=Array.isArray,$e=Object.prototype.hasOwnProperty,Se={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,q,B){var Z,Ee={},Ce=null,De=null;if(q!=null)for(Z in q.ref!==void 0&&(De=q.ref),q.key!==void 0&&(Ce=""+q.key),q)$e.call(q,Z)&&!N.hasOwnProperty(Z)&&(Ee[Z]=q[Z]);var Pe=arguments.length-2;if(Pe===1)Ee.children=B;else if(1<Pe){for(var Be=Array(Pe),Me=0;Me<Pe;Me++)Be[Me]=arguments[Me+2];Ee.children=Be}if(V&&V.defaultProps)for(Z in Pe=V.defaultProps,Pe)Ee[Z]===void 0&&(Ee[Z]=Pe[Z]);return{$$typeof:r,type:V,key:Ce,ref:De,props:Ee,_owner:Se.current}}function C(V,q){return{$$typeof:r,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function D(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(B){return q[B]})}var O=/\/+/g;function S(V,q){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):q.toString(36)}function Ze(V,q,B,Z,Ee){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var De=!1;if(V===null)De=!0;else switch(Ce){case"string":case"number":De=!0;break;case"object":switch(V.$$typeof){case r:case e:De=!0}}if(De)return De=V,Ee=Ee(De),V=Z===""?"."+S(De,0):Z,Ie(Ee)?(B="",V!=null&&(B=V.replace(O,"$&/")+"/"),Ze(Ee,q,B,"",function(Me){return Me})):Ee!=null&&(k(Ee)&&(Ee=C(Ee,B+(!Ee.key||De&&De.key===Ee.key?"":(""+Ee.key).replace(O,"$&/")+"/")+V)),q.push(Ee)),1;if(De=0,Z=Z===""?".":Z+":",Ie(V))for(var Pe=0;Pe<V.length;Pe++){Ce=V[Pe];var Be=Z+S(Ce,Pe);De+=Ze(Ce,q,B,Be,Ee)}else if(Be=P(V),typeof Be=="function")for(V=Be.call(V),Pe=0;!(Ce=V.next()).done;)Ce=Ce.value,Be=Z+S(Ce,Pe++),De+=Ze(Ce,q,B,Be,Ee);else if(Ce==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return De}function vt(V,q,B){if(V==null)return V;var Z=[],Ee=0;return Ze(V,Z,"","",function(Ce){return q.call(B,Ce,Ee++)}),Z}function Et(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(B){(V._status===0||V._status===-1)&&(V._status=1,V._result=B)},function(B){(V._status===0||V._status===-1)&&(V._status=2,V._result=B)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},te={transition:null},ue={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:te,ReactCurrentOwner:Se};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:vt,forEach:function(V,q,B){vt(V,function(){q.apply(this,arguments)},B)},count:function(V){var q=0;return vt(V,function(){q++}),q},toArray:function(V){return vt(V,function(q){return q})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=W,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=de,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Re.act=ne,Re.cloneElement=function(V,q,B){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Z=G({},V.props),Ee=V.key,Ce=V.ref,De=V._owner;if(q!=null){if(q.ref!==void 0&&(Ce=q.ref,De=Se.current),q.key!==void 0&&(Ee=""+q.key),V.type&&V.type.defaultProps)var Pe=V.type.defaultProps;for(Be in q)$e.call(q,Be)&&!N.hasOwnProperty(Be)&&(Z[Be]=q[Be]===void 0&&Pe!==void 0?Pe[Be]:q[Be])}var Be=arguments.length-2;if(Be===1)Z.children=B;else if(1<Be){Pe=Array(Be);for(var Me=0;Me<Be;Me++)Pe[Me]=arguments[Me+2];Z.children=Pe}return{$$typeof:r,type:V.type,key:Ee,ref:Ce,props:Z,_owner:De}},Re.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Re.createElement=I,Re.createFactory=function(V){var q=I.bind(null,V);return q.type=V,q},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:m,render:V}},Re.isValidElement=k,Re.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Et}},Re.memo=function(V,q){return{$$typeof:_,type:V,compare:q===void 0?null:q}},Re.startTransition=function(V){var q=te.transition;te.transition={};try{V()}finally{te.transition=q}},Re.unstable_act=ne,Re.useCallback=function(V,q){return Ue.current.useCallback(V,q)},Re.useContext=function(V){return Ue.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Re.useEffect=function(V,q){return Ue.current.useEffect(V,q)},Re.useId=function(){return Ue.current.useId()},Re.useImperativeHandle=function(V,q,B){return Ue.current.useImperativeHandle(V,q,B)},Re.useInsertionEffect=function(V,q){return Ue.current.useInsertionEffect(V,q)},Re.useLayoutEffect=function(V,q){return Ue.current.useLayoutEffect(V,q)},Re.useMemo=function(V,q){return Ue.current.useMemo(V,q)},Re.useReducer=function(V,q,B){return Ue.current.useReducer(V,q,B)},Re.useRef=function(V){return Ue.current.useRef(V)},Re.useState=function(V){return Ue.current.useState(V)},Re.useSyncExternalStore=function(V,q,B){return Ue.current.useSyncExternalStore(V,q,B)},Re.useTransition=function(){return Ue.current.useTransition()},Re.version="18.3.1",Re}var Hm;function zd(){return Hm||(Hm=1,ed.exports=g0()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function y0(){if(Wm)return Pa;Wm=1;var r=zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,A={},P=null,j=null;_!==void 0&&(P=""+_),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(A[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:m,key:P,ref:j,props:A,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=h,Pa.jsxs=h,Pa}var Gm;function _0(){return Gm||(Gm=1,Zh.exports=y0()),Zh.exports}var z=_0(),Fe=zd(),Cu={},td={exports:{}},en={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function v0(){return Km||(Km=1,function(r){function e(te,ue){var ne=te.length;te.push(ue);e:for(;0<ne;){var V=ne-1>>>1,q=te[V];if(0<o(q,ue))te[V]=ue,te[ne]=q,ne=V;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var ue=te[0],ne=te.pop();if(ne!==ue){te[0]=ne;e:for(var V=0,q=te.length,B=q>>>1;V<B;){var Z=2*(V+1)-1,Ee=te[Z],Ce=Z+1,De=te[Ce];if(0>o(Ee,ne))Ce<q&&0>o(De,Ee)?(te[V]=De,te[Ce]=ne,V=Ce):(te[V]=Ee,te[Z]=ne,V=Z);else if(Ce<q&&0>o(De,ne))te[V]=De,te[Ce]=ne,V=Ce;else break e}}return ue}function o(te,ue){var ne=te.sortIndex-ue.sortIndex;return ne!==0?ne:te.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,A=null,P=3,j=!1,G=!1,Y=!1,W=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(te){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=te)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function Ie(te){if(Y=!1,me(te),!G)if(t(g)!==null)G=!0,Et($e);else{var ue=t(_);ue!==null&&Ue(Ie,ue.startTime-te)}}function $e(te,ue){G=!1,Y&&(Y=!1,ge(I),I=-1),j=!0;var ne=P;try{for(me(ue),A=t(g);A!==null&&(!(A.expirationTime>ue)||te&&!D());){var V=A.callback;if(typeof V=="function"){A.callback=null,P=A.priorityLevel;var q=V(A.expirationTime<=ue);ue=r.unstable_now(),typeof q=="function"?A.callback=q:A===t(g)&&s(g),me(ue)}else s(g);A=t(g)}if(A!==null)var B=!0;else{var Z=t(_);Z!==null&&Ue(Ie,Z.startTime-ue),B=!1}return B}finally{A=null,P=ne,j=!1}}var Se=!1,N=null,I=-1,C=5,k=-1;function D(){return!(r.unstable_now()-k<C)}function O(){if(N!==null){var te=r.unstable_now();k=te;var ue=!0;try{ue=N(!0,te)}finally{ue?S():(Se=!1,N=null)}}else Se=!1}var S;if(typeof de=="function")S=function(){de(O)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,vt=Ze.port2;Ze.port1.onmessage=O,S=function(){vt.postMessage(null)}}else S=function(){W(O,0)};function Et(te){N=te,Se||(Se=!0,S())}function Ue(te,ue){I=W(function(){te(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){G||j||(G=!0,Et($e))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(te){switch(P){case 1:case 2:case 3:var ue=3;break;default:ue=P}var ne=P;P=ue;try{return te()}finally{P=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,ue){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ne=P;P=te;try{return ue()}finally{P=ne}},r.unstable_scheduleCallback=function(te,ue,ne){var V=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,te){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ne+q,te={id:w++,callback:ue,priorityLevel:te,startTime:ne,expirationTime:q,sortIndex:-1},ne>V?(te.sortIndex=ne,e(_,te),t(g)===null&&te===t(_)&&(Y?(ge(I),I=-1):Y=!0,Ue(Ie,ne-V))):(te.sortIndex=q,e(g,te),G||j||(G=!0,Et($e))),te},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(te){var ue=P;return function(){var ne=P;P=ue;try{return te.apply(this,arguments)}finally{P=ne}}}}(rd)),rd}var Qm;function E0(){return Qm||(Qm=1,nd.exports=v0()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function w0(){if(Xm)return en;Xm=1;var r=zd(),e=E0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function P(n){return g.call(A,n)?!0:g.call(w,n)?!1:_.test(n)?A[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,a,c,d,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];W[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ge,de);W[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ge,de);W[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ge,de);W[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,i,a,c){var d=W.hasOwnProperty(i)?W[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(G(i,a,d,c)&&(a=null),c||d===null?P(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ie=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Se=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),te=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function q(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var B=!1;function Z(n,i){if(!n||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var R=`
`+d[v].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=v&&0<=T);break}}}finally{B=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ee(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Se:return"Portal";case C:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vt:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case Et:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function De(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Bt(n){n._valueTracker||(n._valueTracker=Me(n))}function Ci(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function $n(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ri(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ys(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Oo(n,i){i=i.checked,i!=null&&me(n,"checked",i,!1)}function bo(n,i){Oo(n,i);var a=Pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?_s(n,i.type,a):i.hasOwnProperty("defaultValue")&&_s(n,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function hl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function _s(n,i,a){(i!=="number"||$n(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var cr=Array.isArray;function hr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Lo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(cr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Pe(a)}}function Es(n,i){var a=Pe(i.value),c=Pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var dr,Fo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=dr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function br(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(n){ki.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Pi[i]=Pi[n]})});function Uo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Pi.hasOwnProperty(n)&&Pi[n]?(""+i).trim():i+"px"}function jo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Uo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var zo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(n,i){if(i){if(zo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function $o(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function ws(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ts=null,cn=null,qn=null;function Is(n){if(n=fa(n)){if(typeof Ts!="function")throw Error(t(280));var i=n.stateNode;i&&(i=zl(i),Ts(n.stateNode,n.type,i))}}function Hn(n){cn?qn?qn.push(n):qn=[n]:cn=n}function qo(){if(cn){var n=cn,i=qn;if(qn=cn=null,Is(n),i)for(n=0;n<i.length;n++)Is(i[n])}}function xi(n,i){return n(i)}function Ho(){}var fr=!1;function Wo(n,i,a){if(fr)return n(i,a);fr=!0;try{return xi(n,i,a)}finally{fr=!1,(cn!==null||qn!==null)&&(Ho(),qo())}}function it(n,i){var a=n.stateNode;if(a===null)return null;var c=zl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ss=!1;if(m)try{var In={};Object.defineProperty(In,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Ss=!1}function Di(n,i,a,c,d,p,v,T,R){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(Q){this.onError(Q)}}var Vi=!1,As=null,Sn=!1,Go=null,Rc={onError:function(n){Vi=!0,As=n}};function Cs(n,i,a,c,d,p,v,T,R){Vi=!1,As=null,Di.apply(Rc,arguments)}function dl(n,i,a,c,d,p,v,T,R){if(Cs.apply(this,arguments),Vi){if(Vi){var F=As;Vi=!1,As=null}else throw Error(t(198));Sn||(Sn=!0,Go=F)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Oi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Cn(n){if(An(n)!==n)throw Error(t(188))}function fl(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Cn(d),n;if(p===c)return Cn(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=p;break}if(T===c){v=!0,c=d,a=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===a){v=!0,a=p,c=d;break}if(T===c){v=!0,c=p,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ko(n){return n=fl(n),n!==null?Rs(n):null}function Rs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Rs(n);if(i!==null)return i;n=n.sibling}return null}var Ps=e.unstable_scheduleCallback,Qo=e.unstable_cancelCallback,pl=e.unstable_shouldYield,Pc=e.unstable_requestPaint,He=e.unstable_now,ml=e.unstable_getCurrentPriorityLevel,bi=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Xo=e.unstable_LowPriority,gl=e.unstable_IdlePriority,Li=null,nn=null;function yl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Li,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:vl,Yo=Math.log,_l=Math.LN2;function vl(n){return n>>>=0,n===0?32:31-(Yo(n)/_l|0)|0}var ks=64,Ns=4194304;function Mr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Mr(T):(p&=v,p!==0&&(c=Mr(p)))}else v=a&~d,v!==0?c=Mr(v):p!==0&&(c=Mr(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-$t(i),d=1<<a,c|=n[a],i&=~d;return c}function kc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-$t(p),T=1<<v,R=d[v];R===-1?((T&a)===0||(T&c)!==0)&&(d[v]=kc(T,i)):R<=i&&(n.expiredLanes|=T),p&=~T}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fi(){var n=ks;return ks<<=1,(ks&4194240)===0&&(ks=64),n}function Fr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ur(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-$t(i),n[i]=a}function qe(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-$t(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function jr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-$t(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var xe=0;function zr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var El,xs,wl,Tl,Il,Jo=!1,Wn=[],Ct=null,Rn=null,Pn=null,Br=new Map,dn=new Map,Gn=[],Nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sl(n,i){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Br.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function Gt(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=fa(i),i!==null&&xs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function xc(n,i,a,c,d){switch(i){case"focusin":return Ct=Gt(Ct,n,i,a,c,d),!0;case"dragenter":return Rn=Gt(Rn,n,i,a,c,d),!0;case"mouseover":return Pn=Gt(Pn,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return Br.set(p,Gt(Br.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dn.set(p,Gt(dn.get(p)||null,n,i,a,c,d)),!0}return!1}function Al(n){var i=$i(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=Oi(a),i!==null){n.blockedOn=i,Il(n.priority,function(){wl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ds(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ni=c,a.target.dispatchEvent(c),Ni=null}else return i=fa(a),i!==null&&xs(i),n.blockedOn=a,!1;i.shift()}return!0}function Ui(n,i,a){mr(n)&&a.delete(i)}function Cl(){Jo=!1,Ct!==null&&mr(Ct)&&(Ct=null),Rn!==null&&mr(Rn)&&(Rn=null),Pn!==null&&mr(Pn)&&(Pn=null),Br.forEach(Ui),dn.forEach(Ui)}function kn(n,i){n.blockedOn===i&&(n.blockedOn=null,Jo||(Jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cl)))}function Nn(n){function i(d){return kn(d,n)}if(0<Wn.length){kn(Wn[0],n);for(var a=1;a<Wn.length;a++){var c=Wn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ct!==null&&kn(Ct,n),Rn!==null&&kn(Rn,n),Pn!==null&&kn(Pn,n),Br.forEach(i),dn.forEach(i),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Al(a),a.blockedOn===null&&Gn.shift()}var gr=Ie.ReactCurrentBatchConfig,$r=!0;function Ye(n,i,a,c){var d=xe,p=gr.transition;gr.transition=null;try{xe=1,Zo(n,i,a,c)}finally{xe=d,gr.transition=p}}function Dc(n,i,a,c){var d=xe,p=gr.transition;gr.transition=null;try{xe=4,Zo(n,i,a,c)}finally{xe=d,gr.transition=p}}function Zo(n,i,a,c){if($r){var d=Ds(n,i,a,c);if(d===null)$c(n,i,c,ji,a),Sl(n,c);else if(xc(d,n,i,a,c))c.stopPropagation();else if(Sl(n,c),i&4&&-1<Nc.indexOf(n)){for(;d!==null;){var p=fa(d);if(p!==null&&El(p),p=Ds(n,i,a,c),p===null&&$c(n,i,c,ji,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else $c(n,i,c,null,a)}}var ji=null;function Ds(n,i,a,c){if(ji=null,n=ws(c),n=$i(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Oi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ji=n,null}function ea(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ml()){case bi:return 1;case Lr:return 4;case hn:case Xo:return 16;case gl:return 536870912;default:return 16}default:return 16}}var sn=null,Vs=null,Kt=null;function ta(){if(Kt)return Kt;var n,i=Vs,a=i.length,c,d="value"in sn?sn.value:sn.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[p-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function Os(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function na(){return!1}function Rt(n){function i(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Kn:na,this.isPropagationStopped=na,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=Rt(xn),Qn=ne({},xn,{view:0,detail:0}),Vc=Rt(Qn),Ls,yr,qr,zi=ne({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qr&&(qr&&n.type==="mousemove"?(Ls=n.screenX-qr.screenX,yr=n.screenY-qr.screenY):yr=Ls=0,qr=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:yr}}),Ms=Rt(zi),ra=ne({},zi,{dataTransfer:0}),Rl=Rt(ra),Fs=ne({},Qn,{relatedTarget:0}),Us=Rt(Fs),Pl=ne({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),_r=Rt(Pl),kl=ne({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nl=Rt(kl),xl=ne({},xn,{data:0}),ia=Rt(xl),js={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Dl[n])?!!i[n]:!1}function Xn(){return Vl}var l=ne({},Qn,{key:function(n){if(n.key){var i=js[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Os(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(n){return n.type==="keypress"?Os(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Os(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Rt(l),y=ne({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Rt(y),b=ne({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),U=Rt(b),ee=ne({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=Rt(ee),mt=ne({},zi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Rt(mt),wt=[9,13,27,32],at=m&&"CompositionEvent"in window,fn=null;m&&"documentMode"in document&&(fn=document.documentMode);var on=m&&"TextEvent"in window&&!fn,Bi=m&&(!at||fn&&8<fn&&11>=fn),zs=" ",Ff=!1;function Uf(n,i){switch(n){case"keyup":return wt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function fE(n,i){switch(n){case"compositionend":return jf(i);case"keypress":return i.which!==32?null:(Ff=!0,zs);case"textInput":return n=i.data,n===zs&&Ff?null:n;default:return null}}function pE(n,i){if(Bs)return n==="compositionend"||!at&&Uf(n,i)?(n=ta(),Kt=Vs=sn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bi&&i.locale!=="ko"?null:i.data;default:return null}}var mE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!mE[n.type]:i==="textarea"}function Bf(n,i,a,c){Hn(c),i=Fl(i,"onChange"),0<i.length&&(a=new bs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var sa=null,oa=null;function gE(n){op(n,0)}function Ol(n){var i=Gs(n);if(Ci(i))return n}function yE(n,i){if(n==="change")return i}var $f=!1;if(m){var Oc;if(m){var bc="oninput"in document;if(!bc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),bc=typeof qf.oninput=="function"}Oc=bc}else Oc=!1;$f=Oc&&(!document.documentMode||9<document.documentMode)}function Hf(){sa&&(sa.detachEvent("onpropertychange",Wf),oa=sa=null)}function Wf(n){if(n.propertyName==="value"&&Ol(oa)){var i=[];Bf(i,oa,n,ws(n)),Wo(gE,i)}}function _E(n,i,a){n==="focusin"?(Hf(),sa=i,oa=a,sa.attachEvent("onpropertychange",Wf)):n==="focusout"&&Hf()}function vE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ol(oa)}function EE(n,i){if(n==="click")return Ol(i)}function wE(n,i){if(n==="input"||n==="change")return Ol(i)}function TE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Dn=typeof Object.is=="function"?Object.is:TE;function aa(n,i){if(Dn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Dn(n[d],i[d]))return!1}return!0}function Gf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kf(n,i){var a=Gf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gf(a)}}function Qf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Qf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Xf(){for(var n=window,i=$n();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=$n(n.document)}return i}function Lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function IE(n){var i=Xf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Qf(a.ownerDocument.documentElement,a)){if(c!==null&&Lc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Kf(a,p);var v=Kf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var SE=m&&"documentMode"in document&&11>=document.documentMode,$s=null,Mc=null,la=null,Fc=!1;function Yf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||$s==null||$s!==$n(c)||(c=$s,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Fl(Mc,"onSelect"),0<c.length&&(i=new bs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=$s)))}function bl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Uc={},Jf={};m&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ll(n){if(Uc[n])return Uc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jf)return Uc[n]=i[a];return n}var Zf=Ll("animationend"),ep=Ll("animationiteration"),tp=Ll("animationstart"),np=Ll("transitionend"),rp=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,i){rp.set(n,i),u(i,[n])}for(var jc=0;jc<ip.length;jc++){var zc=ip[jc],AE=zc.toLowerCase(),CE=zc[0].toUpperCase()+zc.slice(1);Hr(AE,"on"+CE)}Hr(Zf,"onAnimationEnd"),Hr(ep,"onAnimationIteration"),Hr(tp,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(np,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function sp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,dl(c,i,void 0,n),n.currentTarget=null}function op(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],R=T.instance,F=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;sp(d,T,F),p=R}else for(v=0;v<c.length;v++){if(T=c[v],R=T.instance,F=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;sp(d,T,F),p=R}}}if(Sn)throw n=Go,Sn=!1,Go=null,n}function Ke(n,i){var a=i[Qc];a===void 0&&(a=i[Qc]=new Set);var c=n+"__bubble";a.has(c)||(ap(i,n,2,!1),a.add(c))}function Bc(n,i,a){var c=0;i&&(c|=4),ap(a,n,c,i)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(RE.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ml]||(i[Ml]=!0,Bc("selectionchange",!1,i))}}function ap(n,i,a,c){switch(ea(i)){case 1:var d=Ye;break;case 4:d=Dc;break;default:d=Zo}a=d.bind(null,i,a,n),d=void 0,!Ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function $c(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;v=v.return}for(;T!==null;){if(v=$i(T),v===null)return;if(R=v.tag,R===5||R===6){c=p=v;continue e}T=T.parentNode}}c=c.return}Wo(function(){var F=p,Q=ws(a),X=[];e:{var K=rp.get(n);if(K!==void 0){var re=bs,ae=n;switch(n){case"keypress":if(Os(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":ae="focus",re=Us;break;case"focusout":ae="blur",re=Us;break;case"beforeblur":case"afterblur":re=Us;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=U;break;case Zf:case ep:case tp:re=_r;break;case np:re=ze;break;case"scroll":re=Vc;break;case"wheel":re=Ve;break;case"copy":case"cut":case"paste":re=Nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var le=(i&4)!==0,st=!le&&n==="scroll",L=le?K!==null?K+"Capture":null:K;le=[];for(var x=F,M;x!==null;){M=x;var J=M.stateNode;if(M.tag===5&&J!==null&&(M=J,L!==null&&(J=it(x,L),J!=null&&le.push(ha(x,J,M)))),st)break;x=x.return}0<le.length&&(K=new re(K,ae,null,a,Q),X.push({event:K,listeners:le}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",K&&a!==Ni&&(ae=a.relatedTarget||a.fromElement)&&($i(ae)||ae[vr]))break e;if((re||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=F,ae=ae?$i(ae):null,ae!==null&&(st=An(ae),ae!==st||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=F),re!==ae)){if(le=Ms,J="onMouseLeave",L="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,J="onPointerLeave",L="onPointerEnter",x="pointer"),st=re==null?K:Gs(re),M=ae==null?K:Gs(ae),K=new le(J,x+"leave",re,a,Q),K.target=st,K.relatedTarget=M,J=null,$i(Q)===F&&(le=new le(L,x+"enter",ae,a,Q),le.target=M,le.relatedTarget=st,J=le),st=J,re&&ae)t:{for(le=re,L=ae,x=0,M=le;M;M=Hs(M))x++;for(M=0,J=L;J;J=Hs(J))M++;for(;0<x-M;)le=Hs(le),x--;for(;0<M-x;)L=Hs(L),M--;for(;x--;){if(le===L||L!==null&&le===L.alternate)break t;le=Hs(le),L=Hs(L)}le=null}else le=null;re!==null&&lp(X,K,re,le,!1),ae!==null&&st!==null&&lp(X,st,ae,le,!0)}}e:{if(K=F?Gs(F):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var ce=yE;else if(zf(K))if($f)ce=wE;else{ce=vE;var fe=_E}else(re=K.nodeName)&&re.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=EE);if(ce&&(ce=ce(n,F))){Bf(X,ce,a,Q);break e}fe&&fe(n,K,F),n==="focusout"&&(fe=K._wrapperState)&&fe.controlled&&K.type==="number"&&_s(K,"number",K.value)}switch(fe=F?Gs(F):window,n){case"focusin":(zf(fe)||fe.contentEditable==="true")&&($s=fe,Mc=F,la=null);break;case"focusout":la=Mc=$s=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Yf(X,a,Q);break;case"selectionchange":if(SE)break;case"keydown":case"keyup":Yf(X,a,Q)}var pe;if(at)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Bs?Uf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Bi&&a.locale!=="ko"&&(Bs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Bs&&(pe=ta()):(sn=Q,Vs="value"in sn?sn.value:sn.textContent,Bs=!0)),fe=Fl(F,ve),0<fe.length&&(ve=new ia(ve,n,null,a,Q),X.push({event:ve,listeners:fe}),pe?ve.data=pe:(pe=jf(a),pe!==null&&(ve.data=pe)))),(pe=on?fE(n,a):pE(n,a))&&(F=Fl(F,"onBeforeInput"),0<F.length&&(Q=new ia("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:F}),Q.data=pe))}op(X,i)})}function ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=it(n,a),p!=null&&c.unshift(ha(n,p,d)),p=it(n,i),p!=null&&c.push(ha(n,p,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lp(n,i,a,c,d){for(var p=i._reactName,v=[];a!==null&&a!==c;){var T=a,R=T.alternate,F=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&F!==null&&(T=F,d?(R=it(a,p),R!=null&&v.unshift(ha(a,R,T))):d||(R=it(a,p),R!=null&&v.push(ha(a,R,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var PE=/\r\n?/g,kE=/\u0000|\uFFFD/g;function up(n){return(typeof n=="string"?n:""+n).replace(PE,`
`).replace(kE,"")}function Ul(n,i,a){if(i=up(i),up(n)!==i&&a)throw Error(t(425))}function jl(){}var qc=null,Hc=null;function Wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,NE=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,xE=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(n){return cp.resolve(null).then(n).catch(DE)}:Gc;function DE(n){setTimeout(function(){throw n})}function Kc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Nn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Nn(i)}function Wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function hp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ws,da="__reactProps$"+Ws,vr="__reactContainer$"+Ws,Qc="__reactEvents$"+Ws,VE="__reactListeners$"+Ws,OE="__reactHandles$"+Ws;function $i(n){var i=n[Yn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[vr]||a[Yn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=hp(n);n!==null;){if(a=n[Yn])return a;n=hp(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[Yn]||n[vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zl(n){return n[da]||null}var Xc=[],Ks=-1;function Gr(n){return{current:n}}function Qe(n){0>Ks||(n.current=Xc[Ks],Xc[Ks]=null,Ks--)}function We(n,i){Ks++,Xc[Ks]=n.current,n.current=i}var Kr={},Vt=Gr(Kr),Qt=Gr(!1),qi=Kr;function Qs(n,i){var a=n.type.contextTypes;if(!a)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(n){return n=n.childContextTypes,n!=null}function Bl(){Qe(Qt),Qe(Vt)}function dp(n,i,a){if(Vt.current!==Kr)throw Error(t(168));We(Vt,i),We(Qt,a)}function fp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,De(n)||"Unknown",d));return ne({},a,c)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,qi=Vt.current,We(Vt,n),We(Qt,Qt.current),!0}function pp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=fp(n,i,qi),c.__reactInternalMemoizedMergedChildContext=n,Qe(Qt),Qe(Vt),We(Vt,n)):Qe(Qt),We(Qt,a)}var Er=null,ql=!1,Yc=!1;function mp(n){Er===null?Er=[n]:Er.push(n)}function bE(n){ql=!0,mp(n)}function Qr(){if(!Yc&&Er!==null){Yc=!0;var n=0,i=xe;try{var a=Er;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Er=null,ql=!1}catch(d){throw Er!==null&&(Er=Er.slice(n+1)),Ps(bi,Qr),d}finally{xe=i,Yc=!1}}return null}var Xs=[],Ys=0,Hl=null,Wl=0,pn=[],mn=0,Hi=null,wr=1,Tr="";function Wi(n,i){Xs[Ys++]=Wl,Xs[Ys++]=Hl,Hl=n,Wl=i}function gp(n,i,a){pn[mn++]=wr,pn[mn++]=Tr,pn[mn++]=Hi,Hi=n;var c=wr;n=Tr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var p=32-$t(i)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,wr=1<<32-$t(i)+d|a<<d|c,Tr=p+n}else wr=1<<p|a<<d|c,Tr=n}function Jc(n){n.return!==null&&(Wi(n,1),gp(n,1,0))}function Zc(n){for(;n===Hl;)Hl=Xs[--Ys],Xs[Ys]=null,Wl=Xs[--Ys],Xs[Ys]=null;for(;n===Hi;)Hi=pn[--mn],pn[mn]=null,Tr=pn[--mn],pn[mn]=null,wr=pn[--mn],pn[mn]=null}var an=null,ln=null,Je=!1,Vn=null;function yp(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function _p(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,an=n,ln=Wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,an=n,ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hi!==null?{id:wr,overflow:Tr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function th(n){if(Je){var i=ln;if(i){var a=i;if(!_p(n,i)){if(eh(n))throw Error(t(418));i=Wr(a.nextSibling);var c=an;i&&_p(n,i)?yp(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Gl(n){if(n!==an)return!1;if(!Je)return vp(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Wc(n.type,n.memoizedProps)),i&&(i=ln)){if(eh(n))throw Ep(),Error(t(418));for(;i;)yp(n,i),i=Wr(i.nextSibling)}if(vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ln=Wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ln=null}}else ln=an?Wr(n.stateNode.nextSibling):null;return!0}function Ep(){for(var n=ln;n;)n=Wr(n.nextSibling)}function Js(){ln=an=null,Je=!1}function nh(n){Vn===null?Vn=[n]:Vn.push(n)}var LE=Ie.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Kl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function wp(n){var i=n._init;return i(n._payload)}function Tp(n){function i(L,x){if(n){var M=L.deletions;M===null?(L.deletions=[x],L.flags|=16):M.push(x)}}function a(L,x){if(!n)return null;for(;x!==null;)i(L,x),x=x.sibling;return null}function c(L,x){for(L=new Map;x!==null;)x.key!==null?L.set(x.key,x):L.set(x.index,x),x=x.sibling;return L}function d(L,x){return L=ri(L,x),L.index=0,L.sibling=null,L}function p(L,x,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<x?(L.flags|=2,x):M):(L.flags|=2,x)):(L.flags|=1048576,x)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,x,M,J){return x===null||x.tag!==6?(x=Gh(M,L.mode,J),x.return=L,x):(x=d(x,M),x.return=L,x)}function R(L,x,M,J){var ce=M.type;return ce===N?Q(L,x,M.props.children,J,M.key):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Et&&wp(ce)===x.type)?(J=d(x,M.props),J.ref=pa(L,x,M),J.return=L,J):(J=_u(M.type,M.key,M.props,null,L.mode,J),J.ref=pa(L,x,M),J.return=L,J)}function F(L,x,M,J){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Kh(M,L.mode,J),x.return=L,x):(x=d(x,M.children||[]),x.return=L,x)}function Q(L,x,M,J,ce){return x===null||x.tag!==7?(x=es(M,L.mode,J,ce),x.return=L,x):(x=d(x,M),x.return=L,x)}function X(L,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Gh(""+x,L.mode,M),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $e:return M=_u(x.type,x.key,x.props,null,L.mode,M),M.ref=pa(L,null,x),M.return=L,M;case Se:return x=Kh(x,L.mode,M),x.return=L,x;case Et:var J=x._init;return X(L,J(x._payload),M)}if(cr(x)||ue(x))return x=es(x,L.mode,M,null),x.return=L,x;Kl(L,x)}return null}function K(L,x,M,J){var ce=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return ce!==null?null:T(L,x,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case $e:return M.key===ce?R(L,x,M,J):null;case Se:return M.key===ce?F(L,x,M,J):null;case Et:return ce=M._init,K(L,x,ce(M._payload),J)}if(cr(M)||ue(M))return ce!==null?null:Q(L,x,M,J,null);Kl(L,M)}return null}function re(L,x,M,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(M)||null,T(x,L,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case $e:return L=L.get(J.key===null?M:J.key)||null,R(x,L,J,ce);case Se:return L=L.get(J.key===null?M:J.key)||null,F(x,L,J,ce);case Et:var fe=J._init;return re(L,x,M,fe(J._payload),ce)}if(cr(J)||ue(J))return L=L.get(M)||null,Q(x,L,J,ce,null);Kl(x,J)}return null}function ae(L,x,M,J){for(var ce=null,fe=null,pe=x,ve=x=0,St=null;pe!==null&&ve<M.length;ve++){pe.index>ve?(St=pe,pe=null):St=pe.sibling;var Le=K(L,pe,M[ve],J);if(Le===null){pe===null&&(pe=St);break}n&&pe&&Le.alternate===null&&i(L,pe),x=p(Le,x,ve),fe===null?ce=Le:fe.sibling=Le,fe=Le,pe=St}if(ve===M.length)return a(L,pe),Je&&Wi(L,ve),ce;if(pe===null){for(;ve<M.length;ve++)pe=X(L,M[ve],J),pe!==null&&(x=p(pe,x,ve),fe===null?ce=pe:fe.sibling=pe,fe=pe);return Je&&Wi(L,ve),ce}for(pe=c(L,pe);ve<M.length;ve++)St=re(pe,L,ve,M[ve],J),St!==null&&(n&&St.alternate!==null&&pe.delete(St.key===null?ve:St.key),x=p(St,x,ve),fe===null?ce=St:fe.sibling=St,fe=St);return n&&pe.forEach(function(ii){return i(L,ii)}),Je&&Wi(L,ve),ce}function le(L,x,M,J){var ce=ue(M);if(typeof ce!="function")throw Error(t(150));if(M=ce.call(M),M==null)throw Error(t(151));for(var fe=ce=null,pe=x,ve=x=0,St=null,Le=M.next();pe!==null&&!Le.done;ve++,Le=M.next()){pe.index>ve?(St=pe,pe=null):St=pe.sibling;var ii=K(L,pe,Le.value,J);if(ii===null){pe===null&&(pe=St);break}n&&pe&&ii.alternate===null&&i(L,pe),x=p(ii,x,ve),fe===null?ce=ii:fe.sibling=ii,fe=ii,pe=St}if(Le.done)return a(L,pe),Je&&Wi(L,ve),ce;if(pe===null){for(;!Le.done;ve++,Le=M.next())Le=X(L,Le.value,J),Le!==null&&(x=p(Le,x,ve),fe===null?ce=Le:fe.sibling=Le,fe=Le);return Je&&Wi(L,ve),ce}for(pe=c(L,pe);!Le.done;ve++,Le=M.next())Le=re(pe,L,ve,Le.value,J),Le!==null&&(n&&Le.alternate!==null&&pe.delete(Le.key===null?ve:Le.key),x=p(Le,x,ve),fe===null?ce=Le:fe.sibling=Le,fe=Le);return n&&pe.forEach(function(m0){return i(L,m0)}),Je&&Wi(L,ve),ce}function st(L,x,M,J){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case $e:e:{for(var ce=M.key,fe=x;fe!==null;){if(fe.key===ce){if(ce=M.type,ce===N){if(fe.tag===7){a(L,fe.sibling),x=d(fe,M.props.children),x.return=L,L=x;break e}}else if(fe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Et&&wp(ce)===fe.type){a(L,fe.sibling),x=d(fe,M.props),x.ref=pa(L,fe,M),x.return=L,L=x;break e}a(L,fe);break}else i(L,fe);fe=fe.sibling}M.type===N?(x=es(M.props.children,L.mode,J,M.key),x.return=L,L=x):(J=_u(M.type,M.key,M.props,null,L.mode,J),J.ref=pa(L,x,M),J.return=L,L=J)}return v(L);case Se:e:{for(fe=M.key;x!==null;){if(x.key===fe)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){a(L,x.sibling),x=d(x,M.children||[]),x.return=L,L=x;break e}else{a(L,x);break}else i(L,x);x=x.sibling}x=Kh(M,L.mode,J),x.return=L,L=x}return v(L);case Et:return fe=M._init,st(L,x,fe(M._payload),J)}if(cr(M))return ae(L,x,M,J);if(ue(M))return le(L,x,M,J);Kl(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(a(L,x.sibling),x=d(x,M),x.return=L,L=x):(a(L,x),x=Gh(M,L.mode,J),x.return=L,L=x),v(L)):a(L,x)}return st}var Zs=Tp(!0),Ip=Tp(!1),Ql=Gr(null),Xl=null,eo=null,rh=null;function ih(){rh=eo=Xl=null}function sh(n){var i=Ql.current;Qe(Ql),n._currentValue=i}function oh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function to(n,i){Xl=n,rh=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(rh!==n)if(n={context:n,memoizedValue:i,next:null},eo===null){if(Xl===null)throw Error(t(308));eo=n,Xl.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return i}var Gi=null;function ah(n){Gi===null?Gi=[n]:Gi.push(n)}function Sp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,ah(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ir(n,c)}function Ir(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Xr=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Sr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ir(n,a)}return d=c.interleaved,d===null?(i.next=i,ah(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ir(n,a)}function Yl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,jr(n,a)}}function Cp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jl(n,i,a,c){var d=n.updateQueue;Xr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,F=R.next;R.next=null,v===null?p=F:v.next=F,v=R;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=F:T.next=F,Q.lastBaseUpdate=R))}if(p!==null){var X=d.baseState;v=0,Q=F=R=null,T=p;do{var K=T.lane,re=T.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ae=n,le=T;switch(K=i,re=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){X=ae.call(re,X,K);break e}X=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,K=typeof ae=="function"?ae.call(re,X,K):ae,K==null)break e;X=ne({},X,K);break e;case 2:Xr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[T]:K.push(T))}else re={eventTime:re,lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(F=Q=re,R=X):Q=Q.next=re,v|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;K=T,T=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(R=X),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Xi|=v,n.lanes=v,n.memoizedState=X}}function Rp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Jn=Gr(ma),ga=Gr(ma),ya=Gr(ma);function Ki(n){if(n===ma)throw Error(t(174));return n}function uh(n,i){switch(We(ya,i),We(ga,n),We(Jn,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pt(i,n)}Qe(Jn),We(Jn,i)}function no(){Qe(Jn),Qe(ga),Qe(ya)}function Pp(n){Ki(ya.current);var i=Ki(Jn.current),a=pt(i,n.type);i!==a&&(We(ga,n),We(Jn,a))}function ch(n){ga.current===n&&(Qe(Jn),Qe(ga))}var et=Gr(0);function Zl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var hh=[];function dh(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var eu=Ie.ReactCurrentDispatcher,fh=Ie.ReactCurrentBatchConfig,Qi=0,tt=null,gt=null,Tt=null,tu=!1,_a=!1,va=0,ME=0;function Ot(){throw Error(t(321))}function ph(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Dn(n[a],i[a]))return!1;return!0}function mh(n,i,a,c,d,p){if(Qi=p,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,eu.current=n===null||n.memoizedState===null?zE:BE,n=a(c,d),_a){p=0;do{if(_a=!1,va=0,25<=p)throw Error(t(301));p+=1,Tt=gt=null,i.updateQueue=null,eu.current=$E,n=a(c,d)}while(_a)}if(eu.current=iu,i=gt!==null&&gt.next!==null,Qi=0,Tt=gt=tt=null,tu=!1,i)throw Error(t(300));return n}function gh(){var n=va!==0;return va=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function yn(){if(gt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var i=Tt===null?tt.memoizedState:Tt.next;if(i!==null)Tt=i,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Ea(n,i){return typeof i=="function"?i(n):i}function yh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,R=null,F=p;do{var Q=F.lane;if((Qi&Q)===Q)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var X={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(T=R=X,v=c):R=R.next=X,tt.lanes|=Q,Xi|=Q}F=F.next}while(F!==null&&F!==p);R===null?v=c:R.next=T,Dn(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,tt.lanes|=p,Xi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function _h(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Dn(p,i.memoizedState)||(Yt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function kp(){}function Np(n,i){var a=tt,c=yn(),d=i(),p=!Dn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,vh(Vp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,wa(9,Dp.bind(null,a,c,d,i),void 0,null),It===null)throw Error(t(349));(Qi&30)!==0||xp(a,i,d)}return d}function xp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Dp(n,i,a,c){i.value=a,i.getSnapshot=c,Op(i)&&bp(n)}function Vp(n,i,a){return a(function(){Op(i)&&bp(n)})}function Op(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Dn(n,a)}catch{return!0}}function bp(n){var i=Ir(n,1);i!==null&&Mn(i,n,1,-1)}function Lp(n){var i=Zn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i.queue=n,n=n.dispatch=jE.bind(null,tt,n),[i.memoizedState,n]}function wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Mp(){return yn().memoizedState}function nu(n,i,a,c){var d=Zn();tt.flags|=n,d.memoizedState=wa(1|i,a,void 0,c===void 0?null:c)}function ru(n,i,a,c){var d=yn();c=c===void 0?null:c;var p=void 0;if(gt!==null){var v=gt.memoizedState;if(p=v.destroy,c!==null&&ph(c,v.deps)){d.memoizedState=wa(i,a,p,c);return}}tt.flags|=n,d.memoizedState=wa(1|i,a,p,c)}function Fp(n,i){return nu(8390656,8,n,i)}function vh(n,i){return ru(2048,8,n,i)}function Up(n,i){return ru(4,2,n,i)}function jp(n,i){return ru(4,4,n,i)}function zp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bp(n,i,a){return a=a!=null?a.concat([n]):null,ru(4,4,zp.bind(null,i,n),a)}function Eh(){}function $p(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ph(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function qp(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ph(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Hp(n,i,a){return(Qi&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Dn(a,i)||(a=Fi(),tt.lanes|=a,Xi|=a,n.baseState=!0),i)}function FE(n,i){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=fh.transition;fh.transition={};try{n(!1),i()}finally{xe=a,fh.transition=c}}function Wp(){return yn().memoizedState}function UE(n,i,a){var c=ti(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Gp(n))Kp(i,a);else if(a=Sp(n,i,a,c),a!==null){var d=Wt();Mn(a,n,c,d),Qp(a,i,c)}}function jE(n,i,a){var c=ti(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gp(n))Kp(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,T=p(v,a);if(d.hasEagerState=!0,d.eagerState=T,Dn(T,v)){var R=i.interleaved;R===null?(d.next=d,ah(i)):(d.next=R.next,R.next=d),i.interleaved=d;return}}catch{}finally{}a=Sp(n,i,d,c),a!==null&&(d=Wt(),Mn(a,n,c,d),Qp(a,i,c))}}function Gp(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function Kp(n,i){_a=tu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Qp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,jr(n,a)}}var iu={readContext:gn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},zE={readContext:gn,useCallback:function(n,i){return Zn().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:Fp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,nu(4194308,4,zp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return nu(4194308,4,n,i)},useInsertionEffect:function(n,i){return nu(4,2,n,i)},useMemo:function(n,i){var a=Zn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=UE.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=Zn();return n={current:n},i.memoizedState=n},useState:Lp,useDebugValue:Eh,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=Lp(!1),i=n[0];return n=FE.bind(null,n[1]),Zn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,d=Zn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),It===null)throw Error(t(349));(Qi&30)!==0||xp(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Fp(Vp.bind(null,c,p,n),[n]),c.flags|=2048,wa(9,Dp.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Zn(),i=It.identifierPrefix;if(Je){var a=Tr,c=wr;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=ME++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},BE={readContext:gn,useCallback:$p,useContext:gn,useEffect:vh,useImperativeHandle:Bp,useInsertionEffect:Up,useLayoutEffect:jp,useMemo:qp,useReducer:yh,useRef:Mp,useState:function(){return yh(Ea)},useDebugValue:Eh,useDeferredValue:function(n){var i=yn();return Hp(i,gt.memoizedState,n)},useTransition:function(){var n=yh(Ea)[0],i=yn().memoizedState;return[n,i]},useMutableSource:kp,useSyncExternalStore:Np,useId:Wp,unstable_isNewReconciler:!1},$E={readContext:gn,useCallback:$p,useContext:gn,useEffect:vh,useImperativeHandle:Bp,useInsertionEffect:Up,useLayoutEffect:jp,useMemo:qp,useReducer:_h,useRef:Mp,useState:function(){return _h(Ea)},useDebugValue:Eh,useDeferredValue:function(n){var i=yn();return gt===null?i.memoizedState=n:Hp(i,gt.memoizedState,n)},useTransition:function(){var n=_h(Ea)[0],i=yn().memoizedState;return[n,i]},useMutableSource:kp,useSyncExternalStore:Np,useId:Wp,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function wh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ti(n),p=Sr(c,d);p.payload=i,a!=null&&(p.callback=a),i=Yr(n,p,d),i!==null&&(Mn(i,n,d,c),Yl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=ti(n),p=Sr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Yr(n,p,d),i!==null&&(Mn(i,n,d,c),Yl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=ti(n),d=Sr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Yr(n,d,c),i!==null&&(Mn(i,n,c,a),Yl(i,n,c))}};function Xp(n,i,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(d,p):!0}function Yp(n,i,a){var c=!1,d=Kr,p=i.contextType;return typeof p=="object"&&p!==null?p=gn(p):(d=Xt(i)?qi:Vt.current,c=i.contextTypes,p=(c=c!=null)?Qs(n,d):Kr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=su,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Jp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&su.enqueueReplaceState(i,i.state,null)}function Th(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=gn(p):(p=Xt(i)?qi:Vt.current,d.context=Qs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(wh(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&su.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,i){try{var a="",c=i;do a+=Ee(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Ih(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Sh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var qE=typeof WeakMap=="function"?WeakMap:Map;function Zp(n,i,a){a=Sr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){du||(du=!0,Uh=c),Sh(n,i)},a}function em(n,i,a){a=Sr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Sh(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Sh(n,i),typeof c!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function tm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new qE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=i0.bind(null,n,i,a),i.then(n,n))}function nm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function rm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Sr(-1,1),i.tag=2,Yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var HE=Ie.ReactCurrentOwner,Yt=!1;function Ht(n,i,a,c){i.child=n===null?Ip(i,null,a,c):Zs(i,n.child,a,c)}function im(n,i,a,c,d){a=a.render;var p=i.ref;return to(i,d),c=mh(n,i,a,c,p,d),a=gh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Je&&a&&Jc(i),i.flags|=1,Ht(n,i,c,d),i.child)}function sm(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Wh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,om(n,i,p,c,d)):(n=_u(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===i.ref)return Ar(n,i,d)}return i.flags|=1,n=ri(p,c),n.ref=i.ref,n.return=i,i.child=n}function om(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(aa(p,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return i.lanes=n.lanes,Ar(n,i,d)}return Ah(n,i,a,c,d)}function am(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(so,un),un|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(so,un),un|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(so,un),un|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,We(so,un),un|=c;return Ht(n,i,d,a),i.child}function lm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ah(n,i,a,c,d){var p=Xt(a)?qi:Vt.current;return p=Qs(i,p),to(i,d),a=mh(n,i,a,c,p,d),c=gh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Je&&c&&Jc(i),i.flags|=1,Ht(n,i,a,d),i.child)}function um(n,i,a,c,d){if(Xt(a)){var p=!0;$l(i)}else p=!1;if(to(i,d),i.stateNode===null)au(n,i),Yp(i,a,c),Th(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var R=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=gn(F):(F=Xt(a)?qi:Vt.current,F=Qs(i,F));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||R!==F)&&Jp(i,v,c,F),Xr=!1;var K=i.memoizedState;v.state=K,Jl(i,c,v,d),R=i.memoizedState,T!==c||K!==R||Qt.current||Xr?(typeof Q=="function"&&(wh(i,a,Q,c),R=i.memoizedState),(T=Xr||Xp(i,a,T,c,K,R,F))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=R),v.props=c,v.state=R,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Ap(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:On(i.type,T),v.props=F,X=i.pendingProps,K=v.context,R=a.contextType,typeof R=="object"&&R!==null?R=gn(R):(R=Xt(a)?qi:Vt.current,R=Qs(i,R));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==X||K!==R)&&Jp(i,v,c,R),Xr=!1,K=i.memoizedState,v.state=K,Jl(i,c,v,d);var ae=i.memoizedState;T!==X||K!==ae||Qt.current||Xr?(typeof re=="function"&&(wh(i,a,re,c),ae=i.memoizedState),(F=Xr||Xp(i,a,F,c,K,ae,R)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,R),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,R)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=R,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return Ch(n,i,a,c,p,d)}function Ch(n,i,a,c,d,p){lm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&pp(i,a,!1),Ar(n,i,p);c=i.stateNode,HE.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Zs(i,n.child,null,p),i.child=Zs(i,null,T,p)):Ht(n,i,T,p),i.memoizedState=c.state,d&&pp(i,a,!0),i.child}function cm(n){var i=n.stateNode;i.pendingContext?dp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&dp(n,i.context,!1),uh(n,i.containerInfo)}function hm(n,i,a,c,d){return Js(),nh(d),i.flags|=256,Ht(n,i,a,c),i.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function dm(n,i,a){var c=i.pendingProps,d=et.current,p=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(et,d&1),n===null)return th(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=vu(v,c,0,null),n=es(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Ph(a),i.memoizedState=Rh,n):kh(i,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return WE(n,i,v,c,T,d,a);if(p){p=c.fallback,v=i.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=R,i.deletions=null):(c=ri(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ri(T,p):(p=es(p,v,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=n.child.memoizedState,v=v===null?Ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,i.memoizedState=Rh,c}return p=n.child,n=p.sibling,c=ri(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function kh(n,i){return i=vu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ou(n,i,a,c){return c!==null&&nh(c),Zs(i,n.child,null,a),n=kh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function WE(n,i,a,c,d,p,v){if(a)return i.flags&256?(i.flags&=-257,c=Ih(Error(t(422))),ou(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=vu({mode:"visible",children:c.children},d,0,null),p=es(p,d,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Zs(i,n.child,null,v),i.child.memoizedState=Ph(v),i.memoizedState=Rh,p);if((i.mode&1)===0)return ou(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Ih(p,c,void 0),ou(n,i,v,c)}if(T=(v&n.childLanes)!==0,Yt||T){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ir(n,d),Mn(c,n,d,-1))}return Hh(),c=Ih(Error(t(421))),ou(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=s0.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,ln=Wr(d.nextSibling),an=i,Je=!0,Vn=null,n!==null&&(pn[mn++]=wr,pn[mn++]=Tr,pn[mn++]=Hi,wr=n.id,Tr=n.overflow,Hi=i),i=kh(i,c.children),i.flags|=4096,i)}function fm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),oh(n.return,i,a)}function Nh(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function pm(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Ht(n,i,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fm(n,a,i);else if(n.tag===19)fm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(et,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Zl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Nh(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Zl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Nh(i,!0,a,null,p);break;case"together":Nh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function au(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ri(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ri(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function GE(n,i,a){switch(i.tag){case 3:cm(i),Js();break;case 5:Pp(i);break;case 1:Xt(i.type)&&$l(i);break;case 4:uh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(Ql,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(et,et.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?dm(n,i,a):(We(et,et.current&1),n=Ar(n,i,a),n!==null?n.sibling:null);We(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return pm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,am(n,i,a)}return Ar(n,i,a)}var mm,xh,gm,ym;mm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xh=function(){},gm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ki(Jn.current);var p=null;switch(a){case"input":d=Ri(n,d),c=Ri(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=Lo(n,d),c=Lo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=jl)}Bo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==T&&(R!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||R&&R.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in R)R.hasOwnProperty(v)&&T[v]!==R[v]&&(a||(a={}),a[v]=R[v])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&Ke("scroll",n),p||T===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},ym=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ta(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function KE(n,i,a){var c=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(i),null;case 1:return Xt(i.type)&&Bl(),bt(i),null;case 3:return c=i.stateNode,no(),Qe(Qt),Qe(Vt),dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vn!==null&&(Bh(Vn),Vn=null))),xh(n,i),bt(i),null;case 5:ch(i);var d=Ki(ya.current);if(a=i.type,n!==null&&i.stateNode!=null)gm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bt(i),null}if(n=Ki(Jn.current),Gl(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Yn]=i,c[da]=p,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)Ke(ua[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":ys(c,p),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ke("invalid",c);break;case"textarea":vs(c,p),Ke("invalid",c)}Bo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Ul(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Ul(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":Bt(c),hl(c,p,!0);break;case"textarea":Bt(c),Mo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=jl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Yn]=i,n[da]=c,mm(n,i,!1,!1),i.stateNode=n;e:{switch(v=$o(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)Ke(ua[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":ys(n,c),d=Ri(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":vs(n,c),d=Lo(n,c),Ke("invalid",n);break;default:d=c}Bo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?jo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Fo(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&br(n,R):typeof R=="number"&&br(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&Ke("scroll",n):R!=null&&me(n,p,R,v))}switch(a){case"input":Bt(n),hl(n,c,!1);break;case"textarea":Bt(n),Mo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Pe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?hr(n,!!c.multiple,p,!1):c.defaultValue!=null&&hr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bt(i),null;case 6:if(n&&i.stateNode!=null)ym(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ki(ya.current),Ki(Jn.current),Gl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yn]=i,(p=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Ul(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ul(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=i,i.stateNode=c}return bt(i),null;case 13:if(Qe(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ep(),Js(),i.flags|=98560,p=!1;else if(p=Gl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Yn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bt(i),p=!1}else Vn!==null&&(Bh(Vn),Vn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(et.current&1)!==0?yt===0&&(yt=3):Hh())),i.updateQueue!==null&&(i.flags|=4),bt(i),null);case 4:return no(),xh(n,i),n===null&&ca(i.stateNode.containerInfo),bt(i),null;case 10:return sh(i.type._context),bt(i),null;case 17:return Xt(i.type)&&Bl(),bt(i),null;case 19:if(Qe(et),p=i.memoizedState,p===null)return bt(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)Ta(p,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Zl(n),v!==null){for(i.flags|=128,Ta(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(et,et.current&1|2),i.child}n=n.sibling}p.tail!==null&&He()>oo&&(i.flags|=128,c=!0,Ta(p,!1),i.lanes=4194304)}else{if(!c)if(n=Zl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Je)return bt(i),null}else 2*He()-p.renderingStartTime>oo&&a!==1073741824&&(i.flags|=128,c=!0,Ta(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(a=p.last,a!==null?a.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=He(),i.sibling=null,a=et.current,We(et,c?a&1|2:a&1),i):(bt(i),null);case 22:case 23:return qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(un&1073741824)!==0&&(bt(i),i.subtreeFlags&6&&(i.flags|=8192)):bt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function QE(n,i){switch(Zc(i),i.tag){case 1:return Xt(i.type)&&Bl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return no(),Qe(Qt),Qe(Vt),dh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ch(i),null;case 13:if(Qe(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(et),null;case 4:return no(),null;case 10:return sh(i.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var lu=!1,Lt=!1,XE=typeof WeakSet=="function"?WeakSet:Set,oe=null;function io(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,i,c)}else a.current=null}function Dh(n,i,a){try{a()}catch(c){rt(n,i,c)}}var _m=!1;function YE(n,i){if(qc=$r,n=Xf(),Lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,T=-1,R=-1,F=0,Q=0,X=n,K=null;t:for(;;){for(var re;X!==a||d!==0&&X.nodeType!==3||(T=v+d),X!==p||c!==0&&X.nodeType!==3||(R=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(re=X.firstChild)!==null;)K=X,X=re;for(;;){if(X===n)break t;if(K===a&&++F===d&&(T=v),K===p&&++Q===c&&(R=v),(re=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=re}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},$r=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,st=ae.memoizedState,L=i.stateNode,x=L.getSnapshotBeforeUpdate(i.elementType===i.type?le:On(i.type,le),st);L.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=i.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){rt(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=_m,_m=!1,ae}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Dh(i,a,p)}d=d.next}while(d!==c)}}function uu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function vm(n){var i=n.alternate;i!==null&&(n.alternate=null,vm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yn],delete i[da],delete i[Qc],delete i[VE],delete i[OE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Em(n){return n.tag===5||n.tag===3||n.tag===4}function wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=jl));else if(c!==4&&(n=n.child,n!==null))for(Oh(n,i,a),n=n.sibling;n!==null;)Oh(n,i,a),n=n.sibling}function bh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(bh(n,i,a),n=n.sibling;n!==null;)bh(n,i,a),n=n.sibling}var Pt=null,bn=!1;function Jr(n,i,a){for(a=a.child;a!==null;)Tm(n,i,a),a=a.sibling}function Tm(n,i,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 5:Lt||io(a,i);case 6:var c=Pt,d=bn;Pt=null,Jr(n,i,a),Pt=c,bn=d,Pt!==null&&(bn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(bn?(n=Pt,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),Nn(n)):Kc(Pt,a.stateNode));break;case 4:c=Pt,d=bn,Pt=a.stateNode.containerInfo,bn=!0,Jr(n,i,a),Pt=c,bn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Dh(a,i,v),d=d.next}while(d!==c)}Jr(n,i,a);break;case 1:if(!Lt&&(io(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){rt(a,i,T)}Jr(n,i,a);break;case 21:Jr(n,i,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Jr(n,i,a),Lt=c):Jr(n,i,a);break;default:Jr(n,i,a)}}function Im(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new XE),i.forEach(function(c){var d=o0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:Pt=T.stateNode,bn=!1;break e;case 3:Pt=T.stateNode.containerInfo,bn=!0;break e;case 4:Pt=T.stateNode.containerInfo,bn=!0;break e}T=T.return}if(Pt===null)throw Error(t(160));Tm(p,v,d),Pt=null,bn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){rt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sm(i,n),i=i.sibling}function Sm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(i,n),er(n),c&4){try{Ia(3,n,n.return),uu(3,n)}catch(le){rt(n,n.return,le)}try{Ia(5,n,n.return)}catch(le){rt(n,n.return,le)}}break;case 1:Ln(i,n),er(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(Ln(i,n),er(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var d=n.stateNode;try{br(d,"")}catch(le){rt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Oo(d,p),$o(T,v);var F=$o(T,p);for(v=0;v<R.length;v+=2){var Q=R[v],X=R[v+1];Q==="style"?jo(d,X):Q==="dangerouslySetInnerHTML"?Fo(d,X):Q==="children"?br(d,X):me(d,Q,X,F)}switch(T){case"input":bo(d,p);break;case"textarea":Es(d,p);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?hr(d,!!p.multiple,re,!1):K!==!!p.multiple&&(p.defaultValue!=null?hr(d,!!p.multiple,p.defaultValue,!0):hr(d,!!p.multiple,p.multiple?[]:"",!1))}d[da]=p}catch(le){rt(n,n.return,le)}}break;case 6:if(Ln(i,n),er(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){rt(n,n.return,le)}}break;case 3:if(Ln(i,n),er(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Nn(i.containerInfo)}catch(le){rt(n,n.return,le)}break;case 4:Ln(i,n),er(n);break;case 13:Ln(i,n),er(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Fh=He())),c&4&&Im(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||Q,Ln(i,n),Lt=F):Ln(i,n),er(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!Q&&(n.mode&1)!==0)for(oe=n,Q=n.child;Q!==null;){for(X=oe=Q;oe!==null;){switch(K=oe,re=K.child,K.tag){case 0:case 11:case 14:case 15:Ia(4,K,K.return);break;case 1:io(K,K.return);var ae=K.stateNode;if(typeof ae.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){rt(c,a,le)}}break;case 5:io(K,K.return);break;case 22:if(K.memoizedState!==null){Rm(X);continue}}re!==null?(re.return=K,oe=re):Rm(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=X.stateNode,R=X.memoizedProps.style,v=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=Uo("display",v))}catch(le){rt(n,n.return,le)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=F?"":X.memoizedProps}catch(le){rt(n,n.return,le)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Ln(i,n),er(n),c&4&&Im(n);break;case 21:break;default:Ln(i,n),er(n)}}function er(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(br(d,""),c.flags&=-33);var p=wm(n);bh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=wm(n);Oh(n,T,v);break;default:throw Error(t(161))}}catch(R){rt(n,n.return,R)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function JE(n,i,a){oe=n,Am(n)}function Am(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||lu;if(!v){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Lt;T=lu;var F=Lt;if(lu=v,(Lt=R)&&!F)for(oe=d;oe!==null;)v=oe,R=v.child,v.tag===22&&v.memoizedState!==null?Pm(d):R!==null?(R.return=v,oe=R):Pm(d);for(;p!==null;)oe=p,Am(p),p=p.sibling;oe=d,lu=T,Lt=F}Cm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,oe=p):Cm(n)}}function Cm(n){for(;oe!==null;){var i=oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||uu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Rp(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Rp(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var R=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Nn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&Vh(i)}catch(K){rt(i,i.return,K)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Rm(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Pm(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{uu(4,i)}catch(R){rt(i,a,R)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(R){rt(i,d,R)}}var p=i.return;try{Vh(i)}catch(R){rt(i,p,R)}break;case 5:var v=i.return;try{Vh(i)}catch(R){rt(i,v,R)}}}catch(R){rt(i,i.return,R)}if(i===n){oe=null;break}var T=i.sibling;if(T!==null){T.return=i.return,oe=T;break}oe=i.return}}var ZE=Math.ceil,cu=Ie.ReactCurrentDispatcher,Lh=Ie.ReactCurrentOwner,_n=Ie.ReactCurrentBatchConfig,be=0,It=null,lt=null,kt=0,un=0,so=Gr(0),yt=0,Sa=null,Xi=0,hu=0,Mh=0,Aa=null,Jt=null,Fh=0,oo=1/0,Cr=null,du=!1,Uh=null,Zr=null,fu=!1,ei=null,pu=0,Ca=0,jh=null,mu=-1,gu=0;function Wt(){return(be&6)!==0?He():mu!==-1?mu:mu=He()}function ti(n){return(n.mode&1)===0?1:(be&2)!==0&&kt!==0?kt&-kt:LE.transition!==null?(gu===0&&(gu=Fi()),gu):(n=xe,n!==0||(n=window.event,n=n===void 0?16:ea(n.type)),n)}function Mn(n,i,a,c){if(50<Ca)throw Ca=0,jh=null,Error(t(185));Ur(n,a,c),((be&2)===0||n!==It)&&(n===It&&((be&2)===0&&(hu|=a),yt===4&&ni(n,kt)),Zt(n,c),a===1&&be===0&&(i.mode&1)===0&&(oo=He()+500,ql&&Qr()))}function Zt(n,i){var a=n.callbackNode;pr(n,i);var c=Mi(n,n===It?kt:0);if(c===0)a!==null&&Qo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Qo(a),i===1)n.tag===0?bE(Nm.bind(null,n)):mp(Nm.bind(null,n)),xE(function(){(be&6)===0&&Qr()}),a=null;else{switch(zr(c)){case 1:a=bi;break;case 4:a=Lr;break;case 16:a=hn;break;case 536870912:a=gl;break;default:a=hn}a=Fm(a,km.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function km(n,i){if(mu=-1,gu=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=Mi(n,n===It?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=yu(n,c);else{i=c;var d=be;be|=2;var p=Dm();(It!==n||kt!==i)&&(Cr=null,oo=He()+500,Ji(n,i));do try{n0();break}catch(T){xm(n,T)}while(!0);ih(),cu.current=p,be=d,lt!==null?i=0:(It=null,kt=0,i=yt)}if(i!==0){if(i===2&&(d=rn(n),d!==0&&(c=d,i=zh(n,d))),i===1)throw a=Sa,Ji(n,0),ni(n,c),Zt(n,He()),a;if(i===6)ni(n,c);else{if(d=n.current.alternate,(c&30)===0&&!e0(d)&&(i=yu(n,c),i===2&&(p=rn(n),p!==0&&(c=p,i=zh(n,p))),i===1))throw a=Sa,Ji(n,0),ni(n,c),Zt(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zi(n,Jt,Cr);break;case 3:if(ni(n,c),(c&130023424)===c&&(i=Fh+500-He(),10<i)){if(Mi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gc(Zi.bind(null,n,Jt,Cr),i);break}Zi(n,Jt,Cr);break;case 4:if(ni(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-$t(c);p=1<<v,v=i[v],v>d&&(d=v),c&=~p}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ZE(c/1960))-c,10<c){n.timeoutHandle=Gc(Zi.bind(null,n,Jt,Cr),c);break}Zi(n,Jt,Cr);break;case 5:Zi(n,Jt,Cr);break;default:throw Error(t(329))}}}return Zt(n,He()),n.callbackNode===a?km.bind(null,n):null}function zh(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(Ji(n,i).flags|=256),n=yu(n,i),n!==2&&(i=Jt,Jt=a,i!==null&&Bh(i)),n}function Bh(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function e0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Dn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ni(n,i){for(i&=~Mh,i&=~hu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-$t(i),c=1<<a;n[a]=-1,i&=~c}}function Nm(n){if((be&6)!==0)throw Error(t(327));ao();var i=Mi(n,0);if((i&1)===0)return Zt(n,He()),null;var a=yu(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=zh(n,c))}if(a===1)throw a=Sa,Ji(n,0),ni(n,i),Zt(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zi(n,Jt,Cr),Zt(n,He()),null}function $h(n,i){var a=be;be|=1;try{return n(i)}finally{be=a,be===0&&(oo=He()+500,ql&&Qr())}}function Yi(n){ei!==null&&ei.tag===0&&(be&6)===0&&ao();var i=be;be|=1;var a=_n.transition,c=xe;try{if(_n.transition=null,xe=1,n)return n()}finally{xe=c,_n.transition=a,be=i,(be&6)===0&&Qr()}}function qh(){un=so.current,Qe(so)}function Ji(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,NE(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bl();break;case 3:no(),Qe(Qt),Qe(Vt),dh();break;case 5:ch(c);break;case 4:no();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:sh(c.type._context);break;case 22:case 23:qh()}a=a.return}if(It=n,lt=n=ri(n.current,null),kt=un=i,yt=0,Sa=null,Mh=hu=Xi=0,Jt=Aa=null,Gi!==null){for(i=0;i<Gi.length;i++)if(a=Gi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Gi=null}return n}function xm(n,i){do{var a=lt;try{if(ih(),eu.current=iu,tu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}tu=!1}if(Qi=0,Tt=gt=tt=null,_a=!1,va=0,Lh.current=null,a===null||a.return===null){yt=1,Sa=i,lt=null;break}e:{var p=n,v=a.return,T=a,R=i;if(i=kt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,Q=T,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=nm(v);if(re!==null){re.flags&=-257,rm(re,v,T,p,i),re.mode&1&&tm(p,F,i),i=re,R=F;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(R),i.updateQueue=le}else ae.add(R);break e}else{if((i&1)===0){tm(p,F,i),Hh();break e}R=Error(t(426))}}else if(Je&&T.mode&1){var st=nm(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),rm(st,v,T,p,i),nh(ro(R,T));break e}}p=R=ro(R,T),yt!==4&&(yt=2),Aa===null?Aa=[p]:Aa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var L=Zp(p,R,i);Cp(p,L);break e;case 1:T=R;var x=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Zr===null||!Zr.has(M)))){p.flags|=65536,i&=-i,p.lanes|=i;var J=em(p,T,i);Cp(p,J);break e}}p=p.return}while(p!==null)}Om(a)}catch(ce){i=ce,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function Dm(){var n=cu.current;return cu.current=iu,n===null?iu:n}function Hh(){(yt===0||yt===3||yt===2)&&(yt=4),It===null||(Xi&268435455)===0&&(hu&268435455)===0||ni(It,kt)}function yu(n,i){var a=be;be|=2;var c=Dm();(It!==n||kt!==i)&&(Cr=null,Ji(n,i));do try{t0();break}catch(d){xm(n,d)}while(!0);if(ih(),be=a,cu.current=c,lt!==null)throw Error(t(261));return It=null,kt=0,yt}function t0(){for(;lt!==null;)Vm(lt)}function n0(){for(;lt!==null&&!pl();)Vm(lt)}function Vm(n){var i=Mm(n.alternate,n,un);n.memoizedProps=n.pendingProps,i===null?Om(n):lt=i,Lh.current=null}function Om(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=KE(a,i,un),a!==null){lt=a;return}}else{if(a=QE(a,i),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,lt=null;return}}if(i=i.sibling,i!==null){lt=i;return}lt=i=n}while(i!==null);yt===0&&(yt=5)}function Zi(n,i,a){var c=xe,d=_n.transition;try{_n.transition=null,xe=1,r0(n,i,a,c)}finally{_n.transition=d,xe=c}return null}function r0(n,i,a,c){do ao();while(ei!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(qe(n,p),n===It&&(lt=It=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fu||(fu=!0,Fm(hn,function(){return ao(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=_n.transition,_n.transition=null;var v=xe;xe=1;var T=be;be|=4,Lh.current=null,YE(n,a),Sm(a,n),IE(Hc),$r=!!qc,Hc=qc=null,n.current=a,JE(a),Pc(),be=T,xe=v,_n.transition=p}else n.current=a;if(fu&&(fu=!1,ei=n,pu=d),p=n.pendingLanes,p===0&&(Zr=null),yl(a.stateNode),Zt(n,He()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(du)throw du=!1,n=Uh,Uh=null,n;return(pu&1)!==0&&n.tag!==0&&ao(),p=n.pendingLanes,(p&1)!==0?n===jh?Ca++:(Ca=0,jh=n):Ca=0,Qr(),null}function ao(){if(ei!==null){var n=zr(pu),i=_n.transition,a=xe;try{if(_n.transition=null,xe=16>n?16:n,ei===null)var c=!1;else{if(n=ei,ei=null,pu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,oe=n.current;oe!==null;){var p=oe,v=p.child;if((oe.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var F=T[R];for(oe=F;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Ia(8,Q,p)}var X=Q.child;if(X!==null)X.return=Q,oe=X;else for(;oe!==null;){Q=oe;var K=Q.sibling,re=Q.return;if(vm(Q),Q===F){oe=null;break}if(K!==null){K.return=re,oe=K;break}oe=re}}}var ae=p.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var st=le.sibling;le.sibling=null,le=st}while(le!==null)}}oe=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,oe=v;else e:for(;oe!==null;){if(p=oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ia(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,oe=L;break e}oe=p.return}}var x=n.current;for(oe=x;oe!==null;){v=oe;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,oe=M;else e:for(v=x;oe!==null;){if(T=oe,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:uu(9,T)}}catch(ce){rt(T,T.return,ce)}if(T===v){oe=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,oe=J;break e}oe=T.return}}if(be=d,Qr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Li,n)}catch{}c=!0}return c}finally{xe=a,_n.transition=i}}return!1}function bm(n,i,a){i=ro(a,i),i=Zp(n,i,1),n=Yr(n,i,1),i=Wt(),n!==null&&(Ur(n,1,i),Zt(n,i))}function rt(n,i,a){if(n.tag===3)bm(n,n,a);else for(;i!==null;){if(i.tag===3){bm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Zr===null||!Zr.has(c))){n=ro(a,n),n=em(i,n,1),i=Yr(i,n,1),n=Wt(),i!==null&&(Ur(i,1,n),Zt(i,n));break}}i=i.return}}function i0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(kt&a)===a&&(yt===4||yt===3&&(kt&130023424)===kt&&500>He()-Fh?Ji(n,0):Mh|=a),Zt(n,i)}function Lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ns,Ns<<=1,(Ns&130023424)===0&&(Ns=4194304)));var a=Wt();n=Ir(n,i),n!==null&&(Ur(n,i,a),Zt(n,a))}function s0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Lm(n,a)}function o0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Lm(n,a)}var Mm;Mm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qt.current)Yt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yt=!1,GE(n,i,a);Yt=(n.flags&131072)!==0}else Yt=!1,Je&&(i.flags&1048576)!==0&&gp(i,Wl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;au(n,i),n=i.pendingProps;var d=Qs(i,Vt.current);to(i,a),d=mh(null,i,c,n,d,a);var p=gh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xt(c)?(p=!0,$l(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lh(i),d.updater=su,i.stateNode=d,d._reactInternals=i,Th(i,c,n,a),i=Ch(null,i,c,!0,p,a)):(i.tag=0,Je&&p&&Jc(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(au(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=l0(c),n=On(c,n),d){case 0:i=Ah(null,i,c,n,a);break e;case 1:i=um(null,i,c,n,a);break e;case 11:i=im(null,i,c,n,a);break e;case 14:i=sm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Ah(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),um(n,i,c,d,a);case 3:e:{if(cm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Ap(n,i),Jl(i,c,null,a);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ro(Error(t(423)),i),i=hm(n,i,c,a,d);break e}else if(c!==d){d=ro(Error(t(424)),i),i=hm(n,i,c,a,d);break e}else for(ln=Wr(i.stateNode.containerInfo.firstChild),an=i,Je=!0,Vn=null,a=Ip(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===d){i=Ar(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Pp(i),n===null&&th(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Wc(c,d)?v=null:p!==null&&Wc(c,p)&&(i.flags|=32),lm(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&th(i),null;case 13:return dm(n,i,a);case 4:return uh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Zs(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),im(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,v=d.value,We(Ql,c._currentValue),c._currentValue=v,p!==null)if(Dn(p.value,v)){if(p.children===d.children&&!Qt.current){i=Ar(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=Sr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?R.next=R:(R.next=Q.next,Q.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),oh(p.return,a,i),T.lanes|=a;break}R=R.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),oh(v,a,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,to(i,a),d=gn(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),sm(n,i,c,d,a);case 15:return om(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),au(n,i),i.tag=1,Xt(c)?(n=!0,$l(i)):n=!1,to(i,a),Yp(i,c,d),Th(i,c,d,a),Ch(null,i,c,!0,n,a);case 19:return pm(n,i,a);case 22:return am(n,i,a)}throw Error(t(156,i.tag))};function Fm(n,i){return Ps(n,i)}function a0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new a0(n,i,a,c)}function Wh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l0(n){if(typeof n=="function")return Wh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===vt)return 14}return 2}function ri(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _u(n,i,a,c,d,p){var v=2;if(c=n,typeof n=="function")Wh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return es(a.children,d,p,i);case I:v=8,d|=8;break;case C:return n=vn(12,a,i,d|2),n.elementType=C,n.lanes=p,n;case S:return n=vn(13,a,i,d),n.elementType=S,n.lanes=p,n;case Ze:return n=vn(19,a,i,d),n.elementType=Ze,n.lanes=p,n;case Ue:return vu(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case D:v=9;break e;case O:v=11;break e;case vt:v=14;break e;case Et:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function es(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function vu(n,i,a,c){return n=vn(22,n,c,i),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Gh(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function Kh(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function u0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qh(n,i,a,c,d,p,v,T,R){return n=new u0(n,i,a,T,R),i===1?(i=1,p===!0&&(i|=8)):i=0,p=vn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(p),n}function c0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Um(n){if(!n)return Kr;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xt(a))return fp(n,a,i)}return i}function jm(n,i,a,c,d,p,v,T,R){return n=Qh(a,c,!0,n,d,p,v,T,R),n.context=Um(null),a=n.current,c=Wt(),d=ti(a),p=Sr(c,d),p.callback=i??null,Yr(a,p,d),n.current.lanes=d,Ur(n,d,c),Zt(n,c),n}function Eu(n,i,a,c){var d=i.current,p=Wt(),v=ti(d);return a=Um(a),i.context===null?i.context=a:i.pendingContext=a,i=Sr(p,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Yr(d,i,v),n!==null&&(Mn(n,d,v,p),Yl(n,d,v)),v}function wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xh(n,i){zm(n,i),(n=n.alternate)&&zm(n,i)}function h0(){return null}var Bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yh(n){this._internalRoot=n}Tu.prototype.render=Yh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Eu(n,i,null,null)},Tu.prototype.unmount=Yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Yi(function(){Eu(null,n,null,null)}),i[vr]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Tl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Gn.length&&i!==0&&i<Gn[a].priority;a++);Gn.splice(a,0,n),a===0&&Al(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $m(){}function d0(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=wu(v);p.call(F)}}var v=jm(i,c,n,0,null,!1,!1,"",$m);return n._reactRootContainer=v,n[vr]=v.current,ca(n.nodeType===8?n.parentNode:n),Yi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=wu(R);T.call(F)}}var R=Qh(n,0,!1,null,null,!1,!1,"",$m);return n._reactRootContainer=R,n[vr]=R.current,ca(n.nodeType===8?n.parentNode:n),Yi(function(){Eu(i,R,a,c)}),R}function Su(n,i,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var R=wu(v);T.call(R)}}Eu(i,v,n,d)}else v=d0(a,i,n,d,c);return wu(v)}El=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mr(i.pendingLanes);a!==0&&(jr(i,a|1),Zt(i,He()),(be&6)===0&&(oo=He()+500,Qr()))}break;case 13:Yi(function(){var c=Ir(n,1);if(c!==null){var d=Wt();Mn(c,n,1,d)}}),Xh(n,1)}},xs=function(n){if(n.tag===13){var i=Ir(n,134217728);if(i!==null){var a=Wt();Mn(i,n,134217728,a)}Xh(n,134217728)}},wl=function(n){if(n.tag===13){var i=ti(n),a=Ir(n,i);if(a!==null){var c=Wt();Mn(a,n,i,c)}Xh(n,i)}},Tl=function(){return xe},Il=function(n,i){var a=xe;try{return xe=n,i()}finally{xe=a}},Ts=function(n,i,a){switch(i){case"input":if(bo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=zl(c);if(!d)throw Error(t(90));Ci(c),bo(c,d)}}}break;case"textarea":Es(n,a);break;case"select":i=a.value,i!=null&&hr(n,!!a.multiple,i,!1)}},xi=$h,Ho=Yi;var f0={usingClientEntryPoint:!1,Events:[fa,Gs,zl,Hn,qo,$h]},Ra={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p0={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ko(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||h0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Li=Au.inject(p0),nn=Au}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0,en.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(i))throw Error(t(200));return c0(n,i,null,a)},en.createRoot=function(n,i){if(!Jh(n))throw Error(t(299));var a=!1,c="",d=Bm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Qh(n,1,!1,null,null,a,!1,c,d),n[vr]=i.current,ca(n.nodeType===8?n.parentNode:n),new Yh(i)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ko(i),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return Yi(n)},en.hydrate=function(n,i,a){if(!Iu(i))throw Error(t(200));return Su(null,n,i,!0,a)},en.hydrateRoot=function(n,i,a){if(!Jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Bm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=jm(i,null,n,1,a??null,d,!1,p,v),n[vr]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Tu(i)},en.render=function(n,i,a){if(!Iu(i))throw Error(t(200));return Su(null,n,i,!1,a)},en.unmountComponentAtNode=function(n){if(!Iu(n))throw Error(t(40));return n._reactRootContainer?(Yi(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[vr]=null})}),!0):!1},en.unstable_batchedUpdates=$h,en.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Iu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Su(n,i,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Ym;function T0(){if(Ym)return td.exports;Ym=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),td.exports=w0(),td.exports}var Jm;function I0(){if(Jm)return Cu;Jm=1;var r=T0();return Cu.createRoot=r.createRoot,Cu.hydrateRoot=r.hydrateRoot,Cu}var S0=I0();const A0=()=>{};var Zm={};/**
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
 */const Vy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},C0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Oy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let P=(m&15)<<2|_>>6,j=_&63;g||(j=64,h||(P=64)),s.push(t[w],t[A],t[P],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Vy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):C0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const A=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||A==null)throw new R0;const P=u<<2|m>>4;if(s.push(P),_!==64){const j=m<<4&240|_>>2;if(s.push(j),A!==64){const G=_<<6&192|A;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(r){const e=Vy(r);return Oy.encodeByteArray(e,!0)},$u=function(r){return P0(r).replace(/\./g,"")},by=function(r){try{return Oy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function k0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N0=()=>k0().__FIREBASE_DEFAULTS__,x0=()=>{if(typeof process>"u"||typeof Zm>"u")return;const r=Zm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},D0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&by(r[1]);return e&&JSON.parse(e)},ac=()=>{try{return A0()||N0()||x0()||D0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ly=r=>{var e,t;return(t=(e=ac())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},V0=r=>{const e=Ly(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},My=()=>{var r;return(r=ac())===null||r===void 0?void 0:r.config},Fy=r=>{var e;return(e=ac())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class O0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Uy(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function b0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[$u(JSON.stringify(t)),$u(JSON.stringify(h)),""].join(".")}const La={};function L0(){const r={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?r.emulator.push(e):r.prod.push(e);return r}function M0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let eg=!1;function jy(r,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||La[r]===e||La[r]||eg)return;La[r]=e;function t(P){return`__firebase__banner__${P}`}const s="__firebase__banner",u=L0().prod.length>0;function h(){const P=document.getElementById(s);P&&P.remove()}function m(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function g(P,j){P.setAttribute("width","24"),P.setAttribute("id",j),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function _(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{eg=!0,h()},P}function w(P,j){P.setAttribute("id",j),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function A(){const P=M0(s),j=t("text"),G=document.getElementById(j)||document.createElement("span"),Y=t("learnmore"),W=document.getElementById(Y)||document.createElement("a"),ge=t("preprendIcon"),de=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const me=P.element;m(me),w(W,Y);const Ie=_();g(de,ge),me.append(de,G,W,Ie),document.body.appendChild(me)}u?(G.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function U0(){var r;const e=(r=ac())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function z0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function B0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $0(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function q0(){return!U0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function H0(){try{return typeof indexedDB=="object"}catch{return!1}}function W0(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const G0="FirebaseError";class Or extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=G0,Object.setPrototypeOf(this,Or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?K0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Or(o,m,s)}}function K0(r,e){return r.replace(Q0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Q0=/\{\$([^}]+)}/g;function X0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ss(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(tg(u)&&tg(h)){if(!ss(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function tg(r){return r!==null&&typeof r=="object"}/**
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
 */function el(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ka(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Na(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Y0(r,e){const t=new J0(r,e);return t.subscribe.bind(t)}class J0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Z0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=id),o.error===void 0&&(o.error=id),o.complete===void 0&&(o.complete=id);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Z0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function id(){}/**
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
 */function zt(r){return r&&r._delegate?r._delegate:r}class os{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class ew{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new O0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nw(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tw(r){return r===ts?void 0:r}function nw(r){return r.instantiationMode==="EAGER"}/**
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
 */class rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ew(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const iw={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},sw=ke.INFO,ow={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},aw=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=ow[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=sw,this._logHandler=aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const lw=(r,e)=>e.some(t=>r instanceof t);let ng,rg;function uw(){return ng||(ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cw(){return rg||(rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zy=new WeakMap,md=new WeakMap,By=new WeakMap,sd=new WeakMap,$d=new WeakMap;function hw(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(hi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&zy.set(t,r)}).catch(()=>{}),$d.set(e,r),e}function dw(r){if(md.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});md.set(r,e)}let gd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return md.get(r);if(e==="objectStoreNames")return r.objectStoreNames||By.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function fw(r){gd=r(gd)}function pw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(od(this),e,...t);return By.set(s,e.sort?e.sort():[e]),hi(s)}:cw().includes(r)?function(...e){return r.apply(od(this),e),hi(zy.get(this))}:function(...e){return hi(r.apply(od(this),e))}}function mw(r){return typeof r=="function"?pw(r):(r instanceof IDBTransaction&&dw(r),lw(r,uw())?new Proxy(r,gd):r)}function hi(r){if(r instanceof IDBRequest)return hw(r);if(sd.has(r))return sd.get(r);const e=mw(r);return e!==r&&(sd.set(r,e),$d.set(e,r)),e}const od=r=>$d.get(r);function gw(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=hi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(hi(h.result),g.oldVersion,g.newVersion,hi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const yw=["get","getKey","getAll","getAllKeys","count"],_w=["put","add","delete","clear"],ad=new Map;function ig(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=_w.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||yw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return ad.set(e,u),u}fw(r=>({...r,get:(e,t,s)=>ig(e,t)||r.get(e,t,s),has:(e,t)=>!!ig(e,t)||r.has(e,t)}));/**
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
 */class vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ew(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ew(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",sg="0.13.2";/**
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
 */const Nr=new Bd("@firebase/app"),ww="@firebase/app-compat",Tw="@firebase/analytics-compat",Iw="@firebase/analytics",Sw="@firebase/app-check-compat",Aw="@firebase/app-check",Cw="@firebase/auth",Rw="@firebase/auth-compat",Pw="@firebase/database",kw="@firebase/data-connect",Nw="@firebase/database-compat",xw="@firebase/functions",Dw="@firebase/functions-compat",Vw="@firebase/installations",Ow="@firebase/installations-compat",bw="@firebase/messaging",Lw="@firebase/messaging-compat",Mw="@firebase/performance",Fw="@firebase/performance-compat",Uw="@firebase/remote-config",jw="@firebase/remote-config-compat",zw="@firebase/storage",Bw="@firebase/storage-compat",$w="@firebase/firestore",qw="@firebase/ai",Hw="@firebase/firestore-compat",Ww="firebase",Gw="11.10.0";/**
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
 */const _d="[DEFAULT]",Kw={[yd]:"fire-core",[ww]:"fire-core-compat",[Iw]:"fire-analytics",[Tw]:"fire-analytics-compat",[Aw]:"fire-app-check",[Sw]:"fire-app-check-compat",[Cw]:"fire-auth",[Rw]:"fire-auth-compat",[Pw]:"fire-rtdb",[kw]:"fire-data-connect",[Nw]:"fire-rtdb-compat",[xw]:"fire-fn",[Dw]:"fire-fn-compat",[Vw]:"fire-iid",[Ow]:"fire-iid-compat",[bw]:"fire-fcm",[Lw]:"fire-fcm-compat",[Mw]:"fire-perf",[Fw]:"fire-perf-compat",[Uw]:"fire-rc",[jw]:"fire-rc-compat",[zw]:"fire-gcs",[Bw]:"fire-gcs-compat",[$w]:"fire-fst",[Hw]:"fire-fst-compat",[qw]:"fire-vertex","fire-js":"fire-js",[Ww]:"fire-js-all"};/**
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
 */const qu=new Map,Qw=new Map,vd=new Map;function og(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function vo(r){const e=r.name;if(vd.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;vd.set(e,r);for(const t of qu.values())og(t,r);for(const t of Qw.values())og(t,r);return!0}function qd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function En(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Xw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new Za("app","Firebase",Xw);/**
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
 */class Yw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const Ro=Gw;function $y(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_d,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw di.create("bad-app-name",{appName:String(o)});if(t||(t=My()),!t)throw di.create("no-options");const u=qu.get(o);if(u){if(ss(t,u.options)&&ss(s,u.config))return u;throw di.create("duplicate-app",{appName:o})}const h=new rw(o);for(const g of vd.values())h.addComponent(g);const m=new Yw(t,s,h);return qu.set(o,m),m}function qy(r=_d){const e=qu.get(r);if(!e&&r===_d&&My())return $y();if(!e)throw di.create("no-app",{appName:r});return e}function fi(r,e,t){var s;let o=(s=Kw[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(m.join(" "));return}vo(new os(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Jw="firebase-heartbeat-database",Zw=1,Ba="firebase-heartbeat-store";let ld=null;function Hy(){return ld||(ld=gw(Jw,Zw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(r=>{throw di.create("idb-open",{originalErrorMessage:r.message})})),ld}async function eT(r){try{const t=(await Hy()).transaction(Ba),s=await t.objectStore(Ba).get(Wy(r));return await t.done,s}catch(e){if(e instanceof Or)Nr.warn(e.message);else{const t=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function ag(r,e){try{const s=(await Hy()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,Wy(r)),await s.done}catch(t){if(t instanceof Or)Nr.warn(t.message);else{const s=di.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function Wy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const tT=1024,nT=30;class rT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=lg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>nT){const h=oT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lg(),{heartbeatsToSend:s,unsentEntries:o}=iT(this._heartbeatsCache.heartbeats),u=$u(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function lg(){return new Date().toISOString().substring(0,10)}function iT(r,e=tT){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ug(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ug(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class sT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H0()?W0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ag(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ag(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ug(r){return $u(JSON.stringify({version:2,heartbeats:r})).length}function oT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function aT(r){vo(new os("platform-logger",e=>new vw(e),"PRIVATE")),vo(new os("heartbeat",e=>new rT(e),"PRIVATE")),fi(yd,sg,r),fi(yd,sg,"esm2017"),fi("fire-js","")}aT("");function Hd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lT=Gy,Ky=new Za("auth","Firebase",Gy());/**
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
 */const Hu=new Bd("@firebase/auth");function uT(r,...e){Hu.logLevel<=ke.WARN&&Hu.warn(`Auth (${Ro}): ${r}`,...e)}function Vu(r,...e){Hu.logLevel<=ke.ERROR&&Hu.error(`Auth (${Ro}): ${r}`,...e)}/**
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
 */function zn(r,...e){throw Wd(r,...e)}function nr(r,...e){return Wd(r,...e)}function Qy(r,e,t){const s=Object.assign(Object.assign({},lT()),{[e]:t});return new Za("auth","Firebase",s).create(e,{appName:r.name})}function kr(r){return Qy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Ky.create(r,...e)}function ye(r,e,...t){if(!r)throw Wd(e,...t)}function Rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Vu(e),new Error(e)}function xr(r,e){r||Rr(e)}/**
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
 */function Ed(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function cT(){return cg()==="http:"||cg()==="https:"}function cg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function hT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cT()||z0()||"connection"in navigator)?navigator.onLine:!0}function dT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=F0()||B0()}get(){return hT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gd(r,e){xr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mT=new tl(3e4,6e4);function Si(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ai(r,e,t,s,o={}){return Yy(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=el(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return j0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Co(r.emulatorConfig.host)&&(_.credentials="include"),Xy.fetch()(await Jy(r,r.config.apiHost,t,m),_)})}async function Yy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},fT),e);try{const o=new yT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Qy(r,w,_);zn(r,w)}}catch(o){if(o instanceof Or)throw o;zn(r,"network-request-failed",{message:String(o)})}}async function nl(r,e,t,s,o={}){const u=await Ai(r,e,t,s,o);return"mfaPendingCredential"in u&&zn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Jy(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Gd(r.config,o):`${r.config.apiScheme}://${o}`;return pT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function gT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),mT.get())})}}function Ru(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(r,e,s);return o.customData._tokenResponse=t,o}function hg(r){return r!==void 0&&r.enterprise!==void 0}class _T{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vT(r,e){return Ai(r,"GET","/v2/recaptchaConfig",Si(r,e))}/**
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
 */async function ET(r,e){return Ai(r,"POST","/v1/accounts:delete",e)}async function Wu(r,e){return Ai(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wT(r,e=!1){const t=zt(r),s=await t.getIdToken(e),o=Kd(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ma(ud(o.auth_time)),issuedAtTime:Ma(ud(o.iat)),expirationTime:Ma(ud(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ud(r){return Number(r)*1e3}function Kd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=by(t);return o?JSON.parse(o):(Vu("Failed to decode base64 JWT payload"),null)}catch(o){return Vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function dg(r){const e=Kd(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $a(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Or&&TT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function TT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class IT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await $a(r,Wu(t,{idToken:s}));ye(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Zy(u.providerUserInfo):[],m=AT(r.providerData,h),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new wd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,A)}async function ST(r){const e=zt(r);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Zy(r){return r.map(e=>{var{providerId:t}=e,s=Hd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function CT(r,e){const t=await Yy(r,{},async()=>{const s=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await Jy(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Co(r.emulatorConfig.host)&&(g.credentials="include"),Xy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function RT(r,e){return Ai(r,"POST","/v2/accounts:revokeToken",Si(r,e))}/**
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
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await CT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new po;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function si(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new wd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wT(this,e)}reload(){return ST(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await $a(this,ET(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,P=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ge=(_=t.createdAt)!==null&&_!==void 0?_:void 0,de=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:me,emailVerified:Ie,isAnonymous:$e,providerData:Se,stsTokenManager:N}=t;ye(me&&N,e,"internal-error");const I=po.fromJSON(this.name,N);ye(typeof me=="string",e,"internal-error"),si(A,e.name),si(P,e.name),ye(typeof Ie=="boolean",e,"internal-error"),ye(typeof $e=="boolean",e,"internal-error"),si(j,e.name),si(G,e.name),si(Y,e.name),si(W,e.name),si(ge,e.name),si(de,e.name);const C=new Fn({uid:me,auth:e,email:P,emailVerified:Ie,displayName:A,isAnonymous:$e,photoURL:G,phoneNumber:j,tenantId:Y,stsTokenManager:I,createdAt:ge,lastLoginAt:de});return Se&&Array.isArray(Se)&&(C.providerData=Se.map(k=>Object.assign({},k))),W&&(C._redirectEventId=W),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const u=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Zy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new po;m.updateFromIdToken(s);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new wd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const fg=new Map;function Pr(r){xr(r instanceof Function,"Expected a class definition");let e=fg.get(r);return e?(xr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,fg.set(r,e),e)}/**
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
 */class e_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}e_.type="NONE";const pg=e_;/**
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
 */function Ou(r,e,t){return`firebase:${r}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wu(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(Pr(pg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Pr(pg);const h=Ou(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let A;if(typeof w=="string"){const P=await Wu(e,{idToken:w}).catch(()=>{});if(!P)break;A=await Fn._fromGetAccountInfoResponse(e,P,w)}else A=Fn._fromJSON(e,w);_!==u&&(m=A),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new mo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new mo(u,e,s))}}/**
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
 */function mg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o_(e))return"Blackberry";if(a_(e))return"Webos";if(n_(e))return"Safari";if((e.includes("chrome/")||r_(e))&&!e.includes("edge/"))return"Chrome";if(s_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function t_(r=jt()){return/firefox\//i.test(r)}function n_(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r_(r=jt()){return/crios\//i.test(r)}function i_(r=jt()){return/iemobile/i.test(r)}function s_(r=jt()){return/android/i.test(r)}function o_(r=jt()){return/blackberry/i.test(r)}function a_(r=jt()){return/webos/i.test(r)}function Qd(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function PT(r=jt()){var e;return Qd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kT(){return $0()&&document.documentMode===10}function l_(r=jt()){return Qd(r)||s_(r)||a_(r)||o_(r)||/windows phone/i.test(r)||i_(r)}/**
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
 */function u_(r,e=[]){let t;switch(r){case"Browser":t=mg(jt());break;case"Worker":t=`${mg(jt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ro}/${s}`}/**
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
 */class NT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function xT(r,e={}){return Ai(r,"GET","/v2/passwordPolicy",Si(r,e))}/**
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
 */const DT=6;class VT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:DT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class OT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new NT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wu(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(En(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(kr(this));const t=e?zt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xT(this),t=new VT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await RT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Pr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&uT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hs(r){return zt(r)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y0(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bT(r){lc=r}function c_(r){return lc.loadJS(r)}function LT(){return lc.recaptchaEnterpriseScript}function MT(){return lc.gapiScript}function FT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class UT{constructor(){this.enterprise=new jT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const zT="recaptcha-enterprise",h_="NO_RECAPTCHA";class BT{constructor(e){this.type=zT,this.auth=hs(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{vT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new _T(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;hg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(h_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&hg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=LT();g.length!==0&&(g+=m),c_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function yg(r,e,t,s=!1,o=!1){const u=new BT(r);let h;if(o)h=h_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Td(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await yg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await yg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function $T(r,e){const t=qd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ss(u,e??{}))return o;zn(o,"already-initialized")}return t.initialize({options:e})}function qT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Pr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HT(r,e,t){const s=hs(r);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=d_(e),{host:h,port:m}=WT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(ss(_,s.config.emulator)&&ss(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Co(h)?(Uy(`${u}//${h}${g}`),jy("Auth",!0)):GT()}function d_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function WT(r){const e=d_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:_g(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:_g(h)}}}function _g(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function GT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function KT(r,e){return Ai(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function QT(r,e){return nl(r,"POST","/v1/accounts:signInWithPassword",Si(r,e))}/**
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
 */async function XT(r,e){return nl(r,"POST","/v1/accounts:signInWithEmailLink",Si(r,e))}async function YT(r,e){return nl(r,"POST","/v1/accounts:signInWithEmailLink",Si(r,e))}/**
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
 */class qa extends Xd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,t,"signInWithPassword",QT);case"emailLink":return XT(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,s,"signUpPassword",KT);case"emailLink":return YT(e,{idToken:t,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function go(r,e){return nl(r,"POST","/v1/accounts:signInWithIdp",Si(r,e))}/**
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
 */const JT="http://localhost";class as extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Hd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new as(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:JT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
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
 */function ZT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eI(r){const e=ka(Na(r)).link,t=e?ka(Na(e)).deep_link_id:null,s=ka(Na(r)).deep_link_id;return(s?ka(Na(s)).link:null)||s||t||e||r}class Yd{constructor(e){var t,s,o,u,h,m;const g=ka(Na(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,A=ZT((o=g.mode)!==null&&o!==void 0?o:null);ye(_&&w&&A,"argument-error"),this.apiKey=_,this.operation=A,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=eI(e);try{return new Yd(t)}catch{return null}}}/**
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
 */class Po{constructor(){this.providerId=Po.PROVIDER_ID}static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Yd.parseLink(t);return ye(s,"argument-error"),qa._fromEmailAndCode(e,s.code,s.tenantId)}}Po.PROVIDER_ID="password";Po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class f_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rl extends f_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends rl{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class ai extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return as._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
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
 */class li extends rl{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
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
 */class ui extends rl{constructor(){super("twitter.com")}static credential(e,t){return as._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
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
 */async function tI(r,e){return nl(r,"POST","/v1/accounts:signUp",Si(r,e))}/**
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
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Fn._fromIdTokenResponse(e,s,o),h=vg(s);return new ls({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=vg(s);return new ls({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function vg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ku extends Or{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ku(e,t,s,o)}}function p_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(r,u,e,s):u})}async function nI(r,e,t=!1){const s=await $a(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ls._forOperation(r,"link",s)}/**
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
 */async function rI(r,e,t=!1){const{auth:s}=r;if(En(s.app))return Promise.reject(kr(s));const o="reauthenticate";try{const u=await $a(r,p_(s,o,e,r),t);ye(u.idToken,s,"internal-error");const h=Kd(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(r.uid===m,s,"user-mismatch"),ls._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&zn(s,"user-mismatch"),u}}/**
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
 */async function m_(r,e,t=!1){if(En(r.app))return Promise.reject(kr(r));const s="signIn",o=await p_(r,s,e),u=await ls._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function iI(r,e){return m_(hs(r),e)}/**
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
 */async function g_(r){const e=hs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sI(r,e,t){if(En(r.app))return Promise.reject(kr(r));const s=hs(r),h=await Td(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&g_(r),g}),m=await ls._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function oI(r,e,t){return En(r.app)?Promise.reject(kr(r)):iI(zt(r),Po.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&g_(r),s})}function aI(r,e,t,s){return zt(r).onIdTokenChanged(e,t,s)}function lI(r,e,t){return zt(r).beforeAuthStateChanged(e,t)}function y_(r,e,t,s){return zt(r).onAuthStateChanged(e,t,s)}function uI(r){return zt(r).signOut()}const Qu="__sak";/**
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
 */class __{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cI=1e3,hI=10;class v_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);kT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,hI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}v_.type="LOCAL";const dI=v_;/**
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
 */class E_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}E_.type="SESSION";const w_=E_;/**
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
 */function fI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new uc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await fI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
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
 */function Jd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class pI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=Jd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const P=A;if(P.data.eventId===_)switch(P.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(P.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function rr(){return window}function mI(r){rr().location.href=r}/**
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
 */function T_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function gI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function _I(){return T_()?self:null}/**
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
 */const I_="firebaseLocalStorageDb",vI=1,Xu="firebaseLocalStorage",S_="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cc(r,e){return r.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function EI(){const r=indexedDB.deleteDatabase(I_);return new il(r).toPromise()}function Id(){const r=indexedDB.open(I_,vI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Xu,{keyPath:S_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Xu)?e(s):(s.close(),await EI(),e(await Id()))})})}async function Eg(r,e,t){const s=cc(r,!0).put({[S_]:e,value:t});return new il(s).toPromise()}async function wI(r,e){const t=cc(r,!1).get(e),s=await new il(t).toPromise();return s===void 0?null:s.value}function wg(r,e){const t=cc(r,!0).delete(e);return new il(t).toPromise()}const TI=800,II=3;class A_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>II)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(_I()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gI(),!this.activeServiceWorker)return;this.sender=new pI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await Eg(e,Qu,"1"),await wg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>wI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=cc(o,!1).getAll();return new il(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A_.type="LOCAL";const SI=A_;new tl(3e4,6e4);/**
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
 */function AI(r,e){return e?Pr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Zd extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CI(r){return m_(r.auth,new Zd(r),r.bypassAuthState)}function RI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),rI(t,new Zd(r),r.bypassAuthState)}async function PI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),nI(t,new Zd(r),r.bypassAuthState)}/**
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
 */class C_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CI;case"linkViaPopup":case"linkViaRedirect":return PI;case"reauthViaPopup":case"reauthViaRedirect":return RI;default:zn(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kI=new tl(2e3,1e4);class fo extends C_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kI.get())};e()}}fo.currentPopupAction=null;/**
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
 */const NI="pendingRedirect",bu=new Map;class xI extends C_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const s=await DI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DI(r,e){const t=bI(e),s=OI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function VI(r,e){bu.set(r._key(),e)}function OI(r){return Pr(r._redirectPersistence)}function bI(r){return Ou(NI,r.config.apiKey,r.name)}async function LI(r,e,t=!1){if(En(r.app))return Promise.reject(kr(r));const s=hs(r),o=AI(s,e),h=await new xI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const MI=600*1e3;class FI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!R_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tg(e))}saveEventToCache(e){this.cachedEventUids.add(Tg(e)),this.lastProcessedEventTime=Date.now()}}function Tg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function R_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R_(r);default:return!1}}/**
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
 */async function jI(r,e={}){return Ai(r,"GET","/v1/projects",e)}/**
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
 */const zI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BI=/^https?/;async function $I(r){if(r.config.emulator)return;const{authorizedDomains:e}=await jI(r);for(const t of e)try{if(qI(t))return}catch{}zn(r,"unauthorized-domain")}function qI(r){const e=Ed(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!BI.test(t))return!1;if(zI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const HI=new tl(3e4,6e4);function Ig(){const r=rr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function WI(r){return new Promise((e,t)=>{var s,o,u;function h(){Ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ig(),t(nr(r,"network-request-failed"))},timeout:HI.get()})}if(!((o=(s=rr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=rr().gapi)===null||u===void 0)&&u.load)h();else{const m=FT("iframefcb");return rr()[m]=()=>{gapi.load?h():t(nr(r,"network-request-failed"))},c_(`${MT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Lu=null,e})}let Lu=null;function GI(r){return Lu=Lu||WI(r),Lu}/**
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
 */const KI=new tl(5e3,15e3),QI="__/auth/iframe",XI="emulator/auth/iframe",YI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZI(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Gd(e,XI):`https://${r.config.authDomain}/${QI}`,s={apiKey:e.apiKey,appName:r.name,v:Ro},o=JI.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${el(s).slice(1)}`}async function eS(r){const e=await GI(r),t=rr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:ZI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=nr(r,"network-request-failed"),m=rr().setTimeout(()=>{u(h)},KI.get());function g(){rr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const tS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nS=500,rS=600,iS="_blank",sS="http://localhost";class Sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oS(r,e,t,s=nS,o=rS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},tS),{width:s.toString(),height:o.toString(),top:u,left:h}),_=jt().toLowerCase();t&&(m=r_(_)?iS:t),t_(_)&&(e=e||sS,g.scrollbars="yes");const w=Object.entries(g).reduce((P,[j,G])=>`${P}${j}=${G},`,"");if(PT(_)&&m!=="_self")return aS(e||"",m),new Sg(null);const A=window.open(e||"",m,w);ye(A,r,"popup-blocked");try{A.focus()}catch{}return new Sg(A)}function aS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const lS="__/auth/handler",uS="emulator/auth/handler",cS=encodeURIComponent("fac");async function Ag(r,e,t,s,o,u){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ro,eventId:o};if(e instanceof f_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",X0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof rl){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${cS}=${encodeURIComponent(g)}`:"";return`${hS(r)}?${el(m).slice(1)}${_}`}function hS({config:r}){return r.emulator?Gd(r,uS):`https://${r.authDomain}/${lS}`}/**
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
 */const cd="webStorageSupport";class dS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w_,this._completeRedirectFn=LI,this._overrideRedirectResult=VI}async _openPopup(e,t,s,o){var u;xr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Ag(e,t,s,Ed(),o);return oS(e,h,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ag(e,t,s,Ed(),o);return mI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(xr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await eS(e),s=new FI(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cd,{type:cd},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[cd];h!==void 0&&t(!!h),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$I(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return l_()||n_()||Qd()}}const fS=dS;var Cg="@firebase/auth",Rg="1.10.8";/**
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
 */class pS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gS(r){vo(new os("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u_(r)},_=new OT(s,o,u,g);return qT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),vo(new os("auth-internal",e=>{const t=hs(e.getProvider("auth").getImmediate());return(s=>new pS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fi(Cg,Rg,mS(r)),fi(Cg,Rg,"esm2017")}/**
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
 */const yS=300,_S=Fy("authIdTokenMaxAge")||yS;let Pg=null;const vS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>_S)return;const o=t==null?void 0:t.token;Pg!==o&&(Pg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ES(r=qy()){const e=qd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=$T(r,{popupRedirectResolver:fS,persistence:[SI,dI,w_]}),s=Fy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=vS(u.toString());lI(t,h,()=>h(t.currentUser)),aI(t,m=>h(m))}}const o=Ly("auth");return o&&HT(t,`http://${o}`),t}function wS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}bT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=nr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",wS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gS("Browser");var TS="firebase",IS="11.10.0";/**
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
 */fi(TS,IS,"app");var kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pi,P_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function C(){}C.prototype=I.prototype,N.D=I.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(k,D,O){for(var S=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)S[Ze-2]=arguments[Ze];return I.prototype[D].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,C){C||(C=0);var k=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)k[D]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(D=0;16>D;++D)k[D]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=N.g[0],C=N.g[1],D=N.g[2];var O=N.g[3],S=I+(O^C&(D^O))+k[0]+3614090360&4294967295;I=C+(S<<7&4294967295|S>>>25),S=O+(D^I&(C^D))+k[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(C^O&(I^C))+k[2]+606105819&4294967295,D=O+(S<<17&4294967295|S>>>15),S=C+(I^D&(O^I))+k[3]+3250441966&4294967295,C=D+(S<<22&4294967295|S>>>10),S=I+(O^C&(D^O))+k[4]+4118548399&4294967295,I=C+(S<<7&4294967295|S>>>25),S=O+(D^I&(C^D))+k[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(C^O&(I^C))+k[6]+2821735955&4294967295,D=O+(S<<17&4294967295|S>>>15),S=C+(I^D&(O^I))+k[7]+4249261313&4294967295,C=D+(S<<22&4294967295|S>>>10),S=I+(O^C&(D^O))+k[8]+1770035416&4294967295,I=C+(S<<7&4294967295|S>>>25),S=O+(D^I&(C^D))+k[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(C^O&(I^C))+k[10]+4294925233&4294967295,D=O+(S<<17&4294967295|S>>>15),S=C+(I^D&(O^I))+k[11]+2304563134&4294967295,C=D+(S<<22&4294967295|S>>>10),S=I+(O^C&(D^O))+k[12]+1804603682&4294967295,I=C+(S<<7&4294967295|S>>>25),S=O+(D^I&(C^D))+k[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(C^O&(I^C))+k[14]+2792965006&4294967295,D=O+(S<<17&4294967295|S>>>15),S=C+(I^D&(O^I))+k[15]+1236535329&4294967295,C=D+(S<<22&4294967295|S>>>10),S=I+(D^O&(C^D))+k[1]+4129170786&4294967295,I=C+(S<<5&4294967295|S>>>27),S=O+(C^D&(I^C))+k[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^C&(O^I))+k[11]+643717713&4294967295,D=O+(S<<14&4294967295|S>>>18),S=C+(O^I&(D^O))+k[0]+3921069994&4294967295,C=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(C^D))+k[5]+3593408605&4294967295,I=C+(S<<5&4294967295|S>>>27),S=O+(C^D&(I^C))+k[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^C&(O^I))+k[15]+3634488961&4294967295,D=O+(S<<14&4294967295|S>>>18),S=C+(O^I&(D^O))+k[4]+3889429448&4294967295,C=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(C^D))+k[9]+568446438&4294967295,I=C+(S<<5&4294967295|S>>>27),S=O+(C^D&(I^C))+k[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^C&(O^I))+k[3]+4107603335&4294967295,D=O+(S<<14&4294967295|S>>>18),S=C+(O^I&(D^O))+k[8]+1163531501&4294967295,C=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(C^D))+k[13]+2850285829&4294967295,I=C+(S<<5&4294967295|S>>>27),S=O+(C^D&(I^C))+k[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^C&(O^I))+k[7]+1735328473&4294967295,D=O+(S<<14&4294967295|S>>>18),S=C+(O^I&(D^O))+k[12]+2368359562&4294967295,C=D+(S<<20&4294967295|S>>>12),S=I+(C^D^O)+k[5]+4294588738&4294967295,I=C+(S<<4&4294967295|S>>>28),S=O+(I^C^D)+k[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^C)+k[11]+1839030562&4294967295,D=O+(S<<16&4294967295|S>>>16),S=C+(D^O^I)+k[14]+4259657740&4294967295,C=D+(S<<23&4294967295|S>>>9),S=I+(C^D^O)+k[1]+2763975236&4294967295,I=C+(S<<4&4294967295|S>>>28),S=O+(I^C^D)+k[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^C)+k[7]+4139469664&4294967295,D=O+(S<<16&4294967295|S>>>16),S=C+(D^O^I)+k[10]+3200236656&4294967295,C=D+(S<<23&4294967295|S>>>9),S=I+(C^D^O)+k[13]+681279174&4294967295,I=C+(S<<4&4294967295|S>>>28),S=O+(I^C^D)+k[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^C)+k[3]+3572445317&4294967295,D=O+(S<<16&4294967295|S>>>16),S=C+(D^O^I)+k[6]+76029189&4294967295,C=D+(S<<23&4294967295|S>>>9),S=I+(C^D^O)+k[9]+3654602809&4294967295,I=C+(S<<4&4294967295|S>>>28),S=O+(I^C^D)+k[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^C)+k[15]+530742520&4294967295,D=O+(S<<16&4294967295|S>>>16),S=C+(D^O^I)+k[2]+3299628645&4294967295,C=D+(S<<23&4294967295|S>>>9),S=I+(D^(C|~O))+k[0]+4096336452&4294967295,I=C+(S<<6&4294967295|S>>>26),S=O+(C^(I|~D))+k[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~C))+k[14]+2878612391&4294967295,D=O+(S<<15&4294967295|S>>>17),S=C+(O^(D|~I))+k[5]+4237533241&4294967295,C=D+(S<<21&4294967295|S>>>11),S=I+(D^(C|~O))+k[12]+1700485571&4294967295,I=C+(S<<6&4294967295|S>>>26),S=O+(C^(I|~D))+k[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~C))+k[10]+4293915773&4294967295,D=O+(S<<15&4294967295|S>>>17),S=C+(O^(D|~I))+k[1]+2240044497&4294967295,C=D+(S<<21&4294967295|S>>>11),S=I+(D^(C|~O))+k[8]+1873313359&4294967295,I=C+(S<<6&4294967295|S>>>26),S=O+(C^(I|~D))+k[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~C))+k[6]+2734768916&4294967295,D=O+(S<<15&4294967295|S>>>17),S=C+(O^(D|~I))+k[13]+1309151649&4294967295,C=D+(S<<21&4294967295|S>>>11),S=I+(D^(C|~O))+k[4]+4149444226&4294967295,I=C+(S<<6&4294967295|S>>>26),S=O+(C^(I|~D))+k[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~C))+k[2]+718787259&4294967295,D=O+(S<<15&4294967295|S>>>17),S=C+(O^(D|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var C=I-this.blockSize,k=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=C;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<I;)if(k[D++]=N.charCodeAt(O++),D==this.blockSize){o(this,k),D=0;break}}else for(;O<I;)if(k[D++]=N[O++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var C=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=C&255,C/=256;for(this.u(N),N=Array(16),I=C=0;4>I;++I)for(var k=0;32>k;k+=8)N[C++]=this.g[I]>>>k&255;return N};function u(N,I){var C=m;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=I(N)}function h(N,I){this.h=I;for(var C=[],k=!0,D=N.length-1;0<=D;D--){var O=N[D]|0;k&&O==I||(C[D]=O,k=!1)}this.g=C}var m={};function g(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return A;if(0>N)return W(_(-N));for(var I=[],C=1,k=0;N>=C;k++)I[k]=N/C|0,C*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return W(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(I,8)),k=A,D=0;D<N.length;D+=8){var O=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+O),I);8>O?(O=_(Math.pow(I,O)),k=k.j(O).add(_(S))):(k=k.j(C),k=k.add(_(S)))}return k}var A=g(0),P=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-W(this).m();for(var N=0,I=1,C=0;C<this.g.length;C++){var k=this.i(C);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(G(this))return"0";if(Y(this))return"-"+W(this).toString(N);for(var I=_(Math.pow(N,6)),C=this,k="";;){var D=Ie(C,I).g;C=ge(C,D.j(I));var O=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=D,G(C))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function G(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Y(N){return N.h==-1}r.l=function(N){return N=ge(this,N),Y(N)?-1:G(N)?0:1};function W(N){for(var I=N.g.length,C=[],k=0;k<I;k++)C[k]=~N.g[k];return new h(C,~N.h).add(P)}r.abs=function(){return Y(this)?W(this):this},r.add=function(N){for(var I=Math.max(this.g.length,N.g.length),C=[],k=0,D=0;D<=I;D++){var O=k+(this.i(D)&65535)+(N.i(D)&65535),S=(O>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=S>>>16,O&=65535,S&=65535,C[D]=S<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ge(N,I){return N.add(W(I))}r.j=function(N){if(G(this)||G(N))return A;if(Y(this))return Y(N)?W(this).j(W(N)):W(W(this).j(N));if(Y(N))return W(this.j(W(N)));if(0>this.l(j)&&0>N.l(j))return _(this.m()*N.m());for(var I=this.g.length+N.g.length,C=[],k=0;k<2*I;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var O=this.i(k)>>>16,S=this.i(k)&65535,Ze=N.i(D)>>>16,vt=N.i(D)&65535;C[2*k+2*D]+=S*vt,de(C,2*k+2*D),C[2*k+2*D+1]+=O*vt,de(C,2*k+2*D+1),C[2*k+2*D+1]+=S*Ze,de(C,2*k+2*D+1),C[2*k+2*D+2]+=O*Ze,de(C,2*k+2*D+2)}for(k=0;k<I;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=I;k<2*I;k++)C[k]=0;return new h(C,0)};function de(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function me(N,I){this.g=N,this.h=I}function Ie(N,I){if(G(I))throw Error("division by zero");if(G(N))return new me(A,A);if(Y(N))return I=Ie(W(N),I),new me(W(I.g),W(I.h));if(Y(I))return I=Ie(N,W(I)),new me(W(I.g),I.h);if(30<N.g.length){if(Y(N)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var C=P,k=I;0>=k.l(N);)C=$e(C),k=$e(k);var D=Se(C,1),O=Se(k,1);for(k=Se(k,2),C=Se(C,2);!G(k);){var S=O.add(k);0>=S.l(N)&&(D=D.add(C),O=S),k=Se(k,1),C=Se(C,1)}return I=ge(N,D.j(I)),new me(D,I)}for(D=A;0<=N.l(I);){for(C=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=_(C),S=O.j(I);Y(S)||0<S.l(N);)C-=k,O=_(C),S=O.j(I);G(O)&&(O=P),D=D.add(O),N=ge(N,S)}return new me(D,N)}r.A=function(N){return Ie(this,N).h},r.and=function(N){for(var I=Math.max(this.g.length,N.g.length),C=[],k=0;k<I;k++)C[k]=this.i(k)&N.i(k);return new h(C,this.h&N.h)},r.or=function(N){for(var I=Math.max(this.g.length,N.g.length),C=[],k=0;k<I;k++)C[k]=this.i(k)|N.i(k);return new h(C,this.h|N.h)},r.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),C=[],k=0;k<I;k++)C[k]=this.i(k)^N.i(k);return new h(C,this.h^N.h)};function $e(N){for(var I=N.g.length+1,C=[],k=0;k<I;k++)C[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(C,N.h)}function Se(N,I){var C=I>>5;I%=32;for(var k=N.g.length-C,D=[],O=0;O<k;O++)D[O]=0<I?N.i(O+C)>>>I|N.i(O+C+1)<<32-I:N.i(O+C);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,P_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,pi=h}).apply(typeof kg<"u"?kg:typeof self<"u"?self:typeof window<"u"?window:{});var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var k_,xa,N_,Mu,Sd,x_,D_,V_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pu=="object"&&Pu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var b=l[E];if(!(b in y))break e;y=y[b]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,b={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,E),l.apply(f,b)}}return function(){return l.apply(f,arguments)}}function P(l,f,y){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,P.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function G(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,b,U){for(var ee=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ee[ze-2]=arguments[ze];return f.prototype[b].apply(E,ee)}}function Y(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function W(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const b=l.length||0,U=E.length||0;l.length=b+U;for(let ee=0;ee<U;ee++)l[b+ee]=E[ee]}else l.push(E)}}class ge{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function de(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ie(l){return Ie[" "](l),l}Ie[" "]=function(){};var $e=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Se(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function N(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,E;for(let b=1;b<arguments.length;b++){E=arguments[b];for(y in E)l[y]=E[y];for(let U=0;U<C.length;U++)y=C[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,y){const E=vt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var vt=new ge(()=>new Et,l=>l.reset());class Et{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,te=!1,ue=new Ze,ne=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){O(y)}var f=vt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}te=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Z=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ee(l,f){if(B.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if($e){e:{try{Ie(f.nodeName);var b=!0;break e}catch{}b=!1}b||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ce[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ee.aa.h.call(this)}}G(Ee,B);var Ce={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Pe=0;function Be(l,f,y,E,b){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=b,this.key=++Pe,this.da=this.fa=!1}function Me(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Bt(l){this.src=l,this.g={},this.h=0}Bt.prototype.add=function(l,f,y,E,b){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var ee=$n(l,f,E,b);return-1<ee?(f=l[ee],y||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,b),f.fa=y,l.push(f)),f};function Ci(l,f){var y=f.type;if(y in l.g){var E=l.g[y],b=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=b)&&Array.prototype.splice.call(E,b,1),U&&(Me(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function $n(l,f,y,E){for(var b=0;b<l.length;++b){var U=l[b];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return b}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),ys={};function Oo(l,f,y,E,b){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Oo(l,f[U],y,E,b);return null}return y=Mo(y),l&&l[De]?l.K(f,y,_(E)?!!E.capture:!1,b):bo(l,f,y,!1,E,b)}function bo(l,f,y,E,b,U){if(!f)throw Error("Invalid event type");var ee=_(b)?!!b.capture:!!b,ze=vs(l);if(ze||(l[Ri]=ze=new Bt(l)),y=ze.add(f,y,E,ee,U),y.proxy)return y;if(E=hl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Z||(b=ee),b===void 0&&(b=!1),l.addEventListener(f.toString(),E,b);else if(l.attachEvent)l.attachEvent(hr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function hl(){function l(y){return f.call(l.src,l.listener,y)}const f=Lo;return l}function _s(l,f,y,E,b){if(Array.isArray(f))for(var U=0;U<f.length;U++)_s(l,f[U],y,E,b);else E=_(E)?!!E.capture:!!E,y=Mo(y),l&&l[De]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=$n(U,y,E,b),-1<y&&(Me(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=vs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=$n(f,y,E,b)),(y=-1<l?f[l]:null)&&cr(y))}function cr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[De])Ci(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(hr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=vs(f))?(Ci(y,l),y.h==0&&(y.src=null,f[Ri]=null)):Me(l)}}}function hr(l){return l in ys?ys[l]:ys[l]="on"+l}function Lo(l,f){if(l.da)l=!0;else{f=new Ee(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&cr(l),l=y.call(E,f)}return l}function vs(l){return l=l[Ri],l instanceof Bt?l:null}var Es="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mo(l){return typeof l=="function"?l:(l[Es]||(l[Es]=function(f){return l.handleEvent(f)}),l[Es])}function ft(){q.call(this),this.i=new Bt(this),this.M=this,this.F=null}G(ft,q),ft.prototype[De]=!0,ft.prototype.removeEventListener=function(l,f,y,E){_s(this,l,f,y,E)};function pt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new B(f,l);else if(f instanceof B)f.target=f.target||l;else{var b=f;f=new B(E,l),k(f,b)}if(b=!0,y)for(var U=y.length-1;0<=U;U--){var ee=f.g=y[U];b=dr(ee,E,!0,f)&&b}if(ee=f.g=l,b=dr(ee,E,!0,f)&&b,b=dr(ee,E,!1,f)&&b,y)for(U=0;U<y.length;U++)ee=f.g=y[U],b=dr(ee,E,!1,f)&&b}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)Me(y[E]);delete l.g[f],l.h--}}this.F=null},ft.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},ft.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function dr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var b=!0,U=0;U<f.length;++U){var ee=f[U];if(ee&&!ee.da&&ee.capture==y){var ze=ee.listener,mt=ee.ha||ee.src;ee.fa&&Ci(l.i,ee),b=ze.call(mt,E)!==!1&&b}}return b&&!E.defaultPrevented}function Fo(l,f,y){if(typeof l=="function")y&&(l=P(l,y));else if(l&&typeof l.handleEvent=="function")l=P(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function br(l){l.g=Fo(()=>{l.g=null,l.i&&(l.i=!1,br(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Pi extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:br(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(l){q.call(this),this.h=l,this.g={}}G(ki,q);var Uo=[];function jo(l){Se(l.g,function(f,y){this.g.hasOwnProperty(y)&&cr(f)},l),l.g={}}ki.prototype.N=function(){ki.aa.N.call(this),jo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=m.JSON.stringify,Bo=m.JSON.parse,$o=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ni(){}Ni.prototype.h=null;function ws(l){return l.h||(l.h=l.i())}function Ts(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qn(){B.call(this,"d")}G(qn,B);function Is(){B.call(this,"c")}G(Is,B);var Hn={},qo=null;function xi(){return qo=qo||new ft}Hn.La="serverreachability";function Ho(l){B.call(this,Hn.La,l)}G(Ho,B);function fr(l){const f=xi();pt(f,new Ho(f))}Hn.STAT_EVENT="statevent";function Wo(l,f){B.call(this,Hn.STAT_EVENT,l),this.stat=f}G(Wo,B);function it(l){const f=xi();pt(f,new Wo(f,l))}Hn.Ma="timingevent";function Ss(l,f){B.call(this,Hn.Ma,l),this.size=f}G(Ss,B);function In(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Di(){this.g=!0}Di.prototype.xa=function(){this.g=!1};function Vi(l,f,y,E,b,U){l.info(function(){if(l.g)if(U)for(var ee="",ze=U.split("&"),mt=0;mt<ze.length;mt++){var Ve=ze[mt].split("=");if(1<Ve.length){var wt=Ve[0];Ve=Ve[1];var at=wt.split("_");ee=2<=at.length&&at[1]=="type"?ee+(wt+"="+Ve+"&"):ee+(wt+"=redacted&")}}else ee=null;else ee=U;return"XMLHTTP REQ ("+E+") [attempt "+b+"]: "+f+`
`+y+`
`+ee})}function As(l,f,y,E,b,U,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+b+"]: "+f+`
`+y+`
`+U+" "+ee})}function Sn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Rc(l,y)+(E?" "+E:"")})}function Go(l,f){l.info(function(){return"TIMEOUT: "+f})}Di.prototype.info=function(){};function Rc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var b=E[1];if(Array.isArray(b)&&!(1>b.length)){var U=b[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ee=1;ee<b.length;ee++)b[ee]=""}}}}return zo(y)}catch{return f}}var Cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},An;function Oi(){}G(Oi,Ni),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},An=new Oi;function Cn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fl}function fl(){this.i=null,this.g="",this.h=!1}var Ko={},Rs={};function Ps(l,f,y){l.L=1,l.v=jr(rn(f)),l.m=y,l.P=!0,Qo(l,null)}function Qo(l,f){l.F=Date.now(),He(l),l.A=rn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Br(y.i,"t",E),l.C=0,y=l.j.J,l.h=new fl,l.g=xl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Pi(P(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Uo[0]=b.toString()),b=Uo);for(var U=0;U<b.length;U++){var ee=Oo(y,b[U],E||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),fr(),Vi(l.i,l.u,l.A,l.l,l.R,l.m)}Cn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Kt(l)==3?f.j():this.Y(l)},Cn.prototype.Y=function(l){try{if(l==this.g)e:{const at=Kt(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||at!=4||f==7||(f==8||0>=fn?fr(3):fr(2)),bi(this);var y=this.g.Z();this.X=y;t:if(pl(this)){var E=ta(this.g);l="";var b=E.length,U=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Lr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<b;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==b-1)});E.length=0,this.h.g+=l,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,As(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,mt=this.g;if((ze=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(ze)){var Ve=ze;break t}}Ve=null}if(y=Ve)Sn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,y);else{this.o=!1,this.s=3,it(12),hn(this),Lr(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<ee.length;)if(on=Pc(this,ee),on==Rs){at==4&&(this.s=4,it(14),y=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Ko){this.s=4,it(15),Sn(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else Sn(this.i,this.l,on,null),Xo(this,on);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||ee.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)Sn(this.i,this.l,ee,"[Invalid Chunked Response]"),hn(this),Lr(this);else if(0<ee.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ra(wt),wt.M=!0,it(11))}}else Sn(this.i,this.l,ee,null),Xo(this,ee);at==4&&hn(this),this.o&&!this.J&&(at==4?Us(this.j,this):(this.o=!1,He(this)))}else Os(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),hn(this),Lr(this)}}}catch{}finally{}};function pl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Pc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?Rs:(y=Number(f.substring(y,E)),isNaN(y)?Ko:(E+=1,E+y>f.length?Rs:(f=f.slice(E,E+y),l.C=E+y,f)))}Cn.prototype.cancel=function(){this.J=!0,hn(this)};function He(l){l.S=Date.now()+l.I,ml(l,l.I)}function ml(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=In(P(l.ba,l),f)}function bi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Cn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Go(this.i,this.A),this.L!=2&&(fr(),it(17)),hn(this),this.s=2,Lr(this)):ml(this,this.S-l)};function Lr(l){l.j.G==0||l.J||Us(l.j,l)}function hn(l){bi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,jo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Xo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||$t(y.h,l))){if(!l.K&&$t(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var b=E;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Fs(y),xn(y);else break e;Ms(y),it(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=In(P(y.Za,y),6e3));if(1>=yl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else _r(y,11)}else if((l.K||y.g==l)&&Fs(y),!de(f))for(b=y.Da.g.parse(f),f=0;f<b.length;f++){let Ve=b[f];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const wt=Ve[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=Ve[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const fn=Ve[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const on=l.g;if(on){const Bi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var U=E.h;U.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Yo(U,U.h),U.h=null))}if(E.D){const zs=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;zs&&(E.ya=zs,qe(E.I,E.D,zs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ee=l;if(E.qa=Nl(E,E.J?E.ia:null,E.W),ee.K){_l(E.h,ee);var ze=ee,mt=E.L;mt&&(ze.I=mt),ze.B&&(bi(ze),He(ze)),E.g=ee}else zi(E);0<y.i.length&&Qn(y)}else Ve[0]!="stop"&&Ve[0]!="close"||_r(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?_r(y,7):Rt(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}fr(4)}catch{}}var gl=class{constructor(l,f){this.g=l,this.map=f}};function Li(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function yl(l){return l.h?1:l.g?l.g.size:0}function $t(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Yo(l,f){l.g?l.g.add(f):l.h=f}function _l(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Li.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function vl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Y(l.i)}function ks(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Ns(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Mr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Ns(l),E=ks(l),b=E.length,U=0;U<b;U++)f.call(void 0,E[U],y&&y[U],l)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),b=null;if(0<=E){var U=l[y].substring(0,E);b=l[y].substring(E+1)}else U=l[y];f(U,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function pr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof pr){this.h=l.h,Fi(this,l.j),this.o=l.o,this.g=l.g,Fr(this,l.s),this.l=l.l;var f=l.i,y=new Wn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Ur(this,y),this.m=l.m}else l&&(f=String(l).match(Mi))?(this.h=!1,Fi(this,f[1]||"",!0),this.o=xe(f[2]||""),this.g=xe(f[3]||"",!0),Fr(this,f[4]),this.l=xe(f[5]||"",!0),Ur(this,f[6]||"",!0),this.m=xe(f[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}pr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(zr(f,xs,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(zr(f,xs,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(zr(y,y.charAt(0)=="/"?Tl:wl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",zr(y,Jo)),l.join("")};function rn(l){return new pr(l)}function Fi(l,f,y){l.j=y?xe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Fr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Ur(l,f,y){f instanceof Wn?(l.i=f,Gn(l.i,l.h)):(y||(f=zr(f,Il)),l.i=new Wn(f,l.h))}function qe(l,f,y){l.i.set(f,y)}function jr(l){return qe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function xe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,El),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function El(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var xs=/[#\/\?@]/g,wl=/[#\?:]/g,Tl=/[#\?]/g,Il=/[#\?@]/g,Jo=/#/g;function Wn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Ct(l){l.g||(l.g=new Map,l.h=0,l.i&&kc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Wn.prototype,r.add=function(l,f){Ct(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Rn(l,f){Ct(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Pn(l,f){return Ct(l),f=dn(l,f),l.g.has(f)}r.forEach=function(l,f){Ct(this),this.g.forEach(function(y,E){y.forEach(function(b){l.call(f,b,E,this)},this)},this)},r.na=function(){Ct(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const b=l[E];for(let U=0;U<b.length;U++)y.push(f[E])}return y},r.V=function(l){Ct(this);let f=[];if(typeof l=="string")Pn(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Ct(this),this.i=null,l=dn(this,l),Pn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Br(l,f,y){Rn(l,f),0<y.length&&(l.i=null,l.g.set(dn(l,f),Y(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var b=U;ee[E]!==""&&(b+="="+encodeURIComponent(String(ee[E]))),l.push(b)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Gn(l,f){f&&!l.j&&(Ct(l),l.i=null,l.g.forEach(function(y,E){var b=E.toLowerCase();E!=b&&(Rn(this,E),Br(this,b,y))},l)),l.j=f}function Nc(l,f){const y=new Di;if(m.Image){const E=new Image;E.onload=j(Gt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Gt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Gt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Gt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Sl(l,f){const y=new Di,E=new AbortController,b=setTimeout(()=>{E.abort(),Gt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(b),U.ok?Gt(y,"TestPingServer: ok",!0,f):Gt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(b),Gt(y,"TestPingServer: error",!1,f)})}function Gt(l,f,y,E,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),E(y)}catch{}}function xc(){this.g=new $o}function Al(l,f,y){const E=y||"";try{Mr(l,function(b,U){let ee=b;_(b)&&(ee=zo(b)),f.push(E+U+"="+encodeURIComponent(ee))})}catch(b){throw f.push(E+"type="+encodeURIComponent("_badmap")),b}}function mr(l){this.l=l.Ub||null,this.j=l.eb||!1}G(mr,Ni),mr.prototype.g=function(){return new Ui(this.l,this.j)},mr.prototype.i=function(l){return function(){return l}}({});function Ui(l,f){ft.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Ui,ft),r=Ui.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Nn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?kn(this):Nn(this),this.readyState==3&&Cl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,kn(this))},r.Qa=function(l){this.g&&(this.response=l,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Nn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Nn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function gr(l){let f="";return Se(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function $r(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=gr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):qe(l,f,y))}function Ye(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ye,ft);var Dc=/^https?$/i,Zo=["POST","PUT"];r=Ye.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?ws(this.o):ws(An),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){ji(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var b in E)y.set(b,E[b]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),b=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Zo,f,void 0))||E||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of y)this.g.setRequestHeader(U,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){ji(this,U)}};function ji(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ds(l),sn(l)}function Ds(l){l.A||(l.A=!0,pt(l,"complete"),pt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pt(this,"complete"),pt(this,"abort"),sn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},r.bb=function(){ea(this)};function ea(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Kt(l)!=4||l.Z()!=2)){if(l.u&&Kt(l)==4)Fo(l.Ea,0,l);else if(pt(l,"readystatechange"),Kt(l)==4){l.h=!1;try{const ee=l.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=ee===0){var b=String(l.D).match(Mi)[1]||null;!b&&m.self&&m.self.location&&(b=m.self.location.protocol.slice(0,-1)),E=!Dc.test(b?b.toLowerCase():"")}y=E}if(y)pt(l,"complete"),pt(l,"success");else{l.m=6;try{var U=2<Kt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Ds(l)}}finally{sn(l)}}}}function sn(l,f){if(l.g){Vs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||pt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Vs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Kt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Bo(f)}};function ta(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Os(l){const f={};l=(l.g&&2<=Kt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(de(l[E]))continue;var y=D(l[E]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[b]||[];f[b]=U,U.push(y)}N(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function na(l){this.Aa=0,this.i=[],this.j=new Di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,l),this.cb=Kn("retryDelaySeedMs",1e4,l),this.Wa=Kn("forwardChannelMaxRetries",2,l),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(l&&l.concurrentRequestLimit),this.Da=new xc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=na.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,E){it(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Nl(this,null,this.W),Qn(this)};function Rt(l){if(bs(l),l.G==3){var f=l.U++,y=rn(l.I);if(qe(y,"SID",l.K),qe(y,"RID",f),qe(y,"TYPE","terminate"),yr(l,y),f=new Cn(l,l.j,f),f.L=2,f.v=jr(rn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=xl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),He(f)}kl(l)}function xn(l){l.g&&(ra(l),l.g.cancel(),l.g=null)}function bs(l){xn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Fs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Qn(l){if(!nn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ne(),te||(Ue(),te=!0),ue.add(f,l),l.B=0}}function Vc(l,f){return yl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=In(P(l.Ga,l,f),Pl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Cn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(b.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=qr(this,b,f),y=rn(this.I),qe(y,"RID",l),qe(y,"CVER",22),this.D&&qe(y,"X-HTTP-Session-Id",this.D),yr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(gr(U)))+"&"+f:this.m&&$r(y,this.m,U)),Yo(this.h,b),this.Ua&&qe(y,"TYPE","init"),this.P?(qe(y,"$req",f),qe(y,"SID","null"),b.T=!0,Ps(b,y,null)):Ps(b,y,f),this.G=2}}else this.G==3&&(l?Ls(this,l):this.i.length==0||nn(this.h)||Ls(this))};function Ls(l,f){var y;f?y=f.l:y=l.U++;const E=rn(l.I);qe(E,"SID",l.K),qe(E,"RID",y),qe(E,"AID",l.T),yr(l,E),l.m&&l.o&&$r(E,l.m,l.o),y=new Cn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=qr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Yo(l.h,y),Ps(y,E,f)}function yr(l,f){l.H&&Se(l.H,function(y,E){qe(f,E,y)}),l.l&&Mr({},function(y,E){qe(f,E,y)})}function qr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?P(l.l.Na,l.l,l):null;e:{var b=l.i;let U=-1;for(;;){const ee=["count="+y];U==-1?0<y?(U=b[0].g,ee.push("ofs="+U)):U=0:ee.push("ofs="+U);let ze=!0;for(let mt=0;mt<y;mt++){let Ve=b[mt].g;const wt=b[mt].map;if(Ve-=U,0>Ve)U=Math.max(0,b[mt].g-100),ze=!1;else try{Al(wt,ee,"req"+Ve+"_")}catch{E&&E(wt)}}if(ze){E=ee.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function zi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ne(),te||(Ue(),te=!0),ue.add(f,l),l.v=0}}function Ms(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=In(P(l.Fa,l),Pl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,Rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=In(P(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),xn(this),Rl(this))};function ra(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Rl(l){l.g=new Cn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=rn(l.qa);qe(f,"RID","rpc"),qe(f,"SID",l.K),qe(f,"AID",l.T),qe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&qe(f,"TO",l.ja),qe(f,"TYPE","xmlhttp"),yr(l,f),l.m&&l.o&&$r(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=jr(rn(f)),y.m=null,y.P=!0,Qo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),Ms(this),it(19))};function Fs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Us(l,f){var y=null;if(l.g==f){Fs(l),ra(l),l.g=null;var E=2}else if($t(l.h,f))y=f.D,_l(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var b=l.B;E=xi(),pt(E,new Ss(E,y)),Qn(l)}else zi(l);else if(b=f.s,b==3||b==0&&0<f.X||!(E==1&&Vc(l,f)||E==2&&Ms(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),b){case 1:_r(l,5);break;case 4:_r(l,10);break;case 3:_r(l,6);break;default:_r(l,2)}}}function Pl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function _r(l,f){if(l.j.info("Error code "+f),f==2){var y=P(l.fb,l),E=l.Xa;const b=!E;E=new pr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Fi(E,"https"),jr(E),b?Nc(E.toString(),y):Sl(E.toString(),y)}else it(2);l.G=0,l.l&&l.l.sa(f),kl(l),bs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function kl(l){if(l.G=0,l.ka=[],l.l){const f=vl(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function Nl(l,f,y){var E=y instanceof pr?rn(y):new pr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Fr(E,E.s);else{var b=m.location;E=b.protocol,f=f?f+"."+b.hostname:b.hostname,b=+b.port;var U=new pr(null);E&&Fi(U,E),f&&(U.g=f),b&&Fr(U,b),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&qe(E,y,f),qe(E,"VER",l.la),yr(l,E),E}function xl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ye(new mr({eb:y})):new Ye(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ia(){}r=ia.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function js(){}js.prototype.g=function(l,f){return new qt(l,f)};function qt(l,f){ft.call(this),this.g=new na(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!de(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!de(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Xn(this)}G(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Rt(this.g)},qt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=zo(l),l=y);f.i.push(new gl(f.Ya++,l)),f.G==3&&Qn(f)},qt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,qt.aa.N.call(this)};function Dl(l){qn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}G(Dl,qn);function Vl(){Is.call(this),this.status=1}G(Vl,Is);function Xn(l){this.g=l}G(Xn,ia),Xn.prototype.ua=function(){pt(this.g,"a")},Xn.prototype.ta=function(l){pt(this.g,new Dl(l))},Xn.prototype.sa=function(l){pt(this.g,new Vl)},Xn.prototype.ra=function(){pt(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,V_=function(){return new js},D_=function(){return xi()},x_=Hn,Sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cs.NO_ERROR=0,Cs.TIMEOUT=8,Cs.HTTP_ERROR=6,Mu=Cs,dl.COMPLETE="complete",N_=dl,Ts.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,xa=Ts,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,k_=Ye}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});const Ng="@firebase/firestore",xg="4.8.0";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let ko="11.10.0";/**
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
 */const us=new Bd("@firebase/firestore");function lo(){return us.logLevel}function ie(r,...e){if(us.logLevel<=ke.DEBUG){const t=e.map(ef);us.debug(`Firestore (${ko}): ${r}`,...t)}}function Dr(r,...e){if(us.logLevel<=ke.ERROR){const t=e.map(ef);us.error(`Firestore (${ko}): ${r}`,...t)}}function yi(r,...e){if(us.logLevel<=ke.WARN){const t=e.map(ef);us.warn(`Firestore (${ko}): ${r}`,...t)}}function ef(r){if(typeof r=="string")return r;try{/**
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
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,O_(r,s,t)}function O_(r,e,t){let s=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Dr(s),new Error(s)}function je(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||O_(e,o,s)}function Te(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Or{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rs{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class b_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class AS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class CS{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new rs,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new rs)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new b_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class RS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new RS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function L_(){return new TextEncoder}/**
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
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=NS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ae(r,e){return r<e?-1:r>e?1:0}function Ad(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ae(s,o);{const u=L_(),h=xS(u.encode(Vg(r,t)),u.encode(Vg(e,t)));return h!==0?h:Ae(s,o)}}t+=s>65535?2:1}return Ae(r.length,e.length)}function Vg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function xS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ae(r[t],e[t]);return Ae(r.length,e.length)}function Eo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const Og="__name__";class tr{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=tr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ae(e.length,t.length)}static compareSegments(e,t){const s=tr.isNumericId(e),o=tr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):Ad(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pi.fromString(e.substring(4,e.length-2))}}class Ge extends tr{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const DS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends tr{construct(e,t,s){return new xt(e,t,s)}static isValidIdentifier(e){return DS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Og}static keyField(){return new xt([Og])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Ge.fromString(e))}static fromName(e){return new he(Ge.fromString(e).popFirst(5))}static empty(){return new he(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Ge(e.slice()))}}/**
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
 */function M_(r,e,t){if(!t)throw new se($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function VS(r,e,t,s){if(e===!0&&s===!0)throw new se($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function bg(r){if(!he.isDocumentKey(r))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Lg(r){if(he.isDocumentKey(r))throw new se($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function F_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function hc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function mi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hc(r);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ht(r,e){const t={typeString:r};return e&&(t.value=e),t}function sl(r,e){if(!F_(r))throw new se($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new se($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Mg=-62135596800,Fg=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Fg);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Mg)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fg}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sl(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Mg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:ht("string",Xe._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Xe(0,0))}static max(){return new we(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ha=-1;function OS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new _i(o,he.empty(),e)}function bS(r){return new _i(r.readTime,r.key,Ha)}class _i{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new _i(we.min(),he.empty(),Ha)}static max(){return new _i(we.max(),he.empty(),Ha)}}function LS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
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
 */const MS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function No(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==MS)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,s)=>{t(e)})}static reject(e){return new H((t,s)=>{s(e)})}static waitFor(e){return new H((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next(o=>o?H.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new H((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new H((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function US(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class dc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}dc.ue=-1;/**
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
 */const nf=-1;function fc(r){return r==null}function Yu(r){return r===0&&1/r==-1/0}function jS(r){return typeof r=="number"&&Number.isInteger(r)&&!Yu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const U_="";function zS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ug(e)),e=BS(r.get(t),e);return Ug(e)}function BS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case U_:t+="";break;default:t+=u}}return t}function Ug(r){return r+U_+""}/**
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
 */function jg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ds(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function j_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ku(this.root,e,this.comparator,!0)}}class ku{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=u??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zg(this.data.getIterator())}getIteratorFrom(e){return new zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new _t(xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class z_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new z_("Invalid base64 string: "+u):u}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const $S=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(r){if(je(!!r,39018),typeof r=="string"){let e=0;const t=$S.exec(r);if(je(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ei(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
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
 */const B_="server_timestamp",$_="__type__",q_="__previous_value__",H_="__local_write_time__";function rf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[$_])===null||t===void 0?void 0:t.stringValue)===B_}function pc(r){const e=r.mapValue.fields[q_];return rf(e)?pc(e):e}function Wa(r){const e=vi(r.mapValue.fields[H_].timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class qS{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Ju="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Ju}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Ju}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const W_="__type__",HS="__max__",Nu={mapValue:{}},G_="__vector__",Zu="value";function wi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?rf(r)?4:GS(r)?9007199254740991:WS(r)?10:11:_e(28295,{value:r})}function lr(r,e){if(r===e)return!0;const t=wi(r);if(t!==wi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wa(r).isEqual(Wa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=vi(o.timestampValue),m=vi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Ei(o.bytesValue).isEqual(Ei(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),m=ot(u.doubleValue);return h===m?Yu(h)===Yu(m):isNaN(h)&&isNaN(m)}return!1}(r,e);case 9:return Eo(r.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(jg(h)!==jg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!lr(h[g],m[g])))return!1;return!0}(r,e);default:return _e(52216,{left:r})}}function Ka(r,e){return(r.values||[]).find(t=>lr(t,e))!==void 0}function wo(r,e){if(r===e)return 0;const t=wi(r),s=wi(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return function(u,h){const m=ot(u.integerValue||u.doubleValue),g=ot(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return Bg(r.timestampValue,e.timestampValue);case 4:return Bg(Wa(r),Wa(e));case 5:return Ad(r.stringValue,e.stringValue);case 6:return function(u,h){const m=Ei(u),g=Ei(h);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Ae(m[_],g[_]);if(w!==0)return w}return Ae(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Ae(ot(u.latitude),ot(h.latitude));return m!==0?m:Ae(ot(u.longitude),ot(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return $g(r.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,_,w;const A=u.fields||{},P=h.fields||{},j=(m=A[Zu])===null||m===void 0?void 0:m.arrayValue,G=(g=P[Zu])===null||g===void 0?void 0:g.arrayValue,Y=Ae(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:$g(j,G)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===Nu.mapValue&&h===Nu.mapValue)return 0;if(u===Nu.mapValue)return 1;if(h===Nu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const P=Ad(g[A],w[A]);if(P!==0)return P;const j=wo(m[g[A]],_[w[A]]);if(j!==0)return j}return Ae(g.length,w.length)}(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function Bg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=vi(r),s=vi(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function $g(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=wo(t[o],s[o]);if(u)return u}return Ae(t.length,s.length)}function To(r){return Cd(r)}function Cd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=vi(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ei(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return he.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Cd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Cd(t.fields[h])}`;return o+"}"}(r.mapValue):_e(61005,{value:r})}function Fu(r){switch(wi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ei(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Fu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ds(s.fields,(u,h)=>{o+=u.length+Fu(h)}),o}(r.mapValue);default:throw _e(13486,{value:r})}}function qg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Rd(r){return!!r&&"integerValue"in r}function sf(r){return!!r&&"arrayValue"in r}function Hg(r){return!!r&&"nullValue"in r}function Wg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uu(r){return!!r&&"mapValue"in r}function WS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[W_])===null||t===void 0?void 0:t.stringValue)===G_}function Fa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ds(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Fa(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function GS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===HS}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=xt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Fa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ds(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new wn(Fa(this.value))}}function K_(r){const e=[];return ds(r.fields,(t,s)=>{const o=new xt([t]);if(Uu(s)){const u=K_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Un(e)}/**
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
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),wn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function Gg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=wo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!lr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Qa{constructor(e,t="asc"){this.field=e,this.dir=t}}function KS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Q_{}class ct extends Q_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new XS(e,t,s):t==="array-contains"?new ZS(e,s):t==="in"?new e1(e,s):t==="not-in"?new t1(e,s):t==="array-contains-any"?new n1(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new YS(e,s):new JS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wo(t,this.value)):t!==null&&wi(this.value)===wi(t)&&this.matchesComparison(wo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends Q_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Bn(e,t)}matches(e){return X_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function X_(r){return r.op==="and"}function Y_(r){return QS(r)&&X_(r)}function QS(r){for(const e of r.filters)if(e instanceof Bn)return!1;return!0}function Pd(r){if(r instanceof ct)return r.field.canonicalString()+r.op.toString()+To(r.value);if(Y_(r))return r.filters.map(e=>Pd(e)).join(",");{const e=r.filters.map(t=>Pd(t)).join(",");return`${r.op}(${e})`}}function J_(r,e){return r instanceof ct?function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&lr(s.value,o.value)}(r,e):r instanceof Bn?function(s,o){return o instanceof Bn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&J_(h,o.filters[m]),!0):!1}(r,e):void _e(19439)}function Z_(r){return r instanceof ct?function(t){return`${t.field.canonicalString()} ${t.op} ${To(t.value)}`}(r):r instanceof Bn?function(t){return t.op.toString()+" {"+t.getFilters().map(Z_).join(" ,")+"}"}(r):"Filter"}class XS extends ct{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class YS extends ct{constructor(e,t){super(e,"in",t),this.keys=ev("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class JS extends ct{constructor(e,t){super(e,"not-in",t),this.keys=ev("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ev(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class ZS extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&Ka(t.arrayValue,this.value)}}class e1 extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class t1 extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class n1 extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ka(this.value.arrayValue,s))}}/**
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
 */class r1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Qg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new r1(r,e,t,s,o,u,h)}function of(r){const e=Te(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Pd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>To(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>To(s)).join(",")),e.Pe=t}return e.Pe}function af(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!KS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!J_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Kg(r.startAt,e.startAt)&&Kg(r.endAt,e.endAt)}function kd(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Do{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function i1(r,e,t,s,o,u,h,m){return new Do(r,e,t,s,o,u,h,m)}function lf(r){return new Do(r)}function Xg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tv(r){return r.collectionGroup!==null}function Ua(r){const e=Te(r);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(xt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Qa(u,s))}),t.has(xt.keyField().canonicalString())||e.Te.push(new Qa(xt.keyField(),s))}return e.Te}function ir(r){const e=Te(r);return e.Ie||(e.Ie=s1(e,Ua(r))),e.Ie}function s1(r,e){if(r.limitType==="F")return Qg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Qa(o.field,u)});const t=r.endAt?new ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ec(r.startAt.position,r.startAt.inclusive):null;return Qg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Nd(r,e){const t=r.filters.concat([e]);return new Do(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function xd(r,e,t){return new Do(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function mc(r,e){return af(ir(r),ir(e))&&r.limitType===e.limitType}function nv(r){return`${of(ir(r))}|lt:${r.limitType}`}function uo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Z_(o)).join(", ")}]`),fc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>To(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>To(o)).join(",")),`Target(${s})`}(ir(r))}; limitType=${r.limitType})`}function gc(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ua(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const _=Gg(h,m,g);return h.inclusive?_<=0:_<0}(s.startAt,Ua(s),o)||s.endAt&&!function(h,m,g){const _=Gg(h,m,g);return h.inclusive?_>=0:_>0}(s.endAt,Ua(s),o))}(r,e)}function o1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function rv(r){return(e,t)=>{let s=!1;for(const o of Ua(r)){const u=a1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function a1(r,e,t){const s=r.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?wo(g,_):_e(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
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
 */class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return j_(this.inner)}size(){return this.innerSize}}/**
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
 */const l1=new nt(he.comparator);function Vr(){return l1}const iv=new nt(he.comparator);function Da(...r){let e=iv;for(const t of r)e=e.insert(t.key,t);return e}function sv(r){let e=iv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ns(){return ja()}function ov(){return ja()}function ja(){return new fs(r=>r.toString(),(r,e)=>r.isEqual(e))}const u1=new nt(he.comparator),c1=new _t(he.comparator);function Ne(...r){let e=c1;for(const t of r)e=e.add(t);return e}const h1=new _t(Ae);function d1(){return h1}/**
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
 */function uf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yu(e)?"-0":e}}function av(r){return{integerValue:""+r}}function f1(r,e){return jS(e)?av(e):uf(r,e)}/**
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
 */class yc{constructor(){this._=void 0}}function p1(r,e,t){return r instanceof Xa?function(o,u){const h={fields:{[$_]:{stringValue:B_},[H_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&rf(u)&&(u=pc(u)),u&&(h.fields[q_]=u),{mapValue:h}}(t,e):r instanceof Ya?uv(r,e):r instanceof Ja?cv(r,e):function(o,u){const h=lv(o,u),m=Yg(h)+Yg(o.Ee);return Rd(h)&&Rd(o.Ee)?av(m):uf(o.serializer,m)}(r,e)}function m1(r,e,t){return r instanceof Ya?uv(r,e):r instanceof Ja?cv(r,e):t}function lv(r,e){return r instanceof tc?function(s){return Rd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Xa extends yc{}class Ya extends yc{constructor(e){super(),this.elements=e}}function uv(r,e){const t=hv(e);for(const s of r.elements)t.some(o=>lr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ja extends yc{constructor(e){super(),this.elements=e}}function cv(r,e){let t=hv(e);for(const s of r.elements)t=t.filter(o=>!lr(o,s));return{arrayValue:{values:t}}}class tc extends yc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Yg(r){return ot(r.integerValue||r.doubleValue)}function hv(r){return sf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class g1{constructor(e,t){this.field=e,this.transform=t}}function y1(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Ya&&o instanceof Ya||s instanceof Ja&&o instanceof Ja?Eo(s.elements,o.elements,lr):s instanceof tc&&o instanceof tc?lr(s.Ee,o.Ee):s instanceof Xa&&o instanceof Xa}(r.transform,e.transform)}class _1{constructor(e,t){this.version=e,this.transformResults=t}}class jn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jn}static exists(e){return new jn(void 0,e)}static updateTime(e){return new jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class _c{}function dv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new cf(r.key,jn.none()):new ol(r.key,r.data,jn.none());{const t=r.data,s=wn.empty();let o=new _t(xt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ps(r.key,s,new Un(o.toArray()),jn.none())}}function v1(r,e,t){r instanceof ol?function(o,u,h){const m=o.value.clone(),g=Zg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):r instanceof ps?function(o,u,h){if(!ju(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Zg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(fv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function za(r,e,t,s){return r instanceof ol?function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=u.value.clone(),w=ey(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof ps?function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=ey(u.fieldTransforms,g,h),w=h.data;return w.setAll(fv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(r,e,t,s):function(u,h,m){return ju(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,e,t)}function E1(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=lv(s.transform,o||null);u!=null&&(t===null&&(t=wn.empty()),t.set(s.field,u))}return t||null}function Jg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Eo(s,o,(u,h)=>y1(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ol extends _c{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ps extends _c{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function fv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Zg(r,e,t){const s=new Map;je(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,m1(h,m,t[o]))}return s}function ey(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,p1(u,h,e))}return s}class cf extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class w1 extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class T1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&v1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ov();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=dv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(t,s)=>Jg(t,s))&&Eo(this.baseMutations,e.baseMutations,(t,s)=>Jg(t,s))}}class hf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){je(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return u1}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new hf(e,t,s,o)}}/**
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
 */class I1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class S1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ut,Oe;function A1(r){switch(r){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function pv(r){if(r===void 0)return Dr("GRPC error has no .code"),$.UNKNOWN;switch(r){case ut.OK:return $.OK;case ut.CANCELLED:return $.CANCELLED;case ut.UNKNOWN:return $.UNKNOWN;case ut.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ut.INTERNAL:return $.INTERNAL;case ut.UNAVAILABLE:return $.UNAVAILABLE;case ut.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ut.NOT_FOUND:return $.NOT_FOUND;case ut.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ut.ABORTED:return $.ABORTED;case ut.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ut.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:r})}}(Oe=ut||(ut={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const C1=new pi([4294967295,4294967295],0);function ty(r){const e=L_().encode(r),t=new P_;return t.update(e),new Uint8Array(t.digest())}function ny(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new pi([t,s],0),new pi([o,u],0)]}class df{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Va(`Invalid padding: ${t}`);if(s<0)throw new Va(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Va(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=pi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(pi.fromNumber(s)));return o.compare(C1)===1&&(o=new pi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ty(e),[s,o]=ny(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new df(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.fe===0)return;const t=ty(e),[s,o]=ny(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new vc(we.min(),o,new nt(Ae),Vr(),Ne())}}class al{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new al(s,t,Ne(),Ne(),Ne())}}/**
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
 */class zu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class mv{constructor(e,t){this.targetId=e,this.De=t}}class gv{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ry{constructor(){this.ve=0,this.Ce=iy(),this.Fe=Dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),s=Ne();return this.Ce.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}}),new al(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=iy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class R1{constructor(e){this.We=e,this.Ge=new Map,this.ze=Vr(),this.je=xu(),this.Je=xu(),this.He=new nt(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(kd(u))if(s===0){const h=new he(u.path);this.Xe(t,h,Ut.newNoDocument(h,we.min()))}else je(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ei(s).toUint8Array()}catch(g){if(g instanceof z_)return yi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new df(h,o,u)}catch(g){return yi(g instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((u,h)=>{const m=this.st(h);if(m){if(u.current&&kd(m.target)){const g=new he(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Ut.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}});let s=Ne();this.Je.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ze.forEach((u,h)=>h.setReadTime(e));const o=new vc(e,t,this.He,this.ze,s);return this.ze=Vr(),this.je=xu(),this.Je=xu(),this.He=new nt(Ae),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ry,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new _t(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new _t(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ry),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function xu(){return new nt(he.comparator)}function iy(){return new nt(he.comparator)}const P1={asc:"ASCENDING",desc:"DESCENDING"},k1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N1={and:"AND",or:"OR"};class x1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dd(r,e){return r.useProto3Json||fc(e)?e:{value:e}}function nc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function D1(r,e){return nc(r,e.toTimestamp())}function sr(r){return je(!!r,49232),we.fromTimestamp(function(t){const s=vi(t);return new Xe(s.seconds,s.nanos)}(r))}function ff(r,e){return Vd(r,e).canonicalString()}function Vd(r,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function _v(r){const e=Ge.fromString(r);return je(Iv(e),10190,{key:e.toString()}),e}function Od(r,e){return ff(r.databaseId,e.path)}function hd(r,e){const t=_v(e);if(t.get(1)!==r.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new he(Ev(t))}function vv(r,e){return ff(r.databaseId,e)}function V1(r){const e=_v(r);return e.length===4?Ge.emptyPath():Ev(e)}function bd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ev(r){return je(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function sy(r,e,t){return{name:Od(r,e),fields:t.value.mapValue.fields}}function O1(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(je(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?$.UNKNOWN:pv(_.code);return new se(w,_.message||"")}(h);t=new gv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=hd(r,s.document.name),u=sr(s.document.updateTime),h=s.document.createTime?sr(s.document.createTime):we.min(),m=new wn({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new zu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=hd(r,s.document),u=s.readTime?sr(s.readTime):we.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=hd(r,s.document),u=s.removedTargetIds||[];t=new zu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new S1(o,u),m=s.targetId;t=new mv(m,h)}}return t}function b1(r,e){let t;if(e instanceof ol)t={update:sy(r,e.key,e.value)};else if(e instanceof cf)t={delete:Od(r,e.key)};else if(e instanceof ps)t={update:sy(r,e.key,e.data),updateMask:q1(e.fieldMask)};else{if(!(e instanceof w1))return _e(16599,{Rt:e.type});t={verify:Od(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof tc)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw _e(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:D1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)}(r,e.precondition)),t}function L1(r,e){return r&&r.length>0?(je(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?sr(o.updateTime):sr(u);return h.isEqual(we.min())&&(h=sr(u)),new _1(h,o.transformResults||[])}(t,e))):[]}function M1(r,e){return{documents:[vv(r,e.path)]}}function F1(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=vv(r,o);const u=function(_){if(_.length!==0)return Tv(Bn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(P){return{field:co(P.field),direction:z1(P.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Dd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{Vt:t,parent:o}}function U1(r){let e=V1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){je(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(A){const P=wv(A);return P instanceof Bn&&Y_(P)?P.getFilters():[P]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(P=>function(G){return new Qa(ho(G.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(P))}(t.orderBy));let m=null;t.limit&&(m=function(A){let P;return P=typeof A=="object"?A.value:A,fc(P)?null:P}(t.limit));let g=null;t.startAt&&(g=function(A){const P=!!A.before,j=A.values||[];return new ec(j,P)}(t.startAt));let _=null;return t.endAt&&(_=function(A){const P=!A.before,j=A.values||[];return new ec(j,P)}(t.endAt)),i1(e,o,h,u,m,"F",g,_)}function j1(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ho(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ho(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ho(t.unaryFilter.field);return ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ho(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}}(r):r.fieldFilter!==void 0?function(t){return ct.create(ho(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Bn.create(t.compositeFilter.filters.map(s=>wv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}}(t.compositeFilter.op))}(r):_e(30097,{filter:r})}function z1(r){return P1[r]}function B1(r){return k1[r]}function $1(r){return N1[r]}function co(r){return{fieldPath:r.canonicalString()}}function ho(r){return xt.fromServerFormat(r.fieldPath)}function Tv(r){return r instanceof ct?function(t){if(t.op==="=="){if(Wg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NAN"}};if(Hg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NAN"}};if(Hg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(t.field),op:B1(t.op),value:t.value}}}(r):r instanceof Bn?function(t){const s=t.getFilters().map(o=>Tv(o));return s.length===1?s[0]:{compositeFilter:{op:$1(t.op),filters:s}}}(r):_e(54877,{filter:r})}function q1(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Iv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ci{constructor(e,t,s,o,u=we.min(),h=we.min(),m=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class H1{constructor(e){this.gt=e}}function W1(r){const e=U1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
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
 */class G1{constructor(){this.Dn=new K1}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(_i.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class K1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t(Ge.comparator)).toArray()}}/**
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
 */const oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sv=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(Sv,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class Io{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Io(0)}static ur(){return new Io(-1)}}/**
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
 */const ay="LruGarbageCollector",Q1=1048576;function ly([r,e],[t,s]){const o=Ae(r,t);return o===0?Ae(e,s):o}class X1{constructor(e){this.Tr=e,this.buffer=new _t(ly),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ly(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Y1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(ay,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xo(t)?ie(ay,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Rr(3e5)})}}class J1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return H.resolve(dc.ue);const s=new X1(t);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(oy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oy):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,m=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(_=Date.now(),lo()<=ke.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function Z1(r,e){return new J1(r,e)}/**
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
 */class eA{constructor(){this.changes=new fs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class nA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&za(s.mutation,o,Un.empty(),Xe.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ne()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ne()){const o=ns();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Da();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ns();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ne()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Vr();const h=ja(),m=function(){return ja()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ps)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),za(w.mutation,_,w.mutation.getFieldMask(),Xe.now())):h.set(_.key,Un.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var A;return m.set(_,new tA(w,(A=h.get(_))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(e,t){const s=ja();let o=new nt((h,m)=>h-m),u=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Un.empty();w=m.applyToLocalView(_,w),s.set(g,w);const A=(o.get(m.batchId)||Ne()).add(g);o=o.insert(m.batchId,A)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,A=ov();w.forEach(P=>{if(!u.has(P)){const j=dv(t.get(P),s.get(P));j!==null&&A.set(P,j),u=u.add(P)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return H.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(ns());let m=Ha,g=u;return h.next(_=>H.forEach(_,(w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next(P=>{g=g.insert(w,P)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Ne())).next(w=>({batchId:m,changes:sv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let o=Da();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Da();return this.indexManager.getCollectionParents(e,u).next(m=>H.forEach(m,g=>{const _=function(A,P){return new Do(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((A,P)=>{h=h.insert(A,P)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let m=Da();return h.forEach((g,_)=>{const w=u.get(g);w!==void 0&&za(w.mutation,_,Un.empty(),Xe.now()),gc(t,_)&&(m=m.insert(g,_))}),m})}}/**
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
 */class rA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:sr(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:W1(o.bundledQuery),readTime:sr(o.readTime)}}(t)),H.resolve()}}/**
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
 */class iA{constructor(){this.overlays=new nt(he.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ns();return H.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.wt(e,t,u)}),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=ns(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=ns(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ns(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return H.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new I1(t,s));let u=this.kr.get(t);u===void 0&&(u=Ne(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
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
 */class sA{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class pf{constructor(){this.qr=new _t(At.Qr),this.$r=new _t(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new At(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new At(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new he(new Ge([])),s=new At(t,e),o=new At(t,e+1),u=[];return this.$r.forEachInRange([s,o],h=>{this.Wr(h),u.push(h.key)}),u}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new he(new Ge([])),s=new At(t,e),o=new At(t,e+1);let u=Ne();return this.$r.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new At(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return he.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||he.comparator(e.key,t.key)}}/**
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
 */class oA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new _t(At.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new T1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new At(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?nf:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],h=>{const m=this.Zr(h.Hr);u.push(m)}),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(Ae);return t.forEach(o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],m=>{s=s.add(m.Hr)})}),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new At(new he(u),0);let m=new _t(Ae);return this.Yr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)},h),H.resolve(this.ei(m))}ei(e){const t=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,o=>{const u=new At(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new At(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class aA{constructor(e){this.ni=e,this.docs=function(){return new nt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Vr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))}),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Vr();const h=t.path,m=new he(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||LS(bS(w),s)<=0||(o.has(w.key)||gc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return H.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new lA(this)}getSize(e){return H.resolve(this.size)}}class lA extends eA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class uA{constructor(e){this.persistence=e,this.ii=new fs(t=>of(t),af),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new pf,this.targetCount=0,this._i=Io.ar()}forEachTarget(e,t){return this.ii.forEach((s,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),H.waitFor(u).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
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
 */class Av{constructor(e,t){this.ai={},this.overlays={},this.ui=new dc(0),this.ci=!1,this.ci=!0,this.li=new sA,this.referenceDelegate=e(this),this.hi=new uA(this),this.indexManager=new G1,this.remoteDocumentCache=function(o){return new aA(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new H1(t),this.Ti=new rA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new oA(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new cA(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(e,t){return H.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class cA extends FS{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Ai=new pf,this.Ri=null}static Vi(e){return new mf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,s=>{const o=he.fromPath(s);return this.fi(e,o).next(u=>{u||t.removeEntry(o,we.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.gi=new fs(s=>zS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=Z1(this,t)}static Vi(e,t){return new rc(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return H.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(u=>u?H.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,h=>this.Sr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ne(),o=Ne();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new gf(e,t.fromCache,s,o)}}/**
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
 */class hA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return q0()?8:US(jt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ys(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new hA;return this.ws(e,t,h).next(m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)})}).next(()=>u.result)}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(lo()<=ke.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(lo()<=ke.DEBUG&&ie("QueryEngine","Query:",uo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(lo()<=ke.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):H.resolve())}ps(e,t){if(Xg(t))return H.resolve(null);let s=ir(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=xd(t,null,"F"),s=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ne(...u);return this.gs.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,xd(t,null,"F")):this.vs(e,_,t,g)}))})))}ys(e,t,s,o){return Xg(t)||o.isEqual(we.min())?H.resolve(null):this.gs.getDocuments(e,s).next(u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?H.resolve(null):(lo()<=ke.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),uo(t)),this.vs(e,h,t,OS(o,Ha)).next(m=>m))})}bs(e,t){let s=new _t(rv(e));return t.forEach((o,u)=>{gc(e,u)&&(s=s.add(u))}),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return lo()<=ke.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",uo(t)),this.gs.getDocumentsMatchingQuery(e,t,_i.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const yf="LocalStore",fA=3e8;class pA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new nt(Ae),this.Ms=new fs(u=>of(u),af),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function mA(r,e,t,s){return new pA(r,e,t,s)}async function Cv(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Ne();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Bs:_,removedBatchIds:h,addedBatchIds:m}))})})}function gA(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return function(m,g,_,w){const A=_.batch,P=A.keys();let j=H.resolve();return P.forEach(G=>{j=j.next(()=>w.getEntry(g,G)).next(Y=>{const W=_.docVersions.get(G);je(W!==null,48541),Y.version.compareTo(W)<0&&(A.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),w.addEntry(Y)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ne();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Rv(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function yA(r,e){const t=Te(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach((w,A)=>{const P=o.get(A);if(!P)return;m.push(t.hi.removeMatchingKeys(u,w.removedDocuments,A).next(()=>t.hi.addMatchingKeys(u,w.addedDocuments,A)));let j=P.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(A,j),function(Y,W,ge){return Y.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=fA?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0}(P,j,w)&&m.push(t.hi.updateTargetData(u,j))});let g=Vr(),_=Ne();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(_A(u,h,e.documentUpdates).next(w=>{g=w.Ls,_=w.ks})),!s.isEqual(we.min())){const w=t.hi.getLastRemoteSnapshotVersion(u).next(A=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return H.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.Fs=o,u))}function _A(r,e,t){let s=Ne(),o=Ne();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Vr();return t.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ie(yf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{Ls:h,ks:o}})}function vA(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=nf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function EA(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.hi.getTargetData(s,e).next(u=>u?(o=u,H.resolve(o)):t.hi.allocateTargetId(s).next(h=>(o=new ci(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Ld(r,e,t){const s=Te(r),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!xo(h))throw h;ie(yf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function uy(r,e,t){const s=Te(r);let o=we.min(),u=Ne();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const A=Te(g),P=A.Ms.get(w);return P!==void 0?H.resolve(A.Fs.get(P)):A.hi.getTargetData(_,w)}(s,h,ir(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Ne())).next(m=>(wA(s,o1(e),m),{documents:m,qs:u})))}function wA(r,e,t){let s=r.xs.get(e)||we.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.xs.set(e,s)}class cy{constructor(){this.activeTargetIds=d1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TA{constructor(){this.Fo=new cy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new cy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IA{xo(e){}shutdown(){}}/**
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
 */const hy="ConnectivityMonitor";class dy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(hy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(hy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Du=null;function Md(){return Du===null?Du=function(){return 268435456+Math.round(2147483648*Math.random())}():Du++,"0x"+Du.toString(16)}/**
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
 */const dd="RestConnection",SA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Md(),m=this.Go(e,t.toUriEncodedString());ie(dd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:_}=new URL(m),w=Co(_);return this.jo(e,m,g,s,w).then(A=>(ie(dd,`Received RPC '${e}' ${h}: `,A),A),A=>{throw yi(dd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A})}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Go(e,t){const s=SA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class CA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Mt="WebChannelConnection";class RA extends AA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Md();return new Promise((m,g)=>{const _=new k_;_.setWithCredentials(!0),_.listenOnce(N_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case Mu.NO_ERROR:const A=_.getResponseJson();ie(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Mu.TIMEOUT:ie(Mt,`RPC '${e}' ${h} timed out`),g(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const P=_.getStatus();if(ie(Mt,`RPC '${e}' ${h} failed with status:`,P,"response text:",_.getResponseText()),P>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const G=j==null?void 0:j.error;if(G&&G.status&&G.message){const Y=function(ge){const de=ge.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(de)>=0?de:$.UNKNOWN}(G.status);g(new se(Y,G.message))}else g(new se($.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new se($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ie(Mt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);ie(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}P_(e,t,s){const o=Md(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=V_(),m=D_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ie(Mt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);this.T_(A);let P=!1,j=!1;const G=new CA({Ho:W=>{j?ie(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(P||(ie(Mt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),P=!0),ie(Mt,`RPC '${e}' stream ${o} sending:`,W),A.send(W))},Yo:()=>A.close()}),Y=(W,ge,de)=>{W.listen(ge,me=>{try{de(me)}catch(Ie){setTimeout(()=>{throw Ie},0)}})};return Y(A,xa.EventType.OPEN,()=>{j||(ie(Mt,`RPC '${e}' stream ${o} transport opened.`),G.s_())}),Y(A,xa.EventType.CLOSE,()=>{j||(j=!0,ie(Mt,`RPC '${e}' stream ${o} transport closed`),G.__(),this.I_(A))}),Y(A,xa.EventType.ERROR,W=>{j||(j=!0,yi(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),G.__(new se($.UNAVAILABLE,"The operation could not be completed")))}),Y(A,xa.EventType.MESSAGE,W=>{var ge;if(!j){const de=W.data[0];je(!!de,16349);const me=de,Ie=(me==null?void 0:me.error)||((ge=me[0])===null||ge===void 0?void 0:ge.error);if(Ie){ie(Mt,`RPC '${e}' stream ${o} received error:`,Ie);const $e=Ie.status;let Se=function(C){const k=ut[C];if(k!==void 0)return pv(k)}($e),N=Ie.message;Se===void 0&&(Se=$.INTERNAL,N="Unknown error status: "+$e+" with message "+Ie.message),j=!0,G.__(new se(Se,N)),A.close()}else ie(Mt,`RPC '${e}' stream ${o} received:`,de),G.a_(de)}}),Y(m,x_.STAT_EVENT,W=>{W.stat===Sd.PROXY?ie(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Sd.NOPROXY&&ie(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{G.o_()},0),G}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function fd(){return typeof document<"u"?document:null}/**
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
 */function Ec(r){return new x1(r,!0)}/**
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
 */class Pv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const fy="PersistentStream";class kv{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Pv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Dr(t.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===t&&this.W_(s,o)},s=>{e(()=>{const o=new se($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ie(fy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(ie(fy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PA extends kv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=O1(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?sr(h.readTime):we.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=bd(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=kd(g)?{documents:M1(u,g)}:{query:F1(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=yv(u,h.resumeToken);const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=nc(u,h.snapshotVersion.toTimestamp());const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=j1(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=bd(this.serializer),t.removeTarget=e,this.k_(t)}}class kA extends kv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=L1(e.writeResults,e.commitTime),s=sr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=bd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>b1(this.serializer,s))};this.k_(t)}}/**
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
 */class NA{}class xA extends NA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Wo(e,Vd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se($.UNKNOWN,u.toString())})}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Jo(e,Vd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se($.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class DA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Dr(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const cs="RemoteStore";class VA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(h=>{s.enqueueAndForget(async()=>{ms(this)&&(ie(cs,"Restarting streams for network reachability change."),await async function(g){const _=Te(g);_.Ia.add(4),await ll(_),_.Aa.set("Unknown"),_.Ia.delete(4),await wc(_)}(this))})}),this.Aa=new DA(s,o)}}async function wc(r){if(ms(r))for(const e of r.da)await e(!0)}async function ll(r){for(const e of r.da)await e(!1)}function Nv(r,e){const t=Te(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),wf(t)?Ef(t):Vo(t).x_()&&vf(t,e))}function _f(r,e){const t=Te(r),s=Vo(t);t.Ta.delete(e),s.x_()&&xv(t,e),t.Ta.size===0&&(s.x_()?s.B_():ms(t)&&t.Aa.set("Unknown"))}function vf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(r).H_(e)}function xv(r,e){r.Ra.$e(e),Vo(r).Y_(e)}function Ef(r){r.Ra=new R1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Vo(r).start(),r.Aa.aa()}function wf(r){return ms(r)&&!Vo(r).M_()&&r.Ta.size>0}function ms(r){return Te(r).Ia.size===0}function Dv(r){r.Ra=void 0}async function OA(r){r.Aa.set("Online")}async function bA(r){r.Ta.forEach((e,t)=>{vf(r,e)})}async function LA(r,e){Dv(r),wf(r)?(r.Aa.la(e),Ef(r)):r.Aa.set("Unknown")}async function MA(r,e,t){if(r.Aa.set("Online"),e instanceof gv&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))}(r,e)}catch(s){ie(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(r,s)}else if(e instanceof zu?r.Ra.Ye(e):e instanceof mv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(we.min()))try{const s=await Rv(r.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ta.get(_);w&&u.Ta.set(_,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,_)=>{const w=u.Ta.get(g);if(!w)return;u.Ta.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),xv(u,g);const A=new ci(w.target,g,_,w.sequenceNumber);vf(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(r,t)}catch(s){ie(cs,"Failed to raise snapshot:",s),await ic(r,s)}}async function ic(r,e,t){if(!xo(e))throw e;r.Ia.add(1),await ll(r),r.Aa.set("Offline"),t||(t=()=>Rv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ie(cs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await wc(r)})}function Vv(r,e){return e().catch(t=>ic(r,t,e))}async function Tc(r){const e=Te(r),t=Ti(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nf;for(;FA(e);)try{const o=await vA(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,UA(e,o)}catch(o){await ic(e,o)}Ov(e)&&bv(e)}function FA(r){return ms(r)&&r.Pa.length<10}function UA(r,e){r.Pa.push(e);const t=Ti(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Ov(r){return ms(r)&&!Ti(r).M_()&&r.Pa.length>0}function bv(r){Ti(r).start()}async function jA(r){Ti(r).na()}async function zA(r){const e=Ti(r);for(const t of r.Pa)e.X_(t.mutations)}async function BA(r,e,t){const s=r.Pa.shift(),o=hf.from(s,e,t);await Vv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Tc(r)}async function $A(r,e){e&&Ti(r).Z_&&await async function(s,o){if(function(h){return A1(h)&&h!==$.ABORTED}(o.code)){const u=s.Pa.shift();Ti(s).N_(),await Vv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Tc(s)}}(r,e),Ov(r)&&bv(r)}async function py(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),ie(cs,"RemoteStore received new credentials");const s=ms(t);t.Ia.add(3),await ll(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await wc(t)}async function qA(r,e){const t=Te(r);e?(t.Ia.delete(2),await wc(t)):e||(t.Ia.add(2),await ll(t),t.Aa.set("Unknown"))}function Vo(r){return r.Va||(r.Va=function(t,s,o){const u=Te(t);return u.ia(),new PA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:OA.bind(null,r),e_:bA.bind(null,r),n_:LA.bind(null,r),J_:MA.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),wf(r)?Ef(r):r.Aa.set("Unknown")):(await r.Va.stop(),Dv(r))})),r.Va}function Ti(r){return r.ma||(r.ma=function(t,s,o){const u=Te(t);return u.ia(),new kA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:jA.bind(null,r),n_:$A.bind(null,r),ea:zA.bind(null,r),ta:BA.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await Tc(r)):(await r.ma.stop(),r.Pa.length>0&&(ie(cs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
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
 */class Tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Tf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(r,e){if(Dr("AsyncQueue",`${e}: ${r}`),xo(r))return new se($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=Da(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class my{constructor(){this.fa=new nt(he.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class So{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new So(e,t,yo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class HA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class WA{constructor(){this.queries=gy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=gy(),u.forEach((h,m)=>{for(const g of m.wa)g.onError(s)})})(this,new se($.ABORTED,"Firestore shutting down"))}}function gy(){return new fs(r=>nv(r),mc)}async function GA(r,e){const t=Te(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new HA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=If(h,`Initialization of query '${uo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Sf(t)}async function KA(r,e){const t=Te(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function QA(r,e){const t=Te(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Sf(t)}function XA(r,e,t){const s=Te(r),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Sf(r){r.Da.forEach(e=>{e.next()})}var Fd,yy;(yy=Fd||(Fd={})).Fa="default",yy.Cache="cache";class YA{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new So(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Fd.Cache}}/**
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
 */class Lv{constructor(e){this.key=e}}class Mv{constructor(e){this.key=e}}class JA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=rv(e),this.eu=new yo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new my,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,A)=>{const P=o.get(w),j=gc(this.query,A)?A:null,G=!!P&&this.mutatedKeys.has(P.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let W=!1;P&&j?P.data.isEqual(j.data)?G!==Y&&(s.track({type:3,doc:j}),W=!0):this.iu(P,j)||(s.track({type:2,doc:j}),W=!0,(g&&this.Xa(j,g)>0||_&&this.Xa(j,_)<0)&&(m=!0)):!P&&j?(s.track({type:0,doc:j}),W=!0):P&&!j&&(s.track({type:1,doc:P}),W=!0,(g||_)&&(m=!0)),W&&(j?(h=h.add(j),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((w,A)=>function(j,G){const Y=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:W})}};return Y(j)-Y(G)}(w.type,A.type)||this.Xa(w.doc,A.doc)),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new So(this.query,e.eu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new my,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Mv(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Lv(s))}),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return So.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Af="SyncEngine";class ZA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class eC{constructor(e){this.key=e,this.lu=!1}}class tC{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new fs(m=>nv(m),mc),this.Tu=new Map,this.Iu=new Set,this.du=new nt(he.comparator),this.Eu=new Map,this.Au=new pf,this.Ru={},this.Vu=new Map,this.mu=Io.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function nC(r,e,t=!0){const s=$v(r);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await Fv(s,e,t,!0),o}async function rC(r,e){const t=$v(r);await Fv(t,e,!0,!1)}async function Fv(r,e,t,s){const o=await EA(r.localStore,ir(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await iC(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Nv(r.remoteStore,o),m}async function iC(r,e,t,s,o){r.gu=(A,P,j)=>async function(Y,W,ge,de){let me=W.view.nu(ge);me.Ds&&(me=await uy(Y.localStore,W.query,!1).then(({documents:N})=>W.view.nu(N,me)));const Ie=de&&de.targetChanges.get(W.targetId),$e=de&&de.targetMismatches.get(W.targetId)!=null,Se=W.view.applyChanges(me,Y.isPrimaryClient,Ie,$e);return vy(Y,W.targetId,Se._u),Se.snapshot}(r,A,P,j);const u=await uy(r.localStore,e,!0),h=new JA(e,u.qs),m=h.nu(u.documents),g=al.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);vy(r,t,_._u);const w=new ZA(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function sC(r,e,t){const s=Te(r),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(h=>!mc(h,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ld(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&_f(s.remoteStore,o.targetId),Ud(s,o.targetId)}).catch(No)):(Ud(s,o.targetId),await Ld(s.localStore,o.targetId,!0))}async function oC(r,e){const t=Te(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),_f(t.remoteStore,s.targetId))}async function aC(r,e,t){const s=pC(r);try{const o=await function(h,m){const g=Te(h),_=Xe.now(),w=m.reduce((j,G)=>j.add(G.key),Ne());let A,P;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let G=Vr(),Y=Ne();return g.Os.getEntries(j,w).next(W=>{G=W,G.forEach((ge,de)=>{de.isValidDocument()||(Y=Y.add(ge))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,G)).next(W=>{A=W;const ge=[];for(const de of m){const me=E1(de,A.get(de.key).overlayedDocument);me!=null&&ge.push(new ps(de.key,me,K_(me.value.mapValue),jn.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,ge,m)}).next(W=>{P=W;const ge=W.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(j,W.batchId,ge)})}).then(()=>({batchId:P.batchId,changes:sv(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new nt(Ae)),_=_.insert(m,g),h.Ru[h.currentUser.toKey()]=_}(s,o.batchId,t),await ul(s,o.changes),await Tc(s.remoteStore)}catch(o){const u=If(o,"Failed to persist write");t.reject(u)}}async function Uv(r,e){const t=Te(r);try{const s=await yA(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?je(h.lu,14607):o.removedDocuments.size>0&&(je(h.lu,42227),h.lu=!1))}),await ul(t,s,e)}catch(s){await No(s)}}function _y(r,e,t){const s=Te(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Te(h);g.onlineState=m;let _=!1;g.queries.forEach((w,A)=>{for(const P of A.wa)P.va(m)&&(_=!0)}),_&&Sf(g)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lC(r,e,t){const s=Te(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new nt(he.comparator);h=h.insert(u,Ut.newNoDocument(u,we.min()));const m=Ne().add(u),g=new vc(we.min(),new Map,new nt(Ae),h,m);await Uv(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Cf(s)}else await Ld(s.localStore,e,!1).then(()=>Ud(s,e,t)).catch(No)}async function uC(r,e){const t=Te(r),s=e.batch.batchId;try{const o=await gA(t.localStore,e);zv(t,s,null),jv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ul(t,o)}catch(o){await No(o)}}async function cC(r,e,t){const s=Te(r);try{const o=await function(h,m){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next(A=>(je(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(_,A))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);zv(s,e,t),jv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ul(s,o)}catch(o){await No(o)}}function jv(r,e){(r.Vu.get(e)||[]).forEach(t=>{t.resolve()}),r.Vu.delete(e)}function zv(r,e,t){const s=Te(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Ud(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(s=>{r.Au.containsKey(s)||Bv(r,s)})}function Bv(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(_f(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Cf(r))}function vy(r,e,t){for(const s of t)s instanceof Lv?(r.Au.addReference(s.key,e),hC(r,s)):s instanceof Mv?(ie(Af,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Bv(r,s.key)):_e(19791,{yu:s})}function hC(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ie(Af,"New document in limbo: "+t),r.Iu.add(s),Cf(r))}function Cf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new he(Ge.fromString(e)),s=r.mu.next();r.Eu.set(s,new eC(t)),r.du=r.du.insert(t,s),Nv(r.remoteStore,new ci(ir(lf(t.path)),s,"TargetPurposeLimboResolution",dc.ue))}}async function ul(r,e,t){const s=Te(r),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach((m,g)=>{h.push(s.gu(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const A=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(_){o.push(_);const A=gf.Es(g.targetId,_);u.push(A)}}))}),await Promise.all(h),s.hu.J_(o),await async function(g,_){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>H.forEach(_,P=>H.forEach(P.Is,j=>w.persistence.referenceDelegate.addReference(A,P.targetId,j)).next(()=>H.forEach(P.ds,j=>w.persistence.referenceDelegate.removeReference(A,P.targetId,j)))))}catch(A){if(!xo(A))throw A;ie(yf,"Failed to update sequence numbers: "+A)}for(const A of _){const P=A.targetId;if(!A.fromCache){const j=w.Fs.get(P),G=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(G);w.Fs=w.Fs.insert(P,Y)}}}(s.localStore,u))}async function dC(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){ie(Af,"User change. New user:",e.toKey());const s=await Cv(t.localStore,e);t.currentUser=e,function(u,h){u.Vu.forEach(m=>{m.forEach(g=>{g.reject(new se($.CANCELLED,h))})}),u.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ul(t,s.Bs)}}function fC(r,e){const t=Te(r),s=t.Eu.get(e);if(s&&s.lu)return Ne().add(s.key);{let o=Ne();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function $v(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lC.bind(null,e),e.hu.J_=QA.bind(null,e.eventManager),e.hu.pu=XA.bind(null,e.eventManager),e}function pC(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cC.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return mA(this.persistence,new dA,e.initialUser,this.serializer)}Du(e){return new Av(mf.Vi,this.serializer)}bu(e){return new TA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class mC extends sc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){je(this.persistence.referenceDelegate instanceof rc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Y1(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new Av(s=>rc.Vi(s,t),this.serializer)}}class jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_y(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dC.bind(null,this.syncEngine),await qA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WA}()}createDatastore(e){const t=Ec(e.databaseInfo.databaseId),s=function(u){return new RA(u)}(e.databaseInfo);return function(u,h,m,g){return new xA(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new VA(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>_y(this.syncEngine,t,0),function(){return dy.C()?new dy:new IA}())}createSyncEngine(e,t){return function(o,u,h,m,g,_,w){const A=new tC(o,u,h,m,g,_);return w&&(A.fu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Te(o);ie(cs,"RemoteStore shutting down."),u.Ia.add(5),await ll(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}jd.provider={build:()=>new jd};/**
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
 */class gC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ii="FirestoreClient";class yC{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ie(Ii,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ie(Ii,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=If(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function pd(r,e){r.asyncQueue.verifyOperationInProgress(),ie(Ii,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Cv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{yi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{yi("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=e}async function Ey(r,e){r.asyncQueue.verifyOperationInProgress();const t=await _C(r);ie(Ii,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>py(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>py(e.remoteStore,o)),r._onlineComponents=e}async function _C(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(Ii,"Using user provided OfflineComponentProvider");try{await pd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await pd(r,new sc)}}else ie(Ii,"Using default OfflineComponentProvider"),await pd(r,new mC(void 0));return r._offlineComponents}async function qv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(Ii,"Using user provided OnlineComponentProvider"),await Ey(r,r._uninitializedComponentsProvider._online)):(ie(Ii,"Using default OnlineComponentProvider"),await Ey(r,new jd))),r._onlineComponents}function vC(r){return qv(r).then(e=>e.syncEngine)}async function wy(r){const e=await qv(r),t=e.eventManager;return t.onListen=nC.bind(null,e.syncEngine),t.onUnlisten=sC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oC.bind(null,e.syncEngine),t}/**
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
 */function Hv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Ty=new Map;/**
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
 */const Wv="firestore.googleapis.com",Iy=!0;class Sy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wv,this.ssl=Iy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Iy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Q1)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ic{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new SS;switch(s.type){case"firstParty":return new PS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ty.get(t);s&&(ie("ComponentProvider","Removing Datastore"),Ty.delete(t),s.terminate())}(this),Promise.resolve()}}function EC(r,e,t,s={}){var o;r=mi(r,Ic);const u=Co(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Uy(`https://${g}`),jy("Firestore",!0)),h.host!==Wv&&h.host!==g&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!ss(_,m)&&(r._setSettings(_),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Ft.MOCK_USER;else{w=b0(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ft(P)}r._authCredentials=new AS(new b_(w,A))}}/**
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
 */class gs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class dt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(sl(t,dt._jsonSchema))return new dt(e,s||null,new he(Ge.fromString(t.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:ht("string",dt._jsonSchemaVersion),referencePath:ht("string")};class gi extends gs{constructor(e,t,s){super(e,t,lf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new he(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function Gv(r,e,...t){if(r=zt(r),M_("collection","path",e),r instanceof Ic){const s=Ge.fromString(e,...t);return Lg(s),new gi(r,null,s)}{if(!(r instanceof dt||r instanceof gi))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Lg(s),new gi(r.firestore,null,s)}}function Sc(r,e,...t){if(r=zt(r),arguments.length===1&&(e=tf.newId()),M_("doc","path",e),r instanceof Ic){const s=Ge.fromString(e,...t);return bg(s),new dt(r,null,new he(s))}{if(!(r instanceof dt||r instanceof gi))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return bg(s),new dt(r.firestore,r instanceof gi?r.converter:null,new he(s))}}/**
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
 */const Ay="AsyncQueue";class Cy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Pv(this,"async_queue_retry"),this.oc=()=>{const s=fd();s&&ie(Ay,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=fd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=fd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new rs;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!xo(e))throw e;ie(Ay,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Dr("INTERNAL UNHANDLED ERROR: ",Ry(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Tf.createAndSchedule(this,e,t,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:Ry(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ry(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function Py(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Ao extends Ic{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Cy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cy(e),this._firestoreClient=void 0,await e}}}function wC(r,e){const t=typeof r=="object"?r:qy(),s=typeof r=="string"?r:Ju,o=qd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=V0("firestore");u&&EC(o,...u)}return o}function Kv(r){if(r._terminated)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||TC(r),r._firestoreClient}function TC(r){var e,t,s;const o=r._freezeSettings(),u=function(m,g,_,w){return new qS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Hv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new yC(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Dt.fromBase64String(e))}catch(t){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sl(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:ht("string",Tn._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class Rf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pf{constructor(e){this._methodName=e}}/**
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
 */class or{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:or._jsonSchemaVersion}}static fromJSON(e){if(sl(e,or._jsonSchema))return new or(e.latitude,e.longitude)}}or._jsonSchemaVersion="firestore/geoPoint/1.0",or._jsonSchema={type:ht("string",or._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class ar{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ar._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sl(e,ar._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ar(e.vectorValues);throw new se($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ar._jsonSchemaVersion="firestore/vectorValue/1.0",ar._jsonSchema={type:ht("string",ar._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const IC=/^__.*__$/;class SC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}function Qv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class kf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new kf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return oc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Qv(this.Ec)&&IC.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class AC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ec(e)}Dc(e,t,s,o=!1){return new kf({Ec:e,methodName:t,bc:s,path:xt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nf(r){const e=r._freezeSettings(),t=Ec(r._databaseId);return new AC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Xv(r,e,t,s,o,u={}){const h=r.Dc(u.merge||u.mergeFields?2:0,e,t,o);Zv("Data must be an object, but it was:",h,s);const m=Yv(s,h);let g,_;if(u.merge)g=new Un(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const P=RC(e,A,t);if(!h.contains(P))throw new se($.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);kC(w,P)||w.push(P)}g=new Un(w),_=h.fieldTransforms.filter(A=>g.covers(A.field))}else g=null,_=h.fieldTransforms;return new SC(new wn(m),g,_)}class xf extends Pf{_toFieldTransform(e){return new g1(e.path,new Xa)}isEqual(e){return e instanceof xf}}function CC(r,e,t,s=!1){return Df(t,r.Dc(s?4:3,e))}function Df(r,e){if(Jv(r=zt(r)))return Zv("Unsupported field value:",e,r),Yv(r,e);if(r instanceof Pf)return function(s,o){if(!Qv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=Df(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=zt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return f1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Xe.fromDate(s);return{timestampValue:nc(o.serializer,u)}}if(s instanceof Xe){const u=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(o.serializer,u)}}if(s instanceof or)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Tn)return{bytesValue:yv(o.serializer,s._byteString)};if(s instanceof dt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ff(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ar)return function(h,m){return{mapValue:{fields:{[W_]:{stringValue:G_},[Zu]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return uf(m.serializer,_)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${hc(s)}`)}(r,e)}function Yv(r,e){const t={};return j_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(r,(s,o)=>{const u=Df(o,e.Vc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Jv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Xe||r instanceof or||r instanceof Tn||r instanceof dt||r instanceof Pf||r instanceof ar)}function Zv(r,e,t){if(!Jv(t)||!F_(t)){const s=hc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function RC(r,e,t){if((e=zt(e))instanceof Rf)return e._internalPath;if(typeof e=="string")return eE(r,e);throw oc("Field path arguments must be of type string or ",r,!1,void 0,t)}const PC=new RegExp("[~\\*/\\[\\]]");function eE(r,e,t){if(e.search(PC)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Rf(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function oc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new se($.INVALID_ARGUMENT,m+r+g)}function kC(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class tE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ac("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NC extends tE{data(){return super.data()}}function Ac(r,e){return typeof e=="string"?eE(r,e):e instanceof Rf?e._internalPath:e._delegate._internalPath}/**
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
 */function xC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new se($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vf{}class nE extends Vf{}function DC(r,e,...t){let s=[];e instanceof Vf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof Of).length,m=u.filter(g=>g instanceof Cc).length;if(h>1||h>0&&m>0)throw new se($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Cc extends nE{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Cc(e,t,s)}_apply(e){const t=this._parse(e);return rE(e._query,t),new gs(e.firestore,e.converter,Nd(e._query,t))}_parse(e){const t=Nf(e.firestore);return function(u,h,m,g,_,w,A){let P;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){xy(A,w);const G=[];for(const Y of A)G.push(Ny(g,u,Y));P={arrayValue:{values:G}}}else P=Ny(g,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||xy(A,w),P=CC(m,h,A,w==="in"||w==="not-in");return ct.create(_,w,P)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ky(r,e,t){const s=e,o=Ac("where",r);return Cc._create(o,s,t)}class Of extends Vf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Of(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)rE(h,g),h=Nd(h,g)}(e._query,t),new gs(e.firestore,e.converter,Nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bf extends nE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bf(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(u,h)}(e._query,this._field,this._direction);return new gs(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Do(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function VC(r,e="asc"){const t=e,s=Ac("orderBy",r);return bf._create(s,t)}function Ny(r,e,t){if(typeof(t=zt(t))=="string"){if(t==="")throw new se($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tv(e)&&t.indexOf("/")!==-1)throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!he.isDocumentKey(s))throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return qg(r,new he(s))}if(t instanceof dt)return qg(r,t._key);throw new se($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(t)}.`)}function xy(r,e){if(!Array.isArray(r)||r.length===0)throw new se($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rE(r,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class OC{convertValue(e,t="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ds(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Zu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>ot(h.doubleValue));return new ar(u)}convertGeoPoint(e){return new or(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=vi(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);je(Iv(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Dr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function iE(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Oa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends tE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ac("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=is._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:ht("string",is._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Bu extends is{data(e={}){return super.data(e)}}class _o{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Oa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new Oa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:bC(m.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}_o._jsonSchemaVersion="firestore/querySnapshot/1.0",_o._jsonSchema={type:ht("string",_o._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class sE extends OC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,t)}}function LC(r,e,t){r=mi(r,dt);const s=mi(r.firestore,Ao),o=iE(r.converter,e,t);return Lf(s,[Xv(Nf(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,jn.none())])}function MC(r){return Lf(mi(r.firestore,Ao),[new cf(r._key,jn.none())])}function FC(r,e){const t=mi(r.firestore,Ao),s=Sc(r),o=iE(r.converter,e);return Lf(t,[Xv(Nf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,jn.exists(!1))]).then(()=>s)}function oE(r,...e){var t,s,o;r=zt(r);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Py(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Py(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,_,w;if(r instanceof dt)_=mi(r.firestore,Ao),w=lf(r._key.path),g={next:A=>{e[h]&&e[h](UC(_,r,A))},error:e[h+1],complete:e[h+2]};else{const A=mi(r,gs);_=mi(A.firestore,Ao),w=A._query;const P=new sE(_);g={next:j=>{e[h]&&e[h](new _o(_,P,A,j))},error:e[h+1],complete:e[h+2]},xC(r._query)}return function(P,j,G,Y){const W=new gC(Y),ge=new YA(j,W,G);return P.asyncQueue.enqueueAndForget(async()=>GA(await wy(P),ge)),()=>{W.Ou(),P.asyncQueue.enqueueAndForget(async()=>KA(await wy(P),ge))}}(Kv(_),w,m,g)}function Lf(r,e){return function(s,o){const u=new rs;return s.asyncQueue.enqueueAndForget(async()=>aC(await vC(s),o,u)),u.promise}(Kv(r),e)}function UC(r,e,t){const s=t.docs.get(e._key),o=new sE(r);return new is(r,o,e._key,s,new Oa(t.hasPendingWrites,t.fromCache),e.converter)}function aE(){return new xf("serverTimestamp")}(function(e,t=!0){(function(o){ko=o})(Ro),vo(new os("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ao(new CS(s.getProvider("auth-internal")),new kS(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(_.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),fi(Ng,xg,e),fi(Ng,xg,"esm2017")})();const jC={apiKey:"AIzaSyAVmyc6PDfrVNvNLCjpJ5Q6mgf_OtABCjk",authDomain:"new-budget-buddy.firebaseapp.com",projectId:"new-budget-buddy",storageBucket:"new-budget-buddy.firebasestorage.app",messagingSenderId:"158961105774",appId:"1:158961105774:web:abc0595f893b2715d59f7f"},lE=$y(jC),ba=ES(lE),cl=wC(lE),uE=Fe.createContext({}),cE=()=>Fe.useContext(uE),zC=({children:r})=>{const[e,t]=Fe.useState(null),[s,o]=Fe.useState(!0),u=(_,w)=>sI(ba,_,w),h=(_,w)=>oI(ba,_,w),m=()=>uI(ba);Fe.useEffect(()=>y_(ba,w=>{t(w),o(!1)}),[]);const g={currentUser:e,signup:u,login:h,logout:m};return z.jsx(uE.Provider,{value:g,children:!s&&r})};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hE=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=Fe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>Fe.createElement("svg",{ref:g,...$C,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:hE("lucide",o),...m},[...h.map(([_,w])=>Fe.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=(r,e)=>{const t=Fe.forwardRef(({className:s,...o},u)=>Fe.createElement(qC,{ref:u,iconNode:e,className:hE(`lucide-${BC(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=ur("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=ur("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=ur("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=ur("Delete",[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=ur("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=ur("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=ur("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=ur("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=ur("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=ur("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),tR=()=>{const[r,e]=Fe.useState(!1),[t,s]=Fe.useState(""),[o,u]=Fe.useState(""),[h,m]=Fe.useState(""),[g,_]=Fe.useState(!1),{signup:w,login:A}=cE(),P=async j=>{if(j.preventDefault(),!t||!o){m("Please fill in all fields");return}if(o.length<6){m("Password must be at least 6 characters");return}m(""),_(!0);try{r?await w(t,o):await A(t,o)}catch(G){console.error("Auth error:",G),G.code==="auth/email-already-in-use"?m("Email already in use"):G.code==="auth/weak-password"?m("Password is too weak"):G.code==="auth/invalid-email"?m("Invalid email address"):G.code==="auth/user-not-found"?m("No account found with this email"):G.code==="auth/wrong-password"?m("Incorrect password"):G.code==="auth/invalid-credential"?m("Invalid email or password"):m("Failed to "+(r?"create account":"log in"))}finally{_(!1)}};return z.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4",children:z.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-full max-w-md",children:[z.jsxs("div",{className:"text-center mb-8",children:[z.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4",children:z.jsx(GC,{className:"w-8 h-8 text-blue-600"})}),z.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Credit Card Tracker"}),z.jsx("p",{className:"text-gray-600 mt-2",children:r?"Create your account":"Sign in to your account"})]}),z.jsxs("form",{onSubmit:P,className:"space-y-4",children:[h&&z.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2",children:[z.jsx(WC,{className:"w-5 h-5"}),z.jsx("span",{className:"text-sm",children:h})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),z.jsx("input",{type:"email",value:t,onChange:j=>s(j.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"you@example.com",required:!0})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),z.jsx("input",{type:"password",value:o,onChange:j=>u(j.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"At least 6 characters",required:!0})]}),z.jsx("button",{type:"submit",disabled:g,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",children:g?"Loading...":r?"Create Account":"Sign In"})]}),z.jsx("div",{className:"mt-6 text-center",children:z.jsxs("p",{className:"text-sm text-gray-600",children:[r?"Already have an account?":"Don't have an account?"," ",z.jsx("button",{onClick:()=>{e(!r),m("")},className:"text-blue-600 hover:text-blue-700 font-medium",children:r?"Sign In":"Sign Up"})]})})]})})},Mf="expenses",nR=async(r,e)=>{try{return(await FC(Gv(cl,Mf),{...e,userId:r,createdAt:aE(),date:new Date(e.date)})).id}catch(t){throw console.error("Error adding expense:",t),t}},rR=(r,e,t)=>{const s=new Date(e),o=DC(Gv(cl,Mf),ky("userId","==",r),ky("date",">=",s),VC("date","desc"));return oE(o,u=>{const h=[];u.forEach(m=>{h.push({id:m.id,...m.data(),date:m.data().date.toDate().toISOString()})}),t(h)})},iR=async r=>{try{await MC(Sc(cl,Mf,r))}catch(e){throw console.error("Error deleting expense:",e),e}},dE="userSettings",Dy=async(r,e)=>{try{const t=Sc(cl,dE,r);await LC(t,{...e,userId:r,updatedAt:aE()},{merge:!0})}catch(t){throw console.error("Error saving user settings:",t),t}},sR=(r,e)=>{const t=Sc(cl,dE,r);return oE(t,s=>{s.exists()?e(s.data()):e({monthlyBudget:2e3,billingCycleStart:new Date().toISOString().split("T")[0]})})},oR=()=>{const{currentUser:r,logout:e}=cE(),[t,s]=Fe.useState([]),[o,u]=Fe.useState(""),[h,m]=Fe.useState(""),[g,_]=Fe.useState(""),[w,A]=Fe.useState(new Date().toISOString().split("T")[0]),[P,j]=Fe.useState(2e3),[G,Y]=Fe.useState(!1),[W,ge]=Fe.useState(!1),[de,me]=Fe.useState(!1),[Ie,$e]=Fe.useState(!1);Fe.useEffect(()=>{if(!r)return;const B=sR(r.uid,Z=>{Z.monthlyBudget&&j(Z.monthlyBudget),Z.billingCycleStart&&A(Z.billingCycleStart)});return()=>B()},[r]),Fe.useEffect(()=>{if(!r)return;const B=rR(r.uid,w,Z=>{s(Z)});return()=>B()},[r,w]);const Se=[{id:"food",name:"Food",emoji:"🍔",color:"bg-orange-500"},{id:"transport",name:"Transport",emoji:"🚗",color:"bg-blue-500"},{id:"shopping",name:"Shopping",emoji:"🛍️",color:"bg-pink-500"},{id:"bills",name:"Bills",emoji:"📄",color:"bg-gray-500"},{id:"fun",name:"Fun",emoji:"🎬",color:"bg-purple-500"},{id:"other",name:"Other",emoji:"📦",color:"bg-brown-500"}],N=t.reduce((B,Z)=>B+Z.amount,0),I=Math.max(1,Math.floor((new Date-new Date(w))/(1e3*60*60*24))),C=N/I,k=P-N,D=N/P*100,O=Se.map(B=>{const Z=t.filter(Ee=>Ee.category===B.id).reduce((Ee,Ce)=>Ee+Ce.amount,0);return{...B,total:Z,percentage:N>0?Z/N*100:0}}),S=B=>{if(B==="clear")u("");else if(B==="delete")u(o.slice(0,-1));else if(B===".")o.includes(".")||u(o+".");else{const Z=o.split(".");if(Z.length===2&&Z[1].length>=2)return;u(o+B)}},Ze=async()=>{if(!(!o||parseFloat(o)===0||!h||!r)){me(!0);try{await nR(r.uid,{amount:parseFloat(o),category:h,description:g,date:new Date().toISOString()}),u(""),_(""),m(""),ge(!1)}catch(B){console.error("Error adding expense:",B),alert("Failed to add expense. Please try again.")}finally{me(!1)}}},vt=async()=>{if(confirm("Are you sure you want to reset the billing cycle? This will start a new cycle from today.")){const B=new Date().toISOString().split("T")[0];if(A(B),r)try{await Dy(r.uid,{billingCycleStart:B,monthlyBudget:P})}catch(Z){console.error("Error saving settings:",Z)}}},Et=async B=>{if(confirm("Are you sure you want to delete this expense?"))try{await iR(B)}catch(Z){console.error("Error deleting expense:",Z),alert("Failed to delete expense. Please try again.")}},Ue=async()=>{if(r){$e(!0);try{await Dy(r.uid,{monthlyBudget:P,billingCycleStart:w}),Y(!1)}catch(B){console.error("Error saving budget:",B),alert("Failed to save budget. Please try again.")}finally{$e(!1)}}},te=async()=>{try{await e()}catch(B){console.error("Error logging out:",B)}},ue=B=>`$${B.toFixed(2)}`,ne=B=>new Date(B).toLocaleDateString("en-US",{month:"short",day:"numeric"}),V=()=>{if(t.length===0){alert("No expenses to export");return}const B=["Date","Category","Amount","Description"],Z=t.map(Me=>{const Bt=Se.find($n=>$n.id===Me.category);return[new Date(Me.date).toLocaleDateString("en-US"),(Bt==null?void 0:Bt.name)||Me.category,Me.amount.toFixed(2),Me.description||""]});Z.push([]),Z.push(["Summary"]),Z.push(["Total Spent","",N.toFixed(2)]),Z.push(["Daily Average","",C.toFixed(2)]),Z.push(["Days in Cycle","",I]),Z.push(["Budget","",P.toFixed(2)]),Z.push(["Remaining","",k.toFixed(2)]),Z.push([]),Z.push(["Category Breakdown"]),O.forEach(Me=>{Me.total>0&&Z.push([Me.name,"",Me.total.toFixed(2),`${Me.percentage.toFixed(1)}%`])});const Ee=[B.join(","),...Z.map(Me=>Me.map(Bt=>`"${Bt}"`).join(","))].join(`
`),Ce=new Blob([Ee],{type:"text/csv"}),De=window.URL.createObjectURL(Ce),Pe=document.createElement("a");Pe.href=De;const Be=`credit-card-expenses-${new Date().toISOString().split("T")[0]}.csv`;Pe.download=Be,document.body.appendChild(Pe),Pe.click(),document.body.removeChild(Pe),window.URL.revokeObjectURL(De)},q=()=>{const B=["1","2","3","4","5","6","7","8","9",".","0","delete"];return z.jsxs("div",{className:"grid grid-cols-3 gap-2 mt-4",children:[B.map(Z=>z.jsx("button",{onClick:()=>S(Z),className:`p-4 text-xl font-semibold rounded-lg transition-all ${Z==="delete"?"bg-red-100 hover:bg-red-200 text-red-600":"bg-gray-100 hover:bg-gray-200"}`,children:Z==="delete"?z.jsx(KC,{className:"w-6 h-6 mx-auto"}):Z},Z)),z.jsx("button",{onClick:()=>S("clear"),className:"col-span-3 p-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold",children:"Clear"})]})};return z.jsxs("div",{className:"min-h-screen bg-gray-50 pb-20",children:[z.jsxs("div",{className:"max-w-4xl mx-auto p-4",children:[z.jsxs("div",{className:"flex justify-between items-center mb-6",children:[z.jsx("h1",{className:"text-3xl font-bold",children:"Credit Card Tracker"}),z.jsxs("button",{onClick:te,className:"flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800",children:[z.jsx(YC,{className:"w-4 h-4"}),"Logout"]})]}),z.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-6",children:[z.jsxs("div",{className:"flex justify-between items-start mb-4",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm opacity-90",children:"Total Spent"}),z.jsx("p",{className:"text-4xl font-bold",children:ue(N)})]}),z.jsxs("button",{onClick:()=>Y(!0),className:"bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm",children:["Budget: ",ue(P)]})]}),z.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-4",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-xs opacity-75",children:"Since"}),z.jsx("p",{className:"font-semibold",children:ne(w)})]}),z.jsxs("div",{children:[z.jsx("p",{className:"text-xs opacity-75",children:"Days"}),z.jsx("p",{className:"font-semibold",children:I})]}),z.jsxs("div",{children:[z.jsx("p",{className:"text-xs opacity-75",children:"Daily Avg"}),z.jsx("p",{className:"font-semibold",children:ue(C)})]})]}),z.jsxs("div",{className:"mt-4",children:[z.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[z.jsx("span",{children:"Budget Used"}),z.jsxs("span",{children:[D.toFixed(0),"%"]})]}),z.jsx("div",{className:"w-full bg-white/30 rounded-full h-2",children:z.jsx("div",{className:`h-2 rounded-full transition-all ${D>90?"bg-red-400":D>70?"bg-yellow-400":"bg-green-400"}`,style:{width:`${Math.min(D,100)}%`}})}),z.jsx("p",{className:"text-xs mt-1 opacity-75",children:k>=0?`${ue(k)} remaining`:`${ue(Math.abs(k))} over budget`})]})]}),z.jsxs("div",{className:"bg-white rounded-2xl p-6 mb-6 shadow-sm",children:[z.jsxs("h2",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[z.jsx(HC,{className:"w-5 h-5"}),"Spending by Category"]}),z.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:O.map(B=>z.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[z.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[z.jsx("span",{className:"text-xl",children:B.emoji}),z.jsx("span",{className:"text-sm font-medium",children:B.name})]}),z.jsx("p",{className:"text-lg font-semibold",children:ue(B.total)}),z.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1 mt-1",children:z.jsx("div",{className:`h-1 rounded-full ${B.color}`,style:{width:`${B.percentage}%`}})})]},B.id))})]}),z.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm mb-20",children:[z.jsxs("div",{className:"flex justify-between items-center mb-4",children:[z.jsx("h2",{className:"text-lg font-semibold",children:"Recent Expenses"}),z.jsxs("div",{className:"flex gap-2",children:[z.jsxs("button",{onClick:V,className:"flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700",children:[z.jsx(XC,{className:"w-4 h-4"}),"Export CSV"]}),z.jsxs("button",{onClick:vt,className:"flex items-center gap-2 text-sm text-red-600 hover:text-red-700",children:[z.jsx(JC,{className:"w-4 h-4"}),"Reset Cycle"]})]})]}),t.length===0?z.jsx("p",{className:"text-gray-500 text-center py-8",children:"No expenses yet this billing cycle"}):z.jsx("div",{className:"space-y-2",children:t.map(B=>{const Z=Se.find(Ee=>Ee.id===B.category);return z.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg group",children:[z.jsxs("div",{className:"flex items-center gap-3",children:[z.jsx("span",{className:"text-2xl",children:Z==null?void 0:Z.emoji}),z.jsxs("div",{children:[z.jsx("p",{className:"font-medium",children:Z==null?void 0:Z.name}),B.description&&z.jsx("p",{className:"text-sm text-gray-600",children:B.description}),z.jsx("p",{className:"text-xs text-gray-500",children:ne(B.date)})]})]}),z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("p",{className:"font-semibold text-lg",children:ue(B.amount)}),z.jsx("button",{onClick:()=>Et(B.id),className:"opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-all",children:z.jsx(ZC,{className:"w-4 h-4 text-red-600"})})]})]},B.id)})})]})]}),z.jsx("button",{onClick:()=>ge(!0),className:"fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-all",children:z.jsx(QC,{className:"w-6 h-6"})}),W&&z.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-end justify-center z-50",children:z.jsxs("div",{className:"bg-white rounded-t-3xl p-6 w-full max-w-lg animate-slide-up",children:[z.jsxs("div",{className:"flex justify-between items-center mb-4",children:[z.jsx("h3",{className:"text-xl font-semibold",children:"Add Expense"}),z.jsx("button",{onClick:()=>{ge(!1),u(""),m(""),_("")},className:"p-2 hover:bg-gray-100 rounded-lg",children:z.jsx(eR,{className:"w-5 h-5"})})]}),z.jsx("div",{className:"bg-gray-100 rounded-xl p-4 mb-4 text-center",children:z.jsxs("p",{className:"text-4xl font-bold",children:["$",o||"0.00"]})}),z.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:Se.map(B=>z.jsxs("button",{onClick:()=>m(B.id),className:`p-3 rounded-lg border-2 transition-all ${h===B.id?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[z.jsx("div",{className:"text-2xl mb-1",children:B.emoji}),z.jsx("div",{className:"text-xs",children:B.name})]},B.id))}),z.jsx("input",{type:"text",value:g,onChange:B=>_(B.target.value),placeholder:"Description (optional)",className:"w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),z.jsx(q,{}),z.jsx("button",{onClick:Ze,disabled:!o||parseFloat(o)===0||!h||de,className:"w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mt-4",children:de?"Adding...":"Add Expense"})]})}),G&&z.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:z.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[z.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Set Monthly Budget"}),z.jsxs("div",{className:"relative mb-4",children:[z.jsx("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl",children:"$"}),z.jsx("input",{type:"number",value:P,onChange:B=>j(parseFloat(B.target.value)||0),className:"w-full pl-10 pr-4 py-3 text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",step:"100"})]}),z.jsxs("div",{className:"flex gap-3",children:[z.jsx("button",{onClick:()=>Y(!1),className:"flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",children:"Cancel"}),z.jsx("button",{onClick:Ue,disabled:Ie,className:"flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed",children:Ie?"Saving...":"Save"})]})]})})]})};function aR(){const[r,e]=Fe.useState(null),[t,s]=Fe.useState(!0);return Fe.useEffect(()=>y_(ba,u=>{e(u),s(!1)}),[]),t?z.jsx("div",{className:"min-h-screen flex items-center justify-center",children:z.jsx("div",{className:"text-2xl",children:"Loading..."})}):z.jsx(zC,{children:r?z.jsx(oR,{}):z.jsx(tR,{})})}S0.createRoot(document.getElementById("root")).render(z.jsx(Fe.StrictMode,{children:z.jsx(aR,{})}));
