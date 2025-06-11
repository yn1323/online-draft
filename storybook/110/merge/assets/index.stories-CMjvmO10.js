import{j as r}from"./create-recipe-context-LbQq3bM7.js";import{B as z}from"./box-p2MKwv57.js";import{V as g}from"./v-stack-DfIdlA7P.js";import{T as a}from"./text-BOFVnBsW.js";import{G as T}from"./grid-DCXQ59mM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./stack-B-mkjmc_.js";const V={blue:{light:{bg:"blue.50",borderColor:"blue.200",bgGradient:"linear(135deg, blue.50, blue.100)",glowColor:"blue.400"},dark:{bg:"blue.900/40",borderColor:"blue.600",bgGradient:"linear(135deg, blue.900/40, blue.800/40)",glowColor:"blue.300"}},green:{light:{bg:"green.50",borderColor:"green.200",bgGradient:"linear(135deg, green.50, green.100)",glowColor:"green.400"},dark:{bg:"green.900/40",borderColor:"green.600",bgGradient:"linear(135deg, green.900/40, green.800/40)",glowColor:"green.300"}},purple:{light:{bg:"purple.50",borderColor:"purple.200",bgGradient:"linear(135deg, purple.50, purple.100)",glowColor:"purple.400"},dark:{bg:"purple.900/40",borderColor:"purple.600",bgGradient:"linear(135deg, purple.900/40, purple.800/40)",glowColor:"purple.300"}},orange:{light:{bg:"orange.50",borderColor:"orange.200",bgGradient:"linear(135deg, orange.50, orange.100)",glowColor:"orange.400"},dark:{bg:"orange.900/40",borderColor:"orange.600",bgGradient:"linear(135deg, orange.900/40, orange.800/40)",glowColor:"orange.300"}},teal:{light:{bg:"teal.50",borderColor:"teal.200",bgGradient:"linear(135deg, teal.50, teal.100)",glowColor:"teal.400"},dark:{bg:"teal.900/40",borderColor:"teal.600",bgGradient:"linear(135deg, teal.900/40, teal.800/40)",glowColor:"teal.300"}},pink:{light:{bg:"pink.50",borderColor:"pink.200",bgGradient:"linear(135deg, pink.50, pink.100)",glowColor:"pink.400"},dark:{bg:"pink.900/40",borderColor:"pink.600",bgGradient:"linear(135deg, pink.900/40, pink.800/40)",glowColor:"pink.300"}}},l=({children:o,colorScheme:G="blue",variant:p="elevated",hoverable:s=!0,...y})=>{const e=V[G],j=()=>{switch(p){case"elevated":return{bgGradient:e.light.bgGradient,border:"2px solid",borderColor:e.light.borderColor,boxShadow:"0 10px 30px -10px rgba(59, 130, 246, 0.25)",_dark:{bgGradient:e.dark.bgGradient,borderColor:e.dark.borderColor,boxShadow:"0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)"}};case"outline":return{bg:"transparent",border:"2px solid",borderColor:e.light.borderColor,_dark:{borderColor:e.dark.borderColor}};case"filled":return{bg:e.light.bg,border:"1px solid",borderColor:e.light.borderColor,_dark:{bg:e.dark.bg,borderColor:e.dark.borderColor}};case"glow":return{bgGradient:e.light.bgGradient,border:"2px solid",borderColor:e.light.borderColor,boxShadow:`0 0 20px ${e.light.glowColor}`,_dark:{bgGradient:e.dark.bgGradient,borderColor:e.dark.borderColor,boxShadow:`0 0 20px ${e.dark.glowColor}`}};default:return{}}},_=s?{_hover:{transform:"translateY(-2px)",boxShadow:p==="glow"?`0 0 30px ${e.light.glowColor}`:"0 15px 40px -15px rgba(59, 130, 246, 0.4)",_dark:{boxShadow:p==="glow"?`0 0 30px ${e.dark.glowColor}`:"0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.15)"}}}:{};return r.jsx(z,{p:6,borderRadius:"xl",transition:"all 0.2s ease",cursor:s?"pointer":"default",...j(),..._,...y,children:o})};try{l.displayName="ThemeCard",l.__docgenInfo={description:"",displayName:"ThemeCard",props:{colorScheme:{defaultValue:{value:"blue"},description:"",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'},{value:'"orange"'},{value:'"purple"'},{value:'"pink"'},{value:'"teal"'}]}},variant:{defaultValue:{value:"elevated"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'},{value:'"elevated"'},{value:'"glow"'}]}},hoverable:{defaultValue:{value:"true"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}}}}}catch{}const B={title:"Atoms/Cards/ThemeCard",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{colorScheme:{control:"select",options:["blue","green","purple","orange","teal","pink"]},variant:{control:"select",options:["elevated","outline","filled","glow"]},hoverable:{control:"boolean"}}},t={args:{colorScheme:"blue",variant:"elevated",children:r.jsxs(g,{gap:2,children:[r.jsx(a,{fontSize:"lg",fontWeight:"bold",children:"🎮 ゲーム作成"}),r.jsx(a,{fontSize:"sm",color:"gray.600",_dark:{color:"gray.300"},children:"新しいドラフト会議を開始"})]})}},n={args:{children:"Content"},render:()=>r.jsx(T,{templateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:4,children:["blue","green","purple","orange","teal","pink"].map(o=>r.jsx(l,{colorScheme:o,children:r.jsxs(g,{gap:2,children:[r.jsx(a,{fontSize:"md",fontWeight:"bold",children:o.charAt(0).toUpperCase()+o.slice(1)}),r.jsx(a,{fontSize:"sm",opacity:.8,children:"カラースキーム"})]})},o))})},d={args:{children:"Content"},render:()=>r.jsx(T,{templateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:4,children:["elevated","outline","filled","glow"].map(o=>r.jsx(l,{variant:o,colorScheme:"green",children:r.jsxs(g,{gap:2,children:[r.jsx(a,{fontSize:"md",fontWeight:"bold",children:o.charAt(0).toUpperCase()+o.slice(1)}),r.jsx(a,{fontSize:"sm",opacity:.8,children:"バリアント"})]})},o))})},i={args:{colorScheme:"purple",variant:"filled",hoverable:!1,children:r.jsxs(g,{gap:2,children:[r.jsx(a,{fontSize:"md",fontWeight:"bold",children:"ホバー無効"}),r.jsx(a,{fontSize:"sm",opacity:.8,children:"静的なカード"})]})}};var c,b,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    colorScheme: 'blue',
    variant: 'elevated',
    children: <VStack gap={2}>
        <Text fontSize="lg" fontWeight="bold">
          🎮 ゲーム作成
        </Text>
        <Text fontSize="sm" color="gray.600" _dark={{
        color: 'gray.300'
      }}>
          新しいドラフト会議を開始
        </Text>
      </VStack>
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var m,h,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
      {(['blue', 'green', 'purple', 'orange', 'teal', 'pink'] as const).map(colorScheme => <ThemeCard key={colorScheme} colorScheme={colorScheme}>
            <VStack gap={2}>
              <Text fontSize="md" fontWeight="bold">
                {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
              </Text>
              <Text fontSize="sm" opacity={0.8}>
                カラースキーム
              </Text>
            </VStack>
          </ThemeCard>)}
    </Grid>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,f,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
      {(['elevated', 'outline', 'filled', 'glow'] as const).map(variant => <ThemeCard key={variant} variant={variant} colorScheme="green">
          <VStack gap={2}>
            <Text fontSize="md" fontWeight="bold">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Text>
            <Text fontSize="sm" opacity={0.8}>
              バリアント
            </Text>
          </VStack>
        </ThemeCard>)}
    </Grid>
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,v,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    colorScheme: 'purple',
    variant: 'filled',
    hoverable: false,
    children: <VStack gap={2}>
        <Text fontSize="md" fontWeight="bold">
          ホバー無効
        </Text>
        <Text fontSize="sm" opacity={0.8}>
          静的なカード
        </Text>
      </VStack>
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const D=["Default","AllColorSchemes","AllVariants","NonHoverable"];export{n as AllColorSchemes,d as AllVariants,t as Default,i as NonHoverable,D as __namedExportsOrder,B as default};
