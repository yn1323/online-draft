import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{u as H}from"./color-mode-DpbueTiJ.js";import{r as Le}from"./index-BXymfbzT.js";import{H as ke}from"./heading-B7_y7u_0.js";import{V as n}from"./v-stack-DfIdlA7P.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";const r=Le.forwardRef(({level:s=2,responsive:he=!0,variant:xe="primary",children:Re,...ye},He)=>{const j=H("gray.800","gray.100"),je=H("gray.700","gray.200"),Se=H("blue.600","blue.300"),fe=()=>he?{1:{base:"2xl",md:"4xl",lg:"5xl"},2:{base:"xl",md:"3xl",lg:"4xl"},3:{base:"lg",md:"2xl",lg:"3xl"},4:{base:"md",md:"xl",lg:"2xl"},5:{base:"sm",md:"lg",lg:"xl"},6:{base:"xs",md:"md",lg:"lg"}}[s]:{1:"4xl",2:"3xl",3:"2xl",4:"xl",5:"lg",6:"md"}[s],Ve=()=>{switch(xe){case"primary":return j;case"secondary":return je;case"accent":return Se;default:return j}},Ae=fe(),be=Ve();return e.jsx(ke,{ref:He,as:`h${s}`,size:Ae,color:be,fontWeight:"bold",lineHeight:"1.2",...ye,children:Re})});r.displayName="ResponsiveHeading";try{r.displayName="ResponsiveHeading",r.__docgenInfo={description:"",displayName:"ResponsiveHeading",props:{level:{defaultValue:{value:"2"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"4"},{value:"2"},{value:"3"},{value:"5"},{value:"6"}]}},responsive:{defaultValue:{value:"true"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const $e={title:"Atoms/Typography/ResponsiveHeading",component:r,parameters:{layout:"padded"},argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6]},variant:{control:{type:"select"},options:["primary","secondary","accent"]},responsive:{control:"boolean"},textAlign:{control:{type:"select"},options:["left","center","right"]}}},a={args:{children:"デフォルトの見出し"}},i={args:{level:1,children:"レベル1の見出し（最大）"}},l={args:{level:2,children:"レベル2の見出し"}},o={args:{level:3,children:"レベル3の見出し"}},t={args:{level:4,children:"レベル4の見出し"}},c={args:{level:5,children:"レベル5の見出し"}},p={args:{level:6,children:"レベル6の見出し（最小）"}},d={args:{variant:"primary",children:"プライマリ見出し"}},v={args:{variant:"secondary",children:"セカンダリ見出し"}},g={args:{variant:"accent",children:"アクセント見出し"}},m={args:{level:2,responsive:!1,children:"非レスポンシブ見出し（固定サイズ）"}},u={render:()=>e.jsxs(n,{gap:4,align:"stretch",children:[e.jsx(r,{level:1,children:"レベル1: メインタイトル"}),e.jsx(r,{level:2,children:"レベル2: セクション見出し"}),e.jsx(r,{level:3,children:"レベル3: サブセクション見出し"}),e.jsx(r,{level:4,children:"レベル4: 小見出し"}),e.jsx(r,{level:5,children:"レベル5: 項目見出し"}),e.jsx(r,{level:6,children:"レベル6: 最小見出し"})]})},h={render:()=>e.jsxs(n,{gap:4,align:"stretch",children:[e.jsx(r,{level:2,variant:"primary",children:"プライマリバリアント見出し"}),e.jsx(r,{level:2,variant:"secondary",children:"セカンダリバリアント見出し"}),e.jsx(r,{level:2,variant:"accent",children:"アクセントバリアント見出し"})]})},x={render:()=>e.jsxs(n,{gap:6,align:"stretch",children:[e.jsxs("div",{children:[e.jsx(r,{level:3,responsive:!1,mb:2,children:"固定サイズ見出し"}),e.jsx("p",{children:"この見出しは画面サイズに関係なく一定のサイズです。"})]}),e.jsxs("div",{children:[e.jsx(r,{level:3,responsive:!0,mb:2,children:"レスポンシブ見出し"}),e.jsx("p",{children:"この見出しは画面サイズに応じてサイズが変わります。画面を縮小・拡大して確認してください。"})]})]})},R={render:()=>e.jsxs(n,{gap:4,align:"stretch",w:"full",children:[e.jsx(r,{level:3,textAlign:"left",children:"左寄せ見出し"}),e.jsx(r,{level:3,textAlign:"center",children:"中央寄せ見出し"}),e.jsx(r,{level:3,textAlign:"right",children:"右寄せ見出し"})]})},y={render:()=>e.jsxs(n,{gap:4,align:"stretch",children:[e.jsx(r,{level:1,variant:"primary",children:"ページタイトル"}),e.jsx("p",{children:"これはページの説明文です。"}),e.jsx(r,{level:2,variant:"accent",children:"メインセクション"}),e.jsx("p",{children:"メインセクションの内容です。"}),e.jsx(r,{level:3,variant:"secondary",children:"サブセクション"}),e.jsx("p",{children:"サブセクションの内容です。"}),e.jsx(r,{level:4,children:"詳細項目"}),e.jsx("p",{children:"詳細項目の説明です。"})]})};var S,f,V;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'デフォルトの見出し'
  }
}`,...(V=(f=a.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var A,b,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'レベル1の見出し（最大）'
  }
}`,...(L=(b=i.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var k,_,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'レベル2の見出し'
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var z,N,P;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'レベル3の見出し'
  }
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var q,w,T;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'レベル4の見出し'
  }
}`,...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,E,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'レベル5の見出し'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var I,O,W;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: 'レベル6の見出し（最小）'
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var $,B,F;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'プライマリ見出し'
  }
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'セカンダリ見出し'
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'アクセント見出し'
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    level: 2,
    responsive: false,
    children: '非レスポンシブ見出し（固定サイズ）'
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ne,se;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch">
      <ResponsiveHeading level={1}>レベル1: メインタイトル</ResponsiveHeading>
      <ResponsiveHeading level={2}>レベル2: セクション見出し</ResponsiveHeading>
      <ResponsiveHeading level={3}>
        レベル3: サブセクション見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={4}>レベル4: 小見出し</ResponsiveHeading>
      <ResponsiveHeading level={5}>レベル5: 項目見出し</ResponsiveHeading>
      <ResponsiveHeading level={6}>レベル6: 最小見出し</ResponsiveHeading>
    </VStack>
}`,...(se=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,ie,le;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch">
      <ResponsiveHeading level={2} variant="primary">
        プライマリバリアント見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={2} variant="secondary">
        セカンダリバリアント見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={2} variant="accent">
        アクセントバリアント見出し
      </ResponsiveHeading>
    </VStack>
}`,...(le=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,te,ce;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch">
      <div>
        <ResponsiveHeading level={3} responsive={false} mb={2}>
          固定サイズ見出し
        </ResponsiveHeading>
        <p>この見出しは画面サイズに関係なく一定のサイズです。</p>
      </div>
      <div>
        <ResponsiveHeading level={3} responsive={true} mb={2}>
          レスポンシブ見出し
        </ResponsiveHeading>
        <p>
          この見出しは画面サイズに応じてサイズが変わります。画面を縮小・拡大して確認してください。
        </p>
      </div>
    </VStack>
}`,...(ce=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};var pe,de,ve;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch" w="full">
      <ResponsiveHeading level={3} textAlign="left">
        左寄せ見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={3} textAlign="center">
        中央寄せ見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={3} textAlign="right">
        右寄せ見出し
      </ResponsiveHeading>
    </VStack>
}`,...(ve=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var ge,me,ue;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <VStack gap={4} align="stretch">
      <ResponsiveHeading level={1} variant="primary">
        ページタイトル
      </ResponsiveHeading>
      <p>これはページの説明文です。</p>

      <ResponsiveHeading level={2} variant="accent">
        メインセクション
      </ResponsiveHeading>
      <p>メインセクションの内容です。</p>

      <ResponsiveHeading level={3} variant="secondary">
        サブセクション
      </ResponsiveHeading>
      <p>サブセクションの内容です。</p>

      <ResponsiveHeading level={4}>詳細項目</ResponsiveHeading>
      <p>詳細項目の説明です。</p>
    </VStack>
}`,...(ue=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Be=["Default","Level1","Level2","Level3","Level4","Level5","Level6","PrimaryVariant","SecondaryVariant","AccentVariant","NonResponsive","AllLevels","AllVariants","ResponsiveComparison","TextAlignment","PageStructure"];export{g as AccentVariant,u as AllLevels,h as AllVariants,a as Default,i as Level1,l as Level2,o as Level3,t as Level4,c as Level5,p as Level6,m as NonResponsive,y as PageStructure,d as PrimaryVariant,x as ResponsiveComparison,v as SecondaryVariant,R as TextAlignment,Be as __namedExportsOrder,$e as default};
