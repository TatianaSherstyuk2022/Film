"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{639:function(e,n,t){t.d(n,{a:function(){return c}});var r=t(643),a="Loader_spinner__iDFIv",u=t(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(r.Ll,{height:"80",width:"80",color:"blue",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},186:function(e,n,t){t.r(n);var r=t(439),a=t(689),u=t(791),c=t(390),i=t(639),o=t(184);n.default=function(){var e=(0,u.useState)(!1),n=(0,r.Z)(e,2),t=n[0],s=n[1],p=(0,a.UO)().movieId,f=(0,u.useState)([]),d=(0,r.Z)(f,2),l=d[0],v=d[1];return(0,u.useEffect)((function(){s(!0),(0,c.oO)(p).then((function(e){var n=e.results;return v(n)})).catch((function(e){console.log(e)})).finally(s(!1))}),[p]),l<1?(0,o.jsx)("div",{children:"Sorry, we don't have any reviews!"}):(0,o.jsxs)("div",{children:[t&&(0,o.jsx)(i.a,{}),l.map((function(e){return(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Author:"})," ",e.author]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Content:"})," ",e.content]}),(0,o.jsx)("hr",{})]},e.id)}))]})}},390:function(e,n,t){t.d(n,{Mc:function(){return s},OT:function(){return p},QY:function(){return o},oO:function(){return d},y:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(912),i="6761e5de3d20f3ac36b904d02ab8823a";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.1a53f71a.chunk.js.map