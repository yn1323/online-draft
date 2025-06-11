import{u as ue,a as pe,h as xe,i as he,w as ge,k as v}from"./useRealtimeUsers-V8H5-64S.js";import{h as fe}from"./index-DFV_8HAr.js";import{w as M,e as r}from"./index-B7YJKKKT.js";import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{u as D}from"./color-mode-DpbueTiJ.js";import{r as m}from"./index-BXymfbzT.js";import{u as ye}from"./index-C1CVZOuA.js";import{j as X,k as Be}from"./index--QnOPJP9.js";import{U as Te}from"./index-CSB4bhg9.js";import{U as be}from"./index-B4rjanpE.js";import{S as je}from"./index-B61S8q7K.js";import{C as S}from"./container-BXrbxM4E.js";import{V as a}from"./v-stack-DfIdlA7P.js";import{a as Y,B as y}from"./button-Cvi4ewak.js";import{T as o}from"./text-BOFVnBsW.js";import{B as p}from"./box-p2MKwv57.js";import{H as W}from"./heading-B7_y7u_0.js";import{B as L}from"./badge-B3FQ0tmT.js";import{H as F}from"./h-stack-BOuMwgNM.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./stack-B-mkjmc_.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./segment-DQKAVVpM.js";import"./index-DLok-9d1.js";import"./index-BtdCwzVt.js";import"./input-C3XuNbVL.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./use-field-context-BeRDi0mX.js";import"./index-BztEsmkx.js";import"./schemas-DKOp7kU_.js";import"./types-DwQkBYn-.js";import"./index-CPDNhJuL.js";import"./layouts-BGugoDGd.js";import"./image-BNXA3K55.js";import"./index-DGKHe-6Q.js";import"./image-context-5CzGecbX.js";import"./router-context.shared-runtime-CTsxCgvG.js";import"./use-merged-ref-0PvjutYQ.js";import"./use-breakpoint-CtC0MXDZ.js";import"./simple-grid-B5XIW-CE.js";import"./grid-DCXQ59mM.js";import"./index-BB5SsZpJ.js";const we=n=>{const{isAuthenticated:t,groupExists:x,loading:N,authError:B,groupError:T,retry:h}=ue(n),{sessionUser:i,loading:c,error:b,needsUserSelection:u,hasValidSession:j,selectUser:A,clearUser:g,retry:E}=pe(n),l=t&&x,U=!!B||!!T,f=N||l&&c,d=m.useMemo(()=>l,[l]),w=m.useMemo(()=>l&&j&&!!i,[l,j,i]),C=m.useMemo(()=>l&&u,[l,u]),G=m.useCallback(()=>{console.log("🔄 LobbyAuth統合リトライ実行"),h(),E()},[h,E]),H=m.useCallback(()=>{console.log("🗑️ LobbyAuthセッションクリア"),g()},[g]);return console.log("🏛️ useLobbyAuth state:",{groupId:n,firebaseAuthenticated:t,groupExists:x,sessionUser:i?{id:i.id,name:i.name}:null,isReady:d,hasActiveSession:w,needsUserSelection:C,hasAuthError:U,loading:f}),{isReady:d,hasActiveSession:w,needsUserSelection:C,hasAuthError:U,loading:f,authError:B,groupError:T,userError:b,currentUser:i,selectUser:A,retry:G,clearSession:H}},Ie=Array.from({length:18},(n,t)=>({index:`${t+1}`,path:`/img/${t+1}.png`}));function V({groupId:n}){const[t,x]=m.useState("select"),[N,B]=m.useState(!1),[T,h]=m.useState(null),i=ye(),{currentUser:c,hasActiveSession:b,loading:u,authError:j,groupError:A,userError:g,selectUser:E,retry:l,clearSession:U}=we(n),{groupData:f,groupLoading:d,groupError:w}=xe(n),{groupUsers:C}=he(n),G=D("white","gray.800"),H=D("gray.200","gray.600"),ae=D("blue.50","blue.900"),ie=D("blue.200","blue.700"),ce=D("blue.700","blue.300");m.useEffect(()=>{if(b&&c&&!u&&!d){console.log("✅ 有効なセッションを検出、ドラフトページへリダイレクト:",{userId:c.id,userName:c.name,groupId:c.groupId});const s=setTimeout(()=>{i.push(`/draft/${n}`)},500);return()=>clearTimeout(s)}},[b,c,u,d,n,i]);const P=()=>{console.log("🔄 エラー状態をリセットして再試行"),h(null),l()},le=()=>{console.log("🗑️ セッションをクリアして最初から開始"),U(),h(null),x("select")},$=()=>{i.push("/")},de=async s=>{try{console.log("🔄 既存ユーザーログイン開始:",{userId:s,groupId:n}),await E(s),console.log("✅ 既存ユーザーでログイン完了"),i.push(`/draft/${n}`)}catch(I){console.error("❌ ログインエラー:",I),h(I instanceof Error?I.message:"ログインに失敗しました")}},me=async s=>{if(!n){console.error("❌ グループIDが指定されていません");return}{console.log("📚 Storybook環境のためモック処理"),B(!0),await new Promise(I=>setTimeout(I,1e3)),B(!1);return}};return b&&c&&!u&&!d?e.jsx(S,{maxW:"container.sm",py:{base:4,md:8},children:e.jsxs(a,{gap:6,align:"center",justify:"center",minH:"400px",children:[e.jsx(Y,{size:"lg",color:"green.500"}),e.jsxs(a,{gap:2,textAlign:"center",children:[e.jsxs(o,{color:"green.600",fontWeight:"bold",children:["ようこそ、",c.name,"さん！"]}),e.jsx(o,{color:"gray.500",children:"ドラフトページへ移動しています..."}),e.jsx(o,{fontSize:"sm",color:"gray.400",children:"既存のセッションが見つかりました"})]})]})}):d||u?e.jsx(S,{maxW:"container.sm",py:{base:4,md:8},children:e.jsxs(a,{gap:6,align:"center",justify:"center",minH:"400px",children:[e.jsx(Y,{size:"lg",color:"blue.500"}),e.jsxs(a,{gap:2,textAlign:"center",children:[e.jsx(o,{color:"gray.500",children:d?"グループ情報を読み込み中...":"認証情報を確認中..."}),e.jsx(o,{fontSize:"sm",color:"gray.400",children:"Firebase認証とグループ情報を確認しています"})]})]})}):j&&!g?e.jsx(S,{maxW:"container.sm",py:{base:4,md:8},children:e.jsxs(a,{gap:6,align:"center",justify:"center",minH:"400px",children:[e.jsx(p,{as:X,fontSize:"48px",color:"red.500"}),e.jsxs(a,{gap:3,textAlign:"center",children:[e.jsx(W,{size:"md",color:"red.500",children:"認証エラー"}),e.jsx(o,{color:"gray.500",children:j||"Firebase認証に失敗しました"}),e.jsxs(L,{variant:"outline",colorScheme:"red",fontSize:"xs",mt:2,children:["グループID: ",n]}),e.jsxs(a,{gap:2,pt:4,children:[e.jsx(y,{colorPalette:"blue",onClick:P,size:"md",children:"再試行"}),e.jsx(y,{variant:"ghost",onClick:$,size:"sm",children:"トップページに戻る"})]})]})]})}):A||w||!d&&!f?e.jsx(S,{maxW:"container.sm",py:{base:4,md:8},children:e.jsxs(a,{gap:6,align:"center",justify:"center",minH:"400px",children:[e.jsx(p,{as:X,fontSize:"48px",color:"red.500"}),e.jsxs(a,{gap:3,textAlign:"center",children:[e.jsx(W,{size:"md",color:"red.500",children:"グループが見つかりません"}),e.jsx(o,{color:"gray.500",children:A||w||"指定されたグループID のグループは存在しないか、削除されている可能性があります。"}),e.jsxs(L,{variant:"outline",colorScheme:"red",fontSize:"xs",mt:2,children:["グループID: ",n]}),e.jsxs(a,{gap:2,pt:4,children:[e.jsx(y,{colorPalette:"blue",onClick:P,size:"md",children:"再試行"}),e.jsx(y,{variant:"ghost",onClick:$,size:"sm",children:"トップページに戻る"})]})]})]})}):e.jsx(S,{maxW:"container.sm",py:{base:4,md:8},children:e.jsxs(a,{gap:6,align:"stretch",children:[e.jsxs(p,{textAlign:"center",children:[e.jsx(L,{colorScheme:"blue",fontSize:"xs",px:3,py:1,borderRadius:"full",mb:3,children:e.jsxs(F,{gap:1,children:[e.jsx(p,{as:Be}),e.jsx(o,{children:"グループに参加"})]})}),e.jsx(W,{size:{base:"md",md:"lg"},mb:3,color:"gray.800",_dark:{color:"gray.100"},fontWeight:"bold",children:f.groupName}),e.jsxs(F,{justify:"center",gap:2,children:[e.jsx(o,{fontSize:"sm",color:"gray.500",children:"グループID:"}),e.jsx(L,{variant:"outline",colorScheme:"blue",fontSize:"xs",children:n}),e.jsx(o,{fontSize:"sm",color:"gray.500",children:"•"}),e.jsxs(o,{fontSize:"sm",color:"gray.500",children:["ラウンド: ",f.round]})]})]}),e.jsx(je,{currentStep:t}),e.jsxs(p,{bg:G,borderRadius:"xl",border:"1px solid",borderColor:H,p:{base:4,md:6},boxShadow:"md",overflow:"hidden",children:[t==="select"&&e.jsx(be,{users:C.filter(s=>s.userId).map(s=>({userId:s.userId,userName:s.userName,avatarIndex:s.avatar,avatar:`/img/${s.avatar}.png`})),onUserSelect:de,onCreateNewUser:()=>x("create"),isLoading:u}),t==="create"&&e.jsx(Te,{avatars:Ie,onBack:()=>x("select"),onSubmit:me,isLoading:N})]}),(T||g)&&e.jsx(p,{bg:"red.50",border:"1px solid",borderColor:"red.200",borderRadius:"lg",p:4,_dark:{bg:"red.900",borderColor:"red.700"},children:e.jsxs(a,{gap:3,align:"stretch",children:[e.jsxs(o,{fontSize:"sm",color:"red.700",_dark:{color:"red.300"},fontWeight:"medium",children:["❌ ",T||g]}),e.jsxs(F,{gap:2,justify:"center",children:[e.jsx(y,{size:"sm",variant:"outline",colorPalette:"red",onClick:P,children:"再試行"}),e.jsx(y,{size:"sm",variant:"ghost",colorPalette:"red",onClick:le,children:"セッションクリア"})]})]})}),e.jsx(p,{bg:ae,border:"1px solid",borderColor:ie,borderRadius:"lg",p:4,textAlign:"center",children:e.jsxs(o,{fontSize:"sm",color:ce,fontWeight:"medium",children:["💡"," ",t==="select"?"既存のユーザーを選択するか、新しいユーザーを作成してグループに参加しましょう":"お気に入りのアバターを選んで、ドラフトで使う名前を決めてください"]})})]})})}try{V.displayName="LobbyPage",V.__docgenInfo={description:"",displayName:"LobbyPage",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}}}}}catch{}const yt={title:"Features/Lobby/LobbyPage",component:V,parameters:{layout:"fullscreen",msw:{handlers:fe}},decorators:[ge,v({firebaseAuthenticated:!0})]},z={args:{groupId:"ABC123"},decorators:[v({firebaseAuthenticated:!0})],play:async({canvasElement:n})=>{const t=M(n);r(await t.findByText("テストグループ 1")).toBeInTheDocument(),r(await t.findByText("ABC123")).toBeInTheDocument(),r(await t.findByText(/ラウンド: 3/)).toBeInTheDocument(),r(await t.findByText("ユーザー選択")).toBeInTheDocument(),r(await t.findByText("田中太郎")).toBeInTheDocument(),r(await t.findByText("山田花子")).toBeInTheDocument(),r(await t.findByText("登録済みのユーザーで参加")).toBeInTheDocument(),r(await t.findByText("新しいユーザーとして参加")).toBeInTheDocument(),r(await t.findByText(/既存のユーザーを選択するか、新しいユーザーを作成して/)).toBeInTheDocument(),r(await t.findByText("グループに参加")).toBeInTheDocument()}},k={args:{groupId:"XYZ789"},decorators:[v({firebaseAuthenticated:!0})],play:async({canvasElement:n})=>{const t=M(n);r(await t.findByText("非常に長いグループ名のテストケースです！これは表示の確認用")).toBeInTheDocument(),r(await t.findByText("XYZ789")).toBeInTheDocument(),r(await t.findByText(/ラウンド: 5/)).toBeInTheDocument(),r(await t.findByText("Alice")).toBeInTheDocument()}},R={args:{groupId:"12"},decorators:[v({firebaseAuthenticated:!0})],play:async({canvasElement:n})=>{const t=M(n);r(await t.findByText("短ID")).toBeInTheDocument(),r(await t.findByText("12")).toBeInTheDocument(),r(await t.findByText(/ラウンド: 1/)).toBeInTheDocument(),r(await t.findByText("Bob")).toBeInTheDocument()}},_={args:{groupId:"nonexistent"},decorators:[v({firebaseAuthenticated:!0})],play:async({canvasElement:n})=>{const t=M(n);r(await t.findByText("グループが見つかりません")).toBeInTheDocument(),r(await t.findByText("グループID: nonexistent")).toBeInTheDocument(),r(await t.findByText("指定されたグループが見つかりません")).toBeInTheDocument()}};var Z,q,O;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    groupId: 'ABC123'
  },
  decorators: [
  // SessionUserなしでユーザー選択画面を表示
  withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: true,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ（グループ名が表示されるまで）
    expect(await canvas.findByText('テストグループ 1')).toBeInTheDocument();

    // 基本的な要素の存在確認
    expect(await canvas.findByText('ABC123')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 3/)).toBeInTheDocument();

    // ステップインジケーター
    expect(await canvas.findByText('ユーザー選択')).toBeInTheDocument();

    // 既存ユーザー一覧
    expect(await canvas.findByText('田中太郎')).toBeInTheDocument();
    expect(await canvas.findByText('山田花子')).toBeInTheDocument();
    expect(await canvas.findByText('登録済みのユーザーで参加')).toBeInTheDocument();

    // 新規ユーザー作成ボタン
    expect(await canvas.findByText('新しいユーザーとして参加')).toBeInTheDocument();

    // ヘルプテキスト
    expect(await canvas.findByText(/既存のユーザーを選択するか、新しいユーザーを作成して/)).toBeInTheDocument();

    // グループ参加バッジ
    expect(await canvas.findByText('グループに参加')).toBeInTheDocument();
  }
}`,...(O=(q=z.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    groupId: 'XYZ789'
  },
  decorators: [withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: true,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    expect(await canvas.findByText('非常に長いグループ名のテストケースです！これは表示の確認用')).toBeInTheDocument();

    // 長いグループ名の表示確認
    expect(await canvas.findByText('XYZ789')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 5/)).toBeInTheDocument();

    // 対応するユーザー
    expect(await canvas.findByText('Alice')).toBeInTheDocument();
  }
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,te,ne;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    groupId: '12'
  },
  decorators: [withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: true,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    expect(await canvas.findByText('短ID')).toBeInTheDocument();

    // 短いIDの表示確認
    expect(await canvas.findByText('12')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 1/)).toBeInTheDocument();

    // 対応するユーザー
    expect(await canvas.findByText('Bob')).toBeInTheDocument();
  }
}`,...(ne=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,se;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    groupId: 'nonexistent'
  },
  decorators: [
  // グループが存在しないケースのモック
  withLobbyMock({
    firebaseAuthenticated: true,
    groupExists: false,
    sessionUser: null
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // エラー状態の表示を待つ
    expect(await canvas.findByText('グループが見つかりません')).toBeInTheDocument();

    // エラー状態の確認
    expect(await canvas.findByText('グループID: nonexistent')).toBeInTheDocument();
    expect(await canvas.findByText('指定されたグループが見つかりません')).toBeInTheDocument();
  }
}`,...(se=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const Bt=["Default","LongGroupName","ShortGroupId","NonExistentGroup"];export{z as Default,k as LongGroupName,_ as NonExistentGroup,R as ShortGroupId,Bt as __namedExportsOrder,yt as default};
