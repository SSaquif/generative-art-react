(this["webpackJsonpreact-canvas-gen-art"]=this["webpackJsonpreact-canvas-gen-art"]||[]).push([[0],{13:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(8),i=t.n(a),c=t(1),l=t(3),u=t(9),d=t.n(u),f=t(2);function s(){var n=Object(c.a)(["\n  border: 3px solid white;\n"]);return s=function(){return n},n}var b={dimensions:[2048,2048]},h=f.b.canvas(s()),p=function(n){var e=n.sketch,t=Object(r.useRef)();return Object(r.useEffect)((function(){b.canvas=t.current,d()(e,b)}),[t,e]),o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{ref:t}))},m=function(n){var e=function(){for(var n=[],e=0;e<5;e++){var t=e/5,r=e/5;n.push([t,r])}return n}();return function(n){var t=n.context,r=n.width,o=n.height;t.fillStyle="#544813",t.fillRect(0,0,r,o),e.forEach((function(n){var e=Object(l.a)(n,2),a=e[0],i=e[1],c=a*r,u=i*o;t.beginPath(),t.arc(c,u,r/5,0,2*Math.PI,!1),t.strokeStyle="red",t.lineWidth=40,t.stroke(),t.beginPath(),t.arc(1.5*c,u,r/5,0,2*Math.PI,!1),t.strokeStyle="crimson",t.lineWidth=40,t.stroke(),t.beginPath(),t.arc(.5*c,u,r/5,0,2*Math.PI,!1),t.strokeStyle="orange",t.lineWidth=40,t.stroke()}))}},g=function(){var n=function(){for(var n=[],e=0;e<10;e++)for(var t=0;t<10;t++){var r=e/9,o=t/9;n.push([r,o])}return n}();return function(e){var t=e.context,r=e.width,o=e.height;t.fillStyle="black",t.fillRect(0,0,r,o),n.forEach((function(n){var e=Object(l.a)(n,2),a=e[0],i=e[1],c=a*r,u=i*o;t.beginPath(),t.arc(c,u,100,0,2*Math.PI,!1),t.strokeStyle="red",t.lineWidth=40,t.stroke()}))}},v=t(21).lerp,y=[m,g,function(){var n=function(){for(var n=[],e=0;e<150;e++)for(var t=0;t<150;t++){var r=e/149,o=t/149;n.push([r,o])}return n}().filter((function(n){var e=Object(l.a)(n,2);e[0],e[1];return Math.random()>.98}));return function(e){var t=e.context,r=e.width,o=e.height;t.fillStyle="#170b36",t.fillRect(0,0,r,o),n.forEach((function(n){var e=Object(l.a)(n,2),a=e[0],i=e[1],c=v(125,r-125,a),u=v(125,o-125,i);t.beginPath(),t.arc(c,u,.063,0,2*Math.PI,!1),t.strokeStyle="white",t.lineWidth=40,t.stroke()}))}}];function k(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 4em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-left: 10%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 813px) {\n    display: none;\n  }\n"]);return k=function(){return n},n}function j(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 4em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-right: 10%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 813px) {\n    display: none;\n  }\n"]);return j=function(){return n},n}function w(){var n=Object(c.a)(["\n  display: flex;\n"]);return w=function(){return n},n}function O(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 5em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-left: 2%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (max-width: 812px) {\n    display: none;\n  }\n"]);return O=function(){return n},n}function E(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 5em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-right: 2%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (max-width: 812px) {\n    display: none;\n  }\n"]);return E=function(){return n},n}function x(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n\n  @media screen and (max-width: 812px) {\n    flex-direction: column;\n  }\n"]);return x=function(){return n},n}var P=f.b.div(x()),S=f.b.button(E()),q=f.b.button(O()),M=f.b.div(w()),R=f.b.button(j()),z=f.b.button(k()),I=function(){var n=Object(r.useState)(y[0]),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(0),c=Object(l.a)(i,2),u=c[0],d=c[1],f=Object(r.useRef)(null),s=Object(r.useRef)(null),b=function(){u&&(a(y[u-1]),d(u-1))},h=function(){u<y.length-1&&(a(y[u+1]),d(u+1))},m=function(n){"ArrowLeft"===n.key?(f.current.focus(),b()):"ArrowRight"===n.key&&(s.current.focus(),h())};return Object(r.useEffect)((function(){return window.addEventListener("keydown",m),function(){window.removeEventListener("keydown",m)}}),[u]),o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null,o.a.createElement(S,{ref:f,onClick:b},"<"),o.a.createElement(p,{sketch:t}),o.a.createElement(M,null,o.a.createElement(R,{ref:f,onClick:b},"<"),o.a.createElement(z,{ref:s,onClick:h},">")),o.a.createElement(q,{ref:s,onClick:h},">")))};function W(){var n=Object(c.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nhtml {\n\theight: 100%;\n\tbackground-color: black;\n}\n\nbody {\n    height: 100%;\n    line-height: 1.6;\n    display: flex;\n    justify-content: center;   \n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: border-box;\n}\n"]);return W=function(){return n},n}var C=Object(f.a)(W());i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(I,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8d073003.chunk.js.map