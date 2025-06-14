import{j as e}from"./create-recipe-context-LbQq3bM7.js";import{u as l}from"./color-mode-DpbueTiJ.js";import{r as z}from"./index-BXymfbzT.js";import{H as b}from"./heading-B7_y7u_0.js";import{V as i}from"./v-stack-DfIdlA7P.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-B2ItOoBf.js";import"./iconBase-BtwG8oUN.js";import"./icon-button-Bwmz2JOC.js";import"./button-Cvi4ewak.js";import"./box-p2MKwv57.js";import"./stack-B-mkjmc_.js";const s=z.forwardRef(({level:n=2,responsive:m=!0,variant:h="primary",children:x,...y},u)=>{const t=l("gray.800","gray.100"),j=l("gray.700","gray.200"),R=l("blue.600","blue.300"),H=()=>m?{1:{base:"2xl",md:"4xl",lg:"5xl"},2:{base:"xl",md:"3xl",lg:"4xl"},3:{base:"lg",md:"2xl",lg:"3xl"},4:{base:"md",md:"xl",lg:"2xl"},5:{base:"sm",md:"lg",lg:"xl"},6:{base:"xs",md:"md",lg:"lg"}}[n]:{1:"4xl",2:"3xl",3:"2xl",4:"xl",5:"lg",6:"md"}[n],f=()=>{switch(h){case"primary":return t;case"secondary":return j;case"accent":return R;default:return t}},S=H(),V=f();return e.jsx(b,{ref:u,as:`h${n}`,size:S,color:V,fontWeight:"bold",lineHeight:"1.2",...y,children:x})});s.displayName="ResponsiveHeading";try{s.displayName="ResponsiveHeading",s.__docgenInfo={description:"",displayName:"ResponsiveHeading",props:{level:{defaultValue:{value:"2"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},responsive:{defaultValue:{value:"true"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const I={title:"Atoms/Typography/ResponsiveHeading",component:s,parameters:{layout:"padded"},argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6]},variant:{control:{type:"select"},options:["primary","secondary","accent"]},responsive:{control:"boolean"},textAlign:{control:{type:"select"},options:["left","center","right"]}}},r={render:()=>e.jsxs(i,{gap:6,align:"stretch",children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"レベル別見出し"}),e.jsxs(i,{gap:3,align:"stretch",children:[e.jsx(s,{level:1,children:"レベル1: メインタイトル"}),e.jsx(s,{level:2,children:"レベル2: セクション見出し"}),e.jsx(s,{level:3,children:"レベル3: サブセクション見出し"}),e.jsx(s,{level:4,children:"レベル4: 小見出し"}),e.jsx(s,{level:5,children:"レベル5: 項目見出し"}),e.jsx(s,{level:6,children:"レベル6: 最小見出し"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"バリアント"}),e.jsxs(i,{gap:3,align:"stretch",children:[e.jsx(s,{level:2,variant:"primary",children:"プライマリバリアント見出し"}),e.jsx(s,{level:2,variant:"secondary",children:"セカンダリバリアント見出し"}),e.jsx(s,{level:2,variant:"accent",children:"アクセントバリアント見出し"})]})]})]})},a={render:()=>e.jsxs(i,{gap:6,align:"stretch",children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"レスポンシブ比較"}),e.jsxs(i,{gap:4,align:"stretch",children:[e.jsxs("div",{children:[e.jsx(s,{level:3,responsive:!1,mb:2,children:"固定サイズ見出し"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"gray"},children:"この見出しは画面サイズに関係なく一定のサイズです。"})]}),e.jsxs("div",{children:[e.jsx(s,{level:3,responsive:!0,mb:2,children:"レスポンシブ見出し"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"gray"},children:"この見出しは画面サイズに応じてサイズが変わります。"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"テキスト配置"}),e.jsxs(i,{gap:3,align:"stretch",w:"full",children:[e.jsx(s,{level:3,textAlign:"left",children:"左寄せ見出し"}),e.jsx(s,{level:3,textAlign:"center",children:"中央寄せ見出し"}),e.jsx(s,{level:3,textAlign:"right",children:"右寄せ見出し"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"ページ構造例"}),e.jsxs(i,{gap:3,align:"stretch",children:[e.jsx(s,{level:1,variant:"primary",children:"ページタイトル"}),e.jsx("p",{style:{fontSize:"0.875rem"},children:"これはページの説明文です。"}),e.jsx(s,{level:2,variant:"accent",children:"メインセクション"}),e.jsx("p",{style:{fontSize:"0.875rem"},children:"メインセクションの内容です。"}),e.jsx(s,{level:3,variant:"secondary",children:"サブセクション"}),e.jsx("p",{style:{fontSize:"0.875rem"},children:"サブセクションの内容です。"}),e.jsx(s,{level:4,children:"詳細項目"}),e.jsx("p",{style:{fontSize:"0.875rem"},children:"詳細項目の説明です。"})]})]})]})};var o,d,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch">
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>レベル別見出し</h3>
        <VStack gap={3} align="stretch">
          <ResponsiveHeading level={1}>
            レベル1: メインタイトル
          </ResponsiveHeading>
          <ResponsiveHeading level={2}>
            レベル2: セクション見出し
          </ResponsiveHeading>
          <ResponsiveHeading level={3}>
            レベル3: サブセクション見出し
          </ResponsiveHeading>
          <ResponsiveHeading level={4}>レベル4: 小見出し</ResponsiveHeading>
          <ResponsiveHeading level={5}>レベル5: 項目見出し</ResponsiveHeading>
          <ResponsiveHeading level={6}>レベル6: 最小見出し</ResponsiveHeading>
        </VStack>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>バリアント</h3>
        <VStack gap={3} align="stretch">
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
      </div>
    </VStack>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,v,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <VStack gap={6} align="stretch">
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>レスポンシブ比較</h3>
        <VStack gap={4} align="stretch">
          <div>
            <ResponsiveHeading level={3} responsive={false} mb={2}>
              固定サイズ見出し
            </ResponsiveHeading>
            <p style={{
            fontSize: '0.875rem',
            color: 'gray'
          }}>
              この見出しは画面サイズに関係なく一定のサイズです。
            </p>
          </div>
          <div>
            <ResponsiveHeading level={3} responsive={true} mb={2}>
              レスポンシブ見出し
            </ResponsiveHeading>
            <p style={{
            fontSize: '0.875rem',
            color: 'gray'
          }}>
              この見出しは画面サイズに応じてサイズが変わります。
            </p>
          </div>
        </VStack>
      </div>

      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>テキスト配置</h3>
        <VStack gap={3} align="stretch" w="full">
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
      </div>

      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>ページ構造例</h3>
        <VStack gap={3} align="stretch">
          <ResponsiveHeading level={1} variant="primary">
            ページタイトル
          </ResponsiveHeading>
          <p style={{
          fontSize: '0.875rem'
        }}>これはページの説明文です。</p>
          <ResponsiveHeading level={2} variant="accent">
            メインセクション
          </ResponsiveHeading>
          <p style={{
          fontSize: '0.875rem'
        }}>メインセクションの内容です。</p>
          <ResponsiveHeading level={3} variant="secondary">
            サブセクション
          </ResponsiveHeading>
          <p style={{
          fontSize: '0.875rem'
        }}>サブセクションの内容です。</p>
          <ResponsiveHeading level={4}>詳細項目</ResponsiveHeading>
          <p style={{
          fontSize: '0.875rem'
        }}>詳細項目の説明です。</p>
        </VStack>
      </div>
    </VStack>
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const O=["LevelsAndVariants","AdvancedFeatures"];export{a as AdvancedFeatures,r as LevelsAndVariants,O as __namedExportsOrder,I as default};
