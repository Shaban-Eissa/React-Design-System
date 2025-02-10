import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as y}from"./clsx-B-dksMZM.js";const b=({items:h,separator:g="/",className:x})=>e.jsx("nav",{className:y("flex items-center text-gray-600 text-sm",x),"aria-label":"Breadcrumb",children:h.map((r,n)=>e.jsxs("span",{className:"flex items-center",children:[n>0&&e.jsx("span",{className:"mx-2",children:g}),r.href?e.jsx("a",{href:r.href,className:"text-blue-600 hover:underline",children:r.label}):e.jsx("span",{className:"text-gray-500",children:r.label})]},n))});b.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"/"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Components/Breadcrumb",component:b,argTypes:{separator:{control:"text"}}},a={args:{items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Product"}]}},s={args:{items:[{label:"Dashboard",href:"/"},{label:"Settings",href:"/settings"},{label:"Profile"}],separator:"➜"}},t={args:{items:[{label:"🏠 Home",href:"/"},{label:"📂 Files",href:"/files"},{label:"📄 Document"}]}};var l,o,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Category",
      href: "/category"
    }, {
      label: "Product"
    }]
  }
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,i,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "/"
    }, {
      label: "Settings",
      href: "/settings"
    }, {
      label: "Profile"
    }],
    separator: "➜"
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "🏠 Home",
      href: "/"
    }, {
      label: "📂 Files",
      href: "/files"
    }, {
      label: "📄 Document"
    }]
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const B=["Default","CustomSeparator","WithIcons"];export{s as CustomSeparator,a as Default,t as WithIcons,B as __namedExportsOrder,S as default};
