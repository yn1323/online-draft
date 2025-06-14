import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{F as q,a as A,b as T,c as B,d as z,e as P,f as d,g as D,h as Q,i as U}from"./index--QnOPJP9.js";import{r as a}from"./index-BXymfbzT.js";import{u as W,s as X,a as G,P as L,b as Z}from"./portal-DXIUxZbP.js";import{u as ee,a as oe,b as te,n as le,c as re}from"./create-slot-recipe-context-9ZU4Gcb9.js";import{m as ne,c as ie}from"./index-Nll0QYEa.js";import{c as ae,a as p,b as se}from"./factory-OeC611uy.js";import{D as c}from"./index-B1VjsNl3.js";import{B as ce}from"./button-Cvi4ewak.js";import"./jsx-runtime-Bw5QeaCk.js";import"./iconBase-BtwG8oUN.js";import"./index-CrjboX4Z.js";import"./index-C85FKF7s.js";import"./index-DGKHe-6Q.js";import"./index-BRNWFSEf.js";const[$,u]=ae({name:"TooltipContext",hookName:"useTooltipContext",providerName:"<TooltipProvider />"}),M=a.forwardRef((n,t)=>{const l=u(),r=c(l.getArrowProps(),n);return e.jsx(p.div,{...r,ref:t})});M.displayName="TooltipArrow";const O=a.forwardRef((n,t)=>{const l=u(),r=c(l.getArrowTipProps(),n);return e.jsx(p.div,{...r,ref:t})});O.displayName="TooltipArrowTip";const k=a.forwardRef((n,t)=>{const l=u(),r=W(),i=c(l.getContentProps(),r.getPresenceProps(),n);return r.unmounted?null:e.jsx(p.div,{...i,ref:se(r.ref,t)})});k.displayName="TooltipContent";const H=a.forwardRef((n,t)=>{const l=u(),r=c(l.getPositionerProps(),n);return W().unmounted?null:e.jsx(p.div,{...r,ref:t})});H.displayName="TooltipPositioner";const de=n=>{const t=a.useId(),{getRootNode:l}=ee(),{dir:r}=oe(),i={id:t,dir:r,getRootNode:l,...n},s=te(ne,i);return ie(s,le)},pe=n=>{const[t,{children:l,...r}]=X(n),i=de(r),s=G(c({present:i.open},t));return e.jsx($,{value:i,children:e.jsx(L,{value:s,children:l})})},ue=n=>{const[t,{value:l,children:r}]=X(n),i=G(c({present:l.open},t));return e.jsx($,{value:l,children:e.jsx(L,{value:i,children:r})})},Y=a.forwardRef((n,t)=>{const l=u(),r=c(l.getTriggerProps(),n);return e.jsx(p.button,{...r,ref:t})});Y.displayName="TooltipTrigger";const{withRootProvider:J,withContext:m}=re({key:"tooltip"});J(ue);const me=J(pe,{defaultProps:{lazyMount:!0,unmountOnExit:!0}}),xe=m(Y,"trigger",{forwardAsChild:!0}),fe=m(H,"positioner",{forwardAsChild:!0}),ge=m(k,"content",{forwardAsChild:!0}),K=m(O,"arrowTip",{forwardAsChild:!0}),be=m(M,"arrow",{forwardAsChild:!0,defaultProps:{children:e.jsx(K,{})}}),w=a.forwardRef(function(t,l){const{showArrow:r,children:i,disabled:s,portalled:j=!0,content:v,contentProps:y,portalRef:h,...x}=t;return s?i:e.jsxs(me,{...x,children:[e.jsx(xe,{asChild:!0,children:i}),e.jsx(Z,{disabled:!j,container:h,children:e.jsx(fe,{children:e.jsxs(ge,{ref:l,...y,children:[r&&e.jsx(be,{children:e.jsx(K,{})}),v]})})})]})});try{w.displayName="Tooltip",w.__docgenInfo={description:"",displayName:"Tooltip",props:{showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},portalled:{defaultValue:null,description:"",name:"portalled",required:!1,type:{name:"boolean"}},portalRef:{defaultValue:null,description:"",name:"portalRef",required:!1,type:{name:"RefObject<HTMLElement>"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"TooltipContentProps"}},disabled:{defaultValue:null,description:"Whether the tooltip is disabled",name:"disabled",required:!1,type:{name:"boolean"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>"}}}}}catch{}const o=a.forwardRef(({icon:n,label:t,tooltip:l,showTooltip:r=!0,animated:i=!0,size:s="md",variant:j="ghost",colorPalette:v="gray",...y},h)=>{const x=e.jsx(ce,{ref:h,size:s,variant:j,colorPalette:v,"aria-label":t,transition:i?"all 0.2s ease":void 0,_hover:i?{transform:"scale(1.1)",boxShadow:"md"}:void 0,_active:i?{transform:"scale(0.95)"}:void 0,_disabled:{opacity:.4,cursor:"not-allowed",transform:"none",_hover:{transform:"none",boxShadow:"none"}},...y,children:n});return r&&(l||t)?e.jsx(w,{content:l||t,positioning:{placement:"top"},children:x}):x});o.displayName="IconActionButton";try{o.displayName="IconActionButton",o.__docgenInfo={description:"",displayName:"IconActionButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},showTooltip:{defaultValue:{value:"true"},description:"",name:"showTooltip",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const Ee={title:"Atoms/Buttons/IconActionButton",component:o,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},variant:{control:{type:"select"},options:["solid","outline","ghost","subtle"]},colorPalette:{control:{type:"select"},options:["blue","green","red","yellow","purple","gray"]},showTooltip:{control:"boolean"},animated:{control:"boolean"},disabled:{control:"boolean"}}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{icon:e.jsx(q,{}),label:"デフォルト"}),e.jsx(o,{icon:e.jsx(A,{}),label:"ツールチップ付き",tooltip:"このアイテムを編集します"}),e.jsx(o,{icon:e.jsx(T,{}),label:"ツールチップ無し",showTooltip:!1}),e.jsx(o,{icon:e.jsx(B,{}),label:"無効化",disabled:!0}),e.jsx(o,{icon:e.jsx(z,{}),label:"アニメーション無",animated:!1})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"バリアント"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(o,{icon:e.jsx(q,{}),label:"Solid",variant:"solid",colorPalette:"blue"}),e.jsx(o,{icon:e.jsx(A,{}),label:"Outline",variant:"outline",colorPalette:"green"}),e.jsx(o,{icon:e.jsx(T,{}),label:"Ghost",variant:"ghost",colorPalette:"purple"}),e.jsx(o,{icon:e.jsx(P,{}),label:"Subtle",variant:"subtle",colorPalette:"red"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"サイズ"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(o,{icon:e.jsx(d,{}),label:"XS",size:"xs"}),e.jsx(o,{icon:e.jsx(d,{}),label:"Small",size:"sm"}),e.jsx(o,{icon:e.jsx(d,{}),label:"Medium",size:"md"}),e.jsx(o,{icon:e.jsx(d,{}),label:"Large",size:"lg"}),e.jsx(o,{icon:e.jsx(d,{}),label:"XL",size:"xl"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"カラーパレット"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{icon:e.jsx(z,{}),label:"Blue",colorPalette:"blue",variant:"solid"}),e.jsx(o,{icon:e.jsx(D,{}),label:"Green",colorPalette:"green",variant:"solid"}),e.jsx(o,{icon:e.jsx(B,{}),label:"Red",colorPalette:"red",variant:"solid"}),e.jsx(o,{icon:e.jsx(Q,{}),label:"Yellow",colorPalette:"yellow",variant:"solid"}),e.jsx(o,{icon:e.jsx(P,{}),label:"Purple",colorPalette:"purple",variant:"solid"}),e.jsx(o,{icon:e.jsx(U,{}),label:"Gray",colorPalette:"gray",variant:"solid"})]})]})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{icon:e.jsx(A,{}),label:"編集",tooltip:"このアイテムを編集",colorPalette:"blue",variant:"outline"}),e.jsx(o,{icon:e.jsx(B,{}),label:"削除",tooltip:"このアイテムを削除",colorPalette:"red",variant:"outline"}),e.jsx(o,{icon:e.jsx(T,{}),label:"表示",tooltip:"詳細を表示",colorPalette:"green",variant:"outline"}),e.jsx(o,{icon:e.jsx(P,{}),label:"共有",tooltip:"他の人と共有",colorPalette:"purple",variant:"outline"}),e.jsx(o,{icon:e.jsx(D,{}),label:"ダウンロード",tooltip:"ファイルをダウンロード",colorPalette:"gray",variant:"outline"})]})};var I,F,R;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <IconActionButton icon={<FiSettings />} label="デフォルト" />
      <IconActionButton icon={<FiEdit3 />} label="ツールチップ付き" tooltip="このアイテムを編集します" />
      <IconActionButton icon={<FiEye />} label="ツールチップ無し" showTooltip={false} />
      <IconActionButton icon={<FiTrash2 />} label="無効化" disabled />
      <IconActionButton icon={<FiHeart />} label="アニメーション無" animated={false} />
    </div>
}`,...(R=(F=f.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var S,C,_;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>バリアント</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
          <IconActionButton icon={<FiSettings />} label="Solid" variant="solid" colorPalette="blue" />
          <IconActionButton icon={<FiEdit3 />} label="Outline" variant="outline" colorPalette="green" />
          <IconActionButton icon={<FiEye />} label="Ghost" variant="ghost" colorPalette="purple" />
          <IconActionButton icon={<FiShare2 />} label="Subtle" variant="subtle" colorPalette="red" />
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>サイズ</h3>
        <div style={{
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
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>カラーパレット</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <IconActionButton icon={<FiHeart />} label="Blue" colorPalette="blue" variant="solid" />
          <IconActionButton icon={<FiDownload />} label="Green" colorPalette="green" variant="solid" />
          <IconActionButton icon={<FiTrash2 />} label="Red" colorPalette="red" variant="solid" />
          <IconActionButton icon={<FiRefreshCw />} label="Yellow" colorPalette="yellow" variant="solid" />
          <IconActionButton icon={<FiShare2 />} label="Purple" colorPalette="purple" variant="solid" />
          <IconActionButton icon={<FiX />} label="Gray" colorPalette="gray" variant="solid" />
        </div>
      </div>
    </div>
}`,...(_=(C=g.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var E,V,N;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(V=b.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const Ve=["BasicStates","VariantsAndStyles","CommonActions"];export{f as BasicStates,b as CommonActions,g as VariantsAndStyles,Ve as __namedExportsOrder,Ee as default};
