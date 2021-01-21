(this["webpackJsonpthomvanderveldt-portfolio"]=this["webpackJsonpthomvanderveldt-portfolio"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),i=a.n(r),c=a(13),s=a.n(c),o=(a(19),a(3)),l=a(4),j=a(6),h=a(5),d=(a(20),{profileInfo:{name:"Thom van der Veldt",title:"Full-Stack Web Developer"},aboutMe:{text:"Aspiring Full-Stack Web-Developer, looking for a job! Currently following a program at Winc Academy.\n    I started programming at the tail end of 2019. First in PHP, later on in Laravel, HTML, CSS,\n    Javascript\n    and React.JS. The full package, so to speak. As a side note, I've got 14 years of experience in the\n    hospitality industry, the last 5 years as a manager."},projects:[{id:1,name:"Tweety",text:"Tweety! A Twitter clone made in the PHP framework Laravel, styled with TailwindCSS.\n            You're able to register a profile, tweet, make connections with other users and see\n            a timeline of your friends activities. Clone the project and run in a local server\n            to play around with it.",image:"images/tweety2.png",link:"https://www.github.com/Thom711/tweety"},{id:2,name:"RoboFriends",text:"RoboFriends. A small sample project in React.JS. Pulls a list of robots from an external API.\n            You can search\n            over them using the searchbox. Part of the Zero To Mastery Web Development course.",image:"images/robofriends.png",link:"https://www.github.com/Thom711/robofriends"},{id:3,name:"ToDoList",text:"Who hasn't made one? This (useable!) to do list uses the external API JSONBox to store the\n            data. So feel free to add some stuff. Don't add sensitive information though. This project was\n            made with vanilla JS, but uses asynchronous coding to interact with the API.",image:"images/filler.jpg",link:"https://github.com/Thom711/thom-vanderveldt---todolist"}],contact:{email:"tvdveldt@hotmail.com",phone:"+31618071202"}}),b=a(8),u=a(12),p=a(9),m=a.p+"static/media/profile.03ea3e2d.jpg",f=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={clicked:!1},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(l.a)(a,[{key:"handleClick",value:function(e){this.state.clicked?(e.target.style.transitionDuration="2s",e.target.style.transform="skew(-180deg)"):(e.target.style.transitionDuration="2s",e.target.style.transform="skew(180deg)"),this.setState({clicked:!this.state.clicked})}},{key:"render",value:function(){var e=this.props.profileInfo;return Object(n.jsxs)("header",{className:"page-header",children:[Object(n.jsx)("figure",{children:Object(n.jsx)("img",{src:m,width:"125",className:"page-header__image bShadow-33",alt:"Profile",onClick:this.handleClick})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"page-header__profile",children:[Object(n.jsx)("p",{className:"page-header__profile--name",children:e.name}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("p",{className:"page-header__profile--title",children:e.title})})]}),Object(n.jsxs)("nav",{children:[Object(n.jsx)("a",{href:"https://www.github.com/Thom711",target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("p",{className:"github link",children:[Object(n.jsx)(u.a,{icon:p.a}),"Github"]})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/thomvanderveldt",target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("p",{className:"linkedin link",children:[Object(n.jsx)(u.a,{icon:p.b}),"LinkedIn"]})})]})]})]})}}]),a}(i.a.Component),O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.aboutMe;return Object(n.jsx)("article",{className:"page-about",id:"about",children:Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"About Me"}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"about-me-text",children:e.text})})]})})}}]),a}(i.a.Component),g=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props;return Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("section",{children:[Object(n.jsx)("p",{children:e.text}),Object(n.jsx)("figure",{children:Object(n.jsx)("img",{src:e.image,alt:e.name,width:"70",className:"page-main__image bShadow-33"})})]})})}}]),a}(i.a.Component),x=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.projects.map((function(e){return Object(n.jsx)(g,{name:e.name,text:e.text,image:e.image,link:e.link},e.id)}));return Object(n.jsxs)("article",{className:"page-projects",id:"projects",children:[Object(n.jsx)("h3",{children:"Highlighted Projects"}),Object(n.jsx)("div",{className:"projects-box",children:e})]})}}]),a}(i.a.Component),v=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.contact;return Object(n.jsxs)("article",{className:"page-contact",id:"contact",children:[Object(n.jsx)("h3",{children:"Contact"}),Object(n.jsxs)("section",{children:[Object(n.jsxs)("p",{children:["Email: ",Object(n.jsx)("code",{id:"email",children:e.email})," ",Object(n.jsx)("br",{}),"Phone: ",Object(n.jsx)("code",{id:"phone",children:e.phone})," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})]}),Object(n.jsx)("a",{href:"files/tvdveldt_cv.pdf",target:"_blank",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("button",{className:"bShadow-33",children:"CV"})," ",Object(n.jsx)("br",{}),"(Dutch)"]})})]})]})}}]),a}(i.a.Component),k=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("footer",{className:"page-footer",children:Object(n.jsx)("p",{children:"Last updated January 2021, made using ReactJS and SCSS."})})}}]),a}(i.a.Component),w=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isLoading:!1,profileInfo:{},aboutMe:{},projects:[],contact:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({profileInfo:d.profileInfo,aboutMe:d.aboutMe,projects:d.projects,contact:d.contact})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container grid",children:[Object(n.jsx)(f,{profileInfo:this.state.profileInfo}),Object(n.jsxs)("main",{className:"main",children:[Object(n.jsx)(O,{aboutMe:this.state.aboutMe}),Object(n.jsx)(x,{projects:this.state.projects}),Object(n.jsx)(v,{contact:this.state.contact})]}),Object(n.jsx)(k,{})]})}}]),a}(i.a.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),y()}},[[26,1,2]]]);
//# sourceMappingURL=main.eef970ae.chunk.js.map