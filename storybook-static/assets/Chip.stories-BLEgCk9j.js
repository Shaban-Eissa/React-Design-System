import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as _}from"./clsx-B-dksMZM.js";import{X as q}from"./x-BmU9u4_a.js";import{c as O}from"./createLucideIcon-CfmqmWTd.js";import"./index-Bgw4UDry.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],w=O("Star",R),S=({label:I,variant:n="default",icon:i,onClose:o,className:T})=>e.jsxs("div",{className:_("inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full transition-all",{"bg-gray-200 text-gray-800":n==="default","border border-gray-400 text-gray-800":n==="outlined","bg-blue-600 text-white":n==="filled"},T),children:[i&&e.jsx("span",{className:"text-lg",children:i}),e.jsx("span",{children:I}),o&&e.jsx("button",{onClick:o,className:"text-gray-600 hover:text-gray-900",children:e.jsx(q,{size:14})})]});S.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outlined" | "filled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"filled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Components/Chip",component:S,argTypes:{variant:{control:"radio",options:["default","outlined","filled"]}}},a={args:{label:"Default Chip",variant:"default"}},r={args:{label:"Outlined Chip",variant:"outlined"}},t={args:{label:"Filled Chip",variant:"filled"}},l={args:{label:"With Icon",variant:"filled",icon:e.jsx(w,{size:14})}},s={args:{label:"Closable Chip",variant:"default",onClose:()=>alert("Chip closed!")}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Default Chip",
    variant: "default"
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Outlined Chip",
    variant: "outlined"
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Filled Chip",
    variant: "filled"
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var C,x,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "With Icon",
    variant: "filled",
    icon: <Star size={14} />
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,j,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Closable Chip",
    variant: "default",
    onClose: () => alert("Chip closed!")
  }
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const E=["Default","Outlined","Filled","WithIcon","Closable"];export{s as Closable,a as Default,t as Filled,r as Outlined,l as WithIcon,E as __namedExportsOrder,k as default};
