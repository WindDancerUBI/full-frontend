"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[19],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=i(n),d=u,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:u,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),u=(n(7294),n(3905));const a={sidebar_position:7,tags:["React"]},o="\u4e03\u3001useRef",l={unversionedId:"tutorial/React-Hooks/useRef/index",id:"tutorial/React-Hooks/useRef/index",title:"\u4e03\u3001useRef",description:"1\u3001useRef\u7684\u4f5c\u7528",source:"@site/docs/tutorial/React-Hooks/7-useRef/index.mdx",sourceDirName:"tutorial/React-Hooks/7-useRef",slug:"/tutorial/React-Hooks/useRef/",permalink:"/full-frontend/docs/tutorial/React-Hooks/useRef/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/React-Hooks/7-useRef/index.mdx",tags:[{label:"React",permalink:"/full-frontend/docs/tags/react"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"\u516d\u3001useContext",permalink:"/full-frontend/docs/tutorial/React-Hooks/useContext/"},next:{title:"\u516b\u3001useImperativeHandle",permalink:"/full-frontend/docs/tutorial/React-Hooks/useImperativeHandle/"}},s={},i=[{value:"1\u3001useRef\u7684\u4f5c\u7528",id:"1useref\u7684\u4f5c\u7528",level:2},{value:"\u9700\u6c42\u8bf4\u660e",id:"\u9700\u6c42\u8bf4\u660e",level:3},{value:"\u65b9\u6848\u4e00\uff1a\u901a\u8fc7\u666e\u901a\u53d8\u91cf\u6765\u5b58\u50a8\u5b9a\u65f6\u5668",id:"\u65b9\u6848\u4e00\u901a\u8fc7\u666e\u901a\u53d8\u91cf\u6765\u5b58\u50a8\u5b9a\u65f6\u5668",level:3},{value:"\u65b9\u6848\u4e00\uff1a\u901a\u8fc7useRef\u6765\u5b58\u50a8\u5b9a\u65f6\u5668",id:"\u65b9\u6848\u4e00\u901a\u8fc7useref\u6765\u5b58\u50a8\u5b9a\u65f6\u5668",level:3},{value:"2\u3001useRef\u7684\u7279\u6027",id:"2useref\u7684\u7279\u6027",level:2}],f={toc:i},c="wrapper";function p(e){let{components:t,...n}=e;return(0,u.kt)(c,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u4e03useref"},"\u4e03\u3001useRef"),(0,u.kt)("h2",{id:"1useref\u7684\u4f5c\u7528"},"1\u3001useRef\u7684\u4f5c\u7528"),(0,u.kt)("p",null,"useRef \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff0c\u5176ref .current \u5c5e\u6027\u88ab\u521d\u59cb\u5316\u4e3a\u4f20\u5165\u7684\u53c2\u6570\uff08initialValue\uff09\u3002\u8fd4\u56de\u7684 ref \u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u6301\u7eed\u5b58\u5728\u3002"),(0,u.kt)("p",null,"\u8fd9\u662f\u5b98\u65b9\u7684\u8bf4\u6cd5\uff0c\u5bf9\u4e8e\u840c\u65b0\u6765\u8bf4\u53ef\u80fd\u6bd4\u8f83\u62bd\u8c61\u3002\u4ee5\u4e0b\u901a\u8fc7\u6bd4\u8f83\u4e24\u79cd\u65b9\u6cd5\u5b9e\u73b0\u540c\u4e00\u4ef6\u9700\u6c42\u6765\u9610\u8ff0useRef\u7684\u610f\u4e49\u3002"),(0,u.kt)("h3",{id:"\u9700\u6c42\u8bf4\u660e"},"\u9700\u6c42\u8bf4\u660e"),(0,u.kt)("p",null,"\u5728\u9875\u9762\u7b2c\u4e00\u6b21\u52a0\u8f7d\u5b8c\u6bd5\u540e\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u8be5\u5b9a\u65f6\u5668\u7684\u4f5c\u7528\u662f\u5b9a\u671f\u66f4\u6539num\u7684\u503c\uff0c\u5e76\u5c06\u8be5\u5b9a\u65f6\u5668\u7684id\u901a\u8fc7\u4e00\u4e2a\u53d8\u91cf\u4fdd\u5b58\u8d77\u6765\u3002\u5f53num\u7684\u503c\u5927\u4e8e10\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u53d6\u51fa\u53d8\u91cf\u4e2d\u4fdd\u5b58\u7684\u5b9a\u65f6\u5668id\u503c\uff0cclearInterval\u8fbe\u5230\u6e05\u9664\u5b9a\u65f6\u5668\u7684\u4f5c\u7528\u3002\u6700\u7ec8\u6570\u5b57num\u5e94\u5f53\u505c\u6b62\u572811\u3002"),(0,u.kt)("h3",{id:"\u65b9\u6848\u4e00\u901a\u8fc7\u666e\u901a\u53d8\u91cf\u6765\u5b58\u50a8\u5b9a\u65f6\u5668"},"\u65b9\u6848\u4e00\uff1a\u901a\u8fc7\u666e\u901a\u53d8\u91cf\u6765\u5b58\u50a8\u5b9a\u65f6\u5668"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u5b9e\u73b0")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"function Chapter7_1() {\n  const [num_1, setNum_1] = useState<number>(0);\n  let timer_1: any\n  useEffect(() => {\n    timer_1 = setInterval(() => {\n      setNum_1(num => num + 1)\n    }, 500)\n  }, [])\n  useEffect(() => {\n    if (num_1 > 10) {\n      console.log(timer_1)\n      clearInterval(timer_1)\n    }\n  }, [num_1])\n\n  return (\n    <div>\n      <p>\u6570\u5b571\uff1a{num_1}</p>\n    </div>\n  );\n}\n\nexport default Chapter7_1;\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u7ed3\u679c\u5206\u6790")),(0,u.kt)("p",null,"\u6700\u7ec8\u5e76\u6ca1\u6709\u6e05\u9664\u5b9a\u65f6\u5668\uff0c\u56e0\u6b64\u6700\u7ec8\u6570\u5b57\u4e5f\u6ca1\u6709\u505c\u7559\u572811\u3002\u901a\u8fc7\u89c2\u5bdf\u63a7\u5236\u53f0\u6253\u5370\u7684timer_1\uff0c\u53d1\u73b0\u6253\u5370\u7684\u7ed3\u679c\u662fundefined\u3002\u5f88\u663e\u7136\u4e00\u5f00\u59cbtimer_1\u4fdd\u5b58\u7684\u5b9a\u65f6\u5668id\u5728\u591a\u6b21\u7684\u9875\u9762\u6e32\u67d3\u540e\u4e22\u5931\u4e86\u3002"),(0,u.kt)("p",null,"\u5bfc\u81f4\u8fd9\u4e2a\u539f\u56e0\u7684\u5206\u6790\u8fc7\u7a0b\u5982\u4e0b\uff1a\u9996\u5148\u5b9a\u4e49\u4e86\u4e00\u4e2atimer\u503c\uff0c\u5728\u9875\u9762\u52a0\u8f7d\u5b8c\u6bd5\u540e\u6267\u884c\u7b2c\u4e00\u4e2auseEffect\uff0c\u5728\u526f\u4f5c\u7528\u51fd\u6570\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u5176id\u662f\u6b63\u786e\u8d4b\u503c\u7ed9\u4e86timer_1\u7684\u3002\u4f46\u662f1\u79d2\u540e\uff0c\u5b9a\u65f6\u5668\u89e6\u53d1\u4e86\u56de\u8c03\u4fee\u6539\u4e86\u72b6\u6001\u503cnum_1\uff0c\u800c\u72b6\u6001\u503c\u7684\u4fee\u6539\u5c06\u89e6\u53d1\u9875\u9762\u7684\u91cd\u65b0\u6e32\u67d3\u3002\u56e0\u6b64React\u53c8\u5f00\u59cb\u91cd\u65b0\u6267\u884cChapter7_1\u51fd\u6570\uff0c\u5f53\u5b83\u6267\u884c\u5230",(0,u.kt)("inlineCode",{parentName:"p"},"let timer_1: any"),"\u8fd9\u4e00\u884c\u65f6\uff0ctimer_1\u7684\u503c\u88ab\u91cd\u65b0\u5b9a\u4e49\u4e3a\u4e86undefined\u3002\u5176\u540e\u7684\u591a\u6b21\u91cd\u65b0\u6e32\u67d3\u53c8\u91cd\u65b0\u5b9a\u4e49\u4e86timer_1\u4e3aundefined\u3002\u56e0\u6b64\u4e4b\u524d\u4fdd\u5b58\u7684\u5b9a\u65f6\u5668id\u5728\u9875\u9762\u7684\u91cd\u65b0\u6e32\u67d3\u4e0b\u4e22\u5931\u4e86\u3002"),(0,u.kt)("h3",{id:"\u65b9\u6848\u4e00\u901a\u8fc7useref\u6765\u5b58\u50a8\u5b9a\u65f6\u5668"},"\u65b9\u6848\u4e00\uff1a\u901a\u8fc7useRef\u6765\u5b58\u50a8\u5b9a\u65f6\u5668"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u6539\u8fdb\u65b9\u6848")),(0,u.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4ee3\u7801\u7684\u5206\u6790\uff0c\u6211\u4eec\u660e\u767d\u4e86\u5b9e\u73b0\u8be5\u9700\u6c42\u7684\u95ee\u9898\u6240\u5728\u3002\u5c31\u662f\u5982\u4f55\u4fdd\u5b58\u5b9a\u65f6\u5668\u7684id\uff0c\u4f7f\u5176\u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u90fd\u4fdd\u6301\u4e0d\u53d8\u3002\u800c\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6848\u4e5f\u4e0d\u5c11\uff0c\u5176\u4e00\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2astate\u72b6\u6001\u6765\u5b58\u50a8\u5b9a\u65f6\u5668id\u3002\u5176\u4e8c\uff0c\u5c31\u662f\u73b0\u5728\u6240\u4f7f\u7528\u7684\u7684useRef\u3002\u5b83\u4eec\u7684\u503c\u90fd\u662f\u5b9e\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\uff0c\u4e0d\u968f\u9875\u9762\u6e32\u67d3\u53d1\u751f\u6539\u53d8\uff0c\u53ea\u6709\u4f60\u624b\u52a8\u53bb\u66f4\u65b0\u5b83\u3002"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u5b9e\u73b0")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"function Chapter7_1() {\n  const [num_2, setNum_2] = useState<number>(0);\n  const ref = useRef<any>()\n  useEffect(() => {\n    ref.current = setInterval(() => {\n      setNum_2(num => num + 1)\n    }, 500)\n  }, [])\n  useEffect(() => {\n    if (num_2 > 10) {\n      console.log(ref.current)\n      clearInterval(ref.current)\n    }\n  }, [num_2])\n\n  return (\n    <div>\n      <p>\u6570\u5b571\uff1a{num_2}</p>\n    </div>\n  );\n}\n\nexport default Chapter7_1;\n")),(0,u.kt)("h2",{id:"2useref\u7684\u7279\u6027"},"2\u3001useRef\u7684\u7279\u6027"),(0,u.kt)("p",null,"useRefref \u5b9a\u4e49\u7684\u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u6301\u7eed\u5b58\u5728\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528ref.current\u6765\u5b58\u50a8\u503c\u3002\u4f46\u8fd9\u91cc\u6709\u4e2a\u7591\u95ee\uff0cuseState\u4e5f\u53ef\u4ee5\u5b58\u50a8\u503c\uff0c\u5e76\u4e14\u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u503c\u4e5f\u4e0d\u4f1a\u6539\u53d8\u3002\u90a3\u4e48useRef\u5b58\u5728\u7684\u610f\u4e49\u662f\u4ec0\u4e48\u5462\uff1f"),(0,u.kt)("p",null,"useRef\u4e0euseState\u6700\u5927\u7684\u533a\u522b\u662f\uff0cuseRef\u662f\u901a\u8fc7ref.current\u7684\u8d4b\u503c\u64cd\u4f5c\u6765\u66f4\u6539\u5b58\u50a8\u7684\u503c\u3002\u5e76\u4e14ref.current\u7684\u8d4b\u503c\u64cd\u4f5c\u662f\u4e0d\u4f1a\u89e6\u53d1\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u7684\u3002"),(0,u.kt)("p",null,"\u5728\u4e0b\u9762\u8fd9\u4e2a\u4ee3\u7801\u4e2d\uff0c\u4f7f\u7528ref.current\u6765\u5b58\u50a8\u8981\u663e\u793a\u7684\u6570\u5b57\uff0c\u4f46\u662f\u6bcf\u6b21\u70b9\u51fb\u589e\u52a0\u6309\u94ae\uff08\u4f7fref.current+1\uff09\u65f6\uff0c\u9875\u9762\u4e0a\u663e\u793a\u7684\u6570\u5b57\u5e76\u6ca1\u6709\u6539\u53d8\uff08\u4ecd\u4e3a0\uff09\u3002\u4f46\u662f\u67e5\u770b\u63a7\u5236\u53f0\u6253\u5370\u7684ref\uff0c\u53d1\u73b0\u5176current\u503c\u662f\u6b63\u786e\u7684\u6570\u5b57\u3002\u5f88\u663e\u7136\u8fd9\u9a8c\u8bc1\u4e86ref.current\u7684\u8d4b\u503c\u64cd\u4f5c\u4e0d\u4f1a\u89e6\u53d1\u9875\u9762\u7684\u6e32\u67d3\u3002\u70b9\u51fb\u5237\u65b0\u6309\u94ae\uff0c\u66f4\u6539\u4e86\u9875\u9762\u7684\u72b6\u6001\u503crefresh\uff0c\u9875\u9762\u91cd\u65b0\u6e32\u67d3\uff0c\u6b64\u523b\u9875\u9762\u91cd\u65b0\u663e\u793a\u4e86\u6b63\u786e\u7684\u6570\u5b57\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"function Chapter7_2() {\n  const ref = useRef<number>(0)\n  const add = () => {\n    ref.current = ref.current + 1\n    console.log('ref', ref)\n  }\n  \n  const [refresh, setRefresh] = useState<boolean>(false)\n\n  const refreshPage = () => {\n    setRefresh(!refresh)\n  }\n\n  return (\n    <div>\n      <Title level={2}>useRef\u7684\u7279\u6027</Title>\n      <p>\u6570\u5b57\uff1a{ref.current}</p>\n      <Button onClick={add} style={{marginRight: 15}}>\u589e\u52a0</Button>\n      <Button onClick={refreshPage}>\u5237\u65b0</Button>\n    </Typography>\n  );\n}\n\nexport default Chapter7_2;\n")),(0,u.kt)("p",null,"\u5f53\u7136\uff0c\u5728\u4e0a\u9762\u8fd9\u4e2a\u6848\u4f8b\u4e2d\u5e94\u5f53\u4f7f\u7528useState\u6765\u5b58\u50a8\u6570\u503c\uff0c\u8fd9\u6837\u624d\u80fd\u8fbe\u5230\u6211\u4eec\u7684\u9884\u671f\u3002\u4f46\u662f\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u5b58\u50a8\u7684\u6709\u4e9b\u503c\u5e76\u4e0d\u7528\u663e\u793a\u5728\u9875\u9762\u4e0a\uff0c\u53ea\u662f\u5355\u7eaf\u7684\u5b58\u50a8\uff0c\u5728\u67d0\u4e2a\u65f6\u95f4\u4e2d\u62ff\u5230\u5b58\u50a8\u7684\u503c\u5373\u53ef\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528useRef\u66f4\u6709\u4f18\u52bf\uff0c\u56e0\u4e3a\u4f7f\u7528useState\u5728\u6539\u53d8\u5b58\u50a8\u7684\u503c\u65f6\uff0c\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3"))}p.isMDXComponent=!0}}]);