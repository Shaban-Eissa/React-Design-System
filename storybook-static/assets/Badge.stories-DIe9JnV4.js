import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./clsx-B-dksMZM.js";const b={primary:"bg-blue-100 text-blue-800",secondary:"bg-gray-100 text-gray-800",success:"bg-green-100 text-green-800",warning:"bg-yellow-100 text-yellow-800",error:"bg-red-100 text-red-800",info:"bg-indigo-100 text-indigo-800"},w={small:"text-xs px-2 py-0.5",medium:"text-sm px-3 py-1",large:"text-base px-4 py-1.5"},S={rounded:"rounded-md",pill:"rounded-full",square:"rounded-none"},c=({variant:p="primary",size:g="medium",shape:y="rounded",children:f,className:v})=>x.jsx("span",{className:h("inline-flex items-center font-medium",b[p],w[g],S[y],v),children:f});c.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof badgeVariants",elements:[{name:"literal",value:"primary"},{name:"literal",value:"secondary"},{name:"literal",value:"success"},{name:"literal",value:"warning"},{name:"literal",value:"error"},{name:"literal",value:"info"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"keyof typeof badgeSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}]},description:"",defaultValue:{value:'"medium"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"keyof typeof badgeShapes",elements:[{name:"literal",value:"rounded"},{name:"literal",value:"pill"},{name:"literal",value:"square"}]},description:"",defaultValue:{value:'"rounded"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Badge",component:c,argTypes:{variant:{control:"radio",options:["primary","secondary","success","warning","error","info"]},size:{control:"radio",options:["small","medium","large"]},shape:{control:"radio",options:["rounded","pill","square"]}}},e={args:{variant:"primary",size:"medium",shape:"rounded",children:"Primary Badge"}},a={args:{variant:"success",size:"medium",shape:"rounded",children:"Success Badge"}},r={args:{variant:"warning",size:"medium",shape:"rounded",children:"Warning Badge"}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    shape: "rounded",
    children: "Primary Badge"
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var t,o,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "medium",
    shape: "rounded",
    children: "Success Badge"
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "medium",
    shape: "rounded",
    children: "Warning Badge"
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const T=["Primary","Success","Warning"];export{e as Primary,a as Success,r as Warning,T as __namedExportsOrder,q as default};
