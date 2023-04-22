"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[6844],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,g=s["".concat(c,".").concat(f)]||s[f]||d[f]||l;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:4,tags:["JS"]},o="\u56db\u3001\u51fd\u6570\u67ef\u91cc\u5316",i={unversionedId:"tutorial/JavaScript/curry-func/index",id:"tutorial/JavaScript/curry-func/index",title:"\u56db\u3001\u51fd\u6570\u67ef\u91cc\u5316",description:"4.1 \u4ec0\u4e48\u662f\u51fd\u6570\u67ef\u91cc\u5316",source:"@site/docs/tutorial/JavaScript/4-curry-func/index.mdx",sourceDirName:"tutorial/JavaScript/4-curry-func",slug:"/tutorial/JavaScript/curry-func/",permalink:"/full-frontend/docs/tutorial/JavaScript/curry-func/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/JavaScript/4-curry-func/index.mdx",tags:[{label:"JS",permalink:"/full-frontend/docs/tags/js"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["JS"]},sidebar:"tutorialSidebar",previous:{title:"\u4e09\u3001\u9ad8\u9636\u51fd\u6570",permalink:"/full-frontend/docs/tutorial/JavaScript/advance-func/"},next:{title:"\u4e94\u3001compose\u3001pipe\u3001\u94fe\u5f0f\u7f16\u7a0b",permalink:"/full-frontend/docs/tutorial/JavaScript/compose-pipe/"}},c={},u=[{value:"4.1 \u4ec0\u4e48\u662f\u51fd\u6570\u67ef\u91cc\u5316",id:"41-\u4ec0\u4e48\u662f\u51fd\u6570\u67ef\u91cc\u5316",level:2},{value:"4.1.1 \u4ec0\u4e48\u60c5\u51b5\u4e0b\u9700\u8981\u67ef\u91cc\u5316",id:"411-\u4ec0\u4e48\u60c5\u51b5\u4e0b\u9700\u8981\u67ef\u91cc\u5316",level:3},{value:"4.1.2 \u6539\u9020\u6210\u67ef\u91cc\u5316\u51fd\u6570",id:"412-\u6539\u9020\u6210\u67ef\u91cc\u5316\u51fd\u6570",level:3},{value:"4.2 \u51fd\u6570\u7684\u67ef\u91cc\u5316\u5c01\u88c5",id:"42-\u51fd\u6570\u7684\u67ef\u91cc\u5316\u5c01\u88c5",level:2}],p={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56db\u51fd\u6570\u67ef\u91cc\u5316"},"\u56db\u3001\u51fd\u6570\u67ef\u91cc\u5316"),(0,a.kt)("h2",{id:"41-\u4ec0\u4e48\u662f\u51fd\u6570\u67ef\u91cc\u5316"},"4.1 \u4ec0\u4e48\u662f\u51fd\u6570\u67ef\u91cc\u5316"),(0,a.kt)("p",null,"\u51fd\u6570\u67ef\u91cc\u5316\u662f\u4e00\u79cd\u6280\u672f\uff0c\u4e00\u79cd\u5c06\u591a\u5165\u53c2\u51fd\u6570\u53d8\u6210\u5355\u5165\u53c2\u51fd\u6570\u3002\u8fd9\u6837\u505a\u4f1a\u8ba9\u51fd\u6570\u53d8\u5f97\u66f4\u590d\u6742\uff0c\u4f46\u540c\u65f6\u4e5f\u63d0\u5347\u4e86\u51fd\u6570\u7684\u666e\u9002\u6027\u3002"),(0,a.kt)("h3",{id:"411-\u4ec0\u4e48\u60c5\u51b5\u4e0b\u9700\u8981\u67ef\u91cc\u5316"},"4.1.1 \u4ec0\u4e48\u60c5\u51b5\u4e0b\u9700\u8981\u67ef\u91cc\u5316"),(0,a.kt)("p",null,"\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u6f14\u793a\u4e86\u68c0\u9a8c\u624b\u673a\u53f7\u7684\u529f\u80fd\u3002\u8be5\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a\u624b\u673a\u53f7\u7684\u6b63\u5219\u5339\u914d\u548c\u5f85\u6d4b\u8bd5\u7684\u624b\u673a\u53f7\u3002\u5728\u67d0\u4e00\u6b21\u6d4b\u8bd5\u4e2d\uff0c\u9700\u8981\u5bf9\u4e00\u6279\u624b\u673a\u53f7\u6309\u7167\u67d0\u79cd\u89c4\u5219\u8fdb\u884c\u5339\u914d\u3002\u7ed3\u679c\u6bcf\u6b21\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u90fd\u8981\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a\u4e00\u76f4\u662f\u56fa\u5b9a\u7684\u3002\u8fd9\u770b\u8d77\u6765\u5f88\u4e0d\u4f18\u96c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u6821\u9a8c\u624b\u673a\u53f7\nfunction validatePhone(regExp,phone){\n  const reg = regExp;\n  if (phone && reg.test(phone) === false) {\n    console.log(`\u624b\u673a\u53f7${phone}\u9a8c\u8bc1\u901a\u8fc7`)\n  } else {\n    console.log(`\u624b\u673a\u53f7${phone}\u683c\u5f0f\u4e0d\u7b26`)\n  }\n}\n\n//\u8c03\u7528\u6821\u9a8c\nvalidatePhone(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/,18712343311)\n//\u8c03\u7528\u6821\u9a8c\nvalidatePhone(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/,13756781234)\n//\u8c03\u7528\u6821\u9a8c\nvalidatePhone(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/,15939086204)\n//\u8c03\u7528\u6821\u9a8c\nvalidatePhone(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/,13731232125)\n//\u8c03\u7528\u6821\u9a8c\nvalidatePhone(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/,19109765236)\n")),(0,a.kt)("h3",{id:"412-\u6539\u9020\u6210\u67ef\u91cc\u5316\u51fd\u6570"},"4.1.2 \u6539\u9020\u6210\u67ef\u91cc\u5316\u51fd\u6570"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4e4b\u524d\u7684\u51fd\u6570\u6539\u9020\u6210\u67ef\u91cc\u5316\u51fd\u6570\u3002\u53ea\u9700\u5c06\u539f\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\u5373\u6b63\u5219\u5339\u914d\u89c4\u5219\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u53d7\u7684\u53c2\u6570\u4e3a\u624b\u673a\u53f7\u3002\u8fd9\u4e4b\u540e\u53ea\u9700\u53ea\u9700\u8c03\u7528\u8fd4\u56de\u7684\u51fd\u6570\u4f20\u5165\u624b\u673a\u53f7\u5373\u53ef\u8fdb\u884c\u6821\u9a8c\u3002\u76f8\u5173\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function validateCurry(regExp) {\n  const reg = regExp;\n  return function (phone) {\n    if (phone && reg.test(phone) === false) {\n      console.log(`\u624b\u673a\u53f7${phone}\u9a8c\u8bc1\u901a\u8fc7`)\n    } else {\n      console.log(`\u624b\u673a\u53f7${phone}\u683c\u5f0f\u4e0d\u7b26`)\n    }\n  }\n}\n\nconst validate = validateCurry(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/)\n\n//\u8c03\u7528\u6821\u9a8c\nvalidate(18712343311)\n//\u8c03\u7528\u6821\u9a8c\nvalidate(13756781234)\n//\u8c03\u7528\u6821\u9a8c\nvalidate(15939086204)\n//\u8c03\u7528\u6821\u9a8c\nvalidate(13731232125)\n//\u8c03\u7528\u6821\u9a8c\nvalidate(19109765236)\n")),(0,a.kt)("h2",{id:"42-\u51fd\u6570\u7684\u67ef\u91cc\u5316\u5c01\u88c5"},"4.2 \u51fd\u6570\u7684\u67ef\u91cc\u5316\u5c01\u88c5"),(0,a.kt)("p",null,"\u4e0a\u4e00\u8282\u7b80\u5355\u5b9e\u73b0\u4e86\u4e00\u4e2a\u67ef\u91cc\u5316\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u6b63\u5219\u5339\u914d\u89c4\u5219\u53c2\u6570\u540e\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u3002\u4e4b\u540e\u53ea\u7528\u8c03\u7528\u8be5\u51fd\u6570\u4f20\u5165\u624b\u673a\u53f7\u8fdb\u884c\u6821\u9a8c\u3002\n\u8fd9\u6837\u770b\u4f3c\u5f88\u4e0d\u9519\u3002\u4f46\u662f\u8fd9\u4e2a\u67ef\u91cc\u5316\u51fd\u6570\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\u3002\u5b83\u7684\u67ef\u91cc\u5316\u7a0b\u5ea6\u662f\u56fa\u5b9a\u6b7b\u7684\uff0c\u5b83\u6c38\u8fdc\u5148\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u518d\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\u3002\n\u5f53\u51fd\u6570\u7684\u53c2\u6570\u6709\u4e09\u4e2a\u6216\u8005\u66f4\u591a\u4ee5\u4e0a\u65f6\u3002\u9700\u8981\u63a5\u53d7\u51e0\u4e2a\u53c2\u6570\u540e\u8fd4\u56de\u51fd\u6570\u90fd\u662f\u4e0d\u56fa\u5b9a\u7684\u3002\u5982\u679c\u6211\u4eec\u9488\u5bf9\u6bcf\u4e2a\u60c5\u51b5\u53bb\u5199\u4e00\u4e2a\u67ef\u91cc\u5316\u51fd\u6570\u663e\u7136\u662f\u4e0d\u73b0\u5b9e\u7684\u3002\u5f53\u53c2\u6570\u8d8a\u591a\u5176\u7ec4\u5408\u4e5f\u8d8a\u591a\u3002\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u6709\u4e00\u4e2a\u51fd\u6570\u67ef\u91cc\u5316\u7684\u5c01\u88c5\u3002\u5b83\u53ef\u4ee5\u9488\u5bf9\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\u7ec4\u5408\u6765\u8fd4\u56de\u67ef\u91cc\u5316\u51fd\u6570\uff0c\u76f8\u5173\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u51fd\u6570\u67ef\u91cc\u5316\u5c01\u88c5\nfunction curry(fn, args) {\n  // \u83b7\u53d6\u5f85\u67ef\u91cc\u5316\u7684\u539f\u59cb\u51fd\u6570\u6709\u51e0\u4e2a\u53c2\u6570\n  let length = fn.length\n  let oldArgs = args || []\n  return function() {\n    // Array.prototype.slice.call\u5c06\u53c2\u6570\u8f6c\u6362\u4e3a\u6570\u7ec4\n    newArgs = oldArgs.concat(Array.prototype.slice.call(arguments))\n    if (newArgs.length < length) {\n      // \u53ef\u4ee5\u7ee7\u7eed\u67ef\u91cc\u5316\n      return curry.call(this, fn, newArgs)\n    } else {\n      return fn.apply(this, newArgs)\n    }\n  }\n  \n}\n\n// \u9700\u8981\u88ab\u67ef\u91cc\u5316\u7684\u51fd\u6570\nfunction multiFn(a, b, c) {\n  return a * b * c;\n}\n\n// multi\u662f\u67ef\u91cc\u5316\u4e4b\u540e\u7684\u51fd\u6570\nvar multi = curry(multiFn);\nconsole.log(multi(2)(3)(4));\nconsole.log(multi(2, 3, 4));\nconsole.log(multi(2, 3)(4));\n")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u5373\u9700\u8981\u88ab\u67ef\u91cc\u5316\u7684\u51fd\u6570\u3002\u7136\u540e\u6bd4\u8f83\u76ee\u524d\u5df2\u7ecf\u63a5\u53d7\u7684\u53c2\u6570\u548c\u6e90\u51fd\u6570\u7684\u53c2\u6570\uff0c\u5982\u679c\u53c2\u6570\u672a\u5168\u90e8\u63a5\u6536\uff0c\u5219\u8868\u793a\u53ef\u4ee5\u7ee7\u7eed\u67ef\u91cc\u5316\uff0c\u8fdb\u800c\u9012\u5f52\u8c03\u7528\u8be5\u51fd\u6570\u3002"))}d.isMDXComponent=!0}}]);