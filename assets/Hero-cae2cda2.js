import{j as i,m as e,r as t,_ as s}from"./index-90660f26.js";function o(){return i.jsx(e.div,{initial:{opacity:0},animate:{opacity:1},viewport:{once:!0},transition:{duration:1,delay:1},className:"mouse",children:i.jsx("div",{className:"wheel"})})}function l(){const a=t.lazy(()=>s(()=>import("./ArrowUpward-61503f55.js").then(n=>n.A),["assets/ArrowUpward-61503f55.js","assets/createSvgIcon-3ddcdaee.js","assets/index-90660f26.js","assets/index-c91b86d3.css"]));return i.jsx(e.div,{initial:{opacity:0},animate:{opacity:1},viewport:{once:!0},transition:{duration:1,delay:0},children:i.jsx("div",{className:"arrow",children:i.jsx(t.Suspense,{fallback:i.jsx("div",{children:"X"}),children:i.jsx(a,{fontSize:"medium",sx:{color:"burlywood"},className:"arrow"})})})})}const c=()=>i.jsxs("div",{id:"background-image",className:"w-full bg-[#FFE4C4] flex flex-col items-center justify-center h-full min-h-screen",children:[i.jsx(e.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:0},className:"flex h-full w-full justify-center text-center ",children:i.jsx("span",{className:"font-[Poppins,sans-seriff] text-6xl text text-[#c38444]",children:"Elazigin en kaliteli orcigi"})}),i.jsx("div",{className:"desktop-animate hidden lg:block",children:i.jsx(o,{})}),i.jsx("div",{className:"mobile-animate block lg:hidden",children:i.jsx(l,{})})]});export{c as default};