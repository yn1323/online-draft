import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as z}from"./index-BXymfbzT.js";import{u as l}from"./color-mode-DpbueTiJ.js";import{B as F}from"./box-p2MKwv57.js";import{V as s}from"./v-stack-DfIdlA7P.js";import{T as t}from"./text-BOFVnBsW.js";import{H as p}from"./h-stack-BOuMwgNM.js";import{B as I}from"./button-Cvi4ewak.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./stack-B-mkjmc_.js";const r=z.forwardRef(({children:o,variant:d="elevated",size:i="md",interactive:y=!1,selected:a=!1,clickable:W=!1,...k},V)=>{const g=l("white","gray.800"),_=l("gray.200","gray.600"),c=l("blue.500","blue.300"),n=l("blue.50","blue.900/20"),w=l("gray.50","gray.700"),E=l("gray.50","gray.700"),R={sm:{p:3,borderRadius:"md"},md:{p:4,borderRadius:"lg"},lg:{p:6,borderRadius:"xl"}}[i],H=()=>{switch(d){case"elevated":return{bg:a?n:g,boxShadow:"md",border:"1px solid transparent",borderColor:a?c:"transparent"};case"outlined":return{bg:a?n:g,border:"1px solid",borderColor:a?c:_,boxShadow:"none"};case"filled":return{bg:a?n:E,border:"1px solid transparent",borderColor:a?c:"transparent",boxShadow:"none"};case"subtle":return{bg:a?n:"transparent",border:"1px solid transparent",borderColor:a?c:"transparent",boxShadow:"none"};default:return{bg:g,boxShadow:"md"}}},q=()=>!y&&!W?{}:{cursor:"pointer",transition:"all 0.2s ease",_hover:{bg:a?n:w,transform:"translateY(-2px)",boxShadow:d==="elevated"?"lg":"md"},_active:{transform:"translateY(0px)"}},M=H(),N=q();return e.jsx(F,{ref:V,...R,...M,...N,...k,children:o})});r.displayName="BaseCard";try{r.displayName="BaseCard",r.__docgenInfo={description:"",displayName:"BaseCard",props:{variant:{defaultValue:{value:"elevated"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"subtle"'},{value:'"elevated"'},{value:'"outlined"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},interactive:{defaultValue:{value:"false"},description:"",name:"interactive",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},clickable:{defaultValue:{value:"false"},description:"",name:"clickable",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Atoms/Layout/BaseCard",component:r,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["elevated","outlined","filled","subtle"]},size:{control:{type:"select"},options:["sm","md","lg"]},interactive:{control:"boolean"},selected:{control:"boolean"},clickable:{control:"boolean"}}},m={render:()=>e.jsx(s,{gap:4,align:"stretch",maxW:"600px",children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"基本バリエーション"}),e.jsxs(s,{gap:3,align:"stretch",children:[e.jsxs(r,{children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"デフォルトカード"}),e.jsx(t,{fontSize:"sm",children:"これはデフォルトのカードコンポーネントです。"})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"インタラクティブカード"}),e.jsx(t,{fontSize:"sm",children:"ホバーすると反応します。クリック可能な要素です。"})]}),e.jsxs(r,{selected:!0,interactive:!0,children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"選択済みカード"}),e.jsx(t,{fontSize:"sm",children:"選択状態のカードです。青いボーダーと背景色が付きます。"})]})]})]})})},x={render:()=>e.jsxs(s,{gap:6,align:"stretch",maxW:"600px",children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"バリアント"}),e.jsxs(s,{gap:3,align:"stretch",children:[e.jsxs(r,{variant:"elevated",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Elevated"}),e.jsx(t,{fontSize:"sm",children:"影付きで浮いている感じ"})]}),e.jsxs(r,{variant:"outlined",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Outlined"}),e.jsx(t,{fontSize:"sm",children:"境界線付きですっきり"})]}),e.jsxs(r,{variant:"filled",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Filled"}),e.jsx(t,{fontSize:"sm",children:"背景色付きで強調"})]}),e.jsxs(r,{variant:"subtle",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Subtle"}),e.jsx(t,{fontSize:"sm",children:"控えめで背景に溶け込む"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"サイズ"}),e.jsxs(s,{gap:3,align:"stretch",children:[e.jsxs(r,{size:"sm",children:[e.jsx(t,{fontWeight:"bold",mb:1,children:"Smallカード"}),e.jsx(t,{fontSize:"sm",children:"小さなパディングです。"})]}),e.jsxs(r,{size:"md",children:[e.jsx(t,{fontWeight:"bold",mb:2,children:"Mediumカード"}),e.jsx(t,{fontSize:"sm",children:"標準的なパディングです。"})]}),e.jsxs(r,{size:"lg",children:[e.jsx(t,{fontWeight:"bold",mb:3,children:"Largeカード"}),e.jsx(t,{fontSize:"sm",children:"大きなパディングです。ゆったりとしたレイアウトに適しています。"})]})]})]})]})},h={render:()=>{const[o,d]=z.useState(null);return e.jsxs(s,{gap:6,align:"stretch",maxW:"600px",children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"選択可能なカード"}),e.jsx(p,{gap:4,children:[1,2,3].map(i=>e.jsxs(r,{interactive:!0,selected:o===i,onClick:()=>d(i),flex:1,children:[e.jsxs(t,{fontWeight:"bold",mb:2,children:["カード ",i]}),e.jsx(t,{fontSize:"sm",children:o===i?"選択済み":"クリックして選択"})]},i))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"コンテンツ例"}),e.jsxs(s,{gap:4,align:"stretch",children:[e.jsx(r,{variant:"elevated",interactive:!0,children:e.jsxs(p,{gap:3,children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"8px",backgroundColor:"#E2E8F0",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:"U"}),e.jsxs("div",{children:[e.jsx(t,{fontWeight:"bold",children:"ユーザー名"}),e.jsx(t,{fontSize:"sm",color:"gray.600",children:"user@example.com"})]})]})}),e.jsxs(r,{variant:"filled",size:"lg",children:[e.jsx(t,{fontSize:"2xl",fontWeight:"bold",color:"blue.600",children:"1,234"}),e.jsx(t,{fontSize:"sm",color:"gray.600",children:"合計訪問者数"}),e.jsx(t,{fontSize:"xs",color:"green.500",children:"+12% 先月比"})]}),e.jsx(r,{variant:"outlined",interactive:!0,children:e.jsxs(s,{gap:3,align:"stretch",children:[e.jsx(t,{fontWeight:"bold",children:"新規作成"}),e.jsx(t,{fontSize:"sm",children:"新しいプロジェクトを開始します。"}),e.jsx(I,{colorPalette:"blue",size:"sm",children:"作成する"})]})})]})]})]})}};var u,f,b;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch" maxW="600px">
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>基本バリエーション</h3>
        <VStack gap={3} align="stretch">
          <BaseCard>
            <Text fontWeight="bold" mb={2}>
              デフォルトカード
            </Text>
            <Text fontSize="sm">
              これはデフォルトのカードコンポーネントです。
            </Text>
          </BaseCard>
          <BaseCard interactive>
            <Text fontWeight="bold" mb={2}>
              インタラクティブカード
            </Text>
            <Text fontSize="sm">
              ホバーすると反応します。クリック可能な要素です。
            </Text>
          </BaseCard>
          <BaseCard selected interactive>
            <Text fontWeight="bold" mb={2}>
              選択済みカード
            </Text>
            <Text fontSize="sm">
              選択状態のカードです。青いボーダーと背景色が付きます。
            </Text>
          </BaseCard>
        </VStack>
      </div>
    </VStack>
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,S,j;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch" maxW="600px">
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>バリアント</h3>
        <VStack gap={3} align="stretch">
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
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>サイズ</h3>
        <VStack gap={3} align="stretch">
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
      </div>
    </VStack>
}`,...(j=(S=x.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,C,B;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    return <VStack gap={6} align="stretch" maxW="600px">
        <div>
          <h3 style={{
          marginBottom: '1rem'
        }}>選択可能なカード</h3>
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
        </div>

        <div>
          <h3 style={{
          marginBottom: '1rem'
        }}>コンテンツ例</h3>
          <VStack gap={4} align="stretch">
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
        </div>
      </VStack>;
  }
}`,...(B=(C=h.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const te=["BasicVariations","StylesAndSizes","PracticalExamples"];export{m as BasicVariations,h as PracticalExamples,x as StylesAndSizes,te as __namedExportsOrder,ee as default};
