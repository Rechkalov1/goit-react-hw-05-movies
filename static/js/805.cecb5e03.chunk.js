"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[805],{545:function(e,t,n){n.d(t,{Z:function(){return u}});n(791);var r,o=n(731),a=n(689),i=n(168),s=n(444).ZP.h2(r||(r=(0,i.Z)(["\n  font-size: 16px;\n"]))),c=n(184);function u(e){var t=e.movies.results,n=(0,a.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){var t=e.title,r=e.id;return(0,c.jsx)("li",{children:(0,c.jsx)(o.rU,{state:{from:n},to:"/movies/".concat(r),children:(0,c.jsx)(s,{children:t})})},r)}))})}},429:function(e,t,n){n.d(t,{Z:function(){return h}});var r,o,a,i,s=n(731),c=(n(791),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}),u=n(168),l=n(444),d=l.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n"]))),f=l.ZP.li(o||(o=(0,u.Z)(["\n  margin-right: 20px;\n  list-style-type: none;\n"]))),p=n(184),m=[{text:"Home",id:c(),to:"/"},{text:"Movies",id:c(),to:"/movies"}];function v(){var e=m.map((function(e){var t=e.id,n=e.to,r=e.text;return(0,p.jsx)(f,{children:(0,p.jsx)(s.OL,{to:n,children:r})},t)}));return(0,p.jsx)(d,{children:e})}var g=l.ZP.header(a||(a=(0,u.Z)(["\n  display: flex;\n"]))),y=l.ZP.nav(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n"])));function h(){return(0,p.jsx)(g,{children:(0,p.jsx)(y,{children:(0,p.jsx)(v,{})})})}},840:function(e,t,n){n.d(t,{Bt:function(){return p},Tg:function(){return u},W0:function(){return l},vw:function(){return d},y:function(){return f}});var r=n(861),o=n(757),a=n.n(o),i=n(44),s="https://api.themoviedb.org/3",c="14bbbaf17264a85a2229a09d03b6c904",u=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,i.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"));case 3:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o,u,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=void 0===n?"":n,o=t.page,u=void 0===o?1:o,e.next=3,i.Z.get("".concat(s,"/search/movie?api_key=").concat(c,"&language=en-US&page=").concat(u,"&include_adult=false&query=").concat(r));case 3:return l=e.sent,e.abrupt("return",l.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,i.Z.get("\n  ".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,i.Z.get("\n  ".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},805:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var r=n(861),o=n(885),a=n(757),i=n.n(a),s=n(791),c=n(731),u=n(840),l=n(593);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=n(982);function g(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=g(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var y=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=g(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],b=["delay","staleId"];function T(e){return"number"===typeof e&&!isNaN(e)}function E(e){return"boolean"===typeof e}function O(e){return"string"===typeof e}function x(e){return"function"===typeof e}function _(e){return O(e)||x(e)?e:null}function C(e){return null!=e}function I(e){return(0,s.isValidElement)(e)||O(e)||x(e)||T(e)}var w={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},P={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function L(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=o?t+"--"+a:t,m=o?n+"--"+a:n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e=d.current,t=p.split(" "),n=function n(r){var o;r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,v.Z)(t)))};!function(){var r;(r=e.classList).add.apply(r,(0,v.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,s.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};f||(c?t():(g.current=1,e.className+=" "+m,e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,r)}}function k(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var Z={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,v.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},j=function(e){var t=e.theme,n=e.type,r=m(e,h);return s.createElement("svg",p({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var R={info:function(e){return s.createElement(j,p({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(j,p({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(j,p({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(j,p({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function S(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(x(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):O(o)||T(o)?a=o:r?a=R.spinner():function(e){return e in R}(n)&&(a=R[n](i))),a}function N(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,d=function(e){return-1!==i.indexOf(e)},f=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return l.get(e)}}).current;function p(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function g(e){c((function(t){return C(e)?t.filter((function(t){return t!==e})):[]}))}function y(){var e=f.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function h(e,t){var r=t.delay,o=t.staleId,a=m(t,b);if(I(e)&&!function(e){return!u.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,d=a.data,p=f.props,v=function(){return g(i)},h=null==c;h&&f.count++;var P,L,j={toastId:i,updateId:c,data:d,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||p.theme,icon:null!=a.icon?a.icon:p.icon,isIn:!1,key:a.key||f.toastKey++,type:a.type,closeToast:v,closeButton:a.closeButton,rtl:p.rtl,position:a.position||p.position,transition:a.transition||p.transition,className:_(a.className||p.toastClassName),bodyClassName:_(a.bodyClassName||p.bodyClassName),style:a.style||p.toastStyle,bodyStyle:a.bodyStyle||p.bodyStyle,onClick:a.onClick||p.onClick,pauseOnHover:E(a.pauseOnHover)?a.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:E(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:E(a.draggable)?a.draggable:p.draggable,draggablePercent:a.draggablePercent||p.draggablePercent,draggableDirection:a.draggableDirection||p.draggableDirection,closeOnClick:E(a.closeOnClick)?a.closeOnClick:p.closeOnClick,progressClassName:_(a.progressClassName||p.progressClassName),progressStyle:a.progressStyle||p.progressStyle,autoClose:!a.isLoading&&(P=a.autoClose,L=p.autoClose,!1===P||T(P)&&P>0?P:L),hideProgressBar:E(a.hideProgressBar)?a.hideProgressBar:p.hideProgressBar,progress:a.progress,role:a.role||p.role,deleteToast:function(){var e=k(l.get(i),"removed");l.delete(i),Z.emit(4,e);var t=f.queue.length;if(f.count=C(i)?f.count-1:f.count-f.displayedToast,f.count<0&&(f.count=0),t>0){var r=C(i)?1:f.props.limit;if(1===t||1===r)f.displayedToast++,y();else{var o=r>t?t:r;f.displayedToast=o;for(var a=0;a<o;a++)y()}}else n()}};j.iconOut=S(j),x(a.onOpen)&&(j.onOpen=a.onOpen),x(a.onClose)&&(j.onClose=a.onClose),j.closeButton=p.closeButton,!1===a.closeButton||I(a.closeButton)?j.closeButton=a.closeButton:!0===a.closeButton&&(j.closeButton=!I(p.closeButton)||p.closeButton);var R=e;(0,s.isValidElement)(e)&&!O(e.type)?R=(0,s.cloneElement)(e,{closeToast:v,toastProps:j,data:d}):x(e)&&(R=e({closeToast:v,toastProps:j,data:d})),p.limit&&p.limit>0&&f.count>p.limit&&h?f.queue.push({toastContent:R,toastProps:j,staleId:o}):T(r)?setTimeout((function(){w(R,j,o)}),r):w(R,j,o)}}function w(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,v.Z)(e),[r]).filter((function(e){return e!==n}))})),Z.emit(4,k(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return f.containerId=e.containerId,Z.cancelEmit(3).on(0,h).on(1,(function(e){return u.current&&g(e)})).on(5,p).emit(2,f),function(){l.clear(),Z.emit(3,f)}}),[]),(0,s.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:d}}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function B(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function M(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],d=(0,s.useRef)(null),f=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",C),document.addEventListener("touchmove",_),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=D(t.nativeEvent),f.y=B(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(f.boundingRect){var t=f.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&f.x>=o&&f.x<=a&&f.y>=n&&f.y<=r?O():E()}}function E(){a(!0)}function O(){a(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&O(),f.x=D(t),f.y=B(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",C);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),x(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;x(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",E),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(I.onMouseEnter=O,I.onMouseLeave=E),h&&(I.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:E,pauseToast:O,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:I}}function A(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,c=e.style,u=e.controlledProgress,l=e.progress,f=e.rtl,m=e.isIn,v=e.theme,g=p(p({},c),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});u&&(g.transform="scaleX("+l+")");var h=y("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+o,d({},"Toastify__progress-bar--rtl",f)),b=x(i)?i({rtl:f,type:o,defaultClassName:h}):y(h,i),T=d({},u&&l>=1?"onTransitionEnd":"onAnimationEnd",u&&l<1?null:function(){m&&r()});return s.createElement("div",p({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:b,style:g},T))}F.defaultProps={type:P.DEFAULT,hide:!1};var z=function(e){var t=M(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,f=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,h=e.position,b=e.className,T=e.style,E=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,C=e.progressStyle,I=e.updateId,w=e.role,P=e.progress,L=e.rtl,k=e.toastId,Z=e.deleteToast,j=e.isIn,R=e.isLoading,S=e.iconOut,N=e.theme,D=y("Toastify__toast","Toastify__toast-theme--"+N,"Toastify__toast--"+f,d({},"Toastify__toast--rtl",L)),B=x(b)?b({rtl:L,position:h,type:f,defaultClassName:D}):y(D,b),z=!!P,H={closeToast:v,type:f,theme:N},U=null;return!1===i||(U=x(i)?i(H):s.isValidElement(i)?s.cloneElement(i,H):A(H)),s.createElement(g,{isIn:j,done:Z,position:h,preventExitTransition:r,nodeRef:o},s.createElement("div",p(p({id:k,onClick:l,className:B},a),{},{style:T,ref:o}),s.createElement("div",p(p({},j&&{role:w}),{},{className:x(E)?E({type:f}):y("Toastify__toast-body",E),style:O}),null!=S&&s.createElement("div",{className:y("Toastify__toast-icon",d({},"Toastify--animate-icon Toastify__zoom-enter",!R))},S),s.createElement("div",null,c)),U,(u||z)&&s.createElement(F,p(p({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:L,theme:N,delay:u,isRunning:n,isIn:j,closeToast:v,hide:m,type:f,style:C,className:_,controlledProgress:z,progress:P}))))},H=L({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),U=(L({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),L({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),L({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,s.forwardRef)((function(e,t){var n=N(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function f(e){var t=y("Toastify__toast-container","Toastify__toast-container--"+e,d({},"Toastify__toast-container--rtl",u));return x(i)?i({position:e,rtl:u,defaultClassName:t}):y(t,_(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?p({},c):p(p({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:f(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(z,p(p({},o),{},{isIn:a(o.toastId),style:p(p({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));U.displayName="ToastContainer",U.defaultProps={position:w.TOP_RIGHT,transition:H,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:A,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var q,Q=new Map,V=[];function G(){return Math.random().toString(36).substring(2,9)}function W(e){return e&&(O(e.toastId)||T(e.toastId))?e.toastId:G()}function X(e,t){return Q.size>0?Z.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function Y(e,t){return p(p({},t),{},{type:t&&t.type||e,toastId:W(t)})}function K(e){return function(t,n){return X(t,Y(e,n))}}function J(e,t){return X(e,Y(P.DEFAULT,t))}J.loading=function(e,t){return X(e,Y(P.DEFAULT,p({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},J.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=O(o)?J.loading(o,n):J.loading(o.render,p(p({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=p(p(p({type:e},s),n),{},{data:o}),i=O(t)?{render:t}:t;return r?J.update(r,p(p({},a),i)):J(i.render,p(p({},a),i)),o}J.dismiss(r)},u=x(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},J.success=K(P.SUCCESS),J.info=K(P.INFO),J.error=K(P.ERROR),J.warning=K(P.WARNING),J.warn=J.warning,J.dark=function(e,t){return X(e,Y(P.DEFAULT,p({theme:"dark"},t)))},J.dismiss=function(e){Q.size>0?Z.emit(1,e):V=V.filter((function(t){return C(e)&&t.options.toastId!==e}))},J.clearWaitingQueue=function(e){return void 0===e&&(e={}),Z.emit(5,e)},J.isActive=function(e){var t=!1;return Q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},J.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=Q.get(n||q);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=p(p(p({},r),t),{},{toastId:t.toastId||e,updateId:G()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,X(i,a)}}),0)},J.done=function(e){J.update(e,{progress:1})},J.onChange=function(e){return Z.on(4,e),function(){Z.off(4,e)}},J.POSITION=w,J.TYPE=P,Z.on(2,(function(e){q=e.containerId||e,Q.set(q,e),V.forEach((function(e){Z.emit(0,e.content,e.options)})),V=[]})).on(3,(function(e){Q.delete(e.containerId||e),0===Q.size&&Z.off(0).off(1).off(5)}));var $,ee,te,ne,re=n(168),oe=n(444),ae=oe.ZP.header($||($=(0,re.Z)(["\n  position: relative;\n  width: 100%;\n  height: 30px;\n"]))),ie=oe.ZP.form(ee||(ee=(0,re.Z)(["\n  padding-top: 3px;\n"]))),se=oe.ZP.input(te||(te=(0,re.Z)(["\n  height: 20px;\n"]))),ce=oe.ZP.button(ne||(ne=(0,re.Z)(["\n  padding: 4px 10px;\n  margin-left: 5px;\n  cursor: pointer;\n  :hover {\n    background-color: #4d4dbb;\n  }\n"]))),ue=n(184);function le(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,o.Z)(n,2),a=r[0],i=r[1],c=function(){i("")};return(0,ue.jsx)(ae,{children:(0,ue.jsxs)(ie,{onSubmit:function(e){e.preventDefault(),""===a.trim()&&(J.warn("Enter a valid name"),i("")),t(a),c()},children:[(0,ue.jsx)(se,{onChange:function(e){var t=e.target.value;i(t)},name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movies",value:a}),(0,ue.jsx)(ce,{type:"submit",children:(0,ue.jsx)("span",{children:"Search"})})]})})}var de=n(429),fe=n(545);function pe(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1],d=(0,s.useState)(null),f=(0,o.Z)(d,2),p=f[0],m=f[1],v=(0,s.useState)(!1),g=(0,o.Z)(v,2),y=g[0],h=g[1],b=(0,c.lr)(),T=(0,o.Z)(b,2),E=T[0],O=T[1],x=E.get("query");return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.prev=3,e.next=6,(0,u.vw)({query:x});case 6:t=e.sent,a(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),m(e.t0);case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,ue.jsxs)("div",{children:[(0,ue.jsx)(de.Z,{}),(0,ue.jsx)(le,{onSubmit:function(e){O({query:e}),a([])}}),y&&(0,ue.jsx)(l.a,{}),0!==n.length&&(0,ue.jsx)(fe.Z,{movies:n}),p&&(0,ue.jsx)("p",{children:"Please try again."})]})}},168:function(e,t,n){function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=805.cecb5e03.chunk.js.map