(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"6c40":function(e,t,s){"use strict";s.r(t);var n=s("7a23"),c={class:"friends"},a={class:"container has-text-centered"},i=Object(n["h"])("h1",{class:"title is-2"},"Friends",-1),r=Object(n["h"])("h1",{class:"subtitle"}," View your friends profiles and find new people to connect with! ",-1),l=Object(n["j"])(" Add Friend "),o={class:"card card-content"};function u(e,t,s,u,d,b){var h=Object(n["C"])("router-link"),j=Object(n["C"])("FriendList");return Object(n["v"])(),Object(n["g"])("div",c,[Object(n["h"])("div",a,[i,r,Object(n["k"])(h,{to:"AddFriend",class:"button is-success"},{default:Object(n["M"])((function(){return[l]})),_:1})]),Object(n["h"])("div",o,[Object(n["k"])(j)])])}var d=s("1da1"),b=(s("96cf"),s("3b42")),h=s("5b34"),j=s("bb85"),p={data:function(){return{list:[],friendList:[],Session:b["b"]}},components:{FriendList:j["a"]},mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["c"])(b["b"].user.handle);case 2:e.list=t.sent,s=0;case 4:if(!(s<e.list.following.length)){t.next=13;break}return t.t0=e.friendList,t.next=8,Object(h["c"])(e.list.following[s].handle);case 8:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 10:s++,t.next=4;break;case 13:case"end":return t.stop()}}),t)})))()}},O=s("6b0d"),f=s.n(O);const m=f()(p,[["render",u]]);t["default"]=m},"73cf":function(e,t,s){"use strict";s.r(t);var n=s("7a23"),c={class:"container"},a=Object(n["h"])("p",{class:"title is-1 has-text-centered"},"Sign Up",-1),i={class:"columns is-centered",style:{"margin-top":"40px"}},r={class:"columns is-5-tablet is-4-desktop is-3-widescreen"};function l(e,t,s,l,o,u){var d=Object(n["C"])("add-user");return Object(n["v"])(),Object(n["g"])("div",c,[a,Object(n["h"])("div",i,[Object(n["h"])("div",r,[Object(n["k"])(d,{"new-user":o.user,onAdd:t[0]||(t[0]=function(e){return u.add()})},null,8,["new-user"])])])])}var o=s("1da1"),u=(s("96cf"),s("5b34")),d={class:"container"},b={class:"columns is-centered"},h={class:"field",style:{"text-align":"left"}},j=Object(n["h"])("label",{class:"label"},"First Name",-1),p={class:"field",style:{"text-align":"left"}},O=Object(n["h"])("label",{class:"label"},"Last Name",-1),f={class:"field",style:{"text-align":"left"}},m=Object(n["h"])("label",{class:"label"},"Username",-1),g={class:"control has-icons-left"},v=Object(n["h"])("span",{class:"icon is-small is-left"},[Object(n["h"])("i",{class:"fas fa-user"})],-1),w={class:"field",style:{"text-align":"left"}},x=Object(n["h"])("label",{class:"label"},"Password",-1),k={class:"control has-icons-left"},y=Object(n["h"])("span",{class:"icon is-small is-left"},[Object(n["h"])("i",{class:"fas fa-lock"})],-1),U={class:"field",style:{"text-align":"left"}},S=Object(n["h"])("label",{class:"label"},"Profile Picture",-1),N={class:"control"},F={class:"field",style:{"text-align":"left"}},L=Object(n["h"])("label",{class:"label"},"Email",-1),A={class:"control has-icons-left has-icons-right"},R=Object(n["h"])("span",{class:"icon is-small is-left"},[Object(n["h"])("i",{class:"fas fa-envelope"})],-1),C={class:"buttons is-grouped is-centered",id:"buttons"},P=Object(n["h"])("div",{class:"control"},[Object(n["h"])("button",{class:"button is-success"},"Submit")],-1),q={class:"control"},J=Object(n["j"])("Cancel");function I(e,t,s,c,a,i){var r=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])("div",d,[Object(n["h"])("div",b,[Object(n["h"])("form",{class:"box",onSubmit:t[6]||(t[6]=Object(n["P"])((function(t){return e.$emit("add")}),["prevent"]))},[Object(n["h"])("div",h,[j,Object(n["N"])(Object(n["h"])("input",{class:"input",type:"text",placeholder:"John","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user.firstName=e}),required:""},null,512),[[n["J"],a.user.firstName]])]),Object(n["h"])("div",p,[O,Object(n["N"])(Object(n["h"])("input",{class:"input",type:"text",placeholder:"Smith","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.user.lastName=e}),required:""},null,512),[[n["J"],a.user.lastName]])]),Object(n["h"])("div",f,[m,Object(n["h"])("p",g,[Object(n["N"])(Object(n["h"])("input",{class:"input",type:"text",placeholder:"@Username","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.user.handle=e}),required:""},null,512),[[n["J"],a.user.handle]]),v])]),Object(n["h"])("div",w,[x,Object(n["h"])("p",k,[Object(n["N"])(Object(n["h"])("input",{class:"input",type:"password",placeholder:"********","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.user.password=e}),required:""},null,512),[[n["J"],a.user.password]]),y])]),Object(n["h"])("div",U,[S,Object(n["h"])("p",N,[Object(n["N"])(Object(n["h"])("input",{class:"input",type:"url",placeholder:"https://URL.com","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.user.pic=e}),required:""},null,512),[[n["J"],a.user.pic]])])]),Object(n["h"])("div",F,[L,Object(n["h"])("p",A,[Object(n["N"])(Object(n["h"])("input",{class:"input",type:"text",placeholder:"email@example.com","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.user.email=e}),required:""},null,512),[[n["J"],a.user.email]]),R])]),Object(n["h"])("div",C,[P,Object(n["h"])("div",q,[Object(n["k"])(r,{class:"button is-light",to:"/"},{default:Object(n["M"])((function(){return[J]})),_:1})])])],32)])])}var V={props:{newUser:Object},data:function(){return{user:this.newUser}},watch:{newUser:function(){this.user=this.newUser}}},M=s("6b0d"),E=s.n(M);const _=E()(V,[["render",I]]);var G=_,T=s("a18c"),D={components:{AddUser:G},data:function(){return{FIRST:"",LAST:"",HAND:"",PASS:"",PIC:"",EMAIL:[],user:{firstName:null,lastName:null,handle:null,password:null,pic:null,isAdmin:!1,emails:[],following:[]}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.user.firstName=e.FIRST,e.user.lastName=e.LAST,e.user.handle=e.USER,e.user.password=e.PASS,e.user.pic=e.PIC,e.user.emails=e.EMAIL;case 6:case"end":return t.stop()}}),t)})))()},methods:{add:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["a"])(e.user);case 2:s=t.sent,s&&(e.$oruga.notification.open({message:"Welcome to Community Fitness",variant:"success",position:"top",closable:!0}),e.Session.Login(e.email,e.password)),T["a"].push("/");case 5:case"end":return t.stop()}}),t)})))()}}};const $=E()(D,[["render",l]]);t["default"]=$},8558:function(e,t,s){"use strict";s.r(t);var n=s("7a23"),c={class:"addfriend"},a={class:"columns is-centered"},i=Object(n["i"])('<p class="title is-1 has-text-centered">Add Friend</p><div class="field"><label class="label">Username</label><div class="control"><input class="input is-success" type="text" placeholder="User" required></div></div>',2),r={class:"field"},l={class:"control"},o={class:"buttons is-grouped is-centered"},u=Object(n["j"])("Cancel");function d(e,t,s,d,b,h){var j=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])("div",c,[Object(n["h"])("div",a,[Object(n["h"])("form",{class:"box",style:{"margin-top":"30px"},onSubmit:t[1]||(t[1]=Object(n["P"])((function(t){return e.login()}),["prevent"]))},[i,Object(n["h"])("div",r,[Object(n["h"])("div",l,[Object(n["h"])("div",o,[Object(n["h"])("button",{class:"button is-success",onClick:t[0]||(t[0]=function(){return h.addFriend&&h.addFriend.apply(h,arguments)})},"Add"),Object(n["k"])(j,{class:"button is-light",to:"./Friends"},{default:Object(n["M"])((function(){return[u]})),_:1})])])])],32)])])}var b=s("1da1"),h=(s("96cf"),{methods:{addFriend:function(){return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),j=s("6b0d"),p=s.n(j);const O=p()(h,[["render",d]]);t["default"]=O},a55b:function(e,t,s){"use strict";s.r(t);var n=s("7a23"),c={class:"container"},a=Object(n["h"])("p",{class:"title is-1 has-text-centered"},"Log In",-1),i={class:"columns is-centered"},r={class:"field"},l=Object(n["h"])("label",{class:"label"},"Username",-1),o={class:"control has-icons-left has-icons-right"},u=Object(n["h"])("span",{class:"icon is-small is-left"},[Object(n["h"])("i",{class:"fas fa-user"})],-1),d={key:0,id:"error-message"},b={key:1,id:"error-message"},h={class:"field"},j=Object(n["h"])("label",{class:"label"},"Password",-1),p={class:"control has-icons-left"},O=Object(n["h"])("span",{class:"icon is-small is-left"},[Object(n["h"])("i",{class:"fas fa-lock"})],-1),f={class:"field"},m={class:"buttons is-grouped is-centered"},g={class:"control"},v={class:"control"},w=Object(n["h"])("div",{class:"g-signin2","data-onsuccess":"onSignIn"},null,-1),x=Object(n["h"])("div",{class:"buttons is-grouped is-centered"},[Object(n["h"])("button",{class:"button is-light",type:"reset"},"Cancel")],-1),k=Object(n["h"])("p",{class:"subtitle-is-4 has-text-centered"}," Don't have an account? Sign up! ",-1);function y(e,t,s,y,U,S){var N=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])("div",c,[a,Object(n["h"])("div",i,[Object(n["h"])("form",{class:"box",onSubmit:t[4]||(t[4]=Object(n["P"])((function(e){return S.login()}),["prevent"]))},[Object(n["h"])("div",r,[l,Object(n["h"])("p",o,[Object(n["N"])(Object(n["h"])("input",{class:"input",type:"text",placeholder:"@User","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t})},null,512),[[n["J"],e.email]]),u,2==e.errors.length?(Object(n["v"])(),Object(n["g"])("span",d,Object(n["F"])(e.errors[0]),1)):"Username is required"==e.errors[0]?(Object(n["v"])(),Object(n["g"])("span",b,Object(n["F"])("Username is required"))):Object(n["f"])("",!0)])]),Object(n["h"])("div",h,[j,Object(n["h"])("p",p,[Object(n["N"])(Object(n["h"])("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[n["J"],e.password]]),O])]),Object(n["h"])("div",f,[Object(n["h"])("div",m,[Object(n["h"])("div",g,[Object(n["h"])("button",{class:"button is-success",onClick:t[2]||(t[2]=function(e){return S.checkLogin()})}," Login ")]),Object(n["h"])("div",v,[Object(n["h"])("button",{class:"button is-success",type:"button",onClick:t[3]||(t[3]=function(){return S.loginGoogle&&S.loginGoogle.apply(S,arguments)})}," Login with Google ")]),w]),x]),Object(n["k"])(N,{to:"./Register"},{default:Object(n["M"])((function(){return[k]})),_:1})],32)])])}var U,S=s("3b42"),N={data:function(){return{email:null,password:null,errors:[],Session:S["b"]}},methods:{login:function(){this.Session.Login(this.email,this.password)},loginGoogle:function(){U.signIn().then((function(e){console.log({x:e})}))},checkLogin:function(){if(this.email&&this.password)return!0;this.errors=[],this.email||this.errors.push("Username is required"),this.password||this.errors.push("Password is required")}}},F=document.createElement("script");F.id="google-auth-script",F.src="https://apis.google.com/js/platform.js",document.head.append(F),F.onload=function(){gapi.load("auth2",(function(){gapi.auth2.init({client_id:"858795743516-70umb3foqr7dq6j1rhn15ks4vcheprl8.apps.googleusercontent.com"}).then().then((function(){U=gapi.auth2.getAuthInstance()}))}))};var L=s("6b0d"),A=s.n(L);const R=A()(N,[["render",y]]);t["default"]=R},bb85:function(e,t,s){"use strict";s("d3b7"),s("25f0");var n=s("7a23"),c={class:"columns is-multiline"},a={class:"column is-one-half"},i={class:"media-left"},r={class:"image is-96x96"},l=["src","alt"],o={class:"media-content"},u={class:"title is-3 has-text-left"},d={class:"subtitle is-4 has-text-left"},b={class:"subtitle is-5 has-text-left"},h=Object(n["h"])("div",{class:"media-right has-text-right subtitle is-6"},[Object(n["h"])("a",null,"View Profile "),Object(n["h"])("br"),Object(n["h"])("a",null,"Remove Friend")],-1);function j(e,t,s,j,p,O){return Object(n["v"])(),Object(n["g"])("div",c,[Object(n["h"])("div",a,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(p.friendList,(function(e){return Object(n["v"])(),Object(n["g"])("article",{class:"media",key:e.handle},[Object(n["h"])("div",i,[Object(n["h"])("figure",r,[Object(n["h"])("img",{class:"is-rounded",src:e.pic,alt:e.handle},null,8,l)])]),Object(n["h"])("div",o,[Object(n["h"])("p",u,Object(n["F"])(e.firstName+" "+e.lastName),1),Object(n["h"])("p",d,Object(n["F"])(e.handle),1),Object(n["h"])("p",b,Object(n["F"])(e.emails.toString()),1)]),h])})),128))])])}var p=s("1da1"),O=(s("96cf"),s("3b42")),f=s("5b34"),m={data:function(){return{list:[],friendList:[],Session:O["b"]}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["c"])(O["b"].user.handle);case 2:e.list=t.sent,s=0;case 4:if(!(s<e.list.following.length)){t.next=13;break}return t.t0=e.friendList,t.next=8,Object(f["c"])(e.list.following[s].handle);case 8:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 10:s++,t.next=4;break;case 13:case"end":return t.stop()}}),t)})))()}},g=s("6b0d"),v=s.n(g);const w=v()(m,[["render",j]]);t["a"]=w}}]);
//# sourceMappingURL=users.780b8bf3.js.map