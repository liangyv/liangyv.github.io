(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{513:function(t,a,e){"use strict";e.r(a);var s=e(20),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"跨文档消息传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨文档消息传递"}},[t._v("#")]),t._v(" 跨文档消息传递")]),t._v(" "),e("p",[t._v("跨文档消息传送（cross-document messaging）有时候简称为XDM，指的是在来自不同域的页面间传递消息。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iframeWindow "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myframe"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\niframeWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello jaybai"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.juzilicai.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("接收到XDM消息时，会触发window对象的message事件，异步触发。传递给onmessage处理程序的事件对象包含以下三方面的重要信息：")]),t._v(" "),e("ul",[e("li",[t._v("data：postMessage()的第一个参数字符串")]),t._v(" "),e("li",[t._v("origin：发送消息的文档所在的域")]),t._v(" "),e("li",[t._v("source：发送消息的文档的window对象的代理。如果同域那就是window对象")])]),t._v(" "),e("h3",{attrs:{id:"原生拖放"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生拖放"}},[t._v("#")]),t._v(" 原生拖放")]),t._v(" "),e("p",[t._v("拖放事件")]),t._v(" "),e("p",[t._v("拖动某元素时，将依次触发被拖动元素的下列事件：")]),t._v(" "),e("ol",[e("li",[t._v("dragstart")]),t._v(" "),e("li",[t._v("drag")]),t._v(" "),e("li",[t._v("dragend")])]),t._v(" "),e("p",[t._v("当某个元素被拖动到一个有效的放置目标上时，下列事件会依次发生在放置目标的元素上：")]),t._v(" "),e("ol",[e("li",[t._v("dragenter")]),t._v(" "),e("li",[t._v("dragover")]),t._v(" "),e("li",[t._v("dragleave 或 drop")])]),t._v(" "),e("p",[t._v("自定义放置目标")]),t._v(" "),e("p",[t._v("元素默认是不允许放置的，这样无论如何都不会触发drop事件，但是，可以把任意元素变成有效的放置目标，重写一下dragenter和dragover事件的默认行为就好了。")]),t._v(" "),e("blockquote",[e("p",[t._v("firefox 3.5+放置事件默认行为是打开被放到放置目标上的URL。为了兼容最好是取消drop事件的默认行为")])]),t._v(" "),e("p",[t._v("dataTransfer对象")]),t._v(" "),e("p",[t._v("拖放操作用来实现数据交换的对象叫做dataTransfer。主要方法：")]),t._v(" "),e("ul",[e("li",[t._v("getData()")]),t._v(" "),e("li",[t._v("setData()")])]),t._v(" "),e("blockquote",[e("p",[t._v("setData()的第一个参数是MIME类型，比如text、URL等H5做了一些拓展可以放更多类型，这2个也被兼容为“text/plain”和“text/uri-list”")])]),t._v(" "),e("p",[t._v("dropEffect与effectAllowed")]),t._v(" "),e("p",[t._v("dataTransfer的2个属性：dropEffect与effectAllowed")]),t._v(" "),e("p",[t._v("dropEffect属性可以知道被拖动元素能够执行那种放置行为，有4个取值：")]),t._v(" "),e("ul",[e("li",[t._v("none：不能把拖动的元素放在这里。除文本框以外的所有元素的默认值")]),t._v(" "),e("li",[t._v("move：应该把拖动的元素移动到放置目标")]),t._v(" "),e("li",[t._v("copy：应该把拖动的元素复制到放置目标")]),t._v(" "),e("li",[t._v("link：表示放置目标会打开拖动的元素（但拖动的元素必须是一个链接，有URL）")])]),t._v(" "),e("p",[t._v("dropEffect属性只有搭配effectAllowed属性才有用。effectAllowed属性表示允许拖动元素的那种dropEffect，属性值如下：")]),t._v(" "),e("ul",[e("li",[t._v("uninitialized：没有给被拖动的元素设置任何放置行为")]),t._v(" "),e("li",[t._v("none：被拖动的元素不能有任何行为")]),t._v(" "),e("li",[t._v("copy：只允许值为copy的dropEffect")]),t._v(" "),e("li",[t._v("link：。。。")]),t._v(" "),e("li",[t._v("move：。。。")]),t._v(" "),e("li",[t._v("copyLink：允许值为copy和link的dropEffect")]),t._v(" "),e("li",[t._v("copyMove：。。。")]),t._v(" "),e("li",[t._v("linkMove：。。。")]),t._v(" "),e("li",[t._v("all：全都允许")])]),t._v(" "),e("p",[t._v("可拖动")]),t._v(" "),e("p",[t._v("默认图像、链接、文本都是可以拖动的，文本是选中才行，图像和链接是在任何时候都可以。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 取消图像的默认拖动 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jaybai.gif"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("draggable")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jaybai code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 让这个元素可以拖动 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("draggable")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("其他成员")]),t._v(" "),e("p",[t._v("H5规范下dataTransfer的其他方法和属性：")]),t._v(" "),e("ul",[e("li",[t._v("addElement(element)")]),t._v(" "),e("li",[t._v("clearData(format)")]),t._v(" "),e("li",[t._v("setDragImage(element, x, y)")]),t._v(" "),e("li",[t._v("types")])]),t._v(" "),e("h3",{attrs:{id:"媒体元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体元素"}},[t._v("#")]),t._v(" 媒体元素")]),t._v(" "),e("p",[t._v("H5新增了2个标签：")]),t._v(" "),e("ul",[e("li",[e("audio")]),t._v(" "),e("li",[e("video")])]),t._v(" "),e("p",[t._v("这2个标签需要有src属性，还可以指定width和height，poster属性指定图像的URI可以再加载视频期间显示一幅图，有controls属性，则意味着浏览应该显示UI控件以便用户直接操作没提。如果支持多种不同的文件格式，直接使用多个内嵌的")]),e("source"),t._v("元素即可。"),e("p"),t._v(" "),e("p",[t._v("属性")]),t._v(" "),e("p",[t._v("实在懒得列了，有用的时候再去查资料吧。大概就是一些播放和下载相关的各种标志位位置、缓冲区大小、播放相关的操作和一些状态以及常规属性。")]),t._v(" "),e("p",[t._v("事件")]),t._v(" "),e("p",[t._v("有需要再查吧，也都是一些常规的可以想象得到的事件，跟播放和状态相关的")]),t._v(" "),e("p",[t._v("自定义媒体播放器")]),t._v(" "),e("p",[t._v("主要就是利用好play()和pause()方法。")]),t._v(" "),e("p",[t._v("检测编解码器的支持情况")]),t._v(" "),e("p",[t._v('这2个元素都有一个canPlayType()方法，接受一种格式/编解码器字符串，返回probably、maybe或者""\n（空字符串）')]),t._v(" "),e("p",[t._v("音频格式和编码器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("音频")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字符串")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("支持的浏览器")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("AAC")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('audio/mp4; codecs="mp4a.40.2"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IE9+、Safari4+、iOS版的Safari")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MP3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("audio/mpeg")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IE9+、Chrome")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Vorbis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('audio/ogg; codecs="vorbis"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("FireFox3.5+、Chrome、Opera10.5+")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("WAV")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('audio/wav; codecs="1"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("FireFox3.5+、Chrome、Opera10.5+")])])])]),t._v(" "),e("p",[t._v("视频格式和编码器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("视频")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("字符串")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("支持的浏览器")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("H.264")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IE9+、Safari4+、Safari4+、iOS版的Safari、Android版WebKit")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Theora")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('video/ogg; codecs="theora"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("FireFox3.5+、Chrome、Opera10.5+")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("WevM")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('video/webm; codecs="vp8, vorbis"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("FireFox4+、Chrome、Opera10.6+")])])])]),t._v(" "),e("p",[t._v("Audio类型")]),t._v(" "),e("p",[t._v("创建Audio实例即可以开始已下载指定文件，下载完成后，就可以用play()开始播放了。iOS中会弹出一个对话框，用户允许后才能播放声音。如果想在一段音频播放后在播放另一段，必须在onfinish时间护理程序中调用play()方法")]),t._v(" "),e("h3",{attrs:{id:"历史状态管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#历史状态管理"}},[t._v("#")]),t._v(" 历史状态管理")]),t._v(" "),e("p",[t._v("使用hashchange事件解决用户不打开新页面的问题。通过hashchange事件，可以知道URL的参数说明时候发生了变化。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jaybai"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"juzilicai page"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"juzilicai/index.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("pushState()会创建新的历史状态，按下后退后会触发window对象的popstate事件，该事件由一个state属性，包含着挡住第一个参数传递给铺设State()的状态对象，得到这个状态对象后，必须把页面重置为状态对象中的数据表达的状态（因为浏览器不会自动为你做这些）。浏览器加载的第一个页面没有状态。更新当前状态可以用replaceState()参数和pushState()相同")])])}),[],!1,null,null,null);a.default=n.exports}}]);