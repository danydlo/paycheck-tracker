(function(e){function t(t){for(var n,a,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==c[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0c37024d":"ba3e7613","chunk-139db409":"8fb36a2d","chunk-2ae7afe1":"f6e9a089","chunk-43858369":"82864804","chunk-94b43eca":"a68453bd","chunk-c711dbe2":"e306b9fb","chunk-ecd2938a":"9557b9b2","chunk-694e30d6":"19ebae2b","chunk-9b39668e":"ac6d1c4e"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-0c37024d":1,"chunk-139db409":1,"chunk-2ae7afe1":1,"chunk-43858369":1,"chunk-94b43eca":1,"chunk-ecd2938a":1,"chunk-694e30d6":1,"chunk-9b39668e":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-0c37024d":"04a1a9f3","chunk-139db409":"99178e3d","chunk-2ae7afe1":"e5613aff","chunk-43858369":"d14e6650","chunk-94b43eca":"0d4c81db","chunk-c711dbe2":"31d6cfe0","chunk-ecd2938a":"33e6cc00","chunk-694e30d6":"0875ea16","chunk-9b39668e":"27d9802e"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===n||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavBar",{directives:[{name:"show",rawName:"v-show",value:e.isLoggedIn,expression:"isLoggedIn"}]}),r("router-view")],1)},c=[],o=(r("96cf"),r("1da1")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"nav"},e._l(e.links,(function(t,n){return r("router-link",{key:n,staticClass:"nav-link",attrs:{to:t.link},nativeOn:{click:function(t){e.active=n}}},[r("span",{staticClass:"material-icons md-40 nav-icon text",class:{"active-link":e.checkActive(n)}},[e._v(e._s(t.name))])])})),1)},s=[],i={name:"Navbar",data:function(){return{links:[{name:"home",link:{name:"Home"}},{name:"format_list_bulleted",link:{name:"Paychecks"}},{name:"add_circle",link:{name:"Create"}},{name:"settings",link:{name:"Settings"}}],active:-1}},methods:{checkActive:function(e){return this.active===e}}},l=i,d=(r("8c79"),r("2877")),p=Object(d["a"])(l,u,s,!1,null,"00e2c4ec",null),h=p.exports,m=r("2f62"),f={name:"App",components:{NavBar:h},methods:Object(m["b"])(["getUserInfo","getPaychecks","getWorkdays"]),computed:Object(m["c"])(["isLoggedIn","userInfo","paycheckActive"]),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=localStorage.getItem("email"),!e.isLoggedIn){t.next=7;break}return t.next=4,e.getUserInfo(r);case 4:return t.next=6,e.getPaychecks(e.userInfo.id);case 6:void 0!==e.paycheckActive&&e.getWorkdays(e.paycheckActive._id);case 7:case"end":return t.stop()}}),t)})))()}},k=f,g=(r("5c0b"),Object(d["a"])(k,a,c,!1,null,null,null)),v=g.exports,y=(r("d3b7"),r("8c4f")),_=(r("b0c0"),r("bc3a")),b=r.n(_),w="http://localhost:5000/api/user",x=localStorage.getItem("token");x&&(b.a.defaults.headers.common["Authorization"]=x);var I={userError:"",token:localStorage.getItem("token")||"",user:{}},O={set_user_info:function(e,t,r){e.token=t,e.user=r},logout_user:function(e){e.token="",e.user={}},set_user_error:function(e,t){return e.userError=t},clear_user_error:function(e){return e.userError=""},set_user:function(e,t){return e.user=t},update_user_info:function(e,t){e.user.name=t.name,e.user.wage=t.wage}},j={getUserInfo:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,b.a.get("".concat(w,"/getInfo/").concat(t));case 3:a=r.sent,c=a.data,n("set_user",c);case 6:case"end":return r.stop()}}),r)})))()},login:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.post("".concat(w,"/login"),t);case 4:a=r.sent,c=a.data.data,o=c.token,localStorage.setItem("token",o),localStorage.setItem("email",t.email),b.a.defaults.headers.common["Authorization"]=o,n("set_user_info",o,t),r.next=18;break;case 13:r.prev=13,r.t0=r["catch"](1),n("set_user_error",r.t0.response.data.error),localStorage.removeItem("token"),setTimeout((function(){return n("clear_user_error")}),4e3);case 18:case"end":return r.stop()}}),r,null,[[1,13]])})))()},register:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.post("".concat(w,"/register"),t);case 4:return r.next=6,b.a.post("".concat(w,"/login"),{email:t.email,password:t.password});case 6:a=r.sent,c=a.data.data,o=c.token,localStorage.setItem("token",o),localStorage.setItem("email",t.email),b.a.defaults.headers.common["Authorization"]=o,n("set_user_info",o,t),r.next=20;break;case 15:r.prev=15,r.t0=r["catch"](1),n("set_user_error",r.t0.response.data.error),localStorage.removeItem("token"),setTimeout((function(){return n("clear_user_error")}),4e3);case 20:case"end":return r.stop()}}),r,null,[[1,15]])})))()},updateInfo:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.id,c=t.data,r.prev=2,r.next=5,b.a.put("".concat(w,"/update/info/").concat(a),c);case 5:n("update_user_info",c),r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](2),n("set_user_error",r.t0.response.data.error),setTimeout((function(){return n("clear_user_error")}),4e3);case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},updatePassword:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.id,c=t.password,r.prev=2,r.next=5,b.a.put("".concat(w,"/update/password/").concat(a),{password:c});case 5:r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](2),n("set_user_error",r.t0.response.data.error),setTimeout((function(){return n("clear_user_error")}),4e3);case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},deleteAccount:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.delete("".concat(w,"/delete/").concat(t));case 4:n("logout"),localStorage.removeItem("token"),localStorage.removeItem("email"),delete b.a.defaults.headers.common["Authorization"],K.push({name:"Login"}),r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](1),n("set_user_error",r.t0.response.data.error),localStorage.removeItem("token"),setTimeout((function(){return n("clear_user_error")}),4e3);case 16:case"end":return r.stop()}}),r,null,[[1,11]])})))()},logoutUser:function(e){var t=e.commit;t("logout_user"),localStorage.removeItem("token"),localStorage.removeItem("email"),delete b.a.defaults.headers.common["Authorization"],K.push({name:"Login"})}},R={isLoggedIn:function(e){return!!e.token},userError:function(e){return e.userError},userInfo:function(e){return e.user}},E={state:I,getters:R,actions:j,mutations:O},S=(r("99af"),r("c740"),r("fb6a"),r("2909")),L="http://localhost:5000/api/paycheck",P=localStorage.getItem("token");P&&(b.a.defaults.headers.common["Authorization"]=P);var T={paycheckError:"",paychecks:[],paycheck:{}},A={set_paycheck_info:function(e,t){e.paychecks=t,e.paycheck=t[0]},create_paycheck:function(e,t){e.paychecks.unshift(t),e.paycheck=t},logout_paycheck:function(e){e.paychecks=[],e.paycheck={}},set_paycheck_error:function(e,t){return e.paycheckError=t},clear_paycheck_error:function(e){return e.paycheckError=""},delete_paycheck:function(e,t){var r=e.paychecks.findIndex((function(e){return e._id===t})),n=e.paychecks.slice(0,r),a=e.paychecks.slice(r+1);e.paychecks=[].concat(Object(S["a"])(n),Object(S["a"])(a)),e.paychecks.length&&(e.paycheck=e.paychecks[0])}},W={getPaychecks:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.get("".concat(L,"/user/").concat(t));case 4:a=r.sent,c=a.data,n("set_paycheck_info",c),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),n("set_paycheck_error",r.t0.response.data.error),setTimeout((function(){return n("clear_paycheck_error")}),4e3);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()},createPaycheck:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.post("".concat(L,"/create"),t);case 4:a=r.sent,c=a.data.data,n("create_paycheck",c),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),n("set_paycheck_error",r.t0.response.data.error),setTimeout((function(){return n("clear_paycheck_error")}),4e3);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()},updatePaycheck:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.userId,c=t.paycheckId,r.prev=2,r.next=5,b.a.put("".concat(L,"/update/").concat(c,"/").concat(a));case 5:r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](2),n("set_paycheck_error",r.t0.response.data.error),setTimeout((function(){return n("clear_paycheck_error")}),4e3);case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},updatePaycheckDate:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.id,c=t.data,r.prev=2,r.next=5,b.a.put("".concat(L,"/update/date/").concat(a),c);case 5:r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](2),n("set_paycheck_error",r.t0.response.data.error),setTimeout((function(){return n("clear_paycheck_error")}),4e3);case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},deletePaycheck:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.delete("".concat(L,"/delete/").concat(t));case 4:n("delete_paycheck",t),r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](1),n("set_paycheck_error",r.t0.response.data.error),setTimeout((function(){return n("clear_paycheck_error")}),4e3);case 11:case"end":return r.stop()}}),r,null,[[1,7]])})))()},logoutPaycheck:function(e){var t=e.commit;t("logout_paycheck")}},C={paycheckError:function(e){return e.paycheckError},paycheckList:function(e){return e.paychecks},paycheckActive:function(e){return e.paycheck}},N={state:T,getters:C,actions:W,mutations:A},z="http://localhost:5000/api/workday",B=localStorage.getItem("token");B&&(b.a.defaults.headers.common["Authorization"]=B);var U={workdayError:"",workdays:[],activeWorkdays:[]},D={create_workday:function(e,t){return e.activeWorkdays.unshift(t)},set_active_workdays:function(e,t){return e.activeWorkdays=t},set_workday_info:function(e,t){return e.workdays=t},set_workday_error:function(e,t){return e.workdayError=t},clear_workday_error:function(e){return e.workdayError=""},logout_workday:function(e){e.workdays=[],e.activeWorkdays=[]}},M={getWorkdays:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.get("".concat(z,"/paycheck/").concat(t));case 4:a=r.sent,c=a.data,n("set_active_workdays",c),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),n("set_workday_error",r.t0.response.data.error),setTimeout((function(){return n("clear_workday_error")}),4e3);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()},getWorkdayList:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.get("".concat(z,"/paycheck/").concat(t));case 4:a=r.sent,c=a.data,n("set_workday_info",c),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),n("set_workday_error",r.t0.response.data.error),setTimeout((function(){return n("clear_workday_error")}),4e3);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()},createWorkday:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.post("".concat(z,"/create"),t);case 4:a=r.sent,c=a.data.data,n("create_workday",c),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),n("set_workday_error",r.t0.response.data.error),setTimeout((function(){return n("clear_workday_error")}),4e3);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()},updateWorkday:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.id,c=t.data,r.prev=2,r.next=5,b.a.put("".concat(z,"/update/").concat(a),c);case 5:r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](2),n("set_workday_error",r.t0.response.data.error),setTimeout((function(){return n("clear_workday_error")}),4e3);case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},deleteWorkday:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,b.a.delete("".concat(z,"/delete/").concat(t));case 4:r.next=10;break;case 6:r.prev=6,r.t0=r["catch"](1),n("set_workday_error",r.t0.response.data.error),setTimeout((function(){return n("clear_workday_error")}),4e3);case 10:case"end":return r.stop()}}),r,null,[[1,6]])})))()},logoutWorkday:function(e){var t=e.commit;t("logout_workday")}},H={workdayError:function(e){return e.error},workdayList:function(e){return e.workdays},workdayActive:function(e){return e.activeWorkdays}},$={state:U,getters:H,actions:M,mutations:D};n["a"].use(m["a"]);var q=new m["a"].Store({modules:{user:E,paycheck:N,workday:$}});n["a"].use(y["a"]);var J=[{path:"/",name:"Home",component:function(){return Promise.all([r.e("chunk-c711dbe2"),r.e("chunk-9b39668e")]).then(r.bind(null,"bb51"))},beforeEnter:function(e,t,r){q.getters.isLoggedIn?r():r({name:"Login"})}},{path:"/login",name:"Login",component:function(){return r.e("chunk-94b43eca").then(r.bind(null,"48ca"))}},{path:"/paycheck/create",name:"Create",component:function(){return Promise.all([r.e("chunk-2ae7afe1"),r.e("chunk-43858369")]).then(r.bind(null,"d879"))},beforeEnter:function(e,t,r){q.getters.isLoggedIn?r():r({name:"Login"})}},{path:"/paychecks",name:"Paychecks",component:function(){return Promise.all([r.e("chunk-c711dbe2"),r.e("chunk-2ae7afe1"),r.e("chunk-ecd2938a")]).then(r.bind(null,"ad56"))},beforeEnter:function(e,t,r){q.getters.isLoggedIn?r():r({name:"Login"})}},{path:"/settings",name:"Settings",component:function(){return r.e("chunk-0c37024d").then(r.bind(null,"26d3"))},beforeEnter:function(e,t,r){q.getters.isLoggedIn?r():r({name:"Login"})}},{path:"/paychecks/detail/:id",name:"PaycheckDetail",component:function(){return Promise.all([r.e("chunk-c711dbe2"),r.e("chunk-694e30d6")]).then(r.bind(null,"4548"))},beforeEnter:function(e,t,r){q.getters.isLoggedIn?r():r({name:"Login"})}},{path:"*",component:function(){return r.e("chunk-139db409").then(r.bind(null,"9703"))}}],F=new y["a"]({mode:"history",base:"/",routes:J}),K=F,G=r("1dce"),Q=r.n(G);n["a"].use(Q.a),n["a"].config.productionTip=!1,new n["a"]({router:K,store:q,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"8c79":function(e,t,r){"use strict";var n=r("b0bb"),a=r.n(n);a.a},"9c0c":function(e,t,r){},b0bb:function(e,t,r){}});
//# sourceMappingURL=app.6731c74d.js.map