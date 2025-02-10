import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-Bgw4UDry.js";import{c as E}from"./clsx-B-dksMZM.js";const W={success:"bg-green-100 text-green-800 border-green-300",error:"bg-red-100 text-red-800 border-red-300",warning:"bg-yellow-100 text-yellow-800 border-yellow-300",info:"bg-blue-100 text-blue-800 border-blue-300"},v=({variant:h="info",dismissible:x=!1,className:w,children:y,...S})=>{const[T,j]=C.useState(!0);return T?n.jsxs("div",{className:E("p-4 border rounded-md flex justify-between items-start space-x-4",W[h],w),...S,children:[n.jsx("div",{children:y}),x&&n.jsx("button",{className:"text-xl font-bold text-gray-600 hover:text-gray-800",onClick:()=>j(!1),children:"×"})]}):null};v.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const I={title:"Components/Alert",component:v,argTypes:{variant:{control:{type:"radio"},options:["success","error","warning","info"]},dismissible:{control:{type:"boolean"}}}},e={args:{variant:"success",children:"This is a success message!",dismissible:!0}},r={args:{variant:"error",children:"Something went wrong!",dismissible:!0}},s={args:{variant:"warning",children:"Warning: Check your settings!",dismissible:!0}},a={args:{variant:"info",children:"This is an informational message.",dismissible:!0}};var i,t,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "This is a success message!",
    dismissible: true
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "error",
    children: "Something went wrong!",
    dismissible: true
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Warning: Check your settings!",
    dismissible: true
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,f,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "This is an informational message.",
    dismissible: true
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const N=["Success","Error","Warning","Info"];export{r as Error,a as Info,e as Success,s as Warning,N as __namedExportsOrder,I as default};
