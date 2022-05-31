var At=Object.defineProperty,Ct=Object.defineProperties;var Et=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var xt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var K=(r,t,e)=>t in r?At(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Y=(r,t)=>{for(var e in t||(t={}))xt.call(t,e)&&K(r,e,t[e]);if(q)for(var e of q(t))St.call(t,e)&&K(r,e,t[e]);return r},J=(r,t)=>Ct(r,Et(t));const Pt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}};Pt();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Z=new Map;class mt{constructor(t,e){if(this._$cssResult$=!0,e!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Z.get(this.cssText);return V&&t===void 0&&(Z.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Dt=r=>new mt(typeof r=="string"?r:r+"",W),v=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,i,a)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new mt(e,W)},Ot=(r,t)=>{V?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),i=window.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)})},G=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Dt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N;const Q=window.trustedTypes,Ft=Q?Q.emptyScript:"",X=window.reactiveElementPolyfillSupport,I={toAttribute(r,t){switch(t){case Boolean:r=r?Ft:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},yt=(r,t)=>t!==r&&(t==t||r==r),z={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:yt};class $ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Eh(o,e);i!==void 0&&(this._$Eu.set(i,o),t.push(i))}),t}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Eh(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ot(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=z){var i,a;const n=this.constructor._$Eh(t,o);if(n!==void 0&&o.reflect===!0){const l=((a=(i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&a!==void 0?a:I.toAttribute)(e,o.type);this._$Ei=t,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(t,e){var o,i,a;const n=this.constructor,l=n._$Eu.get(t);if(l!==void 0&&this._$Ei!==l){const s=n.getPropertyOptions(l),d=s.converter,g=(a=(i=(o=d)===null||o===void 0?void 0:o.fromAttribute)!==null&&i!==void 0?i:typeof d=="function"?d:null)!==null&&a!==void 0?a:I.fromAttribute;this._$Ei=l,this[l]=g(e,s.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,a)=>this[a]=i),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var a;return(a=i.hostUpdate)===null||a===void 0?void 0:a.call(i)}),this.update(o)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$ES(o,this[o],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:$}),((N=globalThis.reactiveElementVersions)!==null&&N!==void 0?N:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var H;const _=globalThis.trustedTypes,tt=_?_.createPolicy("lit-html",{createHTML:r=>r}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+y,Tt=`<${wt}>`,A=document,S=(r="")=>A.createComment(r),P=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,Ut=r=>{var t;return $t(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,it=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ot=/'/g,rt=/"/g,kt=/^(?:script|style|textarea|title)$/i,Nt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=Nt(1),C=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),at=new WeakMap,zt=(r,t,e)=>{var o,i;const a=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let n=a._$litPart$;if(n===void 0){const l=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;a._$litPart$=n=new O(t.insertBefore(S(),l),l,void 0,e!=null?e:{})}return n._$AI(r),n},k=A.createTreeWalker(A,129,null,!1),Ht=(r,t)=>{const e=r.length-1,o=[];let i,a=t===2?"<svg>":"",n=x;for(let s=0;s<e;s++){const d=r[s];let g,h,p=-1,b=0;for(;b<d.length&&(n.lastIndex=b,h=n.exec(d),h!==null);)b=n.lastIndex,n===x?h[1]==="!--"?n=et:h[1]!==void 0?n=it:h[2]!==void 0?(kt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=w):h[3]!==void 0&&(n=w):n===w?h[0]===">"?(n=i!=null?i:x,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,g=h[1],n=h[3]===void 0?w:h[3]==='"'?rt:ot):n===rt||n===ot?n=w:n===et||n===it?n=x:(n=w,i=void 0);const F=n===w&&r[s+1].startsWith("/>")?" ":"";a+=n===x?d+Tt:p>=0?(o.push(g),d.slice(0,p)+"$lit$"+d.slice(p)+y+F):d+y+(p===-2?(o.push(void 0),s):F)}const l=a+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[tt!==void 0?tt.createHTML(l):l,o]};class D{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let a=0,n=0;const l=t.length-1,s=this.parts,[d,g]=Ht(t,e);if(this.el=D.createElement(d,o),k.currentNode=this.el.content,e===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=k.nextNode())!==null&&s.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const p of i.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(y)){const b=g[n++];if(h.push(p),b!==void 0){const F=i.getAttribute(b.toLowerCase()+"$lit$").split(y),T=/([.?@])?(.*)/.exec(b);s.push({type:1,index:a,name:T[2],strings:F,ctor:T[1]==="."?Rt:T[1]==="?"?Lt:T[1]==="@"?It:U})}else s.push({type:6,index:a})}for(const p of h)i.removeAttribute(p)}if(kt.test(i.tagName)){const h=i.textContent.split(y),p=h.length-1;if(p>0){i.textContent=_?_.emptyScript:"";for(let b=0;b<p;b++)i.append(h[b],S()),k.nextNode(),s.push({type:2,index:++a});i.append(h[p],S())}}}else if(i.nodeType===8)if(i.data===wt)s.push({type:2,index:a});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)s.push({type:7,index:a}),h+=y.length-1}a++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function E(r,t,e=r,o){var i,a,n,l;if(t===C)return t;let s=o!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[o]:e._$Cu;const d=P(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==d&&((a=s==null?void 0:s._$AO)===null||a===void 0||a.call(s,!1),d===void 0?s=void 0:(s=new d(r),s._$AT(r,e,o)),o!==void 0?((n=(l=e)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[o]=s:e._$Cu=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,o)),t}class Mt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,a=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(o,!0);k.currentNode=a;let n=k.nextNode(),l=0,s=0,d=i[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new O(n,n.nextSibling,this,t):d.type===1?g=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(g=new Bt(n,this,t)),this.v.push(g),d=i[++s]}l!==(d==null?void 0:d.index)&&(n=k.nextNode(),l++)}return a}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class O{constructor(t,e,o,i){var a;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=(a=i==null?void 0:i.isConnected)===null||a===void 0||a}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==C&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Ut(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==c&&P(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=D.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===a)this._$AH.m(o);else{const n=new Mt(a,this),l=n.p(this.options);n.m(o),this.k(l),this._$AH=n}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new D(t)),e}S(t){$t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const a of t)i===e.length?e.push(o=new O(this.M(S()),this.M(S()),this,this.options)):o=e[i],o._$AI(a),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class U{constructor(t,e,o,i,a){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const a=this.strings;let n=!1;if(a===void 0)t=E(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{const l=t;let s,d;for(t=a[0],s=0;s<a.length-1;s++)d=E(this,l[o+s],e,s),d===C&&(d=this._$AH[s]),n||(n=!P(d)||d!==this._$AH[s]),d===c?t=c:t!==c&&(t+=(d!=null?d:"")+a[s+1]),this._$AH[s]=d}n&&!i&&this.C(t)}C(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Rt extends U{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===c?void 0:t}}const jt=_?_.emptyScript:"";class Lt extends U{constructor(){super(...arguments),this.type=4}C(t){t&&t!==c?this.element.setAttribute(this.name,jt):this.element.removeAttribute(this.name)}}class It extends U{constructor(t,e,o,i,a){super(t,e,o,i,a),this.type=5}_$AI(t,e=this){var o;if((t=(o=E(this,t,e,0))!==null&&o!==void 0?o:c)===C)return;const i=this._$AH,a=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==c&&(i===c||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Bt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const nt=window.litHtmlPolyfillSupport;nt==null||nt(D,O),((H=globalThis.litHtmlVersions)!==null&&H!==void 0?H:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M,R;class u extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return C}}u.finalized=!0,u._$litElement$=!0,(M=globalThis.litElementHydrateSupport)===null||M===void 0||M.call(globalThis,{LitElement:u});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:u});((R=globalThis.litElementVersions)!==null&&R!==void 0?R:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=r=>t=>typeof t=="function"?((e,o)=>(window.customElements.define(e,o),o))(r,t):((e,o)=>{const{kind:i,elements:a}=o;return{kind:i,elements:a,finisher(n){window.customElements.define(e,n)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?J(Y({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function Wt(r){return(t,e)=>e!==void 0?((o,i,a)=>{i.constructor.createProperty(a,o)})(r,t,e):Vt(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;((j=window.HTMLSlotElement)===null||j===void 0?void 0:j.prototype.assignedElements)!=null;var qt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Yt=(r,t,e,o)=>{for(var i=o>1?void 0:o?Kt(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&qt(t,e,i),i};let dt=class extends u{render(){return f`
<div class="clouds">
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
</div>`}static get styles(){return v`
:host {
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
}

.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

@keyframes cloudColorChange {

    0%,
    100% {
        background: #fffafa;
    }

    50% {
        background: #a3a3a3;
    }
}

.cloud {
    position: absolute;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
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
    animation: cloudColorChange 3s 1s linear infinite;
}

.cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
    animation: cloudColorChange 3s 2s linear infinite;
}
        `}};dt=Yt([m("weather-broken-clouds")],dt);var Jt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Gt=(r,t,e,o)=>{for(var i=o>1?void 0:o?Zt(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Jt(t,e,i),i};let lt=class extends u{render(){return f`
<div class="mist">
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
</div>`}static get styles(){return v`
:host {
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
}

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
}
        `}};lt=Gt([m("weather-mist")],lt);var Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,te=(r,t,e,o)=>{for(var i=o>1?void 0:o?Xt(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Qt(t,e,i),i};let ht=class extends u{render(){return f`
<div class="sun">
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
</div>
<div class="cloud"></div>
        `}static get styles(){return v`
:host {
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
}

.sun {
    position: absolute;
    width: 42%;
    height: 42%;
    top: 10%;
    right: 15%;
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

.beam:nth-child(even):before {
    background: #fdac49;
}

.beam:nth-child(even):after {
    background: #fdac49;
}

.beam:nth-child(odd):before {
    background: #fcd422;
}

.beam:nth-child(odd):after {
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

@keyframes spinSun {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.cloud {
    position: absolute;
    width: 40%;
    height: 40%;
    top: 27.5%;
    left: 25%;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}
`}};ht=te([m("weather-partially-cloudy")],ht);var ee=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,oe=(r,t,e,o)=>{for(var i=o>1?void 0:o?ie(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ee(t,e,i),i};let pt=class extends u{render(){return f`
<div class="sun">
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
</div>
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
    </div>
</div>
        `}static get styles(){return v`
:host {
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
}


.sun {
    position: absolute;
    width: 42%;
    height: 42%;
    top: 10%;
    right: 15%;
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

.beam:nth-child(even):before {
    background: #fdac49;
}

.beam:nth-child(even):after {
    background: #fdac49;
}

.beam:nth-child(odd):before {
    background: #fcd422;
}

.beam:nth-child(odd):after {
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

@keyframes spinSun {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.cloud {
    position: absolute;
    width: 40%;
    height: 40%;
    top: 27.5%;
    left: 25%;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}

.cloud-copy {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}

.cloud-copy:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud-copy:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}

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
}
`}};pt=oe([m("weather-rain")],pt);var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,ne=(r,t,e,o)=>{for(var i=o>1?void 0:o?ae(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&re(t,e,i),i};let ft=class extends u{render(){return f`
<div class="clouds">
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
        </div>
    </div>
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
        </div>
    </div>
</div>
`}static get styles(){return v`
:host {
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
}

.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

@keyframes cloudColorChange {

    0%,
    100% {
        background: #fffafa;
    }

    50% {
        background: #a3a3a3;
    }
}

.cloud {
    position: absolute;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}

.cloud-copy {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}

.cloud-copy:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud-copy:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
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
    animation: cloudColorChange 3s 1s linear infinite;
}

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
}
        `}};ft=ne([m("weather-rainy")],ft);var se=Object.defineProperty,de=Object.getOwnPropertyDescriptor,le=(r,t,e,o)=>{for(var i=o>1?void 0:o?de(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&se(t,e,i),i};let ct=class extends u{render(){return f`
<div class="clouds">
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
</div>`}static get styles(){return v`
:host {
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
}

.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.cloud {
    position: absolute;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
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
}

.cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
}
        `}};ct=le([m("weather-scattered-clouds")],ct);var he=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,fe=(r,t,e,o)=>{for(var i=o>1?void 0:o?pe(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&he(t,e,i),i};let ut=class extends u{render(){return f`
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
`}static get styles(){return v`
:host {
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
}

.cloud {
    position: absolute;
    width: 40%;
    height: 40%;
    top: 27.5%;
    left: 30%;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
    animation: cloudColorChange 3s linear infinite;
}

@keyframes cloudColorChange {

    0%,
    100% {
        background: #fffafa;
    }

    50% {
        background: #a3a3a3;
    }
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}

.cloud-copy {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}

.cloud-copy:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud-copy:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
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
        `}};ut=fe([m("weather-snow")],ut);var ce=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,ge=(r,t,e,o)=>{for(var i=o>1?void 0:o?ue(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ce(t,e,i),i};let gt=class extends u{render(){return f`<div class="sun">
        <div class="beam"></div>
        <div class="beam"></div>
        <div class="beam"></div>
        <div class="beam"></div>
        <div class="beam"></div>
        <div class="beam"></div>
        <div class="beam"></div>
        <div class="beam"></div>
      </div>`}static get styles(){return v`
:host {
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
}

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

.beam:nth-child(even):before {
    background: #fdac49;
}

.beam:nth-child(even):after {
    background: #fdac49;
}

.beam:nth-child(odd):before {
    background: #fcd422;
}

.beam:nth-child(odd):after {
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

@keyframes spinSun {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
        `}};gt=ge([m("weather-sun")],gt);var be=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,me=(r,t,e,o)=>{for(var i=o>1?void 0:o?ve(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&be(t,e,i),i};let bt=class extends u{render(){return f`
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
`}static get styles(){return v`
:host {
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
}

.cloud {
    position: absolute;
    width: 40%;
    height: 40%;
    top: 27.5%;
    left: 30%;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
    animation: cloudColorChange 3s linear infinite;
}

@keyframes cloudColorChange {

    0%,
    100% {
        background: #fffafa;
    }

    50% {
        background: #a3a3a3;
    }
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}

.cloud-copy {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}

.cloud-copy:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud-copy:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}

.rain {
    position: absolute;
    width: 140%;
    height: 100%;
    left: -20%;
    top: 80%;
    z-index: 1;
    overflow: hidden;
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

.lightning:before {
    content: "";
    position: absolute;
    width: 10%;
    height: 50%;
    left: 47%;
    top: 5%;
    right: 47%;
    bottom: 5%;
    transform: rotate(20deg);
    background: #fcd422;
    bottom: unset;
    right: unset;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.lightning:after {
    content: "";
    position: absolute;
    width: 10%;
    height: 50%;
    left: 47%;
    top: 5%;
    right: 47%;
    bottom: 5%;
    transform: rotate(20deg);
    background: #fcd422;
    top: unset;
    left: unset;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}
        `}};bt=me([m("weather-thunderstorm")],bt);const ye="1.0.0";var we=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,_t=(r,t,e,o)=>{for(var i=o>1?void 0:o?$e(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&we(t,e,i),i};const ke=new Intl.NumberFormat("fr",{style:"unit",minimumFractionDigits:1,maximumFractionDigits:1,unit:"percent"}).format,L=new Intl.NumberFormat("fr",{style:"unit",minimumFractionDigits:1,maximumFractionDigits:1,unit:"celsius"}).format,_e=r=>`${new Intl.NumberFormat("fr").format(r)} hPa`;function Ae(r){switch(r){case"hail":case"rain":case"pouring":return f`<weather-rainy />`;case"rainy":return f`<weather-rain />`;case"fog":return f`<weather-mist />`;case"sleet":case"snowy-rainy":case"snow":case"snowy":return f`<weather-snow />`;case"overcast":case"cloudy":case"partlycloudy":case"partly-cloudy-day":case"partly-cloudy-night":return f`<weather-partially-cloudy />`;case"lightning":case"lightning-rainy":return f`<weather-thunderstorm />`;case"clear-day":case"clear-night":case"clear":default:return f`<weather-sun />`}}let B=class extends u{setConfig(r){if(!r.temperature)throw new Error("You need to define a temperature entity");if(!r.humidity)throw new Error("You need to define a humidity entity");if(!r.pressure)throw new Error("You need to define a pressure entity");if(!r.forecast)throw new Error("You need to define a forecast entity");this.config=r}render(){const r=this.hass;if(!r||!this.config)return f`No data available...`;const{temperature:t,humidity:e,pressure:o,forecast:i}=this.config,{state:a,attributes:{forecast:[{templow:n,temperature:l}]=[]}}=r.states[i],s=r.states[t].state,d=r.states[e].state,g=r.states[o].state;return f`
      <ha-card>
          <div class="card-content">
          <div id="tooltip">
              <div id="icon">${Ae(a)}</div>
              <div id="temperature">${L(+s)}</div>
              <div id="temphigh">${L(+l)}</div>
              <div id="templow">${L(+n)}</div>
              <div id="humidity">${ke(+d)}</div>
              <div id="pressure">${_e(+g)}</div>
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
    `}};_t([Wt({attribute:!1})],B.prototype,"hass",2);B=_t([m("weather-cast-card")],B);var vt;let Ce=(vt=window.customCards)!=null?vt:window.customCards=[];Ce.push({type:"weather-cast-card",name:"Weather Cast Card",description:"A simple card to display weather on a Nest Hub device."});console.info(`%cWEATHER-CAST-CARD ${ye} IS INSTALLED`,"color: green; font-weight: bold","");
