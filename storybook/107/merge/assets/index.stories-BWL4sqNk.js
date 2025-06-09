import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as B}from"./index-BXymfbzT.js";import{T as r}from"./index-BtdCwzVt.js";import"./jsx-runtime-Bw5QeaCk.js";import"./color-mode-DpbueTiJ.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./v-stack-DfIdlA7P.js";import"./text-BOFVnBsW.js";import"./input-C3XuNbVL.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./use-field-context-BeRDi0mX.js";const te={title:"Atoms/Inputs/ThemeInput",component:r,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},invalid:{control:"boolean"},disabled:{control:"boolean"},showCharacterCount:{control:"boolean"}}},a={args:{placeholder:"テキストを入力してください"}},s={args:{label:"ユーザー名",placeholder:"名前を入力してください"}},l={args:{label:"メールアドレス",placeholder:"email@example.com",required:!0}},o={args:{label:"パスワード",placeholder:"パスワードを入力",helperText:"8文字以上の英数字で入力してください",type:"password"}},t={args:{label:"ユーザー名",placeholder:"名前を入力してください",errorText:"この項目は必須です",invalid:!0}},n={args:{label:"コメント",placeholder:"コメントを入力してください",maxLength:100,showCharacterCount:!0}},c={args:{label:"無効な項目",placeholder:"編集できません",disabled:!0,value:"無効な値"}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Extra Small",placeholder:"xs size",size:"xs"}),e.jsx(r,{label:"Small",placeholder:"sm size",size:"sm"}),e.jsx(r,{label:"Medium",placeholder:"md size",size:"md"}),e.jsx(r,{label:"Large",placeholder:"lg size",size:"lg"}),e.jsx(r,{label:"Extra Large",placeholder:"xl size",size:"xl"})]})},i={render:()=>{const[A,O]=B.useState("");return e.jsx(r,{label:"インタラクティブ入力",placeholder:"何か入力してみてください",value:A,onChange:k=>O(k.target.value),maxLength:50,showCharacterCount:!0,helperText:"リアルタイムで値が更新されます"})}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'テキストを入力してください'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,x,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'ユーザー名',
    placeholder: '名前を入力してください'
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,z,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'メールアドレス',
    placeholder: 'email@example.com',
    required: true
  }
}`,...(T=(z=l.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var S,v,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'パスワード',
    placeholder: 'パスワードを入力',
    helperText: '8文字以上の英数字で入力してください',
    type: 'password'
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var I,f,L;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'ユーザー名',
    placeholder: '名前を入力してください',
    errorText: 'この項目は必須です',
    invalid: true
  }
}`,...(L=(f=t.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var j,y,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
    maxLength: 100,
    showCharacterCount: true
  }
}`,...(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var W,w,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: '無効な項目',
    placeholder: '編集できません',
    disabled: true,
    value: '無効な値'
  }
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var q,R,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <ThemeInput label="Extra Small" placeholder="xs size" size="xs" />
      <ThemeInput label="Small" placeholder="sm size" size="sm" />
      <ThemeInput label="Medium" placeholder="md size" size="md" />
      <ThemeInput label="Large" placeholder="lg size" size="lg" />
      <ThemeInput label="Extra Large" placeholder="xl size" size="xl" />
    </div>
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var H,M,_;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <ThemeInput label="インタラクティブ入力" placeholder="何か入力してみてください" value={value} onChange={e => setValue(e.target.value)} maxLength={50} showCharacterCount helperText="リアルタイムで値が更新されます" />;
  }
}`,...(_=(M=i.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const ne=["Default","WithLabel","Required","WithHelperText","WithError","WithCharacterCount","Disabled","Sizes","Interactive"];export{a as Default,c as Disabled,i as Interactive,l as Required,p as Sizes,n as WithCharacterCount,t as WithError,o as WithHelperText,s as WithLabel,ne as __namedExportsOrder,te as default};
