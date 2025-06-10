import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{F as ae,a as R,b as B,c as C,d as ie,e as _,f as p,g as se,h as ye,i as he}from"./index--QnOPJP9.js";import{r as i}from"./index-BXymfbzT.js";import{u as ce,s as pe,a as de,P as ue,b as Te}from"./portal-DXIUxZbP.js";import{u as we,a as Ae,b as Fe,n as Ie,c as Se}from"./create-slot-recipe-context-9ZU4Gcb9.js";import{m as Re,c as Be}from"./index-Nll0QYEa.js";import{c as Ce,a as d,b as _e}from"./factory-OeC611uy.js";import{D as c}from"./index-B1VjsNl3.js";import{B as Ne}from"./button-Cvi4ewak.js";import"./jsx-runtime-Bw5QeaCk.js";import"./iconBase-BtwG8oUN.js";import"./index-CrjboX4Z.js";import"./index-C85FKF7s.js";import"./index-DGKHe-6Q.js";import"./index-BRNWFSEf.js";const[me,u]=Ce({name:"TooltipContext",hookName:"useTooltipContext",providerName:"<TooltipProvider />"}),xe=i.forwardRef((l,t)=>{const r=u(),n=c(r.getArrowProps(),l);return e.jsx(d.div,{...n,ref:t})});xe.displayName="TooltipArrow";const ge=i.forwardRef((l,t)=>{const r=u(),n=c(r.getArrowTipProps(),l);return e.jsx(d.div,{...n,ref:t})});ge.displayName="TooltipArrowTip";const fe=i.forwardRef((l,t)=>{const r=u(),n=ce(),a=c(r.getContentProps(),n.getPresenceProps(),l);return n.unmounted?null:e.jsx(d.div,{...a,ref:_e(n.ref,t)})});fe.displayName="TooltipContent";const be=i.forwardRef((l,t)=>{const r=u(),n=c(r.getPositionerProps(),l);return ce().unmounted?null:e.jsx(d.div,{...n,ref:t})});be.displayName="TooltipPositioner";const Ee=l=>{const t=i.useId(),{getRootNode:r}=we(),{dir:n}=Ae(),a={id:t,dir:n,getRootNode:r,...l},s=Fe(Re,a);return Be(s,Ie)},Ve=l=>{const[t,{children:r,...n}]=pe(l),a=Ee(n),s=de(c({present:a.open},t));return e.jsx(me,{value:a,children:e.jsx(ue,{value:s,children:r})})},ze=l=>{const[t,{value:r,children:n}]=pe(l),a=de(c({present:r.open},t));return e.jsx(me,{value:r,children:e.jsx(ue,{value:a,children:n})})},Pe=i.forwardRef((l,t)=>{const r=u(),n=c(r.getTriggerProps(),l);return e.jsx(d.button,{...n,ref:t})});Pe.displayName="TooltipTrigger";const{withRootProvider:je,withContext:m}=Se({key:"tooltip"});je(ze);const qe=je(Ve,{defaultProps:{lazyMount:!0,unmountOnExit:!0}}),De=m(Pe,"trigger",{forwardAsChild:!0}),Xe=m(be,"positioner",{forwardAsChild:!0}),Ge=m(fe,"content",{forwardAsChild:!0}),ve=m(ge,"arrowTip",{forwardAsChild:!0}),Le=m(xe,"arrow",{forwardAsChild:!0,defaultProps:{children:e.jsx(ve,{})}}),S=i.forwardRef(function(t,r){const{showArrow:n,children:a,disabled:s,portalled:w=!0,content:A,contentProps:F,portalRef:I,...x}=t;return s?a:e.jsxs(qe,{...x,children:[e.jsx(De,{asChild:!0,children:a}),e.jsx(Te,{disabled:!w,container:I,children:e.jsx(Xe,{children:e.jsxs(Ge,{ref:r,...F,children:[n&&e.jsx(Le,{children:e.jsx(ve,{})}),A]})})})]})});try{S.displayName="Tooltip",S.__docgenInfo={description:"",displayName:"Tooltip",props:{showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},portalled:{defaultValue:null,description:"",name:"portalled",required:!1,type:{name:"boolean"}},portalRef:{defaultValue:null,description:"",name:"portalRef",required:!1,type:{name:"RefObject<HTMLElement>"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"TooltipContentProps"}},disabled:{defaultValue:null,description:"Whether the tooltip is disabled",name:"disabled",required:!1,type:{name:"boolean"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>"}}}}}catch{}const o=i.forwardRef(({icon:l,label:t,tooltip:r,showTooltip:n=!0,animated:a=!0,size:s="md",variant:w="ghost",colorPalette:A="gray",...F},I)=>{const x=e.jsx(Ne,{ref:I,size:s,variant:w,colorPalette:A,"aria-label":t,transition:a?"all 0.2s ease":void 0,_hover:a?{transform:"scale(1.1)",boxShadow:"md"}:void 0,_active:a?{transform:"scale(0.95)"}:void 0,_disabled:{opacity:.4,cursor:"not-allowed",transform:"none",_hover:{transform:"none",boxShadow:"none"}},...F,children:l});return n&&(r||t)?e.jsx(S,{content:r||t,positioning:{placement:"top"},children:x}):x});o.displayName="IconActionButton";try{o.displayName="IconActionButton",o.__docgenInfo={description:"",displayName:"IconActionButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},showTooltip:{defaultValue:{value:"true"},description:"",name:"showTooltip",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const ro={title:"Atoms/Buttons/IconActionButton",component:o,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},variant:{control:{type:"select"},options:["solid","outline","ghost","subtle"]},colorPalette:{control:{type:"select"},options:["blue","green","red","yellow","purple","gray"]},showTooltip:{control:"boolean"},animated:{control:"boolean"},disabled:{control:"boolean"}}},g={args:{icon:e.jsx(ae,{}),label:"設定"}},f={args:{icon:e.jsx(R,{}),label:"編集",tooltip:"このアイテムを編集します"}},b={args:{icon:e.jsx(B,{}),label:"表示",showTooltip:!1}},P={args:{icon:e.jsx(C,{}),label:"削除",disabled:!0}},j={args:{icon:e.jsx(ie,{}),label:"いいね",animated:!1}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(o,{icon:e.jsx(ae,{}),label:"Solid",variant:"solid",colorPalette:"blue"}),e.jsx(o,{icon:e.jsx(R,{}),label:"Outline",variant:"outline",colorPalette:"green"}),e.jsx(o,{icon:e.jsx(B,{}),label:"Ghost",variant:"ghost",colorPalette:"purple"}),e.jsx(o,{icon:e.jsx(_,{}),label:"Subtle",variant:"subtle",colorPalette:"red"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(o,{icon:e.jsx(p,{}),label:"XS",size:"xs"}),e.jsx(o,{icon:e.jsx(p,{}),label:"Small",size:"sm"}),e.jsx(o,{icon:e.jsx(p,{}),label:"Medium",size:"md"}),e.jsx(o,{icon:e.jsx(p,{}),label:"Large",size:"lg"}),e.jsx(o,{icon:e.jsx(p,{}),label:"XL",size:"xl"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(o,{icon:e.jsx(ie,{}),label:"Blue",colorPalette:"blue",variant:"solid"}),e.jsx(o,{icon:e.jsx(se,{}),label:"Green",colorPalette:"green",variant:"solid"}),e.jsx(o,{icon:e.jsx(C,{}),label:"Red",colorPalette:"red",variant:"solid"}),e.jsx(o,{icon:e.jsx(ye,{}),label:"Yellow",colorPalette:"yellow",variant:"solid"}),e.jsx(o,{icon:e.jsx(_,{}),label:"Purple",colorPalette:"purple",variant:"solid"}),e.jsx(o,{icon:e.jsx(he,{}),label:"Gray",colorPalette:"gray",variant:"solid"})]})},T={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{icon:e.jsx(R,{}),label:"編集",tooltip:"このアイテムを編集",colorPalette:"blue",variant:"outline"}),e.jsx(o,{icon:e.jsx(C,{}),label:"削除",tooltip:"このアイテムを削除",colorPalette:"red",variant:"outline"}),e.jsx(o,{icon:e.jsx(B,{}),label:"表示",tooltip:"詳細を表示",colorPalette:"green",variant:"outline"}),e.jsx(o,{icon:e.jsx(_,{}),label:"共有",tooltip:"他の人と共有",colorPalette:"purple",variant:"outline"}),e.jsx(o,{icon:e.jsx(se,{}),label:"ダウンロード",tooltip:"ファイルをダウンロード",colorPalette:"gray",variant:"outline"})]})};var N,E,V;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <FiSettings />,
    label: '設定'
  }
}`,...(V=(E=g.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var z,q,D;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: <FiEdit3 />,
    label: '編集',
    tooltip: 'このアイテムを編集します'
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var X,G,L;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    icon: <FiEye />,
    label: '表示',
    showTooltip: false
  }
}`,...(L=(G=b.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var $,M,O;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    icon: <FiTrash2 />,
    label: '削除',
    disabled: true
  }
}`,...(O=(M=P.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,k,H;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: <FiHeart />,
    label: 'いいね',
    animated: false
  }
}`,...(H=(k=j.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var Y,J,K;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <IconActionButton icon={<FiSettings />} label="Solid" variant="solid" colorPalette="blue" />
      <IconActionButton icon={<FiEdit3 />} label="Outline" variant="outline" colorPalette="green" />
      <IconActionButton icon={<FiEye />} label="Ghost" variant="ghost" colorPalette="purple" />
      <IconActionButton icon={<FiShare2 />} label="Subtle" variant="subtle" colorPalette="red" />
    </div>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <IconActionButton icon={<FiPlus />} label="XS" size="xs" />
      <IconActionButton icon={<FiPlus />} label="Small" size="sm" />
      <IconActionButton icon={<FiPlus />} label="Medium" size="md" />
      <IconActionButton icon={<FiPlus />} label="Large" size="lg" />
      <IconActionButton icon={<FiPlus />} label="XL" size="xl" />
    </div>
}`,...(Z=(U=y.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var ee,oe,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <IconActionButton icon={<FiHeart />} label="Blue" colorPalette="blue" variant="solid" />
      <IconActionButton icon={<FiDownload />} label="Green" colorPalette="green" variant="solid" />
      <IconActionButton icon={<FiTrash2 />} label="Red" colorPalette="red" variant="solid" />
      <IconActionButton icon={<FiRefreshCw />} label="Yellow" colorPalette="yellow" variant="solid" />
      <IconActionButton icon={<FiShare2 />} label="Purple" colorPalette="purple" variant="solid" />
      <IconActionButton icon={<FiX />} label="Gray" colorPalette="gray" variant="solid" />
    </div>
}`,...(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,ne,le;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <IconActionButton icon={<FiEdit3 />} label="編集" tooltip="このアイテムを編集" colorPalette="blue" variant="outline" />
      <IconActionButton icon={<FiTrash2 />} label="削除" tooltip="このアイテムを削除" colorPalette="red" variant="outline" />
      <IconActionButton icon={<FiEye />} label="表示" tooltip="詳細を表示" colorPalette="green" variant="outline" />
      <IconActionButton icon={<FiShare2 />} label="共有" tooltip="他の人と共有" colorPalette="purple" variant="outline" />
      <IconActionButton icon={<FiDownload />} label="ダウンロード" tooltip="ファイルをダウンロード" colorPalette="gray" variant="outline" />
    </div>
}`,...(le=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const no=["Default","WithTooltip","NoTooltip","Disabled","NoAnimation","Variants","Sizes","ColorPalettes","CommonActions"];export{h as ColorPalettes,T as CommonActions,g as Default,P as Disabled,j as NoAnimation,b as NoTooltip,y as Sizes,v as Variants,f as WithTooltip,no as __namedExportsOrder,ro as default};
