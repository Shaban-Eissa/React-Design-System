import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./index-Bgw4UDry.js";import{c as v}from"./clsx-B-dksMZM.js";import{C as E}from"./chevron-down-BDRkFGx-.js";import{c as V}from"./createLucideIcon-CfmqmWTd.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],R=V("Check",L),I=({label:m,options:c,variant:s="default",disabled:f=!1,className:M})=>{var g;const[l,b]=z.useState(""),F=e=>{b(s==="multiple"?r=>Array.isArray(r)?r.includes(e)?r.filter(p=>p!==e):[...r,e]:[e]:e)};return a.jsxs("div",{className:"flex flex-col gap-2 w-full max-w-md",children:[m&&a.jsx("label",{className:"text-sm font-medium text-gray-700",children:m}),a.jsxs("div",{className:v("relative flex items-center w-full px-4 py-2 rounded-lg cursor-pointer transition-all duration-300","focus-within:ring-2 focus-within:ring-blue-500",{"border border-gray-300 bg-white":s==="default","border border-gray-500 bg-white":s==="outlined","bg-blue-50 text-gray-900 border border-blue-400":s==="filled","opacity-50 cursor-not-allowed":f},M),children:[a.jsxs("div",{className:"flex w-full items-center justify-between",children:[a.jsx("span",{className:"text-gray-800",children:Array.isArray(l)?l.map(e=>{var r;return(r=c.find(p=>p.value===e))==null?void 0:r.label}).join(", "):((g=c.find(e=>e.value===l))==null?void 0:g.label)||"Select an option"}),a.jsx(E,{size:18,className:"text-gray-500"})]}),a.jsx("div",{className:"absolute left-0 top-full w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 overflow-hidden z-10",children:c.map(e=>a.jsxs("div",{className:v("px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between",{"bg-blue-100":Array.isArray(l)?l.includes(e.value):l===e.value}),onClick:()=>!f&&F(e.value),children:[e.label,Array.isArray(l)&&l.includes(e.value)&&a.jsx(R,{size:16})]},e.value))})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outlined" | "filled" | "withIcon" | "multiple"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"withIcon"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Components/Dropdown",component:I,argTypes:{variant:{control:"radio",options:["default","outlined","filled","withIcon","multiple"]},disabled:{control:"boolean"},label:{control:"text"}}},t=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],n={args:{label:"Default Dropdown",variant:"default",options:t}},o={args:{label:"Outlined Dropdown",variant:"outlined",options:t}},i={args:{label:"Filled Dropdown",variant:"filled",options:t}},d={args:{label:"Multiple Select",variant:"multiple",options:t}},u={args:{label:"Disabled Dropdown",variant:"default",options:t,disabled:!0}};var w,y,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Default Dropdown",
    variant: "default",
    options: sampleOptions
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,D,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Outlined Dropdown",
    variant: "outlined",
    options: sampleOptions
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var O,N,S;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Filled Dropdown",
    variant: "filled",
    options: sampleOptions
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var A,q,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Multiple Select",
    variant: "multiple",
    options: sampleOptions
  }
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var C,T,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Disabled Dropdown",
    variant: "default",
    options: sampleOptions,
    disabled: true
  }
}`,...(_=(T=u.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const Q=["Default","Outlined","Filled","Multiple","Disabled"];export{n as Default,u as Disabled,i as Filled,d as Multiple,o as Outlined,Q as __namedExportsOrder,P as default};
