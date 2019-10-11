(window.webpackJsonppractice=window.webpackJsonppractice||[]).push([[0],{13:function(e,n,t){e.exports=t(26)},18:function(e,n,t){},19:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),l=(t(18),t(1)),i=function(e){var n=e.changeContent;return r.a.createElement("div",{className:"App-header"},r.a.createElement("header",{role:"banner"},"Practice examples for React"),r.a.createElement("nav",{role:"navigation"},r.a.createElement("p",{name:"form",onClick:function(e){return n("form")}},"Form"),r.a.createElement("p",{name:"todo",onClick:function(e){return n("todo")}},"Todo List")))};var u=function(e){var n=e.item,t=n.id,a=n.text,o=n.done;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:o&&"Todo-done"},r.a.createElement("input",{type:"checkbox",id:t,checked:o,onChange:function(){return e.handleChange(t)}}),a),r.a.createElement("hr",null))},m=[{id:1,text:"Take out the trash",done:!0},{id:2,text:"Grocery shopping",done:!1},{id:3,text:"Clean gecko tank",done:!1},{id:4,text:"Mow lawn",done:!0},{id:5,text:"Catch up on Arrested Development",done:!1}];var d=function(){return r.a.createElement("h1",null,"I am loading data for you!")},s=(t(19),function(){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)([]),i=Object(l.a)(c,2),s=i[0],p=i[1];Object(a.useEffect)((function(){o(!0),p(m),o(!1)}),[]);var h=function(e){var n=s.map((function(n){return n.id===e&&(n.done=!n.done),n}));p(n)},f=s.map((function(e){return r.a.createElement(u,{key:e.id,item:e,handleChange:h})}));return r.a.createElement("main",{role:"main",className:"App-main todo"},r.a.createElement("h1",null,"This is a simple TodoList"),r.a.createElement("div",{className:"Todo-list"},t?r.a.createElement(d,null):f))}),p=t(2),h=function(e){var n=e.gender,t=e.handleChange;return["male","female","other"].map((function(e,a){return r.a.createElement("label",{key:a},r.a.createElement("input",{type:"radio",name:e,value:n,checked:n===e,onChange:function(){return t(e)}}),e)}))},f=t(3);function E(){var e=Object(p.a)(["\n  width: 270px;\n"]);return E=function(){return e},e}var b=f.a.select(E()),g=function(e){var n=e.country,t=e.handleChange,o=Object(a.useState)([]),c=Object(l.a)(o,2),i=c[0],u=c[1];Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return{name:e.name,id:e.alpha2Code}}));u(n)}))}),[]);var m=i.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}));return r.a.createElement("label",null,"Country: \xa0",r.a.createElement(b,{name:"country",value:n,onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"-- Choose the country --"),m))};function v(){var e=Object(p.a)(["\n  margin: 20px 15px 0;\n  padding: 5px 10px;\n  background-color: aqua;\n  border-radius: 20%;\n  cursor: pointer;\n  font-weight: 700;\n"]);return v=function(){return e},e}function x(){var e=Object(p.a)(["\n  display: block;\n  height: 60px;\n  width: inherit;\n  margin: auto;\n\n  @media only screen and (min-width: 410px) {\n    height: 100px;\n    width: inherit;\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(p.a)(["\n  display: block;\n  margin: 5px 0;\n  padding: 0;\n\n  &.joke {\n    font-style: italic;\n    width: 270px;\n    margin: 15px auto 5px;\n\n    @media only screen and (min-width: 410px) {\n      width: 320px;\n    }\n  }\n"]);return k=function(){return e},e}function j(){var e=Object(p.a)(["\n  margin: 20px 0;\n  font-size: 24px;\n  background-color: aqua;\n\n  @media only screen and (min-width: 410px) {\n    width: 400px;\n    font-size: 32px;\n  "]);return j=function(){return e},e}function y(){var e=Object(p.a)(["\n  width: 300px;\n  margin: 20px auto;\n  border: 3px double white;\n\n  @media only screen and (min-width: 410px) {\n    width: 400px;\n  "]);return y=function(){return e},e}var w=f.a.div(y()),O=f.a.h1(j()),C=f.a.label(k()),S=f.a.textarea(x()),N=f.a.button(v()),A=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),u=i[0],m=i[1],d=Object(a.useState)(""),s=Object(l.a)(d,2),p=s[0],f=s[1],E=Object(a.useState)(""),b=Object(l.a)(E,2),v=b[0],x=b[1],k=Object(a.useState)(!1),j=Object(l.a)(k,2),y=j[0],A=j[1],T=Object(a.useState)(""),F=Object(l.a)(T,2),q=F[0],D=F[1],I=function(e){o(""),m(""),f(""),x(""),A(!1),D(""),e.preventDefault()};return r.a.createElement(w,{className:"form"},r.a.createElement(O,null,"This is a sample Form"),r.a.createElement("form",{onSubmit:function(e){console.log("submitted"),I(e),e.preventDefault()}},r.a.createElement(C,null,"First name: \xa0",r.a.createElement("input",{type:"text",name:"firstName",value:t,onChange:function(e){return o(e.target.value)},placeholder:"First name",required:!0})),r.a.createElement(C,null,"Email: \xa0",r.a.createElement("input",{type:"text",name:"email",value:u,onChange:function(e){return m(e.target.value)},placeholder:"Email"})),r.a.createElement(C,null,r.a.createElement(h,{gender:p,handleChange:f})),r.a.createElement(g,{country:v,handleChange:x}),r.a.createElement(C,null,r.a.createElement("input",{type:"checkbox",name:"funny",checked:y,onChange:function(e){return A(e.target.checked)}}),"Are you funny?"),y?r.a.createElement(C,{className:"joke"},"As you said, you're funny. So tell us a joke and let us laugh!",r.a.createElement(S,{name:"joke",value:q,onChange:function(e){return D(e.target.value)},placeholder:"Your joke :) "})):null,r.a.createElement(N,null,"Submit"),r.a.createElement(N,{onClick:I},"Reset")),r.a.createElement("p",null,q))},T=function(e){var n=e.content;return r.a.createElement("main",{role:"main",className:"App-main"},"todo"===n?r.a.createElement(s,null):r.a.createElement(A,null))},F=function(){return r.a.createElement("footer",{role:"contentinfo",className:"App-footer"},r.a.createElement("p",null,"\xa9 2019 by Martyna Skup (",r.a.createElement("a",{href:"https://snikerslala.github.io/"},"snikerslala"),")"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/snikerslala"},"GitHub")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/martynaskup/"},"LinkedIn")))},q=(t(25),function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i,{changeContent:o}),r.a.createElement(T,{content:t}),r.a.createElement(F,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.e09a52f1.chunk.js.map