"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[3049],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||l;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:8,tags:["React"]},o="\u516b\u3001useImperativeHandle",i={unversionedId:"tutorial/React-Hooks/useImperativeHandle/index",id:"tutorial/React-Hooks/useImperativeHandle/index",title:"\u516b\u3001useImperativeHandle",description:"1\u3001React.forwardRef",source:"@site/docs/tutorial/React-Hooks/8-useImperativeHandle/index.mdx",sourceDirName:"tutorial/React-Hooks/8-useImperativeHandle",slug:"/tutorial/React-Hooks/useImperativeHandle/",permalink:"/full-frontend/docs/tutorial/React-Hooks/useImperativeHandle/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/React-Hooks/8-useImperativeHandle/index.mdx",tags:[{label:"React",permalink:"/full-frontend/docs/tags/react"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"\u4e03\u3001useRef",permalink:"/full-frontend/docs/tutorial/React-Hooks/useRef/"},next:{title:"\u4e5d\u3001useMemo",permalink:"/full-frontend/docs/tutorial/React-Hooks/useMemo/"}},u={},p=[{value:"1\u3001React.forwardRef",id:"1reactforwardref",level:2},{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"2\u3001useImperativeHandle\u7684\u4f5c\u7528",id:"2useimperativehandle\u7684\u4f5c\u7528",level:2}],s={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u516buseimperativehandle"},"\u516b\u3001useImperativeHandle"),(0,r.kt)("h2",{id:"1reactforwardref"},"1\u3001React.forwardRef"),(0,r.kt)("p",null,"useImperativeHandle \u5e94\u5f53\u4e0e forwardRef \u4e00\u8d77\u4f7f\u7528\u3002\u56e0\u6b64\u9996\u5148\u6211\u4eec\u6765\u7814\u7a76\u4e00\u4e0bReact.forwardRef\u7684\u4f5c\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.forwardRef"),"\xa0\u4f1a\u521b\u5efa\u4e00\u4e2aReact\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u80fd\u591f\u5c06\u5176\u63a5\u53d7\u7684\xa0",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.bootcss.com/docs/refs-and-the-dom.html"},"ref"),"\xa0\u5c5e\u6027\u8f6c\u53d1\u5230\u5176\u7ec4\u4ef6\u6811\u4e0b\u7684\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u3002\u8fd9\u79cd\u6280\u672f\u5e76\u4e0d\u5e38\u89c1\uff0c\u4f46\u5728\u4ee5\u4e0b\u4e24\u79cd\u573a\u666f\u4e2d\u7279\u522b\u6709\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u53d1 refs \u5230 DOM \u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u9ad8\u9636\u7ec4\u4ef6\u4e2d\u8f6c\u53d1 refs")),(0,r.kt)("h3",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u7684\u4f8b\u5b50\u6765\u8bf4\u660e\uff0c\u5b9a\u4e49\u4e00\u4e2a\u5b50\u7ec4\u4ef6Child\uff0c\u5b83\u5305\u88f9\u6709\u4e00\u4e2a\u8f93\u5165\u6846Input\u3002\u5728\u7236\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\uff0c\u5728\u8be5\u4e8b\u4ef6\u4e2d\u53bb\u89e6\u53d1\u5b50\u7ec4\u4ef6Child\u4e2d\u7684Input\u7ec4\u4ef6\u7684focus\uff08\u805a\u7126\uff09\u4e8b\u4ef6\u3002 "),(0,r.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\u662f\u8981\u5728\u7236\u7ec4\u4ef6\u62ff\u5230\u5b50\u7ec4\u4ef6\u4e2d\u7684Input\u7ec4\u4ef6\u7684ref\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230Input\u7684DOM\uff0c\u8be5DOM\u4e0a\u6709Input\u7684focus\uff08\u805a\u7126\uff09\u4e8b\u4ef6\u3002\u8fd9\u6837\u5728\u7236\u7ec4\u4ef6\u4e2d\u7684\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\u4e2d\u8c03\u7528ref.currenr.focus\u5373\u53ef\u8fbe\u5230\u76ee\u7684\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u8be5Input\u7ec4\u4ef6\u88ab\u5305\u88f9\u5728\u5b50\u7ec4\u4ef6Child\u4e2d\uff0c\u56e0\u6b64\u9700\u8981React.forwardRef\u4f5c\u4e3a\u4e2d\u95f4\u7684\u8f6c\u53d1\u5c42\u3002\u5c06\u7236\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684ref\u900f\u4f20\u5230\u5b50\u7ec4\u4ef6Child\u4e2d\u7684Input\u7ec4\u4ef6\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u7236\u7ec4\u4ef6\u4e2d\u62ff\u5230Input\u7ec4\u4ef6\u7684\u5f15\u7528\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Chapter8_1() {\n  const ref = React.createRef<any>()\n\n  const focus = () => {\n    console.log(ref)\n    ref.current.focus()\n  }\n\n  return (\n    <div>\n      <Button onClick={focus}>\u805a\u7126\u5b50\u7ec4\u4ef6Input</Button>\n      <Child ref={ref} />\n    </div>\n  );\n}\n\nexport default Chapter8_1;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Child = React.forwardRef((props, ref: any) => {\n\n  return (\n    <div style={{ padding: 10, border: '1px solid #000' }}>\n      <h2>\u5b50\u7ec4\u4ef6</h2>\n      <Input ref={ref} />\n    </div>\n  );\n})\n\nexport default Child;\n")),(0,r.kt)("h2",{id:"2useimperativehandle\u7684\u4f5c\u7528"},"2\u3001useImperativeHandle\u7684\u4f5c\u7528"),(0,r.kt)("p",null,"useImperativeHandle \u53ef\u4ee5\u8ba9\u4f60\u5728\u4f7f\u7528 ref \u65f6\u81ea\u5b9a\u4e49\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u503c\u3002"),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u4e2a\u4ec5\u4ec5\u4f7f\u7528React.forwardRef\uff0c\u7236\u7ec4\u4ef6\u53ea\u662f\u901a\u8fc7\u62ff\u5230\u4e86\u5b50\u7ec4\u4ef6Child\u4e2d\u7684Input\u7ec4\u4ef6\u7684DOM\u3002\u5f53\u7136\u6211\u4eec\u7684\u6b32\u671b\u4e0d\u6b62\u4e8e\u6b64\uff0c\u5f88\u591a\u65f6\u5019\u6211\u4eec\u8fd8\u60f3\u5728\u7236\u7ec4\u4ef6\u4e2d\u901a\u8fc7ref\u83b7\u5f97\u5b50\u7ec4\u4ef6\u4e2d\u7684\u72b6\u6001\u548c\u5b9a\u4e49\u7684\u65b9\u6cd5\u3002\u8fd9\u4e2a\u65f6\u5019useImperativeHandle \u5c31\u6d3e\u4e0a\u7528\u573a\u4e86"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u7ec4\u4ef6")),(0,r.kt)("p",null,"\u8be5\u5b50\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"addTag"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"setTag"),"\u4e24\u4e2a\u65b9\u6cd5\u3002\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u9700\u8981\u5728\u7236\u7ec4\u4ef6\u4e2d\u53bb\u8c03\u7528\uff0c\u4f20\u53c2\u5e76\u6539\u53d8\u8981\u663e\u793a\u7684\u6807\u7b7e\u3002\u56e0\u6b64\u5728\u5b50\u7ec4\u4ef6\u4e2d\u901a\u8fc7useImperativeHandle \u5c06\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u66b4\u9732\u51fa\u53bb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { forwardRef, useImperativeHandle, useState } from "react"; \nimport { Tag } from "antd";\n\ntype Value = { id: any; label: string }[];\ninterface MultipleTagProps {\n  initialValue?: Value; // \u521d\u59cb\u503c\n  onChange?: (value: Value) => void;\n}\n\nconst MultipleTag = forwardRef((props: MultipleTagProps, ref) => {\n  const { initialValue, onChange } = props;\n  const [array, setArray] = useState<Value>(initialValue || []);\n\n  // \u5220\u9664\u6807\u7b7e\n  const deleteTag = (id: any) => {\n    const newArray = array.filter((item) => item.id !== id);\n    setArray(newArray);\n    onChange?.(newArray);\n  };\n\n  // \u6dfb\u52a0\u6807\u7b7e\n  const addTag = (params: Value) => {\n    const tmp = [...array];\n    params.forEach((item) => {\n      const isExit = tmp.find((thing) => thing.id === item.id);\n      if (!isExit) {\n        tmp.push(item);\n      }\n    });\n    setArray(tmp);\n    onChange?.(tmp);\n  };\n\n  // \u8bbe\u7f6e\u6807\u7b7e\n  const setTag = (params: Value) => {\n    setArray(params);\n    onChange?.(params);\n  };\n\n  // \u4f7f\u7528 ref \u65f6\u81ea\u5b9a\u4e49\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u503c\u3002\n  useImperativeHandle(ref, () => ({\n    value: array,\n    addTag: (params: Value) => {\n      addTag(params);\n    },\n    setTag: (params: Value) => {\n      setTag(params);\n    }\n  }));\n\n  return (\n    <div style={{ width: 300, border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 40 }} >\n        {array.map((item) => (\n          <Tag\n            closable\n            key={item.id}\n            onClose={() => deleteTag(item.id)}\n          >\n            {item.label}\n          </Tag>\n        ))}\n    </div>\n  );\n});\n\nexport default MultipleTag;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6")),(0,r.kt)("p",null,"\u5b50\u7ec4\u4ef6\u901a\u8fc7ref\u4e2d\u66b4\u9732\u7684addTag\u3001setTag\u65b9\u6cd5\uff0c\u5728\u7236\u7ec4\u4ef6\u4e2d\u76f4\u63a5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.addTag()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.setTag()"),"\uff0c\u53ef\u8fbe\u5230\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u7684\u76ee\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Button, Divider, Select} from "antd";\nimport React, { useRef }  from "react";\nimport MultipleTag from "./MultipleTag";\n\nconst dataSource = [\n  { label: "\u5c0f\u82b1", value: 1 },\n  { label: "\u5c0f\u660e", value: 2 },\n  { label: "\u5c0f\u5f20", value: 3 },\n  { label: "\u8001\u738b", value: 4 }\n]\n\nfunction Chapter8_2() {\n  const ref = useRef<any>()\n\n  // \u6dfb\u52a0\u6807\u7b7e\n  const addTag = (value: number, options: any) => {\n    const val = { label: options.label, id: options.value }\n    ref.current.addTag([val])\n  }\n\n  // \u91cd\u7f6e\u6807\u7b7e\n  const setTag = () => {\n    ref.current.setTag([{ label: "\u5c0f\u82b1", id: 1 }])\n  }\n\n  return (\n    <div>\n      <Select options={dataSource} onChange={addTag} placeholder="\u8bf7\u9009\u62e9\u8981\u6dfb\u52a0\u7684\u6807\u7b7e" style={{width: 200}}/>\n      <Button onClick={setTag} style={{marginLeft: 15}}>\u91cd\u7f6e</Button>\n      <Divider />\n      <MultipleTag initialValue={[{ label: "\u5c0f\u82b1", id: 1 }]} ref={ref}/>\n    </div>\n  );\n}\n\nexport default Chapter8_2;\n')))}c.isMDXComponent=!0}}]);