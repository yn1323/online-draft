import{j as e}from"./stack-sIG82sc5.js";import{f as a}from"./index-C0w2AICy.js";import{r as h}from"./index-BXymfbzT.js";import{S as D}from"./index-BxNpjLgc.js";import{B as i}from"./box-COYGgHPd.js";import{V as R}from"./v-stack-B_OqZo12.js";import{T as o}from"./text-DDJjvodc.js";import{H as C}from"./h-stack-D-OHByDX.js";import{B as x}from"./button-DjnAWujM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-D9b3PoRP.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-DGKHe-6Q.js";import"./image-context-B4PdNff0.js";import"./create-slot-recipe-context-CoQUVIKL.js";import"./attr-C3Jtgmrz.js";import"./index-AgY_G2te.js";import"./factory-B9itGFAb.js";import"./index-DMj7MLAN.js";import"./index-BEZemFFB.js";import"./index-CrjboX4Z.js";import"./index-DX8Fj6-r.js";import"./index-BgxHbLYw.js";import"./use-breakpoint-CHS6HYzw.js";import"./grid-yWyq3gOD.js";import"./spinner-DZhPCgXI.js";const f=[{id:"1",name:"田中太郎",avatar:1,choice:"ポケットモンスターブラック",willLose:!1},{id:"2",name:"佐藤花子",avatar:2,choice:"ドラゴンクエストXI",willLose:!1},{id:"3",name:"鈴木一郎",avatar:3,choice:"ファイナルファンタジーXIV",willLose:!1},{id:"4",name:"高橋次郎",avatar:4,choice:"スーパーマリオオデッセイ",willLose:!1},{id:"5",name:"山田美咲",avatar:5,choice:"ゼルダの伝説ブレスオブザワイルド",willLose:!1},{id:"6",name:"中村健太",avatar:6,choice:"スプラトゥーン3",willLose:!1}],u=[{id:"1",name:"田中太郎",avatar:1,choice:"ポケットモンスターブラック",willLose:!1},{id:"2",name:"佐藤花子",avatar:2,choice:"ポケットモンスターブラック",willLose:!0},{id:"3",name:"鈴木一郎",avatar:3,choice:"ファイナルファンタジーXIV",willLose:!1},{id:"4",name:"高橋次郎",avatar:4,choice:"スーパーマリオオデッセイ",willLose:!1},{id:"5",name:"山田美咲",avatar:5,choice:"ゼルダの伝説ブレスオブザワイルド",willLose:!1},{id:"6",name:"中村健太",avatar:6,choice:"ファイナルファンタジーXIV",willLose:!0}],Ce={title:"features/draft/modals/StageModal/Stage",component:D,parameters:{layout:"fullscreen",skip:!0},tags:["autodocs"],argTypes:{variant:{control:"select",options:["card","typing","slot"]},participants:{control:"object"}}},s={render:()=>{var b;const[v,G]=h.useState("card"),[n,S]=h.useState(!1),J=n?u:f,[K,r]=h.useState(!1),Q=()=>{r(!0)},U=()=>{r(!1)},y=[{key:"card",label:"Card Flip",color:"purple"},{key:"typing",label:"Terminal Type",color:"gray"},{key:"slot",label:"Slot Machine",color:"red"}];return e.jsx(i,{bg:"gray.50",minH:"100vh",p:6,children:e.jsxs(R,{gap:6,maxW:"800px",mx:"auto",children:[e.jsxs(R,{gap:4,children:[e.jsx(o,{fontSize:"3xl",fontWeight:"bold",color:"gray.800",children:"Opening Result Animation Competition"}),e.jsx(o,{color:"gray.600",textAlign:"center",children:"Compare 4 different animation patterns and choose the most exciting one!"})]}),e.jsx(C,{gap:4,wrap:"wrap",justify:"center",children:y.map(t=>e.jsx(x,{colorPalette:t.color,variant:v===t.key?"solid":"outline",onClick:()=>{G(t.key),r(!1)},size:"lg",children:t.label},t.key))}),e.jsxs(R,{gap:3,children:[e.jsx(i,{bg:"white",p:4,borderRadius:"lg",boxShadow:"md",textAlign:"center",children:e.jsxs(o,{fontSize:"lg",fontWeight:"bold",color:"gray.700",children:["Currently Selected:"," ",(b=y.find(t=>t.key===v))==null?void 0:b.label]})}),e.jsxs(C,{gap:4,children:[e.jsx(x,{colorPalette:n?"gray":"blue",variant:n?"outline":"solid",onClick:()=>{S(!1),r(!1)},children:"Normal Pattern"}),e.jsx(x,{colorPalette:n?"red":"gray",variant:n?"solid":"outline",onClick:()=>{S(!0),r(!1)},children:"Conflict Pattern"})]})]}),e.jsx(i,{bg:"white",borderRadius:"xl",boxShadow:"xl",p:6,w:"full",children:e.jsx(D,{variant:v,participants:J,isRevealing:K,onStartReveal:Q,onReset:U})}),e.jsxs(i,{bg:"blue.50",p:6,borderRadius:"lg",w:"full",textAlign:"center",children:[e.jsx(o,{fontSize:"lg",fontWeight:"bold",color:"blue.800",mb:2,children:"What's your rating?"}),e.jsx(o,{color:"blue.600",children:"Try each animation and tell us which one excites you the most!"})]})]})})}},l={args:{variant:"card",participants:f,isRevealing:!1,onStartReveal:a(),onReset:a()}},c={args:{variant:"card",participants:u,isRevealing:!1,onStartReveal:a(),onReset:a()}},p={args:{variant:"typing",participants:f,isRevealing:!1,onStartReveal:a(),onReset:a()}},d={args:{variant:"typing",participants:u,isRevealing:!1,onStartReveal:a(),onReset:a()}},g={args:{variant:"slot",participants:f,isRevealing:!1,onStartReveal:a(),onReset:a()}},m={args:{variant:"slot",participants:u,isRevealing:!1,onStartReveal:a(),onReset:a()}};var k,w,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [currentVariant, setCurrentVariant] = useState<'card' | 'typing' | 'slot'>('card');
    const [hasConflict, setHasConflict] = useState(false);
    const currentParticipants = hasConflict ? conflictParticipants : sampleParticipants;
    const [isRevealing, setIsRevealing] = useState(false);
    const handleStartReveal = () => {
      setIsRevealing(true);
    };
    const handleReset = () => {
      setIsRevealing(false);
    };
    const variants = [{
      key: 'card',
      label: 'Card Flip',
      color: 'purple'
    }, {
      key: 'typing',
      label: 'Terminal Type',
      color: 'gray'
    }, {
      key: 'slot',
      label: 'Slot Machine',
      color: 'red'
    }] as const;
    return <Box bg="gray.50" minH="100vh" p={6}>
        <VStack gap={6} maxW="800px" mx="auto">
          <VStack gap={4}>
            <Text fontSize="3xl" fontWeight="bold" color="gray.800">
              Opening Result Animation Competition
            </Text>
            <Text color="gray.600" textAlign="center">
              Compare 4 different animation patterns and choose the most
              exciting one!
            </Text>
          </VStack>

          <HStack gap={4} wrap="wrap" justify="center">
            {variants.map(variant => <Button key={variant.key} colorPalette={variant.color} variant={currentVariant === variant.key ? 'solid' : 'outline'} onClick={() => {
            setCurrentVariant(variant.key);
            setIsRevealing(false);
          }} size="lg">
                {variant.label}
              </Button>)}
          </HStack>

          <VStack gap={3}>
            <Box bg="white" p={4} borderRadius="lg" boxShadow="md" textAlign="center">
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                Currently Selected:{' '}
                {variants.find(v => v.key === currentVariant)?.label}
              </Text>
            </Box>

            <HStack gap={4}>
              <Button colorPalette={hasConflict ? 'gray' : 'blue'} variant={hasConflict ? 'outline' : 'solid'} onClick={() => {
              setHasConflict(false);
              setIsRevealing(false);
            }}>
                Normal Pattern
              </Button>
              <Button colorPalette={hasConflict ? 'red' : 'gray'} variant={hasConflict ? 'solid' : 'outline'} onClick={() => {
              setHasConflict(true);
              setIsRevealing(false);
            }}>
                Conflict Pattern
              </Button>
            </HStack>
          </VStack>

          <Box bg="white" borderRadius="xl" boxShadow="xl" p={6} w="full">
            <Stage variant={currentVariant} participants={currentParticipants} isRevealing={isRevealing} onStartReveal={handleStartReveal} onReset={handleReset} />
          </Box>

          <Box bg="blue.50" p={6} borderRadius="lg" w="full" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="blue.800" mb={2}>
              What's your rating?
            </Text>
            <Text color="blue.600">
              Try each animation and tell us which one excites you the most!
            </Text>
          </Box>
        </VStack>
      </Box>;
  }
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var P,T,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var B,H,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var I,W,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'typing',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var z,A,X;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'typing',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(X=(A=d.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var E,O,F;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'slot',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(F=(O=g.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var N,_,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'slot',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn()
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const ke=["CompetitionMode","CardReveal","CardRevealConflict","Typing","TypingConflict","SlotMachine","SlotMachineConflict"];export{l as CardReveal,c as CardRevealConflict,s as CompetitionMode,g as SlotMachine,m as SlotMachineConflict,p as Typing,d as TypingConflict,ke as __namedExportsOrder,Ce as default};
