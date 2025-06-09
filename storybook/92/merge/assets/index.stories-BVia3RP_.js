import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as A}from"./index-BXymfbzT.js";import{B as s}from"./box-p2MKwv57.js";import{T as ye}from"./text-BOFVnBsW.js";import{I as ze}from"./image-D2VQ_BCA.js";import{H as a}from"./h-stack-BOuMwgNM.js";import{V as f}from"./v-stack-DfIdlA7P.js";import"./jsx-runtime-Bw5QeaCk.js";import"./stack-B-mkjmc_.js";const r=A.forwardRef(({src:h,alt:y,size:z="md",shape:ce="square",fallback:ge,showFallback:pe=!0,borderStyle:ue="none",status:b,showStatus:v=!1,...de},me)=>{const[Se,he]=A.useState(!1),be={xs:{width:"24px",height:"24px",fontSize:"xs"},sm:{width:"32px",height:"32px",fontSize:"sm"},md:{width:"48px",height:"48px",fontSize:"md"},lg:{width:"60px",height:"60px",fontSize:"lg"},xl:{width:"80px",height:"80px",fontSize:"xl"},custom:{}},x=z==="custom"?{width:"48px",height:"48px",fontSize:"md"}:be[z],xe=()=>{switch(ue){case"subtle":return{border:"1px solid",borderColor:"gray.200",_dark:{borderColor:"gray.600"}};case"solid":return{border:"2px solid",borderColor:"gray.300",_dark:{borderColor:"gray.500"}};default:return{}}},k=()=>{switch(b){case"online":return"green.500";case"away":return"yellow.500";case"busy":return"red.500";default:return"gray.400"}},j=ce==="circle"?"full":"md",w=xe();if(Se||!h){if(!pe)return null;const fe=ge||y.charAt(0).toUpperCase();return e.jsxs(s,{position:"relative",...x,borderRadius:j,bg:"gray.200",_dark:{bg:"gray.600"},display:"flex",alignItems:"center",justifyContent:"center",...w,children:[e.jsx(ye,{fontSize:x.fontSize,fontWeight:"bold",color:"gray.600",_dark:{color:"gray.300"},children:fe}),v&&b&&e.jsx(s,{position:"absolute",bottom:"-2px",right:"-2px",width:"12px",height:"12px",borderRadius:"full",bg:k(),border:"2px solid white",_dark:{borderColor:"gray.800"}})]})}return e.jsxs(s,{position:"relative",display:"inline-block",children:[e.jsx(ze,{ref:me,src:h,alt:y,...x,borderRadius:j,objectFit:"cover",objectPosition:"center",onError:()=>he(!0),...w,...de}),v&&b&&e.jsx(s,{position:"absolute",bottom:"-2px",right:"-2px",width:"12px",height:"12px",borderRadius:"full",bg:k(),border:"2px solid white",_dark:{borderColor:"gray.800"}})]})});r.displayName="UserAvatar";try{r.displayName="UserAvatar",r.__docgenInfo={description:"",displayName:"UserAvatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"custom"'}]}},shape:{defaultValue:{value:"square"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"string"}},showFallback:{defaultValue:{value:"true"},description:"",name:"showFallback",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:{value:"none"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"subtle"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"offline"'},{value:'"away"'},{value:'"busy"'}]}},showStatus:{defaultValue:{value:"false"},description:"",name:"showStatus",required:!1,type:{name:"boolean"}}}}}catch{}const Ve={title:"Atoms/Images/UserAvatar",component:r,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","custom"]},shape:{control:{type:"select"},options:["square","circle"]},borderStyle:{control:{type:"select"},options:["none","subtle","solid"]},status:{control:{type:"select"},options:["online","offline","away","busy"]},showStatus:{control:"boolean"},showFallback:{control:"boolean"}}},t={args:{src:"/img/1.png",alt:"ユーザーアバター"}},l={args:{src:"",alt:"テストユーザー",fallback:"T"}},n={args:{src:"/img/2.png",alt:"オンラインユーザー",status:"online",showStatus:!0}},o={args:{src:"/img/3.png",alt:"サークルアバター",shape:"circle"}},i={args:{src:"/img/4.png",alt:"ボーダー付きアバター",borderStyle:"solid"}},c={render:()=>e.jsxs(a,{gap:4,align:"center",children:[e.jsx(r,{src:"/img/1.png",alt:"XS",size:"xs"}),e.jsx(r,{src:"/img/2.png",alt:"Small",size:"sm"}),e.jsx(r,{src:"/img/3.png",alt:"Medium",size:"md"}),e.jsx(r,{src:"/img/4.png",alt:"Large",size:"lg"}),e.jsx(r,{src:"/img/5.png",alt:"XL",size:"xl"})]})},g={render:()=>e.jsxs(a,{gap:4,align:"center",children:[e.jsx(r,{src:"/img/1.png",alt:"Square",shape:"square",size:"lg"}),e.jsx(r,{src:"/img/2.png",alt:"Circle",shape:"circle",size:"lg"})]})},p={render:()=>e.jsxs(a,{gap:4,align:"center",children:[e.jsx(r,{src:"/img/1.png",alt:"No Border",borderStyle:"none",size:"lg"}),e.jsx(r,{src:"/img/2.png",alt:"Subtle Border",borderStyle:"subtle",size:"lg"}),e.jsx(r,{src:"/img/3.png",alt:"Solid Border",borderStyle:"solid",size:"lg"})]})},u={render:()=>e.jsxs(f,{gap:4,children:[e.jsxs(a,{gap:4,align:"center",children:[e.jsx(r,{src:"/img/1.png",alt:"Online",status:"online",showStatus:!0,size:"lg"}),e.jsx(r,{src:"/img/2.png",alt:"Away",status:"away",showStatus:!0,size:"lg"}),e.jsx(r,{src:"/img/3.png",alt:"Busy",status:"busy",showStatus:!0,size:"lg"}),e.jsx(r,{src:"/img/4.png",alt:"Offline",status:"offline",showStatus:!0,size:"lg"})]}),e.jsx("p",{children:"上から: オンライン、離席中、取り込み中、オフライン"})]})},d={render:()=>e.jsxs(a,{gap:4,align:"center",children:[e.jsx(r,{src:"",alt:"Alice",fallback:"A",size:"lg"}),e.jsx(r,{src:"",alt:"Bob",fallback:"B",size:"lg"}),e.jsx(r,{src:"",alt:"Charlie",fallback:"C",size:"lg"}),e.jsx(r,{src:"",alt:"Diana",fallback:"D",size:"lg"})]})},m={render:()=>e.jsxs(f,{gap:4,children:[e.jsxs(a,{gap:4,align:"center",children:[e.jsx(r,{src:"/img/1.png",alt:"Alice",size:"lg",shape:"circle",borderStyle:"solid",status:"online",showStatus:!0}),e.jsx(r,{src:"",alt:"Bob",fallback:"B",size:"lg",shape:"circle",borderStyle:"subtle",status:"away",showStatus:!0}),e.jsx(r,{src:"/img/3.png",alt:"Charlie",size:"lg",shape:"square",borderStyle:"solid",status:"busy",showStatus:!0})]}),e.jsx("p",{children:"様々な機能を組み合わせた例"})]})},S={render:()=>e.jsxs(f,{gap:4,children:[e.jsxs(a,{gap:4,align:"center",children:[e.jsx(r,{src:"/invalid-image.jpg",alt:"エラー画像（フォールバック表示）",fallback:"E",size:"lg"}),e.jsx(r,{src:"/invalid-image.jpg",alt:"エラー画像（フォールバック非表示）",showFallback:!1,size:"lg"})]}),e.jsx("p",{children:"左: エラー時フォールバック表示、右: エラー時非表示"})]})};var U,B,C;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    src: '/img/1.png',
    alt: 'ユーザーアバター'
  }
}`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var q,H,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    src: '',
    // 意図的に空にしてフォールバックを表示
    alt: 'テストユーザー',
    fallback: 'T'
  }
}`,...(V=(H=l.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var _,F,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    src: '/img/2.png',
    alt: 'オンラインユーザー',
    status: 'online',
    showStatus: true
  }
}`,...(E=(F=n.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var I,D,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    src: '/img/3.png',
    alt: 'サークルアバター',
    shape: 'circle'
  }
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var N,O,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    src: '/img/4.png',
    alt: 'ボーダー付きアバター',
    borderStyle: 'solid'
  }
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,L,X;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <HStack gap={4} align="center">
      <UserAvatar src="/img/1.png" alt="XS" size="xs" />
      <UserAvatar src="/img/2.png" alt="Small" size="sm" />
      <UserAvatar src="/img/3.png" alt="Medium" size="md" />
      <UserAvatar src="/img/4.png" alt="Large" size="lg" />
      <UserAvatar src="/img/5.png" alt="XL" size="xl" />
    </HStack>
}`,...(X=(L=c.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var M,P,G;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <HStack gap={4} align="center">
      <UserAvatar src="/img/1.png" alt="Square" shape="square" size="lg" />
      <UserAvatar src="/img/2.png" alt="Circle" shape="circle" size="lg" />
    </HStack>
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <HStack gap={4} align="center">
      <UserAvatar src="/img/1.png" alt="No Border" borderStyle="none" size="lg" />
      <UserAvatar src="/img/2.png" alt="Subtle Border" borderStyle="subtle" size="lg" />
      <UserAvatar src="/img/3.png" alt="Solid Border" borderStyle="solid" size="lg" />
    </HStack>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <VStack gap={4}>
      <HStack gap={4} align="center">
        <UserAvatar src="/img/1.png" alt="Online" status="online" showStatus={true} size="lg" />
        <UserAvatar src="/img/2.png" alt="Away" status="away" showStatus={true} size="lg" />
        <UserAvatar src="/img/3.png" alt="Busy" status="busy" showStatus={true} size="lg" />
        <UserAvatar src="/img/4.png" alt="Offline" status="offline" showStatus={true} size="lg" />
      </HStack>
      <p>上から: オンライン、離席中、取り込み中、オフライン</p>
    </VStack>
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <HStack gap={4} align="center">
      <UserAvatar src="" alt="Alice" fallback="A" size="lg" />
      <UserAvatar src="" alt="Bob" fallback="B" size="lg" />
      <UserAvatar src="" alt="Charlie" fallback="C" size="lg" />
      <UserAvatar src="" alt="Diana" fallback="D" size="lg" />
    </HStack>
}`,...(ae=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,le;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <VStack gap={4}>
      <HStack gap={4} align="center">
        <UserAvatar src="/img/1.png" alt="Alice" size="lg" shape="circle" borderStyle="solid" status="online" showStatus={true} />
        <UserAvatar src="" alt="Bob" fallback="B" size="lg" shape="circle" borderStyle="subtle" status="away" showStatus={true} />
        <UserAvatar src="/img/3.png" alt="Charlie" size="lg" shape="square" borderStyle="solid" status="busy" showStatus={true} />
      </HStack>
      <p>様々な機能を組み合わせた例</p>
    </VStack>
}`,...(le=(te=m.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,oe,ie;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <VStack gap={4}>
      <HStack gap={4} align="center">
        <UserAvatar src="/invalid-image.jpg" alt="エラー画像（フォールバック表示）" fallback="E" size="lg" />
        <UserAvatar src="/invalid-image.jpg" alt="エラー画像（フォールバック非表示）" showFallback={false} size="lg" />
      </HStack>
      <p>左: エラー時フォールバック表示、右: エラー時非表示</p>
    </VStack>
}`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const _e=["Default","Fallback","WithStatus","CircleShape","WithBorder","Sizes","Shapes","BorderStyles","StatusIndicators","FallbackVariations","CombinedFeatures","ErrorHandling"];export{p as BorderStyles,o as CircleShape,m as CombinedFeatures,t as Default,S as ErrorHandling,l as Fallback,d as FallbackVariations,g as Shapes,c as Sizes,u as StatusIndicators,i as WithBorder,n as WithStatus,_e as __namedExportsOrder,Ve as default};
