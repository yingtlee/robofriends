(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},21:function(e,n,t){},22:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),c=t.n(a),i=(t(21),t(3)),s=t(4),l=t(7),u=t(6),d=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},h=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(d,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},f=function(e){var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:n}))},p=(t(22),function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)}),b=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).state={hasError:!1},e}return Object(s.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"OOOOOOOPS! That's no good."):this.props.children}}]),t}(r.Component),g=t(5),E=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.pending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(f,{searchChange:t}),o.a.createElement(p,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(b,null,o.a.createElement(h,{robots:c}))))}}]),t}(r.Component),v=Object(g.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,pending:e.requestRobots.pending,err:e.requestRobots.err}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).then((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(E),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(28);var w=t(1),y={searchField:""},R={robots:[],pending:!1,err:""},S=t(14),j=t(15),C=Object(S.createLogger)(),k=Object(w.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{pending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{pending:!1,robots:n.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{err:n.payload});default:return e}}}),_=Object(w.d)(k,Object(w.a)(j.a,C));c.a.render(o.a.createElement(g.a,{store:_},o.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.672b14b4.chunk.js.map