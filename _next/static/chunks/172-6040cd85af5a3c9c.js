"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{1172:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var l=t(3361),r=t(5809),n=t(8705),i=t(8015);async function s(e,a,t,l,r,n){return fetch("/api/contact",{method:"POST",body:JSON.stringify({name:e,email:a,organization:t,role:l,message:r,formName:n}),headers:{"content-type":"application/json"}})}i.ZP.object({name:i.ZP.string(),email:i.ZP.string().email(),organization:i.ZP.string(),role:i.ZP.string(),message:i.ZP.string(),formName:i.ZP.string()});var o=e=>(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"flex-start",textAlign:"start",width:"100%"},children:[(0,l.jsx)("span",{className:"text-14 font-normal leading-6 text-white",children:e.heading}),(0,l.jsx)("div",{style:{background:"transparent",backgroundClip:"padding-box, border-box",backgroundOrigin:"border-box",border:"1px solid transparent",backgroundImage:"linear-gradient(to right, transparent, transparent), linear-gradient(to right, rgba(175, 91, 249, 1), rgba(85, 122, 233, 1))",borderRadius:"6px",display:"flex",width:"100%"},children:"standard"===e.size?(0,l.jsx)("input",{type:e.type,name:e.name,style:{padding:"12px 16px 12px 12px",color:"white",minHeight:"48px",background:"#30285c",width:"100%",border:"none",borderRadius:"6px"},className:"placeholder:text-14 placeholder:font-normal placeholder:leading-6 placeholder:text-[#ACB4C3]",placeholder:e.placeholder,value:e.value,onChange:e.setValue}):(0,l.jsx)("textarea",{name:e.name,style:{padding:"12px 16px 12px 12px",color:"white",minHeight:"137px ",background:"#30285c",width:"100%",border:"none",borderRadius:"6px"},className:"placeholder:text-14 placeholder:font-normal placeholder:leading-6 placeholder:text-[#ACB4C3]",placeholder:e.placeholder,value:e.value,onChange:a=>e.setValue(a)})})]}),d=t(2495),c=e=>{let[a,t]=(0,r.useState)(""),[i,c]=(0,r.useState)(""),[x,g]=(0,r.useState)(""),[p,u]=(0,r.useState)(""),[h,m]=(0,r.useState)(""),[f,b]=(0,r.useState)(!1),[v,w]=(0,r.useState)(!1),{formName:j}=e,A=async e=>{if(e.preventDefault(),w(!0),f&&""!==a&&""!==i&&""!==x&&""!==p&&""!==h)try{(await s(a,i,x,p,h,j)).ok?alert("Success! We will contact you shortly"):alert("Something went wrong. Please try again later")}catch(e){console.error("Err",e)}};return(0,l.jsxs)("form",{className:"relative w-full overflow-hidden",onSubmit:A,children:[e.icon&&(0,l.jsx)("div",{"aria-hidden":!0,className:"absolute top-0 h-[104px] w-[104px] xl:h-[256px] xl:w-[264px]",children:(0,l.jsx)(n.default,{alt:"the etherfi logo in a big outlined frame",src:d.Z,fill:!0,objectFit:"cover",sizes:"100%"})}),(0,l.jsx)("div",{className:"flex h-full w-full flex-col items-start gap-9 rounded-2xl bg-[#30285c] px-5 py-9 text-start md:px-20 md:py-9 xl:px-[163px] xl:py-[75px] 3xl:items-center 3xl:text-center",children:(0,l.jsxs)("div",{className:"flex w-full flex-col gap-4 ".concat(e.icon?"items-center":"items-start"),children:[!e.icon&&(0,l.jsx)("span",{className:"text-14 uppercase leading-6 text-text-5",children:"Contact"}),e.heading,e.subheading&&(0,l.jsx)("div",{children:e.subheading}),(0,l.jsxs)("div",{className:"grid w-full grid-cols-[1_1fr] gap-4 xl:grid-cols-[repeat(2_1fr)]",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("div",{className:"flex min-w-full flex-grow",children:(0,l.jsx)(o,{heading:"Name",placeholder:"Jane Smith",size:"standard",type:"text",value:a,setValue:e=>t(e.target.value)})}),v&&""===a&&(0,l.jsx)("span",{className:"text-14 leading-6 text-[#FFCCCC]",children:"Please enter a value before submitting"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("div",{className:"flex w-full flex-grow",children:(0,l.jsx)(o,{heading:"Email",placeholder:"your@email.here",size:"standard",type:"email",value:i,setValue:e=>c(e.target.value)})}),v&&""===i&&(0,l.jsx)("span",{className:"text-14 leading-6 text-[#FFCCCC]",children:"Please enter a value before submitting"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("div",{className:"flex min-w-full flex-grow",children:(0,l.jsx)(o,{heading:"Organization",placeholder:"Organization",size:"standard",type:"text",value:x,setValue:e=>g(e.target.value)})}),v&&""===x&&(0,l.jsx)("span",{className:"text-14 leading-6 text-[#FFCCCC]",children:"Please enter a value before submitting"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("div",{className:"flex min-w-full flex-grow",children:(0,l.jsx)(o,{heading:"Role",placeholder:"Role",size:"standard",type:"text",value:p,setValue:e=>u(e.target.value)})}),v&&""===p&&(0,l.jsx)("span",{className:"text-14 leading-6 text-[#FFCCCC]",children:"Please enter a value before submitting"})]}),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",minWidth:"100%",flexGrow:1,gap:"4px"},className:"col-span-1 xl:col-span-2",children:[(0,l.jsx)("div",{className:"flex min-w-full flex-grow",children:(0,l.jsx)(o,{heading:"Message",placeholder:"Your message here",size:"large",type:"text",value:h,setValue:e=>m(e.target.value)})}),v&&""===h&&(0,l.jsx)("span",{className:"text-14 leading-6 text-[#FFCCCC]",children:"Please enter a value before submitting"})]})]}),(0,l.jsxs)("div",{className:"flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-0",children:[(0,l.jsxs)("label",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"nowrap"},className:"text-14 leading-6 text-white",children:[(0,l.jsx)("input",{type:"checkbox",className:"border-1 peer relative m-0 h-4 w-4 appearance-none rounded border-transparent text-white",onChange:()=>{b(e=>!e)},style:{background:f?"#1553f8":"linear-gradient(#58527b, #58527b) padding-box, linear-gradient(to right, rgba(175, 91, 249, 1), rgba(85, 122, 233, 1)) border-box"}}),(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"12px",height:"12px",className:"pointer-events-none absolute ml-[2px] hidden h-3 w-3 stroke-white pt-[2px] outline-none peer-checked:block",children:(0,l.jsx)("path",{d:"M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"})}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"text-white",children:"I agree to the "}),(0,l.jsx)("a",{href:"/documents/etherfi_privacy-policy.pdf",target:"_blank",rel:"noferrer noopener",style:{background:"linear-gradient(to right, transparent, transparent), linear-gradient(to right, rgba(175, 91, 249, 1), rgba(85, 122, 233, 1))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",margin:"0px 3px"},children:"Privacy Policy"})," ","and"," ",(0,l.jsx)("a",{href:"/documents/etherfi_terms-of-use.pdf",target:"_blank",rel:"noferrer noopener",style:{background:"linear-gradient(to right, transparent, transparent), linear-gradient(to right, rgba(175, 91, 249, 1), rgba(85, 122, 233, 1))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",margin:"0px 3px"},children:"Terms of Use"})]})]}),(0,l.jsx)("button",{className:"whitespace-nowrap rounded-lg border-none bg-gradient-to-r from-[#29BCFA] via-[#6464E4] to-[#B45AFA] bg-[length:200%_100%] bg-[50%_50%] px-[4rem] py-[1rem] text-center text-14 text-white hover:bg-[100%_50%] disabled:cursor-not-allowed disabled:opacity-50",disabled:!f,type:"submit",style:{cursor:"pointer",transition:"background-position 0.5s ease-in-out"},children:e.buttonText})]})]})})]})}},8705:function(e,a,t){t.d(a,{default:function(){return r.a}});var l=t(6719),r=t.n(l)},6719:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{getImageProps:function(){return s},default:function(){return o}});let l=t(1640),r=t(4042),n=t(8095),i=l._(t(8923)),s=e=>{let{props:a}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(a))void 0===t&&delete a[e];return{props:a}},o=n.Image},2495:function(e,a){a.Z={src:"/_next/static/media/full-etherfi-frame.650f4d59.webp",height:281,width:288,blurDataURL:"data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABcCTbtukq2u3vlm0jtp20ExFh3PbxAtCv1xqgFlfgH7K6vi5abXr4jZPH7C8X7manTPodCKe3kAO05xwAAFZQOCBIAAAAEAIAnQEqCAAIAAJAOCUAToDFPO2FBdFUgAD+9JJaX1F3lDm3V3+NRYnnTJroZtYg1fAE3+ahTm6rjTXqpPfvkIe2pI4YRIAA",blurWidth:8,blurHeight:8}}}]);