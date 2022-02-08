(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{446:function(e,n,l){"use strict";l.r(n);var a=l(20),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h4",{attrs:{id:"原始数据类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型"}},[e._v("#")]),e._v(" 原始数据类型")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("布尔值")]),e._v(" "),l("ul",[l("li",[e._v("在ts中，使用boolean定义布尔值类型："),l("code",[e._v("let isDone:boolean = false;")])]),e._v(" "),l("li",[e._v("使用构造函数Boolean创造的对象不是布尔值："),l("code",[e._v("let createByNewBoolean:Boolean = new Boolean(1);")])]),e._v(" "),l("li",[e._v("直接调用Boolean也可以返回一个boolean类型："),l("code",[e._v("let createdByBoolean:boolean = Boolean(1);")])]),e._v(" "),l("li",[e._v("在ts中，boolean是js中的基本类型，而Boolean是js种的构造函数，其他类型也是一样。")])])]),e._v(" "),l("li",[l("p",[e._v("数值")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("使用number定义数值类型：")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("let decLiteral:numebr = 6;\nlet hexLiteral:number = 0xf00d;\n//ES6中的二进制表示法\nlet binaryLiteral:number = 0b1010;\n//ES6中的八进制表示法\nlet octalLiteral:number = 0o744;\nlet notANumber:number = NaN;\nlet infinityNumber:number = Infinity;\n\n//编译结果\nvar decLiteral = 6;\nvar hexLiteral = 0xf00d;\n// ES6 中的二进制表示法\nvar binaryLiteral = 10;\n// ES6 中的八进制表示法\nvar octalLiteral = 484;\nvar notANumber = NaN;\nvar infinityNumber = Infinity;\n")])])])])])])])]),e._v(" "),l("li",[l("p",[e._v("字符串")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("使用string定义字符串类型：")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("let myName:string = 'Tom';\nlet myAge:number = 25;\n//模板字符串\nlet sentence:string = `Hello,my name is ${myName}.I'll be ${myAge+1}years old next month.`\n\n//编译结果：\nvar myName = 'Tom';\nvar myAge = 25;\n// 模板字符串\nvar sentence = \"Hello, my name is \" + myName + \".\nI'll be \" + (myAge + 1) + \" years old next month.\";\n")])])])])])]),e._v(" "),l("li",[l("p",[e._v("``用来定义ES6中的模板字符串，${exp}在模板字符串中嵌入表达式")])])])]),e._v(" "),l("li",[l("p",[e._v("空值")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("在JS中，没有空值的概念，在TS中，可以用 void 表示没有任何返回值的函数")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("function alertName():void{\n\talert('My name is Tom');\n}\n")])])])])])]),e._v(" "),l("li",[l("p",[e._v("声明一个void类型的变量没什么用，只能将它赋值为 undefined和null")]),e._v(" "),l("ul",[l("li",[l("code",[e._v("let unusable:void = undefined;")])])])])])]),e._v(" "),l("li",[l("p",[e._v("Null和undefined")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("在TS中，可以使用null和undefined来定义这两个原始数据类型")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("ley u:undefined = undefined;\nlet n:null = null;\n")])])])])])]),e._v(" "),l("li",[l("p",[e._v("与void的区别是：undefined和null是所有类型的子类型。也就是说undefined类型的变量，可以赋值给number类型的变量：")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("let num:number = undefined;\n\nlet u:undefined;\nlet num:number = u;\n而void类型的变量不能赋值给number类型的变量:\nlet u:void;\nlet num:number = u;\n// Type'void' is not assignable to type 'number'.\n")])])])])])])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);