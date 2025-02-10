import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as s}from"./clsx-B-dksMZM.js";const I={small:"w-8 h-8 text-sm",medium:"w-12 h-12 text-base",large:"w-16 h-16 text-lg"},o={circle:"rounded-full",rounded:"rounded-lg",square:"rounded-none"},V={online:"bg-green-500",offline:"bg-gray-400",busy:"bg-red-500",away:"bg-yellow-500"},T=({src:c,alt:N,initials:O,size:C="medium",shape:i="circle",status:u=null,className:_,...m})=>e.jsxs("div",{className:s("relative inline-block",I[C],o[i],_),children:[c?e.jsx("div",{className:s("w-full h-full overflow-hidden",o[i]),children:e.jsx("img",{src:c,alt:N||"Avatar",className:"w-full h-full object-cover",...m})}):e.jsx("div",{className:s("flex items-center justify-center bg-gray-300 text-white font-bold w-full h-full",o[i]),...m,children:O}),u&&e.jsx("span",{className:s("absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",V[u])})]});T.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},initials:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "rounded" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"rounded"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"online" | "offline" | "busy" | "away" | null',elements:[{name:"literal",value:'"online"'},{name:"literal",value:'"offline"'},{name:"literal",value:'"busy"'},{name:"literal",value:'"away"'},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const E={title:"Components/Avatar",component:T,argTypes:{size:{control:"radio",options:["small","medium","large"]},shape:{control:"radio",options:["circle","rounded","square"]},status:{control:"radio",options:[null,"online","offline","busy","away"]}}},a={args:{initials:"JD",size:"medium",shape:"circle"}},r={args:{src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",size:"medium",shape:"circle",status:"online"}},t={args:{src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",size:"medium",shape:"circle",status:"offline"}},l={args:{src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",size:"medium",shape:"circle",status:"busy"}},n={args:{src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",size:"medium",shape:"circle",status:"away"}};var d,p,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    size: "medium",
    shape: "circle"
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    size: "medium",
    shape: "circle",
    status: "online"
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,v,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    size: "medium",
    shape: "circle",
    status: "offline"
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,z,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    size: "medium",
    shape: "circle",
    status: "busy"
  }
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var q,j,A;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    size: "medium",
    shape: "circle",
    status: "away"
  }
}`,...(A=(j=n.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const J=["InitialsAvatar","StatusOnline","StatusOffline","StatusBusy","StatusAway"];export{a as InitialsAvatar,n as StatusAway,l as StatusBusy,t as StatusOffline,r as StatusOnline,J as __namedExportsOrder,E as default};
