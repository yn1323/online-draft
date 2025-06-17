import{d as ro,o as z,q as ao,w as J,c as no,T as c}from"./index.esm2017-CMW78p6t.js";import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{L as so}from"./index-CQo3OpQM.js";import{u as to}from"./toaster-5U2OXyzs.js";import{d as $,u as uo}from"./useFirebaseAuth-DhJGE7jK.js";import{r as u}from"./index-BXymfbzT.js";import{A as io}from"./index-fVQmsTig.js";import{L as lo}from"./index-DLAVy_RV.js";import{P as co}from"./index-g381wJo_.js";import{R as mo}from"./index-D7XRsVfZ.js";import{B as F}from"./box-p2MKwv57.js";import{C as D}from"./container-BXrbxM4E.js";import{V as M}from"./v-stack-DfIdlA7P.js";import{T as L}from"./text-BOFVnBsW.js";import"./jsx-runtime-Bw5QeaCk.js";import"./spinner-B1ygD-4y.js";import"./index-BRNWFSEf.js";import"./index-RgLjKqdB.js";import"./index-jrpPNb_y.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-DGKHe-6Q.js";import"./image-context-B4PdNff0.js";import"./create-slot-recipe-context-BXXlVjN6.js";import"./attr-C3Jtgmrz.js";import"./index-DGNrzCve.js";import"./factory--2BDjF06.js";import"./index-Dcv8hpMz.js";import"./index-CrjboX4Z.js";import"./index-CQFDddx8.js";import"./index-CTqBWVyV.js";import"./responsive-modal-DUYJezqq.js";import"./index-DrVvecys.js";import"./button-Cus-mLIX.js";import"./index-DkeST5JT.js";import"./simple-grid-B5XIW-CE.js";import"./stack-B-mkjmc_.js";import"./grid-DCXQ59mM.js";import"./index-CZ0VaSOh.js";import"./index-bJkI8e97.js";import"./card-BRR7LBt5.js";import"./h-stack-BOuMwgNM.js";const po=o=>{const[i,n]=u.useState(null),[l,a]=u.useState(!0),[d,s]=u.useState(null);return u.useEffect(()=>{if(!o){n(null),a(!1);return}const t=ro($,"app/onlinedraft/group",o);return z(t,r=>{r.exists()?n(r.data()):n(null),a(!1),s(null)},r=>{s(r),a(!1)})},[o]),{group:i,loading:l,error:d}},go=o=>{const[i,n]=u.useState([]),[l,a]=u.useState(!0),[d,s]=u.useState(null);return u.useEffect(()=>{if(!o){n([]),a(!1);return}const t=ao(no($,"app/onlinedraft/user"),J("groupId","==",o),J("isActive","==",!0));return z(t,r=>{const p=r.docs.map(g=>g.data());n(p),a(!1),s(null)},r=>{s(r),a(!1)})},[o]),{users:i,loading:l,error:d}},y=({group:o,users:i,roomUrl:n,loading:l,isAvatarModalOpen:a,usedAvatars:d,onJoinClick:s,onLeaveRoom:t,onAvatarModalClose:m,onJoinConfirm:r,loadingMessage:p="ルーム情報を読み込み中..."})=>l?e.jsx(F,{bg:"gray.50",minH:"100vh",py:[4,8],children:e.jsx(D,{maxW:"container.lg",children:e.jsx(so,{message:p})})}):o?e.jsxs(F,{bg:"gray.50",minH:"100vh",py:[4,8],children:[e.jsx(D,{maxW:"container.lg",children:e.jsxs(M,{gap:6,children:[e.jsx(L,{fontSize:["xl","2xl"],fontWeight:"bold",color:"gray.800",children:"ドラフトルーム"}),e.jsx(mo,{group:o,roomUrl:n}),e.jsx(co,{users:i||[],onJoinClick:s}),e.jsx(lo,{onLeaveRoom:t})]})}),e.jsx(io,{isOpen:a,onClose:m,onConfirm:r,usedAvatars:d})]}):e.jsx(F,{bg:"gray.50",minH:"100vh",py:[4,8],children:e.jsx(D,{maxW:"container.lg",children:e.jsxs(M,{gap:6,children:[e.jsx(L,{fontSize:["xl","2xl"],fontWeight:"bold",color:"red.600",children:"ルームが見つかりません"}),e.jsx(L,{color:"gray.600",children:"指定されたルームが存在しないか、削除されている可能性があります。"})]})})}),h=({groupId:o})=>{const{isAuthenticated:i,signInAnonymous:n,loading:l}=uo(),{group:a,loading:d,error:s}=po(o),{users:t,loading:m,error:r}=go(o),[p,g]=u.useState(!1),{errorToast:x}=to();u.useEffect(()=>{},[i,l,n,x]);const K=`https://example.com/lobby/${o}`,X=d||m||!1;(s||r)&&(console.error("Firebase Error:",{groupError:s,usersError:r}),x("データの取得に失敗しました"));const Y=(t==null?void 0:t.map(b=>b.avatar))||[],oo=b=>{console.log("新規参加:",b),g(!1)},eo=()=>{console.log("退室処理")};return e.jsx(y,{group:a,users:t,roomUrl:K,loading:X,isAvatarModalOpen:p,usedAvatars:Y,onJoinClick:()=>g(!0),onLeaveRoom:eo,onAvatarModalClose:()=>g(!1),onJoinConfirm:oo,loadingMessage:"ルーム情報を読み込み中..."})};try{y.displayName="LobbyPageInner",y.__docgenInfo={description:`ロビー画面Innerコンポーネント（Presenter）
UI描画のみを担当、propsでデータとハンドラーを受け取る
Firebaseやビジネスロジックには依存しない純粋なUIコンポーネント`,displayName:"LobbyPageInner",props:{group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"GroupDataType | null"}},users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"UserDataType[] | null"}},roomUrl:{defaultValue:null,description:"",name:"roomUrl",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},isAvatarModalOpen:{defaultValue:null,description:"",name:"isAvatarModalOpen",required:!0,type:{name:"boolean"}},usedAvatars:{defaultValue:null,description:"",name:"usedAvatars",required:!0,type:{name:"string[]"}},onJoinClick:{defaultValue:null,description:"",name:"onJoinClick",required:!0,type:{name:"() => void"}},onLeaveRoom:{defaultValue:null,description:"",name:"onLeaveRoom",required:!0,type:{name:"() => void"}},onAvatarModalClose:{defaultValue:null,description:"",name:"onAvatarModalClose",required:!0,type:{name:"() => void"}},onJoinConfirm:{defaultValue:null,description:"",name:"onJoinConfirm",required:!0,type:{name:"(userData: { name: string; avatar: string; }) => void"}},loadingMessage:{defaultValue:{value:"ルーム情報を読み込み中..."},description:"",name:"loadingMessage",required:!1,type:{name:"string"}}}}}catch{}try{h.displayName="LobbyPage",h.__docgenInfo={description:`ロビー画面コンポーネント（Container）
ロジック・データ取得・認証のみを担当
LobbyPageInnerにpropsを渡すのみ`,displayName:"LobbyPage",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}}}}}catch{}const ne={title:"Features/Lobby/LobbyPage",component:y,parameters:{layout:"fullscreen"},tags:["autodocs"]},Q={groupName:"2024年プロ野球ドラフト",createdAt:new Date("2024-06-17T10:00:00Z"),updatedAt:new Date("2024-06-17T10:00:00Z"),status:"waiting",maxParticipants:8},fo=[{userId:"user1",userName:"たろう",groupId:"group123",avatar:"1",joinedAt:c.fromDate(new Date("2024-06-17T10:00:00Z")),updatedAt:c.fromDate(new Date("2024-06-17T10:00:00Z")),isActive:!0},{userId:"user2",userName:"はなこ",groupId:"group123",avatar:"2",joinedAt:c.fromDate(new Date("2024-06-17T10:05:00Z")),updatedAt:c.fromDate(new Date("2024-06-17T10:05:00Z")),isActive:!0},{userId:"user3",userName:"じろう",groupId:"group123",avatar:"3",joinedAt:c.fromDate(new Date("2024-06-17T10:10:00Z")),updatedAt:c.fromDate(new Date("2024-06-17T10:10:00Z")),isActive:!1}],f={args:{group:Q,users:fo,roomUrl:"https://onlinedraft.com/lobby/abc123",loading:!1,isAvatarModalOpen:!1,usedAvatars:["1","2","3"],onJoinClick:()=>console.log("Join clicked"),onLeaveRoom:()=>console.log("Leave room clicked"),onAvatarModalClose:()=>console.log("Avatar modal closed"),onJoinConfirm:o=>console.log("Join confirmed:",o)}},v={args:{group:null,users:null,roomUrl:"",loading:!0,isAvatarModalOpen:!1,usedAvatars:[],onJoinClick:()=>{},onLeaveRoom:()=>{},onAvatarModalClose:()=>{},onJoinConfirm:()=>{},loadingMessage:"ルーム情報を読み込み中..."}},C={args:{group:null,users:null,roomUrl:"",loading:!1,isAvatarModalOpen:!1,usedAvatars:[],onJoinClick:()=>{},onLeaveRoom:()=>{},onAvatarModalClose:()=>{},onJoinConfirm:()=>{}}},A={args:{group:{...Q,groupName:"新規作成ルーム"},users:[],roomUrl:"https://onlinedraft.com/lobby/newroom123",loading:!1,isAvatarModalOpen:!1,usedAvatars:[],onJoinClick:()=>console.log("Join clicked"),onLeaveRoom:()=>console.log("Leave room clicked"),onAvatarModalClose:()=>console.log("Avatar modal closed"),onJoinConfirm:o=>console.log("Join confirmed:",o)}};var k,B,E,j,R;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    group: mockGroup,
    users: mockUsers,
    roomUrl: 'https://onlinedraft.com/lobby/abc123',
    loading: false,
    isAvatarModalOpen: false,
    usedAvatars: ['1', '2', '3'],
    onJoinClick: () => console.log('Join clicked'),
    onLeaveRoom: () => console.log('Leave room clicked'),
    onAvatarModalClose: () => console.log('Avatar modal closed'),
    onJoinConfirm: (userData: {
      name: string;
      avatar: string;
    }) => console.log('Join confirmed:', userData)
  }
}`,...(E=(B=f.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:`基本のロビーページ表示（3人参加）
Firebaseロジックを含まない純粋なUIテスト`,...(R=(j=f.parameters)==null?void 0:j.docs)==null?void 0:R.description}}};var U,_,I,S,T;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    group: null,
    users: null,
    roomUrl: '',
    loading: true,
    isAvatarModalOpen: false,
    usedAvatars: [],
    onJoinClick: () => {},
    onLeaveRoom: () => {},
    onAvatarModalClose: () => {},
    onJoinConfirm: () => {},
    loadingMessage: 'ルーム情報を読み込み中...'
  }
}`,...(I=(_=v.parameters)==null?void 0:_.docs)==null?void 0:I.source},description:{story:"ローディング状態",...(T=(S=v.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var q,O,V,w,N;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    group: null,
    users: null,
    roomUrl: '',
    loading: false,
    isAvatarModalOpen: false,
    usedAvatars: [],
    onJoinClick: () => {},
    onLeaveRoom: () => {},
    onAvatarModalClose: () => {},
    onJoinConfirm: () => {}
  }
}`,...(V=(O=C.parameters)==null?void 0:O.docs)==null?void 0:V.source},description:{story:"ルームが見つからない状態",...(N=(w=C.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};var P,Z,G,W,H;A.parameters={...A.parameters,docs:{...(P=A.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    group: {
      ...mockGroup,
      groupName: '新規作成ルーム'
    },
    users: [],
    roomUrl: 'https://onlinedraft.com/lobby/newroom123',
    loading: false,
    isAvatarModalOpen: false,
    usedAvatars: [],
    onJoinClick: () => console.log('Join clicked'),
    onLeaveRoom: () => console.log('Leave room clicked'),
    onAvatarModalClose: () => console.log('Avatar modal closed'),
    onJoinConfirm: (userData: {
      name: string;
      avatar: string;
    }) => console.log('Join confirmed:', userData)
  }
}`,...(G=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:G.source},description:{story:"参加者なし（新規ルーム）",...(H=(W=A.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};const se=["Basic","Loading","RoomNotFound","EmptyRoom"];export{f as Basic,A as EmptyRoom,v as Loading,C as RoomNotFound,se as __namedExportsOrder,ne as default};
