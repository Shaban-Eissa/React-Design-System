import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-Bgw4UDry.js";import{c as q}from"./clsx-B-dksMZM.js";import{X as D}from"./x-BmU9u4_a.js";import{I as V,C as W}from"./info-UXsLvUli.js";import{T as _,C as H}from"./triangle-alert-uDCOYWzZ.js";import"./createLucideIcon-CfmqmWTd.js";const X={default:"bg-gray-800 text-white",success:"bg-green-600 text-white",error:"bg-red-600 text-white",warning:"bg-yellow-500 text-white",info:"bg-blue-600 text-white"},Y={"top-left":"top-4 left-4","top-right":"top-4 right-4","bottom-left":"bottom-4 left-4","bottom-right":"bottom-4 right-4","top-center":"top-4 left-1/2 transform -translate-x-1/2","bottom-center":"bottom-4 left-1/2 transform -translate-x-1/2"},z={default:null,success:e.jsx(H,{className:"w-5 h-5 text-white"}),error:e.jsx(W,{className:"w-5 h-5 text-white"}),warning:e.jsx(_,{className:"w-5 h-5 text-white"}),info:e.jsx(V,{className:"w-5 h-5 text-white"})},j=({message:N,status:i="default",position:E="top-left",autoClose:l=!0,duration:u=3e3,onClose:n})=>(k.useEffect(()=>{if(l){const I=setTimeout(()=>{n()},u);return()=>clearTimeout(I)}},[l,u,n]),e.jsxs("div",{className:q("fixed z-50 flex items-center gap-3 p-4 rounded-lg shadow-lg",X[i],Y[E]),children:[z[i],e.jsx("span",{className:"text-sm font-medium",children:N}),e.jsx("button",{onClick:n,className:"ml-auto text-white hover:opacity-75",children:e.jsx(D,{className:"w-4 h-4"})})]}));j.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-left"',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const J={title:"Components/Toast",component:j,argTypes:{status:{control:"select",options:["default","success","error","warning","info"]},position:{control:"select",options:["top-left","top-right","bottom-left","bottom-right","top-center","bottom-center"]},autoClose:{control:"boolean"},duration:{control:"number"}}},t={args:{message:"This is a toast notification!",status:"default",position:"top-left",autoClose:!0,duration:3e3}},s={args:{...t.args,message:"Success! Your action was completed.",status:"success"}},r={args:{...t.args,message:"Error! Something went wrong.",status:"error"}},a={args:{...t.args,message:"Warning! Check your inputs.",status:"warning"}},o={args:{...t.args,message:"Info! Here’s something you should know.",status:"info"}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: "This is a toast notification!",
    status: "default",
    position: "top-left",
    autoClose: true,
    duration: 3000
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,f,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    message: "Success! Your action was completed.",
    status: "success"
  }
}`,...(d=(f=s.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var h,w,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    message: "Error! Something went wrong.",
    status: "error"
  }
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,v,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    message: "Warning! Check your inputs.",
    status: "warning"
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,S,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    message: "Info! Here’s something you should know.",
    status: "info"
  }
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const K=["Default","Success","Error","Warning","Info"];export{t as Default,r as Error,o as Info,s as Success,a as Warning,K as __namedExportsOrder,J as default};
