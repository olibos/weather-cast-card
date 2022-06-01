var Dt=Object.defineProperty,Tt=Object.defineProperties;var Ft=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var Ut=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable;var tt=(o,t,e)=>t in o?Dt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,et=(o,t)=>{for(var e in t||(t={}))Ut.call(t,e)&&tt(o,e,t[e]);if(X)for(var e of X(t))Nt.call(t,e)&&tt(o,e,t[e]);return o},it=(o,t)=>Tt(o,Ft(t));const Ht=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};Ht();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),st=new Map;class Et{constructor(t,e){if(this._$cssResult$=!0,e!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=st.get(this.cssText);return Y&&t===void 0&&(st.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Mt=o=>new Et(typeof o=="string"?o:o+"",J),v=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Et(e,J)},Rt=(o,t)=>{Y?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},ot=Y?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Mt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const rt=window.trustedTypes,jt=rt?rt.emptyScript:"",nt=window.reactiveElementPolyfillSupport,W={toAttribute(o,t){switch(t){case Boolean:o=o?jt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ct=(o,t)=>t!==o&&(t==t||o==o),j={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Ct};class k extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Eh(s,e);i!==void 0&&(this._$Eu.set(i,s),t.push(i))}),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(ot(i))}else t!==void 0&&e.push(ot(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Rt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=j){var i,r;const n=this.constructor._$Eh(t,s);if(n!==void 0&&s.reflect===!0){const d=((r=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:W.toAttribute)(e,s.type);this._$Ei=t,d==null?this.removeAttribute(n):this.setAttribute(n,d),this._$Ei=null}}_$AK(t,e){var s,i,r;const n=this.constructor,d=n._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const a=n.getPropertyOptions(d),l=a.converter,g=(r=(i=(s=l)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&r!==void 0?r:W.fromAttribute;this._$Ei=d,this[d]=g(e,a.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,r)=>this[r]=i),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},nt==null||nt({ReactiveElement:k}),((R=globalThis.reactiveElementVersions)!==null&&R!==void 0?R:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const E=globalThis.trustedTypes,at=E?E.createPolicy("lit-html",{createHTML:o=>o}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,Pt="?"+$,zt=`<${Pt}>`,C=document,x=(o="")=>C.createComment(o),D=o=>o===null||typeof o!="object"&&typeof o!="function",St=Array.isArray,Lt=o=>{var t;return St(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,dt=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ht=/'/g,ct=/"/g,Ot=/^(?:script|style|textarea|title)$/i,It=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=It(1),P=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),pt=new WeakMap,Bt=(o,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=r._$litPart$;if(n===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=n=new F(t.insertBefore(x(),d),d,void 0,e!=null?e:{})}return n._$AI(o),n},A=C.createTreeWalker(C,129,null,!1),Vt=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=O;for(let a=0;a<e;a++){const l=o[a];let g,h,c=-1,m=0;for(;m<l.length&&(n.lastIndex=m,h=n.exec(l),h!==null);)m=n.lastIndex,n===O?h[1]==="!--"?n=lt:h[1]!==void 0?n=dt:h[2]!==void 0?(Ot.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=w):h[3]!==void 0&&(n=w):n===w?h[0]===">"?(n=i!=null?i:O,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,g=h[1],n=h[3]===void 0?w:h[3]==='"'?ct:ht):n===ct||n===ht?n=w:n===lt||n===dt?n=O:(n=w,i=void 0);const U=n===w&&o[a+1].startsWith("/>")?" ":"";r+=n===O?l+zt:c>=0?(s.push(g),l.slice(0,c)+"$lit$"+l.slice(c)+$+U):l+$+(c===-2?(s.push(void 0),a):U)}const d=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[at!==void 0?at.createHTML(d):d,s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const d=t.length-1,a=this.parts,[l,g]=Vt(t,e);if(this.el=T.createElement(l,s),A.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=A.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith($)){const m=g[n++];if(h.push(c),m!==void 0){const U=i.getAttribute(m.toLowerCase()+"$lit$").split($),N=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:N[2],strings:U,ctor:N[1]==="."?qt:N[1]==="?"?Yt:N[1]==="@"?Jt:H})}else a.push({type:6,index:r})}for(const c of h)i.removeAttribute(c)}if(Ot.test(i.tagName)){const h=i.textContent.split($),c=h.length-1;if(c>0){i.textContent=E?E.emptyScript:"";for(let m=0;m<c;m++)i.append(h[m],x()),A.nextNode(),a.push({type:2,index:++r});i.append(h[c],x())}}}else if(i.nodeType===8)if(i.data===Pt)a.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:r}),h+=$.length-1}r++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function S(o,t,e=o,s){var i,r,n,d;if(t===P)return t;let a=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const l=D(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,s)),s!==void 0?((n=(d=e)._$Cl)!==null&&n!==void 0?n:d._$Cl=[])[s]=a:e._$Cu=a),a!==void 0&&(t=S(o,a._$AS(o,t.values),a,s)),t}class Wt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:C).importNode(s,!0);A.currentNode=r;let n=A.nextNode(),d=0,a=0,l=i[0];for(;l!==void 0;){if(d===l.index){let g;l.type===2?g=new F(n,n.nextSibling,this,t):l.type===1?g=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(g=new Zt(n,this,t)),this.v.push(g),l=i[++a]}d!==(l==null?void 0:l.index)&&(n=A.nextNode(),d++)}return r}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class F{constructor(t,e,s,i){var r;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),D(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==P&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Lt(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==f&&D(this._$AH)?this._$AA.nextSibling.data=t:this.k(C.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(s);else{const n=new Wt(r,this),d=n.p(this.options);n.m(s),this.k(d),this._$AH=n}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new T(t)),e}S(t){St(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new F(this.M(x()),this.M(x()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,s,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=S(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const d=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=S(this,d[s+a],e,a),l===P&&(l=this._$AH[a]),n||(n=!D(l)||l!==this._$AH[a]),l===f?t=f:t!==f&&(t+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}n&&!i&&this.C(t)}C(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class qt extends H{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===f?void 0:t}}const Kt=E?E.emptyScript:"";class Yt extends H{constructor(){super(...arguments),this.type=4}C(t){t&&t!==f?this.element.setAttribute(this.name,Kt):this.element.removeAttribute(this.name)}}class Jt extends H{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=S(this,t,e,0))!==null&&s!==void 0?s:f)===P)return;const i=this._$AH,r=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==f&&(i===f||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Zt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const ft=window.litHtmlPolyfillSupport;ft==null||ft(T,F),((z=globalThis.litHtmlVersions)!==null&&z!==void 0?z:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L,I;class u extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return P}}u.finalized=!0,u._$litElement$=!0,(L=globalThis.litElementHydrateSupport)===null||L===void 0||L.call(globalThis,{LitElement:u});const ut=globalThis.litElementPolyfillSupport;ut==null||ut({LitElement:u});((I=globalThis.litElementVersions)!==null&&I!==void 0?I:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=o=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(o,t):((e,s)=>{const{kind:i,elements:r}=s;return{kind:i,elements:r,finisher(n){window.customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?it(et({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function Qt(o){return(t,e)=>e!==void 0?((s,i,r)=>{i.constructor.createProperty(r,s)})(o,t,e):Gt(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;((B=window.HTMLSlotElement)===null||B===void 0?void 0:B.prototype.assignedElements)!=null;const y=v`:host {
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
}

:host,
div,
div:before,
div:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`,Z=v`
.sun {
    position: absolute;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    background: radial-gradient(#fdac49, #fcd422);
    border-radius: 50%;
    animation: spinSun 20s linear infinite;
}

.sun:after {
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
`,G=v`
.rain {
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
}`,_=v`
.cloud, .cloud-copy {
    position: absolute;
    background: #fffafa;
    width: 40%;
    height: 40%;
    top: 27.5%;
    left: 25%;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

.cloud-copy{
    z-index:2;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background: inherit;
}

.cloud:before, .cloud:after, .cloud-copy:before, .cloud-copy:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    background: inherit;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}
.cloud:after, .cloud-copy:after {
    right: -50%;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}
`,M=v`
.cloud { animation: cloudColorChange 3s linear infinite; }
@keyframes cloudColorChange {
0%, 100% { background: #fffafa; }
50% { background: #a3a3a3; }
}`;var Xt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ee=(o,t,e,s)=>{for(var i=s>1?void 0:s?te(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Xt(t,e,i),i};let vt=class extends u{render(){return p`
<div class="clouds">
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
</div>`}static get styles(){return[y,_,M,v`
.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.cloud:nth-of-type(1) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 25%;
    animation: cloudColorChange 3s linear infinite;
}

.cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 35%;
    right: 20%;
    left:unset;
    animation: cloudColorChange 3s 1s linear infinite;
}

.cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
    animation: cloudColorChange 3s 2s linear infinite;
}
        `]}};vt=ee([b("weather-broken-clouds")],vt);var ie=Object.defineProperty,se=Object.getOwnPropertyDescriptor,oe=(o,t,e,s)=>{for(var i=s>1?void 0:s?se(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ie(t,e,i),i};let gt=class extends u{render(){return p`
<div class="mist">
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
</div>`}static get styles(){return[y,v`
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
}`]}};gt=oe([b("weather-mist")],gt);var re=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,ae=(o,t,e,s)=>{for(var i=s>1?void 0:s?ne(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&re(t,e,i),i};const Q=p`<div class="sun">
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
</div>`;let mt=class extends u{render(){return Q}static get styles(){return[y,Z]}};mt=ae([b("weather-sun")],mt);var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,he=(o,t,e,s)=>{for(var i=s>1?void 0:s?de(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&le(t,e,i),i};let bt=class extends u{render(){return p`
${Q}
<div class="cloud"></div>
        `}static get styles(){return[y,_,Z,v`
.sun {
    width: 42%;
    height: 42%;
    top: 10%;
    left: unset;
    right: 15%;
}
`]}};bt=he([b("weather-partially-cloudy")],bt);var ce=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,fe=(o,t,e,s)=>{for(var i=s>1?void 0:s?pe(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ce(t,e,i),i};const q=p`<div class="rain">
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
</div>`;let yt=class extends u{render(){return p`
${Q}
<div class="cloud">
    ${q}
</div>`}static get styles(){return[y,_,G,Z,v`
.sun {
    width: 42%;
    height: 42%;
    top: 10%;
    left: unset;
    right: 15%;
}`]}};yt=fe([b("weather-rain")],yt);var ue=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ge=(o,t,e,s)=>{for(var i=s>1?void 0:s?ve(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ue(t,e,i),i};let $t=class extends u{render(){return p`
<div class="clouds">
    <div class="cloud">
        <div class="cloud-copy"></div>
        ${q}
    </div>
    <div class="cloud">
        <div class="cloud-copy"></div>
        ${q}
    </div>
</div>
`}static get styles(){return[y,_,M,G,v`
.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.cloud:nth-of-type(1) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 20%;
    animation: cloudColorChange 3s linear infinite;
}

.cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 45%;
    right: 20%;
    left: unset;
    animation: cloudColorChange 3s 1s linear infinite;
}`]}};$t=ge([b("weather-rainy")],$t);var me=Object.defineProperty,be=Object.getOwnPropertyDescriptor,ye=(o,t,e,s)=>{for(var i=s>1?void 0:s?be(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&me(t,e,i),i};let wt=class extends u{render(){return p`
<div class="clouds">
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
</div>`}static get styles(){return[y,_,v`
.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.cloud:nth-of-type(1) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 25%;
}

.cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 35%;
    right: 20%;
    left:unset;
}

.cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
}
        `]}};wt=ye([b("weather-scattered-clouds")],wt);var $e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,_e=(o,t,e,s)=>{for(var i=s>1?void 0:s?we(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&$e(t,e,i),i};let _t=class extends u{render(){return p`
<div class="cloud">
    <div class="cloud-copy"></div>
    <div class="snow">
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
    </div>
</div>
`}static get styles(){return[y,_,M,v`
.cloud {
    left: 30%;
}

.snow {
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
        `]}};_t=_e([b("weather-snow")],_t);var ke=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Ee=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ae(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ke(t,e,i),i};let kt=class extends u{render(){return p`
<div class="cloud">
    <div class="cloud-copy"></div>
    <div class="rain">
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="lightning"></div>
    </div>
</div>
`}static get styles(){return[y,_,M,G,v`
.cloud{ left: 30%; }

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
}
        `]}};kt=Ee([b("weather-thunderstorm")],kt);const Ce="1.0.0";var Pe=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,xt=(o,t,e,s)=>{for(var i=s>1?void 0:s?Se(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Pe(t,e,i),i};const Oe=new Intl.NumberFormat("fr",{style:"unit",minimumFractionDigits:1,maximumFractionDigits:1,unit:"percent"}).format,V=new Intl.NumberFormat("fr",{style:"unit",minimumFractionDigits:1,maximumFractionDigits:1,unit:"celsius"}).format,xe=o=>`${new Intl.NumberFormat("fr").format(o)} hPa`;function De(o){switch(o){case"hail":case"rain":case"pouring":return p`<weather-rainy />`;case"rainy":return p`<weather-rain />`;case"fog":return p`<weather-mist />`;case"sleet":case"snowy-rainy":case"snow":case"snowy":return p`<weather-snow />`;case"overcast":case"cloudy":case"partlycloudy":case"partly-cloudy-day":case"partly-cloudy-night":return p`<weather-partially-cloudy />`;case"lightning":case"lightning-rainy":return p`<weather-thunderstorm />`;case"clear-day":case"clear-night":case"clear":default:return p`<weather-sun />`}}let K=class extends u{setConfig(o){if(!o.temperature)throw new Error("You need to define a temperature entity");if(!o.humidity)throw new Error("You need to define a humidity entity");if(!o.pressure)throw new Error("You need to define a pressure entity");if(!o.forecast)throw new Error("You need to define a forecast entity");this.config=o}render(){const o=this.hass;if(!o||!this.config)return p`No data available...`;const{temperature:t,humidity:e,pressure:s,forecast:i}=this.config,{state:r,attributes:{forecast:[{templow:n,temperature:d}]=[]}}=o.states[i],a=o.states[t].state,l=o.states[e].state,g=o.states[s].state;return p`
      <ha-card>
          <div class="card-content">
          <div id="tooltip">
              <div id="icon">${De(r)}</div>
              <div id="temperature">${V(+a)}</div>
              <div id="temphigh">${V(+d)}</div>
              <div id="templow">${V(+n)}</div>
              <div id="humidity">${Oe(+l)}</div>
              <div id="pressure">${xe(+g)}</div>
            </div>
          </div>
      </ha-card>
    `}static get styles(){return v`
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
    `}};xt([Qt({attribute:!1})],K.prototype,"hass",2);K=xt([b("weather-cast-card")],K);var At;let Te=(At=window.customCards)!=null?At:window.customCards=[];Te.push({type:"weather-cast-card",name:"Weather Cast Card",description:"A simple card to display weather on a Nest Hub device."});console.info(`%cWEATHER-CAST-CARD ${Ce} IS INSTALLED`,"color: green; font-weight: bold","");
