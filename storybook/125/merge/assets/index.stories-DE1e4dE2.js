import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as y}from"./index-BXymfbzT.js";import{B as s}from"./box-p2MKwv57.js";import{T as O}from"./text-BOFVnBsW.js";import{I as R}from"./image-D2VQ_BCA.js";import{V as g}from"./v-stack-DfIdlA7P.js";import{H as r}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./stack-B-mkjmc_.js";const a=y.forwardRef(({src:o,alt:d,size:m="md",shape:U="square",fallback:B,showFallback:V=!0,borderStyle:q="none",status:n,showStatus:p=!1,...C},H)=>{const[_,T]=y.useState(!1),E={xs:{width:"24px",height:"24px",fontSize:"xs"},sm:{width:"32px",height:"32px",fontSize:"sm"},md:{width:"48px",height:"48px",fontSize:"md"},lg:{width:"60px",height:"60px",fontSize:"lg"},xl:{width:"80px",height:"80px",fontSize:"xl"},custom:{}},c=m==="custom"?{width:"48px",height:"48px",fontSize:"md"}:E[m],F=()=>{switch(q){case"subtle":return{border:"1px solid",borderColor:"gray.200",_dark:{borderColor:"gray.600"}};case"solid":return{border:"2px solid",borderColor:"gray.300",_dark:{borderColor:"gray.500"}};default:return{}}},u=()=>{switch(n){case"online":return"green.500";case"away":return"yellow.500";case"busy":return"red.500";default:return"gray.400"}},h=U==="circle"?"full":"md",x=F();if(_||!o){if(!V)return null;const I=B||d.charAt(0).toUpperCase();return e.jsxs(s,{position:"relative",...c,borderRadius:h,bg:"gray.200",_dark:{bg:"gray.600"},display:"flex",alignItems:"center",justifyContent:"center",...x,children:[e.jsx(O,{fontSize:c.fontSize,fontWeight:"bold",color:"gray.600",_dark:{color:"gray.300"},children:I}),p&&n&&e.jsx(s,{position:"absolute",bottom:"-2px",right:"-2px",width:"12px",height:"12px",borderRadius:"full",bg:u(),border:"2px solid white",_dark:{borderColor:"gray.800"}})]})}return e.jsxs(s,{position:"relative",display:"inline-block",children:[e.jsx(R,{ref:H,src:o,alt:d,...c,borderRadius:h,objectFit:"cover",objectPosition:"center",onError:()=>T(!0),...x,...C}),p&&n&&e.jsx(s,{position:"absolute",bottom:"-2px",right:"-2px",width:"12px",height:"12px",borderRadius:"full",bg:u(),border:"2px solid white",_dark:{borderColor:"gray.800"}})]})});a.displayName="UserAvatar";try{a.displayName="UserAvatar",a.__docgenInfo={description:"",displayName:"UserAvatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"custom"'}]}},shape:{defaultValue:{value:"square"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"string"}},showFallback:{defaultValue:{value:"true"},description:"",name:"showFallback",required:!1,type:{name:"boolean"}},borderStyle:{defaultValue:{value:"none"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"subtle"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"offline"'},{value:'"away"'},{value:'"busy"'}]}},showStatus:{defaultValue:{value:"false"},description:"",name:"showStatus",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"Atoms/Images/UserAvatar",component:a,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","custom"]},shape:{control:{type:"select"},options:["square","circle"]},borderStyle:{control:{type:"select"},options:["none","subtle","solid"]},status:{control:{type:"select"},options:["online","offline","away","busy"]},showStatus:{control:"boolean"},showFallback:{control:"boolean"}}},t={render:()=>e.jsxs(g,{gap:6,children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"基本バリエーション"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"/img/1.png",alt:"デフォルト"}),e.jsx(a,{src:"",alt:"フォールバック",fallback:"T"}),e.jsx(a,{src:"/img/2.png",alt:"ステータス付き",status:"online",showStatus:!0}),e.jsx(a,{src:"/img/3.png",alt:"サークル",shape:"circle"}),e.jsx(a,{src:"/img/4.png",alt:"ボーダー付き",borderStyle:"solid"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"サイズ"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"/img/1.png",alt:"XS",size:"xs"}),e.jsx(a,{src:"/img/2.png",alt:"Small",size:"sm"}),e.jsx(a,{src:"/img/3.png",alt:"Medium",size:"md"}),e.jsx(a,{src:"/img/4.png",alt:"Large",size:"lg"}),e.jsx(a,{src:"/img/5.png",alt:"XL",size:"xl"})]})]})]})},l={render:()=>e.jsxs(g,{gap:6,children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"形状"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"/img/1.png",alt:"Square",shape:"square",size:"lg"}),e.jsx(a,{src:"/img/2.png",alt:"Circle",shape:"circle",size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"ボーダースタイル"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"/img/1.png",alt:"ボーダー無し",borderStyle:"none",size:"lg"}),e.jsx(a,{src:"/img/2.png",alt:"サブトルボーダー",borderStyle:"subtle",size:"lg"}),e.jsx(a,{src:"/img/3.png",alt:"ソリッドボーダー",borderStyle:"solid",size:"lg"})]})]})]})},i={render:()=>e.jsxs(g,{gap:6,children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"ステータスインジケーター"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"/img/1.png",alt:"Online",status:"online",showStatus:!0,size:"lg"}),e.jsx(a,{src:"/img/2.png",alt:"Away",status:"away",showStatus:!0,size:"lg"}),e.jsx(a,{src:"/img/3.png",alt:"Busy",status:"busy",showStatus:!0,size:"lg"}),e.jsx(a,{src:"/img/4.png",alt:"Offline",status:"offline",showStatus:!0,size:"lg"})]}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"gray"},children:"オンライン、離席中、取り込み中、オフライン"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"フォールバックバリエーション"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"",alt:"Alice",fallback:"A",size:"lg"}),e.jsx(a,{src:"",alt:"Bob",fallback:"B",size:"lg"}),e.jsx(a,{src:"",alt:"Charlie",fallback:"C",size:"lg"}),e.jsx(a,{src:"",alt:"Diana",fallback:"D",size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"組み合わせ例"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"/img/1.png",alt:"Alice",size:"lg",shape:"circle",borderStyle:"solid",status:"online",showStatus:!0}),e.jsx(a,{src:"",alt:"Bob",fallback:"B",size:"lg",shape:"circle",borderStyle:"subtle",status:"away",showStatus:!0}),e.jsx(a,{src:"/img/3.png",alt:"Charlie",size:"lg",shape:"square",borderStyle:"solid",status:"busy",showStatus:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"エラーハンドリング"}),e.jsxs(r,{gap:4,align:"center",children:[e.jsx(a,{src:"/invalid-image.jpg",alt:"フォールバック表示",fallback:"E",size:"lg"}),e.jsx(a,{src:"/invalid-image.jpg",alt:"フォールバック非表示",showFallback:!1,size:"lg"})]}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"gray"},children:"左: エラー時フォールバック表示、右: エラー時非表示"})]})]})};var v,S,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <VStack gap={6}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>基本バリエーション</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="デフォルト" />
          <UserAvatar src="" alt="フォールバック" fallback="T" />
          <UserAvatar src="/img/2.png" alt="ステータス付き" status="online" showStatus />
          <UserAvatar src="/img/3.png" alt="サークル" shape="circle" />
          <UserAvatar src="/img/4.png" alt="ボーダー付き" borderStyle="solid" />
        </HStack>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>サイズ</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="XS" size="xs" />
          <UserAvatar src="/img/2.png" alt="Small" size="sm" />
          <UserAvatar src="/img/3.png" alt="Medium" size="md" />
          <UserAvatar src="/img/4.png" alt="Large" size="lg" />
          <UserAvatar src="/img/5.png" alt="XL" size="xl" />
        </HStack>
      </div>
    </VStack>
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var f,j,z;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <VStack gap={6}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>形状</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="Square" shape="square" size="lg" />
          <UserAvatar src="/img/2.png" alt="Circle" shape="circle" size="lg" />
        </HStack>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>ボーダースタイル</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="ボーダー無し" borderStyle="none" size="lg" />
          <UserAvatar src="/img/2.png" alt="サブトルボーダー" borderStyle="subtle" size="lg" />
          <UserAvatar src="/img/3.png" alt="ソリッドボーダー" borderStyle="solid" size="lg" />
        </HStack>
      </div>
    </VStack>
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var k,w,A;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <VStack gap={6}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>ステータスインジケーター</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="Online" status="online" showStatus size="lg" />
          <UserAvatar src="/img/2.png" alt="Away" status="away" showStatus size="lg" />
          <UserAvatar src="/img/3.png" alt="Busy" status="busy" showStatus size="lg" />
          <UserAvatar src="/img/4.png" alt="Offline" status="offline" showStatus size="lg" />
        </HStack>
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: 'gray'
      }}>
          オンライン、離席中、取り込み中、オフライン
        </p>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>フォールバックバリエーション</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="" alt="Alice" fallback="A" size="lg" />
          <UserAvatar src="" alt="Bob" fallback="B" size="lg" />
          <UserAvatar src="" alt="Charlie" fallback="C" size="lg" />
          <UserAvatar src="" alt="Diana" fallback="D" size="lg" />
        </HStack>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>組み合わせ例</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/img/1.png" alt="Alice" size="lg" shape="circle" borderStyle="solid" status="online" showStatus />
          <UserAvatar src="" alt="Bob" fallback="B" size="lg" shape="circle" borderStyle="subtle" status="away" showStatus />
          <UserAvatar src="/img/3.png" alt="Charlie" size="lg" shape="square" borderStyle="solid" status="busy" showStatus />
        </HStack>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>エラーハンドリング</h3>
        <HStack gap={4} align="center">
          <UserAvatar src="/invalid-image.jpg" alt="フォールバック表示" fallback="E" size="lg" />
          <UserAvatar src="/invalid-image.jpg" alt="フォールバック非表示" showFallback={false} size="lg" />
        </HStack>
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: 'gray'
      }}>
          左: エラー時フォールバック表示、右: エラー時非表示
        </p>
      </div>
    </VStack>
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Y=["BasicVariations","StyleVariations","AdvancedFeatures"];export{i as AdvancedFeatures,t as BasicVariations,l as StyleVariations,Y as __namedExportsOrder,Q as default};
