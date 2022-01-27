"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5958],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1557:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={},s="Analyze",c={unversionedId:"cli/analyze",id:"cli/analyze",title:"Analyze",description:"Reports code metrics, rules and anti-patterns violations. To execute the command, run",source:"@site/docs/cli/analyze.md",sourceDirName:"cli",slug:"/cli/analyze",permalink:"/docs/cli/analyze",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/cli/analyze.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/cli/overview"},next:{title:"Check unused code",permalink:"/docs/cli/check-unused-code"}},d=[{value:"Output example",id:"output-example",children:[{value:"Console",id:"console",children:[],level:3},{value:"HTML",id:"html",children:[{value:"HTML report overview",id:"html-report-overview",children:[],level:4},{value:"HTML single file report",id:"html-single-file-report",children:[],level:4},{value:"HTML report details",id:"html-report-details",children:[],level:4}],level:3},{value:"JSON",id:"json",children:[{value:"The <strong>root</strong> object fields are",id:"the-root-object-fields-are",children:[],level:4},{value:"The <strong>record</strong> object fields are",id:"the-record-object-fields-are",children:[],level:4},{value:"The <strong>summary-record</strong> object fields are",id:"the-summary-record-object-fields-are",children:[],level:4},{value:"The <strong>report</strong> object fields are",id:"the-report-object-fields-are",children:[],level:4},{value:"The <strong>code span</strong> object fields are",id:"the-code-span-object-fields-are",children:[],level:4},{value:"The <strong>location</strong> object fields are",id:"the-location-object-fields-are",children:[],level:4},{value:"The <strong>metric value</strong> object fields are",id:"the-metric-value-object-fields-are",children:[],level:4},{value:"The <strong>context message</strong> object fields are",id:"the-context-message-object-fields-are",children:[],level:4},{value:"The <strong>issue</strong> object fields are",id:"the-issue-object-fields-are",children:[],level:4},{value:"The <strong>suggestion</strong> object fields are",id:"the-suggestion-object-fields-are",children:[],level:4}],level:3},{value:"GitHub",id:"github",children:[{value:"Full Example",id:"full-example",children:[],level:4}],level:3},{value:"GitLab",id:"gitlab",children:[],level:3}],level:2}],m={toc:d};function p(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"analyze"},"Analyze"),(0,i.kt)("p",null,"Reports code metrics, rules and anti-patterns violations. To execute the command, run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart run dart_code_metrics:metrics analyze lib\n\n# or for a Flutter package\n$ flutter pub run dart_code_metrics:metrics analyze lib\n")),(0,i.kt)("p",null,"Full command description:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Usage: metrics analyze [arguments...] <directories>\n\n-h, --help                                        Print this usage information.\n\n\n-r, --reporter=<console>                          The format of the output of the analysis\n                                                  [console (default), console-verbose,\n                                                  codeclimate, github, gitlab, html, json]\n-o, --output-directory=<OUTPUT>                   Write HTML output to OUTPUT\n                                                  (defaults to "metrics/")\n\n\n    --cyclomatic-complexity=<20>                  Cyclomatic Complexity threshold.\n    --halstead-volume=<150>                       Halstead Volume threshold.\n    --lines-of-code=<100>                         Lines of Code threshold.\n    --maximum-nesting-level=<5>                   Maximum Nesting Level threshold.\n    --number-of-methods=<10>                      Number of Methods threshold.\n    --number-of-parameters=<4>                    Number of Parameters threshold.\n    --source-lines-of-code=<50>                   Source lines of Code threshold.\n    --technical-debt=<0>                          Technical Debt threshold.\n    --weight-of-class=<0.33>                      Weight Of a Class threshold.\n    --maintainability-index=<50>                  Maintainability Index threshold.\n\n    --root-folder=<./>                            Root folder\n                                                  (defaults to current directory)\n    --sdk-path=<directory-path>                   Dart SDK directory path. \n                                                  Should be provided only when you run the application as compiled executable(https://dart.dev/tools/dart-compile#exe) and automatic Dart SDK path detection fails.\n    --exclude=<{/**.g.dart,/**.template.dart}>    File paths in Glob syntax to be exclude\n                                                  (defaults to "{/**.g.dart,/**.template.dart}")\n\n\n    --set-exit-on-violation-level=<warning>       Set exit code 2 if code violations \n                                                  have the same or higher level\n                                                  [none, warning, alarm]\n    --[no-]fatal-style                            Treat style level issues as fatal.\n    --[no-]fatal-performance                      Treat performance level issues as fatal.\n    --[no-]fatal-warnings                         Treat warning level issues as fatal.\n')),(0,i.kt)("h2",{id:"output-example"},"Output example"),(0,i.kt)("h3",{id:"console"},"Console"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=console")," to enable this format."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Console",src:a(4889).Z,width:"1860",height:"1400"})),(0,i.kt)("h3",{id:"html"},"HTML"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=html")," to enable this format."),(0,i.kt)("h4",{id:"html-report-overview"},"HTML report overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HTML",src:a(2835).Z,width:"1400",height:"907"})),(0,i.kt)("h4",{id:"html-single-file-report"},"HTML single file report"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HTML",src:a(8482).Z,width:"1400",height:"916"})),(0,i.kt)("h4",{id:"html-report-details"},"HTML report details"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HTML",src:a(3998).Z,width:"1400",height:"616"})),(0,i.kt)("h3",{id:"json"},"JSON"),(0,i.kt)("p",null,"The reporter prints a single JSON object containing meta information and the violations grouped by a file. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=json")," to enable this format."),(0,i.kt)("h4",{id:"the-root-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"root")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formatVersion")," - an integer representing the format version (will be incremented each time the serialization format changes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," - a creation time of the report in YYYY-MM-DD HH:MM:SS format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"records")," - an array of ",(0,i.kt)("a",{parentName:"li",href:"#the-record-object-fields-are"},"objects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"summary")," - an array of ",(0,i.kt)("a",{parentName:"li",href:"#the-summary-record-object-fields-are"},"objects")," ",(0,i.kt)("em",{parentName:"li"},"(optional)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "formatVersion": 2,\n  "timestamp": "2021-04-11 14:44:42",\n  "records": [\n    {\n      ...\n    },\n    {\n      ...\n    },\n    {\n      ...\n    }\n  ],\n  "summary": [\n    {\n      ...\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"the-record-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"record")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - a relative path to the target file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fileMetrics")," - an array with target file ",(0,i.kt)("a",{parentName:"li",href:"#the-metric-value-object-fields-are"},"metrics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"classes")," - a map with ",(0,i.kt)("strong",{parentName:"li"},"class name")," as the ",(0,i.kt)("strong",{parentName:"li"},"key")," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#the-report-object-fields-are"},"class report"))," as the ",(0,i.kt)("strong",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"functions")," - a map with ",(0,i.kt)("strong",{parentName:"li"},"function name")," as the ",(0,i.kt)("strong",{parentName:"li"},"key")," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#the-report-object-fields-are"},"function report"))," as the ",(0,i.kt)("strong",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"issues")," - an array of ",(0,i.kt)("a",{parentName:"li",href:"#the-issue-object-fields-are"},"issues")," detected in the target file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"antiPatternCases")," - an array of ",(0,i.kt)("a",{parentName:"li",href:"#the-issue-object-fields-are"},"anti-pattern cases")," detected in the target file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "path": "lib/src/metrics/metric_computation_result.dart",\n  "classes": {\n    ...\n  },\n  "functions": {\n    ...\n  },\n  "issues": [\n    ...\n  ],\n  "antiPatternCases": [\n    ...\n  ]\n}\n')),(0,i.kt)("h4",{id:"the-summary-record-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"summary-record")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," - a status of information in this record"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," - a message with information about the record"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," - an actual value of this record (can be an array or a single value)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"violations")," - a value of a violations count of a metric associated with this record")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "status": "warning",\n    "title": "Average Cyclomatic Number per line of code",\n    "value": 0.3447098976109215,\n    "violations": 5\n}\n')),(0,i.kt)("h4",{id:"the-report-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"report")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"codeSpan")," - a source ",(0,i.kt)("a",{parentName:"li",href:"#the-code-span-object-fields-are"},"code span")," of the target entity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metrics")," - an array with target entity ",(0,i.kt)("a",{parentName:"li",href:"#the-metric-value-object-fields-are"},"metrics"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "codeSpan": {\n    ...\n  },\n  "metrics": [\n    ...\n  ]\n}\n')),(0,i.kt)("h4",{id:"the-code-span-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"code span")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start")," - a start ",(0,i.kt)("a",{parentName:"li",href:"#the-location-object-fields-are"},"location")," of an entity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end")," - an end ",(0,i.kt)("a",{parentName:"li",href:"#the-location-object-fields-are"},"location")," of an entity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text")," - a source code text of an entity")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "start": {\n    ...\n  },\n  "end": {\n    ...\n  },\n  "text": "entity source code"\n}\n')),(0,i.kt)("h4",{id:"the-location-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"location")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offset")," - a zero-based offset of the location in the source"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"line")," - a zero-based line of the location in the source"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column")," - a zero-based column of the location in the source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "offset": 156,\n  "line": 7,\n  "column": 1\n}\n')),(0,i.kt)("h4",{id:"the-metric-value-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"metric value")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metricsId")," - an id of the computed metric"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," - an actual value computed by the metric"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unitType")," - a human readable unit type ",(0,i.kt)("em",{parentName:"li"},"(optional)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," - a level of the value computed by the metric"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"comment")," - a message with information about the value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recommendation")," - a message with information about how the user can improve the value ",(0,i.kt)("em",{parentName:"li"},"(optional)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")," - an ",(0,i.kt)("a",{parentName:"li",href:"#the-context-message-object-fields-are"},"additional information")," associated with the value that helps understand how the metric was computed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "metricsId": "number-of-methods",\n  "value": 14,\n  "unitType": "methods",\n  "level": "warning",\n  "comment": "This class has 14 methods, which exceeds the maximum of 10 allowed.",\n  "recommendation": "Consider breaking this class up into smaller parts.",\n  "context": [\n    ...\n  ]\n}\n')),(0,i.kt)("h4",{id:"the-context-message-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"context message")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," - an message to be displayed to the user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"codeSpan")," - a source ",(0,i.kt)("a",{parentName:"li",href:"#the-code-span-object-fields-are"},"code span")," associated with or referenced by the message")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "message": "getter complexityEntities increase metric value",\n  "codeSpan": {\n    ...\n  }\n}\n')),(0,i.kt)("h4",{id:"the-issue-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"issue")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ruleId")," - an id of the rule associated with the issue"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documentation")," - an url of a page containing documentation associated with the issue"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"codeSpan")," - a source ",(0,i.kt)("a",{parentName:"li",href:"#the-code-span-object-fields-are"},"code span")," associated with the issue"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"severity")," - a severity of the issue"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," - a short message"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verboseMessage")," - a verbose message containing information about how the user can fix the issue (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"suggestion")," - a ",(0,i.kt)("a",{parentName:"li",href:"#the-suggestion-object-fields-are"},"suggested")," relevant change (optional)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "ruleId": "long-parameter-list",\n  "documentation": "https://git.io/JUGrU",\n  "codeSpan": {\n    ...\n  },\n  "severity": "none",\n  "message": "Long Parameter List. This function require 5 arguments.",\n  "verboseMessage": "Based on configuration of this package, we don\'t recommend writing a function with argument count more than 4.",\n  "suggestion": {\n    ...\n  }\n}\n')),(0,i.kt)("h4",{id:"the-suggestion-object-fields-are"},"The ",(0,i.kt)("strong",{parentName:"h4"},"suggestion")," object fields are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"comment")," - a human-readable description of the change to be applied"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replacement")," - a code with changes to replace original code with")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "comment": "Add trailing comma",\n  "replacement": "WeightOfClassMetric.metricId: (config) => WeightOfClassMetric(config: config),"\n}\n')),(0,i.kt)("h3",{id:"github"},"GitHub"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"DEPRECATED!")," This reporter is deprecated and will be removed in 5.0.0. You can migrate on our ",(0,i.kt)("a",{parentName:"p",href:"/docs/integrations/github-action"},"GitHub Action"),".")),(0,i.kt)("p",null,"Reports about design and static code diagnostics issues in pull requests based on GitHub Actions Workflow commands. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=github")," to enable this format."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install dart/flutter and get packages:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flutter example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  your_job_name:\n    steps:\n      - name: Install Flutter\n        uses: subosito/flutter-action@master\n        with:\n          channel: stable\n\n      - name: Install dependencies\n        run: flutter pub get\n      ...\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dart example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  your_job_name:\n    steps:\n      - name: Install Dart\n        uses: dart-lang/setup-dart@v1\n\n      - name: Install dependencies\n        run: flutter pub get\n      ...\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run dart_code_metrics package:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"dart_code_metrics")," is added to ",(0,i.kt)("inlineCode",{parentName:"strong"},"dev_dependencies"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run Code Metrics\n  run: flutter pub run dart_code_metrics:metrics --reporter=github lib\n  # OR\n  # run: dart pub run dart_code_metrics:metrics --reporter=github lib\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"dart_code_metrics")," is not added to ",(0,i.kt)("inlineCode",{parentName:"strong"},"dev_dependencies")," (run as a global dependency)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run Code Metrics\n  run: flutter pub global activate dart_code_metrics && flutter pub global run dart_code_metrics:metrics --reporter=github lib\n  # OR\n  # run: dart pub global activate dart_code_metrics && dart pub global run dart_code_metrics:metrics --reporter=github lib\n")))),(0,i.kt)("h4",{id:"full-example"},"Full Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  your_job_name:\n    steps:\n      - name: Install Flutter\n        uses: subosito/flutter-action@master\n        with:\n          channel: stable\n\n      - name: Install dependencies\n        run: flutter pub get\n\n      - name: Run Code Metrics\n        run: flutter pub run dart_code_metrics:metrics --reporter=github lib\n")),(0,i.kt)("p",null,"Example of a report in a PR:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Report example",src:a(729).Z,width:"2432",height:"788"})),(0,i.kt)("h3",{id:"gitlab"},"GitLab"),(0,i.kt)("p",null,"Reports about design and static code diagnostics issues in merge requests based on Code Quality custom tool. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=gitlab")," to enable this format."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define a job in your ",(0,i.kt)("inlineCode",{parentName:"li"},".gitlab-ci.yml")," file that generates the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/yaml/index.html#artifactsreportscodequality"},"Code Quality report artifact"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"code_quality:\n  image: google/dart\n  before_script:\n    - dart pub global activate dart_code_metrics\n  script:\n    - dart pub global run dart_code_metrics:metrics lib -r gitlab > code-quality-report.json\n  artifacts:\n    reports:\n      codequality: code-quality-report.json\n")),(0,i.kt)("p",null,"Example of a Code Quality widget in a PR:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code Quality widget",src:a(8880).Z,width:"1280",height:"371"})),(0,i.kt)("p",null,"Example of a Code Quality in a PR diff view:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitLab diff",src:a(6153).Z,width:"1280",height:"491"})))}p.isMDXComponent=!0},729:function(e,t,a){t.Z=a.p+"assets/images/annotation-495af2badb131479e11577077ca073dc.png"},4889:function(e,t,a){t.Z=a.p+"assets/images/console-report-8b988d688fa294fb28554987fe5ebb0a.png"},6153:function(e,t,a){t.Z=a.p+"assets/images/gitlab-codequality-diff-view-fe437781894b6f0e89c4e8edd4888899.jpg"},8880:function(e,t,a){t.Z=a.p+"assets/images/gitlab-codequality-widget-463c77c4548e2a2712ba9f0a5561c849.jpg"},3998:function(e,t,a){t.Z=a.p+"assets/images/html-details-report-bd69e07a7c0a8ac71440da76e74bbc59.png"},2835:function(e,t,a){t.Z=a.p+"assets/images/html-report-596f8a85e33e4b83e2de585f374066cf.png"},8482:function(e,t,a){t.Z=a.p+"assets/images/html-single-file-report-2eee64063f485134e91a22f83b8642d0.png"}}]);