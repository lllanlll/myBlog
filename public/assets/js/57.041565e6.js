(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{493:function(e,t,n){"use strict";n.r(t);var o=n(17),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("blockquote",[n("p",[e._v("最近在做小程序方面的开发，遇到的坑总结如下，以便以后查阅。随着对小程序的进一步使用，文章会逐渐完善。")])]),e._v(" "),n("ol",[n("li",[e._v("分享成功或失败的回调在微信开发者工具上监测不到的，可以在手机上的vcConsole中看到。")]),e._v(" "),n("li",[e._v("保存图片到相册是在不支持网络地址的，需要先使用getImageInfo获取到图片path，然用这个path来调用保存图片API")]),e._v(" "),n("li",[e._v("app.wxss中的公共样式在组件中不起作用，需要单独书写")]),e._v(" "),n("li",[e._v("数组没有push，可以使用concat代替")]),e._v(" "),n("li",[e._v("使用encodeURIComponent()转译对象时，先试用JSON.stringfy()（其实这个不只是小程序的问题，是js的问题，encodeURIComponent接收字符串参数）")]),e._v(" "),n("li",[e._v("分享支持四个自定义参数（官方文档没有找到）：path、imgUrl、desc、tittl")]),e._v(" "),n("li",[e._v("获取自定义data（打印的时候看到）：e.currentTarget.dataset.name")]),e._v(" "),n("li",[e._v("微信小程序无法实现原生js的innerHTML功能，可以使用wxParse代替")]),e._v(" "),n("li",[e._v("checkbox组件作为key值的index值必须是字符串")]),e._v(" "),n("li",[e._v("radio和checkbox在实际应用的时候，特别是需求样式与官方组件差别比较大，就自己去封装吧，用官方组件实在太难用，如果你想在官方组件基础上二次封装，我个人突破了全不选功能，但是全选功能突破不了，过后我会在单独一篇文章中分享radio和checkbox的二次封装。")])]),e._v(" "),n("p",[e._v("个人博客："),n("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("午后南杂")]),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);