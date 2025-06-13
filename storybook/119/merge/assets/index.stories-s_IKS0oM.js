import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as h}from"./index-BXymfbzT.js";import{u as l}from"./color-mode-DpbueTiJ.js";import{V as j}from"./v-stack-DfIdlA7P.js";import{T as d}from"./text-BOFVnBsW.js";import{T as O}from"./textarea-CzEKuGQU.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./factory-OeC611uy.js";import"./use-field-context-BeRDi0mX.js";const r=h.forwardRef(({label:o,helperText:t,errorText:i,maxLength:n,showCharacterCount:x=!1,onChange:p,invalid:R=!1,value:f="",autoResize:B=!1,rows:E=4,...g},L)=>{const[W,D]=h.useState(f),b=f||W,I=l("gray.300","gray.600"),T=l("blue.500","blue.300"),a=l("red.500","red.300"),A=l("gray.400","gray.500"),M=l("white","gray.800"),y=l("gray.800","gray.200"),u=l("gray.500","gray.400"),N=k=>{const z=k.target.value;D(z),p==null||p(z)},s=R||!!i,v=String(b).length;return e.jsxs(j,{gap:1,align:"stretch",children:[o&&e.jsxs(d,{fontSize:"sm",fontWeight:"medium",color:y,mb:1,children:[o,g.required&&e.jsx(d,{as:"span",color:a,ml:1,children:"*"})]}),e.jsx(O,{ref:L,value:b,onChange:N,maxLength:n,rows:E,resize:B?"vertical":"none",borderWidth:2,borderColor:s?a:I,bg:M,color:y,_placeholder:{color:u},_hover:{borderColor:s?a:A},_focus:{borderColor:s?a:T,boxShadow:`0 0 0 1px ${s?a:T}`,transform:"scale(1.01)"},_disabled:{opacity:.6,cursor:"not-allowed",transform:"none"},transition:"all 0.2s ease",...g}),(t||i||x)&&e.jsxs(j,{gap:0,align:"stretch",children:[(t||i)&&e.jsx(d,{fontSize:"sm",color:s?a:u,children:i||t}),x&&n&&e.jsxs(d,{fontSize:"xs",color:v>n*.8?a:u,textAlign:"right",children:[v,"/",n]})]})]})});r.displayName="ThemeTextarea";try{r.displayName="ThemeTextarea",r.__docgenInfo={description:"",displayName:"ThemeTextarea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCharacterCount:{defaultValue:{value:"false"},description:"",name:"showCharacterCount",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},autoResize:{defaultValue:{value:"false"},description:"",name:"autoResize",required:!1,type:{name:"boolean"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const te={title:"Atoms/Inputs/ThemeTextarea",component:r,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},invalid:{control:"boolean"},disabled:{control:"boolean"},autoResize:{control:"boolean"},showCharacterCount:{control:"boolean"}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsx(r,{placeholder:"デフォルトテキストエリア"}),e.jsx(r,{label:"コメント",placeholder:"コメントを入力"}),e.jsx(r,{label:"詳細説明",placeholder:"詳細を入力",required:!0}),e.jsx(r,{label:"フィードバック",placeholder:"ご意見をお聞かせください",helperText:"具体的で建設的なフィードバックをお願いします"}),e.jsx(r,{label:"エラー例",placeholder:"入力してください",errorText:"この項目は必須です",invalid:!0}),e.jsx(r,{label:"文字数カウント",placeholder:"レビューを入力",maxLength:200,showCharacterCount:!0}),e.jsx(r,{label:"自動リサイズ",placeholder:"内容が増えると自動で高さが調整",autoResize:!0,rows:2}),e.jsx(r,{label:"無効なテキストエリア",placeholder:"編集できません",disabled:!0,value:"無効な値です"})]})},m={render:()=>{const[o,t]=h.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"サイズバリエーション"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsx(r,{label:"Extra Small",placeholder:"xs size",size:"xs",rows:2}),e.jsx(r,{label:"Small",placeholder:"sm size",size:"sm",rows:2}),e.jsx(r,{label:"Medium",placeholder:"md size",size:"md",rows:3}),e.jsx(r,{label:"Large",placeholder:"lg size",size:"lg",rows:4}),e.jsx(r,{label:"Extra Large",placeholder:"xl size",size:"xl",rows:5})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"インタラクティブ例"}),e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{label:"リアルタイム入力",placeholder:"何か入力してみてください",value:o,onChange:t,maxLength:100,showCharacterCount:!0,autoResize:!0,helperText:"リアルタイムで値が更新されます"})})]})]})}};var C,w,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px'
  }}>
      <ThemeTextarea placeholder="デフォルトテキストエリア" />
      <ThemeTextarea label="コメント" placeholder="コメントを入力" />
      <ThemeTextarea label="詳細説明" placeholder="詳細を入力" required />
      <ThemeTextarea label="フィードバック" placeholder="ご意見をお聞かせください" helperText="具体的で建設的なフィードバックをお願いします" />
      <ThemeTextarea label="エラー例" placeholder="入力してください" errorText="この項目は必須です" invalid />
      <ThemeTextarea label="文字数カウント" placeholder="レビューを入力" maxLength={200} showCharacterCount />
      <ThemeTextarea label="自動リサイズ" placeholder="内容が増えると自動で高さが調整" autoResize rows={2} />
      <ThemeTextarea label="無効なテキストエリア" placeholder="編集できません" disabled value="無効な値です" />
    </div>
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var S,_,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
            <ThemeTextarea label="Extra Small" placeholder="xs size" size="xs" rows={2} />
            <ThemeTextarea label="Small" placeholder="sm size" size="sm" rows={2} />
            <ThemeTextarea label="Medium" placeholder="md size" size="md" rows={3} />
            <ThemeTextarea label="Large" placeholder="lg size" size="lg" rows={4} />
            <ThemeTextarea label="Extra Large" placeholder="xl size" size="xl" rows={5} />
          </div>
        </div>
        <div>
          <h3 style={{
          marginBottom: '1rem'
        }}>インタラクティブ例</h3>
          <div style={{
          maxWidth: '400px'
        }}>
            <ThemeTextarea label="リアルタイム入力" placeholder="何か入力してみてください" value={value} onChange={setValue} maxLength={100} showCharacterCount autoResize helperText="リアルタイムで値が更新されます" />
          </div>
        </div>
      </div>;
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const se=["BasicStates","SizesAndInteractive"];export{c as BasicStates,m as SizesAndInteractive,se as __namedExportsOrder,te as default};
