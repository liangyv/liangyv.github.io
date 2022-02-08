(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{533:function(t,s,o){"use strict";o.r(s);var i=o(20),a=Object(i.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h3",{attrs:{id:"第6章-关于this"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第6章-关于this"}},[t._v("#")]),t._v(" 第6章 关于this")]),t._v(" "),o("h4",{attrs:{id:"_1-1-为什么要用this"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为什么要用this"}},[t._v("#")]),t._v(" 1.1 为什么要用this")]),t._v(" "),o("p",[t._v("this提供了一种更优雅的方式来隐式传递一个对象的引用，因此可以将API设计的更加简洁并且易于复用。 this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。")]),t._v(" "),o("h5",{attrs:{id:"_1-2-误解"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-误解"}},[t._v("#")]),t._v(" 1.2 误解")]),t._v(" "),o("ul",[o("li",[t._v("误解一、指向自身 按照this这个单词的语意，我们总是会把他认为是指向自身，事实上有些时候确实如此，但是并不是总指向自身。分析下面的模式。")]),t._v(" "),o("li",[t._v("function foo(num) { //记录count被调用的次数 this.count++; } foo.count = 0; var i; for(i=0;i<10;i++){ if(i>5){ foo(i); } } //foo:6 //foo:7 //foo:8 //foo:9 console.log(foo.count);//0")]),t._v(" "),o("li",[t._v("执行foo.count=0时，的却向函数对象foo添加了一个属性count。但是函数内部代码this.count中的this并不是指向那个函数对象，所以虽然属性名相同，根对象却并不相同。")]),t._v(" "),o("li",[t._v("误解二、指向他的作用域 首先这里this有时候指向作用域，有时候又不是，但是明确的一点就是任何时候this都是不会指向他的词法作用域。因为词法作用域是属于引擎的，无法通过js代码进行访问。")])]),t._v(" "),o("h5",{attrs:{id:"_1-3-this到底是什么"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-this到底是什么"}},[t._v("#")]),t._v(" 1.3 this到底是什么")]),t._v(" "),o("p",[o("code",[t._v("this")]),t._v("是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调 用时的各种条件。"),o("code",[t._v("this")]),t._v("的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。")])])}),[],!1,null,null,null);s.default=a.exports}}]);