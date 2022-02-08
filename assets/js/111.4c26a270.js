(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{522:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"可维护性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可维护性"}},[t._v("#")]),t._v(" 可维护性")]),t._v(" "),a("h4",{attrs:{id:"什么是可维护的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是可维护的代码"}},[t._v("#")]),t._v(" 什么是可维护的代码")]),t._v(" "),a("ul",[a("li",[t._v("可理解性")]),t._v(" "),a("li",[t._v("直观性")]),t._v(" "),a("li",[t._v("可适应性")]),t._v(" "),a("li",[t._v("可扩展性")]),t._v(" "),a("li",[t._v("可调试性")])]),t._v(" "),a("h4",{attrs:{id:"代码约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码约定"}},[t._v("#")]),t._v(" 代码约定")]),t._v(" "),a("p",[t._v("需要加注释的地方：")]),t._v(" "),a("ul",[a("li",[t._v("函数和方法")]),t._v(" "),a("li",[t._v("大段代码")]),t._v(" "),a("li",[t._v("复杂的算法")]),t._v(" "),a("li",[t._v("Hack")])]),t._v(" "),a("p",[t._v("命名应该：")]),t._v(" "),a("ul",[a("li",[t._v("变量名应该为名词")]),t._v(" "),a("li",[t._v("函数名应该以动词开始")]),t._v(" "),a("li",[t._v("命名要合乎逻辑和可以理解，不要担心太长")])]),t._v(" "),a("p",[t._v("变量类型透明，js类型是松散的，所以可有有以下三种方式来标识：")]),t._v(" "),a("ol",[a("li",[t._v("初始化时给一个默认值")]),t._v(" "),a("li",[t._v("匈牙利标记法，给变量加一个定义的开头")]),t._v(" "),a("li",[t._v("类型注释")])]),t._v(" "),a("h4",{attrs:{id:"松散耦合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#松散耦合"}},[t._v("#")]),t._v(" 松散耦合")]),t._v(" "),a("ol",[a("li",[t._v("解耦HTML和JS")]),t._v(" "),a("li",[t._v("解耦CSS和JS")]),t._v(" "),a("li",[t._v("解耦应用逻辑和事件处理逻辑")])]),t._v(" "),a("p",[t._v("应用和业务逻辑之间松散耦合的几条原则：")]),t._v(" "),a("ul",[a("li",[t._v("勿将event对象传给其他方法，只传来自event对象中所需要的数据")]),t._v(" "),a("li",[t._v("任何可以再应用层面的动作都应该可以在不执行任何事件处理程序的情况下进行")]),t._v(" "),a("li",[t._v("任何事件处理程序都应该处理事件，然后将处理结果转交给应用逻辑")])]),t._v(" "),a("h4",{attrs:{id:"编程实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程实践"}},[t._v("#")]),t._v(" 编程实践")]),t._v(" "),a("ol",[a("li",[t._v("尊重对象所有权")]),t._v(" "),a("li",[t._v("避免全局变量")]),t._v(" "),a("li",[t._v("避免与null比较")]),t._v(" "),a("li",[t._v("使用常量")])]),t._v(" "),a("h3",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),a("h4",{attrs:{id:"注意作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意作用域"}},[t._v("#")]),t._v(" 注意作用域")]),t._v(" "),a("ol",[a("li",[t._v("避免全局查找")]),t._v(" "),a("li",[t._v("避免with语句")])]),t._v(" "),a("p",[t._v("这2个问题都可以通过局部变量的方式将全局查找的次数缩小，从而提升执行速度。")]),t._v(" "),a("h4",{attrs:{id:"选择正确方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择正确方式"}},[t._v("#")]),t._v(" 选择正确方式")]),t._v(" "),a("p",[t._v("避免不必要的属性查找")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("标记")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("O(1)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("常数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不管值有多少，执行时间都是恒定的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("O(log n)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行时间和值的数量有关，但是不一定需要执行每个值。比如：二分查找")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("O(n)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("线性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行时间和值的数量直接相关。比如：遍历")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("O(n²)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("平方")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行时间和值的数量有关，并且每个值都要执行多次。比如：插入排序")])])])]),t._v(" "),a("ul",[a("li",[t._v("常量、变量、数组直接下标取值的的复杂度都是O(1)")]),t._v(" "),a("li",[t._v("属性查找的复杂度是O(n)")])]),t._v(" "),a("p",[t._v("优化循环")]),t._v(" "),a("ol",[a("li",[t._v("减值迭代（其实目的就是不要重复计算数据长度，增值的话在循环外部获得确定的循环次数常量也是一样的）")]),t._v(" "),a("li",[t._v("简化终止条件")]),t._v(" "),a("li",[t._v("简化循环体")]),t._v(" "),a("li",[t._v("使用后测试循环（避免最初终止条件计算）")])]),t._v(" "),a("p",[t._v("展开循环")]),t._v(" "),a("p",[t._v("当循环次数确定时，可以完全展开循环内容，直接书写代码。")]),t._v(" "),a("p",[t._v("当循环次数不定时，可以通过Duff装置，讲循环用switch-case按照8的倍数去执行。但是这个方法主要是处理大数量，如果数据量较小得不偿失。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iterations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" leftover "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftover "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("leftover "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("iterations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("避免双重解释")]),t._v(" "),a("p",[t._v("避免用eval()函数、new Fuction()、setTimeout等去执行js字符串，而是应该直接声明，避免js解析器启动解析的开销")]),t._v(" "),a("p",[t._v("其他注意事项")]),t._v(" "),a("ol",[a("li",[t._v("原生方法较快：原生方法特别是数学计算都是用C/C++实现的")]),t._v(" "),a("li",[t._v("Switch语句较快：替换大量if-else，还可以通过case顺序把最可能被执行的放到最前来加速")]),t._v(" "),a("li",[t._v("位运算较快：取模、逻辑与、逻辑或都可以考虑用位运算来代替")])]),t._v(" "),a("h4",{attrs:{id:"最小化语句数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最小化语句数"}},[t._v("#")]),t._v(" 最小化语句数")]),t._v(" "),a("ol",[a("li",[t._v("多个变量声明：能一起声明的就一起声明")]),t._v(" "),a("li",[t._v("插入迭代值：把i++这类操作合并")]),t._v(" "),a("li",[t._v("使用数组和字面量")])]),t._v(" "),a("h4",{attrs:{id:"优化dom交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化dom交互"}},[t._v("#")]),t._v(" 优化DOM交互")]),t._v(" "),a("ol",[a("li",[t._v("最小化现场更新")]),t._v(" "),a("li",[t._v("使用innerHTML")]),t._v(" "),a("li",[t._v("使用事件代理")]),t._v(" "),a("li",[t._v("注意HTMLCollection")])]),t._v(" "),a("p",[t._v("何时会返回HTMLCollection对象：")]),t._v(" "),a("ul",[a("li",[t._v("getElementsByTagName()调用")]),t._v(" "),a("li",[t._v("获取了元素的childNodes属性")]),t._v(" "),a("li",[t._v("获取了元素的attributes属性")]),t._v(" "),a("li",[t._v("访问了特殊集合，比如document.forms、document.images等")])]),t._v(" "),a("h3",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("h4",{attrs:{id:"构建过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建过程"}},[t._v("#")]),t._v(" 构建过程")]),t._v(" "),a("p",[t._v("为什么需要构建过程：")]),t._v(" "),a("ul",[a("li",[t._v("保证自己的代码知识产权，不能轻易暴露代码意图")]),t._v(" "),a("li",[t._v("降低文件大小，去掉无意义的代码和分隔符以及减小冗余的变量名")]),t._v(" "),a("li",[t._v("重新组织代码")])]),t._v(" "),a("h4",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),a("p",[t._v("文章提供的方案比较老了，现在一般都是用ESLint来做了")]),t._v(" "),a("h4",{attrs:{id:"压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[t._v("#")]),t._v(" 压缩")]),t._v(" "),a("p",[t._v("JS文件压缩，其实是在讨论2个问题：")]),t._v(" "),a("ol",[a("li",[t._v("代码长度：浏览器需要解析的字节数")]),t._v(" "),a("li",[t._v("配重(Wire weigth)：实际从服务器传递到浏览器的字节数")])]),t._v(" "),a("p",[t._v("压缩方式：")]),t._v(" "),a("ol",[a("li",[t._v("文件压缩：删除空白符、换行符，删除注释，缩短变量名")]),t._v(" "),a("li",[t._v("HTTP压缩：Web服务器开启压缩，浏览器解压缩，例如开启gzip压缩")])])])}),[],!1,null,null,null);s.default=e.exports}}]);