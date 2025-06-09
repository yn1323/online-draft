import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{r as C}from"./index-BXymfbzT.js";import{u as o}from"./color-mode-DpbueTiJ.js";import{V as E}from"./v-stack-DfIdlA7P.js";import{T as c}from"./text-BOFVnBsW.js";import{T as ze}from"./textarea-CzEKuGQU.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";import"./index-B1VjsNl3.js";import"./index-C85FKF7s.js";import"./factory-OeC611uy.js";import"./use-field-context-BeRDi0mX.js";const r=C.forwardRef(({label:s,helperText:l,errorText:n,maxLength:i,showCharacterCount:v=!1,onChange:T,invalid:ie=!1,value:S="",autoResize:ce=!1,rows:de=4,...w},ue)=>{const[pe,me]=C.useState(S),V=S||pe,he=o("gray.300","gray.600"),j=o("blue.500","blue.300"),a=o("red.500","red.300"),ge=o("gray.400","gray.500"),xe=o("white","gray.800"),R=o("gray.800","gray.200"),y=o("gray.500","gray.400"),be=fe=>{const _=fe.target.value;me(_),T==null||T(_)},t=ie||!!n,q=String(V).length;return e.jsxs(E,{gap:1,align:"stretch",children:[s&&e.jsxs(c,{fontSize:"sm",fontWeight:"medium",color:R,mb:1,children:[s,w.required&&e.jsx(c,{as:"span",color:a,ml:1,children:"*"})]}),e.jsx(ze,{ref:ue,value:V,onChange:be,maxLength:i,rows:de,resize:ce?"vertical":"none",borderWidth:2,borderColor:t?a:he,bg:xe,color:R,_placeholder:{color:y},_hover:{borderColor:t?a:ge},_focus:{borderColor:t?a:j,boxShadow:`0 0 0 1px ${t?a:j}`,transform:"scale(1.01)"},_disabled:{opacity:.6,cursor:"not-allowed",transform:"none"},transition:"all 0.2s ease",...w}),(l||n||v)&&e.jsxs(E,{gap:0,align:"stretch",children:[(l||n)&&e.jsx(c,{fontSize:"sm",color:t?a:y,children:n||l}),v&&i&&e.jsxs(c,{fontSize:"xs",color:q>i*.8?a:y,textAlign:"right",children:[q,"/",i]})]})]})});r.displayName="ThemeTextarea";try{r.displayName="ThemeTextarea",r.__docgenInfo={description:"",displayName:"ThemeTextarea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCharacterCount:{defaultValue:{value:"false"},description:"",name:"showCharacterCount",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},autoResize:{defaultValue:{value:"false"},description:"",name:"autoResize",required:!1,type:{name:"boolean"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const Be={title:"Atoms/Inputs/ThemeTextarea",component:r,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},invalid:{control:"boolean"},disabled:{control:"boolean"},autoResize:{control:"boolean"},showCharacterCount:{control:"boolean"}}},d={args:{placeholder:"内容を入力してください"}},u={args:{label:"コメント",placeholder:"コメントを入力してください"}},p={args:{label:"詳細説明",placeholder:"詳細を入力してください",required:!0}},m={args:{label:"フィードバック",placeholder:"ご意見をお聞かせください",helperText:"具体的で建設的なフィードバックをお願いします"}},h={args:{label:"コメント",placeholder:"コメントを入力してください",errorText:"この項目は必須です",invalid:!0}},g={args:{label:"レビュー",placeholder:"レビューを入力してください",maxLength:200,showCharacterCount:!0}},x={args:{label:"自動リサイズ",placeholder:"内容が増えると自動で高さが調整されます",autoResize:!0,rows:2}},b={args:{label:"無効なテキストエリア",placeholder:"編集できません",disabled:!0,value:"無効な値です"}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Extra Small",placeholder:"xs size",size:"xs",rows:2}),e.jsx(r,{label:"Small",placeholder:"sm size",size:"sm",rows:2}),e.jsx(r,{label:"Medium",placeholder:"md size",size:"md",rows:3}),e.jsx(r,{label:"Large",placeholder:"lg size",size:"lg",rows:4}),e.jsx(r,{label:"Extra Large",placeholder:"xl size",size:"xl",rows:5})]})},z={render:()=>{const[s,l]=C.useState("");return e.jsx(r,{label:"インタラクティブ入力",placeholder:"何か入力してみてください",value:s,onChange:l,maxLength:100,showCharacterCount:!0,autoResize:!0,helperText:"リアルタイムで値が更新されます"})}};var L,W,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: '内容を入力してください'
  }
}`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,A,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください'
  }
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var M,N,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: '詳細説明',
    placeholder: '詳細を入力してください',
    required: true
  }
}`,...(H=(N=p.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var k,O,$;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'フィードバック',
    placeholder: 'ご意見をお聞かせください',
    helperText: '具体的で建設的なフィードバックをお願いします'
  }
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var F,G,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
    errorText: 'この項目は必須です',
    invalid: true
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,P,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'レビュー',
    placeholder: 'レビューを入力してください',
    maxLength: 200,
    showCharacterCount: true
  }
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: '自動リサイズ',
    placeholder: '内容が増えると自動で高さが調整されます',
    autoResize: true,
    rows: 2
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: '無効なテキストエリア',
    placeholder: '編集できません',
    disabled: true,
    value: '無効な値です'
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <ThemeTextarea label="Extra Small" placeholder="xs size" size="xs" rows={2} />
      <ThemeTextarea label="Small" placeholder="sm size" size="sm" rows={2} />
      <ThemeTextarea label="Medium" placeholder="md size" size="md" rows={3} />
      <ThemeTextarea label="Large" placeholder="lg size" size="lg" rows={4} />
      <ThemeTextarea label="Extra Large" placeholder="xl size" size="xl" rows={5} />
    </div>
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,te,ne;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <ThemeTextarea label="インタラクティブ入力" placeholder="何か入力してみてください" value={value} onChange={setValue} maxLength={100} showCharacterCount autoResize helperText="リアルタイムで値が更新されます" />;
  }
}`,...(ne=(te=z.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Me=["Default","WithLabel","Required","WithHelperText","WithError","WithCharacterCount","AutoResize","Disabled","Sizes","Interactive"];export{x as AutoResize,d as Default,b as Disabled,z as Interactive,p as Required,f as Sizes,g as WithCharacterCount,h as WithError,m as WithHelperText,u as WithLabel,Me as __namedExportsOrder,Be as default};
