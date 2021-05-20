(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(71),c=a.n(n),l=(a(84),a(1)),m=a.n(l),o=a(4),i=a(3),u=a(18),d=a(78),g=a(75),p=a.n(g).a.create({baseURL:"https://secret-messeger-api.herokuapp.com"});function f(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("messages"))),t=Object(i.a)(e,2),a=t[0],n=t[1];return s.a.createElement("div",{className:"col-md-8"},s.a.createElement("div",{className:"row col-10 text-center text-danger  mx-auto"},a&&0!==a.length?a.length>0&&a.map(function(e,t){return s.a.createElement(b,{messageObj:e,key:t,setMessages:n})}):s.a.createElement("h1",null,"No secret messages sent!!")))}var b=function(e){var t=e.messageObj,a=e.setMessages,n=Object(r.useState)(!1),c=Object(i.a)(n,2),l=c[0],u=c[1],d=Object(r.useState)(""),g=Object(i.a)(d,2),f=g[0],b=g[1],E=function(){var e=Object(o.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p.delete("/delete-message",{data:t}).then(function(e){alert("Message deleted succesfully!");var r=JSON.parse(localStorage.getItem("messages")||"[]");r=r.filter(function(e){return e.randomKey!==t.secretKey}),a(r),localStorage.setItem("messages",JSON.stringify(r))}).catch(function(e){return alert(e)});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"col-md-5 mt-3 text-center"},s.a.createElement("div",{className:"card h-100"},s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-text text-overflow "},t.message.length>35?t.message.substring(0,35)+"...":t.message,"  "),l&&s.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:function(e){b(e.target.value)}}),!l&&s.a.createElement("button",{className:"btn btn-danger",onClick:function(){u(!0)}},"Delete"),l&&s.a.createElement("button",{className:"btn btn-danger",onClick:function(){E({password:f,secretKey:t.randomKey}).then(function(){u(!1),b("")})}},"Delete"))))};function E(e){var t=e.id,a=Object(r.useState)(""),n=Object(i.a)(a,2),c=n[0],l=n[1];return Object(r.useEffect)(function(){function e(){return(e=Object(o.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/message-by-id/".concat(t));case 2:a=e.sent,l(a.data.result[0].message);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),s.a.createElement("div",{className:"col-md-8 mt-3 mx-auto mt-5"},s.a.createElement("div",{className:"card h-100"},s.a.createElement("div",{className:"card-body text-center"},c?s.a.createElement(s.a.Fragment,null,"   ",s.a.createElement("h5",{className:"card-title"},"Your Secret Message is "),s.a.createElement("p",{className:"card-text "},c,"  ")," "):s.a.createElement("h5",{className:"card-title"},"Oops! Message is either deleted by the Sender or You have navigated to a different link"))))}var h=a(209),v=u.a().shape({message:u.b().required("Secret Message is required"),email:u.b().email("Invalid email").required("Email is required"),password:u.b().required("Password is required")});function N(e){var t=e.id;return s.a.createElement("div",null,s.a.createElement("h2",{className:"navbar-header site-name text-danger text-center pt-2 font-weight-bold"},"Secret Messenger"),s.a.createElement("h6",{className:"navbar-header site-name text-danger text-center pt-4 font-weight-bold"},"Start sending secret messages Anonymously!"),t&&s.a.createElement(E,{id:t}),!t&&s.a.createElement(w,null))}function w(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),l=Object(i.a)(c,2),m=l[0],o=l[1];return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-danger  mx-5 my-5 p-2",onClick:function(){n(!a),o(!1)}},"Send a secret Message"),s.a.createElement("button",{className:"btn btn-danger  mx-5 my-5 p-2",onClick:function(){o(!m),n(!1)}},"View Sent Messages"),m&&s.a.createElement(f,null),a&&s.a.createElement(y,{setToggle:n,setToggleSentMessages:o}))}function y(e){var t=e.setToggle,a=e.setToggleSentMessages,r=Object(d.a)({validationSchema:v}),n=r.register,c=r.handleSubmit,l=r.errors,i=function(){var e=Object(o.a)(m.a.mark(function e(r){var s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s={randomKey:Object(h.a)(),password:r.password,message:r.message,targetUrl:"https://secret-messenger.netlify.app",targetMail:r.email},p.post("/create-message",s).then(function(e){alert("Message sent succesfully!");var r=JSON.parse(localStorage.getItem("messages")||"[]");r.push({randomKey:s.randomKey,message:s.message}),localStorage.setItem("messages",JSON.stringify(r)),t(!1),a(!0)}).catch(function(e){alert(e.message)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"App"},s.a.createElement("form",{onSubmit:c(i)},s.a.createElement("div",{className:"col-md-4 mt-3 mx-auto"},s.a.createElement("div",{className:"card h-100 "},s.a.createElement("div",{className:"card-body mx-auto"},s.a.createElement("input",{name:"email",placeholder:"Enter Receiver's Mail",type:"email",ref:n,size:"35"}),l.email&&s.a.createElement("p",{className:"error"},l.email),s.a.createElement("textarea",{name:"message",placeholder:"Secret Message",rows:"4",ref:n}),l.message&&s.a.createElement("p",{className:"error"},l.message),s.a.createElement("input",{name:"password",placeholder:"Enter Password",type:"password",ref:n,size:"35"}),l.password&&s.a.createElement("p",{className:"error"},l.password),s.a.createElement("input",{className:"btn btn-danger",type:"submit"}))))))}var S=a(77),O=a(2);function x(){return s.a.createElement(S.a,null,s.a.createElement(j,null))}function j(){var e=new URLSearchParams(Object(O.d)().search);return s.a.createElement("div",{className:"bg_image"},s.a.createElement(N,{id:e.get("rs")}))}var M=document.getElementById("root");c.a.render(s.a.createElement(r.StrictMode,null,s.a.createElement(x,null)),M)},79:function(e,t,a){e.exports=a(207)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.391b2e83.chunk.js.map