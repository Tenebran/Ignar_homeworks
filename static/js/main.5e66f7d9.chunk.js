(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={default:"SuperButton_default__2KR1X",red:"SuperButton_red__3pb2v",disable:"SuperButton_disable__2ZE_p"}},,,,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2rpFl",superInputError:"SuperInputText_superInputError__2r69g",error:"SuperInputText_error__3A_dF"}},,,,function(e,t,n){e.exports={column:"HW4_column__1vX2o",testSpanError:"HW4_testSpanError__ggTHW"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1AdJ1",spanClassName:"SuperCheckbox_spanClassName__ovqNV"}},,,,function(e,t,n){e.exports={App:"App_App__1MSZ3"}},,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),s=n.n(a),i=(n(37),n(29)),o=n.n(i),j=n(11),l=(n(38),n(0));var u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{className:"header__wrapper",children:[Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/pre-junior",children:"Pre-junior"}),Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/junior",children:"Junior"}),Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/junior-plus",children:"JuniorPlus"})]})})},d=n(4);n(48);var b=function(){return Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("div",{className:"error__title",children:"404"}),Object(l.jsx)("div",{className:"error__title",children:"Page not found!"}),Object(l.jsx)("div",{className:"error__title",children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},O=n(16),h=n(5),x=n(8),m=n(13),p=n.n(m),v=function(e){var t=e.red,n=e.className,c=Object(x.a)(e,["red","className"]),r="".concat(t?"".concat(p.a.red," ").concat(p.a.default):p.a.default," ").concat(n);return Object(l.jsx)("button",Object(h.a)({className:r},c))},f={isLoading:!1},_=function(e){return{type:"LOADING/SET-LOADING",value:e}};n(50);var g=function(){var e=Object(O.c)((function(e){return e.loading.isLoading})),t=Object(O.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 10",Object(l.jsxs)("div",{className:"HW10",children:[e?Object(l.jsx)("div",{className:"HW10__circle",children:Object(l.jsx)("div",{})}):Object(l.jsx)("div",{children:Object(l.jsx)(v,{onClick:function(){t(_(!0)),setTimeout((function(){t(_(!1))}),3e3),console.log("loading...")},children:"set loading..."})}),Object(l.jsx)("hr",{})]}),Object(l.jsx)("hr",{})]})},N=n(3),k=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=Object(x.a)(e,["options","onChange","onChangeOption"]);return Object(l.jsx)("select",Object(h.a)(Object(h.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{className:"hw7__select",children:t?t.map((function(e,t){if(e)return Object(l.jsx)("option",{value:e,children:e},"".concat(t))})):""}))},C=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=(Object(x.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),a&&a(e.target.value)}),i=n?n.map((function(e,n){return Object(l.jsxs)("label",{className:"hw7__checkbox",children:[Object(l.jsx)("input",{type:"radio",value:e,checked:e===c,onChange:s,name:t}),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:i})},w=(n(51),["x","y","z"]);var y=function(){var e=Object(c.useState)(w[1]),t=Object(N.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsxs)("div",{className:"hw7",children:[Object(l.jsx)("div",{children:Object(l.jsx)(k,{options:w,value:n,onChangeOption:r})}),Object(l.jsx)("div",{children:Object(l.jsx)(C,{name:"radio",options:w,value:n,onChangeOption:r})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})]})},S=n(17),A=function(e,t){switch(t.type){case"sort":var n=Object(S.a)(e);return"up"===t.payload?n.sort((function(e,t){return e.age>t.age?-1:1})):"down"===t.payload?n.sort((function(e,t){return e.age>t.age?1:-1})):e;case"check":return Object(S.a)(e).filter((function(e){return e.age>=18?e:null}));default:return e}},E=(n(52),[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}]);var T=function(){var e=Object(c.useState)(E),t=Object(N.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(l.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 8",Object(l.jsxs)("div",{className:"HW8",children:[Object(l.jsx)("div",{className:"HW8__finalPeople",children:a}),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{onClick:function(){return r(A(E,{type:"sort",payload:"up"}))},children:"sort up"}),Object(l.jsx)(v,{onClick:function(){return r(A(E,{type:"sort",payload:"down"}))},children:"down"}),Object(l.jsx)(v,{onClick:function(){return r(A(E,{type:"check"}))},children:"check"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})]})};n(53);var I=function(){var e=Object(c.useState)(0),t=Object(N.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(new Date),s=Object(N.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(N.a)(j,2),d=u[0],b=u[1],O=Object(c.useState)(!1),h=Object(N.a)(O,2),x=h[0],m=h[1],p=function(){clearInterval(n)},f=i.toLocaleTimeString(),_=i.toLocaleDateString();return Object(l.jsxs)("div",{className:"clock",children:[Object(l.jsxs)("div",{className:"clock__wrapper",children:[Object(l.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:x&&Object(l.jsx)("div",{className:"clock__time",children:f})}),d&&Object(l.jsx)("div",{children:_})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{onClick:function(){p();var e=window.setInterval((function(){o(new Date),m(!0)}),1e3);r(e)},children:"start"}),Object(l.jsx)(v,{onClick:p,children:"stop"})]})]})};var P=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 9",Object(l.jsx)(I,{}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},F=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{}),Object(l.jsx)(T,{}),Object(l.jsx)(P,{}),Object(l.jsx)(g,{})]})};function L(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Junior Plus"})})}var H=function(){return Object(l.jsx)("div",{})};n(54);var W=function(e){return Object(l.jsxs)("div",{className:"message",children:[Object(l.jsx)("div",{className:"message__image-wrapper",children:Object(l.jsx)("img",{className:"message__avatar",src:e.avatar,alt:"avatar"})}),Object(l.jsxs)("div",{className:"message__text-wrapper",children:[Object(l.jsx)("div",{className:"message__text__login",children:e.name}),Object(l.jsx)("div",{className:"message__text__message",children:e.message}),Object(l.jsx)("div",{className:"message__text__time",children:e.time})]})]})},B="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",D="Some Name",J="some text",M="22:00";var K=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(l.jsx)(W,{avatar:B,name:D,message:J,time:M}),Object(l.jsx)(W,{avatar:B,name:D,message:J,time:M}),Object(l.jsx)(W,{avatar:B,name:D,message:J,time:M}),Object(l.jsx)("hr",{}),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",Object(l.jsx)(H,{}),Object(l.jsx)("hr",{})]})};var U=function(e){return Object(l.jsxs)("div",{className:"list",children:[Object(l.jsxs)("div",{className:"list__wrapper",children:[" ",e.affair.name]}),Object(l.jsx)("button",{className:"button",onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var G=function(e){var t=e.data.map((function(t){return Object(l.jsx)(U,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{className:"btn__wrapper",children:[t,Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("low")},children:"Low"})]})},V=(n(55),[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}]);var X=function(){var e=Object(c.useState)(V),t=Object(N.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(N.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("hr",{}),Object(l.jsx)(G,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},R=n(32),Z=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=e.onKeyPressHandler;return Object(l.jsxs)("div",{className:"greeting",children:[Object(l.jsx)("input",{value:t,onChange:n,className:r?"error":"greeting__input",onKeyPress:s}),r?Object(l.jsx)("div",{className:"error__title",children:r}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"greeting__wrapper__btn",children:Object(l.jsx)("button",{className:"greeting__button",onClick:c,children:"add"})}),Object(l.jsxs)("div",{className:"greeting__total",children:["ToTal Users: ",a]})]})},q=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(N.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(N.a)(o,2),u=j[0],d=j[1],b=function(){if(""===s.trim())return i(""),void d("Please Name");alert("Hello  ".concat(s,"!")),d(""),n(s),i("")},O=t.length;return Object(l.jsx)(Z,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:b,error:u,totalUsers:O,onKeyPressHandler:function(e){d(""),"Enter"===e.key&&b()}})};n(58);var z=function(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(q,{users:n,addUserCallback:function(e){var t={name:e,_id:Object(R.v1)()},c=[].concat(Object(S.a)(n),[t]);r(c)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},Y=n(20),$=n.n(Y),Q=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(x.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat($.a.error," ").concat(i||""),u="".concat($.a.superInputError," ").concat(s||"");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:a?u:$.a.superInput},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},ee=n(24),te=n.n(ee),ne=n(25),ce=n.n(ne),re=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ce.a.checkbox," ").concat(c||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(l.jsx)("span",{className:ce.a.spanClassName,children:r})]})};var ae=function(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(N.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:te.a.column,children:[Object(l.jsx)(Q,{value:n,onChangeText:r,onEnter:s,error:a,className:te.a.testSpanError}),Object(l.jsx)(Q,{}),Object(l.jsx)(v,{children:"default"}),Object(l.jsx)(v,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(v,{className:p.a.disable,children:"disabled"}),Object(l.jsx)(re,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(re,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};function se(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ie(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}se("test",{x:"A",y:1});ie("test",{x:"",y:0}),n(59);var oe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(x.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(N.a)(s,2),o=i[0],j=i[1],u=r||{},d=u.children,b=u.onDoubleClick,O=u.className,m=Object(x.a)(u,["children","onDoubleClick","className"]),p="spanstyle".concat(" ",O);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(Q,Object(h.a)({autoFocus:!0,onBlur:function(e){j(!1),se("inputValue",a.value),t&&t(e)},onEnter:function(){j(!1),se("inputValue",a.value),n&&n()}},a)):Object(l.jsxs)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:p},m),{},{children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"20",height:"20",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16",children:Object(l.jsx)("g",{fill:"currentColor",children:Object(l.jsx)("path",{d:"M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"})})}),d||a.value]}))})};n(60);var je=function(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsxs)("div",{className:"hw6",children:[Object(l.jsx)("div",{children:Object(l.jsx)(oe,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{onClick:function(){se("inputValue",n)},children:"save"}),Object(l.jsx)(v,{onClick:function(){r(ie("inputValue",""))},children:"restore"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})]})};var le=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(K,{}),Object(l.jsx)(X,{}),Object(l.jsx)(z,{}),Object(l.jsx)(ae,{}),Object(l.jsx)(je,{})]})},ue="/pre-junior",de="/junior",be="/junior-plus",Oe="/404";var he=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(d.a,{to:ue})}}),Object(l.jsx)(d.b,{path:ue,render:function(){return Object(l.jsx)(le,{})}}),Object(l.jsx)(d.b,{path:de,render:function(){return Object(l.jsx)(F,{})}}),Object(l.jsx)(d.b,{path:be,render:function(){return Object(l.jsx)(L,{})}}),Object(l.jsx)(d.b,{path:Oe,render:function(){return Object(l.jsx)(b,{})}}),Object(l.jsx)(d.a,{from:"*",to:"/404"})]})})};var xe=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(he,{})]})})};var me=function(){return Object(l.jsxs)("div",{className:o.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(xe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(26),ve=Object(pe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING/SET-LOADING":return Object(h.a)(Object(h.a)({},e),{},{isLoading:t.value});default:return e}}}),fe=Object(pe.b)(ve),_e=fe;window.store=fe,s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O.a,{store:_e,children:Object(l.jsx)(me,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[61,1,2]]]);
//# sourceMappingURL=main.5e66f7d9.chunk.js.map