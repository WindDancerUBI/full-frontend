"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[713],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>b});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),c=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},d=function(n){var e=c(n.components);return a.createElement(o.Provider,{value:e},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),u=c(t),m=r,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(b,i(i({ref:e},d),{},{components:t})):a.createElement(b,i({ref:e},d))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[u]="string"==typeof n?n:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(7294),r=t(6010);const l={tabItem:"tabItem_Ymn6"};function i(n){let{children:e,hidden:t,className:i}=n;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:t},e)}},4866:(n,e,t)=>{t.d(e,{Z:()=>x});var a=t(7462),r=t(7294),l=t(6010),i=t(2466),s=t(6550),o=t(1980),c=t(7392),d=t(12);function u(n){return function(n){return r.Children.map(n,(n=>{if(!n||(0,r.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:r}}=n;return{value:e,label:t,attributes:a,default:r}}))}function p(n){const{values:e,children:t}=n;return(0,r.useMemo)((()=>{const n=e??u(t);return function(n){const e=(0,c.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function m(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function b(n){let{queryString:e=!1,groupId:t}=n;const a=(0,s.k6)(),l=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((n=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,n),a.replace({...a.location,search:e.toString()})}),[l,a])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,l=p(n),[i,s]=(0,r.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[o,c]=b({queryString:t,groupId:a}),[u,f]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,l]=(0,d.Nk)(t);return[a,(0,r.useCallback)((n=>{t&&l.set(n)}),[t,l])]}({groupId:a}),v=(()=>{const n=o??u;return m({value:n,tabValues:l})?n:null})();(0,r.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((n=>{if(!m({value:n,tabValues:l}))throw new Error(`Can't select invalid tab value=${n}`);s(n),c(n),f(n)}),[c,f,l]),tabValues:l}}var v=t(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(n){let{className:e,block:t,selectedValue:s,selectValue:o,tabValues:c}=n;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=n=>{const e=n.currentTarget,t=d.indexOf(e),a=c[t].value;a!==s&&(u(e),o(a))},m=n=>{let e=null;switch(n.key){case"Enter":p(n);break;case"ArrowRight":{const t=d.indexOf(n.currentTarget)+1;e=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(n.currentTarget)-1;e=d[t]??d[d.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},e)},c.map((n=>{let{value:e,label:t,attributes:i}=n;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:n=>d.push(n),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===e})}),t??e)})))}function g(n){let{lazy:e,children:t,selectedValue:a}=n;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===a));return n?(0,r.cloneElement)(n,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==a}))))}function y(n){const e=f(n);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(k,(0,a.Z)({},n,e)),r.createElement(g,(0,a.Z)({},n,e)))}function x(n){const e=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(e)},n))}},1007:(n,e,t)=>{t.d(e,{p:()=>s});var a=t(7294),r=t(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(n){let{children:e,minHeight:t,url:i="http://localhost:3000",style:s,bodyStyle:o}=n;return a.createElement("div",{className:l.browserWindow,style:{...s,minHeight:t}},a.createElement("div",{className:l.browserWindowHeader},a.createElement("div",{className:l.buttons},a.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(l.browserWindowAddressBar,"text--truncate"),onClick:()=>{window.open(i,"_blank")}},i),a.createElement("div",{className:l.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar})))),a.createElement("div",{className:l.browserWindowBody,style:o},e))}function s(n){let e,{url:t}=n;return e=t.includes("http")||t.includes("https")?t:"https://winddancer.gitee.io"+t,a.createElement("div",null,a.createElement(i,{url:e,bodyStyle:{padding:0}},a.createElement("iframe",{src:e,title:e,style:{width:"100%",height:500}})))}},7237:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=t(1007),i=t(4866),s=t(5162);const o={sidebar_position:12,tags:["CSS"]},c="\u5341\u4e8c\u3001\u53d8\u6362",d={unversionedId:"tutorial/css/transform/index",id:"tutorial/css/transform/index",title:"\u5341\u4e8c\u3001\u53d8\u6362",description:"transform\u5c5e\u6027\u53ef\u4ee5\u7528\u6765\u6539\u53d8\u9875\u9762\u5143\u7d20\u7684\u5f62\u72b6\u548c\u4f4d\u7f6e\uff0c\u5176\u4e2d\u5305\u62ec\u4e8c\u7ef4\u6216\u8005\u4e09\u7ef4\u7684\u65cb\u8f6c\u3001\u7f29\u653e\u548c\u503e\u659c\u3002\u53d8\u6362\u901a\u5e38\u7ed3\u5408\u8fc7\u6e21\u6216\u52a8\u753b\u4e00\u8d77\u4f7f\u7528\u3002",source:"@site/docs/tutorial/css/12-transform/index.mdx",sourceDirName:"tutorial/css/12-transform",slug:"/tutorial/css/transform/",permalink:"/full-frontend/docs/tutorial/css/transform/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/css/12-transform/index.mdx",tags:[{label:"CSS",permalink:"/full-frontend/docs/tags/css"}],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,tags:["CSS"]},sidebar:"tutorialSidebar",previous:{title:"\u5341\u4e00\u3001\u8fc7\u6e21",permalink:"/full-frontend/docs/tutorial/css/transition/"},next:{title:"\u5341\u4e09\uff1a\u52a8\u753b",permalink:"/full-frontend/docs/tutorial/css/animation/"}},u={},p=[{value:"1. \u65cb\u8f6c\u3001\u5e73\u79fb\u3001\u503e\u659c\u548c\u7f29\u653e",id:"1-\u65cb\u8f6c\u5e73\u79fb\u503e\u659c\u548c\u7f29\u653e",level:2},{value:"1.1 \u53d8\u6362\u57fa\u70b9",id:"11-\u53d8\u6362\u57fa\u70b9",level:3},{value:"1.2 \u591a\u91cd\u53d8\u6362",id:"12-\u591a\u91cd\u53d8\u6362",level:3},{value:"2. \u5728\u8fd0\u52a8\u4e2d\u53d8\u6362",id:"2-\u5728\u8fd0\u52a8\u4e2d\u53d8\u6362",level:2},{value:"3. \u52a8\u753b\u6027\u80fd",id:"3-\u52a8\u753b\u6027\u80fd",level:2},{value:"3.1 \u5e03\u5c40",id:"31-\u5e03\u5c40",level:3},{value:"3.2 \u7ed8\u5236",id:"32-\u7ed8\u5236",level:3},{value:"3.3 \u5408\u6210",id:"33-\u5408\u6210",level:3},{value:"4. \u4e09\u7ef4\u53d8\u6362",id:"4-\u4e09\u7ef4\u53d8\u6362",level:2},{value:"4.1 \u63a7\u5236\u900f\u89c6\u8ddd\u79bb",id:"41-\u63a7\u5236\u900f\u89c6\u8ddd\u79bb",level:3},{value:"4.2 \u7edf\u4e00\u7684\u900f\u89c6\u8ddd\u79bb",id:"42-\u7edf\u4e00\u7684\u900f\u89c6\u8ddd\u79bb",level:3},{value:"4.3 perspective-origin",id:"43-perspective-origin",level:3},{value:"4.4 backface-visibility",id:"44-backface-visibility",level:3}],m={toc:p},b="wrapper";function f(n){let{components:e,...t}=n;return(0,r.kt)(b,(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5341\u4e8c\u53d8\u6362"},"\u5341\u4e8c\u3001\u53d8\u6362"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transform"),"\u5c5e\u6027\u53ef\u4ee5\u7528\u6765\u6539\u53d8\u9875\u9762\u5143\u7d20\u7684\u5f62\u72b6\u548c\u4f4d\u7f6e\uff0c\u5176\u4e2d\u5305\u62ec\u4e8c\u7ef4\u6216\u8005\u4e09\u7ef4\u7684\u65cb\u8f6c\u3001\u7f29\u653e\u548c\u503e\u659c\u3002\u53d8\u6362\u901a\u5e38\u7ed3\u5408\u8fc7\u6e21\u6216\u52a8\u753b\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"1-\u65cb\u8f6c\u5e73\u79fb\u503e\u659c\u548c\u7f29\u653e"},"1. \u65cb\u8f6c\u3001\u5e73\u79fb\u3001\u503e\u659c\u548c\u7f29\u653e"),(0,r.kt)("p",null,"\u57fa\u672c\u7684\u53d8\u6362\u6709\u5982\u4e0b\u56db\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u65cb\u8f6c\uff08Rotate\uff09"),"\u2014\u2014\u5143\u7d20\u7ed5\u7740\u4e00\u4e2a\u8f74\u5fc3\u8f6c\u52a8\u4e00\u5b9a\u89d2\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5e73\u79fb\uff08Translate\uff09"),"\u2014\u2014\u5143\u7d20\u5411\u4e0a\u3001\u4e0b\u3001\u5de6\u3001\u53f3\u5404\u4e2a\u65b9\u5411\u79fb\u52a8\uff08\u6709\u70b9\u7c7b\u4f3c\u4e8e\u76f8\u5bf9\u5b9a\u4f4d\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7f29\u653e\uff08Scale\uff09"),"\u2014\u2014\u7f29\u5c0f\u6216\u653e\u5927\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u503e\u659c\uff08Skew\uff09"),"\u2014\u2014\u4f7f\u5143\u7d20\u53d8\u5f62\uff0c\u9876\u8fb9\u6ed1\u5411\u4e00\u4e2a\u65b9\u5411\uff0c\u5e95\u8fb9\u6ed1\u5411\u76f8\u53cd\u7684\u65b9\u5411\u3002")),(0,r.kt)("p",null,"\u8fd9\u56db\u79cd\u57fa\u672c\u7684\u53d8\u6362\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/12-transform/transform-basic",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u6bcf\u79cd\u53d8\u6362\u90fd\u4f7f\u7528\u76f8\u5e94\u7684\u51fd\u6570\u4f5c\u4e3atransform\u5c5e\u6027\u7684\u503c\uff0c\u76f8\u5173\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div class="card card-rotate">\n    <h4>\u65cb\u8f6c</h4>\n    <p>\u65cb\u8f6c\u4e8615\u5ea6</p>\n  </div>\n  <div class="card card-translate">\n    <h4>\u5e73\u79fb</h4>\n    <p>\u5411\u5de6\u5411\u4e0b\u5404\u5e73\u79fb\u4e8640px</p>\n  </div>\n  <div class="card card-skew">\n    <h4>\u503e\u659c</h4>\n    <p>\u5411\u5de6\u503e\u659c\u4e8620\u5ea6</p>\n  </div>\n  <div class="card card-scale">\n    <h4>\u7f29\u653e</h4>\n    <p>\u653e\u5927\u4e861.2\u500d</p>\n  </div>\n</body>\n'))),(0,r.kt)(s.Z,{value:"css",label:"CSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"html {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: hsl(210, 80%, 20%);\n  font-family: Helvetica, Arial, sans-serif;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.card {\n  padding: 0.5em;\n  margin: 2em auto;\n  background-color: white;\n  width: 200px;\n  max-width: 80%;\n}\n\n.card-rotate {\n  transform: rotate(15deg);\n}\n.card-translate {\n  transform: translate(40px, 40px);\n}\n.card-skew {\n  transform: skew(20deg);\n}\n.card-scale {\n  transform: scale(1.2);\n}\n")))),(0,r.kt)("p",null,"\u4f7f\u7528\u53d8\u6362\u7684\u65f6\u5019\u8981\u6ce8\u610f\u4e00\u4ef6\u4e8b\u60c5\uff0c\u867d\u7136\u5143\u7d20\u53ef\u80fd\u4f1a\u88ab\u79fb\u52a8\u5230\u9875\u9762\u4e0a\u7684\u65b0\u4f4d\u7f6e\uff0c\u4f46\u5b83\u4e0d\u4f1a\u8131\u79bb\u6587\u6863\u6d41\u3002\u4f60\u53ef\u4ee5\u5728\u5c4f\u5e55\u8303\u56f4\u5185\u4ee5\u5404\u79cd\u65b9\u5f0f\u5e73\u79fb\u5143\u7d20\uff0c\u5176\u521d\u59cb\u4f4d\u7f6e\u4e0d\u4f1a\u88ab\u5176\u4ed6\u5143\u7d20\u5360\u7528\u3002\u5f53\u65cb\u8f6c\u67d0\u5143\u7d20\u7684\u65f6\u5019\uff0c\u5b83\u7684\u4e00\u89d2\u53ef\u80fd\u4f1a\u79fb\u51fa\u5c4f\u5e55\u8fb9\u7f18\uff0c\u540c\u6837\u4e5f\u53ef\u80fd\u4f1a\u906e\u4f4f\u65c1\u8fb9\u5176\u4ed6\u5143\u7d20\u7684\u90e8\u5206\u5185\u5bb9\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u53d8\u6362\u4e0d\u80fd\u4f5c\u7528\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"<span>"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"<a>"),"\u8fd9\u6837\u7684\u884c\u5185\u5143\u7d20\u4e0a\u3002\u82e5\u786e\u5b9e\u8981\u53d8\u6362\u6b64\u7c7b\u5143\u7d20\uff0c\u8981\u4e48\u6539\u53d8\u5143\u7d20\u7684display\u5c5e\u6027\uff0c\u66ff\u6362\u6389inline\uff08\u6bd4\u5982inline-block\uff09\uff0c\u8981\u4e48\u628a\u5143\u7d20\u6539\u4e3a\u5f39\u6027\u5b50\u5143\u7d20\u6216\u8005\u7f51\u683c\u9879\u76ee\uff08\u4e3a\u7236\u5143\u7d20\u5e94\u7528display: flex\u6216\u8005display: grid\uff09\u3002")),(0,r.kt)("h3",{id:"11-\u53d8\u6362\u57fa\u70b9"},"1.1 \u53d8\u6362\u57fa\u70b9"),(0,r.kt)("p",null,"\u53d8\u6362\u662f\u56f4\u7ed5\u57fa\u70b9\uff08point of origin\uff09\u53d1\u751f\u7684\u3002\u57fa\u70b9\u662f\u65cb\u8f6c\u7684\u8f74\u5fc3\uff0c\u4e5f\u662f\u7f29\u653e\u6216\u8005\u503e\u659c\u5f00\u59cb\u7684\u5730\u65b9\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u57fa\u70b9\u5c31\u662f\u5143\u7d20\u7684\u4e2d\u5fc3\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7transform-origin\u5c5e\u6027\u6539\u53d8\u57fa\u70b9\u4f4d\u7f6e\u3002\u54cd\u5e94\u7684\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff0c\u57fa\u70b9\u53ef\u4ee5\u6307\u5b9a\u4e3a\u767e\u5206\u6bd4\u3001px\u3001em\u3001\u5176\u4ed6\u5355\u4f4d\u7684\u957f\u5ea6\u503c\u6216\u8005\u662f\u5173\u952e\u5b57\u3002\u6bd4\u5982\u4e0b\u9762\u4e24\u79cd\u5199\u6cd5\u662f\u7b49\u4ef7\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"transform-origin: right center;\ntransform-origin: 100% 50%;\n")),(0,r.kt)("h3",{id:"12-\u591a\u91cd\u53d8\u6362"},"1.2 \u591a\u91cd\u53d8\u6362"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5bf9transform\u5c5e\u6027\u6307\u5b9a\u591a\u4e2a\u503c\uff0c\u7528\u7a7a\u683c\u9694\u5f00\u3002",(0,r.kt)("strong",{parentName:"p"},"\u53d8\u6362\u7684\u6bcf\u4e2a\u503c\u4ece\u53f3\u5411\u5de6\u6309\u987a\u5e8f\u6267\u884c"),"\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u5143\u7d20\u4f1a\u5148\u5411\u53f3\u5e73\u79fb15px\uff0c\u7136\u540e\u987a\u65f6\u9488\u65cb\u8f6c15\u5ea6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"transform: rotate(15deg) translate(20px, 0);\n")),(0,r.kt)("h2",{id:"2-\u5728\u8fd0\u52a8\u4e2d\u53d8\u6362"},"2. \u5728\u8fd0\u52a8\u4e2d\u53d8\u6362"),(0,r.kt)("p",null,"\u53d8\u6362\u672c\u8eab\u4e0d\u5177\u5907\u592a\u591a\u5b9e\u7528\u6027\u3002\u5f53\u548c\u52a8\u4f5c\u7ed3\u5408\u8d77\u6765\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u53d8\u6362\u5c31\u4f1a\u6709\u7528\u591a\u4e86\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u5bfc\u822a\u680f\u5c31\u662f\u4f7f\u7528\u4e86\u8fc7\u6e21\u548c\u53d8\u6362\u76f8\u7ed3\u5408\u3002"),(0,r.kt)(l.p,{url:"/css-tutorial/12-transform/transform-transition",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002\u4e3b\u8981\u5b9e\u73b0\u4e86\u8fd9\u4e48\u51e0\u4e2a\u529f\u80fd\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9f20\u6807\u5212\u8fc7\u94fe\u63a5\u7684\u65f6\u5019\uff0c\u653e\u5927\u56fe\u6807\u5c3a\u5bf8\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9f20\u6807\u5212\u8fc7\u94fe\u63a5\u7684\u65f6\u5019\uff0c\u7ed9\u6574\u4e2a\u5bfc\u822a\u83dc\u5355\u6dfb\u52a0\u80cc\u666f\u989c\u8272\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9690\u85cf\u94fe\u63a5\u6807\u7b7e\uff0c\u5f53\u7528\u6237\u4f7f\u7528\u9f20\u6807\u60ac\u505c\u5728\u83dc\u5355\u4e0a\u65f6\uff0c\u8ba9\u5b83\u4eec\u901a\u8fc7\u6de1\u5165\u8fc7\u6e21\u7279\u6548\u5168\u90e8\u663e\u793a\u51fa\u6765\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5e73\u79fb\u4e3a\u94fe\u63a5\u6807\u7b7e\u6dfb\u52a0\u201c\u98de\u5165\u201d\u6548\u679c\uff0c\u4e0e\u6de1\u5165\u4e00\u8d77\u4f7f\u7528\u3002")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link\n      href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Raleway"\n      rel="stylesheet"\n    />\n  </head>\n  <body>\n    <header>\n      <h1 class="page-header">\u5728\u8fd0\u52a8\u4e2d\u53d8\u6362</h1>\n    </header>\n    <nav class="main-nav">\n      <ul class="nav-links">\n        <li>\n          <a href="#">\n            <img src="images/home.svg" class="nav-links__icon" />\n            <span class="nav-links__label">Home</span>\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <img src="images/calendar.svg" class="nav-links__icon" />\n            <span class="nav-links__label">Events</span>\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <img src="images/members.svg" class="nav-links__icon" />\n            <span class="nav-links__label">Members</span>\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <img src="images/star.svg" class="nav-links__icon" />\n            <span class="nav-links__label">About</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </body>\n</html>\n'))),(0,r.kt)(s.Z,{value:"css",label:"CSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"html {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: hsl(200, 80%, 30%);\n  background-image: radial-gradient(\n    hsl(200, 80%, 30%),\n    hsl(210, 80%, 20%)\n  );\n  color: white;\n  font-family: Raleway, Helvetica, Arial, sans-serif;\n  line-height: 1.4;\n  margin: 0;\n  min-height: 100vh;\n}\n\nh1,\nh2,\nh3 {\n  font-family: Alfa Slab One, serif;\n  font-weight: 400;\n}\n\nmain {\n  display: block;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.page-header {\n  padding: 2rem 2rem 3rem;\n}\n\n.main-nav {\n  position: fixed;\n  left: 0;\n  top: 8.25rem;\n  z-index: 10;\n  background-color: transparent;\n  transition: background-color 0.5s linear;\n  border-top-right-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n}\n\n.main-nav:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.nav-links {\n  list-style: none;\n  display: block;\n  padding: 1em;\n  margin-bottom: 0;\n}\n.nav-links > li + li {\n  margin-left: 0.8em;\n}\n.nav-links > li > a {\n  display: block;\n  padding: 0.8em 0;\n  color: white;\n  font-size: 0.8rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.nav-links__icon {\n  height: 1.5em;\n  width: 1.5em;\n  vertical-align: -0.2em;\n}\n.nav-links > li > a:hover {\n  color: hsl(40, 100%, 70%);\n}\n.nav-links > li + li {\n  margin-left: 0;\n}\n\n.nav-links__label {\n  display: inline-block;\n  margin-left: 1em;\n  padding-right: 1em;\n  opacity: 0;\n  transform: translate(-1em);\n  transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.3),\n    opacity 0.4s linear;\n}\n.nav-links:hover .nav-links__label,\n.nav-links a:focus > .nav-links__label {\n  opacity: 1;\n  transform: translate(0);\n}\n.nav-links > li:nth-child(2) .nav-links__label {\n  transition-delay: 0.1s;\n}\n.nav-links > li:nth-child(3) .nav-links__label {\n  transition-delay: 0.2s;\n}\n.nav-links > li:nth-child(4) .nav-links__label {\n  transition-delay: 0.3s;\n}\n.nav-links > li:nth-child(5) .nav-links__label {\n  transition-delay: 0.4s;\n}\n\n.nav-links__icon {\n  transition: transform 0.2s ease-out;\n}\n\n.nav-links a:hover > .nav-links__icon,\n.nav-links a:focus > .nav-links__icon {\n  transform: scale(1.3);\n}\n")))),(0,r.kt)("p",null,"\u8fc7\u6e21\u548c\u53d8\u6362\u7ed3\u5408\u4f7f\u7528\u7684\u6838\u5fc3\uff1a\u5bf9\u4e8e\u5e38\u89c4\u72b6\u6001\u4e0b\u7684\u5143\u7d20\u548c\u60ac\u6d6e\u3001\u70b9\u51fb\u72b6\u6001\u4e0b\u7684\u5143\u7d20\u5206\u522b\u8bbe\u7f6e\u5404\u81ea\u7684transform\u53d8\u6362\uff0c\u7136\u540e\u5bf9transform\u5c5e\u6027\u8bbe\u7f6e\u8fc7\u6e21\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6574\u4e2a\u8fc7\u7a0b\uff0c\u4e3a\u4ec0\u4e48\u8981\u7ed9\u5143\u7d20\u8bbe\u7f6etransform\u53d8\u6362\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u8bbe\u7f6e\u5c5e\u6027\uff08\u6bd4\u5982heigt\u3001width\uff09\uff1f"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u53d8\u6362\u4f3c\u4e4e\u770b\u4e0a\u53bb\u5f88\u6ca1\u5fc5\u8981\uff0c\u4f46\u5374\u80fd\u663e\u8457\u63d0\u9ad8\u6d4f\u89c8\u5668\u6e32\u67d3\u6027\u80fd\u3002"),(0,r.kt)("h2",{id:"3-\u52a8\u753b\u6027\u80fd"},"3. \u52a8\u753b\u6027\u80fd"),(0,r.kt)("p",null,"\u53d8\u6362\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u6027\u80fd\u8981\u597d\u5f97\u591a\u3002\u5982\u679c\u6211\u4eec\u8981\u5bf9\u5143\u7d20\u7684\u5b9a\u4f4d\u4f7f\u7528\u52a8\u753b\uff08\u6bd4\u5982\u4e3aleft\u5c5e\u6027\u6dfb\u52a0\u8fc7\u6e21\u6548\u679c\uff09\uff0c\u53ef\u4ee5\u660e\u663e\u611f\u53d7\u5230\u6027\u80fd\u5f88\u5dee\u3002\u5bf9\u590d\u6742\u5143\u7d20\u4f7f\u7528\u52a8\u753b\u6216\u8005\u5728\u9875\u9762\u5185\u4e00\u6b21\u6027\u5bf9\u591a\u4e2a\u5143\u7d20\u4f7f\u7528\u52a8\u753b\uff0c\u95ee\u9898\u5c24\u5176\u660e\u663e\u3002"),(0,r.kt)("p",null,"\u6e32\u67d3\u53ef\u4ee5\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a\u5e03\u5c40\u3001\u7ed8\u5236\u548c\u5408\u6210\u3002"),(0,r.kt)("h3",{id:"31-\u5e03\u5c40"},"3.1 \u5e03\u5c40"),(0,r.kt)("p",null,"\u5728\u7b2c\u4e00\u4e2a\u9636\u6bb5\u5e03\u5c40\u4e2d\uff0c\u6d4f\u89c8\u5668\u9700\u8981\u8ba1\u7b97\u6bcf\u4e2a\u5143\u7d20\u5c06\u5728\u5c4f\u5e55\u4e0a\u5360\u591a\u5927\u7a7a\u95f4\u3002\u56e0\u4e3a\u6587\u6863\u6d41\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u6240\u4ee5\u4e00\u4e2a\u5143\u7d20\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u53ef\u4ee5\u5f71\u54cd\u9875\u9762\u4e0a\u65e0\u6570\u5176\u4ed6\u5143\u7d20\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4efb\u4f55\u65f6\u5019\u6539\u53d8\u4e00\u4e2a\u5143\u7d20\u7684\u5bbd\u5ea6\u6216\u9ad8\u5ea6\uff0c\u6216\u8005\u8c03\u6574\u4f4d\u7f6e\u5c5e\u6027\uff08\u6bd4\u5982top\u6216\u8005left\uff09\uff0c\u5143\u7d20\u7684\u5e03\u5c40\u90fd\u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002\u5982\u679c\u4f7f\u7528JavaScript\u5728DOM\u4e2d\u63d2\u5165\u6216\u8005\u79fb\u9664\u5143\u7d20\uff0c\u4e5f\u4f1a\u91cd\u65b0\u8ba1\u7b97\u5e03\u5c40\u3002\u4e00\u65e6\u5e03\u5c40\u53d1\u751f\u6539\u53d8\uff0c\u6d4f\u89c8\u5668\u5c31\u5fc5\u987b",(0,r.kt)("strong",{parentName:"p"},"\u91cd\u6392\uff08reflow\uff09"),"\u9875\u9762\uff0c\u91cd\u65b0\u8ba1\u7b97\u6240\u6709\u5176\u4ed6\u88ab\u79fb\u52a8\u6216\u8005\u7f29\u653e\u7684\u5143\u7d20\u7684\u5e03\u5c40\u3002"),(0,r.kt)("h3",{id:"32-\u7ed8\u5236"},"3.2 \u7ed8\u5236"),(0,r.kt)("p",null,"\u5e03\u5c40\u4e4b\u540e\u662f\u7ed8\u5236\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u662f\u586b\u5145\u50cf\u7d20\uff1a\u63cf\u7ed8\u6587\u672c\uff0c\u7740\u8272\u56fe\u7247\u3001\u8fb9\u6846\u548c\u9634\u5f71\u3002\u8fd9\u4e0d\u4f1a\u771f\u6b63\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\uff0c\u800c\u662f\u5728\u5185\u5b58\u4e2d\u7ed8\u5236\u3002\u9875\u9762\u5404\u90e8\u5206\u751f\u6210\u4e86\u5f88\u591a\u7684\u56fe\u5c42\uff08layers\uff09\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6539\u53d8\u67d0\u4e2a\u5143\u7d20\u7684\u80cc\u666f\u989c\u8272\uff0c\u5c31\u5fc5\u987b\u91cd\u65b0\u7ed8\u5236\u5b83\u3002\u4f46\u56e0\u4e3a\u66f4\u6539\u80cc\u666f\u989c\u8272\u4e0d\u4f1a\u5f71\u54cd\u5230\u9875\u9762\u4e0a\u4efb\u4f55\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\uff0c\u6240\u4ee5\u8fd9\u79cd\u53d8\u5316\u4e0d\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u5e03\u5c40\u3002\u6539\u53d8\u80cc\u666f\u989c\u8272\u6bd4\u6539\u53d8\u5143\u7d20\u5927\u5c0f\u9700\u8981\u7684\u8ba1\u7b97\u64cd\u4f5c\u8981\u5c11\u3002"),(0,r.kt)("p",null,"\u67d0\u4e9b\u6761\u4ef6\u4e0b\uff0c\u9875\u9762\u5143\u7d20\u4f1a\u88ab\u63d0\u53d6\u5230\u81ea\u5df1\u7684\u56fe\u5c42\u3002\u8fd9\u65f6\u5019\uff0c\u5b83\u4f1a\u4ece\u9875\u9762\u7684\u5176\u4ed6\u56fe\u5c42\u4e2d\u72ec\u7acb\u51fa\u6765\u5355\u72ec\u7ed8\u5236\u3002\u6d4f\u89c8\u5668\u628a\u8fd9\u4e2a\u56fe\u5c42\u53d1\u9001\u5230\u8ba1\u7b97\u673a\u7684\u56fe\u5f62\u5904\u7406\u5668\uff08graphics processing unit, GPU\uff09\u8fdb\u884c\u7ed8\u5236\uff0c\u800c\u4e0d\u662f\u50cf\u4e3b\u56fe\u5c42\u90a3\u6837\u4f7f\u7528\u4e3bCPU\u7ed8\u5236\u3002\u8fd9\u6837\u5b89\u6392\u662f\u6709\u597d\u5904\u7684\uff0c\u56e0\u4e3aGPU\u7ecf\u8fc7\u4e86\u5145\u5206\u7684\u4f18\u5316\uff0c\u6bd4\u8f83\u9002\u5408\u505a\u8fd9\u7c7b\u8ba1\u7b97\u3002"),(0,r.kt)("h3",{id:"33-\u5408\u6210"},"3.3 \u5408\u6210"),(0,r.kt)("p",null,"\u5728\u5408\u6210\uff08composite\uff09\u9636\u6bb5\uff0c\u6d4f\u89c8\u5668\u6536\u96c6\u6240\u6709\u7ed8\u5236\u5b8c\u6210\u7684\u56fe\u5c42\uff0c\u5e76\u628a\u5b83\u4eec\u63d0\u53d6\u4e3a\u6700\u7ec8\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\u7684\u56fe\u50cf\u3002\u5408\u6210\u8fc7\u7a0b\u9700\u8981\u6309\u7167\u7279\u5b9a\u987a\u5e8f\u8fdb\u884c\uff0c\u4ee5\u786e\u4fdd\u56fe\u5c42\u51fa\u73b0\u91cd\u53e0\u65f6\uff0c\u6b63\u786e\u7684\u56fe\u5c42\u663e\u793a\u5728\u5176\u4ed6\u56fe\u5c42\u4e4b\u4e0a\u3002"),(0,r.kt)("p",null,"opacity\u548ctransform\u8fd9\u4e24\u4e2a\u5c5e\u6027\u5982\u679c\u53d1\u751f\u6539\u53d8\uff0c\u9700\u8981\u7684\u6e32\u67d3\u65f6\u95f4\u5c31\u4f1a\u975e\u5e38\u5c11\u3002\u5f53\u6211\u4eec\u4fee\u6539\u5143\u7d20\u7684\u8fd9\u4e24\u4e2a\u5c5e\u6027\u4e4b\u4e00\u65f6\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u628a\u5143\u7d20\u63d0\u5347\u5230\u5176\u81ea\u5df1\u7684\u7ed8\u5236\u56fe\u5c42\u5e76\u4f7f\u7528GPU\u52a0\u901f\u3002\u56e0\u4e3a\u5143\u7d20\u5b58\u5728\u4e8e\u81ea\u5df1\u7684\u56fe\u5c42\uff0c\u6240\u4ee5\u6574\u4e2a\u56fe\u50cf\u53d8\u5316\u8fc7\u7a0b\u4e2d\u4e3b\u56fe\u5c42\u5c06\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u4e5f\u65e0\u987b\u91cd\u590d\u7684\u91cd\u7ed8\u3002"),(0,r.kt)("h2",{id:"4-\u4e09\u7ef4\u53d8\u6362"},"4. \u4e09\u7ef4\u53d8\u6362"),(0,r.kt)("p",null,"\u7f51\u9875\u672c\u8eab\u5c31\u662f2D\u7684\u3002\u4f46\u6211\u4eec\u4e0d\u5e94\u8be5\u88ab\u5c40\u9650\u5728\u8fd9\u91cc\uff0c\u53d8\u6362\u53ef\u4ee5\u5728\u4e09\u4e2a\u7ef4\u5ea6\u4e0a\u5b9e\u73b0\uff1aX\u8f74\u3001Y\u8f74\u548cZ\u8f74\u3002"),(0,r.kt)("h3",{id:"41-\u63a7\u5236\u900f\u89c6\u8ddd\u79bb"},"4.1 \u63a7\u5236\u900f\u89c6\u8ddd\u79bb"),(0,r.kt)("p",null,"\u53d8\u6362\u540e\u7684\u5143\u7d20\u4e00\u8d77\u6784\u6210\u4e86\u4e00\u4e2a3D\u573a\u666f\u3002\u63a5\u7740\u6d4f\u89c8\u5668\u4f1a\u8ba1\u7b97\u8fd9\u4e2a3D\u573a\u666f\u76842D\u56fe\u50cf\uff0c\u5e76\u6e32\u67d3\u5230\u5c4f\u5e55\u4e0a\u3002\u4e0b\u9762\u662f\u4f7f\u7528\u4e09\u7ef4\u53d8\u6362\u5728x\u8f74\u65cb\u8f6c30\u5ea6\u7684\u6548\u679c\u3002"),(0,r.kt)(l.p,{url:"/css-tutorial/12-transform/3Dtransform-basic",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n  <head>\n    <style type="text/css">\n      .row {\n        display: flex;\n        justify-content: center;\n      }\n\n      .box {\n        box-sizing: border-box;\n        width: 150px;\n        margin: 0 2em;\n        padding: 60px 0;\n        text-align: center;\n        background-color: hsl(150, 50%, 40%);\n      }\n\n      .no-perspective {\n        transform: rotateX(30deg);\n      }\n      .perspective {\n        transform: perspective(200px) rotateX(30deg);\n      }\n      .short-perspective {\n        transform: perspective(100px) rotateX(30deg);\n      }\n    </style>\n  </head>\n  <body>\n    <div class="row">\n      <div class="box no-perspective">One</div>\n      <div class="box perspective">Two</div>\n      <div class="box short-perspective">Three</div>\n    </div>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6846\u7684\u6548\u679c\u770b\u8d77\u6765\u548c\u522b\u7684\u4e0d\u4e00\u6837\uff0c\u8fd9\u662f\u56e0\u4e3a\u5b83\u6ca1\u6709\u8bbe\u7f6e\u900f\u89c6\u8ddd\u79bb\uff0c\u770b\u8d77\u6765\u4e0d\u592a\u50cf\u662f3D\u7684\u3002\u5b83\u53ea\u662f\u6c34\u5e73\u65b9\u5411\u4e0a\u505a\u4e86\u4e00\u4e9b\u538b\u7f29\uff0c\u6ca1\u6709\u7acb\u4f53\u611f\u3002\u4e0d\u8bbe\u7f6e\u900f\u89c6\u8ddd\u79bb\u76843D\u53d8\u6362\u770b\u4e0a\u53bb\u50cf\u662f\u5e73\u7684\uff0c\u201d\u5411\u8fdc\u5904\u8f6c\u201d\u7684\u90a3\u90e8\u5206\u5143\u7d20\u6ca1\u6709\u663e\u5f97\u53d8\u5c0f\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u900f\u89c6\u8ddd\u79bb\u540e\uff0c\u52a0\u5f3a\u4e863D\u6548\u679c\u3002\u66f4\u77ed\u7684\u900f\u89c6\u8ddd\u79bb\uff0c\u5143\u7d20\u7684\u8fb9\u7f18\u8d8a\u8fdc\uff0c\u7f29\u5c0f\u5f97\u8d8a\u660e\u663e\u3002\u7b2c\u4e09\u4e2a\u65b9\u6846\u6bd4\u7b2c\u4e8c\u4e2a\u65b9\u6846\u8fb9\u7f18\u66f4\u8fdc\u3002"),(0,r.kt)("h3",{id:"42-\u7edf\u4e00\u7684\u900f\u89c6\u8ddd\u79bb"},"4.2 \u7edf\u4e00\u7684\u900f\u89c6\u8ddd\u79bb"),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c\u6bcf\u4e2a\u76d2\u5b50\u90fd\u6709\u81ea\u5df1\u7684\u900f\u89c6\u8ddd\u79bb\uff0c\u662f\u7528perspective()\u51fd\u6570\u8bbe\u7f6e\u7684\u3002\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u591a\u4e2a\u5143\u7d20\u5171\u4eab\u540c\u4e00\u5957\u900f\u89c6\u8ddd\u79bb\uff0c\u5c31\u4eff\u4f5b\u5b83\u4eec\u5904\u4e8e\u76f8\u540c\u76843D\u7a7a\u95f4\u4e2d\u3002\u8981\u5b9e\u73b0\u8fd9\u79cd\u6548\u679c\uff0c\u9700\u8981\u4e3a\u5b83\u4eec\u7684\u7236\u5143\u7d20\u8bbe\u7f6eperspective\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002\u901a\u8fc7\u4e3a\u7236\u5bb9\u5668\uff08\u6216\u5176\u4ed6\u7956\u5148\u5143\u7d20\uff09\u8bbe\u7f6e\u7edf\u4e00\u7684\u900f\u89c6\u8ddd\u79bb\uff0c\u7236\u5bb9\u5668\u5305\u542b\u7684\u6240\u6709\u5e94\u7528\u4e863D\u53d8\u6362\u7684\u5b50\u5143\u7d20\uff0c\u90fd\u5c06\u5171\u4eab\u76f8\u540c\u7684\u900f\u89c6\u8ddd\u79bb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n  <head>\n    <style type="text/css">\n      .row {\n        display: flex;\n        justify-content: center;\n        perspective: 200px;\n      }\n\n      .box {\n        box-sizing: border-box;\n        width: 150px;\n        margin: 0 2em;\n        padding: 60px 0;\n        text-align: center;\n        background-color: hsl(150, 50%, 40%);\n        transform: rotateX(30deg);\n      }\n    </style>\n  </head>\n  <body>\n    <div class="row">\n      <div class="box">One</div>\n      <div class="box">Two</div>\n      <div class="box">Three</div>\n      <div class="box">Four</div>\n    </div>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/12-transform/3Dtransform-parent",mdxType:"IframeWindow"}),(0,r.kt)("h3",{id:"43-perspective-origin"},"4.3 perspective-origin"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u900f\u89c6\u8ddd\u79bb\u7684\u6e32\u67d3\u662f\u5047\u8bbe\u89c2\u5bdf\u8005\uff08\u6216\u8005\u955c\u5934\uff09\u4f4d\u4e8e\u5143\u7d20\u4e2d\u5fc3\u7684\u6b63\u524d\u65b9\u3002perspective-origin\u5c5e\u6027\u53ef\u4ee5\u4e0a\u4e0b\u3001\u5de6\u53f3\u79fb\u52a8\u955c\u5934\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n  <head>\n    <style type="text/css">\n\n      .row {\n        display: flex;\n        justify-content: center;\n        perspective: 200px;\n        perspective-origin: left bottom;\n      }\n\n      .box {\n        box-sizing: border-box;\n        width: 150px;\n        margin: 0 2em;\n        padding: 60px 0;\n        text-align: center;\n        background-color: hsl(150, 50%, 40%);\n        transform: rotateX(30deg);\n      }\n    </style>\n  </head>\n  <body>\n\n    <div class="row">\n      <div class="box">One</div>\n      <div class="box">Two</div>\n      <div class="box">Three</div>\n      <div class="box">Four</div>\n    </div>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"\u8ddf\u4e4b\u524d\u4e00\u6837\u7684\u900f\u89c6\u8ddd\u79bb\uff0c\u4f46\u662f\u89c6\u89d2\u53d8\u4e86\uff0c\u6240\u6709\u7684\u76d2\u5b50\u90fd\u79fb\u5230\u4e86\u89c2\u5bdf\u8005\u7684\u53f3\u4fa7\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5173\u952e\u5b57top\u3001left\u3001bottom\u3001right\u548ccenter\u6765\u6307\u5b9a\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u767e\u5206\u6bd4\u6216\u8005\u957f\u5ea6\u503c\uff0c\u4ece\u5143\u7d20\u7684\u5de6\u4e0a\u89d2\u5f00\u59cb\u8ba1\u7b97\u3002"),(0,r.kt)("p",null,"\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/12-transform/3Dtransform-origin",mdxType:"IframeWindow"}),(0,r.kt)("h3",{id:"44-backface-visibility"},"4.4 backface-visibility"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528rotateX()\u6216\u8005rotateY()\u65cb\u8f6c\u5143\u7d20\u8d85\u8fc790\u5ea6\uff0c\u5c31\u4f1a\u53d1\u73b0\u4e00\u4e9b\u6709\u8da3\u7684\u4e8b\u60c5\uff1a\u5143\u7d20\u7684\u201c\u8138\u201d\u4e0d\u518d\u76f4\u63a5\u671d\u5411\u4f60\u3002\u5b83\u7684\u201c\u8138\u201d\u8f6c\u5411\u522b\u7684\u5730\u65b9\uff0c\u4f60\u4f1a\u770b\u5230\u5143\u7d20\u7684\u80cc\u9762\u3002\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/12-transform/3Dtransform-backface",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u8fd9\u91cc\u7b2c\u4e8c\u4e2a\u548c\u7b2c\u56db\u4e2a\u76d2\u5b50\u65cb\u8f6c\u4e86190\u5ea6\u3002\u5b83\u4eec\u7684\u80cc\u9762\u671d\u5411\u4e86\u6211\u4eec\u3002\u5176\u4e2d\u7b2c\u56db\u4e2a\u76d2\u5b50\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"backface-visibility: hidden")," \uff0c\u8fd9\u6837\u5b83\u7684\u80cc\u9762\u5c31\u4e0d\u53ef\u89c1\u4e86\u3002\u800c\u7b2c\u4e8c\u4e2a\u76d2\u5b50\u80cc\u9762\u770b\u5230\u7684\u5c31\u662f\u4e4b\u524d\u5143\u7d20\u7684\u955c\u50cf\u56fe\u7247\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n  <head>\n    <style type="text/css">\n      .row {\n        display: flex;\n        justify-content: center;\n        perspective: 200px;\n      }\n      .box {\n        box-sizing: border-box;\n        width: 150px;\n        margin: 0 2em;\n        padding: 60px 0;\n        text-align: center;\n        background-color: hsl(150, 50%, 40%);\n      }\n\n      .box:nth-child(2n) {\n        transform: rotateY(180deg);\n      }\n\n      .box:nth-child(n + 3) {\n        backface-visibility: hidden;\n      }\n    </style>\n  </head>\n  \n  <body>\n    <div class="row">\n      <div class="box">One</div>\n      <div class="box">Two</div>\n      <div class="box">Three</div>\n      <div class="box">Four</div>\n    </div>\n  </body>\n</html>\n')))}f.isMDXComponent=!0}}]);