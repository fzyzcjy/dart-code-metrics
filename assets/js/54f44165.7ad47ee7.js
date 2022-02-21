"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Installation and Usage",sidebar_position:1},c="Installing the package",s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installing the package",description:"To install the package as a dev dependency run",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Installation and Usage",sidebar_position:1},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Configuration",permalink:"/docs/getting-started/configuration"}},u=[{value:"OR",id:"or",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Analyzer plugin",id:"analyzer-plugin",children:[],level:3},{value:"CLI",id:"cli",children:[],level:3},{value:"Library",id:"library",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-the-package"},"Installing the package"),(0,i.kt)("p",null,"To install the package as a dev dependency run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart pub add --dev dart_code_metrics\n\n# or for a Flutter package\n$ flutter pub add --dev dart_code_metrics\n")),(0,i.kt)("h2",{id:"or"},"OR"),(0,i.kt)("p",null,"add it manually to ",(0,i.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pubspec.yaml"',title:'"pubspec.yaml"'},"environment:\n  sdk: '>=2.12.0 <3.0.0'\n\ndev_dependencies:\n  dart_code_metrics: ^4.11.0\n")),(0,i.kt)("p",null,"and then run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart pub get\n\n# or for a Flutter package\n$ flutter pub get\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"analyzer-plugin"},"Analyzer plugin"),(0,i.kt)("p",null,"To use Dart Code Metrics as a plugin to the Dart analyzer refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/analyzer-plugin"},"Analyzer Plugin documentation section"),"."),(0,i.kt)("h3",{id:"cli"},"CLI"),(0,i.kt)("p",null,"To use Dart Code Metrics as a command-line tool refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli/overview"},"Command Line Interface documentation section"),"."),(0,i.kt)("h3",{id:"library"},"Library"),(0,i.kt)("p",null,"To use Dart Code Metrics as a library refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dart-code-checker/dart-code-metrics/blob/master/example/example.dart"},"example"),"."))}p.isMDXComponent=!0}}]);