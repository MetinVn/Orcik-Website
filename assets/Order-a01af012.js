import{r as l,c as u,a as T,u as L,_ as p,j as r}from"./index-cf6ccfa7.js";import{t as M,H as q}from"./Transition-378548f8.js";var P={},v={};Object.defineProperty(v,"__esModule",{value:!0});v.calculateRgba=void 0;var g;(function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"})(g||(g={}));var D=function(e,t){if(Object.keys(g).includes(e)&&(e=g[e]),e[0]==="#"&&(e=e.slice(1)),e.length===3){var n="";e.split("").forEach(function(a){n+=a,n+=a}),e=n}var s=(e.match(/.{2}/g)||[]).map(function(a){return parseInt(a,16)}).join(", ");return"rgba(".concat(s,", ").concat(t,")")};v.calculateRgba=D;var _=u&&u.__assign||function(){return _=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_.apply(this,arguments)},R=u&&u.__createBinding||(Object.create?function(e,t,n,s){s===void 0&&(s=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,a)}:function(e,t,n,s){s===void 0&&(s=n),e[s]=t[n]}),C=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),V=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&R(t,e,n);return C(t,e),t},A=u&&u.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]]);return n};Object.defineProperty(P,"__esModule",{value:!0});var w=V(l),E=L,k=T,I=v,H=(0,k.createAnimation)("BarLoader","0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}","long"),X=(0,k.createAnimation)("BarLoader","0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}","short");function J(e){var t=e.loading,n=t===void 0?!0:t,s=e.color,a=s===void 0?"#000000":s,c=e.speedMultiplier,i=c===void 0?1:c,d=e.cssOverride,j=d===void 0?{}:d,x=e.height,f=x===void 0?4:x,b=e.width,m=b===void 0?100:b,F=A(e,["loading","color","speedMultiplier","cssOverride","height","width"]),o=_({display:"inherit",position:"relative",width:(0,E.cssValue)(m),height:(0,E.cssValue)(f),overflow:"hidden",backgroundColor:(0,I.calculateRgba)(a,.2),backgroundClip:"padding-box"},j),O=function(y){return{position:"absolute",height:(0,E.cssValue)(f),overflow:"hidden",backgroundColor:a,backgroundClip:"padding-box",display:"block",borderRadius:2,willChange:"left, right",animationFillMode:"forwards",animation:"".concat(y===1?H:X," ").concat(2.1/i,"s ").concat(y===2?"".concat(1.15/i,"s"):""," ").concat(y===1?"cubic-bezier(0.65, 0.815, 0.735, 0.395)":"cubic-bezier(0.165, 0.84, 0.44, 1)"," infinite")}};return n?w.createElement("span",_({style:o},F),w.createElement("span",{style:O(1)}),w.createElement("span",{style:O(2)})):null}var $=P.default=J;const h={_origin:"https://api.emailjs.com"},G=(e,t="https://api.emailjs.com")=>{h._userID=e,h._origin=t},z=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class S{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const N=(e,t,n={})=>new Promise((s,a)=>{const c=new XMLHttpRequest;c.addEventListener("load",({target:i})=>{const d=new S(i);d.status===200||d.text==="OK"?s(d):a(d)}),c.addEventListener("error",({target:i})=>{a(new S(i))}),c.open("POST",h._origin+e,!0),Object.keys(n).forEach(i=>{c.setRequestHeader(i,n[i])}),c.send(t)}),K=(e,t,n,s)=>{const a=s||h._userID;return z(a,e,t),N("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:a,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},Q=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},U=(e,t,n,s)=>{const a=s||h._userID,c=Q(n);z(a,e,t);const i=new FormData(c);return i.append("lib_version","3.11.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",a),N("/api/v1.0/email/send-form",i)},W={init:G,send:K,sendForm:U};function Y(){const e=l.lazy(()=>p(()=>import("./Email-9d6298d5.js").then(o=>o.E),["assets/Email-9d6298d5.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),t=l.lazy(()=>p(()=>import("./ContactPhone-c8a491cb.js").then(o=>o.C),["assets/ContactPhone-c8a491cb.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),n=l.lazy(()=>p(()=>import("./Error-649ffd3c.js").then(o=>o.E),["assets/Error-649ffd3c.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),s=l.lazy(()=>p(()=>import("./Check-226fb2d4.js").then(o=>o.C),["assets/Check-226fb2d4.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),a=l.lazy(()=>p(()=>import("./Person-047d678d.js").then(o=>o.P),["assets/Person-047d678d.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),c=l.lazy(()=>p(()=>import("./Header-91878e44.js"),["assets/Header-91878e44.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css","assets/Transition-378548f8.js","assets/Transition-9b80e05b.css","assets/Header-2c3e7aad.css"])),i=l.useRef(),[d,j]=l.useState(!1),[x,f]=l.useState(!1),[b,m]=l.useState(!1),F=o=>{o.preventDefault(),W.sendForm("service_zc4b97k","template_iptxqib",i.current,"rCrT1n53c0ETmjuhV").then(()=>{m(!0),setTimeout(()=>{m(!1),f(!0)},2e3)},()=>{m(!0),setTimeout(()=>{m(!1),f(!1)},2e3)}),o.target.reset()};return r.jsxs(r.Fragment,{children:[r.jsx(q,{metaTitle:"Order - Elazig Orcik"}),r.jsx(l.Suspense,{fallback:r.jsx("p",{children:"Loading Header"}),children:r.jsx(c,{})}),r.jsx("div",{className:"min-h-screen flex px-5 sm:px-0 justify-center items-center bg-[#7f5539]",children:r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"pb-5 text-[#FFE4C4] font-['Arial'] text-2xl",children:"Sipariş etmek için formu doldurunuz"}),r.jsxs("form",{ref:i,onSubmit:F,className:"border border-[#FFE4C4] text-[#FFE4C4] rounded-lg m-auto max-w-[400px] p-5 grid gap-1",children:[r.jsxs("label",{htmlFor:"name",className:"flex items-center",children:[r.jsx(l.Suspense,{fallback:r.jsx("div",{children:"X"}),children:r.jsx(a,{fontSize:"small",sx:{color:"bisque"}})}),"İsim"]}),r.jsx("input",{className:"shadow-sm text-xs h-5 py-3 shadow-black hover:shadow-lg focus:shadow-lg pl-2 outline-none w-full bg-[#FFE4C4] text-black rounded-sm",type:"text",id:"name",name:"user_name",autoComplete:"false",required:!0}),r.jsxs("label",{htmlFor:"email",className:"flex items-center",children:[r.jsx(l.Suspense,{fallback:r.jsx("div",{children:"X"}),children:r.jsx(e,{fontSize:"small",sx:{color:"bisque"}})}),"Email*"]}),r.jsx("input",{type:"email",name:"user_email",className:"text-xs h-5 py-3 shadow-sm shadow-black hover:shadow-lg focus:shadow-lg pl-2 outline-none w-full bg-[#FFE4C4] text-black rounded-sm",id:"email",autoComplete:"false",required:!0}),r.jsxs("label",{htmlFor:"user_number",className:"flex items-center",children:[r.jsx(l.Suspense,{fallback:r.jsx("div",{children:"X"}),children:r.jsx(t,{fontSize:"small",sx:{color:"bisque"}})}),"İletişim numarası*"]}),r.jsx("input",{type:"text",className:"text-xs h-5 py-3 shadow-sm shadow-black pl-2 hover:shadow-lg focus:shadow-lg outline-none w-full bg-[#FFE4C4] text-black rounded-sm",name:"user_number",id:"user_number",autoComplete:"false",required:!0}),r.jsx("button",{onClick:()=>j(!0),type:"submit",className:"block w-full text-center bg-[#9c6644] hover:bg-[#FFE4C4] duration-300 active:scale-95 mt-3 hover:text-black rounded-sm",children:"Sipariş et"}),r.jsx("div",{className:"m-auto mt-3",children:d?b?r.jsx($,{color:"black"}):x?r.jsxs("span",{className:"px-2 py-1 text-xs flex justify-center items-center bg-green-600 rounded-sm text-white",children:[r.jsx(l.Suspense,{fallback:r.jsx("div",{children:"X"}),children:r.jsx(s,{fontSize:"small",sx:{color:"bisque"}})}),"Mesaj gönderildi"]}):r.jsxs("span",{className:"px-2 py-1 text-xs flex justify-center items-center bg-red-600 rounded-sm text-white",children:[r.jsx(l.Suspense,{fallback:r.jsx("div",{children:"X"}),children:r.jsx(n,{fontSize:"small",sx:{color:"bisque"}})}),"Mesaj gönderilemedi!"]}):""})]}),r.jsx("p",{className:"text-[13px] sm:text-sm ml-1 text-[#FFE4C4] pt-1 font-['Arial']",children:"*İletişim numaranızı sipariş ve kargo bilgileri için arayacağız"}),r.jsx("p",{className:"text-[13px] sm:text-sm ml-1 text-[#FFE4C4] pt-1 font-['Arial']",children:"*Mail adresinize kargo takip numarasını göndereceğiz"})]})})]})}const ee=M(Y);export{Y as Order,ee as default};