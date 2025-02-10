import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as S}from"./clsx-B-dksMZM.js";const q={h1:"text-4xl font-bold",h2:"text-3xl font-semibold",h3:"text-2xl font-semibold",h4:"text-xl font-medium",h5:"text-lg font-medium",h6:"text-base font-medium",p:"text-base text-gray-700",small:"text-sm text-gray-500",link:"text-blue-600 hover:underline"},e=({variant:r="p",as:f,className:H,href:l,children:k,...j})=>{const b=f||(r==="link"?"a":r);return a.jsx(b,{className:S(q[r],H),...l&&r==="link"?{href:l}:{},...j,children:k})};e.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "link"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"p"'},{name:"literal",value:'"small"'},{name:"literal",value:'"link"'}]},description:"",defaultValue:{value:'"p"',computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},className:{required:!1,tsType:{name:"string"},description:""},href:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Components/Typography",component:e,argTypes:{variant:{control:"radio",options:["h1","h2","h3","h4","h5","h6","p","small","link"]},href:{control:"text"}}},n={render:()=>a.jsxs("div",{children:[a.jsx(e,{variant:"h1",children:"Heading 1"}),a.jsx(e,{variant:"h2",children:"Heading 2"}),a.jsx(e,{variant:"h3",children:"Heading 3"}),a.jsx(e,{variant:"h4",children:"Heading 4"}),a.jsx(e,{variant:"h5",children:"Heading 5"}),a.jsx(e,{variant:"h6",children:"Heading 6"})]})},t={args:{variant:"p",children:"This is a paragraph text."}},s={args:{variant:"small",children:"This is small text."}},i={args:{variant:"link",href:"#",children:"This is a link"}};var o,p,h;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div>\r
            <Typography variant="h1">Heading 1</Typography>\r
            <Typography variant="h2">Heading 2</Typography>\r
            <Typography variant="h3">Heading 3</Typography>\r
            <Typography variant="h4">Heading 4</Typography>\r
            <Typography variant="h5">Heading 5</Typography>\r
            <Typography variant="h6">Heading 6</Typography>\r
        </div>
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "p",
    children: "This is a paragraph text."
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,y,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "small",
    children: "This is small text."
  }
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,v,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "link",
    href: "#",
    children: "This is a link"
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const N=["Headings","Paragraph","SmallText","Link"];export{n as Headings,i as Link,t as Paragraph,s as SmallText,N as __namedExportsOrder,C as default};
