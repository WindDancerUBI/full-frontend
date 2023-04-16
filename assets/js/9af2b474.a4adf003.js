"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,m=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1007:(e,n,t)=>{t.d(n,{p:()=>d,Z:()=>i});var a=t(7294),r=t(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:n,minHeight:t,url:i="http://localhost:3000",style:d,bodyStyle:o}=e;return a.createElement("div",{className:l.browserWindow,style:{...d,minHeight:t}},a.createElement("div",{className:l.browserWindowHeader},a.createElement("div",{className:l.buttons},a.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(l.browserWindowAddressBar,"text--truncate"),onClick:()=>{window.open(i,"_blank")}},i),a.createElement("div",{className:l.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar})))),a.createElement("div",{className:l.browserWindowBody,style:o},n))}function d(e){let n,{url:t}=e;return n=t.includes("http")||t.includes("https")?t:"https://winddancer.gitee.io"+t,a.createElement("div",null,a.createElement(i,{url:n,bodyStyle:{padding:0}},a.createElement("iframe",{src:n,title:n,style:{width:"100%",height:500}})))}},7351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=t(1007);const i={sidebar_position:9,tags:["CSS"]},d="\u4e5d\u3001\u80cc\u666f\u3001\u9634\u5f71\u548c\u6df7\u5408\u6a21\u5f0f",o={unversionedId:"tutorial/css/gradient-shadow/index",id:"tutorial/css/gradient-shadow/index",title:"\u4e5d\u3001\u80cc\u666f\u3001\u9634\u5f71\u548c\u6df7\u5408\u6a21\u5f0f",description:"\u4e00\u4e2a\u7f51\u7ad9\uff0c\u4ece\u770b\u8d77\u6765\u8fd8\u53ef\u4ee5\uff0c\u5230\u770b\u8d77\u6765\u975e\u5e38\u68d2\uff0c\u5dee\u522b\u5728\u4e8e\u7ec6\u8282\u3002\u8981\u5b9e\u73b0\u8fd9\u4e9b\u7ec6\u8282\uff0cCSS\u4e2d\u90a3\u4e9b\u9700\u8981\u827a\u672f\u521b\u610f\u7684\u90e8\u5206\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002",source:"@site/docs/tutorial/css/9-gradient-shadow/index.mdx",sourceDirName:"tutorial/css/9-gradient-shadow",slug:"/tutorial/css/gradient-shadow/",permalink:"/full-frontend/docs/tutorial/css/gradient-shadow/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/css/9-gradient-shadow/index.mdx",tags:[{label:"CSS",permalink:"/full-frontend/docs/tags/css"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,tags:["CSS"]},sidebar:"tutorialSidebar",previous:{title:"\u516b\u3001\u54cd\u5e94\u5f0f\u8bbe\u8ba1",permalink:"/full-frontend/docs/tutorial/css/responsive/"}},s={},p=[{value:"1. \u6e10\u53d8",id:"1-\u6e10\u53d8",level:2},{value:"1.1 \u7ebf\u6027\u6e10\u53d8",id:"11-\u7ebf\u6027\u6e10\u53d8",level:3},{value:"1.2 \u5f84\u5411\u6e10\u53d8",id:"12-\u5f84\u5411\u6e10\u53d8",level:3},{value:"2. \u9634\u5f71",id:"2-\u9634\u5f71",level:2},{value:"2.1 shadow\u7684\u62df\u7269\u5316",id:"21-shadow\u7684\u62df\u7269\u5316",level:3},{value:"2.2 shadow\u7684\u6241\u5e73\u5316",id:"22-shadow\u7684\u6241\u5e73\u5316",level:3},{value:"3. \u6df7\u5408\u6a21\u5f0f",id:"3-\u6df7\u5408\u6a21\u5f0f",level:2},{value:"3.1 \u4e3a\u56fe\u7247\u7740\u8272",id:"31-\u4e3a\u56fe\u7247\u7740\u8272",level:3},{value:"3.2 \u4e3a\u56fe\u7247\u6dfb\u52a0\u7eb9\u7406",id:"32-\u4e3a\u56fe\u7247\u6dfb\u52a0\u7eb9\u7406",level:3},{value:"3.3 \u4e3a\u56fe\u50cf\u6dfb\u52a0\u6a2a\u5e45",id:"33-\u4e3a\u56fe\u50cf\u6dfb\u52a0\u6a2a\u5e45",level:3}],u={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e5d\u80cc\u666f\u9634\u5f71\u548c\u6df7\u5408\u6a21\u5f0f"},"\u4e5d\u3001\u80cc\u666f\u3001\u9634\u5f71\u548c\u6df7\u5408\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4e00\u4e2a\u7f51\u7ad9\uff0c\u4ece\u770b\u8d77\u6765\u8fd8\u53ef\u4ee5\uff0c\u5230\u770b\u8d77\u6765\u975e\u5e38\u68d2\uff0c\u5dee\u522b\u5728\u4e8e\u7ec6\u8282\u3002\u8981\u5b9e\u73b0\u8fd9\u4e9b\u7ec6\u8282\uff0cCSS\u4e2d\u90a3\u4e9b\u9700\u8981\u827a\u672f\u521b\u610f\u7684\u90e8\u5206\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002"),(0,r.kt)("h2",{id:"1-\u6e10\u53d8"},"1. \u6e10\u53d8"),(0,r.kt)("p",null,"\u6e10\u53d8\u53ef\u4ee5\u4e3a\u7f51\u9875\u589e\u52a0\u7acb\u4f53\u611f\u3002\u56e0\u4e3a\u771f\u5b9e\u4e16\u754c\u4e2d\u4e0d\u5b58\u5728\u5355\u4e00\u989c\u8272\u7684\u7269\u4f53\uff0c\u5408\u7406\u4f7f\u7528\u6e10\u53d8\u53ef\u4ee5\u4f7f\u5f97\u7f51\u9875\u66f4\u751f\u52a8\u3002"),(0,r.kt)("p",null,"background\u5c5e\u6027\u4e0d\u4ec5\u4ec5\u662f\u6dfb\u52a0\u80cc\u666f\u56fe\u7247\u7684\u4f5c\u7528\uff0c\u5b9e\u9645\u4e0a\uff0c\u5b83\u662f\u4ee5\u4e0b\u516b\u4e2a\u5c5e\u6027\u7684\u7b80\u5199\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-image"),"\u2014\u2014\u6307\u5b9a\u4e00\u4e2a\u6587\u4ef6\u6216\u8005\u751f\u6210\u7684\u989c\u8272\u6e10\u53d8\u4f5c\u4e3a\u80cc\u666f\u56fe\u7247\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-position"),"\u2014\u2014\u8bbe\u7f6e\u80cc\u666f\u56fe\u7247\u7684\u521d\u59cb\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-size"),"\u2014\u2014\u6307\u5b9a\u5143\u7d20\u5185\u80cc\u666f\u56fe\u7247\u7684\u6e32\u67d3\u5c3a\u5bf8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-repeat"),"\u2014\u2014\u51b3\u5b9a\u5728\u9700\u8981\u586b\u5145\u6574\u4e2a\u5143\u7d20\u65f6\uff0c\u662f\u5426\u5e73\u94fa\u56fe\u7247\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-origin"),"\u2014\u2014\u51b3\u5b9a\u80cc\u666f\u76f8\u5bf9\u4e8e\u5143\u7d20\u7684\u8fb9\u6846\u76d2\u3001\u5185\u8fb9\u8ddd\u6846\u76d2\uff08\u521d\u59cb\u503c\uff09\u6216\u5185\u5bb9\u76d2\u5b50\u6765\u5b9a\u4f4d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-clip"),"\u2014\u2014\u6307\u5b9a\u80cc\u666f\u662f\u5426\u5e94\u8be5\u586b\u5145\u8fb9\u6846\u76d2\uff08\u521d\u59cb\u503c\uff09\u3001\u5185\u8fb9\u8ddd\u6846\u76d2\u6216\u5185\u5bb9\u76d2\u5b50\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-attachment"),"\u2014\u2014\u6307\u5b9a\u80cc\u666f\u56fe\u7247\u662f\u968f\u7740\u5143\u7d20\u4e0a\u4e0b\u6eda\u52a8\uff08\u521d\u59cb\u503c\uff09\uff0c\u8fd8\u662f\u56fa\u5b9a\u5728\u89c6\u53e3\u533a\u57df\u3002\u6ce8\u610f\uff0c\u4f7f\u7528fixed\u503c\u4f1a\u5bf9\u9875\u9762\u6027\u80fd\u4ea7\u751f\u8d1f\u9762\u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"background-color"),"\u2014\u2014\u6307\u5b9a\u7eaf\u8272\u80cc\u666f\uff0c\u6e32\u67d3\u5230\u80cc\u666f\u56fe\u7247\u4e0b\u65b9\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"background-image"),"\u53ef\u4ee5\u5b9e\u73b0\u6e10\u53d8\u6548\u679c\u3002\u6e10\u53d8\u662f\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u7279\u6548\uff0c\u5b83\u672c\u8d28\u4e0a\u4e5f\u662f\u80cc\u666f\u56fe\u7247\uff0c\u6e10\u53d8\u672c\u8eab\u4e0d\u4f1a\u5f71\u54cd\u5143\u7d20\u7684\u5927\u5c0f\u3002"),(0,r.kt)("h3",{id:"11-\u7ebf\u6027\u6e10\u53d8"},"1.1 \u7ebf\u6027\u6e10\u53d8"),(0,r.kt)("p",null,"\u7ebf\u6027\u6e10\u53d8\u662f\u4ece\u5143\u7d20\u7684\u4e00\u7aef\u5f00\u59cb\uff0c\u6cbf\u7740\u76f4\u7ebf\u8fc7\u6e21\u5230\u53e6\u4e00\u7aef\u3002\u5e38\u89c1\u7684\u51e0\u79cd\u7ebf\u6027\u6e10\u53d8\u7684\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/9-gradient-shadow/linear-gradient",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype>\n<head>\n  <style type="text/css">\n    .container {\n      width: 400px;\n      max-width: 100%;\n      margin: 1em auto;\n    }\n    .linear-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: linear-gradient(to right, white, blue);\n    }\n    .multiple-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: linear-gradient(90deg, red 0%, white 50%, blue 100%);\n    }\n    .fringe-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: linear-gradient(90deg, red 40%, white 40%, white 60%, blue 60%);\n    }\n    .repeat-gradient {\n      height: 20px;\n      width: 100%;\n      background-image: repeating-linear-gradient(-45deg, #57b, #57b 10px, #148 10px, #148 20px);\n      border-radius: 0.3em;\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <p>\u57fa\u7840\u6e10\u53d8\uff1a</p>\n    <div class="linear-gradient"></div>\n    <p>\u591a\u4e2a\u989c\u8272\u8282\u70b9\u7684\u6e10\u53d8\uff1a</p>\n    <div class="multiple-gradient"></div>\n    <p>\u6761\u7eb9\u6e10\u53d8\uff1a</p>\n    <div class="fringe-gradient"></div>\n    <p>\u91cd\u590d\u6e10\u53d8\uff1a</p>\n    <div class="repeat-gradient"></div>\n  </div>\n</body>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57fa\u7840\u6e10\u53d8")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"linear-gradient")," \u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u7ebf\u6027\u6e10\u53d8\u3002\u5b83\u4f7f\u7528\u4e09\u4e2a\u53c2\u6570\u6765\u5b9a\u4e49\u884c\u4e3a\uff1a\u89d2\u5ea6\u3001\u8d77\u59cb\u989c\u8272\u548c\u7ec8\u6b62\u989c\u8272\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u89d2\u5ea6\u503c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"to right"),"\uff0c\u610f\u601d\u662f\u6e10\u53d8\u4ece\u5143\u7d20\u7684\u5de6\u4fa7\u5f00\u59cb\uff08\u8fd9\u91cc\u662f\u767d\u8272\uff09\uff0c\u5e73\u6ed1\u8fc7\u6e21\u5230\u53f3\u4fa7\uff08\u8fd9\u91cc\u662f\u84dd\u8272\uff09\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u66f4\u786e\u5207\u7684\u5355\u4f4d\uff08\u6bd4\u5982\u5ea6\uff09\uff0c\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"p"},"to right"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"90deg"),"\u662f\u7b49\u4ef7\u7684\u3002"),(0,r.kt)("p",null,"\u8d77\u59cb\u989c\u8272\u548c\u7ec8\u6b62\u989c\u8272\u7684\u503c\u548c\u5176\u5b83\u5730\u65b9\u989c\u8272\u503c\u7684\u7528\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528hex\u3001rbga\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: linear-gradient(to right, white, blue);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u989c\u8272\u8282\u70b9\u7684\u6e10\u53d8")),(0,r.kt)("p",null,"\u5927\u90e8\u5206\u6e10\u53d8\u53ea\u9700\u8981\u4e24\u4e2a\u989c\u8272\uff0c\u4ece\u4e00\u4e2a\u989c\u8272\u8fc7\u6e21\u5230\u53e6\u4e00\u4e2a\u3002\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u5305\u542b\u591a\u4e2a\u989c\u8272\u7684\u6e10\u53d8\uff0c\u5176\u4e2d\u6bcf\u4e2a\u989c\u8272\u53ef\u4ee5\u79f0\u4e3a\u4e00\u4e2a\u989c\u8272\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u6e10\u53d8\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u7684\u989c\u8272\u8282\u70b9\uff0c\u8282\u70b9\u4e4b\u95f4\u901a\u8fc7\u9017\u53f7\u5206\u9694\u3002\u6e10\u53d8\u4f1a\u81ea\u52a8\u5747\u5300\u5730\u5e73\u94fa\u8fd9\u4e9b\u989c\u8272\u8282\u70b9\u3002\u4e5f\u53ef\u4ee5\u5728\u6e10\u53d8\u51fd\u6570\u4e2d\u4e3a\u6bcf\u4e2a\u989c\u8272\u8282\u70b9\u660e\u786e\u6307\u5b9a\u4f4d\u7f6e\u3002\u6307\u5b9a\u4f4d\u7f6e\u7684\u503c\u53ef\u4ee5\u4f7f\u7528\u767e\u5206\u6bd4\u4e5f\u53ef\u4ee5\u4f7f\u7528\u50cf\u7d20px\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: linear-gradient(90deg, red 0%, white 50%, blue 100%);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6761\u7eb9\u6e10\u53d8")),(0,r.kt)("p",null,"\u5982\u679c\u5728\u540c\u4e00\u4e2a\u4f4d\u7f6e\u8bbe\u7f6e\u4e24\u4e2a\u989c\u8272\u8282\u70b9\uff0c\u90a3\u4e48\u6e10\u53d8\u4f1a\u76f4\u63a5\u4ece\u4e00\u4e2a\u989c\u8272\u53d8\u6362\u5230\u53e6\u4e00\u4e2a\uff0c\u800c\u4e0d\u662f\u5e73\u6ed1\u8fc7\u6e21\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: linear-gradient(90deg, red 40%, white 40%, white 60%, blue 60%);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u590d\u6e10\u53d8")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"repeating-linear-gradient"),"\u53ef\u4ee5\u5b9e\u73b0\u91cd\u590d\u6e10\u53d8\u7684\u6548\u679c\u3002\u6b64\u51fd\u6570\u548c\u51fd\u6570linear-gradient\u7684\u6548\u679c\u57fa\u672c\u76f8\u540c\uff0c\u552f\u4e00\u7684\u533a\u522b\u5c31\u662f\u524d\u8005\u4f1a\u91cd\u590d\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u91cd\u590d\u6e10\u53d8\uff0c\u6700\u597d\u4f7f\u7528\u7279\u5b9a\u7684\u957f\u5ea6\u800c\u4e0d\u662f\u767e\u5206\u6bd4\uff0c\u56e0\u4e3a\u8bbe\u7f6e\u7684\u503c\u51b3\u5b9a\u4e86\u8981\u91cd\u590d\u7684\u56fe\u7247\u5927\u5c0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: repeating-linear-gradient(-45deg, #57b, #57b 10px, #148 10px, #148 20px);\n")),(0,r.kt)("h3",{id:"12-\u5f84\u5411\u6e10\u53d8"},"1.2 \u5f84\u5411\u6e10\u53d8"),(0,r.kt)("p",null,"\u5f84\u5411\u6e10\u53d8\u662f\u4ece\u4e00\u4e2a\u70b9\u5f00\u59cb\uff0c\u5168\u65b9\u4f4d\u5411\u5916\u6269\u5c55\u3002\u5e38\u89c1\u7684\u51e0\u79cd\u5f84\u5411\u6e10\u53d8\u7684\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/9-gradient-shadow/radial-gradient",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype>\n<head>\n  <style type="text/css">\n    .container {\n      width: 400px;\n      max-width: 100%;\n      margin: 1em auto;\n    }\n    .radial-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: radial-gradient(white, blue);\n    }\n    .circle-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: radial-gradient(circle, white, blue);\n    }\n    .corner-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: radial-gradient(3em at 25% 25%, white, blue);\n    }\n    .multiple-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: radial-gradient(circle, blue 0%, white 50%, red 100%);\n      border-radius: 0.3em;\n    }\n    .repeat-gradient {\n      height: 200px;\n      width: 100%;\n      background-image: repeating-radial-gradient(circle, blue 0, blue 1em, white 1em, white 2em);\n      border-radius: 0.3em;\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <p>\u57fa\u7840\u6e10\u53d8\uff1a</p>\n    <div class="radial-gradient"></div>\n    <p>\u5706\u5f62\u6e10\u53d8\uff1a</p>\n    <div class="circle-gradient"></div>\n    <p>\u8fb9\u7f18\u6269\u6563\u6e10\u53d8\uff1a</p>\n    <div class="corner-gradient"></div>\n    <p>\u591a\u4e2a\u989c\u8272\u8282\u70b9\u6e10\u53d8\uff1a</p>\n    <div class="multiple-gradient"></div>\n    <p>\u91cd\u590d\u6e10\u53d8\uff1a</p>\n    <div class="repeat-gradient"></div>\n  </div>\n</body>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u57fa\u7840\u6e10\u53d8")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"radial-gradient")," \u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u5f84\u5411\u6e10\u53d8\u3002\u5b83\u4f7f\u7528\u4e8c\u4e2a\u53c2\u6570\u6765\u5b9a\u4e49\u884c\u4e3a\uff1a\u8d77\u59cb\u989c\u8272\u548c\u7ec8\u6b62\u989c\u8272\u3002"),(0,r.kt)("p",null,"\u6e10\u53d8\u6574\u4f53\u5448\u692d\u5706\u5f62\uff0c\u8ddf\u968f\u5143\u7d20\u5927\u5c0f\u8fdb\u884c\u53d8\u5316\u3002\u8f83\u5bbd\u7684\u5143\u7d20\uff0c\u5176\u5f84\u5411\u6e10\u53d8\u4e5f\u8f83\u5bbd\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: radial-gradient(white, blue);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5706\u5f62\u6e10\u53d8")),(0,r.kt)("p",null,"\u5728\u7b2c\u4e00\u4e2a\u53c2\u6570\u5904\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"circle"),"\u5173\u952e\u8bcd\u3002\u53ef\u4ee5\u4f7f\u6e10\u53d8\u662f\u5706\u5f62\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: radial-gradient(circle, white, blue);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fb9\u7f18\u6269\u6563\u6e10\u53d8")),(0,r.kt)("p",null,"\u6e10\u53d8\u9ed8\u8ba4\u7684\u8d77\u70b9\u662f\u4e2d\u5fc3\u70b9\u3002\u4f46\u53ef\u4ee5\u518d\u7b2c\u4e00\u4e2a\u53c2\u6570\u91cd\u6307\u5b9a\u8d77\u70b9\u7684\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: radial-gradient(3em at 25% 25%, white, blue);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u989c\u8272\u8282\u70b9\u6e10\u53d8")),(0,r.kt)("p",null,"\u8ddf\u7ebf\u6027\u6e10\u53d8\u4e00\u6837\uff0c\u5f84\u5411\u6e10\u53d8\u540c\u6837\u652f\u6301\u989c\u8272\u8282\u70b9\u3002\u4f60\u53ef\u4ee5\u63d0\u4f9b\u591a\u4e2a\u8282\u70b9\uff0c\u4f7f\u7528\u767e\u5206\u6bd4\u6216\u8005\u957f\u5ea6\u5355\u4f4d\u6307\u5b9a\u8282\u70b9\u4f4d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: radial-gradient(circle, blue 0%, white 50%, red 100%);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u590d\u6e10\u53d8")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"repeating-radial-gradient"),"\u51fd\u6570\u53ef\u4ee5\u91cd\u590d\u751f\u6210\u56fe\u6837\uff0c\u5f62\u6210\u540c\u5fc3\u5706\u73af\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"background-image: repeating-radial-gradient(circle, blue 0, blue 1em, white 1em, white 2em);\n")),(0,r.kt)("h2",{id:"2-\u9634\u5f71"},"2. \u9634\u5f71"),(0,r.kt)("p",null,"\u9634\u5f71\u662f\u53e6\u4e00\u79cd\u53ef\u4ee5\u4e3a\u7f51\u9875\u589e\u52a0\u7acb\u4f53\u611f\u7684\u7279\u6548\u3002\u6709\u4e24\u4e2a\u5c5e\u6027\u53ef\u4ee5\u521b\u5efa\u9634\u5f71\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"box-shadow"),"\u53ef\u4ee5\u4e3a\u5143\u7d20\u76d2\u5b50\u751f\u6210\u9634\u5f71\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"text-shadow"),"\u53ef\u4ee5\u4e3a\u6e32\u67d3\u540e\u7684\u6587\u5b57\u751f\u6210\u9634\u5f71\u3002"),(0,r.kt)("h3",{id:"21-shadow\u7684\u62df\u7269\u5316"},"2.1 shadow\u7684\u62df\u7269\u5316"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9634\u5f71\u4e0e\u5143\u7d20\u7684\u5927\u5c0f\u548c\u5c3a\u5bf8\u76f8\u540c\u3002\u5982\u679c\u5143\u7d20\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"border-radius"),"\uff0c\u90a3\u4e48\u9634\u5f71\u76f8\u5e94\u5730\u4e5f\u4f1a\u6709\u5706\u89d2\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u9634\u5f71\u6548\u679c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype>\n<head>\n  <style type="text/css">\n  .button {\n    padding: 1em;\n    border: 0;\n    font-size: 0.8rem;\n    color: white;\n    border-radius: 0.5em;\n    background-image: linear-gradient(to bottom, #57b, #148);\n    box-shadow: 0.1em 0.1em 0.5em 0.2em #124;\n  }\n  .button:active {\n    box-shadow: inset 0 0 0.5em #124, inset 0 0.5em 1em rgba(0,0,0,0.4);\n  }\n  </style>\n</head>\n<body>\n  <button class="button">Sign up now</button>\n</body>\n')),(0,r.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u5206\u522b\u662f\uff1a\u9634\u5f71\u7684\u6c34\u5e73\u504f\u79fb\u91cf\uff08x\uff09\u3001\u5782\u76f4\u504f\u79fb\u91cf\uff08y\uff09\u3001\u6a21\u7cca\u534a\u5f84\u3001\u6269\u5c55\u534a\u5f84\u3001\u989c\u8272\u3002\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/9-gradient-shadow/simulant-shadow",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4f7f\u7528\u4e86\u6e10\u53d8\u548c\u9634\u5f71\uff0c\u4f7f\u5f97\u6309\u94ae\u66f4\u5177\u7acb\u4f53\u611f\u3002\u6309\u94ae\u70b9\u51fb\u65f6\uff0c\u79fb\u9664\u4e86\u9634\u5f71\u6548\u679c\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u5728\u6309\u94ae\u7684\u8fb9\u6846\u5185\u51fa\u73b0\u4e86\u5185\u9634\u5f71\u3002\u8fd9\u6837\u6309\u94ae\u5c31\u6709\u4e86\u4e00\u79cd\u88ab\u6441\u4e0b\u7684\u611f\u89c9\uff0c\u5c31\u4eff\u4f5b\u7528\u6237\u771f\u7684\u5728\u7f51\u9875\u4e0a\u6309\u538b\u6309\u94ae\u3002"),(0,r.kt)("h3",{id:"22-shadow\u7684\u6241\u5e73\u5316"},"2.2 shadow\u7684\u6241\u5e73\u5316"),(0,r.kt)("p",null,"\u6241\u5e73\u5316\u8bbe\u8ba1\u8bb2\u7a76\u8272\u5f69\u660e\u5feb\u7edf\u4e00\u3001\u5916\u89c2\u7b80\u6d01\u660e\u4e86\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u5c3d\u91cf\u5c11\u4f7f\u7528\u6e10\u53d8\u3001\u9634\u5f71\u548c\u5706\u89d2\u3002\u6241\u5e73\u5316\u8bbe\u8ba1\u5e76\u4e0d\u662f\u8bf4\u5b8c\u5168\u4e0d\u7528\u8fd9\u4e9b\u7279\u6548\uff0c\u7528\u8fd8\u662f\u8981\u7528\u7684\uff0c\u4f46\u8981\u7528\u5f97\u5de7\u7528\u5f97\u5999\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e0a\u9762\u7684\u62df\u7269\u5316\u4ee3\u7801\u4fee\u6539\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype>\n<head>\n  <style type="text/css">\n    .button {\n      padding: 0.8em;\n      border: 0;\n      font-size: 1rem;\n      color: white;\n      border-radius: 0.5em;\n      background-color: #57b;\n      box-shadow: 0 0.4em #148;\n      text-shadow: 1px 1px #148;\n    }\n    .button:active {\n      background-color: #456ab5;\n      transform: translateY(0.1em);\n      box-shadow: 0 0.3em #148;\n    }\n    .button:focus {\n      outline: none;\n    }\n  </style>\n</head>\n<body>\n  <button class="button">Sign up now</button>\n</body>\n')),(0,r.kt)("p",null,"\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/9-gradient-shadow/flat-shadow",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u76f8\u6bd4\u8f83\u4e8e\u62df\u7269\u5316\u98ce\u683c\uff0c\u6241\u5e73\u5316\u98ce\u683c\u7684\u6309\u94ae\u989c\u8272\u4fe1\u606f\u3001\u9634\u5f71\u4fe1\u606f\u66f4\u5c11\u3002\u8fd9\u91cc\u7684\u6309\u94ae\u4ee5\u4e00\u79cd\u4e0d\u540c\u7684\u65b9\u5f0f\u4f7f\u7528box-shadow\uff0c\u4e0d\u662f\u53e0\u52a0\u4e00\u4e2a\u6a21\u7cca\u6548\u679c\u7684\u9634\u5f71\uff0c\u800c\u662f\u4fdd\u6301\u9634\u5f71\u8fb9\u7f18\u6e05\u6670\u3002\u8fd9\u6837\u770b\u8d77\u6765\u4e5f\u5f88\u751f\u52a8\u3002"),(0,r.kt)("h2",{id:"3-\u6df7\u5408\u6a21\u5f0f"},"3. \u6df7\u5408\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u4e0d\u8bba\u662f\u4f7f\u7528\u771f\u6b63\u7684\u56fe\u7247\u8fd8\u662f\u6e10\u53d8\uff0c\u5143\u7d20\u4e00\u822c\u53ea\u4f1a\u4f7f\u7528\u4e00\u5f20\u80cc\u666f\u56fe\u7247\u3002\u4f46\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f60\u53ef\u80fd\u60f3\u8981\u4f7f\u7528\u4e24\u5f20\u6216\u8005\u66f4\u591a\u7684\u80cc\u666f\u56fe\u7247\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u591a\u4e2a\u80cc\u666f\u56fe\u7247\u65f6\uff0c\u5217\u8868\u4e2d\u6392\u5728\u524d\u9762\u7684\u56fe\u7247\u4f1a\u6e32\u67d3\u5230\u6392\u5e8f\u9760\u540e\u7684\u56fe\u7247\u4e0a\u9762\u3002\u4e00\u822c\u662f\u5e0c\u671b\u540e\u9762\u7684\u56fe\u7247\u4e5f\u53ef\u4ee5\u900f\u89c6\u663e\u793a\u3002\u8fd9\u65f6\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u6df7\u5408\u6a21\u5f0f\uff08blend mode\uff09\u3002")),(0,r.kt)("p",null,"\u6df7\u5408\u5f88\u50cfPS\u3001AI\u7b49\u8bbe\u8ba1\u8f6f\u4ef6\u4e2d\u7684\u56fe\u5c42\u53e0\u52a0\u7c7b\uff0c\u6bd4\u5982\u53d8\u4eae\u3001\u989c\u8272\u52a0\u6df1\u3001\u6b63\u7247\u53e0\u5e95\u8fd9\u4e9b\u3002\u5b83\u7684\u7528\u5904\u6709\u5982\u4e0b\u51e0\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u67d0\u79cd\u989c\u8272\u6216\u8005\u6e10\u53d8\u4e3a\u56fe\u7247\u7740\u8272\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u56fe\u7247\u6dfb\u52a0\u7eb9\u7406\u6548\u679c\uff0c\u6bd4\u5982\u5212\u75d5\u6216\u8005\u8001\u80f6\u7247\u653e\u6620\u65f6\u7684\u9897\u7c92\u611f\u7b49\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7f13\u548c\u3001\u52a0\u6df1\u6216\u8005\u51cf\u5c0f\u56fe\u7247\u7684\u5bf9\u6bd4\u5ea6\uff0c\u4f7f\u56fe\u7247\u4e0a\u7684\u6587\u5b57\u66f4\u5177\u53ef\u8bfb\u6027\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u56fe\u7247\u4e0a\u8986\u76d6\u4e86\u4e00\u6761\u6587\u5b57\u6a2a\u5e45\uff0c\u4f46\u662f\u8fd8\u60f3\u8ba9\u56fe\u7247\u5b8c\u6574\u663e\u793a\u3002")),(0,r.kt)("h3",{id:"31-\u4e3a\u56fe\u7247\u7740\u8272"},"3.1 \u4e3a\u56fe\u7247\u7740\u8272"),(0,r.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528\u6df7\u5408\u6a21\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u4e00\u5f20\u5168\u5f69\u8272\u56fe\u7247\u7740\u8272\u6210\u5355\u4e00\u8272\u76f8\u7684\u56fe\u7247\u3002\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/9-gradient-shadow/blend-color",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u5b9e\u73b0\u8be5\u6548\u679c\u7684\u4ee3\u7801\u5982\u4e0b\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"background-blend-mode"),"\u4e0d\u4ec5\u4ec5\u5408\u5e76\u591a\u4e2a\u80cc\u666f\u56fe\u7247\uff0c\u8fd8\u4f1a\u5408\u5e76background-color\u3002\u6240\u6709\u8fd9\u4e9b\u53e0\u653e\u7684\u56fe\u5c42\uff0c\u6700\u7ec8\u90fd\u4f1a\u88ab\u6df7\u5408\u6a21\u5f0f\u62fc\u5408\u5728\u4e00\u8d77"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype>\n<head>\n  <style type="text/css">\n.blend {\n    min-height: 400px;\n    background-image: url("bear.jpg");\n    background-color: #148;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-blend-mode: luminosity;\n}\n  </style>\n</head>\n<body>\n  <div class="blend"></div>\n</body>\n')),(0,r.kt)("h3",{id:"32-\u4e3a\u56fe\u7247\u6dfb\u52a0\u7eb9\u7406"},"3.2 \u4e3a\u56fe\u7247\u6dfb\u52a0\u7eb9\u7406"),(0,r.kt)("p",null,"\u6df7\u5408\u6a21\u5f0f\u7684\u53e6\u4e00\u4e2a\u5e94\u7528\u573a\u666f\u5c31\u662f\u4e3a\u56fe\u7247\u6dfb\u52a0\u7eb9\u7406\u6548\u679c\u3002\u6bd4\u5982\u4f60\u6709\u4e00\u5f20\u5bcc\u6709\u73b0\u4ee3\u6c14\u606f\u7684\u6e05\u6670\u56fe\u7247\uff0c\u4f46\u6709\u60f3\u6539\u53d8\u5b83\u7684\u98ce\u683c\uff0c\u60f3\u5e26\u70b9\u566a\u70b9\u770b\u8d77\u6765\u6709\u9648\u65e7\u611f\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7684\u6548\u679c\u53ef\u4ee5\u901a\u8fc7\u5bf9\u6bd4\u6df7\u5408\u6a21\u5f0foverlay\u3001hard-light\u6216soft-light\u6765\u5b9e\u73b0\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u6837\u7684\u6548\u679c\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/9-gradient-shadow/blend-texture",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u5b9e\u73b0\u7684\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff0c\u7eb9\u7406\u56fe\u7247\u4ee5\u91cd\u590d\u5e73\u94fa\u7684\u65b9\u5f0f\u8986\u76d6\u5728\u5927\u718a\u56fe\u7247\u4e0a\u65b9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype>\n<head>\n  <style type="text/css">\n.blend {\n  min-height: 400px;\n  background-image: url("scratches.png"), url("bear.jpg");\n  background-size: 200px, cover;\n  background-repeat: repeat, no-repeat;\n  background-position: center center;\n  background-blend-mode: soft-light;\n}\n  </style>\n</head>\n<body>\n  <div class="blend"></div>\n</body>\n')),(0,r.kt)("aside",null,"\ud83d\udca1 soft-light\u6a21\u5f0f\u5bf9\u4e8e\u6697\u8272\u7cfb\u7eb9\u7406\u56fe\u7247\u6548\u679c\u5f88\u597d\uff0c\u800chard-light\u548coverlay\u6a21\u5f0f\u66f4\u9002\u7528\u4e8e\u4eae\u8272\u7684\u7eb9\u7406\u56fe\u7247\u3002"),(0,r.kt)("h3",{id:"33-\u4e3a\u56fe\u50cf\u6dfb\u52a0\u6a2a\u5e45"},"3.3 \u4e3a\u56fe\u50cf\u6dfb\u52a0\u6a2a\u5e45"),(0,r.kt)("p",null,"\u867d\u7136background-blend-mode\u5c5e\u6027\u53ef\u4ee5\u5b9e\u73b0\u591a\u5f20\u56fe\u7247\u7684\u6df7\u5408\uff0c\u4f46\u53ea\u80fd\u5c40\u9650\u4e8e\u5143\u7d20\u7684\u80cc\u666f\u989c\u8272\u6216\u8005\u80cc\u666f\u56fe\u7247\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u6709\u65f6\u60f3\u53ef\u4ee5\u878d\u5408\u591a\u4e2a\u5143\u7d20\u3002\u8fd9\u6837\u4e0d\u4ec5\u53ef\u4ee5\u6df7\u5408\u56fe\u7247\uff0c\u8fd8\u53ef\u4ee5\u628a\u5143\u7d20\u7684\u6587\u672c\u548c\u8fb9\u6846\u4e0e\u5bb9\u5668\u7684\u80cc\u666f\u56fe\u7247\u6df7\u5408\u5728\u4e00\u8d77\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)(l.p,{url:"/css-tutorial/9-gradient-shadow/blend-fusion",mdxType:"IframeWindow"}),(0,r.kt)("p",null,"\u5b9e\u73b0\u7684\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"mix-blend-mode"),"\u53ef\u4ee5\u878d\u5408\u591a\u4e2a\u5143\u7d20\u3002\u53ef\u4ee5\u628a\u6807\u9898\u663e\u793a\u5728\u56fe\u7247\u4e0a\u65b9\uff0c\u4f46\u906e\u4f4f\u7684\u56fe\u7247\u90e8\u5206\u4f9d\u7136\u53ef\u4ee5\u663e\u793a\u51fa\u6765\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype>\n<head>\n  <style type="text/css">\n.blend {\n  background-image: url("images/bear.jpg");\n  background-size: cover;\n  background-position: center;\n  padding: 15em 0 1em;\n}\n\n.blend > h1 {\n  margin: 0;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 6rem;\n  text-align: center;\n  mix-blend-mode: hard-light;\n  background-color: #c33;\n  color: #808080;\n  border: 0.1em solid #ccc;\n  border-width: 0.1em 0;\n}\n  </style>\n</head>\n<body>\n  <div class="blend">\n    <h1>Ursa Major</h1>\n  </div>\n</body>\n')))}g.isMDXComponent=!0}}]);