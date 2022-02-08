(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{486:function(_,t,e){"use strict";e.r(t);var s=e(20),r=Object(s.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"一、fiddler抓包原理解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、fiddler抓包原理解析"}},[_._v("#")]),_._v(" 一、Fiddler抓包原理解析")]),_._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[e("strong",[_._v("由于大多数的接口过分依赖前端界面限制，影响接口的健全性，比如：某个促销商品的限购数量是两件，在进行界面校验时是正确的，若接口不做校验，这时如果有人绕过前端界面直接抓取到接口，修改限购数量，此时接口依旧是可以通过的。这将会造成损失，所以必须要做接口测试。")])])])]),_._v(" "),e("li",[e("blockquote",[e("p",[e("strong",[_._v("在做接口测试时，必须要有详细的接口文档，接口测试通常是接口自动化测试的，有接口文档就可以直接进行使用了。那我们为什么要进行抓包呢？")])])])])]),_._v(" "),e("h2",{attrs:{id:"_1-为什么要进行抓包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要进行抓包"}},[_._v("#")]),_._v(" 1.为什么要进行抓包？")]),_._v(" "),e("blockquote",[e("p",[_._v("因为之前没有抓过包，所以一开始听到抓包这个词语，我也不是很明白为什么要进行抓包。")])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("刚刚提到了要做接口测试，而做接口测试的前提就是有接口文档。")])]),_._v(" "),e("li",[e("p",[_._v("如果我们没有接口文档，就是在不知道接口的情况下，我们应该如何进行接口测试呢？还有就是此时我们已经有接口了，但我们想查看接口数据和接口的安全性时，就需要进行抓包，通过对网络上传输的数据进行抓取并对其进行分析。")])])]),_._v(" "),e("h2",{attrs:{id:"_2-为什么选择使用fiddler进行抓包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么选择使用fiddler进行抓包"}},[_._v("#")]),_._v(" 2.为什么选择使用Fiddler进行抓包？")]),_._v(" "),e("ol",[e("li",[_._v("Firebug:可以进行抓包但是分析HTTP请求的详细信息还不够强大；模拟http功能也不够并且还需要“无刷新修改”，就是页面刷新之后将不会保存所有的修改。")]),_._v(" "),e("li",[_._v("Wireshark:过于庞大了，只用来抓取Http显得有些大材小用。")]),_._v(" "),e("li",[_._v("Httpwatch：只支持IE和firefox")]),_._v(" "),e("li",[_._v("Fiddler:可以记录客户端和服务器端的所有HTTP请求，可针对特定的HTTP请求分析请求数据、设置断点、调试Web应用、修改请求的数据，甚至可以修改服务器返回的数据。")])]),_._v(" "),e("p",[e("code",[_._v("当请求遇到报错的情况时，可以通过Fiddler抓取请求和响应，初步定位问题所在，查看请求的信息是否有误，服务器要返回的数据是否按实际情况下发")]),_._v("。")]),_._v(" "),e("h2",{attrs:{id:"二、fiddler的工作原理和抓取https的流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、fiddler的工作原理和抓取https的流程"}},[_._v("#")]),_._v(" 二、Fiddler的工作原理和抓取HTTPS的流程")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("Fiddler再客户端和服务器中建立了一个代理服务器，工作与应用程，可以捕获通过的HTTP（S）请求。启动之后会自动将代理服务器设置为本机。")]),_._v(" "),e("h4",{attrs:{id:"_2-fiddler抓取https报文的流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-fiddler抓取https报文的流程"}},[_._v("#")]),_._v(" "),e("strong",[_._v("2. Fiddler抓取HTTPS报文的流程")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200723181110399.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])]),_._v(" "),e("p",[_._v("详细过程解析如下：")]),_._v(" "),e("ul",[e("li",[_._v("客户端"),e("code",[_._v("请求建立HTTPS连接")]),_._v("，发送客户端支持的加密协议和版本列表等信息给服务器；")]),_._v(" "),e("li",[_._v("Fiddler"),e("code",[_._v("接受客户端的请")]),_._v("求并"),e("code",[_._v("伪装成客户端发送相同的请求给Web服务器")]),_._v("；")]),_._v(" "),e("li",[_._v("Web服务器收到Fiddler的请求后，从请求中"),e("code",[_._v("筛选出合适的加密协议")]),_._v("并"),e("code",[_._v("返回服务器CA证书")]),_._v("，证书中包含公钥信息；")]),_._v(" "),e("li",[_._v("Fiddler收到服务器响应之后，"),e("code",[_._v("保存服务器证书并自签名一个证书")]),_._v("，伪装成服务器将该证书下发给客户端；")]),_._v(" "),e("li",[_._v("客户端验证证书的合法性（"),e("strong",[_._v("Fiddler能否抓取到HTTPS报文关键就看这一步了")]),_._v("）；")]),_._v(" "),e("li",[_._v("客户端"),e("code",[_._v("生产对称密钥")]),_._v("并"),e("code",[_._v("使用自签名证书的公钥进行加密")]),_._v("，发送给服务器；")]),_._v(" "),e("li",[_._v("Fiddler拦截客户端的请求之后，"),e("code",[_._v("使用私钥解密该报文")]),_._v("，"),e("code",[_._v("获取对称密钥")]),_._v("并"),e("code",[_._v("使用CA证书的公钥加密")]),_._v("，再发送给Web服务器；")]),_._v(" "),e("li",[_._v("Web服务器接收到客户端加密后的对称密钥，"),e("code",[_._v("采用私钥解密")]),_._v("，并"),e("code",[_._v("使用对称密钥解密测试数据")]),_._v("传给客户端；")]),_._v(" "),e("li",[_._v("Fiddler使用前面获取的对称密钥"),e("code",[_._v("解密报文")]),_._v("；")]),_._v(" "),e("li",[_._v("客户端验证数据无误后，"),e("code",[_._v("HTTPS连接建立完成")]),_._v("，此时客户端开始向服务器"),e("code",[_._v("发送使用对称密钥加密的业务数据")]),_._v("；")]),_._v(" "),e("li",[_._v("Fiddler使用前面获取的对称密钥"),e("code",[_._v("解密客户端发送的数据并重新加密转发给客户端")]),_._v("。")])]),_._v(" "),e("p",[_._v("以上就是我对于Fiddler抓包的一些见解。")]),_._v(" "),e("h2",{attrs:{id:"三、fiddler界面详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、fiddler界面详解"}},[_._v("#")]),_._v(" 三、Fiddler界面详解")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200728141524588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),_._v(" "),e("ul",[e("li",[e("p",[_._v("工具栏依次是：数据重放（Replay），转到（GO），数据流（Stream），解码（Decode），保持所以会话（session），进程（Process），查找（Find），保存（Save），浏览（Browse），清除缓存（clear Cache），文字编码（TextWizard），分离（Tearoff）。")])]),_._v(" "),e("li",[e("p",[_._v("会话列表：显示捕捉每个session会话")])]),_._v(" "),e("li",[e("p",[_._v("请求响应：查看请求信息")])]),_._v(" "),e("li",[e("p",[_._v("返回响应：查看返回请求信息")])]),_._v(" "),e("li",[e("p",[_._v("命令行工具：通过输入一些命令完成操作")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("statistics选项卡")]),_._v("表示统计请求和响应的一些信息\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200728141904906.png",alt:"在这里插入图片描述"}})])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Inspectors 选项卡")]),_._v("下可以查看HTTP 请求和HTTP响应的报文结构。其中Raw选项卡可以查看完整的消息，Headers 选项卡只查看消息中的Header\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200728142041531.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("AutoResponder选择卡")]),_._v(",模拟返回的内容.\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200728142215499.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("composer选项卡")]),_._v("是Fiddler做接口调试的模块.\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200728142641185.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),_._v(" "),e("li",[e("p",[_._v("会话列表各模块所对应的内容")])])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200728143952522.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),_._v(" "),e("ul",[e("li",[_._v("会话列表各图标的含义")]),_._v(" "),e("li",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200728144537629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNDQ1MDI1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])])}),[],!1,null,null,null);t.default=r.exports}}]);