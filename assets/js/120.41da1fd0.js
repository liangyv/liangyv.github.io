(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{531:function(t,a,s){"use strict";s.r(a);var n=s(20),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"第4章-提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第4章-提升"}},[t._v("#")]),t._v(" 第4章  提升")]),t._v(" "),s("h3",{attrs:{id:"_4-1-先有声明还是先有赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-先有声明还是先有赋值"}},[t._v("#")]),t._v(" 4.1 先有声明还是先有赋值")]),t._v(" "),s("p",[t._v("只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。函数声明会被提升，但是函数表达式不会被提升。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当你看到"),s("code",[t._v("var a = 2;")]),t._v("时，可能会认为这是一个声明。但实际上会将其看成两个声明:"),s("code",[t._v("var a;")]),t._v("和"),s("code",[t._v("a = 2;")]),t._v("。第一个定义声明是在编译阶段进行的。第二个赋值声明会被留在原地等待执行阶段。")]),t._v(" "),s("p",[t._v("这个过程就好像变量和函数声明从它们在代码中出现的位置被“移动” 到了最上面。这个过程就叫作提升。")]),t._v(" "),s("p",[t._v("函数声明和变量声明都会被提升。但是一个值得注意的细节是函数会首先被提升，然后才是变量。")]),t._v(" "),s("h5",{attrs:{id:"_4-2-函数优先"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-函数优先"}},[t._v("#")]),t._v(" 4.2 函数优先")]),t._v(" "),s("p",[t._v("函数首先被提升，其次是变量。")])])}),[],!1,null,null,null);a.default=e.exports}}]);