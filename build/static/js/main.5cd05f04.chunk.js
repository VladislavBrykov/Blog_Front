(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{23:function(e,a,t){},35:function(e,a,t){},45:function(e,a,t){},52:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),s=t.n(l),c=t(6),o=(t(45),t(2)),i=t(12),m=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://f0.pngfuel.com/png/426/164/crying-michael-jordan-png-clip-art.png",alt:"cry"}),r.a.createElement(o.b,{to:{pathname:"/"}}," ","Go Back"))},u=t(1),p=t.n(u),d=t(5),f=t(17),E=t(18),h=t(21),g=t(20),b=(t(52),t(3)),v=t.n(b),_=function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"loadData",value:function(){var e=Object(d.a)(p.a.mark((function e(){var a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.a.defaults.baseURL="http://localhost:3000/api",e.next=3,v.a.get("/logout/?all=true",{headers:{Authorization:localStorage.jwtToken}}).then((function(){return a.props.changeLoggedIn("off")}));case 3:window.location.reload(),delete localStorage.jwtToken,delete localStorage.role;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header-wrapper"},"admin"===this.props.loggedIn||"user"===this.props.loggedIn?r.a.createElement("div",{className:"header"},r.a.createElement("button",{id:"btn",onClick:function(){return e.loadData()}},r.a.createElement(o.b,{to:"/"},"Logout"))):r.a.createElement("div",{className:"header"},r.a.createElement("button",{id:"btn"},r.a.createElement(o.b,{to:"/login"},"Login")),r.a.createElement("button",{id:"btn"},r.a.createElement(o.b,{to:"/registration"},"Registration"))))}}]),t}(r.a.Component),w=t(15),k=(t(35),{position:"absolute",top:"70px",left:"50%",transform:"translateX(-50%)"}),y=function(e){var a=e.changeLoggedIn,t=Object(n.useState)({phoneEmail:"",password:""}),l=Object(c.a)(t,2),s=l[0],i=l[1],m=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.a.defaults.baseURL="http://localhost:3000/api",e.next=3,v.a.post("/login",s);case 3:if(200==(t=e.sent).status){e.next=6;break}return e.abrupt("return",alert(t.data?t.data:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\u0442 \u0442\u0430\u043a"));case 6:n=t.data.loginUser,r=n.searchUser.role,console.log("--------",n.newToken),console.log(t.data),"admin"===r&&(a("admin"),localStorage.jwtToken=n.newToken,localStorage.role=r,localStorage.id=n.searchUser.phoneEmail),"user"===r&&(a("user"),localStorage.jwtToken=n.newToken,localStorage.role=r,localStorage.id=n.searchUser.phoneEmail);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{style:k,className:"form_auth_block"},r.a.createElement("div",{className:"form_auth_block_content"},r.a.createElement("p",{className:"form_auth_block_head_text"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{className:"form_auth_style"},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d"),r.a.createElement("input",{type:"loginl",name:"auth_login",onChange:function(e){return i(Object(w.a)(Object(w.a)({},s),{},{phoneEmail:e.target.value}))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d",id:"login",required:!0}),r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",name:"auth_pass",onChange:function(e){return i(Object(w.a)(Object(w.a)({},s),{},{password:e.target.value}))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"pass",required:!0}),r.a.createElement("button",{className:"form_auth_button",type:"button",name:"form_auth_submit",onClick:function(){return m()}},r.a.createElement(o.b,{to:"/"},"Login")),r.a.createElement("button",{className:"form_auth_button",type:"button"},r.a.createElement(o.b,{to:"/password-reset"},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f")))))))};var x=function(){var e=function(){var e=Object(d.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById("login").value,t=document.getElementById("pass").value,n={phoneEmail:a,password:t},console.log(n),v.a.defaults.baseURL="http://localhost:3000/api",e.next=7,v.a.post("http://localhost:3000/api/registration",n);case 7:alert("\u0423\u0441\u043f\u0435\u0448\u043d\u043e");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{style:{position:"absolute",top:"0px",left:"50%",transform:"translateX(-50%)"},class:"form_auth_block"},r.a.createElement("div",{class:"form_auth_block_content"},r.a.createElement("p",{class:"form_auth_block_head_text"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{class:"form_auth_style",action:"#",method:"post"},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d"),r.a.createElement("input",{type:"login",name:"auth_login",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d",id:"login",required:!0}),r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",name:"auth_pass",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"pass",required:!0}),r.a.createElement("button",{class:"form_auth_button",type:"submit",name:"form_auth_submit",onClick:function(){return e()}},r.a.createElement(o.b,{to:"/login"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))))))};t(71);var j=function(){return r.a.createElement("div",{class:"block-20 space-between-blocks"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row px-2 pt-4"},r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"testimonial-card-1 mb-5"},r.a.createElement("p",{class:"testimonial-card-1__paragraph mb-3"},'" I was laughing at the "easy to copy-paste" solution to building landing pages. Awesome, Innovative, and pretty useful for building quick pages. "'),r.a.createElement("div",{class:"person"},r.a.createElement("div",{class:"mb-2"},r.a.createElement("img",{class:"person__avatar",src:"https://i.imgur.com/3AMFDNC.jpg"})),r.a.createElement("div",{class:"flex-grow-1 d-flex flex-column"},r.a.createElement("span",{class:"person__rating"},r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"})),r.a.createElement("span",{class:"person__name my-1"},"Brajeshwar"),r.a.createElement("a",{href:"https://twitter.com/brajeshwar",target:"_blank",class:"person__info"},"@Brajeshwar"))),r.a.createElement("span",{class:"testimonial-card-1__quote-symbol"},r.a.createElement("i",{class:"fas fa-quote-left"})))),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"testimonial-card-1 mb-5"},r.a.createElement("p",{class:"testimonial-card-1__paragraph mb-3"},'" Frontendor have developed one of the best copy-paste framework with beautiful neat code! 99% on-time delivery record with all the blocks on any existing codebase! Saves all the late nights, build the landing page quickly and the design is always up to date in the trend! "'),r.a.createElement("div",{class:"person"},r.a.createElement("div",{class:"mb-2"},r.a.createElement("img",{class:"person__avatar",src:"https://i.imgur.com/HKAewoz.jpg"})),r.a.createElement("div",{class:"flex-grow-1 d-flex flex-column"},r.a.createElement("span",{class:"person__rating"},r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"})),r.a.createElement("span",{class:"person__name my-1"},"Fajar Siddiq"),r.a.createElement("a",{href:"https://twitter.com/fajarsiddiqFS",target:"_blank",class:"person__info"},"@fajarsiddiqFS"))),r.a.createElement("span",{class:"testimonial-card-1__quote-symbol"},r.a.createElement("i",{class:"fas fa-quote-left"})))),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"testimonial-card-1 mb-5"},r.a.createElement("p",{class:"testimonial-card-1__paragraph mb-3"},'" These templates are very complete and also nice looking. Even non-technical people can easily integrate them as whole. One does not need more to build a complete webpage than these easy and beautiful blocks. Job well done, indeed. "'),r.a.createElement("div",{class:"person"},r.a.createElement("div",{class:"mb-2"},r.a.createElement("img",{class:"person__avatar",src:"https://i.imgur.com/xabGxOb.png"})),r.a.createElement("div",{class:"flex-grow-1 d-flex flex-column"},r.a.createElement("span",{class:"person__rating"},r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"})),r.a.createElement("span",{class:"person__name my-1"},"Aleksandar Balalovski"),r.a.createElement("a",{href:"https://twitter.com/itsbalal",target:"_blank",class:"person__info"},"@itsbalal"))),r.a.createElement("span",{class:"testimonial-card-1__quote-symbol"},r.a.createElement("i",{class:"fas fa-quote-left"})))))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row px-2 pt-4"},r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"testimonial-card-1 mb-5"},r.a.createElement("p",{class:"testimonial-card-1__paragraph mb-3"},"\" Frontendor has allowed me to save a lot of time when creating a website for a client. The blocks are dead simple to use if you know relatively basic HTML, and since they're just HTML/CSS they're extremely modifiable (saves time instead of building from scratch). They integrate well into most website designs. \""),r.a.createElement("div",{class:"person"},r.a.createElement("div",{class:"mb-2"},r.a.createElement("img",{class:"person__avatar",src:"https://i.imgur.com/0MUuU8l.png"})),r.a.createElement("div",{class:"flex-grow-1 d-flex flex-column"},r.a.createElement("span",{class:"person__rating"},r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"})),r.a.createElement("span",{class:"person__name my-1"},"Satoshi Nakamoto"),r.a.createElement("a",{href:"",target:"",class:"person__info"},"@tuatarian"))),r.a.createElement("span",{class:"testimonial-card-1__quote-symbol"},r.a.createElement("i",{class:"fas fa-quote-left"})))),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"testimonial-card-1 mb-5"},r.a.createElement("p",{class:"testimonial-card-1__paragraph mb-3"},'" Frontendor have developed one of the best copy-paste framework with beautiful neat code! 99% on-time delivery record with all the blocks on any existing codebase! Saves all the late nights, build the landing page quickly and the design is always up to date in the trend! "'),r.a.createElement("div",{class:"person"},r.a.createElement("div",{class:"mb-2"},r.a.createElement("img",{class:"person__avatar",src:"https://i.imgur.com/HKAewoz.jpg"})),r.a.createElement("div",{class:"flex-grow-1 d-flex flex-column"},r.a.createElement("span",{class:"person__rating"},r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"})),r.a.createElement("span",{class:"person__name my-1"},"Fajar Siddiq"),r.a.createElement("a",{href:"https://twitter.com/fajarsiddiqFS",target:"_blank",class:"person__info"},"@fajarsiddiqFS"))),r.a.createElement("span",{class:"testimonial-card-1__quote-symbol"},r.a.createElement("i",{class:"fas fa-quote-left"})))),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"testimonial-card-1 mb-5"},r.a.createElement("p",{class:"testimonial-card-1__paragraph mb-3"},'" Frontendor have developed one of the best copy-paste framework with beautiful neat code! 99% on-time delivery record with all the blocks on any existing codebase! Saves all the late nights, build the landing page quickly and the design is always up to date in the trend! "'),r.a.createElement("div",{class:"person"},r.a.createElement("div",{class:"mb-2"},r.a.createElement("img",{class:"person__avatar",src:"https://i.imgur.com/xabGxOb.png"})),r.a.createElement("div",{class:"flex-grow-1 d-flex flex-column"},r.a.createElement("span",{class:"person__rating"},r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"}),r.a.createElement("i",{class:"fas fa-star"})),r.a.createElement("span",{class:"person__name my-1"},"Aleksandar Balalovski"),r.a.createElement("a",{href:"https://twitter.com/itsbalal",target:"_blank",class:"person__info"},"@itsbalal"))),r.a.createElement("span",{class:"testimonial-card-1__quote-symbol"},r.a.createElement("i",{class:"fas fa-quote-left"})))))))},N=(t(72),function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar"},"admin"===this.props.loggedIn||"user"===this.props.loggedIn?"user"===this.props.loggedIn?r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f user")),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/posts-authorized-user"},"\u041f\u043e\u0441\u0442\u044b")),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/new-post"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"))):r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/accaunt"},"\u041a\u0430\u0431\u0438\u043d\u0435\u0442 admin")),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/posts-authorized"},"\u041f\u043e\u0441\u0442\u044b")),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/new-post"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"))):r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"button"},"\u0413\u043e\u0441\u0442\u044c"),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/posts-for-guest"},"\u041f\u043e\u0441\u0442\u044b"))))}}]),t}(r.a.Component)),S=t(19),O=t.p+"static/media/grapefruit-slice-332-332.bf091365.png";t(23);var I=function(e){var a=Object(n.useState)(1),t=Object(c.a)(a,2),l=t[0],s=t[1],i=Object(n.useState)([]),m=Object(c.a)(i,2),u=m[0],f=m[1],E=function(){var e=Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3000/api/posts?page=1&sort=standard");case 2:(a=e.sent)&&(console.log(a.data.allPosts.posts),f(a.data.allPosts.posts.reverse()));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),r.a.createElement("div",{style:{position:"absolute",top:"70px",left:"50%",transform:"translateX(-50%)"}},u.map((function(e,a){return a<5*l&&a>=5*(l-1)?r.a.createElement("div",{className:"rightcolumn"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,e.title),r.a.createElement("h5",null,"created: ",e.createdAt),r.a.createElement("div",{className:"fakeimg"},r.a.createElement("img",{className:"fakeimg",src:e.img})),r.a.createElement("div",{className:"card"},r.a.createElement("p",null,"username: ",e.phoneEmail)),r.a.createElement("p",{class:"lengBody"},e.body),r.a.createElement("h5",null,"updated: ",e.createdAt),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/post-admin/"+e.id},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c")))):null})),u.length?r.a.createElement("div",{className:"p-2"},r.a.createElement(S.a,{className:"",onChange:function(e){return s(e)},defaultCurrent:1,total:10*Math.ceil(u.length/5)})):r.a.createElement("h2",null,"\u041f\u043e\u0441\u0442\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"))};var q=function(e){var a=Object(n.useState)(1),t=Object(c.a)(a,2),l=t[0],s=t[1],i=Object(n.useState)([]),m=Object(c.a)(i,2),u=m[0],f=m[1],E=function(){var e=Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3000/api/posts?page=1&sort=standard");case 2:a=e.sent,console.log(a.data.allPosts.posts),f(a.data.allPosts.posts.reverse());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),r.a.createElement("div",{style:{position:"absolute",top:"70px",left:"50%",transform:"translateX(-50%)"}},u.map((function(e,a){return a<5*l&&a>=5*(l-1)?r.a.createElement("div",{className:"rightcolumn"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,e.title),r.a.createElement("h5",null,"created: ",e.createdAt),r.a.createElement("div",{className:"fakeimg"},r.a.createElement("img",{className:"fakeimg",src:e.img})),r.a.createElement("div",{className:"card"},r.a.createElement("p",null,"username: ",e.phoneEmail)),r.a.createElement("p",{class:"lengBody"},e.body),r.a.createElement("h5",null,"updated: ",e.createdAt),r.a.createElement("button",{className:"button"},r.a.createElement(o.b,{to:"/post-admin/"+e.id},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c")))):null})),u.length?r.a.createElement("div",{className:"p-2"},r.a.createElement(S.a,{className:"",onChange:function(e){return s(e)},defaultCurrent:1,total:10*Math.ceil(u.length/5)})):r.a.createElement("h2",null,"\u041f\u043e\u0441\u0442\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"))};t(73);var C=function(e){var a=Object(n.useState)(null),t=Object(c.a)(a,2),l=(t[0],t[1],function(){var e=Object(d.a)(p.a.mark((function e(){var a,t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById("titleBody").value,t=document.getElementById("contentBody").value,console.log(localStorage.id),n={title:a,body:t,phoneEmail:localStorage.id},console.log(n),e.next=7,v.a.post("http://localhost:3000/api/new-post",n,{headers:{Authorization:localStorage.jwtToken}});case 7:(r=e.sent)&&(localStorage.idPost=r.data.createNewPost.bodyCreateNewPost[0].id);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{style:{position:"absolute",top:"-10px",left:"50%",transform:"translateX(-50%)"},class:"form_auth_block"},r.a.createElement("div",{class:"form_auth_block_content"},r.a.createElement("p",{class:"form_auth_block_head_text"},"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"),r.a.createElement("form",{class:"form_auth_style",action:"#",method:"post"},r.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("textarea",{rows:"1",cols:"52",name:"textArea",id:"titleBody",required:!0}),r.a.createElement("label",null,"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443"),r.a.createElement("textarea",{rows:"15",cols:"52",name:"textArea",id:"contentBody",required:!0}),r.a.createElement("button",{class:"form_auth_button",type:"submit",name:"form_auth_submit",onClick:function(){return l()}},r.a.createElement(o.b,{to:"/posts-authorized"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c")))))))},A=t(40),T=(t(74),function(e){Object(A.a)(e);var a=Object(n.useState)({avatar:"",email:"",login:""}),t=Object(c.a)(a,2),l=t[0],s=t[1],o=Object(n.useRef)(),i=function(){var e=Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3000/api/posts/"+localStorage.idPost.toString());case 2:(a=e.sent)&&(console.log(a.data.postIdInformation.post),s(a.data.postIdInformation.post[0]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("image",a),e.next=4,v.a.post("http://localhost:3000/api/uploud-image/1",t,{headers:{"Content-Type":"multipart/form-data",Authorization:localStorage.jwtToken}}).catch((function(e){alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\u0442 \u0442\u0430\u043a. ".concat(e.message))}));case 4:200==e.sent.status?i():alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\u0442 \u0442\u0430\u043a.");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"rightcolumn"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,l.title),r.a.createElement("h5",null,"created: ",l.createdAt),r.a.createElement("div",{className:"fakeimg"},r.a.createElement("img",{className:"fakeimg",src:O})),r.a.createElement("div",{className:"card"},r.a.createElement("input",{ref:o,accept:"image/x-png,image/jpeg",onChange:function(e){return m(e.target.files[0])},id:"newFile",type:"file",className:"invisible-input"}),r.a.createElement("p",null,"username: ",l.phoneEmail)),r.a.createElement("p",null,l.body),r.a.createElement("h5",null,"updated: ",l.createdAt))))});var L=function(e){var a=Object(n.useRef)(),t=Object(n.useState)({avatar:"",email:"",login:""}),l=Object(c.a)(t,2),s=l[0],i=l[1],m=function(){var e=Object(d.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.location.href;case 2:return a=e.sent,e.next=5,a.match(/post-admin\/([^ ]*)/)[1];case 5:return a=e.sent,e.next=8,a;case 8:return localStorage.idPost=a.toString(),e.next=11,v.a.get("http://localhost:3000/api/posts/"+a.toString());case 11:t=e.sent,console.log(t.data.postIdInformation.post[0]),i(t.data.postIdInformation.post[0]);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/delete-post/"+localStorage.idPost.toString(),{headers:{Authorization:localStorage.jwtToken}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("image",a),e.next=4,v.a.post("http://localhost:3000/api/uploud-image/1",t,{headers:{"Content-Type":"multipart/form-data",Authorization:localStorage.jwtToken}}).catch((function(e){alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\u0442 \u0442\u0430\u043a. ".concat(e.message))}));case 4:200==e.sent.status?m():alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\u0442 \u0442\u0430\u043a.");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function E(){return(E=Object(d.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.location.href;case 2:return a=e.sent,e.next=5,a.match(/post-admin\/([^ ]*)/)[1];case 5:if(a=e.sent,t={typeActionPostComment:"post",idPostComment:a.toString(),phoneEmail:localStorage.id.toString(),likeDislike:"dislike"},!localStorage.jwtToken){e.next=13;break}return e.next=10,v.a.post("http://localhost:3000/api/new-like",t,{headers:{Authorization:localStorage.jwtToken}});case 10:n=e.sent,localStorage.jwtToken=n.data.resultCreateNewLike.newToken,m();case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(d.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.location.href;case 2:return a=e.sent,e.next=5,a.match(/post-admin\/([^ ]*)/)[1];case 5:if(a=e.sent,t={typeActionPostComment:"post",idPostComment:a.toString(),phoneEmail:localStorage.id.toString(),likeDislike:"like"},!localStorage.jwtToken){e.next=13;break}return e.next=10,v.a.post("http://localhost:3000/api/new-like",t,{headers:{Authorization:localStorage.jwtToken}});case 10:n=e.sent,localStorage.jwtToken=n.data.resultCreateNewLike.newToken,m();case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){m()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"rightcolumn"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,s.title),r.a.createElement("h5",null,"created: ",s.createdAt),r.a.createElement("div",{className:"fakeimg"},r.a.createElement("img",{className:"fakeimg",src:O})),r.a.createElement("div",{className:"card"},r.a.createElement("input",{ref:a,accept:"image/x-png,image/jpeg",onChange:function(e){return f(e.target.files[0])},id:"newFile",type:"file",className:"invisible-input"}),r.a.createElement("p",null,"username: ",s.phoneEmail)),r.a.createElement("p",null,s.body),r.a.createElement("h5",null,"updated: ",s.createdAt),r.a.createElement("button",{className:"social-like",onClick:function(){return E.apply(this,arguments)}},r.a.createElement("span",{className:"like"},r.a.createElement("i",{className:"glyphicon glyphicon-thumbs-up"})),r.a.createElement("span",{className:"count"},s.countDisLikes)),"\xa0",r.a.createElement("button",{className:"social-dislike",onClick:function(){return h.apply(this,arguments)}},r.a.createElement("span",{className:"dislike"},s.countLikes),r.a.createElement("span",{className:"like"},r.a.createElement("i",{className:"glyphicon glyphicon-thumbs-down"}))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("button",{className:"form_auth_button",type:"submit",name:"form_auth_submit",onClick:function(){return u()}},r.a.createElement(o.b,{to:"/post-admin"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"))))))},B=function(){var e=Object(n.useState)(),a=Object(c.a)(e,2),t=a[0],l=a[1],s=function(e){return l(e)};return r.a.createElement(o.a,null,r.a.createElement(N,{loggedIn:t,changeLoggedIn:s}),r.a.createElement("div",{className:"App"},r.a.createElement(_,{loggedIn:t,changeLoggedIn:s}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(y,{changeLoggedIn:s})}}),r.a.createElement(i.a,{exact:!0,path:"/registration",render:function(){return r.a.createElement(x,{changeLoggedIn:s})}}),r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(i.a,{exact:!0,path:"/new-post",render:function(){return r.a.createElement(C,{changeLoggedIn:s})}}),r.a.createElement(i.a,{exact:!0,path:"/my-posts",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(i.a,{exact:!0,path:"/posts-authorized",component:I}),r.a.createElement(i.a,{exact:!0,path:"/post-admin/:id",render:function(){return r.a.createElement(L,{changeLoggedIn:s})}}),r.a.createElement(i.a,{exact:!0,path:"/posts-authorized-user",component:q}),r.a.createElement(i.a,{component:m}))))},F=document.getElementById("root");s.a.render(r.a.createElement(B,null),F)}},[[75,1,2]]]);
//# sourceMappingURL=main.5cd05f04.chunk.js.map