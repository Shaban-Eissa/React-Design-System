import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-Bgw4UDry.js";import{c as f}from"./clsx-B-dksMZM.js";import{C as V}from"./chevron-down-BDRkFGx-.js";import"./createLucideIcon-CfmqmWTd.js";const T=({options:i,label:d,placeholder:q="Select an option...",disabled:c=!1,variant:p="default",className:_})=>{var u;const[o,k]=b.useState(null),[n,m]=b.useState(!1),E=e=>{k(e),m(!1)};return a.jsxs("div",{className:f("relative w-full max-w-xs",_),children:[d&&a.jsx("label",{className:"block text-gray-700 mb-1",children:d}),a.jsxs("div",{className:f("flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all","bg-white border border-gray-300",n&&"ring-2 ring-blue-400",c&&"opacity-50 cursor-not-allowed",p==="bordered"&&"border border-gray-500",p==="minimal"&&"border-none shadow-sm"),onClick:()=>!c&&m(!n),children:[a.jsx("span",{className:o?"text-gray-900":"text-gray-400",children:o?(u=i.find(e=>e.value===o))==null?void 0:u.label:q}),a.jsx(V,{size:18,className:"text-gray-600"})]}),n&&a.jsx("ul",{className:"absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10",children:i.map(e=>a.jsx("li",{className:"px-3 py-2 hover:bg-gray-100 cursor-pointer transition",onClick:()=>E(e.value),children:e.label},e.value))})]})};T.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select an option..."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "bordered" | "minimal"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"minimal"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Select",component:T,argTypes:{variant:{control:{type:"radio"},options:["default","bordered","minimal"]},disabled:{control:"boolean"}}},r={args:{label:"Choose an option",placeholder:"Select...",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],variant:"default"}},s={args:{...r.args,variant:"bordered"}},t={args:{...r.args,variant:"minimal"}},l={args:{...r.args,disabled:!0}};var g,v,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Choose an option",
    placeholder: "Select...",
    options: [{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }],
    variant: "default"
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,h,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "bordered"
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,O,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "minimal"
  }
}`,...(j=(O=t.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var N,D,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const F=["Default","Bordered","Minimal","Disabled"];export{s as Bordered,r as Default,l as Disabled,t as Minimal,F as __namedExportsOrder,R as default};
