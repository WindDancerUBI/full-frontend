"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),l=n(7294),r=n(6010),i=n(2466),s=n(6550),o=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,u]=f({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=o??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(c(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(h,(0,a.Z)({},e,t)),l.createElement(x,(0,a.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return l.createElement(w,(0,a.Z)({key:String(t)},e))}},1007:(e,t,n)=>{n.d(t,{p:()=>s,Z:()=>i});var a=n(7294),l=n(6010);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",style:s,bodyStyle:o}=e;return a.createElement("div",{className:r.browserWindow,style:{...s,minHeight:n}},a.createElement("div",{className:r.browserWindowHeader},a.createElement("div",{className:r.buttons},a.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:r.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,l.Z)(r.browserWindowAddressBar,"text--truncate"),onClick:()=>{window.open(i,"_blank")}},i),a.createElement("div",{className:r.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:r.bar}),a.createElement("span",{className:r.bar}),a.createElement("span",{className:r.bar})))),a.createElement("div",{className:r.browserWindowBody,style:o},t))}function s(e){let t,{url:n}=e;return t=n.includes("http")||n.includes("https")?n:"https://winddancer.gitee.io"+n,a.createElement("div",null,a.createElement(i,{url:t,bodyStyle:{padding:0}},a.createElement("iframe",{src:t,title:t,style:{width:"100%",height:500}})))}},969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(1007),i=n(4866),s=n(5162);const o={sidebar_position:5,tags:["CSS"]},u="\u4e94\u3001FlexBox",d={unversionedId:"tutorial/css/flexbox/index",id:"tutorial/css/flexbox/index",title:"\u4e94\u3001FlexBox",description:"1. FlexBox\u7684\u539f\u5219",source:"@site/docs/tutorial/css/5-flexbox/index.mdx",sourceDirName:"tutorial/css/5-flexbox",slug:"/tutorial/css/flexbox/",permalink:"/full-frontend/docs/tutorial/css/flexbox/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/css/5-flexbox/index.mdx",tags:[{label:"CSS",permalink:"/full-frontend/docs/tags/css"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["CSS"]},sidebar:"tutorialSidebar",previous:{title:"\u56db\u3001\u6d6e\u52a8",permalink:"/full-frontend/docs/tutorial/css/float/"},next:{title:"\u516d\u3001\u7f51\u683c\u5e03\u5c40",permalink:"/full-frontend/docs/tutorial/css/grid/"}},c={},p=[{value:"1. FlexBox\u7684\u539f\u5219",id:"1-flexbox\u7684\u539f\u5219",level:2},{value:"1.1 \u57fa\u672c\u6982\u5ff5",id:"11-\u57fa\u672c\u6982\u5ff5",level:3},{value:"1.2 \u521b\u5efaFlexBox\u5e03\u5c40",id:"12-\u521b\u5efaflexbox\u5e03\u5c40",level:3},{value:"2. \u5f39\u6027\u5b50\u5143\u7d20\u7684\u5927\u5c0f",id:"2-\u5f39\u6027\u5b50\u5143\u7d20\u7684\u5927\u5c0f",level:2},{value:"2.1 flex-basis",id:"21-flex-basis",level:3},{value:"2.2 flex-grow",id:"22-flex-grow",level:3},{value:"2.3 flex-shrink",id:"23-flex-shrink",level:3},{value:"2.4 \u5982\u4f55\u4f7f\u7528",id:"24-\u5982\u4f55\u4f7f\u7528",level:3},{value:"3. \u5f39\u6027\u65b9\u5411",id:"3-\u5f39\u6027\u65b9\u5411",level:2},{value:"3.1 \u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528\u5782\u76f4\u6392\u5217",id:"31-\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528\u5782\u76f4\u6392\u5217",level:3},{value:"4. FlexBox\u7684\u5c5e\u6027",id:"4-flexbox\u7684\u5c5e\u6027",level:2},{value:"4.1 FlexBox\u7684\u5176\u4f59\u5c5e\u6027",id:"41-flexbox\u7684\u5176\u4f59\u5c5e\u6027",level:3},{value:"4.2 \u5f39\u6027\u5b50\u5143\u7d20\u7684\u5c5e\u6027",id:"42-\u5f39\u6027\u5b50\u5143\u7d20\u7684\u5c5e\u6027",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}],m={toc:p},f="wrapper";function g(e){let{components:t,...o}=e;return(0,l.kt)(f,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e94flexbox"},"\u4e94\u3001FlexBox"),(0,l.kt)("h2",{id:"1-flexbox\u7684\u539f\u5219"},"1. FlexBox\u7684\u539f\u5219"),(0,l.kt)("h3",{id:"11-\u57fa\u672c\u6982\u5ff5"},"1.1 \u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"\u5f39\u6027\u5b50\u5143\u7d20\u9ed8\u8ba4\u662f\u5728\u540c\u4e00\u884c\u6309\u7167\u4ece\u5de6\u5230\u53f3\u7684\u987a\u5e8f\u5e76\u6392\u6392\u5217\u3002"),(0,l.kt)("p",null,"\u5f39\u6027\u5bb9\u5668\u50cf\u5757\u5143\u7d20\u4e00\u6837\u586b\u6ee1\u53ef\u7528\u5bbd\u5ea6\uff0c\u4f46\u662f\u5f39\u6027\u5b50\u5143\u7d20\u4e0d\u4e00\u5b9a\u586b\u6ee1\u5176\u5f39\u6027\u5bb9\u5668\u7684\u5bbd\u5ea6\u3002\u5f39\u6027\u5b50\u5143\u7d20\u9ad8\u5ea6\u76f8\u7b49\uff0c\u8be5\u9ad8\u5ea6\u7531\u5b83\u4eec\u7684\u5185\u5bb9\u51b3\u5b9a\uff08\u5373\u5185\u5bb9\u6700\u957f\u7684\u5143\u7d20\u9ad8\u5ea6\u90a3\u4e2a\u4f5c\u4e3a\u7edf\u4e00\u9ad8\u5ea6\uff09\u3002"),(0,l.kt)("p",null,"\u5b50\u5143\u7d20\u6309\u7167\u4e3b\u8f74\u7ebf\u6392\u5217\uff0c\u4e3b\u8f74\u7684\u65b9\u5411\u4e3a\u4e3b\u8d77\u70b9\uff08\u5de6\uff09\u5230\u4e3b\u7ec8\u70b9\uff08\u53f3\uff09\u3002\u5782\u76f4\u4e8e\u4e3b\u8f74\u7684\u662f\u526f\u8f74\u3002\u65b9\u5411\u4ece\u526f\u8d77\u70b9\uff08\u4e0a\uff09\u5230\u526f\u7ec8\u70b9\uff08\u4e0b\uff09\u3002\u8fd9\u4e9b\u8f74\u7684\u65b9\u5411\u53ef\u4ee5\u6539\u53d8\u3002"),(0,l.kt)("h3",{id:"12-\u521b\u5efaflexbox\u5e03\u5c40"},"1.2 \u521b\u5efaFlexBox\u5e03\u5c40"),(0,l.kt)("p",null,"\u4f7f\u7528flex\u5e03\u5c40\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u521b\u5efa\u4e00\u4e2a\u83dc\u5355\uff0c\u83dc\u5355\u7684html\u548ccss\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",label:"HTML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<nav>\n  <ul class="site-nav">\n    <li><a href="/">Home</a></li>\n    <li><a href="/features">Features</a></li>\n    <li><a href="/pricing">Pricing</a></li>\n    <li><a href="/support">Support</a></li>\n    <li class="nav-right">\n      <a href="/about">About</a>\n    </li>\n  </ul>\n</nav>\n'))),(0,l.kt)(s.Z,{value:"css",label:"CSS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".site-nav {\n  display: flex;\n  padding: .5em;\n  background-color: #5f4b44;\n  list-style-type: none;\n  border-radius: .2em;\n}\n\n.site-nav > li {\n  margin-top: 0;\n}\n\n.site-nav > li > a {\n  display: block;\n  padding: .5em 1em;\n  background-color: #cc6b5a;\n  color: white;\n  text-decoration: none;\n}\n\n.site-nav > li + li {\n  margin-left: 1.5em;\n}\n\n.site-nav > .nav-right {\n  margin-left: auto;\n}\n")))),(0,l.kt)("p",null,"\u9700\u8981\u8fdb\u884c\u5f39\u6027\u5e03\u5c40\u6392\u5217\u7684\u5143\u7d20\u662fli\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u7ed9\u7236\u5143\u7d20ul\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"display: flex")," \uff0c\u6240\u6709\u7684\u5b57\u5143\u7d20li\u5c06\u4f1a\u9ed8\u8ba4\u4ece\u5de6\u5230\u53f3\u8fdb\u884c\u6392\u5217\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528margin-left\u6765\u7ed9\u6bcf\u4e2ali\u5143\u7d20\u8bbe\u7f6e\u95f4\u9694\u3002\u6700\u540e\u4e00\u4e2ali\u5143\u7d20\u4f7f\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"margin-left: auto")," \uff0c\u8fd9\u65f6\u5b83\u5c06\u81ea\u52a8\u4e0e\u6700\u53f3\u8fb9\u5bf9\u9f50\uff0c\u8fd9\u4e2a\u5c0f\u6280\u5de7\u5f88\u5b9e\u7528\u3002"),(0,l.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(606).Z,width:"1280",height:"76"}))),(0,l.kt)("h2",{id:"2-\u5f39\u6027\u5b50\u5143\u7d20\u7684\u5927\u5c0f"},"2. \u5f39\u6027\u5b50\u5143\u7d20\u7684\u5927\u5c0f"),(0,l.kt)("p",null,"flex\u5c5e\u6027\u63a7\u5236\u5f39\u6027\u5b50\u5143\u7d20\u5728\u4e3b\u8f74\u65b9\u5411\u4e0a\u7684\u5927\u5c0f\u3002\u5b83\u662f\u4e09\u4e2a\u4e0d\u540c\u5927\u5c0f\u5c5e\u6027\u7684\u7b80\u5199\uff1aflex-grow\u3001flex-shrink\u548cflex-basis\u3002"),(0,l.kt)("h3",{id:"21-flex-basis"},"2.1 flex-basis"),(0,l.kt)("p",null,"flex-basis\u5b9a\u4e49\u4e86\u5143\u7d20\u5927\u5c0f\u7684\u57fa\u51c6\u503c\uff0c\u5373\u4e00\u4e2a\u521d\u59cb\u7684\u201c\u4e3b\u5c3a\u5bf8\u201d\u3002flex-basis\u5c5e\u6027\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4efb\u610f\u7684width\u503c\uff0c\u5305\u62ecpx\u3001em\u3001\u767e\u5206\u6bd4\u3002\u5b83\u7684\u521d\u59cb\u503c\u662fauto\uff0c\u6b64\u65f6\u6d4f\u89c8\u5668\u4f1a\u68c0\u67e5\u5143\u7d20\u662f\u5426\u8bbe\u7f6e\u4e86width\u5c5e\u6027\u503c\u3002\u5982\u679c\u6709\uff0c\u5219\u4f7f\u7528width\u7684\u503c\u4f5c\u4e3aflex-basis\u7684\u503c\uff1b\u5982\u679c\u6ca1\u6709\uff0c\u5219\u7528\u5143\u7d20\u5185\u5bb9\u81ea\u8eab\u7684\u5927\u5c0f\u3002\u5982\u679cflex-basis\u7684\u503c\u4e0d\u662fauto, width\u5c5e\u6027\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(7898).Z,width:"1280",height:"197"})),(0,l.kt)("h3",{id:"22-flex-grow"},"2.2 flex-grow"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u5f39\u6027\u5b50\u5143\u7d20\u7684flex-basis\u503c\u8ba1\u7b97\u51fa\u6765\u540e\uff0c\u5b83\u4eec\uff08\u52a0\u4e0a\u5b50\u5143\u7d20\u4e4b\u95f4\u7684\u5916\u8fb9\u8ddd\uff09\u52a0\u8d77\u6765\u4f1a\u5360\u636e\u4e00\u5b9a\u7684\u5bbd\u5ea6\u3002\u52a0\u8d77\u6765\u7684\u5bbd\u5ea6\u4e0d\u4e00\u5b9a\u6b63\u597d\u586b\u6ee1\u5f39\u6027\u5bb9\u5668\u7684\u5bbd\u5ea6\uff0c\u53ef\u80fd\u4f1a\u6709\u7559\u767d\u3002"),(0,l.kt)("p",null,"\u591a\u51fa\u6765\u7684\u7559\u767d\uff08\u6216\u5269\u4f59\u5bbd\u5ea6\uff09\u4f1a\u6309\u7167flex-grow\uff08\u589e\u957f\u56e0\u5b50\uff09\u7684\u503c\u5206\u914d\u7ed9\u6bcf\u4e2a\u5f39\u6027\u5b50\u5143\u7d20\uff0cflex-grow\u7684\u503c\u4e3a\u975e\u8d1f\u6574\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(344).Z,width:"1280",height:"241"})),(0,l.kt)("h3",{id:"23-flex-shrink"},"2.3 flex-shrink"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u5b50\u5143\u7d20\u7684flex-shrink\u503c\u4ee3\u8868\u4e86\u5b83\u662f\u5426\u5e94\u8be5\u6536\u7f29\u4ee5\u9632\u6b62\u6ea2\u51fa\u3002flex-shrink\u5c5e\u6027\u4e0eflex-grow\u9075\u5faa\u76f8\u4f3c\u7684\u539f\u5219\u3002\u8ba1\u7b97\u51fa\u5f39\u6027\u5b50\u5143\u7d20\u7684\u521d\u59cb\u4e3b\u5c3a\u5bf8\u540e\uff0c\u5b83\u4eec\u7684\u7d2f\u52a0\u503c\u53ef\u80fd\u4f1a\u8d85\u51fa\u5f39\u6027\u5bb9\u5668\u7684\u53ef\u7528\u5bbd\u5ea6\u3002\u5982\u679c\u4e0d\u7528flex-shrink\uff0c\u5c31\u4f1a\u5bfc\u81f4\u6ea2\u51fa"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(7173).Z,width:"1280",height:"229"})),(0,l.kt)("h3",{id:"24-\u5982\u4f55\u4f7f\u7528"},"2.4 \u5982\u4f55\u4f7f\u7528"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528\u7b80\u5199\u5c5e\u6027flex\uff0c\u800c\u4e0d\u662f\u5206\u522b\u58f0\u660eflex-grow\u3001flex-shrink\u3001flex-basis\u3002\u4e0e\u5927\u90e8\u5206\u7b80\u5199\u5c5e\u6027\u4e0d\u4e00\u6837\uff0c\u5982\u679c\u5728flex\u4e2d\u5ffd\u7565\u67d0\u4e2a\u5b50\u5c5e\u6027\uff0c\u90a3\u4e48\u5b50\u5c5e\u6027\u7684\u503c\u5e76\u4e0d\u4f1a\u88ab\u7f6e\u4e3a\u521d\u59cb\u503c\u3002\u76f8\u53cd\uff0c\u5982\u679c\u67d0\u4e2a\u5b50\u5c5e\u6027\u88ab\u7701\u7565\uff0c\u90a3\u4e48flex\u7b80\u5199\u5c5e\u6027\u4f1a\u7ed9\u51fa\u6709\u7528\u7684\u9ed8\u8ba4\u503c\uff1aflex-grow\u4e3a1\u3001flex-shrink\u4e3a1\u3001flex-basis\u4e3a0%\u3002\u8fd9\u4e9b\u9ed8\u8ba4\u503c\u6b63\u662f\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6240\u9700\u8981\u7684\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(2692).Z,width:"1280",height:"769"})),(0,l.kt)("h2",{id:"3-\u5f39\u6027\u65b9\u5411"},"3. \u5f39\u6027\u65b9\u5411"),(0,l.kt)("p",null,"Flexbox\u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\u662f\u80fd\u591f\u5207\u6362\u4e3b\u526f\u8f74\u65b9\u5411\uff0c\u7528\u5f39\u6027\u5bb9\u5668\u7684flex-direction\u5c5e\u6027\u63a7\u5236\u3002\u5982\u524d\u9762\u7684\u4f8b\u5b50\u6240\u793a\uff0c\u5b83\u7684\u521d\u59cb\u503c\uff08row\uff09\u63a7\u5236\u5b50\u5143\u7d20\u6309\u4ece\u5de6\u5230\u53f3\u7684\u65b9\u5411\u6392\u5217\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(1302).Z,width:"1249",height:"714"})),(0,l.kt)("h3",{id:"31-\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528\u5782\u76f4\u6392\u5217"},"3.1 \u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528\u5782\u76f4\u6392\u5217"),(0,l.kt)("p",null,"\u5bf9\u4e8ediv\u8fd9\u79cd\u5757\u72b6\u5143\u7d20\u6765\u8bf4\uff0c\u672c\u8eab\u5c31\u4f1a\u5360\u636e\u4e00\u884c\uff0c\u8c8c\u4f3c\u6ca1\u6709\u5782\u76f4\u6392\u5217\u7684\u5fc5\u8981\u3002\u4f46\u662f\u5bf9\u4e8e\u4e00\u4e2a\u4f7f\u7528flex\u8fdb\u884c\u5de6\u53f3\u5e03\u5c40\u540e\uff0c\u5de6\u53f3\u533a\u57df\u91cc\u7684div\u5143\u7d20\u4e0a\u4e0b\u6392\u5217\u7684\u6700\u7ec8\u6548\u679c\u53ef\u80fd\u4f1a\u51fa\u4e4e\u610f\u6599\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u8981\u5b9e\u73b0\u5de6\u53f3\u6392\u5217\u3001\u5e76\u4e14\u53f3\u8fb9\u533a\u57df\u7684div\u5143\u7d20\u4f7f\u7528\u9ed8\u8ba4\u5f62\u5f0f\u5782\u76f4\u6392\u5217\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",label:"HTML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<main class="flex">\n  <div class="column-main tile">\n    <h1>Team collaboration done right</h1>\n    <p>Thousands of teams from all over the\n      world turn to <b>Ink</b> to communicate\n      and get things done.</p>\n    <h1>Communication around the globe</h1>\n    <p>Thousands of teams from all over the\n      world turn to <b>Ink</b> to communicate\n      and get things done.</p>\n    <h1>Instant access to your team\'s documents</h1>\n    <p>Thousands of teams from all over the\n      world turn to <b>Ink</b> to communicate\n      and get things done.</p>\n    <h1>Intuitive interface</h1>\n    <p>Thousands of teams from all over the\n      world turn to <b>Ink</b> to communicate\n      and get things done.</p>\n  </div>\n  <div class="column-sidebar">\n    <div class="tile">\n      <form class="login-form">\n        <h3>Login</h3>\n        <p>\n          <label for="username">Username</label>\n          <input id="username" type="text"\n            name="username"/>\n        </p>\n        <p>\n          <label for="password">Password</label>\n          <input id="password" type="password"\n            name="password"/>\n        </p>\n        <button type="submit">Login</button>\n      </form>\n    </div>\n    <div class="tile centered">\n      <small>Starting at</small>\n      <div class="cost">\n        <span class="cost-currency">$</span>\n        <span class="cost-dollars">20</span>\n        <span class="cost-cents">.00</span>\n      </div>\n      <a class="cta-button" href="/pricing">\n        Sign up\n      </a>\n    </div>\n  </div>\n</main>\n'))),(0,l.kt)(s.Z,{value:"css",label:"CSS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".tile {\n  padding: 1.5em;\n  background-color: #fff;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex > * + * {\n  margin-top: 0;\n  margin-left: 1.5em;\n}\n\n.column-main {\n  flex: 66.67%;\n}\n\n.column-sidebar {\n  flex: 33.33%;\n}\n")))),(0,l.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\u6240\u793a\u3002\u6309\u7167flex\u7684\u539f\u5219\uff0c\u5de6\u53f3\u533a\u57df\u7684\u9ad8\u5ea6\u5e94\u8be5\u662f\u76f8\u7b49\u7684\u3002\u5b9e\u9645\u4e0a\uff0c\u786e\u5b9e\u662f\u76f8\u7b49\u7684\uff0c\u53ea\u662f\u53f3\u8fb9\u533a\u57df\u91cc\u7684\u5185\u5bb9\u6ca1\u6709\u586b\u6ee1\u8fd9\u4e2a\u9ad8\u5ea6\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u5bf9\u53f3\u8fb9\u533a\u8fdb\u884cflex\u5782\u76f4\u5e03\u5c40\u3002"),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(2333).Z,width:"1280",height:"657"}))),(0,l.kt)("p",null,"\u5bf9\u4e0a\u4e66css\u6837\u5f0f\u4f5c\u5982\u4e0b\u4fee\u6539\uff0c\u5bf9\u53f3\u8fb9\u533a\u57df\u505aflex\u5782\u76f4\u5e03\u5c40\uff0c\u5e76\u8bbe\u7f6e\u6bcf\u4e2a\u5b57\u5143\u7d20\u7684flex-grow\u4e3a1\uff0c\u8fd9\u6837\u4e24\u4e2a\u5b50\u5143\u7d20\u4f1a\u5747\u5206\u6700\u5927\u9ad8\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".tile {\n  padding: 1.5em;\n  background-color: #fff;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex > * + * {\n  margin-top: 0;\n  margin-left: 1.5em;\n}\n\n.column-main {\n  flex: 2;\n}\n\n.column-sidebar {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.column-sidebar > .tile {\n  flex: 1;\n}\n")),(0,l.kt)("h2",{id:"4-flexbox\u7684\u5c5e\u6027"},"4. FlexBox\u7684\u5c5e\u6027"),(0,l.kt)("h3",{id:"41-flexbox\u7684\u5176\u4f59\u5c5e\u6027"},"4.1 FlexBox\u7684\u5176\u4f59\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"flex-wrap")),(0,l.kt)("p",null,"flex-wrap\u5c5e\u6027\u5141\u8bb8\u5f39\u6027\u5b50\u5143\u7d20\u6362\u5230\u65b0\u7684\u4e00\u884c\u6216\u591a\u884c\u663e\u793a\u3002\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u4e3anowrap\uff08\u521d\u59cb\u503c\uff09\u3001wrap\u6216\u8005wrap-reverse\u3002\u542f\u7528\u6362\u884c\u540e\uff0c\u5b50\u5143\u7d20\u4e0d\u518d\u6839\u636eflex-shrink\u503c\u6536\u7f29\uff0c\u4efb\u4f55\u8d85\u8fc7\u5f39\u6027\u5bb9\u5668\u7684\u5b50\u5143\u7d20\u90fd\u4f1a\u6362\u884c\u663e\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"justify-content")),(0,l.kt)("p",null,"\u5f53\u5b50\u5143\u7d20\u672a\u586b\u6ee1\u5bb9\u5668\u65f6\uff0cjustify-content\u5c5e\u6027\u63a7\u5236\u5b50\u5143\u7d20\u6cbf\u4e3b\u8f74\u65b9\u5411\u7684\u95f4\u8ddd\u3002\u5b83\u7684\u503c\u5305\u62ec\u51e0\u4e2a\u5173\u952e\u5b57\uff1aflex-start\u3001flex-end\u3001center\u3001space-between\u4ee5\u53caspace-around\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"align-item")),(0,l.kt)("p",null,"justify-content\u63a7\u5236\u5b50\u5143\u7d20\u5728\u4e3b\u8f74\u65b9\u5411\u7684\u5bf9\u9f50\u65b9\u5f0f\uff0calign-items\u5219\u63a7\u5236\u5b50\u5143\u7d20\u5728\u526f\u8f74\u65b9\u5411\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002align-items\u7684\u521d\u59cb\u503c\u4e3astretch\uff0c\u5728\u6c34\u5e73\u6392\u5217\u7684\u60c5\u51b5\u4e0b\u8ba9\u6240\u6709\u5b50\u5143\u7d20\u586b\u5145\u5bb9\u5668\u7684\u9ad8\u5ea6\uff0c\u5728\u5782\u76f4\u6392\u5217\u7684\u60c5\u51b5\u4e0b\u8ba9\u5b50\u5143\u7d20\u586b\u5145\u5bb9\u5668\u7684\u5bbd\u5ea6\uff0c\u56e0\u6b64\u5b83\u80fd\u5b9e\u73b0\u7b49\u9ad8\u5217\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"align-content")),(0,l.kt)("p",null,"\u5982\u679c\u5f00\u542f\u4e86\u6362\u884c\uff08\u7528flex-wrap\uff09, align-content\u5c5e\u6027\u5c31\u53ef\u4ee5\u63a7\u5236\u5f39\u6027\u5bb9\u5668\u5185\u6cbf\u526f\u8f74\u65b9\u5411\u6bcf\u884c\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002\u5b83\u652f\u6301\u7684\u503c\u6709flex-start\u3001flex-end\u3001center\u3001stretch\uff08\u521d\u59cb\u503c\uff09\u3001space-between\u4ee5\u53caspace-around\u3002"),(0,l.kt)("h3",{id:"42-\u5f39\u6027\u5b50\u5143\u7d20\u7684\u5c5e\u6027"},"4.2 \u5f39\u6027\u5b50\u5143\u7d20\u7684\u5c5e\u6027"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u5143\u7d20\u662f\u4f5c\u7528\u4e8e\u5b50\u5143\u7d20\u7684\uff0c\u5305\u62ecflex-grow\u3001flex-shrink\u3001flex-basis\u4ee5\u53ca\u5b83\u4eec\u7684\u7b80\u5199\u5c5e\u6027flex\u3001align-self\u548corder\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"align-self")),(0,l.kt)("p",null,"\u8be5\u5c5e\u6027\u63a7\u5236\u5f39\u6027\u5b50\u5143\u7d20\u6cbf\u7740\u5bb9\u5668\u526f\u8f74\u65b9\u5411\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002\u5b83\u8ddf\u5f39\u6027\u5bb9\u5668\u7684align-items\u5c5e\u6027\u6548\u679c\u76f8\u540c\uff0c\u4f46\u662f\u5b83\u80fd\u5355\u72ec\u7ed9\u5f39\u6027\u5b50\u5143\u7d20\u8bbe\u5b9a\u4e0d\u540c\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002auto\u4e3a\u521d\u59cb\u503c\uff0c\u4f1a\u4ee5\u5bb9\u5668\u7684align-items\u503c\u4e3a\u51c6\u3002\u5176\u4ed6\u503c\u4f1a\u8986\u76d6\u5bb9\u5668\u7684\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"order")),(0,l.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u5f39\u6027\u5b50\u5143\u7d20\u6309\u7167\u5728HTML\u6e90\u7801\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u6392\u5217\u3002\u5b83\u4eec\u6cbf\u7740\u4e3b\u8f74\u65b9\u5411\uff0c\u4ece\u4e3b\u8f74\u7684\u8d77\u70b9\u5f00\u59cb\u6392\u5217\u3002\u4f7f\u7528order\u5c5e\u6027\u80fd\u6539\u53d8\u5b50\u5143\u7d20\u6392\u5217\u7684\u987a\u5e8f\u3002\u8fd8\u53ef\u4ee5\u5c06\u5176\u6307\u5b9a\u4e3a\u4efb\u610f\u6b63\u8d1f\u6574\u6570\u3002\u5982\u679c\u591a\u4e2a\u5f39\u6027\u5b50\u5143\u7d20\u6709\u4e00\u6837\u7684\u503c\uff0c\u5b83\u4eec\u5c31\u4f1a\u6309\u7167\u6e90\u7801\u987a\u5e8f\u51fa\u73b0\u3002\u57fa\u672c\u4e0d\u4f1a\u4f7f\u7528order\uff01"),(0,l.kt)("h2",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,l.kt)("p",null,"FlexBox\u662fcss\u7684\u4e00\u5927\u8fdb\u6b65\uff0c\u4e5f\u662f\u975e\u5e38\u9002\u5408\u7528\u6765\u5e03\u5c40\u7684\u3002\u5173\u4e8eFlexBox\u7684\u5c5e\u6027\u56fe\u89e3\u603b\u7ed3\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u5ff5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u56fe\u89e3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flex-direction"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4e86\u4e3b\u8f74\u65b9\u5411\uff0c\u526f\u8f74\u5782\u76f4\u4e8e\u4e3b\u8f74"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(5300).Z,width:"422",height:"338"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flex-wrap"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4e86\u5f39\u6027\u5b50\u5143\u7d20\u662f\u5426\u4f1a\u5728\u5f39\u6027\u5bb9\u5668\u5185\u6298\u884c\u663e\u793a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(9072).Z,width:"448",height:"314"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flex-flow"),(0,l.kt)("td",{parentName:"tr",align:null},"flex-direction flex-wrap\u7684\u7b80\u5199"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"justify-content"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5b50\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(268).Z,width:"854",height:"656"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"align-items"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5b50\u5143\u7d20\u5728\u526f\u8f74\u4e0a\u7684\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(5880).Z,width:"1344",height:"722"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"align-content"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5f00\u542f\u4e86flex-wrap, align-content\u5c31\u4f1a\u63a7\u5236\u5f39\u6027\u5b50\u5143\u7d20\u5728\u526f\u8f74\u4e0a\u7684\u95f4\u8ddd\u3002\u5982\u679c\u5b50\u5143\u7d20\u6ca1\u6709\u6362\u884c\uff0c\u5c31\u4f1a\u5ffd\u7565align-content"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(5880).Z,width:"1344",height:"722"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"align-items"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5b50\u5143\u7d20\u5728\u526f\u8f74\u4e0a\u7684\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(5880).Z,width:"1344",height:"722"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flex-grow"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6574\u6570\uff0c\u6307\u5b9a\u589e\u957f\u56e0\u5b50\uff0c\u51b3\u5b9a\u5b50\u5143\u7d20\u5728\u4e3b\u8f74\u65b9\u5411\u6269\u5c55\u7684\u5927\u5c0f\uff0c\u586b\u5145\u672a\u4f7f\u7528\u7684\u7a7a\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(7296).Z,width:"668",height:"134"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flex-shrink"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6574\u6570\uff0c\u6307\u5b9a\u6536\u7f29\u56e0\u5b50\uff0c\u51b3\u5b9a\u5b50\u5143\u7d20\u5728\u4e3b\u8f74\u65b9\u5411\u6536\u7f29\u7684\u5927\u5c0f\uff0c\u9632\u6b62\u6ea2\u51fa\u3002\u5f00\u542f\u4e86flex-wrap\u5219\u4f1a\u5ffd\u7565\u8be5\u5c5e\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(5187).Z,width:"640",height:"150"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flex-basis"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b50\u5143\u7d20\u672a\u53d7flex-grow\u6216flex-shrink\u5f71\u54cd\u65f6\u7684\u521d\u59cb\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flex"),(0,l.kt)("td",{parentName:"tr",align:null},"flex-grow flex-shrink flex-basis\u7684\u7b80\u5199"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"align-self"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5b50\u5143\u7d20\u5728\u526f\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002\u5b83\u4f1a\u8986\u76d6\u5bb9\u5668\u4e0a\u7684align-items\u3002\u5982\u679c\u5b50\u5143\u7d20\u526f\u8f74\u65b9\u5411\u4e0a\u7684\u5916\u8fb9\u8ddd\u4e3aauto\uff0c\u5219\u4f1a\u5ffd\u7565\u8be5\u5c5e\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(4520).Z,width:"1052",height:"556"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6574\u6570\uff0c\u5c06\u5f39\u6027\u5b50\u5143\u7d20\u4ece\u5144\u5f1f\u8282\u70b9\u4e2d\u79fb\u52a8\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u8986\u76d6\u6e90\u7801\u987a\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:n(9165).Z,width:"708",height:"174"}))))))}g.isMDXComponent=!0},606:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-78eb3486aeab71039196b1872ee99b96.png"},268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/10-bb8d9b240538c9d4f46bed787d2e878e.png"},5880:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/11-a78e56da255f8d5877a1d0f16be3bf61.png"},7296:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/13-d06d645de9da8d3a8b6a2993d55212a0.png"},4520:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/14-5d5c8043a1397c9cb051e45cce5add64.png"},9165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/15-3a8d865306a768d3c18f585386ec6348.png"},5187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/16-46a07c35d93b996b5dfe9bdeed53c545.png"},7898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-c7d1b1fe825caca2990f64e04e157f7d.png"},344:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-fc5fc8d89e1d6322a35d01b02a69a7fd.png"},7173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-d33bde29c873dd83711e89178dd5caa3.png"},2692:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-20e8bec2ef1ffafbbdcee5e272b6073c.png"},1302:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-cf6306b53e1404a7bc900c76f9986bb8.png"},2333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/7-f1707e5c5c72bb8b1f2b4dfa87902a08.png"},5300:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8-f3655ea9244874b26950de52101ac88b.png"},9072:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/9-d913efb27aa2196420ed2b1fe6cb5fc7.png"}}]);