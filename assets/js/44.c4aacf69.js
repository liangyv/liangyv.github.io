(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{454:function(t,n,e){"use strict";e.r(n);var a=e(20),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"css的各种居中方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css的各种居中方法"}},[t._v("#")]),t._v(" css的各种居中方法")]),t._v(" "),e("p",[t._v("css的居中主要分为"),e("strong",[t._v("水平居中")]),t._v("和"),e("strong",[t._v("垂直居中")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"水平居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),e("p",[t._v("水平居中可分为行内元素水平居中和块级元素水平居中。")]),t._v(" "),e("p",[e("strong",[t._v("1. 行内元素水平居中")]),t._v("\n这里行内元素是指文本text、图像img、按钮超链接等，只需给父元素设置"),e("code",[t._v("text-align:center")]),t._v("即可实现。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <style>\n        .wrap{\n            width: 200px;\n            height: 100px;\n            border: 1px solid #000;\n            text-align: center;\n            color: red;\n        }\n    </style>\n</head>\n<body>\n    <div class="wrap">\n        <span>行内元素水平居中</span>\n    </div>    \n</body>\n</html>\n')])])]),e("p",[t._v("如图所示：\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190830181053707.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),e("strong",[t._v("3. 块级元素水平居中")]),t._v("\n1）定宽块级元素水平居中\n只需给需要居中的块级元素加"),e("code",[t._v("margin:0 auto")]),t._v("即可，但这里块状元素的宽度width值一定要设置\n2）不定宽块级元素水平居中\n方法一、设置"),e("code",[t._v("dispaly:table")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <style>\n        .center {\n            display: table;\n            margin: 0 auto;\n            border: 1px solid red;\n        }\n    </style>\n</head>\n\n<body>\n \x3c!-- 设置dispaly:table --\x3e\n    <div class="center">水平居中</div>\n</body>\n</html>\n')])])]),e("p",[t._v("如图：\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190830181726631.png",alt:"在这里插入图片描述"}}),t._v("\n方法二、设置"),e("code",[t._v("inline-block")]),t._v("（"),e("strong",[t._v("多个块状元素")]),t._v("）\n子元素设置inline-block，同时父元素设置"),e("code",[t._v("text-align:center")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <style>\n        .center1 {\n            width:200px;\n            height:200px;\n            text-align: center;\n            border:1px solid #000;\n        }\n        .inlineblock-div {\n            display: inline-block;\n        }\n    </style>\n</head>\n<body>\n    \x3c!-- 设置dispaly：inline-block --\x3e\n    <div class="center1">\n        <div class="inlineblock-div">块级元素1</div>\n        <div class="inlineblock-div">块级元素2</div>\n    </div>\n</body>\n</html>\n')])])]),e("p",[t._v("如图：\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190830182225121.png",alt:"在这里插入图片描述"}}),t._v("\n方法三、设置flex布局（较常用）\n只需把要处理的块状元素的父元素设置"),e("code",[t._v("display:flex,justify-content:center;")])]),t._v(" "),e("h2",{attrs:{id:"垂直居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),e("p",[e("strong",[t._v("行内元素")]),t._v(" "),e("strong",[t._v("1、单行文本垂直居中")]),t._v("\n设置"),e("code",[t._v("paddingtop=paddingbottom")]),t._v("；或设置"),e("code",[t._v("line-height=height")]),t._v("；\n"),e("strong",[t._v("2、多行文本垂直居中")]),t._v("\n可以将元素转为table样式，通过设置父元素table，子元素"),e("code",[t._v("table-cell；vertical-align:middle")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("        .center-table{\n            width: 200px;\n            height: 200px;\n            display: table;\n        }\n        .table-div{\n            display: table-cell;\n            vertical-align: middle;\n            border: 1px solid red;\n        }\n")])])]),e("p",[e("strong",[t._v("块级元素")])]),t._v(" "),e("p",[t._v("方法一、flex布局\n在需要垂直居中的父元素上，设置"),e("code",[t._v("display:flex；align-items：center")]),t._v("\n要求：父元素必须显示设置height值\n方法二、利用position和top和负margin（"),e("strong",[t._v("需知宽高")]),t._v("）\n设置父元素为"),e("code",[t._v("position:relative")]),t._v(",子元素设置为："),e("code",[t._v("position：absolute;top:50%;margin-top:height的一半;")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("        .wrap{\n            position: relative;\n            width:500px;\n            height:500px;\n            border: 1px solid #000;\n        }\n        .child{\n            height:100px;\n            width:100px;\n            background-color: aquamarine;\n            color:red;\n            position:absolute;\n            top:50%;\n            margin-top: -50px;\n        }\n")])])]),e("p",[t._v("方法三：利用position和top和transform（未知宽高）\ntransform中translate偏移的百分比就是相对于元素自身的尺寸而言的。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("       .wrap{\n            position: relative;\n        } \n        .child{\n            background-color: aquamarine;\n            color:red;\n            position:absolute;\n            top:50%;\n            transform: translateY(-50%)\n        }\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);