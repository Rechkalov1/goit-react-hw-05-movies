"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[77],{429:function(e,n,t){t.d(n,{Z:function(){return j}});var r,a,i,c,s=t(731),o=(t(791),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}),u=t(168),p=t(444),v=p.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n"]))),l=p.ZP.li(a||(a=(0,u.Z)(["\n  margin-right: 20px;\n  list-style-type: none;\n"]))),d=t(184),f=[{text:"Home",id:o(),to:"/"},{text:"Movies",id:o(),to:"/movies"}];function A(){var e=f.map((function(e){var n=e.id,t=e.to,r=e.text;return(0,d.jsx)(l,{children:(0,d.jsx)(s.OL,{to:t,children:r})},n)}));return(0,d.jsx)(v,{children:e})}var h=p.ZP.header(i||(i=(0,u.Z)(["\n  display: flex;\n"]))),x=p.ZP.nav(c||(c=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n"])));function j(){return(0,d.jsx)(h,{children:(0,d.jsx)(x,{children:(0,d.jsx)(A,{})})})}},840:function(e,n,t){t.d(n,{Bt:function(){return d},Tg:function(){return u},W0:function(){return p},vw:function(){return v},y:function(){return l}});var r=t(861),a=t(757),i=t.n(a),c=t(44),s="https://api.themoviedb.org/3",o="14bbbaf17264a85a2229a09d03b6c904",u=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,e.next=3,c.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,u,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,r=void 0===t?"":t,a=n.page,u=void 0===a?1:a,e.next=3,c.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&page=").concat(u,"&include_adult=false&query=").concat(r));case 3:return p=e.sent,e.abrupt("return",p.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,e.next=3,c.Z.get("\n  ".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,e.next=3,c.Z.get("\n  ".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},77:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r,a,i,c=t(861),s=t(885),o=t(757),u=t.n(o),p=t(791),v=t(689),l=t(840),d=t(593),f=t(305),A=t(168),h=t(444),x=h.ZP.div(r||(r=(0,A.Z)(["\n  display: flex;\n"]))),j=h.ZP.img(a||(a=(0,A.Z)(["\n  width: 420px;\n  height: 100%;\n"]))),m=h.ZP.div(i||(i=(0,A.Z)(["\n  margin-left: 20px;\n"]))),D=t(184),k=function(e){var n=e.movies,t=n.title,r=n.poster_path,a=n.vote_average,i=n.overview,c=n.genres,s=n.release_date,o=new Date(s);return(0,D.jsxs)(x,{children:[(0,D.jsx)("div",{children:r?(0,D.jsx)(j,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(r),alt:DataTransferItemList}):(0,D.jsx)(j,{src:f,alt:"no img"})}),(0,D.jsxs)(m,{children:[(0,D.jsxs)("h2",{children:[t," (",o.getFullYear(),")"]}),(0,D.jsxs)("p",{children:["User score:",Math.round(10*Number(a))]}),(0,D.jsx)("h3",{children:"Overview"}),(0,D.jsx)("p",{children:i}),(0,D.jsx)("h3",{children:"Genres"}),(0,D.jsx)("div",{children:c.map((function(e){var n=e.name,t=e.id;return(0,D.jsx)("p",{children:n},t)}))})]})]})},g=t(731);function w(){var e,n,t=null!==(e=null===(n=(0,v.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,D.jsxs)("div",{children:[(0,D.jsx)("h2",{children:"Information"}),(0,D.jsxs)("ul",{children:[(0,D.jsx)("li",{children:(0,D.jsx)(g.OL,{state:{from:t},to:"cast",children:"Cast"})}),(0,D.jsx)("li",{children:(0,D.jsx)(g.OL,{state:{from:t},to:"reviews",children:"Rewiews"})})]})]})}var y=t(429);function O(){var e,n,t=(0,p.useState)(null),r=(0,s.Z)(t,2),a=r[0],i=r[1],o=(0,p.useState)(null),f=(0,s.Z)(o,2),A=f[0],h=f[1],x=(0,p.useState)(!1),j=(0,s.Z)(x,2),m=j[0],g=j[1],O=(0,v.UO)().id,P=(0,v.s0)(),Z=null!==(e=null===(n=(0,v.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";(0,p.useEffect)((function(){var e=function(){var e=(0,c.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=2;break}return e.abrupt("return");case 2:return g(!0),e.prev=3,e.next=6,(0,l.W0)({id:O});case 6:n=e.sent,i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),h(e.t0);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[O]);return(0,D.jsxs)("div",{children:[(0,D.jsx)(y.Z,{}),a&&(0,D.jsx)("button",{type:"button",onClick:function(){return P(Z)},children:"Go Back"}),m&&(0,D.jsx)(d.a,{}),a&&(0,D.jsx)(k,{movies:a}),a&&(0,D.jsx)(w,{}),A&&(0,D.jsx)("p",{children:"Please try again."}),(0,D.jsx)(v.j3,{})]})}},305:function(e){e.exports="data:image/jpeg;base64,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"},168:function(e,n,t){function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=77.4b1d17b7.chunk.js.map