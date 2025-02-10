import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-Bgw4UDry.js";import{c as r}from"./clsx-B-dksMZM.js";const F={default:e=>r("text-gray-700 font-semibold transition-all px-4 py-2 rounded-md",e&&"bg-gray-100 "),underlined:e=>r("px-4 py-2 border-b-2 transition-all",e?"border-blue-600 text-blue-700 font-bold bg-blue-100 rounded-md":"border-transparent hover:border-gray-400 text-gray-600"),pills:e=>r("rounded-full px-5 py-2 transition-all",e?"bg-blue-600 text-white":"bg-gray-200 hover:bg-gray-300"),outlined:e=>r("border border-gray-300 px-4 py-2 rounded-md transition-all",e&&"bg-gray-100"),filled:e=>r("px-5 py-2 rounded-md font-semibold transition-all",e?"bg-blue-600 text-white":"bg-gray-300 hover:bg-gray-400")},c=({tabs:e,variant:q="default",className:E})=>{const[u,O]=D.useState(0);return a.jsxs("div",{className:r("w-full",E),children:[a.jsx("div",{className:"flex space-x-2",children:e.map((A,p)=>a.jsx("button",{className:F[q](u===p),onClick:()=>O(p),children:A.label},p))}),a.jsx("div",{className:"p-4 my-4 border border-gray-200 rounded-lg",children:e[u].content})]})};c.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "underlined" | "pills" | "outlined" | "filled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"underlined"'},{name:"literal",value:'"pills"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"filled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Components/Tabs",component:c,argTypes:{variant:{control:{type:"radio"},options:["default","underlined","pills","outlined","filled"]}}},t=[{label:"Tab 1",content:a.jsx("p",{children:"Content for Tab 1"})},{label:"Tab 2",content:a.jsx("p",{children:"Content for Tab 2"})},{label:"Tab 3",content:a.jsx("p",{children:"Content for Tab 3"})}],n=e=>a.jsx(c,{...e}),s={render:n,args:{tabs:t,variant:"default"}},l={render:n,args:{tabs:t,variant:"underlined"}},o={render:n,args:{tabs:t,variant:"pills"}},d={render:n,args:{tabs:t,variant:"outlined"}},i={render:n,args:{tabs:t,variant:"filled"}};var m,b,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: sampleTabs,
    variant: "default"
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,T,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: sampleTabs,
    variant: "underlined"
  }
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var x,y,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: sampleTabs,
    variant: "pills"
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,N,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: sampleTabs,
    variant: "outlined"
  }
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var w,C,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: sampleTabs,
    variant: "filled"
  }
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const I=["Default","Underlined","Pills","Outlined","Filled"];export{s as Default,i as Filled,d as Outlined,o as Pills,l as Underlined,I as __namedExportsOrder,k as default};
