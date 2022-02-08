(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{455:function(t,n,r){"use strict";r.r(n);var s=r(20),i=Object(s.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"css3之盒子模型详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css3之盒子模型详解"}},[t._v("#")]),t._v(" CSS3之盒子模型详解")]),t._v(" "),r("p",[r("strong",[t._v("1、什么是盒子模型？")]),t._v("\nCSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。\n在CSS中盒模型被分为两种：第 一种 是 W3C的标准模型，另一种 是IE的传统模型（也叫怪异盒模型）。")]),t._v(" "),r("p",[r("strong",[t._v("2、W3C 的标准模型")]),t._v(" "),r("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190630155041775.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("W3C的标准模型实际上是内容盒模型，元素的内容占据我们设置的宽高，内容周围的padding和border是另外计算的，即盒子内容的宽/高是我们设置的宽/高，盒子总宽/高是设置的宽/高+padding+border+margin。")]),t._v(" "),r("p",[r("em",[r("strong",[r("strong",[t._v("计算公式")]),t._v("：盒子总宽度=width+padding（左右）+border（左右）+margin(左右)\n盒子总高度=height+padding（上下）+border（上下）+margin(上下)")])])]),t._v(" "),r("p",[r("strong",[t._v("3、IE的传统模型（怪异盒模型）")]),t._v(" "),r("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190630161004288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("在IE传统浏览器下，我们设置的宽高包括content、padding、border在内的。\n"),r("em",[r("strong",[t._v("盒子的总宽度=width+margin（左右）（width已经包括了padding和border）\n盒子的总高度=height+margin（上下）")])])]),t._v(" "),r("p",[t._v("为了解决如何应用和选择哪种盒模型的问题，CSS3新增了一个属性box-sizing")]),t._v(" "),r("p",[r("strong",[t._v("盒模型的box-sizing属性：")])]),t._v(" "),r("ul",[r("li",[t._v("content-box：内容盒模型，默认值，元素遵循W3C盒模型")]),t._v(" "),r("li",[t._v("border-box：怪异盒模型，内容遵循低版本IE浏览器下传统盒模型")]),t._v(" "),r("li",[t._v("inherit：元素继承父元素的盒模型模式")])])])}),[],!1,null,null,null);n.default=i.exports}}]);