import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-Bgw4UDry.js";import{c as C}from"./clsx-B-dksMZM.js";import{c as _}from"./createLucideIcon-CfmqmWTd.js";import{X as k}from"./x-BmU9u4_a.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],E=_("Upload",q),P=({label:c,variant:t="default",disabled:p=!1,className:A})=>{var m;const[r,n]=u.useState(null),[F,d]=u.useState(!1),S=a=>{a.target.files&&a.target.files.length>0&&n(a.target.files[0])},T=a=>{a.preventDefault(),d(!1),a.dataTransfer.files&&a.dataTransfer.files.length>0&&n(a.dataTransfer.files[0])};return e.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-md",children:[c&&e.jsx("label",{className:"text-sm font-medium text-gray-700",children:c}),e.jsxs("div",{className:C("relative flex flex-col items-center justify-center w-full p-6 rounded-xl border transition-all duration-300 cursor-pointer",{"border-gray-300 bg-white hover:bg-gray-50":t==="default","border-blue-400 bg-blue-50 hover:bg-blue-100":t==="dragAndDrop","border-gray-500 bg-gray-50 hover:bg-gray-100":t==="withPreview","opacity-50 cursor-not-allowed":p,"ring-2 ring-blue-400":F},A),onDragOver:a=>{a.preventDefault(),d(!0)},onDragLeave:()=>d(!1),onDrop:T,children:[e.jsx("input",{type:"file",className:"hidden",id:"fileUpload",onChange:S,disabled:p}),e.jsx(E,{size:36,className:"text-blue-500 transition-transform duration-200 hover:scale-110"}),e.jsx("p",{className:"text-gray-700 mt-2 font-medium",children:r?r.name:"Drag & drop or click to upload"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Supported formats: PNG, JPG, PDF"}),e.jsx("label",{htmlFor:"fileUpload",className:"mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md transition hover:bg-blue-700 active:bg-blue-800 cursor-pointer",children:"Choose File"})]}),t==="withPreview"&&r&&e.jsxs("div",{className:"relative mt-2 p-4 border rounded-xl flex items-center justify-between bg-gray-100 shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md",children:((m=r.type.split("/")[1])==null?void 0:m.toUpperCase())||"FILE"}),e.jsx("p",{className:"text-sm text-gray-800 font-medium",children:r.name})]}),e.jsx("button",{className:"text-red-500 hover:text-red-700 transition-all",onClick:()=>n(null),"aria-label":"Remove file",children:e.jsx(k,{size:18})})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "dragAndDrop" | "withPreview"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"dragAndDrop"'},{name:"literal",value:'"withPreview"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/FileUpload",component:P,argTypes:{variant:{control:"radio",options:["default","dragAndDrop","withPreview"]},disabled:{control:"boolean"},label:{control:"text"}}},l={args:{label:"Upload a file",variant:"default"}},s={args:{label:"Drag & Drop Upload",variant:"dragAndDrop"}},o={args:{label:"Upload with Preview",variant:"withPreview"}},i={args:{label:"Disabled Upload",variant:"default",disabled:!0}};var f,g,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Upload a file",
    variant: "default"
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Drag & Drop Upload",
    variant: "dragAndDrop"
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,y,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Upload with Preview",
    variant: "withPreview"
  }
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var j,N,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Disabled Upload",
    variant: "default",
    disabled: true
  }
}`,...(U=(N=i.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const V=["Default","DragAndDrop","WithPreview","Disabled"];export{l as Default,i as Disabled,s as DragAndDrop,o as WithPreview,V as __namedExportsOrder,R as default};
