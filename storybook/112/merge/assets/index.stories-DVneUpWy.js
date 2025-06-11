import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{B as k}from"./badge-B3FQ0tmT.js";import{V as v}from"./v-stack-DfIdlA7P.js";import{H as n}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./stack-B-mkjmc_.js";const h={thinking:{colorPalette:"yellow",emoji:"🤔",text:"検討中"},entered:{colorPalette:"blue",emoji:"✏️",text:"入力済"},completed:{colorPalette:"green",emoji:"✅",text:"完了"},pending:{colorPalette:"gray",emoji:"⏳",text:"待機中"},active:{colorPalette:"orange",emoji:"🔥",text:"アクティブ"},done:{colorPalette:"green",emoji:"🎉",text:"完了"},waiting:{colorPalette:"gray",emoji:"⏰",text:"待機中"},submitted:{colorPalette:"blue",emoji:"📝",text:"提出済"},confirmed:{colorPalette:"green",emoji:"✅",text:"確定"},conflict:{colorPalette:"red",emoji:"⚔️",text:"競合"},winner:{colorPalette:"purple",emoji:"👑",text:"勝者"}},t=({status:i,variant:j="solid",...f})=>{const o=h[i];return e.jsxs(k,{colorPalette:o.colorPalette,variant:j,fontSize:"xs",px:2,py:1,borderRadius:"md",fontWeight:"medium",transition:"all 0.2s ease",_hover:{transform:"translateY(-1px)",boxShadow:"sm"},...f,children:[o.emoji," ",o.text]})};try{t.displayName="StatusBadge",t.__docgenInfo={description:"",displayName:"StatusBadge",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"thinking"'},{value:'"entered"'},{value:'"completed"'},{value:'"pending"'},{value:'"active"'},{value:'"done"'},{value:'"waiting"'},{value:'"submitted"'},{value:'"confirmed"'},{value:'"conflict"'},{value:'"winner"'}]}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"subtle"'}]}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const w={title:"Atoms/Badges/StatusBadge",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["thinking","entered","completed","pending","active","done"]},variant:{control:"select",options:["solid","outline","subtle"]}}},a={args:{status:"thinking"}},s={args:{status:"thinking"},render:()=>e.jsxs(v,{gap:4,children:[e.jsxs(n,{gap:3,children:[e.jsx(t,{status:"thinking"}),e.jsx(t,{status:"entered"}),e.jsx(t,{status:"completed"})]}),e.jsxs(n,{gap:3,children:[e.jsx(t,{status:"pending"}),e.jsx(t,{status:"active"}),e.jsx(t,{status:"done"})]})]})},r={args:{status:"completed"},render:()=>e.jsx(v,{gap:4,children:e.jsxs(n,{gap:3,children:[e.jsx(t,{status:"completed",variant:"solid"}),e.jsx(t,{status:"completed",variant:"outline"}),e.jsx(t,{status:"completed",variant:"subtle"})]})})};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: 'thinking'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: 'thinking'
  },
  render: () => <VStack gap={4}>
      <HStack gap={3}>
        <StatusBadge status="thinking" />
        <StatusBadge status="entered" />
        <StatusBadge status="completed" />
      </HStack>
      <HStack gap={3}>
        <StatusBadge status="pending" />
        <StatusBadge status="active" />
        <StatusBadge status="done" />
      </HStack>
    </VStack>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,x,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'completed'
  },
  render: () => <VStack gap={4}>
      <HStack gap={3}>
        <StatusBadge status="completed" variant="solid" />
        <StatusBadge status="completed" variant="outline" />
        <StatusBadge status="completed" variant="subtle" />
      </HStack>
    </VStack>
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const A=["Default","AllStatuses","AllVariants"];export{s as AllStatuses,r as AllVariants,a as Default,A as __namedExportsOrder,w as default};
