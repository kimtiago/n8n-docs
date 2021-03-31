(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1705:function(t,a,n){"use strict";n.r(a);var s=n(26),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"data-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),n("p",[t._v('For "basic usage" it is not necessarily needed to understand how the data that\ngets passed from one node to another is structured. However, it becomes important if you want to:')]),t._v(" "),n("ul",[n("li",[t._v("create your own node")]),t._v(" "),n("li",[t._v("write custom expressions")]),t._v(" "),n("li",[t._v("use the Function or Function Item node")]),t._v(" "),n("li",[t._v("you want to get the most out of n8n")])]),t._v(" "),n("p",[t._v("In n8n, all the data that is passed between nodes is an array of objects. It has the following structure:")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Each item has to contain a "json" property. But it can be an empty object like {}.')]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Any kind of JSON data is allowed. So arrays and the data being deeply nested is fine.")]),t._v("\n\t\tjson"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The actual data n8n operates on (required)")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This data is only an example it could be any kind of JSON data")]),t._v("\n\t\t\tjsonKeyName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'keyValue'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tanotherJsonKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tlowerLevelJsonKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Binary data of item. The most items in n8n do not contain any (optional)")]),t._v("\n\t\tbinary"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// The key-name "binaryKeyName" is only an example. Any kind of key-name is possible.')]),t._v("\n\t\t\tbinaryKeyName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tdata"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '....'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Base64 encoded binary data (required)")]),t._v("\n\t\t\t\tmimeType"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'image/png'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n\t\t\t\tfileExtension"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'png'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n\t\t\t\tfileName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'example.png'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t...\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);