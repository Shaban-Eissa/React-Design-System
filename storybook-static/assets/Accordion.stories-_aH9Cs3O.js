import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-Bgw4UDry.js";import{c as i}from"./clsx-B-dksMZM.js";import{c as x}from"./createLucideIcon-CfmqmWTd.js";import{C as I}from"./chevron-down-BDRkFGx-.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],C=x("ChevronUp",A),u=({items:f,multiple:h=!1,className:g})=>{const[y,w]=b.useState([]),S=e=>{w(t=>h?t.includes(e)?t.filter(o=>o!==e):[...t,e]:t.includes(e)?[]:[e])};return n.jsx("div",{className:i("space-y-2",g),children:f.map((e,t)=>{const o=y.includes(t);return n.jsxs("div",{className:"border border-gray-300 rounded-lg shadow-sm",children:[n.jsxs("button",{className:"w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 text-lg font-medium transition-all duration-200 rounded-lg",onClick:()=>S(t),children:[n.jsx("span",{className:"text-gray-800",children:e.title}),o?n.jsx(C,{className:"w-5 h-5 text-gray-600"}):n.jsx(I,{className:"w-5 h-5 text-gray-600"})]}),n.jsx("div",{className:i("overflow-hidden transition-all duration-300 ease-in-out",o?"max-h-screen p-4 bg-gray-50 text-gray-700":"max-h-0 p-0"),children:e.content})]},t)})})};u.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/Accordion",component:u,argTypes:{multiple:{control:"boolean"}}},s={args:{items:[{title:"What is Tailwind CSS?",content:"Tailwind CSS is a utility-first CSS framework for building modern web designs."},{title:"Why use React?",content:"React makes it painless to create interactive UIs with a component-based approach."},{title:"How does Storybook help?",content:"Storybook allows you to develop and test UI components in isolation."}],multiple:!1}},r={args:{items:[{title:"Accordion Item 1",content:"Here is some detailed content for item 1."},{title:"Accordion Item 2",content:"Another explanation for item 2."},{title:"Accordion Item 3",content:"Finally, the content for item 3."}],multiple:!0}};var a,c,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "What is Tailwind CSS?",
      content: "Tailwind CSS is a utility-first CSS framework for building modern web designs."
    }, {
      title: "Why use React?",
      content: "React makes it painless to create interactive UIs with a component-based approach."
    }, {
      title: "How does Storybook help?",
      content: "Storybook allows you to develop and test UI components in isolation."
    }],
    multiple: false
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Accordion Item 1",
      content: "Here is some detailed content for item 1."
    }, {
      title: "Accordion Item 2",
      content: "Another explanation for item 2."
    }, {
      title: "Accordion Item 3",
      content: "Finally, the content for item 3."
    }],
    multiple: true
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const U=["SingleOpen","MultipleOpen"];export{r as MultipleOpen,s as SingleOpen,U as __namedExportsOrder,O as default};
