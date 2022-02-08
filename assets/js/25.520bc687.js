(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{435:function(t,a,s){"use strict";s.r(a);var p=s(20),n=Object(p.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h4",{attrs:{id:"vue的prop属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的prop属性"}},[t._v("#")]),t._v(" Vue的prop属性")]),t._v(" "),s("p",[t._v("在Vue中，父子组件的关系可以总结为propsDown，eventsUp。父组件通过props向下传递数据给子组件，子组件通过events给父组件发送消息。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("prop的作用就是父组件向子组件单向传递数据，该过程是单向的，传递的属性可以是静态的，也可以是动态的，可以是数字、字符串、数组、对象以及校验函数进行校验。")])]),t._v(" "),s("li",[s("p",[t._v("所有的prop都使得其父子组件之间形成了一个单向下行绑定：父组件的prop的更新会向下流动到子组件中，但反过来不行，这样就会防止从子组件意外改变父组件以及同级子组件的状态，从而导致应用的数据流难以理解。")])]),t._v(" "),s("li",[s("p",[t._v("每次父组件发生更新时，子组件中所有的prop都将刷新为最新的值，意味着不能在子组件内部改变prop，这样的话Vue会在控制台抛出一个警告。")])]),t._v(" "),s("li",[s("p",[t._v("一般子组件想要操作prop中的值，需要将prop中的值赋值给本地定义的属性，且将prop作为初始值。")])]),t._v(" "),s("li",[s("p",[t._v("当prop传入之后需要进行转换时，可以使用computed来进行定义。")])]),t._v(" "),s("li",[s("p",[t._v("子组件用props接收父组件传来的消息由多种形式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("数组形式  props:[data1,data2]    直接接收消息，不做任何校验，不建议使用")])]),t._v(" "),s("li",[s("p",[t._v("简单对象形式  props:{ data1:String , data2: Array } 进行了类型校验，若类型不一致，控制台会报错。")])]),t._v(" "),s("li",[s("p",[t._v("复杂对象形式")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("复杂对象形式的情况下，作为对象属性的参数可以写为对象形式，参数对象含有4个属性，type、required、default、validator。")])]),t._v(" "),s("li",[s("p",[t._v("type:设定参数类型，当传入参数类型与type不相符时，控制台会报错")])]),t._v(" "),s("li",[s("p",[t._v("required:设定参数是否为必传，当设为true时，不传该参数会报错")])]),t._v(" "),s("li",[s("p",[t._v("default:设置默认值，当参数类型为复杂类型时，需要使用工厂模式生成默认值，否则vue会在控制台抛出警告。")])]),t._v(" "),s("li",[s("p",[t._v("validator:校验器，一个函数，拥有一个代表传入值的形参，可以自定义各种校验，当返回false时，会报错，表示校验未通过。")])])])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);