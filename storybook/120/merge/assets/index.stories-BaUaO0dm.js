import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as h}from"./index-BXymfbzT.js";import{T as l}from"./index-BtdCwzVt.js";import"./jsx-runtime-Bw5QeaCk.js";import"./color-mode-DpbueTiJ.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./v-stack-DfIdlA7P.js";import"./text-BOFVnBsW.js";import"./input-C3XuNbVL.js";import"./factory-OeC611uy.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./use-field-context-BeRDi0mX.js";const W={title:"Atoms/Inputs/ThemeInput",component:l,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},invalid:{control:"boolean"},disabled:{control:"boolean"},showCharacterCount:{control:"boolean"}}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsx(l,{placeholder:"デフォルト入力"}),e.jsx(l,{label:"ユーザー名",placeholder:"名前を入力"}),e.jsx(l,{label:"メールアドレス",placeholder:"email@example.com",required:!0}),e.jsx(l,{label:"パスワード",placeholder:"パスワードを入力",helperText:"8文字以上の英数字",type:"password"}),e.jsx(l,{label:"エラー例",placeholder:"入力してください",errorText:"この項目は必須です",invalid:!0}),e.jsx(l,{label:"文字数カウント",placeholder:"コメントを入力",maxLength:100,showCharacterCount:!0}),e.jsx(l,{label:"無効な項目",placeholder:"編集できません",disabled:!0,value:"無効な値"})]})},a={render:()=>{const[d,n]=h.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"サイズバリエーション"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsx(l,{label:"Extra Small",placeholder:"xs size",size:"xs"}),e.jsx(l,{label:"Small",placeholder:"sm size",size:"sm"}),e.jsx(l,{label:"Medium",placeholder:"md size",size:"md"}),e.jsx(l,{label:"Large",placeholder:"lg size",size:"lg"}),e.jsx(l,{label:"Extra Large",placeholder:"xl size",size:"xl"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"インタラクティブ例"}),e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(l,{label:"リアルタイム入力",placeholder:"何か入力してみてください",value:d,onChange:c=>n(c.target.value),maxLength:50,showCharacterCount:!0,helperText:"リアルタイムで値が更新されます"})})]})]})}};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px'
  }}>
      <ThemeInput placeholder="デフォルト入力" />
      <ThemeInput label="ユーザー名" placeholder="名前を入力" />
      <ThemeInput label="メールアドレス" placeholder="email@example.com" required />
      <ThemeInput label="パスワード" placeholder="パスワードを入力" helperText="8文字以上の英数字" type="password" />
      <ThemeInput label="エラー例" placeholder="入力してください" errorText="この項目は必須です" invalid />
      <ThemeInput label="文字数カウント" placeholder="コメントを入力" maxLength={100} showCharacterCount />
      <ThemeInput label="無効な項目" placeholder="編集できません" disabled value="無効な値" />
    </div>
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <div>
          <h3 style={{
          marginBottom: '1rem'
        }}>サイズバリエーション</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '400px'
        }}>
            <ThemeInput label="Extra Small" placeholder="xs size" size="xs" />
            <ThemeInput label="Small" placeholder="sm size" size="sm" />
            <ThemeInput label="Medium" placeholder="md size" size="md" />
            <ThemeInput label="Large" placeholder="lg size" size="lg" />
            <ThemeInput label="Extra Large" placeholder="xl size" size="xl" />
          </div>
        </div>
        <div>
          <h3 style={{
          marginBottom: '1rem'
        }}>インタラクティブ例</h3>
          <div style={{
          maxWidth: '400px'
        }}>
            <ThemeInput label="リアルタイム入力" placeholder="何か入力してみてください" value={value} onChange={e => setValue(e.target.value)} maxLength={50} showCharacterCount helperText="リアルタイムで値が更新されます" />
          </div>
        </div>
      </div>;
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const A=["BasicStates","SizesAndInteractive"];export{r as BasicStates,a as SizesAndInteractive,A as __namedExportsOrder,W as default};
