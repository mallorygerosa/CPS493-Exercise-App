(function(e){function t(t){for(var r,o,a=t[0],i=t[1],u=t[2],l=0,A=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&A.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(A.length)A.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},s=[];function o(e){return a.p+"js/"+({about:"about",adminonly:"adminonly",profile:"profile",users:"users"}[e]||e)+"."+{about:"269b1e23",adminonly:"b7f25e65",profile:"56b95d62",users:"cdd4facc"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=o(e);var u=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b52":function(e,t,n){"use strict";n("f961")},"153e":function(e,t,n){},"20bb":function(e,t,n){"use strict";n("9478")},"3b42":function(e,t,n){"use strict";var r=n("1da1"),c=(n("96cf"),n("a18c")),s=n("5b34"),o=n("8918"),a={user:null,messages:[],toRoute:"/feed",Login:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(s["d"])(e,t);case 3:o=r.sent,n.user=o.user,c["a"].push(n.toRoute),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),n.Error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},Error:function(e){var t;console.error(e);var n=null!==(t=e.msg)&&void 0!==t?t:e;this.messages.push({text:n,type:"warning"}),o["a"].open({duration:5e3,message:n,variant:"danger",type:"danger",closable:!0})}};t["a"]=a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("15f5"),n("6597"),n("8918")),s=n("c43d"),o=(n("4624"),{class:"container"});function a(e,t,n,c,s,a){var i=Object(r["C"])("Header"),u=Object(r["C"])("messages"),l=Object(r["C"])("router-view");return Object(r["v"])(),Object(r["g"])("div",o,[Object(r["k"])(i),Object(r["k"])(u),Object(r["k"])(l)])}var i=n("cf05"),u=n.n(i),l={class:"header"},b=Object(r["h"])("h1",{class:"title is-1 has-text-centered",style:{margin:"15px 0px 0px 0px"}},[Object(r["h"])("strong",null,"Community Fitness")],-1),A={class:"navbar",role:"navigation","aria-label":"main navigation"},d={class:"navbar-brand"},p=Object(r["h"])("img",{src:u.a,alt:"Logo",style:{width:"130px",height:"50px"}},null,-1),f=Object(r["h"])("span",{"aria-hidden":"true"},null,-1),h=Object(r["h"])("span",{"aria-hidden":"true"},null,-1),j=Object(r["h"])("span",{"aria-hidden":"true"},null,-1),O=[f,h,j],m={class:"navbar-start",style:{"font-size":"20px"}},g=Object(r["j"])(" Home "),v={class:"navbar-item has-dropdown is-hoverable"},C=Object(r["j"])(" Activity Feed "),w={class:"navbar-dropdown"},E=Object(r["j"])(" Personal Feed "),B=Object(r["j"])(" Friend Feed "),I=Object(r["j"])(" Community Feed "),y={class:"navbar-item has-dropdown is-hoverable"},Q=Object(r["j"])(" Community "),k={class:"navbar-dropdown"},R=Object(r["j"])(" View Friends "),x=Object(r["j"])(" View All Users "),P=Object(r["j"])(" About "),F=Object(r["j"])(" Profile "),S={class:"navbar-end"},M={class:"navbar-item"};function T(e,t,n,c,s,o){var a=Object(r["C"])("router-link"),i=Object(r["C"])("LoginBadge");return Object(r["v"])(),Object(r["g"])("div",l,[b,Object(r["h"])("nav",A,[Object(r["h"])("div",d,[Object(r["k"])(a,{"is-tab":"",to:"/",exact:""},{default:Object(r["M"])((function(){return[p]})),_:1}),Object(r["h"])("a",{role:"button",class:Object(r["r"])(["navbar-burger",{"is-active":s.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return s.isActive=!s.isActive})},O,2)]),Object(r["h"])("div",{class:Object(r["r"])(["navbar-menu",{"is-active":s.isActive}])},[Object(r["h"])("div",m,[Object(r["k"])(a,{class:"navbar-item","is-tab":"",to:"/",exact:""},{default:Object(r["M"])((function(){return[g]})),_:1}),Object(r["h"])("div",v,[Object(r["k"])(a,{class:"navbar-link","is-tab":"",to:"/Feed"},{default:Object(r["M"])((function(){return[C]})),_:1}),Object(r["h"])("div",w,[Object(r["k"])(a,{class:"navbar-item",to:"/PersonalFeed"},{default:Object(r["M"])((function(){return[E]})),_:1}),Object(r["k"])(a,{class:"navbar-item",to:"/Feed"},{default:Object(r["M"])((function(){return[B]})),_:1}),Object(r["k"])(a,{class:"navbar-item",to:"/CommunityFeed"},{default:Object(r["M"])((function(){return[I]})),_:1})])]),Object(r["h"])("div",y,[Object(r["k"])(a,{class:"navbar-link","is-tab":"",to:"/Friends"},{default:Object(r["M"])((function(){return[Q]})),_:1}),Object(r["h"])("div",k,[Object(r["k"])(a,{class:"navbar-item",to:"/Friends"},{default:Object(r["M"])((function(){return[R]})),_:1}),Object(r["k"])(a,{class:"navbar-item",to:"/Users"},{default:Object(r["M"])((function(){return[x]})),_:1})])]),Object(r["k"])(a,{class:"navbar-item","is-tab":"",to:"/about"},{default:Object(r["M"])((function(){return[P]})),_:1}),Object(r["k"])(a,{class:"navbar-item","is-tab":"",to:"/profile"},{default:Object(r["M"])((function(){return[F]})),_:1})]),Object(r["h"])("div",S,[Object(r["h"])("div",M,[Object(r["k"])(i)])])],2)])])}n("b0c0");var Z={key:0,class:"buttons"},G=Object(r["h"])("strong",null," Sign up ",-1),U=[G],H={key:1},J=Object(r["h"])("span",{class:"icon is-medium is-left"},[Object(r["h"])("i",{class:"fas fa-user"})],-1);function Y(e,t,n,c,s,o){var a=Object(r["C"])("router-link");return s.Session.user?(Object(r["v"])(),Object(r["g"])("div",H,[Object(r["k"])(a,{"is-tab":"",to:"/profile"},{default:Object(r["M"])((function(){return[Object(r["j"])(" Hello "+Object(r["F"])(o.name)+" ",1),J]})),_:1})])):(Object(r["v"])(),Object(r["g"])("div",Z,[Object(r["k"])(a,{to:"./Register"},{default:Object(r["M"])((function(){return[Object(r["h"])("a",{class:"button is-primary",onClick:t[0]||(t[0]=function(){return o.register&&o.register.apply(o,arguments)})},U)]})),_:1}),Object(r["h"])("a",{class:"button is-light",onClick:t[1]||(t[1]=function(){return o.login&&o.login.apply(o,arguments)})}," Log in ")]))}var D=n("3b42"),N={data:function(){return{Session:D["a"]}},methods:{login:function(){this.$router.push("/login")},register:function(){this.$router.push("/register")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}},L=n("6b0d"),q=n.n(L);const V=q()(N,[["render",Y]]);var K=V,_={data:function(){return{isActive:!1}},components:{LoginBadge:K}};const X=q()(_,[["render",T]]);var W=X,z={components:{Header:W}};const $=q()(z,[["render",a]]);var ee=$,te=n("a18c");Object(r["d"])(ee).use(te["a"]).use(c["b"]).use(s["a"],{iconPack:"fas"}).mount("#app")},"59bb":function(e,t,n){"use strict";n("153e")},"5b34":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return i}));var r=n("e62d");function c(){return Object(r["a"])("users")}function s(e){return Object(r["a"])("users/byhandle/"+e)}function o(e){return Object(r["a"])("users/register",e)}function a(e,t){return Object(r["a"])("users/"+e,t,"PATCH")}function i(e,t){return Object(r["a"])("users/login",{handle:e,password:t})}},9478:function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("6c02"),c=n("3b42"),s=n("7a23"),o={class:"hero is-success is-fullheight"},a={class:"hero-head has-text-centered",style:{margin:"0px 120px -50px 120px"}},i={class:"section"},u=Object(s["h"])("h1",{class:"title is-1"},[Object(s["h"])("strong",null,"Welcome,"),Object(s["j"])(),Object(s["h"])("br"),Object(s["j"])(" To Your Own Personalized Community Activity Hub ")],-1),l=Object(s["h"])("h2",{class:"subtitle is-3"}," Connect with your community, your friends, and yourself, all in one place. ",-1),b=Object(s["h"])("button",{class:"button is-white"},"Get Started",-1),A=Object(s["h"])("div",{class:"hero-foot"},null,-1);function d(e,t,n,r,c,d){var p=Object(s["C"])("router-link");return Object(s["v"])(),Object(s["g"])("section",o,[Object(s["h"])("div",a,[Object(s["h"])("section",i,[u,l,Object(s["k"])(p,{to:"/Feed"},{default:Object(s["M"])((function(){return[b]})),_:1})])]),A])}var p={name:"Home",components:{}},f=n("6b0d"),h=n.n(f);const j=h()(p,[["render",d]]);var O=j,m={class:"feed"},g=Object(s["h"])("h1",{class:"title has-text-centered"},"Friend Feed",-1),v=Object(s["h"])("h2",{class:"subtitle has-text-centered"}," See what your friends are up to! ",-1),C={class:"columns"},w={class:"column is-half is-offset-one-quarter"},E={class:"column"};function B(e,t,n,r,c,o){var a=Object(s["C"])("post-edit"),i=Object(s["C"])("post");return Object(s["v"])(),Object(s["g"])("div",m,[g,v,Object(s["h"])("div",C,[Object(s["h"])("div",w,[Object(s["k"])(a,{"new-post":e.newPost,onAdd:t[0]||(t[0]=function(e){return o.add()})},null,8,["new-post"]),(Object(s["v"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.posts,(function(e,t){return Object(s["v"])(),Object(s["g"])("div",{class:"post",key:e.src},[Object(s["k"])(i,{post:e,onRemove:function(n){return o.remove(e,t)}},null,8,["post","onRemove"])])})),128))]),Object(s["h"])("div",E,[Object(s["k"])(i,{post:e.newPost},null,8,["post"])])])])}var I=n("1da1"),y=(n("a434"),n("96cf"),{class:"card"}),Q={class:"card-content"},k={class:"card-image"},R={class:"image is-4by3"},x=["src","alt"],P={class:"card-content"},F={class:"media"},S={class:"media-left"},M={class:"image is-48x48"},T=["src"],Z={class:"media-content"},G={class:"title is-4"},U={class:"subtitle is-6"},H=["datetime"],J={class:"content"},Y=Object(s["h"])("footer",{class:"card-footer"},[Object(s["h"])("a",{href:"#",class:"card-footer-item"},"Save"),Object(s["h"])("a",{href:"#",class:"card-footer-item"},"Edit"),Object(s["h"])("a",{href:"#",class:"card-footer-item"},"Delete")],-1);function D(e,t,n,r,c,o){return Object(s["v"])(),Object(s["g"])("div",y,[Object(s["h"])("div",Q,[Object(s["h"])("div",k,[Object(s["h"])("figure",R,[Object(s["h"])("img",{src:n.post.src,alt:n.post.alt},null,8,x)]),Object(s["h"])("button",{class:"delete",onClick:t[0]||(t[0]=function(t){return e.$emit("remove")})})]),Object(s["h"])("div",P,[Object(s["h"])("div",F,[Object(s["h"])("div",S,[Object(s["h"])("figure",M,[Object(s["h"])("img",{src:n.post.user.pic,alt:"User pic"},null,8,T)])]),Object(s["h"])("div",Z,[Object(s["h"])("p",G,Object(s["F"])(n.post.user.firstName)+" "+Object(s["F"])(n.post.user.lastName),1),Object(s["h"])("p",U,[Object(s["j"])(Object(s["F"])(n.post.user.handle)+" ",1),Object(s["h"])("time",{datetime:n.post.time},Object(s["F"])(o.prettyDate),9,H)])])]),Object(s["h"])("div",J,Object(s["F"])(n.post.caption),1)]),Y])])}var N={props:{post:Object},computed:{prettyDate:function(){return this.post.time&&this.post.time.toDateString?this.post.time.toDateString():"No date available"}}};n("0b52");const L=h()(N,[["render",D]]);var q=L,V=n("e62d");function K(){return Object(V["a"])("posts")}function _(e){return Object(V["a"])("posts/wall/"+e)}function X(e){return Object(V["a"])("posts/feed/"+e)}function W(e){return Object(V["a"])("posts",e)}function z(e){return Object(V["a"])("posts/"+e,{},"DELETE")}var $={class:"card-content"},ee=Object(s["h"])("h2",{class:"title is-3 has-text-centered"},"New Post",-1),te={class:"content"},ne={class:"field"},re=Object(s["h"])("label",{class:"label"},"Picture URL",-1),ce={class:"control"},se={class:"field"},oe=Object(s["h"])("label",{class:"label"},"Picture alternate text",-1),ae={class:"control"},ie={class:"field"},ue=Object(s["h"])("label",{class:"label"},"Description",-1),le={class:"control"},be={class:"field"},Ae={class:"control has-text-centered"},de={class:"radio"},pe=Object(s["j"])(" Public "),fe={class:"radio"},he=Object(s["j"])(" Private "),je=Object(s["h"])("footer",{class:"card-footer"},[Object(s["h"])("button",{class:"button is-link card-footer-item",type:"submit"},"Post"),Object(s["h"])("button",{class:"button is-link is-light card-footer-item",type:"reset"},"Cancel")],-1);function Oe(e,t,n,r,c,o){return Object(s["v"])(),Object(s["g"])("form",{class:"card",onSubmit:t[6]||(t[6]=Object(s["O"])((function(t){return e.$emit("add")}),["prevent"]))},[Object(s["h"])("div",$,[ee,Object(s["h"])("button",{class:"delete",onClick:t[0]||(t[0]=function(t){return e.$emit("remove")})}),Object(s["h"])("div",te,[Object(s["h"])("div",ne,[re,Object(s["h"])("div",ce,[Object(s["N"])(Object(s["h"])("input",{class:"input",type:"url",placeholder:"https://Picture.com","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.post.src=e}),required:""},null,512),[[s["J"],c.post.src]])])]),Object(s["h"])("div",se,[oe,Object(s["h"])("div",ae,[Object(s["N"])(Object(s["h"])("input",{class:"input",type:"text",placeholder:"Alternate text","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.post.alt=e}),required:""},null,512),[[s["J"],c.post.alt]])])]),Object(s["h"])("div",ie,[ue,Object(s["h"])("div",le,[Object(s["N"])(Object(s["h"])("textarea",{class:"textarea",placeholder:"Activity description","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.post.caption=e}),required:""},null,512),[[s["J"],c.post.caption]])])]),Object(s["h"])("div",be,[Object(s["h"])("div",Ae,[Object(s["h"])("label",de,[Object(s["N"])(Object(s["h"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.post.isPublic=e}),value:!0,required:""},null,512),[[s["I"],c.post.isPublic]]),pe]),Object(s["h"])("label",fe,[Object(s["N"])(Object(s["h"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.post.isPublic=e}),value:!1,required:""},null,512),[[s["I"],c.post.isPublic]]),he])])])])]),je],32)}var me={props:{newPost:Object},data:function(){return{post:this.newPost}},watch:{newPost:function(){this.post=this.newPost}}};const ge=h()(me,[["render",Oe]]);var ve=ge,Ce=function(){return{user:c["a"].user,user_handle:c["a"].user.handle}},we={components:{Post:q,PostEdit:ve},data:function(){return{posts:[],newPost:Ce()}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X(c["a"].user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log({post:e}),r.next=3,z(e._id);case 3:c=r.sent,c.deleted&&n.posts.splice(t,1);case 5:case"end":return r.stop()}}),r)})))()},add:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("New post added on "+new Date),t.next=3,W(e.newPost);case 3:n=t.sent,console.log({response:n}),n&&(e.posts.unshift(n),e.newPost=Ce());case 6:case"end":return t.stop()}}),t)})))()}}};n("c4b1");const Ee=h()(we,[["render",B]]);var Be=Ee,Ie={class:"communityfeed"},ye=Object(s["h"])("h1",{class:"title has-text-centered"},"Community Feed",-1),Qe=Object(s["h"])("h2",{class:"subtitle has-text-centered"}," See what's going on in your community! ",-1),ke={class:"columns"},Re={class:"column is-half is-offset-one-quarter"},xe={class:"column"};function Pe(e,t,n,r,c,o){var a=Object(s["C"])("post-edit"),i=Object(s["C"])("post");return Object(s["v"])(),Object(s["g"])("div",Ie,[ye,Qe,Object(s["h"])("div",ke,[Object(s["h"])("div",Re,[Object(s["k"])(a,{"new-post":e.newPost,onAdd:t[0]||(t[0]=function(e){return o.add()})},null,8,["new-post"]),(Object(s["v"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.posts,(function(e,t){return Object(s["v"])(),Object(s["g"])("div",{class:"post",key:e.src},[Object(s["k"])(i,{post:e,onRemove:function(n){return o.remove(e,t)}},null,8,["post","onRemove"])])})),128))]),Object(s["h"])("div",xe,[Object(s["k"])(i,{post:e.newPost},null,8,["post"])])])])}var Fe=function(){return{user:c["a"].user,user_handle:c["a"].user.handle}},Se={components:{Post:q,PostEdit:ve},data:function(){return{posts:[],newPost:Fe()}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K(c["a"].user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log({post:e}),r.next=3,z(e._id);case 3:c=r.sent,c.deleted&&n.posts.splice(t,1);case 5:case"end":return r.stop()}}),r)})))()},add:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W(e.newPost);case 2:n=t.sent,console.log({response:n}),n&&(e.posts.unshift(n),e.newPost=Fe());case 5:case"end":return t.stop()}}),t)})))()}}};n("20bb");const Me=h()(Se,[["render",Pe]]);var Te=Me,Ze={class:"personalfeed"},Ge=Object(s["h"])("h1",{class:"title has-text-centered"},"Personal Feed",-1),Ue=Object(s["h"])("h2",{class:"subtitle has-text-centered"}," View your personal history! ",-1),He={class:"columns"},Je={class:"column is-half is-offset-one-quarter"},Ye={class:"column"};function De(e,t,n,r,c,o){var a=Object(s["C"])("post-edit"),i=Object(s["C"])("post");return Object(s["v"])(),Object(s["g"])("div",Ze,[Ge,Ue,Object(s["h"])("div",He,[Object(s["h"])("div",Je,[Object(s["k"])(a,{"new-post":e.newPost,onAdd:t[0]||(t[0]=function(e){return o.add()})},null,8,["new-post"]),(Object(s["v"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.posts,(function(e,t){return Object(s["v"])(),Object(s["g"])("div",{class:"post",key:e.src},[Object(s["k"])(i,{post:e,onRemove:function(n){return o.remove(e,t)}},null,8,["post","onRemove"])])})),128))]),Object(s["h"])("div",Ye,[Object(s["k"])(i,{post:e.newPost},null,8,["post"])])])])}var Ne=function(){return{user:c["a"].user,user_handle:c["a"].user.handle}},Le={components:{Post:q,PostEdit:ve},data:function(){return{posts:[],newPost:Ne()}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_(c["a"].user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log({post:e}),r.next=3,z(e._id);case 3:c=r.sent,c.deleted&&n.posts.splice(t,1);case 5:case"end":return r.stop()}}),r)})))()},add:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W(e.newPost);case 2:n=t.sent,console.log({response:n}),n&&(e.posts.unshift(n),e.newPost=Ne());case 5:case"end":return t.stop()}}),t)})))()}}};n("59bb");const qe=h()(Le,[["render",De]]);var Ve=qe,Ke=[{path:"/",name:"Home",component:O},{path:"/feed",name:"Feed",component:Be,meta:{requiresLogin:!0}},{path:"/communityfeed",name:"CommunityFeed",component:Te},{path:"/personalfeed",name:"PersonalFeed",component:Ve,meta:{requiresLogin:!0}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/friends",name:"Friends",component:function(){return n.e("users").then(n.bind(null,"6c40"))},meta:{requiresLogin:!0}},{path:"/addfriend",name:"AddFriend",component:function(){return n.e("users").then(n.bind(null,"8558"))},meta:{requiresLogin:!0}},{path:"/profile",name:"Profile",component:function(){return n.e("profile").then(n.bind(null,"c66d"))},meta:{requiresLogin:!0}},{path:"/editprofile",name:"EditProfile",component:function(){return n.e("profile").then(n.bind(null,"fb5e"))},meta:{requiresLogin:!0}},{path:"/users",name:"Users",component:function(){return n.e("adminonly").then(n.bind(null,"ed81"))},meta:{requiresLogin:!0}},{path:"/login",name:"Login",component:function(){return n.e("users").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("users").then(n.bind(null,"73cf"))}}],_e=Object(r["a"])({history:Object(r["b"])(""),routes:Ke});_e.beforeEach((function(e,t,n){e.meta.requiresLogin&&!c["a"].user?n("/login"):n()}));t["a"]=_e},c4b1:function(e,t,n){"use strict";n("ccbc")},ccbc:function(e,t,n){},cf05:function(e,t){e.exports="data:image/png;base64,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"},e62d:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,c=n("1da1"),s=(n("96cf"),n("d3b7"),n("3b42")),o=null!==(r="/")&&void 0!==r?r:"http://localhost:3100/";function a(e){return i.apply(this,arguments)}function i(){return i=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]?a[1]:null,r=a.length>2&&void 0!==a[2]?a[2]:null,e.prev=2,!n){e.next=9;break}return e.next=6,fetch(o+t,{method:null!==r&&void 0!==r?r:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:c=e.sent,e.next=12;break;case 9:return e.next=11,fetch(o+t);case 11:c=e.sent;case 12:if(c.ok){e.next=16;break}return e.next=15,c.json();case 15:throw e.sent;case 16:return e.next=18,c.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),s["a"].Error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),i.apply(this,arguments)}},f961:function(e,t,n){}});
//# sourceMappingURL=app.d049fbfd.js.map