var Nt=Object.defineProperty,Ft=Object.defineProperties;var Ut=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var Tt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable;var tt=(r,t,e)=>t in r?Nt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,et=(r,t)=>{for(var e in t||(t={}))Tt.call(t,e)&&tt(r,e,t[e]);if(X)for(var e of X(t))Ht.call(t,e)&&tt(r,e,t[e]);return r},it=(r,t)=>Ft(r,Ut(t));const jt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};jt();var At={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(r){(function(){var t={}.hasOwnProperty;function e(){for(var o=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var n=typeof s;if(n==="string"||n==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var h=e.apply(null,s);h&&o.push(h)}}else if(n==="object")if(s.toString===Object.prototype.toString)for(var a in s)t.call(s,a)&&s[a]&&o.push(a);else o.push(s.toString())}}return o.join(" ")}r.exports?(e.default=e,r.exports=e):window.classNames=e})()})(At);var _=At.exports;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),ot=new Map;class Ct{constructor(t,e){if(this._$cssResult$=!0,e!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ot.get(this.cssText);return Z&&t===void 0&&(ot.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Mt=r=>new Ct(typeof r=="string"?r:r+"",G),m=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new Ct(e,G)},Rt=(r,t)=>{Z?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),i=window.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)})},rt=Z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Mt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const st=window.trustedTypes,zt=st?st.emptyScript:"",nt=window.reactiveElementPolyfillSupport,q={toAttribute(r,t){switch(t){case Boolean:r=r?zt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Et=(r,t)=>t!==r&&(t==t||r==r),z={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Et};class $ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Eh(o,e);i!==void 0&&(this._$Eu.set(i,o),t.push(i))}),t}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(rt(i))}else t!==void 0&&e.push(rt(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Rt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=z){var i,s;const n=this.constructor._$Eh(t,o);if(n!==void 0&&o.reflect===!0){const h=((s=(i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&s!==void 0?s:q.toAttribute)(e,o.type);this._$Ei=t,h==null?this.removeAttribute(n):this.setAttribute(n,h),this._$Ei=null}}_$AK(t,e){var o,i,s;const n=this.constructor,h=n._$Eu.get(t);if(h!==void 0&&this._$Ei!==h){const a=n.getPropertyOptions(h),l=a.converter,g=(s=(i=(o=l)===null||o===void 0?void 0:o.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&s!==void 0?s:q.fromAttribute;this._$Ei=h,this[h]=g(e,a.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Et)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,s)=>this[s]=i),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$ES(o,this[o],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},nt==null||nt({ReactiveElement:$}),((R=globalThis.reactiveElementVersions)!==null&&R!==void 0?R:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const C=globalThis.trustedTypes,at=C?C.createPolicy("lit-html",{createHTML:r=>r}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,Pt="?"+w,Lt=`<${Pt}>`,E=document,x=(r="")=>E.createComment(r),k=r=>r===null||typeof r!="object"&&typeof r!="function",St=Array.isArray,It=r=>{var t;return St(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,y=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,dt=/'/g,pt=/"/g,Ot=/^(?:script|style|textarea|title)$/i,Bt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=Bt(1),P=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ct=new WeakMap,Vt=(r,t,e)=>{var o,i;const s=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const h=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new N(t.insertBefore(x(),h),h,void 0,e!=null?e:{})}return n._$AI(r),n},A=E.createTreeWalker(E,129,null,!1),Wt=(r,t)=>{const e=r.length-1,o=[];let i,s=t===2?"<svg>":"",n=O;for(let a=0;a<e;a++){const l=r[a];let g,d,c=-1,b=0;for(;b<l.length&&(n.lastIndex=b,d=n.exec(l),d!==null);)b=n.lastIndex,n===O?d[1]==="!--"?n=lt:d[1]!==void 0?n=ht:d[2]!==void 0?(Ot.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=i!=null?i:O,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,g=d[1],n=d[3]===void 0?y:d[3]==='"'?pt:dt):n===pt||n===dt?n=y:n===lt||n===ht?n=O:(n=y,i=void 0);const U=n===y&&r[a+1].startsWith("/>")?" ":"";s+=n===O?l+Lt:c>=0?(o.push(g),l.slice(0,c)+"$lit$"+l.slice(c)+w+U):l+w+(c===-2?(o.push(void 0),a):U)}const h=s+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[at!==void 0?at.createHTML(h):h,o]};class D{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,g]=Wt(t,e);if(this.el=D.createElement(l,o),A.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(i=A.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(w)){const b=g[n++];if(d.push(c),b!==void 0){const U=i.getAttribute(b.toLowerCase()+"$lit$").split(w),T=/([.?@])?(.*)/.exec(b);a.push({type:1,index:s,name:T[2],strings:U,ctor:T[1]==="."?Kt:T[1]==="?"?Jt:T[1]==="@"?Zt:j})}else a.push({type:6,index:s})}for(const c of d)i.removeAttribute(c)}if(Ot.test(i.tagName)){const d=i.textContent.split(w),c=d.length-1;if(c>0){i.textContent=C?C.emptyScript:"";for(let b=0;b<c;b++)i.append(d[b],x()),A.nextNode(),a.push({type:2,index:++s});i.append(d[c],x())}}}else if(i.nodeType===8)if(i.data===Pt)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(w,d+1))!==-1;)a.push({type:7,index:s}),d+=w.length-1}s++}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function S(r,t,e=r,o){var i,s,n,h;if(t===P)return t;let a=o!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[o]:e._$Cu;const l=k(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,o)),o!==void 0?((n=(h=e)._$Cl)!==null&&n!==void 0?n:h._$Cl=[])[o]=a:e._$Cu=a),a!==void 0&&(t=S(r,a._$AS(r,t.values),a,o)),t}class qt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(o,!0);A.currentNode=s;let n=A.nextNode(),h=0,a=0,l=i[0];for(;l!==void 0;){if(h===l.index){let g;l.type===2?g=new N(n,n.nextSibling,this,t):l.type===1?g=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(g=new Gt(n,this,t)),this.v.push(g),l=i[++a]}h!==(l==null?void 0:l.index)&&(n=A.nextNode(),h++)}return s}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class N{constructor(t,e,o,i){var s;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),k(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==P&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):It(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&k(this._$AH)?this._$AA.nextSibling.data=t:this.k(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=D.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.m(o);else{const n=new qt(s,this),h=n.p(this.options);n.m(o),this.k(h),this._$AH=n}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new D(t)),e}S(t){St(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new N(this.M(x()),this.M(x()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class j{constructor(t,e,o,i,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const s=this.strings;let n=!1;if(s===void 0)t=S(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=S(this,h[o+a],e,a),l===P&&(l=this._$AH[a]),n||(n=!k(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l!=null?l:"")+s[a+1]),this._$AH[a]=l}n&&!i&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Kt extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const Yt=C?C.emptyScript:"";class Jt extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,Yt):this.element.removeAttribute(this.name)}}class Zt extends j{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){var o;if((t=(o=S(this,t,e,0))!==null&&o!==void 0?o:u)===P)return;const i=this._$AH,s=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Gt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const ut=window.litHtmlPolyfillSupport;ut==null||ut(D,N),((L=globalThis.litHtmlVersions)!==null&&L!==void 0?L:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I,B;class f extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return P}}f.finalized=!0,f._$litElement$=!0,(I=globalThis.litElementHydrateSupport)===null||I===void 0||I.call(globalThis,{LitElement:f});const ft=globalThis.litElementPolyfillSupport;ft==null||ft({LitElement:f});((B=globalThis.litElementVersions)!==null&&B!==void 0?B:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(r,t):((e,o)=>{const{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){window.customElements.define(e,n)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?it(et({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function F(r){return(t,e)=>e!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(r,t,e):Qt(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;((V=window.HTMLSlotElement)===null||V===void 0?void 0:V.prototype.assignedElements)!=null;const M=m`:host {
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
}`;var Xt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,Q=(r,t,e,o)=>{for(var i=o>1?void 0:o?te(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Xt(t,e,i),i};let H=class extends f{constructor(){super(...arguments),this.hasColorChange=!1,this.hasSun=!1}render(){return p`
        ${this.hasSun?p`<weather-parts-sun></weather-parts-sun>`:null}
        <weather-parts-cloud class="${_(this.hasColorChange&&"color-change",!this.hasSun&&"no-sun")}">
          <slot></slot>
        </weather-parts-cloud>
          `}static get styles(){return[M,m`
        weather-parts-cloud{
            width: 40%;
            height: 40%;
            top: 27.5%;
            left: 25%;
        }
        .no-sun { left: 30%; }
        weather-parts-sun
        {
            position: absolute;
            width: 42%;
            height: 42%;
            top: 10%;
            left: unset;
            right: 15%;
        }`]}};Q([F({type:Boolean,attribute:"color-change"})],H.prototype,"hasColorChange",2);Q([F({type:Boolean,attribute:"sun"})],H.prototype,"hasSun",2);H=Q([v("weather-cloud")],H);var ee=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,oe=(r,t,e,o)=>{for(var i=o>1?void 0:o?ie(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ee(t,e,i),i};let gt=class extends f{render(){return p`
<div class="mist">
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
</div>`}static get styles(){return[M,m`
.mist {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.mist-line:nth-of-type(1) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 40%;
    top: 16%;
    right: 25%;
}

.mist-line:nth-of-type(2) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 40%;
    top: 31%;
    left: 20%;
}

.mist-line:nth-of-type(3) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 50%;
    top: 46%;
    left: 25%;
}

.mist-line:nth-of-type(4) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 40%;
    top: 61%;
    right: 20%;
}

.mist-line:nth-of-type(5) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 50%;
    top: 76%;
    left: 25%;
}`]}};gt=oe([v("weather-mist")],gt);var re=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ne=(r,t,e,o)=>{for(var i=o>1?void 0:o?se(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&re(t,e,i),i};let mt=class extends f{render(){return p`
          <div class="cloud"></div>
          <slot></slot>
          `}static get styles(){return m`
        :host(.color-change) { animation: cloudColorChange 3s linear infinite; }
        :host {
    position: absolute;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

@keyframes cloudColorChange {
0%, 100% { background: #fffafa; }
50% { background: #a3a3a3; }
}

.cloud {
    position: absolute;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
    z-index:2;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background: inherit;
}

.cloud:before, .cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    background: inherit;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}
.cloud:after {
    right: -50%;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}
`}};mt=ne([v("weather-parts-cloud")],mt);var ae=Object.defineProperty,le=Object.getOwnPropertyDescriptor,he=(r,t,e,o)=>{for(var i=o>1?void 0:o?le(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ae(t,e,i),i};let bt=class extends f{render(){return p`<div class="lightning"></div>`}static get styles(){return m`
:host {
  position: absolute;
  width: 140%;
  height: 100%;
  left: -20%;
  top: 80%;
  z-index: 1;
  overflow: hidden;
}
.lightning {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: lightningFlash 2s linear infinite;
}

@keyframes lightningFlash {
    0%,
    39% {
        opacity: 0;
    }
    40%,
    60% {
        opacity: 1;
    }
    61%,
    100% {
        opacity: 0;
    }
}

.lightning:before, .lightning:after {
    content: "";
    position: absolute;
    width: 10%;
    height: 50%;
    left: 47%;
    top: 5%;
    transform: rotate(20deg);
    background: #fcd422;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.lightning:after {
    right: 47%;
    bottom: 5%;
    top: unset;
    left: unset;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}`}};bt=he([v("weather-parts-lightning")],bt);var de=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,ce=(r,t,e,o)=>{for(var i=o>1?void 0:o?pe(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&de(t,e,i),i};const ue=p`${new Array(10).fill(p`<div class="drop"></div>`)}`;let vt=class extends f{render(){return ue}static get styles(){return m`
:host {
    position: absolute;
    width: 140%;
    height: 100%;
    left: -20%;
    top: 80%;
    z-index: 1;
    overflow: hidden;
}

.drop:nth-of-type(1) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 1s linear infinite;
    left: 10%;
}

.drop:nth-of-type(2) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s linear infinite;
    left: 28.5%;
}

.drop:nth-of-type(3) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 1s linear infinite;
    left: 47%;
}

.drop:nth-of-type(4) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s linear infinite;
    right: 28.5%;
}

.drop:nth-of-type(5) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 1s linear infinite;
    right: 10%;
}

.drop:nth-of-type(6) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 2s linear infinite;
    left: 28.5%;
}

.drop:nth-of-type(7) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 2s linear infinite;
    right: 28.5%;
}

.drop:nth-of-type(8) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 3s linear infinite;
    left: 10%;
}

.drop:nth-of-type(9) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 3s linear infinite;
    left: 47%;
}

.drop:nth-of-type(10) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 3s linear infinite;
    right: 10%;
}

@keyframes rainDropFall {
    15% {
        opacity: 1;
    }

    75% {
        opacity: 0;
    }

    100% {
        top: 120%;
        opacity: 0;
    }
}
`}};vt=ce([v("weather-parts-rain")],vt);var fe=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,me=(r,t,e,o)=>{for(var i=o>1?void 0:o?ge(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&fe(t,e,i),i};const be=p`${new Array(10).fill(p`<div class="flake">${new Array(6).fill(p`<div class="flake-part"></div>`)}</div>`)}`;let wt=class extends f{render(){return be}static get styles(){return[m`
:host {
    position: absolute;
    width: 140%;
    height: 100%;
    left: -20%;
    top: 80%;
    z-index: 1;
    overflow: hidden;
}

.flake {
    position: absolute;
    width: 15%;
    height: 20%;
    top: -20%;
}

@keyframes snowFlakeFall {
    15% {
        opacity: 1;
    }

    75% {
        opacity: 0;
    }

    100% {
        top: 120%;
        opacity: 0;
    }
}

.flake-part:nth-of-type(1) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
}

.flake-part:nth-of-type(1):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(1):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(2) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(60deg);
}

.flake-part:nth-of-type(2):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(2):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(3) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(120deg);
}

.flake-part:nth-of-type(3):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(3):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(4) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(180deg);
}

.flake-part:nth-of-type(4):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(4):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(5) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(240deg);
}

.flake-part:nth-of-type(5):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(5):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(6) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(300deg);
}

.flake-part:nth-of-type(6):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(6):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake:nth-of-type(1) {
    animation: snowFlakeFall 4s 1s linear infinite;
    left: 10%;
}

.flake:nth-of-type(2) {
    animation: snowFlakeFall 4s linear infinite;
    left: 28.5%;
}

.flake:nth-of-type(3) {
    animation: snowFlakeFall 4s 1s linear infinite;
    left: 47%;
}

.flake:nth-of-type(4) {
    animation: snowFlakeFall 4s linear infinite;
    right: 28.5%;
}

.flake:nth-of-type(5) {
    animation: snowFlakeFall 4s 1s linear infinite;
    right: 10%;
}

.flake:nth-of-type(6) {
    animation: snowFlakeFall 4s 2s linear infinite;
    left: 28.5%;
}

.flake:nth-of-type(7) {
    animation: snowFlakeFall 4s 2s linear infinite;
    right: 28.5%;
}

.flake:nth-of-type(8) {
    animation: snowFlakeFall 4s 3s linear infinite;
    left: 10%;
}

.flake:nth-of-type(9) {
    animation: snowFlakeFall 4s 3s linear infinite;
    left: 47%;
}

.flake:nth-of-type(10) {
    animation: snowFlakeFall 4s 3s linear infinite;
    right: 10%;
}
`]}};wt=me([v("weather-parts-snow")],wt);var ve=Object.defineProperty,we=Object.getOwnPropertyDescriptor,ye=(r,t,e,o)=>{for(var i=o>1?void 0:o?we(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ve(t,e,i),i};const $e=p`${new Array(8).fill(p`<div class="beam"></div>`)}`;let yt=class extends f{render(){return $e}static get styles(){return m`
        :host {
    position: relative;
    background: radial-gradient(#fdac49, #fcd422);
    border-radius: 50%;
    animation: spinSun 20s linear infinite;
}

:host:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background: inherit;
    border-radius: 50%;
}

@keyframes spinSun {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.beam:nth-child(even):before, .beam:nth-child(even):after {
    background: #fdac49;
}

.beam:nth-child(odd):before, .beam:nth-child(odd):after {
    background: #fcd422;
}

.beam:nth-of-type(1) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
}

.beam:nth-of-type(1):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(1):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(2) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(22.5deg);
}

.beam:nth-of-type(2):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(2):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(3) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(45deg);
}

.beam:nth-of-type(3):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(3):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(4) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(67.5deg);
}

.beam:nth-of-type(4):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(4):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(5) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(90deg);
}

.beam:nth-of-type(5):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(5):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(6) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(112.5deg);
}

.beam:nth-of-type(6):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(6):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(7) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(135deg);
}

.beam:nth-of-type(7):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(7):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(8) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(157.5deg);
}

.beam:nth-of-type(8):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(8):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}
`}};yt=ye([v("weather-parts-sun")],yt);var _e=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Ce=(r,t,e,o)=>{for(var i=o>1?void 0:o?Ae(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&_e(t,e,i),i};let $t=class extends f{render(){return p`<weather-parts-sun></weather-parts-sun>`}static get styles(){return m`
:host {
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

        weather-parts-sun {
    position: absolute;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
}`}};$t=Ce([v("weather-sun")],$t);var Ee=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,xt=(r,t,e,o)=>{for(var i=o>1?void 0:o?Pe(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ee(t,e,i),i};let K=class extends f{constructor(){super(...arguments),this.hasColorChange=!1}render(){return p`
        <weather-parts-cloud class="${_(this.hasColorChange&&"color-change")}">
          <slot name="1"></slot>
        </weather-parts-cloud>
        <weather-parts-cloud class="${_(this.hasColorChange&&"color-change")}">
          <slot name="2"></slot>
        </weather-parts-cloud>
        <weather-parts-cloud class="${_(this.hasColorChange&&"color-change")}">
          <slot name="3"></slot>
        </weather-parts-cloud>
          `}static get styles(){return[M,m`
weather-parts-cloud:nth-of-type(1) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 25%;
}

weather-parts-cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 35%;
    right: 20%;
    left:unset;
    animation-delay: 1s;
}

weather-parts-cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
    animation-delay: 2s;
}
`]}};xt([F({type:Boolean,attribute:"color-change"})],K.prototype,"hasColorChange",2);K=xt([v("weather-three-clouds")],K);var Se=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,kt=(r,t,e,o)=>{for(var i=o>1?void 0:o?Oe(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Se(t,e,i),i};let Y=class extends f{constructor(){super(...arguments),this.hasColorChange=!1}render(){return p`
        <weather-parts-cloud class="${_(this.hasColorChange&&"color-change")}">
          <slot name="1"></slot>
        </weather-parts-cloud>
        <weather-parts-cloud class="${_(this.hasColorChange&&"color-change")}">
          <slot name="2"></slot>
        </weather-parts-cloud>
          `}static get styles(){return[M,m`
weather-parts-cloud:nth-of-type(1) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 20%;
}

weather-parts-cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 45%;
    right: 20%;
    left: unset;
    animation-delay: 1s;
}    `]}};kt([F({type:Boolean,attribute:"color-change"})],Y.prototype,"hasColorChange",2);Y=kt([v("weather-two-clouds")],Y);const xe="1.0.0";var ke=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Dt=(r,t,e,o)=>{for(var i=o>1?void 0:o?De(t,e):t,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ke(t,e,i),i};const Ne=new Intl.NumberFormat("fr",{style:"unit",minimumFractionDigits:1,maximumFractionDigits:1,unit:"percent"}).format,W=new Intl.NumberFormat("fr",{style:"unit",minimumFractionDigits:1,maximumFractionDigits:1,unit:"celsius"}).format,Fe=r=>`${new Intl.NumberFormat("fr").format(r)} hPa`;function Ue(r){switch(r){case"hail":return p`<weather-three-clouds color-change>
      <weather-parts-snow slot="1"></weather-parts-snow>
      <weather-parts-snow slot="2"></weather-parts-snow>
      <weather-parts-snow slot="3"></weather-parts-snow>
    </weather-three-clouds>`;case"pouring":case"rain":return p`<weather-cloud color-change>
      <weather-parts-rain></weather-parts-rain>
    </weather-cloud>`;case"rainy":return p`<weather-cloud>
      <weather-parts-rain></weather-parts-rain>
    </weather-cloud>`;case"fog":return p`<weather-mist />`;case"sleet":case"snowy-rainy":return p`<weather-three-clouds>
      <weather-parts-rain slot="1"></weather-parts-rain>
      <weather-parts-snow slot="2"></weather-parts-snow>
      <weather-parts-rain slot="3"></weather-parts-rain>
    </weather-three-clouds>`;case"snow":case"snowy":return p`<weather-cloud>
      <weather-parts-snow></weather-parts-snow>
    </weather-cloud>`;case"wind":case"windy":case"windy-variant":return p`<weather-three-clouds></weather-three-clouds>`;case"overcast":case"cloudy":case"partlycloudy":case"partly-cloudy-day":case"partly-cloudy-night":return p`<weather-cloud sun></weather-cloud>`;case"lightning":return p`<weather-cloud color-change>
      <weather-parts-lightning></weather-parts-lightning>
    </weather-cloud>`;case"lightning-rainy":return p`<weather-cloud color-change>
      <weather-parts-rain></weather-parts-rain>
      <weather-parts-lightning></weather-parts-lightning>
    </weather-cloud>`;case"clear-day":case"clear-night":case"clear":default:return p`<weather-sun />`}}let J=class extends f{setConfig(r){if(!r.temperature)throw new Error("You need to define a temperature entity");if(!r.humidity)throw new Error("You need to define a humidity entity");if(!r.pressure)throw new Error("You need to define a pressure entity");if(!r.forecast)throw new Error("You need to define a forecast entity");this.config=r}render(){const r=this.hass;if(!r||!this.config)return p`No data available...`;const{temperature:t,humidity:e,pressure:o,forecast:i}=this.config,{state:s,attributes:{forecast:[{templow:n,temperature:h}]=[]}}=r.states[i],a=r.states[t].state,l=r.states[e].state,g=r.states[o].state;return p`
      <ha-card>
          <div class="card-content">
          <div id="tooltip">
              <div id="icon">${Ue(s)}</div>
              <div id="temperature">${W(+a)}</div>
              <div id="temphigh">${W(+h)}</div>
              <div id="templow">${W(+n)}</div>
              <div id="humidity">${Ne(+l)}</div>
              <div id="pressure">${Fe(+g)}</div>
            </div>
          </div>
      </ha-card>
    `}static get styles(){return m`
    ha-card{
      height: 100%;
      font-size: 2.5em;
      background-image: url(https://c.files.bbci.co.uk/17B7D/production/_113094179_1200-a-gettyimages-485290142.jpg);
      background-size: cover;
      color: #000;
      line-height: 1.1em;
    }

    #tooltip
    {
      position:absolute;
      left:0.5em;
      top:0.5em;
      border-radius:0.5em;
      padding:0.5em;
      background:#ffffffa0;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-row-gap: 0.2em;
      grid-column-gap: 0.2em;
    }

    #icon
    {
      grid-row: span 3;
      align-self: center;
    }

    #icon * { display: block; }

    #temperature
    {
      font-size: 1.5em;
      grid-row: span 2;
      align-self: center;
    }

    #templow
    {
      align-self: start;
      font-size: .7em;
      text-align: end;
    }

    #templow:after
    {
      content:'🔽'
    }

    #temphigh
    {
      font-size: .7em;
      align-self: end;
      text-align: end;
    }

    #temphigh:after
    {
      content:'🔼'
    }

    #temperature
    {
      font-size: 1.5em;
    }

    #humidity:after
    {
      content:'💧'
    }

    #humidity, #pressure
    {
      font-size: .7em;
    }

    #humidity{
      grid-column: 2;
      text-align: end;
    }
    `}};Dt([F({attribute:!1})],J.prototype,"hass",2);J=Dt([v("weather-cast-card")],J);var _t;let Te=(_t=window.customCards)!=null?_t:window.customCards=[];Te.push({type:"weather-cast-card",name:"Weather Cast Card",description:"A simple card to display weather on a Nest Hub device."});console.info(`%cWEATHER-CAST-CARD ${xe} IS INSTALLED`,"color: green; font-weight: bold","");
