"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[86],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=l.createContext({}),s=function(e){var n=l.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return l.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return t?l.createElement(k,i(i({ref:n},p),{},{components:t})):l.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=t(7462),a=(t(7294),t(3905));const r={sidebar_position:3,tags:["CSS"]},i="\u4e09\u3001\u76d2\u5b50\u6a21\u578b",o={unversionedId:"tutorial/css/box-model/index",id:"tutorial/css/box-model/index",title:"\u4e09\u3001\u76d2\u5b50\u6a21\u578b",description:"1. \u4ec0\u4e48\u662f\u76d2\u5b50\u6a21\u578b",source:"@site/docs/tutorial/css/3-box-model/index.mdx",sourceDirName:"tutorial/css/3-box-model",slug:"/tutorial/css/box-model/",permalink:"/full-frontend/docs/tutorial/css/box-model/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/css/3-box-model/index.mdx",tags:[{label:"CSS",permalink:"/full-frontend/docs/tags/css"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["CSS"]},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u3001\u76f8\u5bf9\u5355\u4f4d",permalink:"/full-frontend/docs/tutorial/css/relative-pixel/"},next:{title:"\u56db\u3001\u6d6e\u52a8",permalink:"/full-frontend/docs/tutorial/css/float/"}},d={},s=[{value:"1. \u4ec0\u4e48\u662f\u76d2\u5b50\u6a21\u578b",id:"1-\u4ec0\u4e48\u662f\u76d2\u5b50\u6a21\u578b",level:2},{value:"2. \u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898",id:"2-\u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898",level:2},{value:"2.1 \u4e0d\u540c\u7684\u76d2\u5b50\u6a21\u578b\u6a21\u5f0f",id:"21-\u4e0d\u540c\u7684\u76d2\u5b50\u6a21\u578b\u6a21\u5f0f",level:3},{value:"2.2 \u89e3\u51b3\u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898",id:"22-\u89e3\u51b3\u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898",level:3},{value:"2.3 \u5168\u5c40\u4fee\u6539\u76d2\u5b50\u6a21\u578b",id:"23-\u5168\u5c40\u4fee\u6539\u76d2\u5b50\u6a21\u578b",level:3},{value:"3. \u5143\u7d20\u9ad8\u5ea6\u7684\u95ee\u9898",id:"3-\u5143\u7d20\u9ad8\u5ea6\u7684\u95ee\u9898",level:2},{value:"3.1 \u6ea2\u51fa\u884c\u4e3a",id:"31-\u6ea2\u51fa\u884c\u4e3a",level:3},{value:"3.2 \u8bbe\u7f6e\u767e\u5206\u6bd4\u9ad8\u5ea6\u7684\u65b9\u6848",id:"32-\u8bbe\u7f6e\u767e\u5206\u6bd4\u9ad8\u5ea6\u7684\u65b9\u6848",level:3},{value:"3.3 min-Height\u548cmax-Height",id:"33-min-height\u548cmax-height",level:3},{value:"3.4 \u5782\u76f4\u5c45\u4e2d",id:"34-\u5782\u76f4\u5c45\u4e2d",level:3},{value:"4. \u8d1f\u5916\u8fb9\u8ddd",id:"4-\u8d1f\u5916\u8fb9\u8ddd",level:2},{value:"5. \u5916\u8fb9\u8ddd\u6298\u53e0",id:"5-\u5916\u8fb9\u8ddd\u6298\u53e0",level:2},{value:"5.1 \u6587\u5b57\u6298\u53e0",id:"51-\u6587\u5b57\u6298\u53e0",level:3},{value:"5.2 \u591a\u4e2a\u5916\u8fb9\u8ddd\u6298\u53e0",id:"52-\u591a\u4e2a\u5916\u8fb9\u8ddd\u6298\u53e0",level:3},{value:"5.3 \u9632\u6b62\u5916\u8fb9\u8ddd\u6298\u53e0",id:"53-\u9632\u6b62\u5916\u8fb9\u8ddd\u6298\u53e0",level:3},{value:"6. \u5bb9\u5668\u5185\u7684\u5143\u7d20\u95f4\u8ddd",id:"6-\u5bb9\u5668\u5185\u7684\u5143\u7d20\u95f4\u8ddd",level:2},{value:"6.1 \u4f7f\u7528\u76f8\u90bb\u5144\u5f1f\u7ec4\u5408\u5668\u6dfb\u52a0\u5916\u8fb9\u8ddd",id:"61-\u4f7f\u7528\u76f8\u90bb\u5144\u5f1f\u7ec4\u5408\u5668\u6dfb\u52a0\u5916\u8fb9\u8ddd",level:3},{value:"6.2 \u732b\u5934\u9e70\u9009\u62e9\u5668",id:"62-\u732b\u5934\u9e70\u9009\u62e9\u5668",level:3}],p={toc:s},u="wrapper";function c(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,l.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e09\u76d2\u5b50\u6a21\u578b"},"\u4e09\u3001\u76d2\u5b50\u6a21\u578b"),(0,a.kt)("h2",{id:"1-\u4ec0\u4e48\u662f\u76d2\u5b50\u6a21\u578b"},"1. \u4ec0\u4e48\u662f\u76d2\u5b50\u6a21\u578b"),(0,a.kt)("p",null,"\u76d2\u5b50\u6a21\u578b\u662f\u6307\u5728\u7f51\u9875\u5e03\u5c40\u4e2d\uff0c\u6bcf\u4e2a\u5143\u7d20\u88ab\u770b\u505a\u662f\u4e00\u4e2a\u77e9\u5f62\u7684\u76d2\u5b50\uff0c\u8fd9\u4e2a\u76d2\u5b50\u5305\u542b\u4e86\u5143\u7d20\u7684\u5185\u5bb9\u3001\u5185\u8fb9\u8ddd\u3001\u8fb9\u6846\u548c\u5916\u8fb9\u8ddd\u3002\u76d2\u5b50\u6a21\u578b\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u8fdb\u884c\u7f51\u9875\u5e03\u5c40\u8bbe\u8ba1\u3002"),(0,a.kt)("p",null,"\u76d2\u5b50\u6a21\u578b\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5185\u5bb9\u533a\u57df\uff1a\u5373\u5143\u7d20\u7684\u5b9e\u9645\u5185\u5bb9\uff0c\u5305\u62ec\u6587\u672c\u3001\u56fe\u7247\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5185\u8fb9\u8ddd\uff1a\u6307\u5143\u7d20\u5185\u5bb9\u533a\u57df\u548c\u8fb9\u6846\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u4e00\u822c\u7528\u6765\u63a7\u5236\u5143\u7d20\u5185\u5bb9\u4e0e\u8fb9\u6846\u7684\u8ddd\u79bb\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fb9\u6846\uff1a\u5305\u56f4\u5185\u5bb9\u548c\u5185\u8fb9\u8ddd\u7684\u7ebf\u6761\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8fb9\u6846\u7684\u6837\u5f0f\u3001\u989c\u8272\u548c\u7c97\u7ec6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5916\u8fb9\u8ddd\uff1a\u6307\u5143\u7d20\u8fb9\u6846\u548c\u76f8\u90bb\u5143\u7d20\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u4e00\u822c\u7528\u6765\u63a7\u5236\u5143\u7d20\u4e0e\u76f8\u90bb\u5143\u7d20\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002")),(0,a.kt)("h2",{id:"2-\u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898"},"2. \u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898"),(0,a.kt)("h3",{id:"21-\u4e0d\u540c\u7684\u76d2\u5b50\u6a21\u578b\u6a21\u5f0f"},"2.1 \u4e0d\u540c\u7684\u76d2\u5b50\u6a21\u578b\u6a21\u5f0f"),(0,a.kt)("p",null,"\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u5b9a\u4e49\u4e86\u4e24\u4e2a\u533a\u57dfmain\u548caside\uff0c\u5e76\u5206\u522b\u8bbe\u7f6e\u4e86\u5b83\u4eec\u7684\u5bbd\u5ea6\u4e3a70%\u548c30%\u3002\u4f46\u662f\u8fd9\u4e24\u4e2a\u533a\u57df\u5e76\u6ca1\u6709\u6392\u5217\u5728\u4e00\u884c\uff0caside\u533a\u57df\u88ab\u6324\u5230\u4e0b\u9762\u4e00\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<head>\n  <style>\n    body {\n      background-color: #eee;\n      font-family: Helvetica, Arial, sans-serif;\n    }\n\n    header {\n      color: #fff;\n      background-color: #0072b0;\n      border-radius: .5em;\n    }\n\n    .main {\n      float: left;\n      width: 70%;\n      background-color: #fff;\n      border-radius: .5em;\n    }\n\n    .sidebar {\n      float: left;\n      width: 30%;\n      padding: 1.5em;\n      background-color: #fff;\n      border-radius: .5em;\n    }\n\n  </style>\n</head>\n\n<body>\n  <header>\n    <h1>Franklin Running Club</h1>\n  </header>\n  <div class="container">\n    <main class="main">\n      <h2>Come join us!</h2>\n      <p>\n        The Franklin Running club meets at 6:00pm every Thursday\n        at the town square. Runs are three to five miles, at your\n        own pace.\n      </p>\n    </main>\n    <aside class="sidebar">\n      <div class="widget"></div>\n      <div class="widget"></div>\n      <div class="gizmo"></div>\n    </aside>\n  </div>\n</body>\n')),(0,a.kt)("p",null,"\u76d2\u5b50\u6a21\u578b\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u662f\u6307\u5185\u5bb9\u533a\u57df\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff0c\u4f46\u662f\u5982\u679c\u7ed9\u5143\u7d20\u8bbe\u7f6e\u4e86\u5185\u8fb9\u8ddd\u3001\u8fb9\u6846\u6216\u5916\u8fb9\u8ddd\uff0c\u90a3\u4e48\u5143\u7d20\u7684\u5b9e\u9645\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u4f1a\u6bd4\u5185\u5bb9\u533a\u57df\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u66f4\u5927\u3002\u9ed8\u8ba4\u6a21\u5f0f\u7684\u76d2\u5b50\u6a21\u578b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1.png",src:t(978).Z,width:"665",height:"502"})),(0,a.kt)("p",null,"\u5728 CSS \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 box-sizing \u5c5e\u6027\u6765\u8bbe\u7f6e\u76d2\u5b50\u6a21\u578b\u7684\u6a21\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cbox-sizing \u5c5e\u6027\u7684\u503c\u4e3a content-box\uff0c\u8868\u793a\u5143\u7d20\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u53ea\u5305\u62ec\u5185\u5bb9\u533a\u57df\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002\u5982\u679c\u5c06 box-sizing \u5c5e\u6027\u7684\u503c\u8bbe\u7f6e\u4e3a border-box\uff0c\u90a3\u4e48\u5143\u7d20\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u5c06\u5305\u62ec\u5185\u5bb9\u533a\u57df\u3001\u5185\u8fb9\u8ddd\u548c\u8fb9\u6846\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff0c\u800c\u5916\u8fb9\u8ddd\u4e0d\u4f1a\u8ba1\u5165\u5143\u7d20\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002"),(0,a.kt)("p",null,"border-box\u6a21\u5f0f\u7684\u76d2\u5b50\u6a21\u578b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"2.png",src:t(8411).Z,width:"738",height:"560"})),(0,a.kt)("h3",{id:"22-\u89e3\u51b3\u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898"},"2.2 \u89e3\u51b3\u5143\u7d20\u5bbd\u5ea6\u7684\u95ee\u9898"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u8ff0\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u89e3\u51b3\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06\u76d2\u5b50\u6a21\u578b\u7684\u6a21\u5f0f\u8bbe\u7f6e\u4e3aborder-box\u3002\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".main {\n    box-sizing: border-box;\n    float: left;\n    width: 70%;\n    background-color: #fff;\n    border-radius: .5em;\n}\n.sidebar {\n    box-sizing: border-box;\n    float: left;\n    width: 30%;\n    padding: 1.5em;\n    background-color: #fff;\n    border-radius: .5em;\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528calc()\u7cbe\u786e\u8ba1\u7b97\u9ed8\u8ba4\u6a21\u5f0f\u4e0b\u7684\u5bbd\u5ea6\u3002\u4ee3\u7801\u5982\u4e0b\u6240\u793a:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".main {\n    float: left;\n    width: 70%;\n    background-color: #fff;\n    border-radius: .5em;\n}\n.sidebar {\n    float: left;\n    width: calc(30% - 3em);\n    padding: 1.5em;\n    background-color: #fff;\n    border-radius: .5em;\n}\n")),(0,a.kt)("h3",{id:"23-\u5168\u5c40\u4fee\u6539\u76d2\u5b50\u6a21\u578b"},"2.3 \u5168\u5c40\u4fee\u6539\u76d2\u5b50\u6a21\u578b"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4fee\u6539\u76d2\u5b50\u6a21\u578b\u7684\u65b9\u5f0f\u867d\u7136\u7ed3\u679c\u594f\u6548\u4e86\u3002\u4f46\u662f\u5bf9\u4e8e\u6bcf\u4e2a\u5143\u7d20\u90fd\u8981\u5355\u72ec\u53bb\u8bbe\u7f6e\u5c5e\u5b9e\u9ebb\u70e6\uff0c\u56e0\u6b64\u53ef\u4ee5\u8003\u8651\u5168\u5c40\u8bbe\u7f6e\u76d2\u5b50\u6a21\u578b\u3002\u4f7f\u7528\u4e0b\u8ff0\u4ee3\u7801\u53ef\u4ee5\u5168\u5c40\u4fee\u6539\u76d2\u5b50\u6a21\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"*,\n::before,\n::after {\n    box-sizing: inherit;\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u505a\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u4f1a\u8986\u76d6\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u5e93\u7684\u76d2\u5b50\u6a21\u578b\u7684\u6a21\u5f0f\uff0c\u4ece\u800c\u5bfc\u81f4\u610f\u5916\u7684\u6837\u5f0f\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c06\u4e0a\u8ff0\u4ee3\u7801\u505a\u5982\u4e0b\u4fee\u6539\uff0c\u5229\u7528\u7ee7\u627f\u5c5e\u6027\u6765\u8bbe\u7f6e\u76d2\u5b50\u6a21\u578b\u3002\u81ea\u5df1\u5199\u7684\u5143\u7d20\u7684\u76d2\u5b50\u6a21\u578b\u7684\u6a21\u5f0f\u6c47\u96c6\u6210\u6839\u5143\u7d20\u7684\u6837\u5f0fborder-box\u3002\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u7684\u76d2\u5b50\u6a21\u578b\u7684\u6a21\u5f0f\u5373\u6210\u5b83\u81ea\u5df1\u7684box-sizing\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  box-sizing: border-box;\n}\n\n*,\n::before,\n::after {\n  box-sizing: inherit;\n}\n")),(0,a.kt)("h2",{id:"3-\u5143\u7d20\u9ad8\u5ea6\u7684\u95ee\u9898"},"3. \u5143\u7d20\u9ad8\u5ea6\u7684\u95ee\u9898"),(0,a.kt)("p",null,"\u5173\u4e8e\u5143\u7d20\u7684\u9ad8\u5ea6\u7684\u5904\u7406\u539f\u5219\u662f\uff1a\u6700\u597d\u907f\u514d\u7ed9\u5143\u7d20\u6307\u5b9a\u660e\u786e\u7684\u9ad8\u5ea6\uff0c\u800c\u662f\u8ba9\u5bb9\u5668\u7684\u9ad8\u5ea6\u7531\u5185\u5bb9\u5929\u7136\u51b3\u5b9a"),(0,a.kt)("h3",{id:"31-\u6ea2\u51fa\u884c\u4e3a"},"3.1 \u6ea2\u51fa\u884c\u4e3a"),(0,a.kt)("p",null,"\u5f53\u660e\u786e\u8bbe\u7f6e\u4e00\u4e2a\u5143\u7d20\u7684\u9ad8\u5ea6\u65f6\uff0c\u5185\u5bb9\u53ef\u80fd\u4f1a\u6ea2\u51fa\u5bb9\u5668\u3002\u7528overflow\u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u6ea2\u51fa\u5185\u5bb9\u7684\u884c\u4e3a\uff0c\u8be5\u5c5e\u6027\u652f\u6301\u4ee5\u4e0b4\u4e2a\u503c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"visible\uff08\u9ed8\u8ba4\u503c\uff09\u2014\u2014\u6240\u6709\u5185\u5bb9\u53ef\u89c1\uff0c\u5373\u4f7f\u6ea2\u51fa\u5bb9\u5668\u8fb9\u7f18\u3002"),(0,a.kt)("li",{parentName:"ul"},"hidden\u2014\u2014\u6ea2\u51fa\u5bb9\u5668\u5185\u8fb9\u8ddd\u8fb9\u7f18\u7684\u5185\u5bb9\u88ab\u88c1\u526a\uff0c\u65e0\u6cd5\u770b\u89c1\u3002"),(0,a.kt)("li",{parentName:"ul"},"scroll\u2014\u2014\u5bb9\u5668\u51fa\u73b0\u6eda\u52a8\u6761\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6eda\u52a8\u67e5\u770b\u5269\u4f59\u5185\u5bb9\u3002\u5728\u4e00\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u4e0a\uff0c\u4f1a\u51fa\u73b0\u6c34\u5e73\u548c\u5782\u76f4\u4e24\u79cd\u6eda\u52a8\u6761\uff0c\u5373\u4f7f\u6240\u6709\u5185\u5bb9\u90fd\u53ef\u89c1\uff08\u4e0d\u6ea2\u51fa\uff09\u3002\u4e0d\u8fc7\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6eda\u52a8\u6761\u4e0d\u53ef\u6eda\u52a8\uff08\u7f6e\u7070\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"auto\u2014\u2014\u53ea\u6709\u5185\u5bb9\u6ea2\u51fa\u65f6\u5bb9\u5668\u624d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761\u3002")),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\u4f1a\u9009\u62e9\u4f7f\u7528auto\u800c\u4e0d\u662fscroll\u3002\u6d4f\u89c8\u5668\u9ed8\u8ba4\u5730\u7ed9\u7f51\u9875\u6700\u5916\u5c42\u52a0\u4e0a\u4e86\u6eda\u52a8\u6761\uff0c\u56e0\u6b64\u9700\u8981\u8c28\u614e\u5730\u4f7f\u7528\u6eda\u52a8\u6761"),(0,a.kt)("h3",{id:"32-\u8bbe\u7f6e\u767e\u5206\u6bd4\u9ad8\u5ea6\u7684\u65b9\u6848"},"3.2 \u8bbe\u7f6e\u767e\u5206\u6bd4\u9ad8\u5ea6\u7684\u65b9\u6848"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"%\u548cvh"),"\uff1a\u4f7f\u7528%\u53ef\u4ee5\u8bbe\u7f6e\u5f53\u524d\u5143\u7d20\u76f8\u5bf9\u4e8e\u7236\u5143\u7d20\u7684\u9ad8\u5ea6\u767e\u5206\u6bd4\uff0c\u4f7f\u7528vh\u53ef\u4ee5\u8bbe\u7f6e\u5f53\u524d\u5143\u7d20\u76f8\u5bf9\u4e8e\u89c6\u7a97\u7684\u9ad8\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"css\u8868\u683c\uff1a"),"\u4f7f\u7528CSS\u8868\u683c\u5e03\u5c40\u66ff\u4ee3\u6d6e\u52a8\u5e03\u5c40\u53ef\u4ee5\u5b9e\u73b0\u7b49\u9ad8\u5217\u7684\u6548\u679c\u3002\u9700\u8981\u7ed9\u7236\u5143\u7d20display\u8bbe\u7f6e\u4e3atable\uff0c\u6bcf\u4e2a\u5b50\u5143\u7d20display\u8bbe\u7f6e\u4e3atable-cell\u3002\u6bcf\u4e2a\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u8ddd\u5728\u7236\u5143\u7d20\u4e2d\u8bbe\u7f6eborder-spacing\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  display: table;\n    width: 100%;\n  border-spacing: 1.5em 0;\n}\n\n.main {\n  display: table-cell;\n  width: 70%;\n  background-color: #fff;\n  border-radius: .5em;\n}\n\n.sidebar {\n  display: table-cell;\n  width: 30%;\n  padding: 1.5em;\n  background-color: #fff;\n  border-radius: .5em;\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u505a\u4f1a\u5bfc\u81f4\u7236\u5143\u7d20\u591a\u51fa\u4e00\u4e2a\u5de6\u5185\u8fb9\u8ddd\u548c\u53f3\u5916\u8fb9\u8ddd\uff01\u8fd9\u4e2a\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u4e00\u4e2adiv\u5305\u88f9\u7236\u5143\u7d20\uff0c\u5e76\u8bbe\u7f6e\u8be5div\u7684\u8d1f\u5916\u8fb9\u8ddd\u6765\u89e3\u51b3\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"3.png",src:t(2296).Z,width:"829",height:"229"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"flex"),"\u5e03\u5c40\uff1a\u4f7f\u7528Flexbox\u5b9e\u73b0\u4e24\u5217\u7b49\u9ad8\u5e03\u5c40\u3002Flexbox\u9ed8\u8ba4\u4f1a\u4ea7\u751f\u7b49\u9ad8\u7684\u5143\u7d20\u3002")),(0,a.kt)("h3",{id:"33-min-height\u548cmax-height"},"3.3 min-Height\u548cmax-Height"),(0,a.kt)("p",null,"\u53ef\u4ee5\u7528\u8fd9\u4e24\u4e2a\u5c5e\u6027\u6307\u5b9a\u6700\u5c0f\u6216\u6700\u5927\u503c\uff0c\u800c\u4e0d\u662f\u660e\u786e\u5b9a\u4e49\u9ad8\u5ea6\uff0c\u8fd9\u6837\u5143\u7d20\u5c31\u53ef\u4ee5\u5728\u8fd9\u4e9b\u754c\u9650\u5185\u81ea\u52a8\u51b3\u5b9a\u9ad8\u5ea6\u3002"),(0,a.kt)("h3",{id:"34-\u5782\u76f4\u5c45\u4e2d"},"3.4 \u5782\u76f4\u5c45\u4e2d"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5782\u76f4\u5c45\u4e2d\u6709\u5f88\u591a\u79cd\u65b9\u6848\uff0c\u4e00\u822c\u89c6\u60c5\u51b5\u51b3\u5b9a\u4f7f\u7528\u90a3\u79cd\u65b9\u6cd5\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u81ea\u7136\u9ad8\u5ea6\u7684\u5bb9\u5668\uff1a\u7ed9\u5bb9\u5668\u76f8\u7b49\u7684\u4e0a\u4e0b\u5185\u8fb9\u8ddd\uff0c\u8ba9\u5bb9\u5668\u548c\u5185\u5bb9\u81ea\u884c\u51b3\u5b9a\u81ea\u5df1\u7684\u9ad8\u5ea6\u3002\u4e0d\u7ba1\u5bb9\u5668\u91cc\u7684\u5185\u5bb9\u663e\u793a\u4e3a\u884c\u5185\u3001\u5757\u7ea7\u6216\u8005\u5176\u4ed6\u5f62\u5f0f\uff0c\u8fd9\u79cd\u65b9\u6cd5\u90fd\u6709\u6548\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bb9\u5668\u9700\u8981\u6307\u5b9a\u9ad8\u5ea6\u6216\u8005\u907f\u514d\u4f7f\u7528\u5185\u8fb9\u8ddd\uff1a\u5bf9\u5bb9\u5668\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"display: table-cell"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"vertical-align: middle")),(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u652f\u6301flexbox\uff1a\u4f7f\u7528flex\u5e03\u5c40\u6765\u5c45\u4e2d\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bb9\u5668\u91cc\u9762\u7684\u5185\u5bb9\u53ea\u6709\u4e00\u884c\u6587\u5b57\uff1a\u7ed9\u6587\u5b57\u8bbe\u7f6e\u4e00\u4e2a\u884c\u9ad8\uff0c\u4f7f\u5176\u7b49\u4e8e\u5bb9\u5668\u7684\u9ad8\u5ea6\u3002\u5982\u679c\u5185\u5bb9\u4e0d\u662f\u884c\u5185\u5143\u7d20\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3ainline-block\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u77e5\u9053\u5bb9\u5668\u7684\u9ad8\u5ea6\uff1a\u4f7f\u7528\u7edd\u5bf9\u5b9a\u4f4d\u3002\u5982\u679c\u4e0d\u77e5\u9053\u91cc\u9762\u5185\u5bb9\u7684\u9ad8\u5ea6\uff0c\u53ef\u4ee5\u7ed3\u5408transformY(50%)\u6765\u8c03\u6574\u5782\u76f4\u5c45\u4e2d\u3002")),(0,a.kt)("h2",{id:"4-\u8d1f\u5916\u8fb9\u8ddd"},"4. \u8d1f\u5916\u8fb9\u8ddd"),(0,a.kt)("p",null,"\u8d1f\u5916\u8fb9\u8ddd\u6709\u4e00\u4e9b\u7279\u6b8a\u7528\u9014\uff0c\u6bd4\u5982\u8ba9\u5143\u7d20\u91cd\u53e0\u6216\u8005\u62c9\u4f38\u5230\u6bd4\u5bb9\u5668\u8fd8\u5bbd\u3002"),(0,a.kt)("p",null,"\u8d1f\u5916\u8fb9\u8ddd\u7684\u5177\u4f53\u884c\u4e3a\u53d6\u51b3\u4e8e\u8bbe\u7f6e\u5728\u5143\u7d20\u7684\u54ea\u8fb9\u3002\u5982\u679c\u8bbe\u7f6e\u5de6\u8fb9\u6216\u9876\u90e8\u7684\u8d1f\u5916\u8fb9\u8ddd\uff0c\u5143\u7d20\u5c31\u4f1a\u76f8\u5e94\u5730\u5411\u5de6\u6216\u5411\u4e0a\u79fb\u52a8\uff0c\u5bfc\u81f4\u5143\u7d20\u4e0e\u5b83\u524d\u9762\u7684\u5143\u7d20\u91cd\u53e0\uff0c\u5982\u679c\u8bbe\u7f6e\u53f3\u8fb9\u6216\u8005\u5e95\u90e8\u7684\u8d1f\u5916\u8fb9\u8ddd\uff0c\u5e76\u4e0d\u4f1a\u79fb\u52a8\u5143\u7d20\uff0c\u800c\u662f\u5c06\u5b83\u540e\u9762\u7684\u5143\u7d20\u62c9\u8fc7\u6765\u3002\u7ed9\u5143\u7d20\u5e95\u90e8\u52a0\u4e0a\u8d1f\u5916\u8fb9\u8ddd\u5e76\u4e0d\u7b49\u540c\u4e8e\u7ed9\u5b83\u4e0b\u9762\u7684\u5143\u7d20\u9876\u90e8\u52a0\u4e0a\u8d1f\u5916\u8fb9\u8ddd\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"4.png",src:t(4320).Z,width:"1280",height:"498"})),(0,a.kt)("p",null,"\u8d1f\u5916\u8fb9\u8ddd\u5e76\u4e0d\u5e38\u7528\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u5f88\u5b9e\u7528\uff0c\u5c24\u5176\u662f\u5f53\u521b\u5efa\u5217\u5e03\u5c40\u7684\u65f6\u5019\u3002\u4e0d\u8fc7\u5e94\u5f53\u907f\u514d\u9891\u7e41\u4f7f\u7528\uff0c\u4e0d\u7136\u7f51\u9875\u7684\u6837\u5f0f\u5c31\u4f1a\u5931\u63a7\u3002"),(0,a.kt)("h2",{id:"5-\u5916\u8fb9\u8ddd\u6298\u53e0"},"5. \u5916\u8fb9\u8ddd\u6298\u53e0"),(0,a.kt)("p",null,"\u5f53\u4e24\u4e2a\u5143\u7d20\u7684\u4e0a\u4e0b\u5916\u8fb9\u8ddd\u76f8\u90bb\u65f6\uff0c\u5c31\u4f1a\u91cd\u53e0\uff0c\u4ea7\u751f\u5355\u4e2a\u5916\u8fb9\u8ddd\u3002\u8fd9\u79cd\u73b0\u8c61\u88ab\u79f0\u4f5c\u6298\u53e0\u3002"),(0,a.kt)("h3",{id:"51-\u6587\u5b57\u6298\u53e0"},"5.1 \u6587\u5b57\u6298\u53e0"),(0,a.kt)("p",null,"\u5916\u8fb9\u8ddd\u6298\u53e0\u7684\u4e3b\u8981\u539f\u56e0\u4e0e\u5305\u542b\u6587\u5b57\u7684\u5757\u4e4b\u95f4\u7684\u95f4\u9694\u76f8\u5173\u3002\u4f8b\u5982\u6807\u7b7e",(0,a.kt)("inlineCode",{parentName:"p"},"<p>"),"\u9ed8\u8ba4\u67091em\u7684\u4e0a\u4e0b\u5916\u8fb9\u8ddd\uff0c\u4f46\u662f\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"<p>"),"\u6807\u7b7e\u4e4b\u95f4\u7684\u5782\u76f4\u7f16\u5267\u5e76\u6ca1\u67092em\u800c\u662f1em\u3002\u8fd9\u5c31\u662f\u5916\u8fb9\u8ddd\u6298\u53e0\uff0c\u5b83\u662f\u6d4f\u89c8\u5668\u9ed8\u8ba4\u7684\u6837\u5f0f\u3002"),(0,a.kt)("p",null,"\u6298\u53e0\u5916\u8fb9\u8ddd\u7684\u5927\u5c0f\u7b49\u4e8e\u76f8\u90bb\u5916\u8fb9\u8ddd\u4e2d\u7684\u6700\u5927\u503c\u3002"),(0,a.kt)("h3",{id:"52-\u591a\u4e2a\u5916\u8fb9\u8ddd\u6298\u53e0"},"5.2 \u591a\u4e2a\u5916\u8fb9\u8ddd\u6298\u53e0"),(0,a.kt)("p",null,"\u5373\u4f7f\u4e24\u4e2a\u5143\u7d20\u4e0d\u662f\u76f8\u90bb\u7684\u5144\u5f1f\u8282\u70b9\u4e5f\u4f1a\u4ea7\u751f\u5916\u8fb9\u8ddd\u6298\u53e0\u3002\u5373\u4f7f\u5c06\u8fd9\u4e2a\u6bb5\u843d\u7528\u4e00\u4e2a\u989d\u5916\u7684div\u5305\u88f9\u8d77\u6765\uff0c\u5728\u6ca1\u6709\u5176\u4ed6CSS\u7684\u5f71\u54cd\u4e0b\uff0c\u6240\u6709\u76f8\u90bb\u7684\u9876\u90e8\u548c\u5e95\u90e8\u5916\u8fb9\u8ddd\u90fd\u4f1a\u6298\u53e0\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u76f8\u90bb\u7684\u9876\u90e8\u548c\u5e95\u90e8\u5916\u8fb9\u8ddd\u4f1a\u6298\u53e0\u5230\u4e00\u8d77\u3002\u5982\u679c\u5728\u9875\u9762\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7a7a\u7684\u3001\u65e0\u6837\u5f0f\u7684div\uff08\u6ca1\u6709\u9ad8\u5ea6\u3001\u8fb9\u6846\u548c\u5185\u8fb9\u8ddd\uff09\uff0c\u5b83\u81ea\u5df1\u7684\u9876\u90e8\u548c\u5e95\u90e8\u5916\u8fb9\u8ddd\u5c31\u4f1a\u6298\u53e0\u3002"),(0,a.kt)("p",null,"\u53ea\u6709\u4e0a\u4e0b\u5916\u8fb9\u8ddd\u4f1a\u4ea7\u751f\u6298\u53e0\uff0c\u5de6\u53f3\u5916\u8fb9\u8ddd\u4e0d\u4f1a\u6298\u53e0\u3002"),(0,a.kt)("h3",{id:"53-\u9632\u6b62\u5916\u8fb9\u8ddd\u6298\u53e0"},"5.3 \u9632\u6b62\u5916\u8fb9\u8ddd\u6298\u53e0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u5bb9\u5668\u4f7f\u7528overflow: auto\uff08\u6216\u8005\u975evisible\u7684\u503c\uff09\uff0c\u9632\u6b62\u5185\u90e8\u5143\u7d20\u7684\u5916\u8fb9\u8ddd\u8ddf\u5bb9\u5668\u5916\u90e8\u7684\u5916\u8fb9\u8ddd\u6298\u53e0\u3002\u8fd9\u79cd\u65b9\u5f0f\u526f\u4f5c\u7528\u6700\u5c0f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e24\u4e2a\u5916\u8fb9\u8ddd\u4e4b\u95f4\u52a0\u4e0a\u8fb9\u6846\u6216\u8005\u5185\u8fb9\u8ddd\uff0c\u9632\u6b62\u5b83\u4eec\u6298\u53e0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5bb9\u5668\u4e3a\u6d6e\u52a8\u5143\u7d20\u3001\u5185\u8054\u5757\u3001\u7edd\u5bf9\u5b9a\u4f4d\u6216\u56fa\u5b9a\u5b9a\u4f4d\u65f6\uff0c\u5916\u8fb9\u8ddd\u4e0d\u4f1a\u5728\u5b83\u5916\u9762\u6298\u53e0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u4f7f\u7528Flexbox\u5e03\u5c40\u65f6\uff0c\u5f39\u6027\u5e03\u5c40\u5185\u7684\u5143\u7d20\u4e4b\u95f4\u4e0d\u4f1a\u53d1\u751f\u5916\u8fb9\u8ddd\u6298\u53e0\u3002\u7f51\u683c\u5e03\u5c40\uff08\u53c2\u89c1\u7b2c6\u7ae0\uff09\u540c\u7406\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u5143\u7d20\u663e\u793a\u4e3atable-cell\u65f6\u4e0d\u5177\u5907\u5916\u8fb9\u8ddd\u5c5e\u6027\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u4f1a\u6298\u53e0\u3002\u6b64\u5916\u8fd8\u6709table-row\u548c\u5927\u90e8\u5206\u5176\u4ed6\u8868\u683c\u663e\u793a\u7c7b\u578b\uff0c\u4f46\u4e0d\u5305\u62ectable\u3001table-inline\u3001table-caption\u3002")),(0,a.kt)("h2",{id:"6-\u5bb9\u5668\u5185\u7684\u5143\u7d20\u95f4\u8ddd"},"6. \u5bb9\u5668\u5185\u7684\u5143\u7d20\u95f4\u8ddd"),(0,a.kt)("h3",{id:"61-\u4f7f\u7528\u76f8\u90bb\u5144\u5f1f\u7ec4\u5408\u5668\u6dfb\u52a0\u5916\u8fb9\u8ddd"},"6.1 \u4f7f\u7528\u76f8\u90bb\u5144\u5f1f\u7ec4\u5408\u5668\u6dfb\u52a0\u5916\u8fb9\u8ddd"),(0,a.kt)("p",null,"\u6bd4\u5982\u8981\u7ed9\u4fa7\u8fb9\u680f\u91cc\u7684\u6309\u94ae\u5143\u7d20\u6dfb\u52a0\u4e0a\u4e0b\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002\u5982\u679c\u5355\u72ec\u7ed9\u6bcf\u4e00\u4e2aa\u6807\u7b7e\u6dfb\u52a0\u6837\u5f0f\u663e\u7136\u4e0d\u592a\u5408\u7406\u3002\u7ed9\u5b83\u4eec\u4e00\u4e2a\u7c7b\u540d\u7edf\u4e00\u8bbe\u7f6emargin-top\u6216\u8005margin-bottom\u7684\u8bdd\u4f1a\u5bfc\u81f4\u7b2c\u4e00\u4e2a\u5143\u7d20\u6216\u8005\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u6709\u4e00\u4e2a\u5916\u8fb9\u8ddd\u3002"),(0,a.kt)("p",null,"\u6700\u597d\u7684\u505a\u6cd5\u662f\u4f7f\u7528\u76f8\u90bb\u5144\u5f1f\u7ec4\u5408\u5668\u6dfb\u52a0\u5916\u8fb9\u8ddd\u3002\u4ee3\u7801\u5982\u4e0b\uff0c\u8fd9\u6837\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5c31\u4e0d\u4f1a\u6709\u4e0b\u5916\u8fb9\u8ddd\u4e86\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".button-link + .button-link {\n  margin-top: 1.5em;\n}\n")),(0,a.kt)("h3",{id:"62-\u732b\u5934\u9e70\u9009\u62e9\u5668"},"6.2 \u732b\u5934\u9e70\u9009\u62e9\u5668"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u505a\u6cd5\u53ea\u9002\u5408\u591a\u4e2a\u76f8\u540c\u7c7b\u540d\u7684\u5143\u7d20\u3002\u5982\u679c\u5bb9\u5668\u5185\u6709\u4e0d\u540c\u7c7b\u540d\u7684\u5143\u7d20\u7684\u8bdd\uff0c\u4e0a\u8ff0\u65b9\u6cd5\u5c31\u4e0d\u53ef\u884c\u4e86\u3002\u4f8b\u5982\u4e0b\u9762\u6dfb\u52a0\u4e86\u4e00\u4e2a\u4e0d\u540c\u7c7b\u540d\u7684\u6807\u7b7e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<aside class="sidebar">\n  <a href="/twitter" class="button-link">\n    follow us on Twitter\n  </a>\n  <a href="/facebook" class="button-link">\n    like us on Facebook\n  </a>\n    <a href="/sponsors" class="sponsor-link">\n    become a sponsor\n  </a>\n</aside>\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u66f4\u901a\u7528\u7684\u65b9\u6848\u2014\u732b\u5934\u9e70\u9009\u62e9\u5668\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"* + *"),"\u3002\u5b83\u5c06\u7c7b\u540d\u66ff\u6362\u6210\u4e86\u901a\u914d\u7b26\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5bb9\u5668\u5185\u5143\u7d20\u95f4\u8ddd\u3002\n\u4f7f\u7528\u732b\u5934\u9e70\u9009\u62e9\u5668\u662f\u9700\u8981\u6743\u8861\u7684\u3002\u5b83\u7701\u53bb\u4e86\u8bb8\u591a\u7684\u9700\u8981\u8bbe\u7f6e\u5916\u8fb9\u8ddd\u7684\u5730\u65b9\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u4e0d\u60f3\u52a0\u5916\u8fb9\u8ddd\u7684\u5730\u65b9\u5219\u9700\u8981\u8986\u76d6\u3002\u4e00\u822c\u5728\u5f00\u53d1\u4e2d\u53ef\u4ee5\u4f7f\u7528css module\u65b9\u6848\u6765\u9694\u79bb\u5404\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u6837\u5f0f\u6c61\u67d3\u6765\u907f\u514d\u3002"))}c.isMDXComponent=!0},978:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/1-aa1f5271e2898c54b6b546e071cb458b.png"},8411:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/2-a0284778dfc029443ea401a693cda301.png"},2296:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/3-41290ef25171a96bdb0e0446c413d7d0.png"},4320:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/4-ad45c1d08f8a170280425cbea672167b.png"}}]);