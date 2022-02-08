(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{520:function(t,e,l){"use strict";l.r(e);var v=l(20),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[t._v("Ajax通信的主要对象是XMLHttpRequest，简称XHR")]),t._v(" "),l("p",[t._v("XHR接受3个参数：")]),t._v(" "),l("ol",[l("li",[t._v("请求的类型（get/post）")]),t._v(" "),l("li",[t._v("请求的URL")]),t._v(" "),l("li",[t._v("是否异步的boolean值")])]),t._v(" "),l("p",[t._v("XHR先open()，再send();")]),t._v(" "),l("p",[t._v("响应包括：")]),t._v(" "),l("ul",[l("li",[t._v("responseText")]),t._v(" "),l("li",[t._v("responseXML")]),t._v(" "),l("li",[t._v("status")]),t._v(" "),l("li",[t._v("statusText")])]),t._v(" "),l("p",[t._v("XHR对象的readyState属性如下，每次readyState变化都会触发一次onreadychange()方法：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("取值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("状态")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未初始化")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("尚未调用open()方法")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("启动")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("已调用open()方法，尚未调用send()方法")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("发送")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("已调用send()方法，尚未收到响应")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("接受")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("已收到部分响应")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("完成")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("已收到全部响应，而且可以在客户端使用了")])])])]),t._v(" "),l("p",[t._v("默认情况下XHR请求会带上如下响应头：")]),t._v(" "),l("ul",[l("li",[t._v("Accept")]),t._v(" "),l("li",[t._v("Accept-Charset")]),t._v(" "),l("li",[t._v("Accept-Encoding")]),t._v(" "),l("li",[t._v("Accept-Language")]),t._v(" "),l("li",[t._v("Connection")]),t._v(" "),l("li",[t._v("Cookie")]),t._v(" "),l("li",[t._v("Host")]),t._v(" "),l("li",[t._v("Referer")]),t._v(" "),l("li",[t._v("User-Agent")])]),t._v(" "),l("p",[t._v("FormData对象可以不指定头部，自动添加合适的。")]),t._v(" "),l("p",[t._v("XHR超时设置可以直接设置timeout属性，触发超时会调用ontimeout()方法")]),t._v(" "),l("p",[t._v("overrideMimeType()方法可以重写MIME类型。")]),t._v(" "),l("p",[t._v("XHR还支持6个进度事件：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("取值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("loadstart")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在接收到响应数据的第一个字节时触发")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("progess")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在接收到响应期间不断触发")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在请求发生错误时触发")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("abort")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在因为调用abort()而终止连接时触发")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("load")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在接收到完整响应数据时触发")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("loadend")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在通信完成或者触发error、abort、load事件后触发")])])])]),t._v(" "),l("p",[t._v("跨资源共享")]),t._v(" "),l("p",[t._v("Ajax受限于同源策略。可以通过CORS（Corss-Origin Resoure Sharing，跨资源共享）解决。主要就是在请求头部增加一个Origin头部，包含了请求页面的源信息。然后服务器上做修改，如果可以接受就在Access-Control-Allow-Origin头部中回发相同的源信息（如果公共资源可以发“*”）。")]),t._v(" "),l("p",[t._v("其他跨域技术")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("优点")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("缺点")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("图像Ping")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("利用"),l("img"),t._v("标签，也可以动态创建图像，使用onload和onerror事件来处理是否接受到了请求")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.只能发送GET请求"),l("br"),t._v("2.无法访问服务器响应文本，只能浏览器往服务器单向通信")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("JSONP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("利用动态"),l("script")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);