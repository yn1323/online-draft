import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as x}from"./index-BXymfbzT.js";import{F as r}from"./index-DLok-9d1.js";import"./jsx-runtime-Bw5QeaCk.js";import"./button-Cvi4ewak.js";const K={title:"Atoms/Buttons/FormButton",component:r,parameters:{layout:"centered"},argTypes:{colorPalette:{control:{type:"select"},options:["blue","green","red","yellow","purple","gray"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},isLoading:{control:"boolean"},isValid:{control:"boolean"},animated:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{children:"送信"}},s={args:{children:"送信",isLoading:!0,loadingText:"送信中..."}},n={args:{children:"送信",isValid:!1}},l={args:{children:"送信",disabled:!0}},i={args:{children:"送信",animated:!1}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{colorPalette:"blue",children:"送信"}),e.jsx(r,{colorPalette:"green",children:"保存"}),e.jsx(r,{colorPalette:"red",children:"削除"}),e.jsx(r,{colorPalette:"yellow",children:"警告"}),e.jsx(r,{colorPalette:"purple",children:"アクション"}),e.jsx(r,{colorPalette:"gray",children:"キャンセル"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{size:"xs",children:"XS"}),e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{size:"xl",children:"XL"})]})},c={render:()=>{const[W,u]=x.useState(!1),[o,g]=x.useState({name:"",email:""}),_=!!(o.name.trim()&&o.email.trim()),O=t=>{t.preventDefault(),u(!0),setTimeout(()=>u(!1),2e3)};return e.jsxs("form",{onSubmit:O,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx("input",{type:"text",placeholder:"名前",value:o.name,onChange:t=>g(p=>({...p,name:t.target.value})),style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"}}),e.jsx("input",{type:"email",placeholder:"メール",value:o.email,onChange:t=>g(p=>({...p,email:t.target.value})),style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"}}),e.jsx(r,{type:"submit",isLoading:W,isValid:_,loadingText:"送信中...",colorPalette:"green",children:"フォーム送信"})]})}};var h,f,F;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '送信'
  }
}`,...(F=(f=a.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var y,B,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: '送信',
    isLoading: true,
    loadingText: '送信中...'
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var v,S,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: '送信',
    isValid: false
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var D,L,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: '送信',
    disabled: true
  }
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var z,V,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: '送信',
    animated: false
  }
}`,...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var w,T,C;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
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
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,R,X;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
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
}`,...(X=(R=d.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var A,M,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Q=["Default","Loading","Invalid","Disabled","NoAnimation","ColorVariants","Sizes","FormExample"];export{m as ColorVariants,a as Default,l as Disabled,c as FormExample,n as Invalid,s as Loading,i as NoAnimation,d as Sizes,Q as __namedExportsOrder,K as default};
