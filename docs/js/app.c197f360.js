(function(e){function t(t){for(var r,o,a=t[0],i=t[1],u=t[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},s=[];function o(e){return a.p+"js/"+({adminonly:"adminonly",profile:"profile",users:"users"}[e]||e)+"."+{adminonly:"bb61a6b9",profile:"b4386a27",users:"780b8bf3"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=o(e);var u=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28f4":function(e,t,n){},"37bb":function(e,t,n){"use strict";n("674d")},"3b42":function(e,t,n){"use strict";var r=n("1da1"),c=(n("96cf"),n("a18c")),s=n("5b34"),o=n("8918"),a={user:null,messages:[],toRoute:"/",Login:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(s["d"])(e,t);case 3:o=r.sent,n.user=o.user,c["a"].push(n.toRoute),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),n.Error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},Error:function(e){var t;console.error(e);var n=null!==(t=e.msg)&&void 0!==t?t:e;this.messages.push({text:n,type:"warning"}),o["a"].open({duration:5e3,message:n,variant:"danger",type:"danger",closable:!0})}};t["b"]=a},"3fc4":function(e,t,n){"use strict";n("4002")},4002:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("15f5"),n("6597"),n("8918")),s=n("921b"),o=n("c43d"),a=(n("4624"),{class:"container"});function i(e,t,n,c,s,o){var i=Object(r["C"])("Header"),u=Object(r["C"])("messages"),l=Object(r["C"])("router-view");return Object(r["v"])(),Object(r["g"])("div",a,[Object(r["k"])(i),Object(r["k"])(u),Object(r["k"])(l)])}var u=n("cf05"),l=n.n(u),b={class:"header"},d=Object(r["h"])("h1",{class:"title is-1 has-text-centered",style:{margin:"15px 0px 0px 0px"}},[Object(r["h"])("strong",null,"Community Fitness")],-1),A={class:"navbar",role:"navigation","aria-label":"main navigation"},p={class:"navbar-brand"},f=Object(r["h"])("img",{src:l.a,alt:"Logo",style:{width:"130px",height:"50px"}},null,-1),h=Object(r["h"])("span",{"aria-hidden":"true"},null,-1),j=Object(r["h"])("span",{"aria-hidden":"true"},null,-1),O=Object(r["h"])("span",{"aria-hidden":"true"},null,-1),g=[h,j,O],m={class:"navbar-start",style:{"font-size":"22px"}},v=Object(r["j"])(" Home "),C=Object(r["j"])(" Activity Feed "),w={class:"navbar-item has-dropdown is-hoverable"},E=Object(r["j"])(" Community "),B={class:"navbar-dropdown"},I=Object(r["j"])(" View Friends "),y=Object(r["j"])(" View All Users "),k=Object(r["j"])(" Profile "),Q={class:"navbar-end"},R={class:"navbar-item"};function x(e,t,n,c,s,o){var a=Object(r["C"])("router-link"),i=Object(r["C"])("LoginBadge");return Object(r["v"])(),Object(r["g"])("div",b,[d,Object(r["h"])("nav",A,[Object(r["h"])("div",p,[Object(r["k"])(a,{"is-tab":"",to:"/",exact:""},{default:Object(r["M"])((function(){return[f]})),_:1}),Object(r["h"])("a",{role:"button",class:Object(r["r"])(["navbar-burger",{"is-active":s.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return s.isActive=!s.isActive})},g,2)]),Object(r["h"])("div",{class:Object(r["r"])(["navbar-menu",{"is-active":s.isActive}])},[Object(r["h"])("div",m,[Object(r["k"])(a,{class:"navbar-item","is-tab":"",to:"/",exact:""},{default:Object(r["M"])((function(){return[v]})),_:1}),Object(r["k"])(a,{class:"navbar-item","is-tab":"",to:"/Feed",exact:""},{default:Object(r["M"])((function(){return[C]})),_:1}),Object(r["h"])("div",w,[Object(r["k"])(a,{class:"navbar-link","is-tab":"",to:"/Friends"},{default:Object(r["M"])((function(){return[E]})),_:1}),Object(r["h"])("div",B,[Object(r["k"])(a,{class:"navbar-item",to:"/Friends"},{default:Object(r["M"])((function(){return[I]})),_:1}),Object(r["k"])(a,{class:"navbar-item",to:"/Users"},{default:Object(r["M"])((function(){return[y]})),_:1})])]),Object(r["k"])(a,{class:"navbar-item","is-tab":"",to:"/profile"},{default:Object(r["M"])((function(){return[k]})),_:1})]),Object(r["h"])("div",Q,[Object(r["h"])("div",R,[Object(r["k"])(i)])])],2)])])}n("b0c0");var P={key:0,class:"buttons"},F=Object(r["h"])("strong",null," Sign up ",-1),S=[F],M={key:1},T=Object(r["h"])("span",{class:"icon is-medium is-left"},[Object(r["h"])("i",{class:"fas fa-user"})],-1);function U(e,t,n,c,s,o){var a=Object(r["C"])("router-link");return s.Session.user?(Object(r["v"])(),Object(r["g"])("div",M,[Object(r["k"])(a,{"is-tab":"",to:"/profile"},{default:Object(r["M"])((function(){return[Object(r["j"])(" Hello "+Object(r["F"])(o.name)+" ",1),T]})),_:1})])):(Object(r["v"])(),Object(r["g"])("div",P,[Object(r["k"])(a,{to:"./Register"},{default:Object(r["M"])((function(){return[Object(r["h"])("a",{class:"button is-success",onClick:t[0]||(t[0]=function(){return o.register&&o.register.apply(o,arguments)})},S)]})),_:1}),Object(r["h"])("a",{class:"button is-light",onClick:t[1]||(t[1]=function(){return o.login&&o.login.apply(o,arguments)})}," Log in ")]))}var D=n("3b42"),G={data:function(){return{Session:D["b"]}},methods:{login:function(){this.$router.push("/login")},register:function(){this.$router.push("/register")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}},Z=n("6b0d"),H=n.n(Z);const J=H()(G,[["render",U]]);var L=J,N={data:function(){return{isActive:!1}},components:{LoginBadge:L}};n("aeae");const Y=H()(N,[["render",x]]);var q=Y,V={components:{Header:q}};const K=H()(V,[["render",i]]);var _=K,X=n("a18c");Object(r["d"])(_).use(X["a"]).use(c["b"]).use(s["a"]).use(o["a"],{iconPack:"fas"}).mount("#app")},"5b34":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return i}));var r=n("e62d");function c(){return Object(r["a"])("users")}function s(e){return Object(r["a"])("users/byhandle/"+e)}function o(e){return Object(r["a"])("users/register",e)}function a(e,t){return Object(r["a"])("users/"+e,t,"PATCH")}function i(e,t){return Object(r["a"])("users/login",{handle:e,password:t})}},"5cbc":function(e,t,n){"use strict";n("bed2")},"674d":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("6c02"),c=n("3b42"),s=n("7a23"),o={class:"hero is-success is-fullheight"},a={class:"hero-head has-text-centered",style:{margin:"0px 120px -50px 120px"}},i={class:"section"},u=Object(s["h"])("h1",{class:"title is-1"},[Object(s["h"])("strong",null,"Welcome,"),Object(s["j"])(),Object(s["h"])("br"),Object(s["j"])(" To Your Own Personalized Community Activity Hub ")],-1),l=Object(s["h"])("h2",{class:"subtitle is-3"}," Connect with your community, your friends, and yourself, all in one place. ",-1),b=Object(s["h"])("button",{class:"button is-primary is-light is-medium"},"Get Started",-1),d=Object(s["h"])("div",{class:"hero-foot"},null,-1);function A(e,t,n,r,c,A){var p=Object(s["C"])("router-link");return Object(s["v"])(),Object(s["g"])("section",o,[Object(s["h"])("div",a,[Object(s["h"])("section",i,[u,l,Object(s["k"])(p,{to:"/Feed"},{default:Object(s["M"])((function(){return[b]})),_:1})])]),d])}var p={name:"Home",components:{}},f=n("6b0d"),h=n.n(f);const j=h()(p,[["render",A]]);var O=j,g={class:"feed"},m=Object(s["h"])("h1",{class:"title has-text-centered"},"Friend Feed",-1),v=Object(s["h"])("h2",{class:"subtitle has-text-centered"},"See what your friends are up to!",-1),C={class:"columns"},w={class:"column is-half is-offset-one-quarter"},E={class:"column"};function B(e,t,n,r,c,o){var a=Object(s["C"])("post-edit"),i=Object(s["C"])("post");return Object(s["v"])(),Object(s["g"])("div",g,[m,v,Object(s["h"])("div",C,[Object(s["h"])("div",w,[Object(s["k"])(a,{"new-post":e.newPost,onAdd:t[0]||(t[0]=function(e){return o.add()})},null,8,["new-post"]),(Object(s["v"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.posts,(function(e,t){return Object(s["v"])(),Object(s["g"])("div",{class:"post",key:e.src},[Object(s["k"])(i,{post:e,onRemove:function(n){return o.remove(e,t)}},null,8,["post","onRemove"])])})),128))]),Object(s["h"])("div",E,[Object(s["k"])(i,{post:e.newPost},null,8,["post"])])])])}var I=n("1da1"),y=(n("a434"),n("96cf"),{class:"card"}),k={class:"card-content"},Q={class:"card-image"},R={class:"image is-4by3"},x=["src","alt"],P={class:"card-content"},F={class:"media"},S={class:"media-left"},M={class:"image is-48x48"},T=["src"],U={class:"media-content"},D={class:"title is-4"},G={class:"subtitle is-6"},Z=["datetime"],H={class:"content"},J=Object(s["h"])("footer",{class:"card-footer"},[Object(s["h"])("a",{href:"#",class:"card-footer-item"},"Save"),Object(s["h"])("a",{href:"#",class:"card-footer-item"},"Edit"),Object(s["h"])("a",{href:"#",class:"card-footer-item"},"Delete")],-1);function L(e,t,n,r,c,o){return Object(s["v"])(),Object(s["g"])("div",y,[Object(s["h"])("div",k,[Object(s["h"])("div",Q,[Object(s["h"])("figure",R,[Object(s["h"])("img",{src:n.post.src,alt:n.post.alt},null,8,x)]),Object(s["h"])("button",{class:"delete",onClick:t[0]||(t[0]=function(t){return e.$emit("remove")})})]),Object(s["h"])("div",P,[Object(s["h"])("div",F,[Object(s["h"])("div",S,[Object(s["h"])("figure",M,[Object(s["h"])("img",{src:n.post.user.pic,alt:"User pic"},null,8,T)])]),Object(s["h"])("div",U,[Object(s["h"])("p",D,Object(s["F"])(n.post.user.firstName)+" "+Object(s["F"])(n.post.user.lastName),1),Object(s["h"])("p",G,[Object(s["j"])(Object(s["F"])(n.post.user.handle)+" ",1),Object(s["h"])("time",{datetime:n.post.time},Object(s["F"])(o.prettyDate),9,Z)])])]),Object(s["h"])("div",H,Object(s["F"])(n.post.caption),1)]),J])])}var N={props:{post:Object},computed:{prettyDate:function(){return this.post.time&&this.post.time.toDateString?this.post.time.toDateString():"No date available"}}};n("bcc2");const Y=h()(N,[["render",L]]);var q=Y,V=n("e62d");function K(){return Object(V["a"])("posts")}function _(e){return Object(V["a"])("posts/wall/"+e)}function X(e){return Object(V["a"])("posts/feed/"+e)}function W(e){return Object(V["a"])("posts",e)}function z(e){return Object(V["a"])("posts/"+e,{},"DELETE")}n("b0c0");var $={class:"card-content"},ee=Object(s["h"])("h2",{class:"title is-3 has-text-centered"},"New Post",-1),te={class:"content"},ne={class:"field"},re=Object(s["h"])("label",{class:"label"},"Picture URL",-1),ce={class:"control"},se={class:"field"},oe=Object(s["h"])("label",{class:"label"},"Picture alternate text",-1),ae={class:"control"},ie={class:"field"},ue=Object(s["h"])("label",{class:"label"},"Description",-1),le={class:"control"},be={class:"field"},de=Object(s["h"])("label",{class:"label"},"Tag a friend",-1),Ae={class:"control"},pe=Object(s["j"])("No results found"),fe=Object(s["h"])("div",{class:"field"},[Object(s["h"])("label",{class:"label"},"Tag a friend"),Object(s["h"])("div",{class:"control"})],-1),he={class:"field"},je={class:"control has-text-centered"},Oe={class:"radio"},ge=Object(s["j"])(" Public "),me={class:"radio"},ve=Object(s["j"])(" Private "),Ce=Object(s["h"])("footer",{class:"card-footer"},[Object(s["h"])("button",{class:"button is-link card-footer-item",type:"submit"}," Post "),Object(s["h"])("button",{class:"button is-link is-light card-footer-item",type:"reset"}," Cancel ")],-1);function we(e,t,n,r,c,o){var a=Object(s["C"])("o-autocomplete"),i=Object(s["C"])("Autocomplete");return Object(s["v"])(),Object(s["g"])("form",{class:"card",onSubmit:t[8]||(t[8]=Object(s["P"])((function(t){return e.$emit("add")}),["prevent"]))},[Object(s["h"])("div",$,[ee,Object(s["h"])("button",{class:"delete",onClick:t[0]||(t[0]=function(t){return e.$emit("remove")})}),Object(s["h"])("div",te,[Object(s["h"])("div",ne,[re,Object(s["h"])("div",ce,[Object(s["N"])(Object(s["h"])("input",{class:"input",type:"url",placeholder:"https://Picture.com","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.post.src=e}),required:""},null,512),[[s["J"],c.post.src]])])]),Object(s["h"])("div",se,[oe,Object(s["h"])("div",ae,[Object(s["N"])(Object(s["h"])("input",{class:"input",type:"text",placeholder:"Alternate text","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.post.alt=e}),required:""},null,512),[[s["J"],c.post.alt]])])]),Object(s["h"])("div",ie,[ue,Object(s["h"])("div",le,[Object(s["N"])(Object(s["h"])("textarea",{class:"textarea",placeholder:"Activity description","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.post.caption=e}),required:""},null,512),[[s["J"],c.post.caption]])])]),Object(s["h"])("div",be,[de,Object(s["h"])("div",Ae,[Object(s["k"])(a,{rounded:"",expanded:"",modelValue:c.name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.name=e}),data:o.filteredDataArray,placeholder:"@user",icon:"search",clearable:"",onSelect:t[5]||(t[5]=function(e){return c.selected=e})},{default:Object(s["M"])((function(){return[pe]})),_:1},8,["modelValue","data"])])]),fe,Object(s["k"])(i),Object(s["h"])("div",he,[Object(s["h"])("div",je,[Object(s["h"])("label",Oe,[Object(s["N"])(Object(s["h"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.post.isPublic=e}),value:!0,required:""},null,512),[[s["I"],c.post.isPublic]]),ge]),Object(s["h"])("label",me,[Object(s["N"])(Object(s["h"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.post.isPublic=e}),value:!1,required:""},null,512),[[s["I"],c.post.isPublic]]),ve])])])])]),Ce],32)}n("4de4"),n("25f0");var Ee={class:"content"},Be=Object(s["h"])("b",null,"Selected:",-1),Ie={"slot-scope":"props"},ye={class:"media"},ke={class:"media-content"},Qe=Object(s["h"])("br",null,null,-1);function Re(e,t,n,r,c,o){var a=Object(s["C"])("o-autocomplete"),i=Object(s["C"])("o-field");return Object(s["v"])(),Object(s["g"])("section",null,[Object(s["h"])("p",Ee,[Be,Object(s["j"])(" "+Object(s["F"])(c.selected),1)]),Object(s["k"])(i,{label:"Find a movie"},{default:Object(s["M"])((function(){return[Object(s["k"])(a,{data:c.data,placeholder:"@User",field:"friend",loading:c.isFetching,"check-infinite-scroll":"","debounce-typing":500,onTyping:o.getAsyncData,onSelect:t[0]||(t[0]=function(e){return c.selected=e}),onInfiniteScroll:o.getMoreAsyncData},{default:Object(s["M"])((function(){return[Object(s["h"])("template",Ie,[Object(s["h"])("div",ye,[Object(s["h"])("div",ke,[Object(s["j"])(Object(s["F"])(e.props.option.friend)+" ",1),Qe])])])]})),_:1},8,["data","loading","onTyping","onInfiniteScroll"])]})),_:1})])}n("99af"),n("159b");var xe={data:function(){return{data:[],selected:null,isFetching:!1,name:"",page:1,totalPages:1,id:null}},methods:{getAsyncData:function(e){var t=this;id=Object(c["Get"])(c["b"].user),this.name!==e&&(this.name=e,this.data=[],this.page=1,this.totalPages=1),e.length?this.page>this.totalPages||(this.isFetching=!0,fetch("https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=".concat(e,"&page=").concat(this.page)).then((function(e){return e.json()})).then((function(e){e.results.forEach((function(e){return t.data.push(e)})),t.page++,t.totalPages=e.total_pages})).catch((function(e){throw e})).finally((function(){t.isFetching=!1}))):this.data=[]},getMoreAsyncData:function(){this.getAsyncData(this.name)}}};const Pe=h()(xe,[["render",Re]]);var Fe=Pe,Se={props:{newPost:Object},components:{Autocomplete:Fe},data:function(){return{post:this.newPost,data:[],currentUser:null,name:"",selected:null}},watch:{newPost:function(){this.post=this.newPost}},computed:{filteredDataArray:function(){var e=this;return this.data.filter((function(t){return t.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0}))}}};const Me=h()(Se,[["render",we]]);var Te=Me,Ue=function(){return{user:c["b"].user,user_handle:c["b"].user.handle}},De={components:{Post:q,PostEdit:Te},data:function(){return{posts:[],newPost:Ue()}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X(c["b"].user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log({post:e}),r.next=3,z(e._id);case 3:c=r.sent,c.deleted&&n.posts.splice(t,1);case 5:case"end":return r.stop()}}),r)})))()},add:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("New post added on "+new Date),t.next=3,W(e.newPost);case 3:n=t.sent,console.log({response:n}),n&&(e.posts.unshift(n),e.newPost=Ue());case 6:case"end":return t.stop()}}),t)})))()}}};n("5cbc");const Ge=h()(De,[["render",B]]);var Ze=Ge,He={class:"communityfeed"},Je=Object(s["h"])("h1",{class:"title has-text-centered"},"Community Feed",-1),Le=Object(s["h"])("h2",{class:"subtitle has-text-centered"}," See what's going on in your community! ",-1),Ne={class:"columns"},Ye={class:"column is-half is-offset-one-quarter"},qe={class:"column"};function Ve(e,t,n,r,c,o){var a=Object(s["C"])("post-edit"),i=Object(s["C"])("post");return Object(s["v"])(),Object(s["g"])("div",He,[Je,Le,Object(s["h"])("div",Ne,[Object(s["h"])("div",Ye,[Object(s["k"])(a,{"new-post":e.newPost,onAdd:t[0]||(t[0]=function(e){return o.add()})},null,8,["new-post"]),(Object(s["v"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.posts,(function(e,t){return Object(s["v"])(),Object(s["g"])("div",{class:"post",key:e.src},[Object(s["k"])(i,{post:e,onRemove:function(n){return o.remove(e,t)}},null,8,["post","onRemove"])])})),128))]),Object(s["h"])("div",qe,[Object(s["k"])(i,{post:e.newPost},null,8,["post"])])])])}var Ke=function(){return{user:c["b"].user,user_handle:c["b"].user.handle}},_e={components:{Post:q,PostEdit:Te},data:function(){return{posts:[],newPost:Ke()}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K(c["b"].user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log({post:e}),r.next=3,z(e._id);case 3:c=r.sent,c.deleted&&n.posts.splice(t,1);case 5:case"end":return r.stop()}}),r)})))()},add:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W(e.newPost);case 2:n=t.sent,console.log({response:n}),n&&(e.posts.unshift(n),e.newPost=Ke());case 5:case"end":return t.stop()}}),t)})))()}}};n("37bb");const Xe=h()(_e,[["render",Ve]]);var We=Xe,ze={class:"personalfeed"},$e=Object(s["h"])("h1",{class:"title has-text-centered"},"Personal Feed",-1),et=Object(s["h"])("h2",{class:"subtitle has-text-centered"},"View your personal activity log!",-1),tt={class:"columns"},nt={class:"column is-half is-offset-one-quarter"},rt={class:"column"};function ct(e,t,n,r,c,o){var a=Object(s["C"])("post-edit"),i=Object(s["C"])("post");return Object(s["v"])(),Object(s["g"])("div",ze,[$e,et,Object(s["h"])("div",tt,[Object(s["h"])("div",nt,[Object(s["k"])(a,{"new-post":e.newPost,onAdd:t[0]||(t[0]=function(e){return o.add()})},null,8,["new-post"]),(Object(s["v"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(e.posts,(function(e,t){return Object(s["v"])(),Object(s["g"])("div",{class:"post",key:e.src},[Object(s["k"])(i,{post:e,onRemove:function(n){return o.remove(e,t)}},null,8,["post","onRemove"])])})),128))]),Object(s["h"])("div",rt,[Object(s["k"])(i,{post:e.newPost},null,8,["post"])])])])}var st=function(){return{user:c["b"].user,user_handle:c["b"].user.handle}},ot={components:{Post:q,PostEdit:Te},data:function(){return{posts:[],newPost:st()}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_(c["b"].user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log({post:e}),r.next=3,z(e._id);case 3:c=r.sent,c.deleted&&n.posts.splice(t,1);case 5:case"end":return r.stop()}}),r)})))()},add:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W(e.newPost);case 2:n=t.sent,console.log({response:n}),n&&(e.posts.unshift(n),e.newPost=st());case 5:case"end":return t.stop()}}),t)})))()}}};n("3fc4");const at=h()(ot,[["render",ct]]);var it=at,ut=[{path:"/",name:"Home",component:O},{path:"/feed",name:"Feed",component:Ze,meta:{requiresLogin:!0}},{path:"/communityfeed",name:"CommunityFeed",component:We},{path:"/personalfeed",name:"PersonalFeed",component:it,meta:{requiresLogin:!0}},{path:"/friends",name:"Friends",component:function(){return n.e("users").then(n.bind(null,"6c40"))},meta:{requiresLogin:!0}},{path:"/addfriend",name:"AddFriend",component:function(){return n.e("users").then(n.bind(null,"8558"))},meta:{requiresLogin:!0}},{path:"/profile",name:"Profile",component:function(){return n.e("profile").then(n.bind(null,"c66d"))},meta:{requiresLogin:!0}},{path:"/editprofile",name:"EditProfile",component:function(){return n.e("profile").then(n.bind(null,"fb5e"))},meta:{requiresLogin:!0}},{path:"/users",name:"Users",component:function(){return n.e("adminonly").then(n.bind(null,"ed81"))},meta:{requiresLogin:!0}},{path:"/login",name:"Login",component:function(){return n.e("users").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("users").then(n.bind(null,"73cf"))}}],lt=Object(r["a"])({history:Object(r["b"])(""),routes:ut});lt.beforeEach((function(e,t,n){e.meta.requiresLogin&&!c["b"].user?n("/login"):n()}));t["a"]=lt},aeae:function(e,t,n){"use strict";n("28f4")},bcc2:function(e,t,n){"use strict";n("f061")},bed2:function(e,t,n){},cf05:function(e,t){e.exports="data:image/png;base64,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"},e62d:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,c=n("1da1"),s=(n("96cf"),n("d3b7"),n("3b42")),o=null!==(r="/")&&void 0!==r?r:"http://localhost:3100/";function a(e){return i.apply(this,arguments)}function i(){return i=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]?a[1]:null,r=a.length>2&&void 0!==a[2]?a[2]:null,e.prev=2,!n){e.next=9;break}return e.next=6,fetch(o+t,{method:null!==r&&void 0!==r?r:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:c=e.sent,e.next=12;break;case 9:return e.next=11,fetch(o+t);case 11:c=e.sent;case 12:if(c.ok){e.next=16;break}return e.next=15,c.json();case 15:throw e.sent;case 16:return e.next=18,c.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),s["b"].Error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),i.apply(this,arguments)}},f061:function(e,t,n){}});
//# sourceMappingURL=app.c197f360.js.map