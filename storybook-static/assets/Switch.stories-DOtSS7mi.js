import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{c}from"./clsx-B-dksMZM.js";import{r as j}from"./index-Bgw4UDry.js";const i=({checked:e,onChange:m,disabled:a,size:r="md"})=>d.jsx("button",{type:"button",className:c("relative inline-flex items-center rounded-full transition-all duration-300",{"w-10 h-5 p-0.5":r==="sm","w-12 h-6 p-0.5":r==="md","w-16 h-8 p-1":r==="lg","bg-gray-300":!e,"bg-blue-500":e,"cursor-not-allowed opacity-50":a}),onClick:()=>!a&&m(!e),disabled:a,children:d.jsx("span",{className:c("inline-block bg-white rounded-full shadow transition-all duration-300",{"w-4 h-4":r==="sm","w-5 h-5":r==="md","w-7 h-7":r==="lg","translate-x-0":!e,"translate-x-full":e})})});i.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}}};const k={title:"Components/Switch",component:i,argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:"boolean"}}},l=e=>{const[m,a]=j.useState(!1);return d.jsx(i,{...e,checked:m,onChange:a})},s={render:l,args:{size:"sm"}},n={render:l,args:{size:"md"}},t={render:l,args:{size:"lg"}},o={render:l,args:{disabled:!0}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "sm"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "md"
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,x,y;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: "lg"
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,T,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true
  }
}`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const z=["Small","Medium","Large","Disabled"];export{o as Disabled,t as Large,n as Medium,s as Small,z as __namedExportsOrder,k as default};
