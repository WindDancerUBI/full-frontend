"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[239],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var d=a.createContext({}),s=function(n){var e=a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=s(n.components);return a.createElement(d.Provider,{value:e},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,d=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),u=s(t),m=i,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(h,r(r({ref:e},c),{},{components:t})):a.createElement(h,r({ref:e},c))}));function h(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=n,o[u]="string"==typeof n?n:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2156:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const l={sidebar_position:4,tags:["CSS"]},r="\u56db\u3001\u6d6e\u52a8",o={unversionedId:"tutorial/css/float/index",id:"tutorial/css/float/index",title:"\u56db\u3001\u6d6e\u52a8",description:"1 \u6d6e\u52a8\u8bbe\u8ba1\u7684\u521d\u8877",source:"@site/docs/tutorial/css/4-float/index.mdx",sourceDirName:"tutorial/css/4-float",slug:"/tutorial/css/float/",permalink:"/full-frontend/docs/tutorial/css/float/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/css/4-float/index.mdx",tags:[{label:"CSS",permalink:"/full-frontend/docs/tags/css"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["CSS"]},sidebar:"tutorialSidebar",previous:{title:"\u4e09\u3001\u76d2\u5b50\u6a21\u578b",permalink:"/full-frontend/docs/tutorial/css/box-model/"},next:{title:"\u4e94\u3001FlexBox",permalink:"/full-frontend/docs/tutorial/css/flexbox/"}},d={},s=[{value:"1 \u6d6e\u52a8\u8bbe\u8ba1\u7684\u521d\u8877",id:"1-\u6d6e\u52a8\u8bbe\u8ba1\u7684\u521d\u8877",level:2},{value:"2 \u7406\u89e3\u6d6e\u52a8\u7684\u673a\u5236",id:"2-\u7406\u89e3\u6d6e\u52a8\u7684\u673a\u5236",level:2},{value:"2.1 \u6e05\u9664\u6d6e\u52a8",id:"21-\u6e05\u9664\u6d6e\u52a8",level:3},{value:"2.2 \u6d6e\u52a8\u9677\u9631",id:"22-\u6d6e\u52a8\u9677\u9631",level:3},{value:"3 BFC",id:"3-bfc",level:2},{value:"3.1 \u8131\u79bb\u6587\u6863\u6d41",id:"31-\u8131\u79bb\u6587\u6863\u6d41",level:3},{value:"3.2 BFC",id:"32-bfc",level:3},{value:"4 \u7f51\u683c\u7cfb\u7edf",id:"4-\u7f51\u683c\u7cfb\u7edf",level:2},{value:"4.1 \u7406\u89e3\u7f51\u683c\u7cfb\u7edf",id:"41-\u7406\u89e3\u7f51\u683c\u7cfb\u7edf",level:3},{value:"4.2 \u6784\u5efa\u7f51\u683c\u7cfb\u7edf",id:"42-\u6784\u5efa\u7f51\u683c\u7cfb\u7edf",level:3}],c={toc:s},u="wrapper";function p(n){let{components:e,...l}=n;return(0,i.kt)(u,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u56db\u6d6e\u52a8"},"\u56db\u3001\u6d6e\u52a8"),(0,i.kt)("h2",{id:"1-\u6d6e\u52a8\u8bbe\u8ba1\u7684\u521d\u8877"},"1 \u6d6e\u52a8\u8bbe\u8ba1\u7684\u521d\u8877"),(0,i.kt)("p",null,"\u6d6e\u52a8\u7684\u521d\u8877\u662f\u4e3a\u4e86\u5b9e\u73b0\u56fe\u6587\u6df7\u6392\u7684\u6548\u679c\u3002\u901a\u8fc7\u5c06\u67d0\u4e2a\u5143\u7d20\u8bbe\u7f6e\u4e3a\u6d6e\u52a8\uff0c\u53ef\u4ee5\u8ba9\u5b83\u8131\u79bb\u6587\u6863\u6d41\uff0c\u4ece\u800c\u5b9e\u73b0\u6587\u5b57\u73af\u7ed5\u7684\u6548\u679c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:t(644).Z,width:"816",height:"459"})),(0,i.kt)("p",null,"\u6700\u521d\u521b\u9020\u6d6e\u52a8\u4e0d\u662f\u4e3a\u4e86\u9875\u9762\u5e03\u5c40\u3002\u73b0\u5728\u5e38\u7528\u7684flexbox\u5e03\u5c40\u548c\u7f51\u683c\u5e03\u5c40\u5728css\u65e9\u671f\u90fd\u662f\u6ca1\u6709\u7684\uff0c\u56e0\u6b64\u5f53\u65f6\u6d6e\u52a8\u5145\u5f53\u4e86\u5e03\u5c40\u7684\u4f5c\u7528\u3002\u5982\u4eca\u91c7\u7528\u6d6e\u52a8\u6765\u8fdb\u884c\u5e03\u5c40\u663e\u7136\u4e0d\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u9664\u975e\u662f\u4e3a\u4e86\u517c\u5bb9\u8001\u65e7\u7684\u6d4f\u89c8\u5668\u3002"),(0,i.kt)("h2",{id:"2-\u7406\u89e3\u6d6e\u52a8\u7684\u673a\u5236"},"2 \u7406\u89e3\u6d6e\u52a8\u7684\u673a\u5236"),(0,i.kt)("p",null,"\u6d6e\u52a8\u7684\u521d\u8877\u662f\u4e3a\u4e86\u5b9e\u73b0\u56fe\u6587\u6df7\u6392\uff0c\u5982\u679c\u4e0d\u7406\u89e3\u6d6e\u52a8\u7684\u673a\u5236\u5c31\u91c7\u7528\u6d6e\u52a8\u8fdb\u884c\u5e03\u5c40\uff0c\u53ef\u80fd\u4f1a\u4ea7\u751f\u610f\u60f3\u4e0d\u5230\u7684bug\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<head>\n  <style>\n    :root {\n      box-sizing: border-box;\n    }\n\n    *,\n    ::before,\n    ::after {\n      box-sizing: inherit;\n    }\n\n    body {\n      background-color: #eee;\n      font-family: Helvetica, Arial, sans-serif;\n    }\n\n    body * + * {\n      margin-top: 1.5em;\n    }\n\n    header {\n      padding: 1em 1.5em;\n      color: #fff;\n      background-color: #0072b0;\n      border-radius: .5em;\n      margin-bottom: 1.5em;\n    }\n\n    .main {\n      padding: 0 1.5em;\n      background-color: #fff;\n      border-radius: .5em;\n    }\n\n    .container {\n      max-width: 1080px;\n      margin: 0 auto;\n    }\n\n    .media {\n      float: left;\n      width: 50%;\n      padding: 1.5em;\n      background-color: #eee;\n      border-radius: 0.5em;\n    }\n  </style>\n</head>\n\n<body>\n  <div class="container">\n    <header>\n      <h1>Franklin Running Club</h1>\n    </header>\n\n    <main class="main clearfix">\n      <h2>Running tips</h2>\n\n      <div>\n        <div class="media">\n          <img class="media-image" src="runner.png">\n          <div class="media-body">\n            <h4>Strength</h4>\n            <p>\n              Strength training is an important part of\n              injury prevention. Focus on your core&mdash;\n              especially your abs and glutes.\n            </p>\n          </div>\n        </div>\n\n        <div class="media">\n          <img class="media-image" src="shoes.png">\n          <div class="media-body">\n            <h4>Cadence</h4>\n            <p>\n              Check your stride turnover. The most efficient\n              runners take about 180 steps per minute.\n            </p>\n          </div>\n        </div>\n\n        <div class="media">\n          <img class="media-image" src="shoes.png">\n          <div class="media-body">\n            <h4>Change it up</h4>\n            <p>\n              Don\'t run the same every time you hit the\n              road. Vary your pace, and vary the distance\n              of your runs.\n            </p>\n          </div>\n        </div>\n\n        <div class="media">\n          <img class="media-image" src="runner.png">\n          <div class="media-body">\n            <h4>Focus on form</h4>\n            <p>\n              Run tall but relaxed. Your feet should hit\n              the ground beneath your hips, not out in\n              front of you.\n            </p>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</body>\n')),(0,i.kt)("p",null,"\u6bd4\u5982\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u5206\u4e3a\u4e0a\u4e0b\u4e24\u4e2a\u90e8\u5206\u3002\u4e0a\u9762\u90e8\u5206\u662f\u84dd\u8272\u80cc\u666f\u7684\u5927\u6807\u9898\uff0c\u4e0b\u9762\u90e8\u5206\u662f\u767d\u8272\u80cc\u666f\u7684\u5546\u54c1\u5c55\u793a\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u6bcf\u4e2a\u5546\u54c1\u5360\u636e50%\u7684\u5bbd\u5ea6\u4f9d\u6b21\u6392\u5217\uff0c\u5bf9\u5546\u54c1\u5c55\u793a\u533a\u57dfmedia\u91c7\u7528\u4e86\u6d6e\u52a8\u5e03\u5c40\u3002"),(0,i.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\u6240\u793a\uff0c\u4f7f\u7528\u6d6e\u52a8\u5e03\u5c40\u540e\u51fa\u73b0\u4e86\u4e24\u4e2a\u660e\u663e\u7684\u95ee\u9898\uff1a\u767d\u8272\u80cc\u666f\u533a\u57dfmain\u6ca1\u6709\u5c06\u56db\u4e2a\u5546\u54c1\u5c55\u793a\u533a\u57dfmedia\u5305\u542b\u8fdb\u53bb\uff1b\u7b2c\u4e09\u4e2amedia\u505a\u8fb9\u7a7a\u51fa\u4e86\u4e00\u5927\u5757\u5e76\u5bfc\u81f4\u4e86\u7b2c\u56db\u4e2amedia\u6362\u884c\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u622a\u5c4f2023-03-22 10.31.59.png",src:t(5061).Z,width:"2198",height:"1644"})),(0,i.kt)("p",null,"\u4ee5\u4e0a\u4e24\u4e2a\u95ee\u9898\u662f\u7531\u6d6e\u52a8\u7684\u673a\u5236\u5bfc\u81f4\u7684"),(0,i.kt)("h3",{id:"21-\u6e05\u9664\u6d6e\u52a8"},"2.1 \u6e05\u9664\u6d6e\u52a8"),(0,i.kt)("p",null,"\u7b2c\u4e00\u4e2a\u95ee\u9898\u4ea7\u751f\u7684\u539f\u56e0\u662f\uff1a\u6d6e\u52a8\u5143\u7d20\u4e0d\u540c\u4e8e\u666e\u901a\u6587\u6863\u6d41\u7684\u5143\u7d20\uff0c\u5b83\u4eec\u7684\u9ad8\u5ea6\u4e0d\u4f1a\u52a0\u5230\u7236\u5143\u7d20\u4e0a\u3002"),(0,i.kt)("p",null,"\u5728main\u5143\u7d20\u91cc\uff0c\u9664\u4e86\u9875\u9762\u5c0f\u6807\u9898\uff0c\u5176\u4ed6\u5143\u7d20\u90fd\u8bbe\u7f6e\u4e86\u6d6e\u52a8\uff0c\u6240\u4ee5\u5bb9\u5668\u7684\u9ad8\u5ea6\u53ea\u5305\u542b\u9875\u9762\u6807\u9898\u7684\u9ad8\u5ea6\uff0c\u6d6e\u52a8\u7684\u5a92\u4f53\u5143\u7d20\u5219\u6269\u5c55\u5230\u4e3b\u5143\u7d20\u7684\u767d\u8272\u80cc\u666f\u4e0b\u9762\u3002\u8fd9\u79cd\u884c\u4e3a\u5e76\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\uff0c\u4e3b\u5143\u7d20\u5e94\u8be5\u5411\u4e0b\u6269\u5c55\u5230\u5305\u542b\u7070\u8272\u7684\u76d2\u5b50\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\u4e00\uff1a")),(0,i.kt)("p",null,"\u4f7f\u7528\u8ddf\u6d6e\u52a8\u914d\u5957\u7684clear\u5c5e\u6027\u3002\u5c06\u4e00\u4e2a\u5143\u7d20\u653e\u5728\u4e3b\u5bb9\u5668\u7684\u672b\u5c3e\uff0c\u5e76\u5bf9\u5b83\u4f7f\u7528clear\uff0c\u8fd9\u4f1a\u8ba9\u5bb9\u5668\u6269\u5c55\u5230\u6d6e\u52a8\u5143\u7d20\u4e0b\u9762\u3002\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div class="container">\n    \x3c!-- others --\x3e\n    <main class="main clearfix">\n      \x3c!-- others --\x3e\n      <div style="clear: both"></div>\n    </main>\n  </div>\n</body>\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clear: both"),"\u58f0\u660e\u8ba9\u8be5\u5143\u7d20\u79fb\u52a8\u5230\u6d6e\u52a8\u5143\u7d20\u7684\u4e0b\u9762\uff0c\u800c\u4e0d\u662f\u4fa7\u9762\u3002clear\u7684\u503c\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4e3aleft\u6216\u8005right\uff0c\u8fd9\u6837\u53ea\u4f1a\u76f8\u5e94\u5730\u6e05\u9664\u5411\u5de6\u6216\u8005\u5411\u53f3\u6d6e\u52a8\u7684\u5143\u7d20\u3002\u56e0\u4e3a\u7a7adiv\u672c\u8eab\u6ca1\u6709\u6d6e\u52a8\uff0c\u6240\u4ee5\u5bb9\u5668\u5c31\u4f1a\u6269\u5c55\uff0c\u76f4\u5230\u5305\u542b\u5b83\uff0c\u56e0\u6b64\u4e5f\u4f1a\u5305\u542b\u8be5div\u4e0a\u9762\u7684\u6d6e\u52a8\u5143\u7d20\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\u4e8c\uff1a")),(0,i.kt)("p",null,"\u7528\u4f2a\u5143\u7d20\uff08pseudo-element\uff09\u6765\u5b9e\u73b0\u3002\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},":after"),"\u4f2a\u5143\u7d20\u9009\u62e9\u5668\uff0c\u5c31\u53ef\u4ee5\u5feb\u901f\u5730\u5728DOM\u4e2d\u5728\u5bb9\u5668\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\uff0c\u800c\u4e0d\u7528\u5728HTML\u91cc\u6dfb\u52a0\u6807\u8bb0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'.clearfix::after {\n  display: block;\n  content: " ";\n  clear: both;\n}\n')),(0,i.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u6848\u8981\u5728html\u4e2d\u6dfb\u52a0\u4e0d\u5fc5\u8981\u7684\u6807\u8bb0\uff0c\u56e0\u6b64\u8fd9\u79cd\u4f7f\u7528\u7eafcss\u7684\u65b9\u6848\u66f4\u5b9e\u7528\u3002"),(0,i.kt)("h3",{id:"22-\u6d6e\u52a8\u9677\u9631"},"2.2 \u6d6e\u52a8\u9677\u9631"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u95ee\u9898\u4ea7\u751f\u7684\u539f\u56e0\u662f\uff1a\u6d4f\u89c8\u5668\u4f1a\u5c06\u6d6e\u52a8\u5143\u7d20\u5c3d\u53ef\u80fd\u5730\u653e\u5728\u9760\u4e0a\u7684\u5730\u65b9\u3002\u53ef\u4ee5\u53c2\u8003\u4e0b\u56fe\u8fdb\u884c\u7406\u89e3"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:t(2409).Z,width:"538",height:"490"})),(0,i.kt)("p",null,"\u8fd9\u79cd\u884c\u4e3a\u672c\u8d28\u4e0a\u53d6\u51b3\u4e8e\u6bcf\u4e2a\u6d6e\u52a8\u5757\u7684\u9ad8\u5ea6\u3002\u5728\u5982\u679c\u76d2\u5b502\u6bd4\u76d2\u5b501\u77ee\uff0c\u76d2\u5b503\u5c31\u6ca1\u6cd5\u6293\u4f4f\u76d2\u5b501\u7684\u4e0b\u8fb9\u7f18\u3002\u4ece\u800c\u4f1a\u5bfc\u81f4\u7a7a\u51fa\u4e00\u5757\u533a\u57df\uff0c\u540e\u9762\u7684\u76d2\u5b50\u4f1a\u56e0\u6b64\u6362\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\uff1a")),(0,i.kt)("p",null,"\u6e05\u9664\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e0a\u9762\u7684\u6d6e\u52a8\u3002\u56e0\u4e3a\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u6bcf\u884c\u53ea\u6709\u4e24\u4e2a\u5143\u7d20\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0bcss\u6837\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".media {\n  float: left;\n  width: 50%;\n  padding: 1.5em;\n  background-color: #eee;\n  border-radius: 0.5em;\n}\n\n.media:nth-child(odd) {\n  clear: left;\n}\n")),(0,i.kt)("h2",{id:"3-bfc"},"3 BFC"),(0,i.kt)("h3",{id:"31-\u8131\u79bb\u6587\u6863\u6d41"},"3.1 \u8131\u79bb\u6587\u6863\u6d41"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u7ee7\u7eed\u4f7f\u7528\u6d6e\u52a8\u5c06\u5546\u54c1\u5c55\u793a\u5185\u5bb9\u6309\u7167\u5de6\u53f3\u4e24\u5217\u8fdb\u884c\u5e03\u5c40\uff0c\u671f\u5f85\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:t(8988).Z,width:"925",height:"307"})),(0,i.kt)("p",null,"\u76f8\u5e94\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="media">\n  <img class="media-image" src="shoes.png" width="80">\n  <div class="media-body">\n    <h4>Change it up</h4>\n    <p>\n      Don\'t run the same every time you hit the\n      road. Vary your pace, and vary the distance\n      of your runs.\n    </p>\n  </div>\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".media-image {\n  float: left;\n}\n\n.media-body {\n  margin-top: 0;\n}\n\n.media-body h4 {\n  margin-top: 0;\n}\n")),(0,i.kt)("p",null,"\u5b9e\u9645\u6548\u679c\u5982\u4e0b\u3002\u5f88\u663e\u7136\u8fd9\u79cd\u56fe\u6587\u6df7\u6392\u7684\u6548\u679c\u5c31\u662f\u6d6e\u52a8\u7684\u672c\u8d28\uff0c\u4f46\u5e76\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u6548\u679c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:t(3165).Z,width:"925",height:"271"})),(0,i.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u53ef\u4ee5\u53d1\u73b0\u53f3\u8fb9\u533a\u57df\uff08media-body\uff09\u5b9e\u9645\u4e0a\u6269\u5c55\u5230\u4e86\u6700\u5de6\u8fb9\uff0c\u5b83\u5305\u56f4\u4e86\u6d6e\u52a8\u7684\u56fe\u7247\u3002\u6d6e\u52a8\u56fe\u7247\u662f\u8131\u79bb\u6587\u6863\u6d41\u7684"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u622a\u5c4f2023-03-22 11.20.55.png",src:t(2818).Z,width:"786",height:"344"})),(0,i.kt)("h3",{id:"32-bfc"},"3.2 BFC"),(0,i.kt)("p",null,"\u73b0\u5728\u6587\u5b57\u56f4\u7ed5\u7740\u56fe\u7247\uff0c\u4f46\u662f\u53ea\u8981\u6e05\u9664\u4e86\u56fe\u7247\u5e95\u90e8\u7684\u6d6e\u52a8\uff0c\u6b63\u6587\u5c31\u4f1a\u7acb\u523b\u79fb\u52a8\u5230\u5a92\u4f53\u76d2\u5b50\u7684\u5de6\u8fb9\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u9884\u671f\u6548\u679c\u7684\u5e03\u5c40\uff0c\u9700\u8981\u4e3a\u6b63\u6587\u5efa\u7acb\u4e00\u4e2a\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587\uff08block formatting context, BFC\uff09\u3002BFC\u91cc\u7684\u5185\u5bb9\u4e0d\u4f1a\u8ddf\u5916\u90e8\u7684\u5143\u7d20\u91cd\u53e0\u6216\u8005\u76f8\u4e92\u5f71\u54cd\u3002\u5982\u679c\u7ed9\u5143\u7d20\u589e\u52a0clear\u5c5e\u6027\uff0c\u5b83\u53ea\u4f1a\u6e05\u9664\u81ea\u8eab\u6240\u5728BFC\u5185\u7684\u6d6e\u52a8\u3002\u5982\u679c\u5f3a\u5236\u7ed9\u4e00\u4e2a\u5143\u7d20\u751f\u6210\u4e00\u4e2a\u65b0\u7684BFC\uff0c\u5b83\u4e0d\u4f1a\u8ddf\u5176\u4ed6BFC\u91cd\u53e0\u3002"),(0,i.kt)("p",null,"\u7ed9\u5143\u7d20\u6dfb\u52a0\u4ee5\u4e0b\u7684\u4efb\u610f\u5c5e\u6027\u503c\u90fd\u4f1a\u521b\u5efaBFC\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"float: left\u6216right\uff0c\u4e0d\u4e3anone\u5373\u53ef\u3002"),(0,i.kt)("li",{parentName:"ul"},"overflow:hidden\u3001auto\u6216scroll\uff0c\u4e0d\u4e3avisible\u5373\u53ef\u3002"),(0,i.kt)("li",{parentName:"ul"},"display:inline-block\u3001table-cell\u3001table-caption\u3001flex\u3001inline-flex\u3001grid\u6216inline-grid\u3002\u62e5\u6709\u8fd9\u4e9b\u5c5e\u6027\u7684\u5143\u7d20\u79f0\u4e3a\u5757\u7ea7\u5bb9\u5668\uff08block container\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"position:absolute\u6216position: fixed")),(0,i.kt)("p",null,"\u56e0\u6b64\u8fdb\u884c\u5982\u4e0b\u4fee\u6539\u5c31\u80fd\u5b9e\u73b0\u9884\u671f\u6548\u679c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".media-image {\n  float: left;\n  margin-right: 1.5em;\n}\n\n.media-body {\n  overflow: auto;\n  margin-top: 0;\n}\n\n.media-body h4 {\n  margin-top: 0;\n}\n")),(0,i.kt)("h2",{id:"4-\u7f51\u683c\u7cfb\u7edf"},"4 \u7f51\u683c\u7cfb\u7edf"),(0,i.kt)("p",null,"\u5927\u90e8\u5206\u6d41\u884c\u7684CSS\u6846\u67b6\u5305\u542b\u4e86\u81ea\u5df1\u7684\u7f51\u683c\u7cfb\u7edf\u3002\u5b83\u4eec\u7684\u5b9e\u73b0\u7ec6\u8282\u5404\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u8bbe\u8ba1\u601d\u60f3\u76f8\u540c\uff1a\u5728\u4e00\u4e2a\u884c\u5bb9\u5668\u91cc\u653e\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u5bb9\u5668\u3002\u5217\u5bb9\u5668\u7684\u7c7b\u51b3\u5b9a\u6bcf\u5217\u7684\u5bbd\u5ea6\u3002"),(0,i.kt)("h3",{id:"41-\u7406\u89e3\u7f51\u683c\u7cfb\u7edf"},"4.1 \u7406\u89e3\u7f51\u683c\u7cfb\u7edf"),(0,i.kt)("p",null,"\u901a\u5e38\u7f51\u683c\u7cfb\u7edf\u7684\u6bcf\u884c\u88ab\u5212\u5206\u4e3a\u7279\u5b9a\u6570\u91cf\u7684\u5217\uff0c\u4e00\u822c\u662f12\u4e2a\u3002\u9009\u53d612\u4f5c\u4e3a\u5217\u6570\u662f\u56e0\u4e3a\u5b83\u80fd\u591f\u88ab2\u30013\u30014\u30016\u6574\u9664\uff0c\u7ec4\u5408\u8d77\u6765\u8db3\u591f\u7075\u6d3b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:t(5530).Z,width:"1280",height:"156"})),(0,i.kt)("h3",{id:"42-\u6784\u5efa\u7f51\u683c\u7cfb\u7edf"},"4.2 \u6784\u5efa\u7f51\u683c\u7cfb\u7edf"),(0,i.kt)("p",null,"\u7f51\u683c\u7cfb\u7edf\u7684\u76f8\u5173\u6837\u5f0f\u5982\u4e0b\u6240\u793a\u3002\u5b9a\u4e49\u4e8612\u4e2a\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},".column-*"),"\u5206\u522b\u4ee3\u8868\u5360\u636e\u5217\u6570\u768412\u4e2a\u60c5\u51b5\u3002\u7136\u540e\u7528\u5c5e\u6027\u9009\u62e9\u5668",(0,i.kt)("inlineCode",{parentName:"p"},'[class*="column-"]')," \u9009\u4e2d\u8fd912\u4e2a\u7c7b\uff0c\u901a\u8fc7\u8bbe\u7f6epadding\u6765\u5b9a\u4e49\u7f51\u683c\u6bcf\u5217\u4e4b\u95f4\u7684\u95f4\u9694\u3002\u5728\u7ed9\u6bcf\u884c",(0,i.kt)("inlineCode",{parentName:"p"},".row")," \u6dfb\u52a0\u5de6\u53f3\u8d1f\u5916\u8fb9\u8ddd\u6765\u62b5\u6d88\u9996\u4f4d\u4e24\u4e2a\u5217\u5143\u7d20\u7684padding\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'.row {\n  margin-left: -0.75em;\n  margin-right: -0.75em;\n}\n\n.row::after {\n  content: " ";\n  display: block;\n  clear: both;\n}\n\n[class*="column-"] {\n  float: left;\n  padding: 0 0.75em;\n  margin-top: 0;\n}\n\n.column-1 { width: 8.3333%; }\n.column-2 { width: 16.6667%; }\n.column-3 { width: 25%; }\n.column-4 { width: 33.3333%; }\n.column-5 { width: 41.6667%; }\n.column-6 { width: 50%; }\n.column-7 { width: 58.3333%; }\n.column-8 { width: 66.6667%; }\n.column-9 { width: 75%; }\n.column-10 { width: 83.3333%; }\n.column-11 { width: 91.6667% }\n.column-12 { width: 100%; }\n')),(0,i.kt)("p",null,"\u5728html\u4f7f\u7528\u7c7b\u4f3c\u4e0b\u9762\u7684\u4ee3\u7801\u5373\u53ef\u5b9e\u73b0\u57fa\u4e8e\u6d6e\u52a8\u7684\u7f51\u683c\u7cfb\u7edf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<main class="main clearfix">\n  <h2>Running tips</h2>\n\n  <div class="row">\n    <div class="column-6">\n      <div class="media">\n        <img class="media-image" src="runner.png" width="80">\n        <div class="media-body">\n          <h4>Strength</h4>\n          <p>\n            Strength training is an important part of\n            injury prevention. Focus on your core&mdash;\n            especially your abs and glutes.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class="column-6">\n      <div class="media">\n        <img class="media-image" src="shoes.png" width="80">\n        <div class="media-body">\n          <h4>Cadence</h4>\n          <p>\n            Check your stride turnover. The most efficient\n            runners take about 180 steps per minute.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="column-6">\n      <div class="media">\n        <img class="media-image" src="shoes.png" width="80">\n        <div class="media-body">\n          <h4>Change it up</h4>\n          <p>\n            Don\'t run the same every time you hit the\n            road. Vary your pace, and vary the distance\n            of your runs.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class="column-6">\n      <div class="media">\n        <img class="media-image" src="runner.png" width="80">\n        <div class="media-body">\n          <h4>Focus on form</h4>\n          <p>\n            Run tall but relaxed. Your feet should hit\n            the ground beneath your hips, not out in\n            front of you.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n')))}p.isMDXComponent=!0},644:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/1-36122f8bc55a98ca53a9667890e635d7.png"},5061:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/2-4ab606cbdf7f08c8be08ab4f53ffe76a.png"},2409:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/3-6de611881c03286b2f28be43ceb0538a.png"},8988:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/4-6d518e40590cf6d0a178d67945a145f9.png"},3165:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/5-db2b358efabf0d95c717c278daac0f7e.png"},2818:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/6-7d783a30a7f3bcafc96c92f79dffc1e6.png"},5530:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/7-68849e408d261df5920410e1e6ab6962.png"}}]);