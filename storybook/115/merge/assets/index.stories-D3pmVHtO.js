import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{B as p}from"./badge-B3FQ0tmT.js";import{V as o}from"./v-stack-DfIdlA7P.js";import{H as r}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./stack-B-mkjmc_.js";const m={thinking:{colorPalette:"yellow",emoji:"🤔",text:"検討中"},entered:{colorPalette:"blue",emoji:"✏️",text:"入力済"},completed:{colorPalette:"green",emoji:"✅",text:"完了"},pending:{colorPalette:"gray",emoji:"⏳",text:"待機中"},active:{colorPalette:"orange",emoji:"🔥",text:"アクティブ"},done:{colorPalette:"green",emoji:"🎉",text:"完了"},waiting:{colorPalette:"gray",emoji:"⏰",text:"待機中"},submitted:{colorPalette:"blue",emoji:"📝",text:"提出済"},confirmed:{colorPalette:"green",emoji:"✅",text:"確定"},conflict:{colorPalette:"red",emoji:"⚔️",text:"競合"},winner:{colorPalette:"purple",emoji:"👑",text:"勝者"}},t=({status:l,variant:d="solid",...u})=>{const s=m[l];return e.jsxs(p,{colorPalette:s.colorPalette,variant:d,fontSize:"xs",px:2,py:1,borderRadius:"md",fontWeight:"medium",transition:"all 0.2s ease",_hover:{transform:"translateY(-1px)",boxShadow:"sm"},...u,children:[s.emoji," ",s.text]})};try{t.displayName="StatusBadge",t.__docgenInfo={description:"",displayName:"StatusBadge",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"active"'},{value:'"done"'},{value:'"thinking"'},{value:'"entered"'},{value:'"completed"'},{value:'"pending"'},{value:'"waiting"'},{value:'"submitted"'},{value:'"confirmed"'},{value:'"conflict"'},{value:'"winner"'}]}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"subtle"'}]}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const h={title:"Atoms/Badges/StatusBadge",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["entered","completed","pending","active","done"]},variant:{control:"select",options:["solid","outline","subtle"]}}},a={args:{status:"entered"},render:()=>e.jsxs(o,{gap:6,children:[e.jsxs(o,{gap:2,children:[e.jsxs(r,{gap:3,children:[e.jsx(t,{status:"entered"}),e.jsx(t,{status:"completed"}),e.jsx(t,{status:"pending"})]}),e.jsxs(r,{gap:3,children:[e.jsx(t,{status:"active"}),e.jsx(t,{status:"done"})]})]}),e.jsx(o,{gap:2,children:e.jsxs(r,{gap:3,children:[e.jsx(t,{status:"completed",variant:"solid"}),e.jsx(t,{status:"completed",variant:"outline"}),e.jsx(t,{status:"completed",variant:"subtle"})]})})]})};var i,n,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    status: 'entered'
  },
  render: () => <VStack gap={6}>
      <VStack gap={2}>
        <HStack gap={3}>
          <StatusBadge status="entered" />
          <StatusBadge status="completed" />
          <StatusBadge status="pending" />
        </HStack>
        <HStack gap={3}>
          <StatusBadge status="active" />
          <StatusBadge status="done" />
        </HStack>
      </VStack>
      <VStack gap={2}>
        <HStack gap={3}>
          <StatusBadge status="completed" variant="solid" />
          <StatusBadge status="completed" variant="outline" />
          <StatusBadge status="completed" variant="subtle" />
        </HStack>
      </VStack>
    </VStack>
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const B=["Showcase"];export{a as Showcase,B as __namedExportsOrder,h as default};
