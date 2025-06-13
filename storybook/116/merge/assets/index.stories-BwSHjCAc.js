import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as d}from"./index-BXymfbzT.js";import{F as t}from"./index-DLok-9d1.js";import"./jsx-runtime-Bw5QeaCk.js";import"./button-Cvi4ewak.js";const z={title:"Atoms/Buttons/FormButton",component:t,parameters:{layout:"centered"},argTypes:{colorPalette:{control:{type:"select"},options:["blue","green","red","yellow","purple","gray"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},isLoading:{control:"boolean"},isValid:{control:"boolean"},animated:{control:"boolean"},disabled:{control:"boolean"}}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{children:"デフォルト"}),e.jsx(t,{isLoading:!0,loadingText:"送信中...",children:"ローディング"}),e.jsx(t,{isValid:!1,children:"無効"}),e.jsx(t,{disabled:!0,children:"無効化"}),e.jsx(t,{animated:!1,children:"アニメーション無"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"カラーバリアント"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(t,{colorPalette:"blue",children:"送信"}),e.jsx(t,{colorPalette:"green",children:"保存"}),e.jsx(t,{colorPalette:"red",children:"削除"}),e.jsx(t,{colorPalette:"yellow",children:"警告"}),e.jsx(t,{colorPalette:"purple",children:"アクション"}),e.jsx(t,{colorPalette:"gray",children:"キャンセル"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"サイズ"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(t,{size:"xs",children:"XS"}),e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"xl",children:"XL"})]})]})]})},s={render:()=>{const[f,n]=d.useState(!1),[o,m]=d.useState({name:"",email:""}),v=!!(o.name.trim()&&o.email.trim()),j=r=>{r.preventDefault(),n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs("form",{onSubmit:j,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx("input",{type:"text",placeholder:"名前",value:o.name,onChange:r=>m(i=>({...i,name:r.target.value})),style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"}}),e.jsx("input",{type:"email",placeholder:"メール",value:o.email,onChange:r=>m(i=>({...i,email:r.target.value})),style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"}}),e.jsx(t,{type:"submit",isLoading:f,isValid:v,loadingText:"送信中...",colorPalette:"green",children:"フォーム送信"})]})}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <FormButton>デフォルト</FormButton>
      <FormButton isLoading loadingText="送信中...">
        ローディング
      </FormButton>
      <FormButton isValid={false}>無効</FormButton>
      <FormButton disabled>無効化</FormButton>
      <FormButton animated={false}>アニメーション無</FormButton>
    </div>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,g,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>カラーバリアント</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
          <FormButton colorPalette="blue">送信</FormButton>
          <FormButton colorPalette="green">保存</FormButton>
          <FormButton colorPalette="red">削除</FormButton>
          <FormButton colorPalette="yellow">警告</FormButton>
          <FormButton colorPalette="purple">アクション</FormButton>
          <FormButton colorPalette="gray">キャンセル</FormButton>
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>サイズ</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
          <FormButton size="xs">XS</FormButton>
          <FormButton size="sm">Small</FormButton>
          <FormButton size="md">Medium</FormButton>
          <FormButton size="lg">Large</FormButton>
          <FormButton size="xl">XL</FormButton>
        </div>
      </div>
    </div>
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var B,y,F;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
    const isValid = Boolean(formData.name.trim() && formData.email.trim());
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };
    return <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '300px'
    }}>
        <input type="text" placeholder="名前" value={formData.name} onChange={e => setFormData(prev => ({
        ...prev,
        name: e.target.value
      }))} style={{
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }} />
        <input type="email" placeholder="メール" value={formData.email} onChange={e => setFormData(prev => ({
        ...prev,
        email: e.target.value
      }))} style={{
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }} />
        <FormButton type="submit" isLoading={isLoading} isValid={isValid} loadingText="送信中..." colorPalette="green">
          フォーム送信
        </FormButton>
      </form>;
  }
}`,...(F=(y=s.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};const w=["BasicStates","VariantsAndSizes","FormExample"];export{a as BasicStates,s as FormExample,l as VariantsAndSizes,w as __namedExportsOrder,z as default};
