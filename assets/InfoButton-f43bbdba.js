import{r as s,_ as l,j as e}from"./index-cf6ccfa7.js";import{m as p}from"./Transition-378548f8.js";const u=()=>{const r=s.lazy(()=>l(()=>import("./Close-5b2d038a.js").then(t=>t.C),["assets/Close-5b2d038a.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),n=s.lazy(()=>l(()=>import("./VerifiedUserRounded-c435c3e3.js").then(t=>t.V),["assets/VerifiedUserRounded-c435c3e3.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),c=s.lazy(()=>l(()=>import("./InfoOutlined-822c7d85.js").then(t=>t.I),["assets/InfoOutlined-822c7d85.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),o=s.lazy(()=>l(()=>import("./WhatsApp-18c230da.js").then(t=>t.W),["assets/WhatsApp-18c230da.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),x=s.lazy(()=>l(()=>import("./Email-9d6298d5.js").then(t=>t.E),["assets/Email-9d6298d5.js","assets/createSvgIcon-162c21d0.js","assets/index-cf6ccfa7.js","assets/index-8e167967.css"])),f=(t,d)=>{switch(d.type){case"infoOpen":return{info:t.info=!0};case"infoClose":return{info:t.info=!1};default:return t}},[a,i]=s.useReducer(f,{info:!1});return e.jsx(p.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:`fixed flex flex-col justify-center cursor-pointer items-center bottom-2 right-0 md:bottom-10 md:right-10 text-white shadow-xl shadow-black/40 overflow-hidden bg-slate-600 duration-300 ${a.info?"animate scale":"animate"}`,children:a.info?e.jsxs("div",{children:[e.jsx("span",{className:"absolute font-['Open Sans',sans-seriff] sm:tracking-normal sm:text-sm top-1 left-2 text-[#FFE4C4] ",children:"Hemen sipariş ver!"}),e.jsx("span",{className:"absolute text-sm top-0 right-1",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(r,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})})}),e.jsx("span",{className:"absolute left-0 top-6 right-0 w-full bg-[#FFE4C4] h-[1px] "}),e.jsxs("div",{className:"flex flex-col pt-3",children:[e.jsx("p",{className:" text-white text-center text-xs",children:"Servis"}),e.jsxs("span",{className:"flex flex-row gap-1 mt-2 items-center w-full text-[13px] text-white",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(n,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})}),"Şikayet ve önerilerinizi doğrudan bize iletin"]}),e.jsxs("span",{className:"flex flex-row gap-1 items-center w-full text-[13px] text-white",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(n,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})}),"7/24 müşteri hizmeti"]}),e.jsxs("span",{className:"flex flex-row gap-1 items-center w-full text-[13px] text-white",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(n,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})}),"Türkiyenin her yerine karşı ödemeli kargo"]}),e.jsxs("span",{className:"flex flex-row gap-1 items-center w-full text-[13px] text-white",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(n,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})}),"Ürünlerin hepsi 100% doğal olarak üretilmiştir"]})]}),e.jsxs("div",{className:"flex flex-col pt-3",children:[e.jsx("p",{className:"text-white text-center text-xs",children:"İletişim bilgileri"}),e.jsxs("span",{className:"flex flex-row mt-2 items-center text-[15px] text-white gap-1",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(o,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})}),"+90 538 014 04 09"]}),e.jsxs("span",{className:"flex flex-row items-center text-[15px] text-white gap-1",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(o,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})}),"+90 537 767 12 74"]}),e.jsxs("span",{className:"flex flex-row items-center text-[15px] text-white gap-1",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(x,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})}),"orcikelazig@gmail.com"]})]})]}):e.jsx("span",{className:"flex h-full items-center justify-center",onClick:()=>i({type:"infoOpen"}),children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"X"}),children:e.jsx(c,{fontSize:"small",sx:{color:"bisque"},onClick:()=>i({type:"infoClose"})})})})})};export{u as default};