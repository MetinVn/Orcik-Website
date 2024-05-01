import{g as Y,r as K,R as N,j as C,c as A,a as se,u as le,m as W}from"./index-90660f26.js";var ee={exports:{}},fe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pe=fe,de=pe;function te(){}function re(){}re.resetWarningCache=te;var Te=function(){function t(r,o,a,s,i,c){if(c!==de){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:re,resetWarningCache:te};return n.PropTypes=n,n};ee.exports=Te();var me=ee.exports;const m=Y(me);function ve(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var ne=K,he=ve(ne);function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ye(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var ge=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ee(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],i;function c(){i=t(s.map(function(l){return l.props})),u.canUseDOM?e(i):n&&(i=n(i))}var u=function(l){ye(f,l);function f(){return l.apply(this,arguments)||this}f.peek=function(){return i},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var h=i;return i=void 0,s=[],h};var d=f.prototype;return d.UNSAFE_componentWillMount=function(){s.push(this),c()},d.componentDidUpdate=function(){c()},d.componentWillUnmount=function(){var h=s.indexOf(this);s.splice(h,1),c()},d.render=function(){return he.createElement(a,this.props)},f}(ne.PureComponent);return z(u,"displayName","SideEffect("+r(a)+")"),z(u,"canUseDOM",ge),u}}var be=Ee;const Oe=Y(be);var Ae=typeof Element<"u",Se=typeof Map=="function",Ce=typeof Set=="function",Pe=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function F(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!F(t[r],e[r]))return!1;return!0}var a;if(Se&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!F(r.value[1],e.get(r.value[0])))return!1;return!0}if(Ce&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Pe&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(Ae&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!F(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var we=function(e,n){try{return F(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const _e=Y(we);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var X=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;function Ie(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Le(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Me=Le()?Object.assign:function(t,e){for(var n,r=Ie(t),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var s in n)je.call(n,s)&&(r[s]=n[s]);if(X){o=X(n);for(var i=0;i<o.length;i++)Re.call(n,o[i])&&(r[o[i]]=n[o[i]])}}return r};const Ne=Y(Me);var _={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},p={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(p).map(function(t){return p[t]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},xe=Object.keys(D).reduce(function(t,e){return t[D[e]]=e,t},{}),He=[p.NOSCRIPT,p.SCRIPT,p.STYLE],O="data-react-helmet",Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ue=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ye=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Q=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Be=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},q=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ke=function(e){var n=I(e,p.TITLE),r=I(e,x.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=I(e,x.DEFAULT_TITLE);return n||o||void 0},qe=function(e){return I(e,x.ON_CHANGE_CLIENT_STATE)||function(){}},k=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return y({},r,o)},{})},$e=function(e,n){return n.filter(function(r){return typeof r[p.BASE]<"u"}).map(function(r){return r[p.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),s=0;s<a.length;s++){var i=a[s],c=i.toLowerCase();if(e.indexOf(c)!==-1&&o[c])return r.concat(o)}return r},[])},L=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&ze("Helmet: "+e+' should be of type "Array". Instead found type "'+Fe(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,s){var i={};s.filter(function(d){for(var T=void 0,h=Object.keys(d),g=0;g<h.length;g++){var E=h[g],b=E.toLowerCase();n.indexOf(b)!==-1&&!(T===v.REL&&d[T].toLowerCase()==="canonical")&&!(b===v.REL&&d[b].toLowerCase()==="stylesheet")&&(T=b),n.indexOf(E)!==-1&&(E===v.INNER_HTML||E===v.CSS_TEXT||E===v.ITEM_PROP)&&(T=E)}if(!T||!d[T])return!1;var w=d[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][w]?!1:(i[T][w]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var c=Object.keys(i),u=0;u<c.length;u++){var l=c[u],f=Ne({},o[l],i[l]);o[l]=f}return a},[]).reverse()},I=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Ge=function(e){return{baseTag:$e([v.HREF,v.TARGET],e),bodyAttributes:k(_.BODY,e),defer:I(e,x.DEFER),encode:I(e,x.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:k(_.HTML,e),linkTags:L(p.LINK,[v.REL,v.HREF],e),metaTags:L(p.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:L(p.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:qe(e),scriptTags:L(p.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:L(p.STYLE,[v.CSS_TEXT],e),title:ke(e),titleAttributes:k(_.TITLE,e)}},$=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){$(e)},0)}}(),J=function(e){return clearTimeout(e)},Ve=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:global.requestAnimationFrame||$,We=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:global.cancelAnimationFrame||J,ze=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},M=null,Xe=function(e){M&&We(M),e.defer?M=Ve(function(){Z(e,function(){M=null})}):(Z(e),M=null)},Z=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,T=e.titleAttributes;G(p.BODY,o),G(p.HTML,a),Qe(d,T);var h={baseTag:j(p.BASE,r),linkTags:j(p.LINK,s),metaTags:j(p.META,i),noscriptTags:j(p.NOSCRIPT,c),scriptTags:j(p.SCRIPT,l),styleTags:j(p.STYLE,f)},g={},E={};Object.keys(h).forEach(function(b){var w=h[b],P=w.newTags,B=w.oldTags;P.length&&(g[b]=P),B.length&&(E[b]=h[b].oldTags)}),n&&n(),u(e,g,E)},oe=function(e){return Array.isArray(e)?e.join(""):e},Qe=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=oe(e)),G(p.TITLE,n)},G=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(O),a=o?o.split(","):[],s=[].concat(a),i=Object.keys(n),c=0;c<i.length;c++){var u=i[c],l=n[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),a.indexOf(u)===-1&&a.push(u);var f=s.indexOf(u);f!==-1&&s.splice(f,1)}for(var d=s.length-1;d>=0;d--)r.removeAttribute(s[d]);a.length===s.length?r.removeAttribute(O):r.getAttribute(O)!==i.join(",")&&r.setAttribute(O,i.join(","))}},j=function(e,n){var r=document.head||document.querySelector(p.HEAD),o=r.querySelectorAll(e+"["+O+"]"),a=Array.prototype.slice.call(o),s=[],i=void 0;return n&&n.length&&n.forEach(function(c){var u=document.createElement(e);for(var l in c)if(c.hasOwnProperty(l))if(l===v.INNER_HTML)u.innerHTML=c.innerHTML;else if(l===v.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=c.cssText:u.appendChild(document.createTextNode(c.cssText));else{var f=typeof c[l]>"u"?"":c[l];u.setAttribute(l,f)}u.setAttribute(O,"true"),a.some(function(d,T){return i=T,u.isEqualNode(d)})?a.splice(i,1):s.push(u)}),a.forEach(function(c){return c.parentNode.removeChild(c)}),s.forEach(function(c){return r.appendChild(c)}),{oldTags:a,newTags:s}},ae=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},Je=function(e,n,r,o){var a=ae(r),s=oe(n);return a?"<"+e+" "+O+'="true" '+a+">"+q(s,o)+"</"+e+">":"<"+e+" "+O+'="true">'+q(s,o)+"</"+e+">"},Ze=function(e,n,r){return n.reduce(function(o,a){var s=Object.keys(a).filter(function(u){return!(u===v.INNER_HTML||u===v.CSS_TEXT)}).reduce(function(u,l){var f=typeof a[l]>"u"?l:l+'="'+q(a[l],r)+'"';return u?u+" "+f:f},""),i=a.innerHTML||a.cssText||"",c=He.indexOf(e)===-1;return o+"<"+e+" "+O+'="true" '+s+(c?"/>":">"+i+"</"+e+">")},"")},ie=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[D[o]||o]=e[o],r},n)},Ke=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[xe[o]||o]=e[o],r},n)},et=function(e,n,r){var o,a=(o={key:n},o[O]=!0,o),s=ie(r,a);return[N.createElement(p.TITLE,s,n)]},tt=function(e,n){return n.map(function(r,o){var a,s=(a={key:o},a[O]=!0,a);return Object.keys(r).forEach(function(i){var c=D[i]||i;if(c===v.INNER_HTML||c===v.CSS_TEXT){var u=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[c]=r[i]}),N.createElement(e,s)})},S=function(e,n,r){switch(e){case p.TITLE:return{toComponent:function(){return et(e,n.title,n.titleAttributes)},toString:function(){return Je(e,n.title,n.titleAttributes,r)}};case _.BODY:case _.HTML:return{toComponent:function(){return ie(n)},toString:function(){return ae(n)}};default:return{toComponent:function(){return tt(e,n)},toString:function(){return Ze(e,n,r)}}}},ce=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,f=e.title,d=f===void 0?"":f,T=e.titleAttributes;return{base:S(p.BASE,n,o),bodyAttributes:S(_.BODY,r,o),htmlAttributes:S(_.HTML,a,o),link:S(p.LINK,s,o),meta:S(p.META,i,o),noscript:S(p.NOSCRIPT,c,o),script:S(p.SCRIPT,u,o),style:S(p.STYLE,l,o),title:S(p.TITLE,{title:d,titleAttributes:T},o)}},rt=function(e){var n,r;return r=n=function(o){Ye(a,o);function a(){return De(this,a),Be(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!_e(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,c){if(!c)return null;switch(i.type){case p.SCRIPT:case p.NOSCRIPT:return{innerHTML:c};case p.STYLE:return{cssText:c}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var c,u=i.child,l=i.arrayTypeChildren,f=i.newChildProps,d=i.nestedChildren;return y({},l,(c={},c[u.type]=[].concat(l[u.type]||[],[y({},f,this.mapNestedChildrenToProps(u,d))]),c))},a.prototype.mapObjectTypeChildren=function(i){var c,u,l=i.child,f=i.newProps,d=i.newChildProps,T=i.nestedChildren;switch(l.type){case p.TITLE:return y({},f,(c={},c[l.type]=T,c.titleAttributes=y({},d),c));case p.BODY:return y({},f,{bodyAttributes:y({},d)});case p.HTML:return y({},f,{htmlAttributes:y({},d)})}return y({},f,(u={},u[l.type]=y({},d),u))},a.prototype.mapArrayTypeChildrenToProps=function(i,c){var u=y({},c);return Object.keys(i).forEach(function(l){var f;u=y({},u,(f={},f[l]=i[l],f))}),u},a.prototype.warnOnInvalidChildren=function(i,c){return!0},a.prototype.mapChildrenToProps=function(i,c){var u=this,l={};return N.Children.forEach(i,function(f){if(!(!f||!f.props)){var d=f.props,T=d.children,h=Q(d,["children"]),g=Ke(h);switch(u.warnOnInvalidChildren(f,T),f.type){case p.LINK:case p.META:case p.NOSCRIPT:case p.SCRIPT:case p.STYLE:l=u.flattenArrayTypeChildren({child:f,arrayTypeChildren:l,newChildProps:g,nestedChildren:T});break;default:c=u.mapObjectTypeChildren({child:f,newProps:c,newChildProps:g,nestedChildren:T});break}}}),c=this.mapArrayTypeChildrenToProps(l,c),c},a.prototype.render=function(){var i=this.props,c=i.children,u=Q(i,["children"]),l=y({},u);return c&&(l=this.mapChildrenToProps(c,l)),N.createElement(e,l)},Ue(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(N.Component),n.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},nt=function(){return null},ot=Oe(Ge,Xe,ce)(nt),V=rt(ot);V.renderStatic=V.rewind;const mt=({metaTitle:t})=>C.jsxs(V,{children:[C.jsx("meta",{charSet:"utf-8"}),C.jsx("title",{children:t})]});var ue={},U=A&&A.__assign||function(){return U=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},U.apply(this,arguments)},at=A&&A.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),it=A&&A.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),ct=A&&A.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&at(e,t,n);return it(e,t),e},ut=A&&A.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};Object.defineProperty(ue,"__esModule",{value:!0});var R=ct(K),H=le,st=se,lt=(0,st.createAnimation)("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");function ft(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,o=r===void 0?"#000000":r,a=t.speedMultiplier,s=a===void 0?1:a,i=t.cssOverride,c=i===void 0?{}:i,u=t.height,l=u===void 0?35:u,f=t.width,d=f===void 0?4:f,T=t.radius,h=T===void 0?2:T,g=t.margin,E=g===void 0?2:g,b=ut(t,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),w=U({display:"inherit"},c),P=function(B){return{backgroundColor:o,width:(0,H.cssValue)(d),height:(0,H.cssValue)(l),margin:(0,H.cssValue)(E),borderRadius:(0,H.cssValue)(h),display:"inline-block",animation:"".concat(lt," ").concat(1/s,"s ").concat(B*.1,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?R.createElement("span",U({style:w},b),R.createElement("span",{style:P(1)}),R.createElement("span",{style:P(2)}),R.createElement("span",{style:P(3)}),R.createElement("span",{style:P(4)}),R.createElement("span",{style:P(5)})):null}var pt=ue.default=ft;const dt=t=>()=>C.jsxs(C.Fragment,{children:[C.jsx(t,{}),C.jsx(W.div,{className:"text-center",id:"slidein",initial:{scaleY:0},animate:{scaleY:0},exit:{scaleY:1},transition:{duration:1,ease:[.22,1,.36,1]},children:C.jsx(pt,{loading:!0,speedMultiplier:1,color:"#7f5539"})}),C.jsx(W.div,{id:"slideout",initial:{scaleY:1},animate:{scaleY:0},exit:{scaleY:0},transition:{duration:1,ease:[.22,1,.36,1]}})]}),vt=dt;export{mt as H,vt as t};