"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[1799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1007:(e,t,r)=>{r.d(t,{p:()=>i,Z:()=>c});var n=r(7294),o=r(6010);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function c(e){let{children:t,minHeight:r,url:c="http://localhost:3000",style:i,bodyStyle:l}=e;return n.createElement("div",{className:a.browserWindow,style:{...i,minHeight:r}},n.createElement("div",{className:a.browserWindowHeader},n.createElement("div",{className:a.buttons},n.createElement("span",{className:a.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:a.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:a.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,o.Z)(a.browserWindowAddressBar,"text--truncate"),onClick:()=>{window.open(c,"_blank")}},c),n.createElement("div",{className:a.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:a.bar}),n.createElement("span",{className:a.bar}),n.createElement("span",{className:a.bar})))),n.createElement("div",{className:a.browserWindowBody,style:l},t))}function i(e){let t,{url:r}=e;return t=r.includes("http")||r.includes("https")?r:"https://winddancer.gitee.io"+r,n.createElement("div",null,n.createElement(c,{url:t,bodyStyle:{padding:0}},n.createElement("iframe",{src:t,title:t,style:{width:"100%",height:500}})))}},5833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),a=r(1007);const c={sidebar_position:0,tags:["React"]},i="\u524d\u8a00",l={unversionedId:"tutorial/React-Hooks/preface/index",id:"tutorial/React-Hooks/preface/index",title:"\u524d\u8a00",description:"\u672c\u7cfb\u5217\u7684\u9879\u76ee\u5730\u5740\u4e3a\uff1a",source:"@site/docs/tutorial/React-Hooks/0-preface/index.mdx",sourceDirName:"tutorial/React-Hooks/0-preface",slug:"/tutorial/React-Hooks/preface/",permalink:"/full-frontend/docs/tutorial/React-Hooks/preface/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/React-Hooks/0-preface/index.mdx",tags:[{label:"React",permalink:"/full-frontend/docs/tags/react"}],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"React-Hooks",permalink:"/full-frontend/docs/category/react-hooks"},next:{title:"\u4e00\u3001React-Hooks\u4ecb\u7ecd",permalink:"/full-frontend/docs/tutorial/React-Hooks/introduce/"}},s={},d=[],u={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u672c\u7cfb\u5217\u7684\u9879\u76ee\u5730\u5740\u4e3a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/winddancer/react-hooks-beginner"},"gitee - WindDancer/react-hooks-beginner")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/WindDancerUBI/react-hooks-beginner.git"},"GitHub - WindDancerUBI/react-hooks-beginner")),(0,o.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)(a.p,{url:"https://winddancer.gitee.io/react-hooks-beginner",mdxType:"IframeWindow"}))}m.isMDXComponent=!0}}]);