webpackJsonp([2,0],{0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var s=o(209),r=n(s),a=o(208),i=n(a),d=o(204),u=n(d);r["default"].use(i["default"]);var p=new i["default"]({hashbang:!1});p.map({"/":{component:o(206)},"/post":{component:o(207)},"/post/:post_id":{component:o(205)}}),p.start(u["default"],"#app")},9:function(t,e){"use strict";t.exports={post:{1:{date:"2016-05-24"},"Hello World":{date:"2016-06-15"}},demos:[]}},10:function(t,e,o){"use strict";o(210)},11:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(42),r=n(s),a=o(198),i=n(a);e["default"]={route:{canReuse:function(){return!1}},data:function(){return{post:o(215)("./"+this.$route.params.post_id+".md"),head:{}}},methods:{init:function(){var t=document.createElement("div");if(t.setAttribute("data-thread-key",this.$route.params.post_id),t.setAttribute("data-url",window.location.href),t.setAttribute("data-author-key","almon000"),"undefined"==typeof window.DUOSHUO)var e=setInterval(function(){"undefined"!=typeof window.DUOSHUO&&(window.DUOSHUO.EmbedThread(t),(0,i["default"])("#duoshuo").append(t),clearInterval(e))},1e3);else window.DUOSHUO.EmbedThread(t),(0,i["default"])("#duoshuo").append(t)}},ready:function(){this.head=JSON.parse(this.post.slice(this.post.indexOf("{"),this.post.indexOf("}")+1)),this.init(),(0,i["default"])("pre > code").each(function(){r["default"].highlightBlock(this)});var t=this;(0,i["default"])("#markdown a").each(function(){this.addEventListener("click",function(){var e=this,o=(0,i["default"])(this).attr("href");if(o.startsWith("/")){var n=(0,i["default"])(this);n.attr("href","javascript:void(0);"),t.$router.go(o)}else o.startsWith("#")&&!function(){var t=(0,i["default"])(e);t.attr("href","javascript:void(0);"),(0,i["default"])("html,body").animate({scrollTop:(0,i["default"])(o).offset().top},500,"swing",function(){t.attr("href",o)})}()})})}}},12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},13:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(14),r=n(s),a=o(9),i=n(a);e["default"]={data:function(){return{postIndex:(0,r["default"])(i["default"].post)}},ready:function(){this.postIndex.sort(function(t,e){return i["default"].post[t].date<i["default"].post[e].date})}}},199:function(t,e){t.exports="<h2 id=hello-world>Hello World</h2> <p>这是ren在这个世界发表的第一篇文章。</p> <p>ren是一个基于vue的博客系统，采用markdown撰写文章。</p> <p>关于Markdown的默认样式预览请查看<a href=/post/1>这里</a>.</p>"},200:function(t,e){t.exports="<div><router-view></router-view></div>"},201:function(t,e){t.exports='<div id=header><p class=title>{{ head.title }}</p><div class="info flex"><p class="date flex-center-align">{{ head.date }}</p><p v-for="mark in head.marks" class=mark>{{ mark }}</p></div></div><div id=markdown>{{{ post }}}</div><div id=duoshuo></div>'},202:function(t,e){t.exports='<div class="main flex-column flex-center" _v-474d8047=""><h1 _v-474d8047="">Hello world!</h1><div class="fields flex" _v-474d8047=""><a v-link="{ path: \'/post\' }" _v-474d8047="">Posts</a><a _v-474d8047="">Demos</a><a _v-474d8047="">About</a></div></div>'},203:function(t,e){t.exports='<div class="post flex-column" _v-74ed47ae=""><h1 class=title _v-74ed47ae="">Posts</h1><a v-for="postName in postIndex" v-link="{ path: \'/post/\' + postName }" _v-74ed47ae="">{{ postName }}</a></div>'},204:function(t,e,o){var n,s;o(211),n=o(10),s=o(200),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},205:function(t,e,o){var n,s;o(212),n=o(11),s=o(201),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},206:function(t,e,o){var n,s;o(213),n=o(12),s=o(202),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},207:function(t,e,o){var n,s;o(214),n=o(13),s=o(203),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},211:function(t,e){},212:function(t,e){},213:function(t,e){},214:function(t,e){},215:function(t,e,o){function n(t){return o(s(t))}function s(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./Hello World.md":199};n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=215}});
//# sourceMappingURL=app.87bccc676d74e59a988f.js.map