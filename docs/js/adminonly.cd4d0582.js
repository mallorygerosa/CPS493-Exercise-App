(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminonly"],{ed81:function(t,e,c){"use strict";c.r(e);var s=c("7a23"),n={class:"about"},a=Object(s["h"])("h1",{class:"title"},"Users Page",-1),l=Object(s["h"])("h2",{class:"subtitle"},"Should be accesible only to admins",-1),b={class:"table is-striped is-hoverable is-fullwidth"},i=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th",null,"First Name"),Object(s["h"])("th",null,"Last Name"),Object(s["h"])("th",null,"Username"),Object(s["h"])("th",null,"Profile Picture"),Object(s["h"])("th",null,"isAdmin"),Object(s["h"])("th"),Object(s["h"])("th")])],-1),h=["src","alt"],u=Object(s["h"])("td",null,[Object(s["h"])("a",{href:""},"Emails"),Object(s["j"])(),Object(s["h"])("br"),Object(s["h"])("a",{href:""},"Friends")],-1),r=Object(s["h"])("td",null,[Object(s["h"])("p",{class:"buttons"},[Object(s["h"])("button",{class:"button"},[Object(s["h"])("span",{class:"icon is-small"},[Object(s["h"])("i",{class:"fas fa-eye"})])]),Object(s["h"])("button",{class:"button"},[Object(s["h"])("span",{class:"icon is-small"},[Object(s["h"])("i",{class:"fas fa-edit"})])]),Object(s["h"])("button",{class:"button"},[Object(s["h"])("span",{class:"icon is-small"},[Object(s["h"])("i",{class:"fas fa-trash"})])])])],-1);function j(t,e,c,j,O,o){return Object(s["v"])(),Object(s["g"])("div",n,[a,l,Object(s["h"])("table",b,[i,Object(s["h"])("tbody",null,[(Object(s["v"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(O.list,(function(t){return Object(s["v"])(),Object(s["g"])("tr",{key:t.handle},[Object(s["h"])("th",null,Object(s["F"])(t.firstName),1),Object(s["h"])("th",null,Object(s["F"])(t.lastName),1),Object(s["h"])("td",null,Object(s["F"])(t.handle),1),Object(s["h"])("td",null,[Object(s["h"])("img",{src:t.pic,width:"50",alt:t.handle},null,8,h)]),Object(s["h"])("td",null,Object(s["F"])(t.isAdmin),1),u,r])})),128))])])])}var O=c("1da1"),o=(c("96cf"),c("5b34")),d=c("a18c"),f=c("3b42"),m=(void 0).Session.user.isAdmin,p={data:function(){return{list:[],Session:f["a"]}},mounted:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])();case 2:t.list=e.sent,m||(t.$oruga.notification.open({message:"Only admins can view this page",variant:"info",position:"top",closable:!0}),d["a"].push("/Home"));case 4:case"end":return e.stop()}}),e)})))()}},v=c("6b0d"),w=c.n(v);const g=w()(p,[["render",j]]);e["default"]=g}}]);
//# sourceMappingURL=adminonly.cd4d0582.js.map