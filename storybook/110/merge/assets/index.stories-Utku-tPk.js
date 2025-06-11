import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as re}from"./index-BXymfbzT.js";import{u as s}from"./color-mode-DpbueTiJ.js";import{B as ge}from"./box-p2MKwv57.js";import{T as t}from"./text-BOFVnBsW.js";import{V as l}from"./v-stack-DfIdlA7P.js";import{H as ae}from"./h-stack-BOuMwgNM.js";import{B as pe}from"./button-Cvi4ewak.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./stack-B-mkjmc_.js";const r=re.forwardRef(({children:o,variant:d="elevated",size:n="md",interactive:ne=!1,selected:a=!1,clickable:se=!1,...oe},ie)=>{const j=s("white","gray.800"),le=s("gray.200","gray.600"),c=s("blue.500","blue.300"),i=s("blue.50","blue.900/20"),de=s("gray.50","gray.700"),ce=s("gray.50","gray.700"),me={sm:{p:3,borderRadius:"md"},md:{p:4,borderRadius:"lg"},lg:{p:6,borderRadius:"xl"}}[n],xe=()=>{switch(d){case"elevated":return{bg:a?i:j,boxShadow:"md",border:"1px solid transparent",borderColor:a?c:"transparent"};case"outlined":return{bg:a?i:j,border:"1px solid",borderColor:a?c:le,boxShadow:"none"};case"filled":return{bg:a?i:ce,border:"1px solid transparent",borderColor:a?c:"transparent",boxShadow:"none"};case"subtle":return{bg:a?i:"transparent",border:"1px solid transparent",borderColor:a?c:"transparent",boxShadow:"none"};default:return{bg:j,boxShadow:"md"}}},ue=()=>!ne&&!se?{}:{cursor:"pointer",transition:"all 0.2s ease",_hover:{bg:a?i:de,transform:"translateY(-2px)",boxShadow:d==="elevated"?"lg":"md"},_active:{transform:"translateY(0px)"}},he=xe(),be=ue();return e.jsx(ge,{ref:ie,...me,...he,...be,...oe,children:o})});r.displayName="BaseCard";try{r.displayName="BaseCard",r.__docgenInfo={description:"",displayName:"BaseCard",props:{variant:{defaultValue:{value:"elevated"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"subtle"'},{value:'"elevated"'},{value:'"outlined"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},interactive:{defaultValue:{value:"false"},description:"",name:"interactive",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},clickable:{defaultValue:{value:"false"},description:"",name:"clickable",required:!1,type:{name:"boolean"}}}}}catch{}const we={title:"Atoms/Layout/BaseCard",component:r,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["elevated","outlined","filled","subtle"]},size:{control:{type:"select"},options:["sm","md","lg"]},interactive:{control:"boolean"},selected:{control:"boolean"},clickable:{control:"boolean"}}},m={args:{children:e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"デフォルトカード"}),e.jsx(t,{fontSize:"sm",children:"これはデフォルトのカードコンポーネントです。"})]})}},x={args:{variant:"elevated",children:e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Elevatedカード"}),e.jsx(t,{fontSize:"sm",children:"影付きのカードです。浮いている感じを表現します。"})]})}},u={args:{variant:"outlined",children:e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Outlinedカード"}),e.jsx(t,{fontSize:"sm",children:"境界線付きのカードです。すっきりとした見た目です。"})]})}},h={args:{variant:"filled",children:e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Filledカード"}),e.jsx(t,{fontSize:"sm",children:"背景色付きのカードです。コンテンツを強調します。"})]})}},b={args:{variant:"subtle",children:e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Subtleカード"}),e.jsx(t,{fontSize:"sm",children:"控えめなカードです。背景に溶け込みます。"})]})}},g={args:{interactive:!0,children:e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"インタラクティブカード"}),e.jsx(t,{fontSize:"sm",children:"ホバーすると反応します。クリック可能な要素として使用できます。"})]})}},p={args:{selected:!0,interactive:!0,children:e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"選択済みカード"}),e.jsx(t,{fontSize:"sm",children:"選択状態のカードです。青いボーダーと背景色が付きます。"})]})}},f={render:()=>e.jsxs(l,{gap:4,align:"stretch",children:[e.jsxs(r,{size:"sm",children:[e.jsx(t,{fontWeight:"bold",mb:1,children:"Smallカード"}),e.jsx(t,{fontSize:"sm",children:"小さなパディングです。"})]}),e.jsxs(r,{size:"md",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Mediumカード"}),e.jsx(t,{fontSize:"sm",children:"標準的なパディングです。"})]}),e.jsxs(r,{size:"lg",children:[e.jsx(t,{fontWeight:"bold",mb:3,children:"Largeカード"}),e.jsx(t,{fontSize:"sm",children:"大きなパディングです。ゆったりとしたレイアウトに適しています。"})]})]})},v={render:()=>e.jsxs(l,{gap:4,align:"stretch",children:[e.jsxs(r,{variant:"elevated",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Elevated"}),e.jsx(t,{fontSize:"sm",children:"影付きで浮いている感じ"})]}),e.jsxs(r,{variant:"outlined",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Outlined"}),e.jsx(t,{fontSize:"sm",children:"境界線付きですっきり"})]}),e.jsxs(r,{variant:"filled",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Filled"}),e.jsx(t,{fontSize:"sm",children:"背景色付きで強調"})]}),e.jsxs(r,{variant:"subtle",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Subtle"}),e.jsx(t,{fontSize:"sm",children:"控えめで背景に溶け込む"})]})]})},S={render:()=>{const[o,d]=re.useState(null);return e.jsxs(l,{gap:4,align:"stretch",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"選択可能なカード（クリックして選択）"}),e.jsx(ae,{gap:4,children:[1,2,3].map(n=>e.jsxs(r,{interactive:!0,selected:o===n,onClick:()=>d(n),flex:1,children:[e.jsxs(t,{fontWeight:"bold",mb:2,children:["カード ",n]}),e.jsx(t,{fontSize:"sm",children:o===n?"選択済み":"クリックして選択"})]},n))})]})}},T={render:()=>e.jsxs(l,{gap:4,align:"stretch",children:[e.jsx(r,{variant:"elevated",interactive:!0,children:e.jsxs(ae,{gap:3,children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"8px",backgroundColor:"#E2E8F0",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:"U"}),e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",children:"ユーザー名"}),e.jsx(t,{fontSize:"sm",color:"gray.600",children:"user@example.com"})]})]})}),e.jsxs(r,{variant:"filled",size:"lg",children:[e.jsx(t,{fontSize:"2xl",fontWeight:"bold",color:"blue.600",children:"1,234"}),e.jsx(t,{fontSize:"sm",color:"gray.600",children:"合計訪問者数"}),e.jsx(t,{fontSize:"xs",color:"green.500",children:"+12% 先月比"})]}),e.jsx(r,{variant:"outlined",interactive:!0,children:e.jsxs(l,{gap:3,align:"stretch",children:[e.jsx(t,{fontWeight:"bold",children:"新規作成"}),e.jsx(t,{fontSize:"sm",children:"新しいプロジェクトを開始します。"}),e.jsx(pe,{colorPalette:"blue",size:"sm",children:"作成する"})]})})]})};var z,C,W;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <div>
        <Text fontWeight="bold" mb={2}>
          デフォルトカード
        </Text>
        <Text fontSize="sm">これはデフォルトのカードコンポーネントです。</Text>
      </div>
  }
}`,...(W=(C=m.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var y,B,k;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div>
        <Text fontWeight="bold" mb={2}>
          Elevatedカード
        </Text>
        <Text fontSize="sm">
          影付きのカードです。浮いている感じを表現します。
        </Text>
      </div>
  }
}`,...(k=(B=x.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var V,E,_;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: <div>
        <Text fontWeight="bold" mb={2}>
          Outlinedカード
        </Text>
        <Text fontSize="sm">
          境界線付きのカードです。すっきりとした見た目です。
        </Text>
      </div>
  }
}`,...(_=(E=u.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var w,F,O;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    children: <div>
        <Text fontWeight="bold" mb={2}>
          Filledカード
        </Text>
        <Text fontSize="sm">
          背景色付きのカードです。コンテンツを強調します。
        </Text>
      </div>
  }
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,H,I;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'subtle',
    children: <div>
        <Text fontWeight="bold" mb={2}>
          Subtleカード
        </Text>
        <Text fontSize="sm">控えめなカードです。背景に溶け込みます。</Text>
      </div>
  }
}`,...(I=(H=b.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var q,M,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    interactive: true,
    children: <div>
        <Text fontWeight="bold" mb={2}>
          インタラクティブカード
        </Text>
        <Text fontSize="sm">
          ホバーすると反応します。クリック可能な要素として使用できます。
        </Text>
      </div>
  }
}`,...(N=(M=g.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var L,D,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    selected: true,
    interactive: true,
    children: <div>
        <Text fontWeight="bold" mb={2}>
          選択済みカード
        </Text>
        <Text fontSize="sm">
          選択状態のカードです。青いボーダーと背景色が付きます。
        </Text>
      </div>
  }
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var U,Y,A;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch">
      <BaseCard size="sm">
        <Text fontWeight="bold" mb={1}>
          Smallカード
        </Text>
        <Text fontSize="sm">小さなパディングです。</Text>
      </BaseCard>
      <BaseCard size="md">
        <Text fontWeight="bold" mb={2}>
          Mediumカード
        </Text>
        <Text fontSize="sm">標準的なパディングです。</Text>
      </BaseCard>
      <BaseCard size="lg">
        <Text fontWeight="bold" mb={3}>
          Largeカード
        </Text>
        <Text fontSize="sm">
          大きなパディングです。ゆったりとしたレイアウトに適しています。
        </Text>
      </BaseCard>
    </VStack>
}`,...(A=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch">
      <BaseCard variant="elevated">
        <Text fontWeight="bold" mb={2}>
          Elevated
        </Text>
        <Text fontSize="sm">影付きで浮いている感じ</Text>
      </BaseCard>
      <BaseCard variant="outlined">
        <Text fontWeight="bold" mb={2}>
          Outlined
        </Text>
        <Text fontSize="sm">境界線付きですっきり</Text>
      </BaseCard>
      <BaseCard variant="filled">
        <Text fontWeight="bold" mb={2}>
          Filled
        </Text>
        <Text fontSize="sm">背景色付きで強調</Text>
      </BaseCard>
      <BaseCard variant="subtle">
        <Text fontWeight="bold" mb={2}>
          Subtle
        </Text>
        <Text fontSize="sm">控えめで背景に溶け込む</Text>
      </BaseCard>
    </VStack>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    return <VStack gap={4} align="stretch">
        <Text fontWeight="bold" mb={2}>
          選択可能なカード（クリックして選択）
        </Text>
        <HStack gap={4}>
          {[1, 2, 3].map(cardNum => <BaseCard key={cardNum} interactive selected={selectedCard === cardNum} onClick={() => setSelectedCard(cardNum)} flex={1}>
              <Text fontWeight="bold" mb={2}>
                カード {cardNum}
              </Text>
              <Text fontSize="sm">
                {selectedCard === cardNum ? '選択済み' : 'クリックして選択'}
              </Text>
            </BaseCard>)}
        </HStack>
      </VStack>;
  }
}`,...(Z=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch">
      {/* ユーザーカード */}
      <BaseCard variant="elevated" interactive>
        <HStack gap={3}>
          <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          backgroundColor: '#E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}>
            U
          </div>
          <div>
            <Text fontWeight="bold">ユーザー名</Text>
            <Text fontSize="sm" color="gray.600">
              user@example.com
            </Text>
          </div>
        </HStack>
      </BaseCard>

      {/* 統計カード */}
      <BaseCard variant="filled" size="lg">
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">
          1,234
        </Text>
        <Text fontSize="sm" color="gray.600">
          合計訪問者数
        </Text>
        <Text fontSize="xs" color="green.500">
          +12% 先月比
        </Text>
      </BaseCard>

      {/* アクションカード */}
      <BaseCard variant="outlined" interactive>
        <VStack gap={3} align="stretch">
          <Text fontWeight="bold">新規作成</Text>
          <Text fontSize="sm">新しいプロジェクトを開始します。</Text>
          <Button colorPalette="blue" size="sm">
            作成する
          </Button>
        </VStack>
      </BaseCard>
    </VStack>
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Fe=["Default","Elevated","Outlined","Filled","Subtle","Interactive","Selected","Sizes","Variants","SelectableCards","ContentExamples"];export{T as ContentExamples,m as Default,x as Elevated,h as Filled,g as Interactive,u as Outlined,S as SelectableCards,p as Selected,f as Sizes,b as Subtle,v as Variants,Fe as __namedExportsOrder,we as default};
