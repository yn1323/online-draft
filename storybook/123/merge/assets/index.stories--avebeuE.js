import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{B as V}from"./button-Cvi4ewak.js";import{V as a}from"./v-stack-DfIdlA7P.js";import{T as r}from"./text-BOFVnBsW.js";import{H as m}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./stack-B-mkjmc_.js";const t=({children:o,animationType:k="lift",glowColor:p,...z})=>{const v=()=>{const n="all 0.2s ease";switch(k){case"lift":return{transition:n,_hover:{transform:"translateY(-2px)",boxShadow:"lg",_disabled:{transform:"none",boxShadow:"none"}},_active:{transform:"translateY(0px)",boxShadow:"md"}};case"bounce":return{transition:n,_hover:{transform:"scale(1.05)",_disabled:{transform:"none"}},_active:{transform:"scale(0.98)"}};case"pulse":return{transition:n,_hover:{transform:"scale(1.02)",opacity:.9,_disabled:{transform:"none",opacity:1}},_active:{transform:"scale(0.99)"}};case"glow":return{transition:n,_hover:{boxShadow:p?`0 0 20px ${p}, 0 0 40px ${p}`:"0 0 20px currentColor, 0 0 40px currentColor",transform:"translateY(-1px)",_disabled:{boxShadow:"none",transform:"none"}},_active:{transform:"translateY(0px)"}};case"scale":return{transition:n,_hover:{transform:"scale(1.08)",_disabled:{transform:"none"}},_active:{transform:"scale(0.95)"}};default:return{}}};return e.jsx(V,{...v(),...z,children:o})};try{t.displayName="AnimatedButton",t.__docgenInfo={description:"",displayName:"AnimatedButton",props:{animationType:{defaultValue:{value:"lift"},description:"",name:"animationType",required:!1,type:{name:"enum",value:[{value:'"scale"'},{value:'"lift"'},{value:'"bounce"'},{value:'"pulse"'},{value:'"glow"'}]}},glowColor:{defaultValue:null,description:"",name:"glowColor",required:!1,type:{name:"string"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const X={title:"Atoms/Buttons/AnimatedButton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{animationType:{control:"select",options:["lift","bounce","pulse","glow","scale"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},variant:{control:"select",options:["solid","outline","ghost","subtle"]},colorPalette:{control:"select",options:["blue","green","red","purple","teal","orange"]},disabled:{control:"boolean"}}},l={args:{children:"クリックしてね！",animationType:"lift",colorPalette:"blue"}},i={args:{children:"ボタン"},render:()=>e.jsxs(a,{gap:6,children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",children:"アニメーションタイプ"}),e.jsx(a,{gap:4,children:["lift","bounce","pulse","glow","scale"].map(o=>e.jsxs(a,{gap:2,children:[e.jsx(r,{fontSize:"sm",color:"gray.600",_dark:{color:"gray.300"},children:o}),e.jsxs(t,{animationType:o,colorPalette:"green",glowColor:o==="glow"?"#10b981":void 0,children:[o.charAt(0).toUpperCase()+o.slice(1)," ","ボタン"]})]},o))})]})},s={args:{children:"ボタン"},render:()=>e.jsxs(a,{gap:4,children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",children:"サイズバリエーション"}),e.jsxs(m,{gap:4,align:"center",children:[e.jsx(t,{size:"xs",animationType:"bounce",colorPalette:"purple",children:"XS"}),e.jsx(t,{size:"sm",animationType:"bounce",colorPalette:"purple",children:"SM"}),e.jsx(t,{size:"md",animationType:"bounce",colorPalette:"purple",children:"MD"}),e.jsx(t,{size:"lg",animationType:"bounce",colorPalette:"purple",children:"LG"}),e.jsx(t,{size:"xl",animationType:"bounce",colorPalette:"purple",children:"XL"})]})]})},c={args:{children:"ボタン"},render:()=>e.jsxs(a,{gap:4,children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",children:"カスタムグロー"}),e.jsxs(m,{gap:4,children:[e.jsx(t,{animationType:"glow",colorPalette:"blue",glowColor:"#3b82f6",children:"青いグロー"}),e.jsx(t,{animationType:"glow",colorPalette:"green",glowColor:"#10b981",children:"緑のグロー"}),e.jsx(t,{animationType:"glow",colorPalette:"purple",glowColor:"#8b5cf6",children:"紫のグロー"})]})]})},d={args:{children:"ボタン"},render:()=>e.jsxs(a,{gap:4,children:[e.jsx(r,{fontSize:"lg",fontWeight:"bold",children:"無効状態"}),e.jsxs(m,{gap:4,children:[e.jsx(t,{animationType:"lift",colorPalette:"gray",disabled:!0,children:"無効なボタン"}),e.jsx(t,{animationType:"glow",colorPalette:"blue",disabled:!0,glowColor:"#3b82f6",children:"無効なグローボタン"})]})]})};var u,g,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'クリックしてね！',
    animationType: 'lift',
    colorPalette: 'blue'
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,x,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'ボタン'
  },
  render: () => <VStack gap={6}>
      <Text fontSize="lg" fontWeight="bold">
        アニメーションタイプ
      </Text>
      <VStack gap={4}>
        {(['lift', 'bounce', 'pulse', 'glow', 'scale'] as const).map(animationType => <VStack key={animationType} gap={2}>
              <Text fontSize="sm" color="gray.600" _dark={{
          color: 'gray.300'
        }}>
                {animationType}
              </Text>
              <AnimatedButton animationType={animationType} colorPalette="green" glowColor={animationType === 'glow' ? '#10b981' : undefined}>
                {animationType.charAt(0).toUpperCase() + animationType.slice(1)}{' '}
                ボタン
              </AnimatedButton>
            </VStack>)}
      </VStack>
    </VStack>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,y,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'ボタン'
  },
  render: () => <VStack gap={4}>
      <Text fontSize="lg" fontWeight="bold">
        サイズバリエーション
      </Text>
      <HStack gap={4} align="center">
        <AnimatedButton size="xs" animationType="bounce" colorPalette="purple">
          XS
        </AnimatedButton>
        <AnimatedButton size="sm" animationType="bounce" colorPalette="purple">
          SM
        </AnimatedButton>
        <AnimatedButton size="md" animationType="bounce" colorPalette="purple">
          MD
        </AnimatedButton>
        <AnimatedButton size="lg" animationType="bounce" colorPalette="purple">
          LG
        </AnimatedButton>
        <AnimatedButton size="xl" animationType="bounce" colorPalette="purple">
          XL
        </AnimatedButton>
      </HStack>
    </VStack>
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var A,w,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'ボタン'
  },
  render: () => <VStack gap={4}>
      <Text fontSize="lg" fontWeight="bold">
        カスタムグロー
      </Text>
      <HStack gap={4}>
        <AnimatedButton animationType="glow" colorPalette="blue" glowColor="#3b82f6">
          青いグロー
        </AnimatedButton>
        <AnimatedButton animationType="glow" colorPalette="green" glowColor="#10b981">
          緑のグロー
        </AnimatedButton>
        <AnimatedButton animationType="glow" colorPalette="purple" glowColor="#8b5cf6">
          紫のグロー
        </AnimatedButton>
      </HStack>
    </VStack>
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var j,_,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'ボタン'
  },
  render: () => <VStack gap={4}>
      <Text fontSize="lg" fontWeight="bold">
        無効状態
      </Text>
      <HStack gap={4}>
        <AnimatedButton animationType="lift" colorPalette="gray" disabled>
          無効なボタン
        </AnimatedButton>
        <AnimatedButton animationType="glow" colorPalette="blue" disabled glowColor="#3b82f6">
          無効なグローボタン
        </AnimatedButton>
      </HStack>
    </VStack>
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const Y=["Default","AllAnimations","DifferentSizes","CustomGlow","DisabledState"];export{i as AllAnimations,c as CustomGlow,l as Default,s as DifferentSizes,d as DisabledState,Y as __namedExportsOrder,X as default};
