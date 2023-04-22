"use strict";(self.webpackChunkfull_frontend=self.webpackChunkfull_frontend||[]).push([[9918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||u;return n?a.createElement(h,o(o({ref:t},i),{},{components:n})):a.createElement(h,o({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,o=new Array(u);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<u;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const u={sidebar_position:5,tags:["React"]},o="\u4e94\u3001useReducer",s={unversionedId:"tutorial/React-Hooks/useReducer/index",id:"tutorial/React-Hooks/useReducer/index",title:"\u4e94\u3001useReducer",description:"1\u3001\u4f7f\u7528useReducer\u4ee3\u66ffuseState\u7ba1\u7406\u72b6\u6001",source:"@site/docs/tutorial/React-Hooks/5-useReducer/index.mdx",sourceDirName:"tutorial/React-Hooks/5-useReducer",slug:"/tutorial/React-Hooks/useReducer/",permalink:"/full-frontend/docs/tutorial/React-Hooks/useReducer/",draft:!1,editUrl:"https://github.com/WindDancerUBI/full-frontend/blob/main/docs/tutorial/React-Hooks/5-useReducer/index.mdx",tags:[{label:"React",permalink:"/full-frontend/docs/tags/react"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"\u56db\u3001useLayoutEffect",permalink:"/full-frontend/docs/tutorial/React-Hooks/useLayoutEffect/"},next:{title:"\u516d\u3001useContext",permalink:"/full-frontend/docs/tutorial/React-Hooks/useContext/"}},c={},l=[{value:"1\u3001\u4f7f\u7528useReducer\u4ee3\u66ffuseState\u7ba1\u7406\u72b6\u6001",id:"1\u4f7f\u7528usereducer\u4ee3\u66ffusestate\u7ba1\u7406\u72b6\u6001",level:2},{value:"<strong>\u529f\u80fd\u63cf\u8ff0\uff1a</strong>",id:"\u529f\u80fd\u63cf\u8ff0",level:3},{value:"\u4ee3\u7801\u5b9e\u73b0\uff1a",id:"\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"2\u3001useReducer\u5982\u4f55diapstch\u51fd\u6570",id:"2usereducer\u5982\u4f55diapstch\u51fd\u6570",level:2}],i={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e94usereducer"},"\u4e94\u3001useReducer"),(0,r.kt)("h2",{id:"1\u4f7f\u7528usereducer\u4ee3\u66ffusestate\u7ba1\u7406\u72b6\u6001"},"1\u3001\u4f7f\u7528useReducer\u4ee3\u66ffuseState\u7ba1\u7406\u72b6\u6001"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useReducer"),"\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u7684\u66ff\u4ee3\u65b9\u6848\u3002\u5b83\u63a5\u6536\u4e00\u4e2a\u5f62\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),"\u7684 reducer\uff0c\u5e76\u8fd4\u56de\u5f53\u524d\u7684 state \u4ee5\u53ca\u4e0e\u5176\u914d\u5957\u7684 dispatch \u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u76f8\u6bd4\u8f83\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer")," \u5177\u6709\u5982\u4e0b\u4f18\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"state\u4e2d\u7684\u72b6\u6001\u503c\u4e4b\u95f4\u76f8\u4e92\u5173\u8054\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u4e00\u4e2a state\u7684\u66f4\u65b0\u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 state\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e\u5982\u4f55\u4f7f\u7528useReducer"),(0,r.kt)("h3",{id:"\u529f\u80fd\u63cf\u8ff0"},(0,r.kt)("strong",{parentName:"h3"},"\u529f\u80fd\u63cf\u8ff0\uff1a")),(0,r.kt)("p",null,"\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u6570\u5b57\u8fdb\u884c\u4e0d\u65ad\u5730\u8d4b\u503c\uff0c\u540c\u65f6\u8bb0\u5f55\u4e0b\u5386\u53f2\u503c\uff1b\u53ef\u4ee5\u901a\u8fc7undo\u5bf9\u5f53\u524d\u503c\u8fdb\u884c\u64a4\u9500\u64cd\u4f5c\uff0c\u4e00\u6b65\u6b65\u5730\u56de\u5230\u6700\u521d\u503c\u3002\u5728\u8fdb\u884c\u64a4\u9500\u64cd\u4f5c\u7684\u540c\u65f6\uff0c\u8bb0\u5f55\u4e0bundo\u6389\u7684\u503c\uff1b\u901a\u8fc7redo\u53ef\u4ee5\u56de\u5230undo\u4e4b\u524d\u7684\u503c\uff0c\u4e0d\u65ad\u5730redo\u6700\u7ec8\u53ef\u4ee5\u56de\u5230\u6267\u884c\u6240\u6709\u64a4\u9500\u64cd\u4f5c\u4e4b\u524d\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\u521b\u5efareducer\u3002\u5176\u4f5c\u7528\u662f\u9488\u5bf9\u4e0d\u540c\u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u6539\u53d8\u5f53\u524d\u72b6\u6001\u503c\uff0c\u5e76\u5c06\u5bf9\u5e94\u7684\u5386\u53f2\u8bb0\u5f55\u5b58\u50a8\u5230past\u3001future\u4e2d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export type State<T> = {\n  past: T[]; // \u5b58\u653e\u5386\u53f2\u503c\n  present: T; // \u5f53\u524d\u503c\n  future: T[]; // \u5b58\u653eundo\u503c\uff0c\u7528\u4e8e\u53d6\u6d88\u64a4\u9500\n}\n\nexport type Action<T> = {\n  newPresent?: T;\n  type: 'UNDO' | 'REDO' | 'SET' | 'RESET';\n}\n\nexport const undoReducer = <T>(state: State<T>, action: Action<T>) => {\n  const { past, present, future } = state;\n  const {newPresent} = action\n  switch (action.type) {\n    case 'UNDO':\n      if (past.length === 0) return state;\n      const previous = past[past.length - 1];\n      const newPast = past.slice(0, past.length - 1);\n      return {\n        past: newPast,\n        present: previous,\n        future: [present, ...future],\n      };\n    case 'REDO':\n      if (future.length === 0) return state;\n      const next = future[0];\n      const newFuture = future.slice(1);\n      return {\n        past: [...past, present],\n        present: next,\n        future: newFuture,\n      };\n    case 'SET':\n      if (newPresent === present) return state;\n      return {\n        past: [...past, present],\n        present: newPresent,\n        future: [],\n      };\n    case 'RESET':\n      return {\n        past: [],\n        present: newPresent,\n        future: [],\n      };\n    default:\n      return state\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528reducer\uff0c\u5b9a\u4e49\u5404\u79cd\u70b9\u51fb\u65f6\u95f4\u5e94\u8be5dispatch\u7684\u7c7b\u578b\u548c\u503c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Chapter5_1() {\n  const [state, dispatch] = useReducer(undoReducer, {\n    past: [],\n    present: 0,\n    future: [],\n  } as State<number>)\n\n  const present = state.present as number;\n\n  const canUndo = state.past.length !== 0;\n  const canRedo = state.future.length !== 0;\n\n  // \u64a4\u9500\n  const undo = useCallback(() => {dispatch({type: 'UNDO'})}, []);\n\n  // \u53d6\u6d88\u64a4\u9500\n  const redo = useCallback(() => {dispatch({type: 'REDO'})}, []);\n\n  // \u6307\u5b9a\u4e3a\u7279\u5b9a\u503c\n  const set = useCallback((newPresent: number) => {dispatch({type: 'SET', newPresent: newPresent})}, []);\n\n  // \u91cd\u7f6e\u4e3a\u521d\u59cb\u503c\n  const reset = useCallback(() => {dispatch({type: 'RESET', newPresent: 0})}, []);\n\n  return (\n    <div>\n      <div>\u5f53\u524d\u503c\uff1a{present}</div>\n      <div style={{ marginTop: 30 }}>\n        <Button onClick={undo} disabled={!canUndo} style={{ marginRight: 15 }}>\n          \u64a4\u9500\n        </Button>\n        <Button onClick={redo} disabled={!canRedo} style={{ marginRight: 15 }}>\n          \u6062\u590d\u64a4\u9500\n        </Button>\n        <Button\n          onClick={() => {\n            set(present + 1);\n          }}\n          style={{ marginRight: 15 }}\n        >\n          \u589e\u52a0\n        </Button>\n        <Button\n          onClick={() => {\n            set(present - 1);\n          }}\n          style={{ marginRight: 15 }}\n        >\n          \u51cf\u5c11\n        </Button>\n        <Button onClick={reset}>\u91cd\u7f6e</Button>\n      </div>\n    </div>\n  );\n}\n\nexport default Chapter5_1;\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u9488\u5bf9\u590d\u6742\u7684\u72b6\u6001\u5e76\u4e14\u72b6\u6001\u4e4b\u95f4\u76f8\u4e92\u5173\u8054\u65f6\u65f6\uff0c\u4f7f\u7528useReducer\u6bd4useState\u5177\u6709\u5f88\u5927\u7684\u4f18\u52bf"),(0,r.kt)("h2",{id:"2usereducer\u5982\u4f55diapstch\u51fd\u6570"},"2\u3001useReducer\u5982\u4f55diapstch\u51fd\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useReducer"),"\u7684\u8bbe\u8ba1\u7406\u5ff5\u4e0eredux\u662f\u76f8\u4e00\u81f4\u7684\uff0c\u5373\u6570\u636e\u6539\u53d8\u5fc5\u987b\u53ef\u63a7\u3002\u56e0\u6b64reducer\u4e2d\u8fd4\u56de\u7684\u5fc5\u987b\u662fplian object\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u5728\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u8981\u7528\u5230\u7684\u72b6\u6001\u5927\u591a\u6570\u90fd\u662f\u4ece\u540e\u53f0\u83b7\u53d6\u7684\u3002\u5f53\u7136\u4f60\u53ef\u4ee5\u5728\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u540e\uff0c\u518ddispatch\u63a5\u53e3\u6570\u636e\uff0c\u4f46\u662f\u8fd9\u6837\u7684\u8bdd\uff0c\u4ee3\u7801\u8026\u5408\u5ea6\u5c31\u5f88\u9ad8\u4e86\uff0c\u8fd9\u6837\u7ec4\u4ef6\u5c31\u504f\u79bb\u4e86\u4e13\u6ce8\u4e8e\u6e32\u67d3\uff01"),(0,r.kt)("p",null,"\u5728redux\u4e2ddispatch\u5f02\u6b65\u51fd\u6570\u7684\u89e3\u51b3\u65b9\u6848\u6709redux-thunk\uff0c\u5176\u4ee3\u7801\u975e\u5e38\u7684\u77ed\u5c0f\u7cbe\u608d\u3002\u5176\u539f\u7406\u5c31\u662f\u62e6\u622aaction\uff0c\u5982\u679c\u662f\u51fd\u6570\uff0c\u5c31\u6267\u884c\u8be5\u51fd\u6570\uff0c\u518d\u5c06\u8be5\u51fd\u6570\u5176\u8fd4\u56de\u503caction\u4f20\u5165dispatch\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// redux-thunk\u6e90\u7801\nfunction createThunkMiddleware(extraArgument) {\n  return ({ dispatch, getState }) => next => action => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState, extraArgument);\n    }\n\n    return next(action);\n  };\n}\n\nconst thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\nexport default thunk;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4eff\u7167redux-thunk\uff0c\u6211\u4eec\u53ef\u4ee5\u7ed9useReducer\u8fdb\u884c\u4e00\u6b21\u5c01\u88c5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useReducer } from \"react\";\nimport { Action, State } from \"./reducer\";\n\nconst thunkDispatch = (dispatch: React.Dispatch<Action>, getState: () => \n  {\n    loading: boolean;\n    dataSource: any;\n  }\n) => {\n  return (action: any) => {\n    if (typeof action === 'function') {\n      action(thunkDispatch(dispatch, getState), getState);\n    } else {\n      dispatch(action);\n    }\n  };\n};\n\nexport const useThunkReducer = (reducer: (state: State, action: Action) => \n  {\n    loading: boolean;\n    dataSource: any;\n  }, \n  defaultState: State\n) => {\n  const [state, dispatch] = useReducer(reducer, defaultState);\n  const getState = () => state;\n  const newDispatch = thunkDispatch(dispatch, getState);\n  return [state, newDispatch] as const\n};\n\nexport const getDataSource = () => {\n  return (dispatch: React.Dispatch<Action>) => {\n    setTimeout(() => {\n      dispatch({\n        type: 'SUCCESS',\n        data: [\n          {key: 1, name: '\u5c0f\u660e', age: Math.ceil(Math.random()* 30), gender: 'male'},\n          {key: 2, name: '\u5c0f\u82b1', age: Math.ceil(Math.random()* 30), gender: 'female'},\n          {key: 3, name: '\u5c0f\u5f20', age: Math.ceil(Math.random()* 30), gender: 'male'},\n          {key: 4, name: '\u5c0f\u674e', age: Math.ceil(Math.random()* 30), gender: 'female'},\n        ]\n      })\n    }, 1000);\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49reducer\u548c\u83b7\u53d6\u63a5\u53e3\u6570\u636e\u7684\u8bf7\u6c42\u51fd\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export type State = {\n  loading: boolean; // \u52a0\u8f7d\u72b6\u6001\n  dataSource: any[]\n}\n\nexport type Action = {\n  data?: any[];\n  type: 'START' | 'SUCCESS';\n}\n\nexport const fetchDataReducer = (state: State, action: Action) => {\n  switch (action.type) {\n    case 'START':\n      return {\n        ...state,\n        loading: true,\n      }\n    case 'SUCCESS':\n      return {\n        loading: false,\n        dataSource: action.data\n      };\n    default:\n      return state\n  }\n}\n\nexport const getDataSource = () => {\n  return (dispatch: React.Dispatch<Action>) => {\n    setTimeout(() => {\n      dispatch({\n        type: 'SUCCESS',\n        data: [\n          {key: 1, name: '\u5c0f\u660e', age: Math.ceil(Math.random()* 30), gender: 'male'},\n          {key: 2, name: '\u5c0f\u82b1', age: Math.ceil(Math.random()* 30), gender: 'female'},\n          {key: 3, name: '\u5c0f\u5f20', age: Math.ceil(Math.random()* 30), gender: 'male'},\n          {key: 4, name: '\u5c0f\u674e', age: Math.ceil(Math.random()* 30), gender: 'female'},\n        ]\n      })\n    }, 1000);\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528useThunkReducer\u6765dispatch\u5f02\u6b65\u51fd\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function Chapter5_2() {\n  const [state, dispatch] = useThunkReducer(fetchDataReducer, {\n    dataSource: [],\n    loading: false\n  })\n\n  const { loading, dataSource } = state as State\n\n  const clickHandle = () => {\n    // \u8bf7\u6c42\u5f00\u59cb\u524d\uff0c\u5148\u5c06\u52a0\u8f7d\u72b6\u6001\u7f6e\u4e3atrue\n    dispatch({\n      type: \'START\',\n      dataSource: []\n    })\n    // \u76f4\u63a5\u5c06\u8bf7\u6c42\u63a5\u53e3\u7684\u51fd\u6570\u4f20\u7ed9dispatch\n    dispatch(getDataSource())\n  }\n\n  return (\n    <div>\n      <Button onClick={clickHandle}>\u5237\u65b0</Button>\n      <Table dataSource={dataSource} loading={loading}>\n        <Table.Column dataIndex="name" title="\u59d3\u540d"/>\n        <Table.Column dataIndex="age" title="\u5e74\u9f84"/>\n        <Table.Column dataIndex="gender" title="\u6027\u522b"/>\n      </Table>\n    </div>\n  );\n}\n\nexport default Chapter5_2;\n')))}p.isMDXComponent=!0}}]);