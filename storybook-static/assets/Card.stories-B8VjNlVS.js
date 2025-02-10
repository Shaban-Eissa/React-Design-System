import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as S}from"./clsx-B-dksMZM.js";import{B as a}from"./Button-7-53413o.js";const T=({title:d,description:c,image:l,actions:p,variant:t="default",className:N})=>e.jsxs("div",{className:S("rounded-xl overflow-hidden bg-white transition-all duration-300 w-96",{"shadow-lg hover:shadow-xl":t==="shadow","border border-gray-300":t==="bordered","p-2":t==="shadow"||t==="bordered"},N),children:[l&&e.jsx("img",{src:l,alt:d,className:"w-full h-48 rounded-xl object-cover bg-center"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:d}),c&&e.jsx("p",{className:"text-gray-600 mt-2",children:c}),p&&e.jsx("div",{className:"mt-4 flex gap-2",children:p})]})]});T.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "withImage" | "bordered" | "shadow"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"withImage"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"shadow"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Components/Card",component:T,argTypes:{variant:{control:"radio",options:["default","withImage","bordered","shadow"]}}},r={args:{title:"Default Card",description:"This is a simple card with a title and description."}},n={args:{title:"Beautiful Landscape",description:"A stunning view of nature captured in this card.",image:"https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",variant:"withImage",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",children:"Action 1"}),e.jsx(a,{variant:"secondary",children:"Action 2"})]})}},s={args:{title:"Bordered Card",description:"A card with a bordered style.",image:"https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",variant:"bordered",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",children:"Action 1"}),e.jsx(a,{variant:"secondary",children:"Action 2"})]})}},i={args:{title:"Shadow Card",description:"This card has a shadow and smooth hover effect.",image:"https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",variant:"shadow",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",children:"Action 1"}),e.jsx(a,{variant:"secondary",children:"Action 2"})]})}},o={args:{title:"Card with Actions",description:"You can add buttons or any actions below the content.",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",children:"Action 1"}),e.jsx(a,{variant:"secondary",children:"Action 2"})]})}};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Default Card",
    description: "This is a simple card with a title and description."
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,w,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Beautiful Landscape",
    description: "A stunning view of nature captured in this card.",
    image: "https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",
    variant: "withImage",
    actions: <>\r
                <Button variant="primary">Action 1</Button>\r
                <Button variant="secondary">Action 2</Button>\r
            </>
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var y,v,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "Bordered Card",
    description: "A card with a bordered style.",
    image: "https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",
    variant: "bordered",
    actions: <>\r
                <Button variant="primary">Action 1</Button>\r
                <Button variant="secondary">Action 2</Button>\r
            </>
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,A,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Shadow Card",
    description: "This card has a shadow and smooth hover effect.",
    image: "https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",
    variant: "shadow",
    actions: <>\r
                <Button variant="primary">Action 1</Button>\r
                <Button variant="secondary">Action 2</Button>\r
            </>
  }
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var b,q,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Card with Actions",
    description: "You can add buttons or any actions below the content.",
    actions: <>\r
                <Button variant="primary">Action 1</Button>\r
                <Button variant="secondary">Action 2</Button>\r
            </>
  }
}`,...(C=(q=o.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const F=["Default","WithImage","Bordered","Shadow","WithActions"];export{s as Bordered,r as Default,i as Shadow,o as WithActions,n as WithImage,F as __namedExportsOrder,D as default};
