(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{456:function(n,t,a){"use strict";a.r(t);var e=a(20),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"三栏式布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三栏式布局"}},[n._v("#")]),n._v(" 三栏式布局")]),n._v(" "),a("p",[n._v("三栏式布局就是两边固定，中间自适应。\n三栏式布局实现方法有很多，包括：")]),n._v(" "),a("ul",[a("li",[n._v("流体布局")]),n._v(" "),a("li",[n._v("BFC三栏布局")]),n._v(" "),a("li",[n._v("双飞翼布局")]),n._v(" "),a("li",[n._v("圣杯布局")]),n._v(" "),a("li",[n._v("Flex布局")]),n._v(" "),a("li",[n._v("Table布局")]),n._v(" "),a("li",[n._v("绝对定位布局")]),n._v(" "),a("li",[n._v("网格布局")])]),n._v(" "),a("h2",{attrs:{id:"流体布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流体布局"}},[n._v("#")]),n._v(" 流体布局")]),n._v(" "),a("blockquote",[a("p",[a("strong",[n._v("左侧向左浮动、右侧向右浮动，最后渲染中间实现")]),n._v("；最后渲染中间也就意味着在html中内容div写在最后，并设置"),a("strong",[n._v("中间模块的 margin 值")]),n._v("使中间模块宽度自适应 \t\n"),a("strong",[n._v("缺点")]),n._v("就是主要内容无法最先加载，当页面内容较多时会影响用户体验")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <div class="wrap">\n        <div class="left">左侧</div>      \n        <div class="right">右侧</div>\n        <div class="main">中间</div>\n    </div>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" <style>\n        *{\n            margin: 0;\n            border: 0;\n        }\n        .left{\n            width: 100px;\n            height:500px;\n            background-color: yellow;\n            float: left;\n        }\n        .right{\n            width: 200px;\n            height: 500px;\n            background-color: palevioletred;\n            float: right;\n        }\n        .main{\n            height: 500px;\n            background-color: aqua;\n            margin-left: -100px;\n            margin-right: -200px;\n        }\n    </style>\n")])])]),a("p",[n._v("效果：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190901105648949.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),n._v(" "),a("h2",{attrs:{id:"bfc布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc布局"}},[n._v("#")]),n._v(" BFC布局")]),n._v(" "),a("blockquote",[a("p",[n._v("BFC 区域，不会与浮动元素重叠。"),a("strong",[n._v("左右模块各自向左右浮动")]),n._v("，并设置中间模块的"),a("code",[n._v("overflow：hidden")]),n._v("，使中间模块宽度自适应")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" <style>\n        *{\n            margin: 0;\n            border: 0;\n        }\n        .left{\n            width: 100px;\n            height:500px;\n            background-color: yellow;\n            float: left;\n        }\n        .main{\n            height: 500px;\n            background-color: aqua;\n            overflow: hidden;\n        }\n        .right{\n            width: 200px;\n            height: 500px;\n            background-color: palevioletred;\n            float: right;\n        }\n    </style>\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190901233755597.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),n._v(" "),a("h2",{attrs:{id:"双飞翼布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双飞翼布局"}},[n._v("#")]),n._v(" 双飞翼布局")]),n._v(" "),a("blockquote",[a("p",[n._v("按照“"),a("strong",[n._v("中左右")]),n._v("”的顺序排放元素，都设置浮动，最中间元素宽度设置为100%，\n利用"),a("strong",[n._v("左右margin负边距将左右元素拉到左右位置")])])]),n._v(" "),a("p",[n._v("利用的是"),a("strong",[n._v("浮动")]),n._v("元素和 "),a("strong",[n._v("margin 负值")]),n._v("（中间设置子元素，margin的左右值是左右两边元素的宽度），主体内容可以优先加载，HTML 代码结构稍微复杂点。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <div class="wrap">\n        <div class="center">\n            <div class="center-child">中间mmmmmmmmmm</div>\n        </div>\n        <div class="left">左侧</div>\n        <div class="right">右侧</div>\n    </div>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("<style>\n        .wrap{\n            border: 1px solid #000;\n            overflow: hidden;\n        }\n        .center{\n            width:100%;\n            height:500px;\n            background-color: yellow;\n            float: left;\n        }\n        .center-child{\n            width:100%;\n            height: 400px;\n            background-color: aqua;\n            //为子元素设置左右margin，防止内容被遮挡\n            margin-left: 150px;\n            margin-right: 250px;\n        }\n        .left{\n            width:150px;\n            height:500px;\n            background-color: red;\n            float: left;\n            margin-left: -100%;\n        }\n        .right{\n            width:250px;\n            height:500px;\n            background-color: blue;\n            float: left;\n            margin-left:-250px;\n        }\n    </style>\n")])])]),a("p",[n._v("效果：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190902165316278.png",alt:"在这里插入图片描述"}})]),n._v(" "),a("h2",{attrs:{id:"圣杯布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[n._v("#")]),n._v(" 圣杯布局")]),n._v(" "),a("blockquote",[a("p",[n._v("按照“"),a("strong",[n._v("中左右")]),n._v("”的顺序排放元素，都设置浮动，最中间元素宽度设置为100%，\n利用"),a("strong",[n._v("左右margin负边距将左右元素拉到左右位置")])])]),n._v(" "),a("p",[n._v("圣杯布局使用"),a("strong",[n._v("padding")]),n._v("和"),a("strong",[n._v("定位")]),n._v("（父元素设置左右padding，再给左右元素设置相对定位）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(' <div class="wrap">\n        <div class="center"></div>\n        <div class="left"></div>\n        <div class="right"></div>\n    </div>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<style>\n    .wrap{\n        border:1px red solid;\n        padding:0 250px 0 200px;\n    }\n    .wrap>div{\n        float: left;\n        height:300px;\n    } \n    .wrap:after{\n        display:block;\n        content: "";\n        clear:both;\n    }\n    \n    .center{\n        width:100%;\n        background-color:yellow;\n    }\n    .left{\n        width:200px;\n        background-color:blue;\n        margin-left:-100%;\n        position:relative;\n        left:-200px;\n    }\n    \n    .right{\n        width:250px;\n        background-color:green;\n        margin-left:-250px;\n        position:relative;\n        right:-250px;\n    }\n    </style>\n')])])]),a("p",[n._v("效果：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190902170029764.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),n._v(" "),a("h2",{attrs:{id:"flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[n._v("#")]),n._v(" Flex布局")]),n._v(" "),a("p",[n._v("给父元素设置"),a("code",[n._v("display: flex;justify-content: space-around")]),n._v("即可，代码简单方便")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<div class="wrap">\n        <div class="left">左侧</div>\n        <div class="center">中间</div>\n        <div class="right">右侧</div>\n    </div>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" <style>\n        .wrap{\n            display: flex;\n            justify-content: space-around;\n        }\n        .left{\n            width:200px;\n            height:500px;\n            background-color: blue;\n        }\n        .center{\n            width:100%;\n            height:500px;\n            background-color: yellow;\n        }\n        .right{\n            width:100px;\n            height:500px;\n            background-color: pink;\n        }\n    </style>\n")])])]),a("p",[n._v("效果：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190902171458618.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),n._v("\n最后，要注意区分圣杯布局和双飞翼布局哦1")])])}),[],!1,null,null,null);t.default=s.exports}}]);