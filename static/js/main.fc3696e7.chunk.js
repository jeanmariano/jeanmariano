(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),s=(t(14),t(1)),o=t(2),i=t(4),m=t(3),u=t(5),d=(t(15),t(16),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Moon"},r.a.createElement("div",{className:"Moon-innershadow"}),r.a.createElement("div",{className:"Moon-crater Moon-crater--1"},r.a.createElement("div",{className:"cratershadow"})),r.a.createElement("div",{className:"Moon-crater Moon-crater--2"},r.a.createElement("div",{className:"cratershadow"})),r.a.createElement("div",{className:"Moon-crater Moon-crater--3"},r.a.createElement("div",{className:"cratershadow"})),r.a.createElement("div",{className:"Moon-crater Moon-crater--4"},r.a.createElement("div",{className:"cratershadow"})),r.a.createElement("div",{className:"Moon-crater Moon-crater--5"},r.a.createElement("div",{className:"cratershadow"})),r.a.createElement("div",{className:"Moon-crater Moon-crater--6"},r.a.createElement("div",{className:"cratershadow"})))}}]),a}(n.Component));var v=function(){return r.a.createElement("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"136.4 299.1 250.4 147.7"},r.a.createElement("defs",null,r.a.createElement("path",{id:"a",d:"M285.4 338.6l-38-12.2c-12.2-4-24.7-7-37.3-9-2.4-.3-8.5-1.2-18.1-2.8l-5.6.5a75.8 75.8 0 0 0-46.4 21l-1.8 1.8 15.4 4.9c23.5 7.4 48.4 9.3 72.7 5.3l59-9.5z"})),r.a.createElement("use",{fill:"#bb816d",xlinkHref:"#a"}),r.a.createElement("use",{fillOpacity:"0",stroke:"#c78974",strokeWidth:"0",xlinkHref:"#a"}))};var h=function(){return r.a.createElement("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"136.4 299.1 250.4 147.7"},r.a.createElement("defs",null,r.a.createElement("path",{id:"b",d:"M286.4 329.2l29-6.2 6.1-1.4 29.5-5.2 19-2.1 5.4 5.5a44.5 44.5 0 0 1 12.8 29.5c-5.4 9.8-9.8 16.6-13.1 20.5-5 5.8-7.2 8.9-25.3 25.6-18.2 16.7-21.7 14.4-33.8 21.9l-6 3.7-27.8-3.5c-34-4.4-66.8-15-97-31.4l-8.3-4.6c-4.2-2.3-8-5-11.4-8.2l-1.9-1.7a116.1 116.1 0 0 1-21.1-26.4l-4.3-7.3v-.1l25.1 4.3c18.3 3.1 37 3 55.3-.4l67.8-12.5z"}),r.a.createElement("path",{id:"c",d:"M358.4 312l2.1-1.3c2.5-1.5 5.3-2.5 8.1-3.1l1-.2 1.8.9c1.7.9 3 2.4 3.8 4.3l.2.6-4.6 21.6a220.8 220.8 0 0 1-29 71.2c-7.3 11.2-12.4 16.7-17.3 18.3-3.3 1-8.4 0-15.4-3.3l2.3-3c22-27.9 37.2-60.4 44.6-95l2.4-11z"})),r.a.createElement("use",{fill:"#a26e5c",xlinkHref:"#b"}),r.a.createElement("use",{fillOpacity:"0",stroke:"#c78974",strokeWidth:"1",xlinkHref:"#b"}),r.a.createElement("g",null,r.a.createElement("use",{fill:"#bb816d",xlinkHref:"#c"}),r.a.createElement("use",{fillOpacity:"0",stroke:"#c78974",strokeWidth:"0",xlinkHref:"#c"})))},E=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={loaded:!1,bubble:"start"},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"bubble",value:function(){var e=this.state.bubble;switch(e){case"about":return r.a.createElement("div",{className:"talkbubble"},"Jean is a software engineer in New York. She is interested in data engineering, machine learning, and computer vision. When she is not looking at a computer she is climbing, cooking, or attempting to play guitar.");case"contact":return r.a.createElement("div",{className:"talkbubble"},"Want to chat? ",r.a.createElement("a",{href:"mailto:hi@jeanmariano.com"},"Send a note!"));case"misc":return r.a.createElement("div",{className:"talkbubble"},"Sometimes, Jean draws or design things.",r.a.createElement("br",null),"Come back to this section soon to see a sample of her work.");default:return r.a.createElement("div",{className:"talkbubble"},"Welcome to Jean's website.",r.a.createElement("br",null),"Click on a yellow star.")}}},{key:"scene",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"sky"},r.a.createElement("h1",{className:"title"},"jean mariano"),r.a.createElement("div",{className:"moonshadow"}),r.a.createElement(d,null),r.a.createElement("div",{className:"star star-1"},r.a.createElement("h4",{href:"#",onClick:function(){return e.setState({bubble:"about"})},className:"star-nav"},"about")),r.a.createElement("div",{className:"star star-2"},r.a.createElement("h4",{href:"#",onClick:function(){return e.setState({bubble:"contact"})},className:"star-nav"},"contact")),r.a.createElement("div",{className:"star star-3"},r.a.createElement("h4",{href:"#",onClick:function(){return e.setState({bubble:"misc"})},className:"star-nav"},"misc")),r.a.createElement("div",{className:"star star-4"},r.a.createElement("h4",{className:"star-nav",href:"https://github.com/jeanmariano"},r.a.createElement("a",{href:"https://github.com/jeanmariano",target:"_blank",rel:"noopener noreferrer"},"github"))),r.a.createElement("div",{className:"stars small"}),r.a.createElement("div",{className:"stars medium"}),r.a.createElement("div",{className:"stars large"})),r.a.createElement("div",{className:"water"},r.a.createElement("div",{className:"wave wave1"}),r.a.createElement("div",{className:"wave wave2"}),this.bubble(),r.a.createElement("div",{className:"Boat"},r.a.createElement("div",{className:"BoatBackground"},r.a.createElement(v,null)),r.a.createElement("div",{className:"ladder"},r.a.createElement("div",{className:"side side1"}),r.a.createElement("div",{className:"rung rung1"}),r.a.createElement("div",{className:"rung rung2"}),r.a.createElement("div",{className:"rung rung3"}),r.a.createElement("div",{className:"rung rung4"}),r.a.createElement("div",{className:"rung rung5"}),r.a.createElement("div",{className:"rung rung6"}),r.a.createElement("div",{className:"rung rung7"}),r.a.createElement("div",{className:"rung rung8"}),r.a.createElement("div",{className:"rung rung9"}),r.a.createElement("div",{className:"rung rung10"}),r.a.createElement("div",{className:"side side2"})),r.a.createElement("img",{className:"shibe",src:"".concat("","/shibe.png")}),r.a.createElement("div",{className:"BoatForeground"},r.a.createElement(h,null)))))}},{key:"render",value:function(){return this.state.loaded?this.scene():"Loading..."}}]),a}(n.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");g?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):b(e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.fc3696e7.chunk.js.map