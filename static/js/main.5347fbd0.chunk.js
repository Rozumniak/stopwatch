(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),l=(c(9),c(2)),r=(c(10),c(11),c(0)),u=function(e){var t=e.time,c=e.isActive,n=e.isPaused,a=e.setTime;return s.a.useEffect((function(){var e=null;return c&&!1===n?e=setInterval((function(){a((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[c,n]),Object(r.jsxs)("div",{className:"stopWatch__numbers",children:[Object(r.jsxs)("span",{className:"digits",children:[("0"+Math.floor(t/36e5%60)).slice(-2),":"]}),Object(r.jsxs)("span",{className:"digits",children:[("0"+Math.floor(t/6e4%60)).slice(-2),":"]}),Object(r.jsxs)("span",{className:"digits",children:[("0"+Math.floor(t/1e3%60)).slice(-2),"."]}),Object(r.jsx)("span",{className:"digits mili-sec",children:("0"+t/10%100).slice(-2)})]})},o=(c(13),function(e){var t=e.handleReset,c=e.toggleStart,n=e.doubleClick,s=Object(r.jsxs)("div",{className:"buttonGroup",children:[Object(r.jsx)("label",{className:"button",onClick:c,children:"Start/Stop"}),Object(r.jsx)("label",{className:"button",onClick:n,children:"Wait"}),Object(r.jsx)("label",{className:"button",onClick:t,children:"Reset"})]});return Object(r.jsx)("div",{className:"stopWatch__buttons",children:s})}),j=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),j=Object(l.a)(i,2),b=j[0],d=j[1],f=Object(n.useState)(0),h=Object(l.a)(f,2),O=h[0],m=h[1],v=Object(n.useState)(!1),x=Object(l.a)(v,2),p=x[0],g=x[1],N=Object(n.useState)(0),S=Object(l.a)(N,2),C=S[0],I=S[1];s.a.useEffect((function(){var e=null;return!0===p?e=setInterval((function(){I((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[p]);return Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{className:"stopWatch",children:[Object(r.jsx)(u,{time:O,isActive:c,isPaused:b,setTime:m}),Object(r.jsx)(o,{active:c,isPaused:b,handleReset:function(){m(0)},toggleStart:function(){!0===c&&!1===b?(a(!1),d(!0),m(0)):(a(!0),d(!1))},doubleClick:function(){g(!0),C>300?(I(0),g(!1)):C<=300&&p&&(d(!0),g(!1),I(0))}})]})})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.5347fbd0.chunk.js.map