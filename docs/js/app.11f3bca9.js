(function(e){function t(t){for(var i,n,r=t[0],l=t[1],d=t[2],o=0,u=[];o<r.length;o++)n=r[o],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);A&&A(t);while(u.length)u.shift()();return c.push.apply(c,d||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],i=!0,n=1;n<s.length;n++){var l=s[n];0!==a[l]&&(i=!1)}i&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var i={},a={app:0},c=[];function n(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9f47":"a3a34dca","chunk-2d2086b7":"ae8037d1"}[e]+".js"}function r(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[],s=a[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,i){s=a[e]=[t,i]}));t.push(s[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=n(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(o);var s=a[e];if(0!==s){if(s){var i=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+c+")",d.name="ChunkLoadError",d.type=i,d.request=c,s[1](d)}a[e]=void 0}};var o=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=i,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/docs/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var A=d;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3b42":function(e,t,s){"use strict";var i={user:null,messages:[],Login:function(e,t){this.user={FirstName:"Moshe",LastName:"pl",Password:t,id:613}},Signup:function(){}};t["a"]=i},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("7a23"),a={class:"container"};function c(e,t,s,c,n,r){var l=Object(i["u"])("Header"),d=Object(i["u"])("router-view");return Object(i["q"])(),Object(i["c"])("div",a,[Object(i["g"])(l),Object(i["g"])(d)])}var n=s("cf05"),r=s.n(n),l={class:"header"},d=Object(i["d"])("h1",{class:"title is-1 has-text-centered",style:{margin:"15px 0px 0px 0px"}},[Object(i["d"])("strong",null,"Fitness Tracker")],-1),o={class:"navbar",role:"navigation","aria-label":"main navigation"},A={class:"navbar-brand"},u=Object(i["d"])("a",{href:"/"},[Object(i["d"])("img",{src:r.a,alt:"Logo",style:{width:"130px",height:"50px"}})],-1),b=Object(i["d"])("span",{"aria-hidden":"true"},null,-1),p=Object(i["d"])("span",{"aria-hidden":"true"},null,-1),g=Object(i["d"])("span",{"aria-hidden":"true"},null,-1),v=[b,p,g],m={class:"navbar-start",style:{"font-size":"20px"}},f=Object(i["f"])(" Home "),h={class:"navbar-item has-dropdown is-hoverable"},C=Object(i["f"])(" Activity Feed "),O={class:"navbar-dropdown"},j=Object(i["f"])(" Personal Activity "),E=Object(i["f"])(" Community Activity "),B=Object(i["f"])(" Add Activity "),I={class:"navbar-item has-dropdown is-hoverable"},Q=Object(i["f"])(" Friends "),x={class:"navbar-dropdown"},y=Object(i["f"])(" Friend List "),w=Object(i["f"])(" Add Friend "),R=Object(i["f"])(" Profile "),P={class:"navbar-end"},k={class:"navbar-item"};function S(e,t,s,a,c,n){var r=Object(i["u"])("router-link"),b=Object(i["u"])("LoginBadge");return Object(i["q"])(),Object(i["c"])("div",l,[d,Object(i["d"])("nav",o,[Object(i["d"])("div",A,[u,Object(i["d"])("a",{role:"button",class:Object(i["m"])(["navbar-burger",{"is-active":c.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return c.isActive=!c.isActive})},v,2)]),Object(i["d"])("div",{class:Object(i["m"])(["navbar-menu",{"is-active":c.isActive}])},[Object(i["d"])("div",m,[Object(i["g"])(r,{class:"navbar-item","is-tab":"",to:"/",exact:""},{default:Object(i["z"])((function(){return[f]})),_:1}),Object(i["d"])("div",h,[Object(i["g"])(r,{class:"navbar-link","is-tab":"",to:"/Exercise"},{default:Object(i["z"])((function(){return[C]})),_:1}),Object(i["d"])("div",O,[Object(i["g"])(r,{class:"navbar-item",to:"/Exercise"},{default:Object(i["z"])((function(){return[j]})),_:1}),Object(i["g"])(r,{class:"navbar-item",to:"/Exercise"},{default:Object(i["z"])((function(){return[E]})),_:1}),Object(i["g"])(r,{class:"navbar-item",to:"/AddExercise"},{default:Object(i["z"])((function(){return[B]})),_:1})])]),Object(i["d"])("div",I,[Object(i["g"])(r,{class:"navbar-link","is-tab":"",to:"/Friends"},{default:Object(i["z"])((function(){return[Q]})),_:1}),Object(i["d"])("div",x,[Object(i["g"])(r,{class:"navbar-item",to:"/Friends"},{default:Object(i["z"])((function(){return[y]})),_:1}),Object(i["g"])(r,{class:"navbar-item",to:"/Friends"},{default:Object(i["z"])((function(){return[w]})),_:1})])]),Object(i["g"])(r,{class:"navbar-item","is-tab":"",to:"/Profile"},{default:Object(i["z"])((function(){return[R]})),_:1})]),Object(i["d"])("div",P,[Object(i["d"])("div",k,[Object(i["g"])(b)])])],2)])])}s("b0c0");var T={key:0,class:"buttons"},F=Object(i["d"])("strong",null,"Sign up",-1),U=[F],Z={key:1};function G(e,t,s,a,c,n){return c.Session.user?(Object(i["q"])(),Object(i["c"])("div",Z,[Object(i["f"])(" Hello "+Object(i["w"])(n.name)+" ",1),Object(i["d"])("button",{class:"button is-success",onClick:t[2]||(t[2]=function(){return e.logout&&e.logout.apply(e,arguments)})},"Log out")])):(Object(i["q"])(),Object(i["c"])("div",T,[Object(i["d"])("a",{class:"button is-success",onClick:t[0]||(t[0]=function(){return n.signup&&n.signup.apply(n,arguments)})},U),Object(i["d"])("a",{class:"button is-light",onClick:t[1]||(t[1]=function(){return n.login&&n.login.apply(n,arguments)})}," Log in ")]))}var M=s("3b42"),H={data:function(){return{Session:M["a"]}},methods:{login:function(){this.$router.push("/login")},signup:function(){this.$router.push("/signup")}},logout:function(){this.user=null},computed:{name:function(){return this.Session.user.FirstName+" "+this.Session.user.LastName}}},Y=s("6b0d"),N=s.n(Y);const J=N()(H,[["render",G]]);var L=J,q={data:function(){return{isActive:!1}},components:{LoginBadge:L}};const D=N()(q,[["render",S]]);var V=D,K={components:{Header:V}};const z=N()(K,[["render",c]]);var _=z,X=(s("d3b7"),s("3ca3"),s("ddb0"),s("6c02")),W={class:"hero is-success is-fullheight"},$={class:"hero-head has-text-centered",style:{margin:"0px 120px -50px 120px"}},ee={class:"section"},te=Object(i["d"])("h1",{class:"title is-1"},[Object(i["f"])(" Welcome, "),Object(i["d"])("br"),Object(i["f"])(" To Your Own Personal Activity Hub ")],-1),se=Object(i["d"])("h2",{class:"subtitle is-3"}," Log your activity, share it with others, and see what your friends are up to, all in one place. ",-1),ie=Object(i["d"])("button",{class:"button is-white"},"Get Started",-1),ae=Object(i["d"])("div",{class:"hero-foot"},null,-1);function ce(e,t,s,a,c,n){var r=Object(i["u"])("router-link");return Object(i["q"])(),Object(i["c"])("section",W,[Object(i["d"])("div",$,[Object(i["d"])("section",ee,[te,se,Object(i["g"])(r,{to:"/Exercise"},{default:Object(i["z"])((function(){return[ie]})),_:1})])]),ae])}var ne={name:"Home",components:{}};const re=N()(ne,[["render",ce]]);var le=re,de={class:"exercise"},oe=Object(i["d"])("h1",{class:"subtitle is-2 has-text-centered"},"Recent Activity",-1),Ae={class:"container"},ue=Object(i["f"])(" Add New to"),be=Object(i["e"])('<div class="card"><div class="card-content"><article class="post"><div class="media"><div class="media-left"><p class="image is-64x64"><img class="is-rounded" src="http://bulma.io/images/placeholders/64x64.png"></p></div><div class="media-content"><div class="content"><p class="title is-5"> Name <span class="tag is-white">Username</span></p></div><p class="subtitle is-5">Type, description, and duration of activity</p></div><div class="media-right has-text-right"><span class="has-text-grey-light has-text-right">Date</span><br><br><a id="launch_modal">Edit activity</a></div></div><hr></article><article class="post"><div class="media"><div class="media-left"><p class="image is-64x64"><img class="is-rounded" src="http://bulma.io/images/placeholders/64x64.png"></p></div><div class="media-content"><div class="content"><p class="title is-5"> Name <span class="tag is-white">Username</span></p></div><p class="subtitle is-5">Type, description, and duration of activity</p></div><div class="media-right has-text-right"><span class="has-text-grey-light has-text-right">Date</span><br><br><a id="launch_modal">Edit activity</a></div></div></article></div></div>',1);function pe(e,t,s,a,c,n){var r=Object(i["u"])("router-link");return Object(i["q"])(),Object(i["c"])("div",de,[oe,Object(i["d"])("div",Ae,[Object(i["g"])(r,{href:"/AddExercise",class:"button is-success"},{default:Object(i["z"])((function(){return[ue]})),_:1}),be])])}var ge={name:"Exercise",components:{}};const ve=N()(ge,[["render",pe]]);var me=ve,fe={class:"friends"},he=Object(i["e"])('<h1 class="subtitle is-2 has-text-centered">Friends</h1><div class="container"><a href="/AddFriends"><button class="button is-success">Add Friend</button></a><button class="button is-light">Edit Friend List</button><div class="card"><div class="card-content"><div class="columns is-multiline"><div class="column is-one-third"><article class="media"><div class="media-left"><figure class="image is-96x96"><img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></figure></div><div class="media-content"><p class="title is-4"> Name </p><p class="subtitle is-5"> Username </p><p class="subtitle is-6 has-text-left"><a id="launch_modal">View Profile</a></p></div></article><article class="media"><div class="media-left"><figure class="image is-96x96"><img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></figure></div><div class="media-content"><p class="title is-4"> Name </p><p class="subtitle is-5"> Username </p><p class="subtitle is-6 has-text-left"><a id="launch_modal">View Profile</a></p></div></article></div><div class="column is-one-third"><article class="media"><div class="media-left"><figure class="image is-96x96"><img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></figure></div><div class="media-content"><p class="title is-4"> Name </p><p class="subtitle is-5"> Username </p><p class="subtitle is-6 has-text-left"><a id="launch_modal">View Profile</a></p></div></article></div><div class="column is-one-third"><article class="media"><div class="media-left"><figure class="image is-96x96"><img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></figure></div><div class="media-content"><p class="title is-4"> Name </p><p class="subtitle is-5"> Username </p><p class="subtitle is-6 has-text-left"><a id="launch_modal">View Profile</a></p></div></article></div></div></div></div></div><div id="add_friend" class="modal"><div class="modal-background"></div><div class="model-content"><form action class="box"><div class="field"><label class="label">Username</label><div class="control"><input class="input is-success" type="text" placeholder="Username"></div><button class="button help is-success">Add User</button></div></form></div></div>',3),Ce=[he];function Oe(e,t,s,a,c,n){return Object(i["q"])(),Object(i["c"])("div",fe,Ce)}var je={name:"Friends",components:{}};const Ee=N()(je,[["render",Oe]]);var Be=Ee,Ie={class:"profile"},Qe=Object(i["e"])('<div class="container"><br><div class="card"><div class="card-content"><div class="media"><div class="media-content has-text-centered"><figure class="image is-128x128 is-inline-block"><img class="is-rounded center" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder"></figure><p class="title is-3"> Name </p><p class="subtitle is-4"> Username </p><p class="title is-6"> Email </p><p>This is placeholder text for this user&#39;s &quot;about me&quot; information</p><p class="subtitle is-6 has-text-right"><a id="launch_modal">Edit Profile</a></p></div></div></div></div></div><div id="edit_profile" class="modal"><div class="modal-background"></div><div class="model-content"><form action class="box"><div class="field"><label class="label">Change Username</label><div class="control"><input class="input is-success" type="text" placeholder="Username"></div><p class="help is-success">Username is available</p></div><div class="field"><label class="label">New Password</label><div class="control"><input class="input" type="password" placeholder="********" required></div><p class="help is-danger">Password must have 8 or more characters</p></div><div class="field"><label class="label">Confirm Password</label><div class="control"><input class="input" type="password" placeholder="********" required></div><p class="help is-danger">Passwords don&#39;t match</p></div></form></div></div>',2),xe=[Qe];function ye(e,t,s,a,c,n){return Object(i["q"])(),Object(i["c"])("div",Ie,xe)}var we={name:"Profile",components:{}};const Re=N()(we,[["render",ye]]);var Pe=Re,ke=[{path:"/",name:"Home",component:le},{path:"/exercise",name:"Exercise",component:me},{path:"/friends",name:"Friends",component:Be},{path:"/profile",name:"Profile",component:Pe,meta:{requiresLogin:!0}},{path:"/login",name:"Login",component:function(){return s.e("chunk-2d2086b7").then(s.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return s.e("chunk-2d0b9f47").then(s.bind(null,"34c3"))}}],Se=Object(X["a"])({history:Object(X["b"])("/docs/"),routes:ke});Se.beforeEach((function(e,t,s){e.meta.requiresLogin&&!M["a"].user?s("/login"):s()}));var Te=Se;s("5ed1"),s("6597");Object(i["b"])(_).use(Te).mount("#app")},cf05:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.11f3bca9.js.map