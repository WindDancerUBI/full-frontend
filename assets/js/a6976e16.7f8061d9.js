"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[5733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1007:(e,t,n)=>{n.d(t,{p:()=>i,Z:()=>a});var o=n(7294),l=n(6010);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function a(e){let{children:t,minHeight:n,url:a="http://localhost:3000",style:i,bodyStyle:s}=e;return o.createElement("div",{className:r.browserWindow,style:{...i,minHeight:n}},o.createElement("div",{className:r.browserWindowHeader},o.createElement("div",{className:r.buttons},o.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),o.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),o.createElement("span",{className:r.dot,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,l.Z)(r.browserWindowAddressBar,"text--truncate"),onClick:()=>{window.open(a,"_blank")}},a),o.createElement("div",{className:r.browserWindowMenuIcon},o.createElement("div",null,o.createElement("span",{className:r.bar}),o.createElement("span",{className:r.bar}),o.createElement("span",{className:r.bar})))),o.createElement("div",{className:r.browserWindowBody,style:s},t))}function i(e){let t,{url:n}=e;return t=n.includes("http")||n.includes("https")?n:"https://winddancer.gitee.io"+n,o.createElement("div",null,o.createElement(a,{url:t,bodyStyle:{padding:0}},o.createElement("iframe",{src:t,title:t,style:{width:"100%",height:500}})))}},9711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),l=(n(7294),n(3905)),r=n(1007);const a={sidebar_position:7,tags:["JS"]},i="\u4e03\u3001\u4e8b\u4ef6\u5faa\u73af",s={unversionedId:"tutorial/JavaScript/eventloop/index",id:"tutorial/JavaScript/eventloop/index",title:"\u4e03\u3001\u4e8b\u4ef6\u5faa\u73af",description:"Event Loop\u5373\u4e8b\u4ef6\u5faa\u73af\uff0c\u662f\u6d4f\u89c8\u5668\u6216Node\u89e3\u51b3\u5355\u7ebf\u7a0b\u8fd0\u884c\u65f6\u4e0d\u4f1a\u963b\u585e\u7684\u4e00\u79cd\u673a\u5236\u3002",source:"@site/docs/tutorial/JavaScript/7-eventloop/index.mdx",sourceDirName:"tutorial/JavaScript/7-eventloop",slug:"/tutorial/JavaScript/eventloop/",permalink:"/full-frontend/docs/tutorial/JavaScript/eventloop/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/JavaScript/7-eventloop/index.mdx",tags:[{label:"JS",permalink:"/full-frontend/docs/tags/js"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,tags:["JS"]},sidebar:"tutorialSidebar",previous:{title:"\u516d\u3001\u9632\u6296\u4e0e\u8282\u6d41",permalink:"/full-frontend/docs/tutorial/JavaScript/debounce-throttle/"},next:{title:"\u516b\u3001\u5f02\u6b65\u7f16\u7a0b",permalink:"/full-frontend/docs/tutorial/JavaScript/async-func/"}},c={},p=[{value:"7.1 \u6d4f\u89c8\u5668\u7684eventloop",id:"71-\u6d4f\u89c8\u5668\u7684eventloop",level:2},{value:"7.1.1 \u6d4f\u89c8\u5668\u7ebf\u7a0b",id:"711-\u6d4f\u89c8\u5668\u7ebf\u7a0b",level:3},{value:"7.1.2 eventloop\u6267\u884c\u6d41\u7a0b",id:"712-eventloop\u6267\u884c\u6d41\u7a0b",level:3},{value:"7.2 NodeJS\u7684eventloop",id:"72-nodejs\u7684eventloop",level:2},{value:"7.2.1 NodeJS\u4e8b\u4ef6\u5faa\u73af",id:"721-nodejs\u4e8b\u4ef6\u5faa\u73af",level:3},{value:"7.2.2 nextTick \u4e0e setImmediate",id:"722-nexttick-\u4e0e-setimmediate",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e03\u4e8b\u4ef6\u5faa\u73af"},"\u4e03\u3001\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("p",null,"Event Loop\u5373\u4e8b\u4ef6\u5faa\u73af\uff0c\u662f\u6d4f\u89c8\u5668\u6216Node\u89e3\u51b3\u5355\u7ebf\u7a0b\u8fd0\u884c\u65f6\u4e0d\u4f1a\u963b\u585e\u7684\u4e00\u79cd\u673a\u5236\u3002"),(0,l.kt)("h2",{id:"71-\u6d4f\u89c8\u5668\u7684eventloop"},"7.1 \u6d4f\u89c8\u5668\u7684eventloop"),(0,l.kt)("h3",{id:"711-\u6d4f\u89c8\u5668\u7ebf\u7a0b"},"7.1.1 \u6d4f\u89c8\u5668\u7ebf\u7a0b"),(0,l.kt)("p",null,"JavaScript\u662f\u4e00\u95e8\u5355\u7ebf\u7a0b\u8bed\u8a00\uff0c\u4f46\u662f\u6d4f\u89c8\u5668UI\u662f\u591a\u7ebf\u7a0b\u7684.\u5f02\u6b65\u4efb\u52a1\u501f\u52a9\u6d4f\u89c8\u5668\u7684\u7ebf\u7a0b\u548cJavaScript\u7684\u6267\u884c\u673a\u5236\u5b9e\u73b0\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GUI\u6e32\u67d3\u7ebf\u7a0b\uff1a\u7ed8\u5236\u9875\u9762\uff0c\u89e3\u6790HTML\u3001CSS\uff0c\u6784\u5efaDOM\u6811\u7b49\uff1b\u9875\u9762\u7684\u91cd\u7ed8\u548c\u91cd\u6392\uff1b\u4e0eJS\u5f15\u64ce\u4e92\u65a5(JS\u5f15\u64ce\u963b\u585e\u9875\u9762\u5237\u65b0)\u3002"),(0,l.kt)("li",{parentName:"ul"},"JS\u5f15\u64ce\u7ebf\u7a0b\uff1ajs\u811a\u672c\u4ee3\u7801\u6267\u884c\uff1b\u8d1f\u8d23\u6267\u884c\u51c6\u5907\u597d\u7684\u4e8b\u4ef6\uff0c\u4f8b\u5982\u5b9a\u65f6\u5668\u8ba1\u65f6\u7ed3\u675f\u6216\u5f02\u6b65\u8bf7\u6c42\u6210\u529f\u4e14\u6b63\u786e\u8fd4\u56de\uff1b\u4e0eGUI\u6e32\u67d3\u7ebf\u7a0b\u4e92\u65a5"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b\uff1a\u5f53\u5bf9\u5e94\u7684\u4e8b\u4ef6\u6ee1\u8db3\u89e6\u53d1\u6761\u4ef6\uff0c\u5c06\u4e8b\u4ef6\u6dfb\u52a0\u5230js\u7684\u4efb\u52a1\u961f\u5217\u672b\u5c3e\uff1b\u591a\u4e2a\u4e8b\u4ef6\u52a0\u5165\u4efb\u52a1\u961f\u5217\u9700\u8981\u6392\u961f\u7b49\u5f85\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u65f6\u5668\u89e6\u53d1\u7ebf\u7a0b\uff1a\u8d1f\u8d23\u6267\u884c\u5f02\u6b65\u7684\u5b9a\u65f6\u5668\u7c7b\u4e8b\u4ef6\uff1asetTimeout\u3001setInterval\u7b49\uff1b\u6d4f\u89c8\u5668\u5b9a\u65f6\u8ba1\u65f6\u7531\u8be5\u7ebf\u7a0b\u5b8c\u6210\uff0c\u8ba1\u65f6\u5b8c\u6bd5\u540e\u5c06\u4e8b\u4ef6\u6dfb\u52a0\u81f3\u4efb\u52a1\u961f\u5217\u961f\u5c3e"),(0,l.kt)("li",{parentName:"ul"},"HTTP\u8bf7\u6c42\u7ebf\u7a0b\uff1a\u8d1f\u8d23\u5f02\u6b65\u8bf7\u6c42\uff1b\u5f53\u76d1\u542c\u5230\u5f02\u6b65\u8bf7\u6c42\u72b6\u6001\u53d8\u66f4\u65f6\uff0c\u5982\u679c\u5b58\u5728\u56de\u8c03\u51fd\u6570\uff0c\u8be5\u7ebf\u7a0b\u4f1a\u5c06\u56de\u8c03\u51fd\u6570\u52a0\u5165\u5230\u4efb\u52a1\u961f\u5217\u961f\u5c3e")),(0,l.kt)("h3",{id:"712-eventloop\u6267\u884c\u6d41\u7a0b"},"7.1.2 eventloop\u6267\u884c\u6d41\u7a0b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u5f00\u59cb\u6267\u884c\uff0c\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u8c03\u7528\u6808\uff0cscript\u4f5c\u4e3a\u5b8f\u4efb\u52a1\u6267\u884c\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u8fc7\u7a0b\u8fc7\u540c\u6b65\u4efb\u52a1\u7acb\u5373\u6267\u884c\uff0c\u5f02\u6b65\u4efb\u52a1\u6839\u636e\u5f02\u6b65\u4efb\u52a1\u7c7b\u578b\u5206\u522b\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u961f\u5217\u548c\u5b8f\u4efb\u52a1\u961f\u5217\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u67e5\u770b\u5fae\u4efb\u52a1\u961f\u5217\uff1b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u82e5\u5b58\u5728\u5fae\u4efb\u52a1\uff0c\u5c06\u5fae\u4efb\u52a1\u961f\u5217\u5168\u90e8\u6267\u884c(\u5305\u62ec\u6267\u884c\u5fae\u4efb\u52a1\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u65b0\u5fae\u4efb\u52a1)\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u65e0\u5fae\u4efb\u52a1\uff0c\u67e5\u770b\u5b8f\u4efb\u52a1\u961f\u5217\uff0c\u6267\u884c\u7b2c\u4e00\u4e2a\u5b8f\u4efb\u52a1\uff0c\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u67e5\u770b\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u91cd\u590d\u4e0a\u8ff0\u64cd\u4f5c\uff0c\u76f4\u81f3\u5b8f\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\u3002")))),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u4e2d\u7684\u5b8f\u4efb\u52a1\u6709\uff1aI/O\u3001setTimeout\u3001setInterval\u3001requestAnimationFrame\u3002\n\u6d4f\u89c8\u5668\u4e2d\u7684\u5fae\u4efb\u52a1\u6709\uff1aMutationObserver\u3001Promise.then\neventloop\u7684\u6267\u884c\u6d41\u7a0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u5206\u6790\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'console.log("1");\nsetTimeout(function() {\n  console.log("2");\n}, 0);\nPromise.resolve().then(function() {\n  console.log("3");\n});\nconsole.log("4");\n\nconsole.log("start");\n\nsetTimeout(() => {\n  console.log("setTimeout");\n  new Promise(resolve => {\n    console.log("promise inner1");\n    resolve();\n  }).then(() => {\n    console.log("promise then1");\n  });\n}, 0);\n\nnew Promise(resolve => {\n  console.log("promise inner2");\n  console.log("5")\n}).then(() => {\n  console.log("promise then2");\n});\n')),(0,l.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1\n4\nstart\npromise inner2\n3\npromise then2\n2\nsetTimeout\npromise inner1\npromise then1\n"))),(0,l.kt)("admonition",{title:"\u5206\u6790",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},'\u9996\u5148\u6267\u884c\u540c\u6b65\u4ee3\u7801console.log("1")\u3001console.log("4")\u3001console.log("start")\u3001console.log("promise inner2")\u3001\u5bf9\u4e8epromise\u800c\u8a00\uff0c\u5b83\u7684\u5185\u90e8\u4ee3\u7801\u662f\u540c\u6b65\u4ee3\u7801\uff1b\u53ea\u6709then\u3001catch\u3001finally\u4e2d\u7684\u4ee3\u7801\u624d\u662f\u5fae\u4efb\u52a1\u3002'),(0,l.kt)("li",{parentName:"ol"},'\u4e4b\u540e\u6267\u884c\u5fae\u4efb\u52a1\uff0c\u4e3b\u8981\u662fpromise then\u3001catch\u3001finally\u4e2d\u7684\u4ee3\u7801\u3002\u56e0\u6b64\u5206\u522b\u6267\u884cconsole.log("3")\u3001console.log("promise then2")\u3002'),(0,l.kt)("li",{parentName:"ol"},'\u63a5\u4e0b\u6765\u6267\u884c\u5b8f\u4efb\u52a1\uff0c\u8fd9\u91cc\u4e3b\u8981\u662fsettimeout\u4e2d\u7684\u4ee3\u7801\u3002\u7531\u4e8e\u8bbe\u7f6e\u7684\u90fd\u662f0\uff0c\u56e0\u6b64\u7b2c\u4e00\u4e2asettimeout\u5148\u6267\u884c\u5b8c\u8f93\u51faconsole.log("2")\uff1b\u7b2c\u4e8c\u4e2asettimeout\u5148\u6267\u884c\u540c\u6b65\u4ee3\u7801console.log("setTimeout")\u3001console.log("promise inner1")\uff1b\u6700\u540e\u5728\u6267\u884c\u5fae\u4efb\u52a1promise then\u4e2d\u7684\u4ee3\u7801console.log("promise then1")\u3002'))),(0,l.kt)("h2",{id:"72-nodejs\u7684eventloop"},"7.2 NodeJS\u7684eventloop"),(0,l.kt)("h3",{id:"721-nodejs\u4e8b\u4ef6\u5faa\u73af"},"7.2.1 NodeJS\u4e8b\u4ef6\u5faa\u73af"),(0,l.kt)("p",null,"NodeJS\u7684\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u548c\u6d4f\u89c8\u5668\u7aef\u6709\u8f83\u5927\u7684\u533a\u522b\u3002Node\u4e2d\u4e5f\u6709\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\uff0c\u4f46\u662f\u533a\u522b\u5982\u4e0b\uff1a\n\u6d4f\u89c8\u5668\u4e2d\u7684\u5b8f\u4efb\u52a1\u6709\uff1aI/O\u3001setTimeout\u3001setInterval\u3001setImmediate\u3002\n\u6d4f\u89c8\u5668\u4e2d\u7684\u5fae\u4efb\u52a1\u6709\uff1aprocess.nextTick\u3001Promise.then\u3002\nNodeJS\u5b98\u7f51\u7ed9\u51fa\u7684\u4e8b\u4ef6\u5faa\u73af\u64cd\u4f5c\u987a\u5e8f\u7684\u6982\u89c8\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u250c\u2500>\u2502           timers          \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502     pending callbacks     \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502       idle, prepare       \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2502   incoming:   \u2502\n\u2502  \u2502           poll            \u2502<\u2500\u2500\u2500\u2500\u2500\u2524  connections, \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2502   data, etc.  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u2502           check           \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2514\u2500\u2500\u2524      close callbacks      \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"timers \u9636\u6bb5: \u8fd9\u4e2a\u9636\u6bb5\u6267\u884c setTimeout(callback) \u548c setInterval(callback) \u9884\u5b9a\u7684 callback;"),(0,l.kt)("li",{parentName:"ol"},"I/O callbacks \u9636\u6bb5: \u6b64\u9636\u6bb5\u6267\u884c\u67d0\u4e9b\u7cfb\u7edf\u64cd\u4f5c\u7684\u56de\u8c03\uff0c\u4f8b\u5982TCP\u9519\u8bef\u7684\u7c7b\u578b\u3002 \u4f8b\u5982\uff0c\u5982\u679cTCP\u5957\u63a5\u5b57\u5728\u5c1d\u8bd5\u8fde\u63a5\u65f6\u6536\u5230 ECONNREFUSED\uff0c\u5219\u67d0\u4e9b* nix\u7cfb\u7edf\u5e0c\u671b\u7b49\u5f85\u62a5\u544a\u9519\u8bef\u3002 \u8fd9\u5c06\u64cd\u4f5c\u5c06\u7b49\u5f85\u5728I/O\u56de\u8c03\u9636\u6bb5\u6267\u884c;"),(0,l.kt)("li",{parentName:"ol"},"idle, prepare \u9636\u6bb5: \u4ec5node\u5185\u90e8\u4f7f\u7528;"),(0,l.kt)("li",{parentName:"ol"},"poll \u9636\u6bb5: \u83b7\u53d6\u65b0\u7684I/O\u4e8b\u4ef6, \u4f8b\u5982\u64cd\u4f5c\u8bfb\u53d6\u6587\u4ef6\u7b49\u7b49\uff0c\u9002\u5f53\u7684\u6761\u4ef6\u4e0bnode\u5c06\u963b\u585e\u5728\u8fd9\u91cc;"),(0,l.kt)("li",{parentName:"ol"},"check \u9636\u6bb5: \u6267\u884c setImmediate() \u8bbe\u5b9a\u7684callbacks;"),(0,l.kt)("li",{parentName:"ol"},"close callbacks \u9636\u6bb5: \u6bd4\u5982 socket.on(\u2018close\u2019, callback) \u7684callback\u4f1a\u5728\u8fd9\u4e2a\u9636\u6bb5\u6267\u884c;")),(0,l.kt)("h3",{id:"722-nexttick-\u4e0e-setimmediate"},"7.2.2 nextTick \u4e0e setImmediate"),(0,l.kt)("p",null,"NodeJS\u7684\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1\u76f8\u6bd4\u591a\u51fa\u4e86nextTick \u4e0e setImmediate\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"process.nextTick \u4e0d\u5c5e\u4e8e\u4e8b\u4ef6\u5faa\u73af\u7684\u4efb\u4f55\u4e00\u4e2a\u9636\u6bb5\uff0c\u5b83\u5c5e\u4e8e\u8be5\u9636\u6bb5\u4e0e\u4e0b\u9636\u6bb5\u4e4b\u95f4\u7684\u8fc7\u6e21, \u5373\u672c\u9636\u6bb5\u6267\u884c\u7ed3\u675f, \u8fdb\u5165\u4e0b\u4e00\u4e2a\u9636\u6bb5\u524d, \u6240\u8981\u6267\u884c\u7684\u56de\u8c03\u3002\u6709\u7ed9\u4eba\u4e00\u79cd\u63d2\u961f\u7684\u611f\u89c9."),(0,l.kt)("li",{parentName:"ol"},"setImmediate \u7684\u56de\u8c03\u5904\u4e8echeck\u9636\u6bb5, \u5f53poll\u9636\u6bb5\u7684\u961f\u5217\u4e3a\u7a7a, \u4e14check\u9636\u6bb5\u7684\u4e8b\u4ef6\u961f\u5217\u5b58\u5728\u7684\u65f6\u5019\uff0c\u5207\u6362\u5230check\u9636\u6bb5\u6267\u884c.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- \u5982\u679c\u5728\u4e00\u4e2aI/O\u5468\u671f\u5185\u8fdb\u884c\u8c03\u5ea6\uff0csetImmediate() \u5c06\u59cb\u7ec8\u5728\u4efb\u4f55\u5b9a\u65f6\u5668\uff08setTimeout\u3001setInterval\uff09\u4e4b\u524d\u6267\u884c\u3002\n- setImmediate()\u88ab\u8bbe\u8ba1\u5728 poll \u9636\u6bb5\u7ed3\u675f\u540e\u7acb\u5373\u6267\u884c\u56de\u8c03\uff1b\n- setTimeout()\u88ab\u8bbe\u8ba1\u5728\u6307\u5b9a\u4e0b\u9650\u65f6\u95f4\u5230\u8fbe\u540e\u6267\u884c\u56de\u8c03\uff1b\n")),"NodeJS\u7684\u65f6\u95f4\u5faa\u73af\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u5206\u6790\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"async function async1(){\n  console.log('async1 start')\n  await async2()\n  console.log('async1 end')\n}\nasync function async2(){\n  console.log('async2')\n}\nconsole.log('script start')\nsetTimeout(function(){\n  console.log('setTimeout0') \n},0)  \nsetTimeout(function(){\n  console.log('setTimeout3') \n},3)  \nsetImmediate(() => console.log('setImmediate'));\nprocess.nextTick(() => console.log('nextTick'));\nasync1();\nnew Promise(function(resolve){\n  console.log('promise1')\n  resolve();\n  console.log('promise2')\n}).then(function(){\n  console.log('promise3')\n})\nconsole.log('script end')\n")),(0,l.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"script start\nasync1 start\nasync2\npromise1\npromise2\nscript end\nnextTick\nasync1 end\npromise3\nsetTimeout0\nsetImmediate\nsetTimeout3\n"))),(0,l.kt)("admonition",{title:"\u5206\u6790",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"\u9996\u5148NodeJS\u4f1a\u5728\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u7684\u5f00\u59cb\u65f6\uff0c\u68c0\u6d4b\u5b9a\u65f6\u5668\uff0c\u5e76\u5c06\u5b83\u4eec\u653e\u5230\u5176\u5b83\u8fdb\u7a0b\u4e2d\u53bb\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e4b\u540e\u5f00\u59cb\u6267\u884c\u540c\u6b65\u4ee3\u7801console.log('script start')\uff1b\u5230\u8fbe\u5f02\u6b65async1()\u6267\u884c\u65f6\uff0c\u5148\u5c06\u5b83\u7684\u540c\u6b65\u4ee3\u7801console.log('async1 start')\u3001console.log('async2')\u6267\u884c\u3002\u4e4b\u540e\u4f1a\u7b49\u5f85await\u7684\u7ed3\u679c\u3002\u7136\u540e\u6267\u884cpromise\u4e2d\u7684\u540c\u6b65\u4ee3\u7801console.log('promise1')\u3001 console.log('promise2')\u3002\u63a5\u7740\u5f80\u4e0b\u6267\u884c\u540c\u6b65\u4ee3\u7801console.log('script end')\u3002\u81ea\u6b64\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u63a5\u7740\u8fdb\u5165poll\u9636\u6bb5\uff0c\u8be5\u9636\u6bb5\u672c\u5e94\u5c06\u6267\u884c\u961f\u5217\u4e2d\u7684\u4e00\u4e9b\u5f02\u6b65\u4ee3\u7801\u3002\u4f46\u7531\u4e8enextTick\u7684\u5b58\u5728\uff0c\u5c06\u63d2\u961f\u6267\u884c\u5b83\u7684\u56de\u8c03console.log('nextTick')\u3002\u7136\u540e\u6267\u884c\u5f02\u6b65\u51fd\u6570\u7684console.log('async1 end')\u4ee5\u53capromise then\u7684console.log('promise3')\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7136\u540e\u8fdb\u5165\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u3002\u540c\u65f6\u6709setTimeout\u548csetImmediate\uff0c\u4f46\u662f\u5b83\u4eec\u90fd\u662f\u5728\u4e3b\u7a0b\u5e8f\u4e2d\u7684\u3002\u800c\u4e0d\u662f\u5728\u540c\u4e00\u4e2aI/O\u5185\uff0c\u56e0\u6b64\u5b83\u4eec\u7684\u6267\u884c\u987a\u5e8f\u662f\u4e0d\u56fa\u5b9a\u7684\u3002\u7531\u4e8e\u7b2c\u4e00\u4e2asetTimeout\u95f4\u9694\u4e3a0\u79d2\uff0c\u56e0\u6b64\u5b83\u5927\u6982\u7387\u5728\u4e0a\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u4e2d\u5c31\u5df2\u7ecf\u8fbe\u5230\u9884\u5b9a\u65f6\u95f4\uff0c\u6240\u4ee5\u5b83\u7684\u56de\u8c03\u51fd\u6570\u88ab\u6267\u884c\u3002\u7b2c\u4e8c\u4e2asetTimeout\u9884\u5b9a\u65f6\u95f4\u662f3\uff0c\u7531\u4e8e\u6211\u7684\u7b14\u8bb0\u672c\u901f\u5ea6\u5f88\u5feb\u3002\u6240\u4ee5\u5b83\u5728\u4e0a\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u4e2d\u662f\u6ca1\u6709\u8fbe\u5230\u9884\u671f\u65f6\u95f4\u7684\u3002\u6240\u4ee5\u6765\u5230poll\u9636\u6bb5\u65f6\u3002\u961f\u5217\u662f\u7a7a\u7684\u3002\u56e0\u6b64\u5c06\u8fdb\u5165\u5230check\u9636\u6bb5\u6267\u884csetImmediate\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7136\u540e\u5728\u8fdb\u5165\u5230\u4e0b\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u3002\u6b64\u65f6\u7b2c\u4e8c\u4e2a\u5b9a\u65f6\u5668\u4e2d\u7684\u56de\u8c03\u51fd\u6570\u88ab\u6267\u884c\u3002\u5982\u679c\u4f60\u7684\u7535\u8111\u6bd4\u8f83\u6162\u3002\u90a3\u4e48\u7b2c\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u7684\u7528\u65f6\u53ef\u80fd\u4f1a\u8d85\u8fc73ms\u3002\u6b64\u65f6\u8fdb\u5165\u7b2c\u4e8c\u4e2a\u4e8b\u4ef6\u5faa\u73af\u65f6\uff0c\u4e24\u4e2a\u5b9a\u65f6\u5668\u90fd\u5df2\u8fbe\u5230\u9884\u671f\u65f6\u95f4\u3002\u6b64\u65f6setImmediate\u5c06\u6700\u540e\u6267\u884c\uff0c\u5e76\u4e14\u53ea\u4f7f\u7528\u4e86\u4e24\u4e2a\u4e8b\u4ef6\u5faa\u73af\u5468\u671f\u3002"))))}u.isMDXComponent=!0}}]);