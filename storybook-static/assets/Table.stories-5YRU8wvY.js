import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as g}from"./clsx-B-dksMZM.js";const u=({headers:p,data:C,variant:a="default",className:_})=>e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:g("w-full text-left border-collapse rounded-lg overflow-hidden",{"border border-gray-300":a==="bordered","divide-y divide-gray-200":a==="striped","hover:table-hover":a==="hoverable","text-sm":a==="compact"},_),children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsx("tr",{children:p.map((c,i)=>e.jsx("th",{className:"px-4 py-2 font-semibold text-gray-700",children:c},i))})}),e.jsx("tbody",{children:C.map((c,i)=>e.jsx("tr",{className:g({"odd:bg-gray-50 even:bg-white":a==="striped","hover:bg-gray-100 transition":a==="hoverable"}),children:c.map((B,E)=>e.jsx("td",{className:"px-4 py-2 border-b border-gray-200",children:B},E))},i))})]})});u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{headers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}],raw:"(string | number)[][]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "striped" | "bordered" | "hoverable" | "compact"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"striped"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"hoverable"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/Table",component:u,argTypes:{variant:{control:{type:"radio"},options:["default","striped","bordered","hoverable","compact"]}}},r=["Name","Age","Role"],s=[["Alice",28,"Engineer"],["Bob",32,"Designer"],["Charlie",25,"Developer"]],t=p=>e.jsx(u,{...p}),d={render:t,args:{headers:r,data:s,variant:"default"}},n={render:t,args:{headers:r,data:s,variant:"striped"}},o={render:t,args:{headers:r,data:s,variant:"bordered"}},l={render:t,args:{headers:r,data:s,variant:"hoverable"}},m={render:t,args:{headers:r,data:s,variant:"compact"}};var b,h,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers: sampleHeaders,
    data: sampleData,
    variant: "default"
  }
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,y,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers: sampleHeaders,
    data: sampleData,
    variant: "striped"
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,j,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers: sampleHeaders,
    data: sampleData,
    variant: "bordered"
  }
}`,...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var w,N,H;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers: sampleHeaders,
    data: sampleData,
    variant: "hoverable"
  }
}`,...(H=(N=l.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var S,A,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    headers: sampleHeaders,
    data: sampleData,
    variant: "compact"
  }
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const O=["Default","Striped","Bordered","Hoverable","Compact"];export{o as Bordered,m as Compact,d as Default,l as Hoverable,n as Striped,O as __namedExportsOrder,I as default};
