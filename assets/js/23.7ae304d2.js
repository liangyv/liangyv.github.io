(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{436:function(e,t,n){"use strict";n.r(t);var o=n(20),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"vue实例的生命周期图示详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue实例的生命周期图示详解"}},[e._v("#")]),e._v(" Vue实例的生命周期图示详解")]),e._v(" "),n("p",[e._v("每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。从vue实例的创建，运行，销毁期间，总是伴随着各种各样的事件，这些事件统称为"),n("strong",[e._v("生命周期")]),e._v("。")]),e._v(" "),n("p",[e._v("Vue生命周期经历哪些阶段：")]),e._v(" "),n("p",[e._v("总体来说：初始化、运行中、销毁\n详细来说：开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、销毁等一系列过程\n以下是Vue生命周期函数图示：\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807082759139.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v("\n可以看到在vue一整个的生命周期中会有很多钩子函数提供给我们在vue生命周期不同的时刻进行操作，钩子函数如下:")]),e._v(" "),n("ul",[n("li",[e._v("beforeCreate")]),e._v(" "),n("li",[e._v("created")]),e._v(" "),n("li",[e._v("beforeMount")]),e._v(" "),n("li",[e._v("mounted")]),e._v(" "),n("li",[e._v("beforeUpdate")]),e._v(" "),n("li",[e._v("updated")]),e._v(" "),n("li",[e._v("beforeDestroy")]),e._v(" "),n("li",[e._v("destroyed")])]),e._v(" "),n("p",[e._v("详细情况如下：")]),e._v(" "),n("ul",[n("li",[e._v("实例通过new Vue() 创建出来之后会初始化Vue自身带的事件和生命周期，然后进入beforeCreate函数阶段，此时，数据data还没有挂载到vm对象，无法访问到数据data和真实的dom挂载元素el")]),e._v(" "),n("li",[e._v("只有在挂载数据data，绑定事件等之后，才会进入created函数阶段，此时可以使用数据data，也可更改数据data，但是在这里更改数据不会触发updated钩子函数。"),n("strong",[e._v("注：此时挂载元素el还不存在")])]),e._v(" "),n("li",[e._v("判断对象是否有挂载元素el选项。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上手动挂载，即调用vm.$mount(el)。")]),e._v(" "),n("li",[e._v("然后判断template参数选项，如果vue实例对象中有template参数选项，则将其作为模板template编译成虚拟dom放入到render函数中准备渲染。如果没有template选项，则将挂载元素el的外部HTML作为模板template编译。")]),e._v(" "),n("li",[e._v("模板编译之后进入beforeMount函数阶段，给Vue实例添加el成员，并替换掉挂载的DOM元素")]),e._v(" "),n("li",[e._v("进入mounted函数阶段，此时可以进行真实的DOM操作了")]),e._v(" "),n("li",[e._v("当data中的数据发生变化就会进入beforeUpdate函数阶段，会出发相对应的组件重新渲染，触发updated函数")]),e._v(" "),n("li",[e._v("当调用vm.$destroy()时，会进入beforedestroy函数阶段")]),e._v(" "),n("li",[e._v("Vue实例指示的所有东西都会解绑，事件监听器被移除，子实例被销毁，进入destroy函数阶段，此时一个Vue实例的生命周期结束。")])]),e._v(" "),n("p",[e._v("代码演示：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Vue实例生命周期函数</title>\n    <script src="./vue.js"><\/script>\n</head>\n<body>\n    <div id="app"></div>\n    <script>\n        //生命周期函数就是Vue实例在某一个时间点会自动执行的函数\n        var vm=new Vue({\n            el:"#app",\n            template:"<div>{{test}}</div>",\n            data:{\n                test:"hello"\n            },\n            computed:{\n                \n            },\n            beforeCreate:function(){\n                console.log("----beforeCreate---创建前状态---")\n                console.log(this.$el)\n               \n            },\n            created:function(){\n                console.log("----created---创建完状态--")\n                console.log(this.$el)\n                \n            },\n            beforeMount:function(){\n                console.log("----beforeMount---挂载前状态--")\n                console.log(this.$el)\n                \n            },\n            mounted:function(){\n                console.log("---mounted---挂载完状态--")\n                console.log(this.$el)\n                \n            },\n            \n            beforeUpdate:function(){\n                console.log("----beforeUpdate---更新前状态--")\n                console.log(this.$el)\n                \n            },\n            updated:function(){\n                console.log("---updated---更新完状态--")\n                console.log(this.$el)\n                \n            },\n            beforeDestroy:function(){\n                console.log("---beforeDestroy---销毁前状态--")\n                console.log(this.$el)\n               \n            },\n            destroyed:function(){\n                console.log("---destroyed---销毁完状态--")\n                console.log(this.$el)\n               \n            },\n        })\n    <\/script>\n</body>\n</html>\n')])])]),n("p",[e._v("代码显示：\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807091542644.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v("\n页面显示的数据和挂载的数据一致：\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807091908476.png",alt:"在这里插入图片描述"}}),e._v("\n修改数据之后：\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807092156290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v("\n数据更新之后页面显示和输入一致：\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807092321600.png",alt:"在这里插入图片描述"}}),e._v("\n当经过某种途径调用$destroy方法后，在实例销毁之前 立即执行beforeDestroy，在实例销毁之前调用。在这一步，实例仍然完全可用。\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807092817679.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v("\n以上是我对Vue生命周期的一点理解，欢迎大家指正修改！")])])}),[],!1,null,null,null);t.default=s.exports}}]);