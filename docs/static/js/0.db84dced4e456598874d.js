webpackJsonp([0],{1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(23),u=e(24),s=e(0),i=s(o.a,u.a,!1,null,null,null);n.default=i.exports},23:function(t,n,e){"use strict";n.a={name:"EduApp",data:function(){return{count:0,dots:"...",totalTime:15}},methods:{counter:function(t){var n=this;this.totalTime==t&&this.$router.push({name:"Home"}),setTimeout(function(){var e=["",".","..","..."];n.dots=e[t%4],n.count=t},1e3)}}}},24:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"eduApp"}},[e("h1",[t._v("Coming Soon")]),t._v(" "),e("p",[t._v("\ncontent writing work is ongoing"+t._s(t.dots)+"\n")]),t._v("\n"+t._s(t.counter(t.count+1))+"\n-- "+t._s(t.count)+"\n")])},u=[],s={render:o,staticRenderFns:u};n.a=s}});
//# sourceMappingURL=0.db84dced4e456598874d.js.map