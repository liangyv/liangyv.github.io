(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{477:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[s._v("#")]),s._v(" 状态码")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("XX（成功处理了请求状态）\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" 服务器已经成功处理请求，并提供了请求的网页\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v(" 用户新建或修改数据成功\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202")]),s._v(" 一个请求已经进入后台\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),s._v(" 用户删除成功\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("XX（每次请求使用的重定向不要超过"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("次）\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v(" 网页上次请求没有更新，节省带宽和开销\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("XX（表示请求可能出错，妨碍了服务器的处理）\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v(" 服务器不理解请求的语法\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),s._v(" 用户没有权限（用户名，密码输入错误）\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v(" 用户得到授权（"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),s._v("相反），但是访问被禁止\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" 服务器找不到请求的网页，\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("XX（表示服务器在处理请求的时候发生内部错误）\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" 服务器遇到错误，无法完成请求\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" 服务器目前无法使用（超载或停机维护）     \n\n")])])]),a("h4",{attrs:{id:"_304的缓存原理-添加etag标签-last-modified-304-网页上次请求没有更新-节省带宽和开销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_304的缓存原理-添加etag标签-last-modified-304-网页上次请求没有更新-节省带宽和开销"}},[s._v("#")]),s._v(" 304的缓存原理（添加Etag标签.last-modified） 304 网页上次请求没有更新，节省带宽和开销")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("服务器首先产生Etag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("服务器可在稍后使用它来判断页面是否被修改。本质上，客户端通过该记号传回服务器要求服务器验证（客户端）缓存）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.304")]),s._v("是\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),s._v("的状态码，服务器用来标识这个文件没有被修改，不返回内容，浏览器接受到这个状态码会去去找浏览器缓存的文件\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("流程：客户端请求一个页面"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("。服务器返回页面"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("，并在"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("上加一个Tage客服端渲染该页面，并把Tage也存储在缓存中。客户端再次请求页面"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("\n\t并将上次请求的资源和ETage一起传递给服务器。服务器检查Tage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("并且判断出该页面自上次客户端请求之后未被修改。直接返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v("\n\nlast"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("modified"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 客服端请求资源，同时有一个last"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("modified的属性标记此文件在服务器最后修改的时间\n\t\t客服端第二次请求此url时，根据http协议。浏览器会向服务器发送一个If"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Modified"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Since报头，\n\t\t询问该事件之后文件是否被修改，没修改返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v("\n\n 有了Last"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Modified，为什么还要用ETag？\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、因为如果在一秒钟之内对一个文件进行两次更改，Last"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Modified就会不正确（Last—Modified不能识别秒单位的修改）\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、某些服务器不能精确的得到文件的最后修改时间\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、一些文件也行会周期新的更改，但是他的内容并不改变（仅仅改变修改的事件），这个时候我们并不希望客户端认为文件被修改，而重新Get\n\nETag，为什么还要用Last"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Modified？\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、两者互补，ETag的判断的缺陷，比如一些图片等静态文件的修改\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、如果每次扫描内容都生成ETag比较，显然要比直接比较修改时间慢的多。\n\n\nETag是被请求变量的实体值（文件的索引节，大小和最后修改的时间的Hash值）\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、ETag的值服务器端对文件的索引节，大小和最后的修改的事件进行Hash后得到的。\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);