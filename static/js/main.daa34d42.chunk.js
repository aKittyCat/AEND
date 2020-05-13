(this.webpackJsonpmvptracker=this.webpackJsonpmvptracker||[]).push([[0],{53:function(e,t,n){e.exports=n(66)},58:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),c=n(32),l=(n(58),n(10)),s=n(24),u=n.n(s),m=n(33),d=n(31),p=n(97),f=n(98),g=(n(60),n(99)),h={width:"300px",height:"300px",background:"#ffffff",borderRadius:"25px",boxShadow:"0px 4px 2px rgba(173, 182, 216, 0.25)",textAlign:"center",padding:"1rem",boxSizing:"border-box"},x={textAlign:"center",margin:"0 auto",height:"150px"},b={fontSize:"24px",lineHeight:"28px"},v={fontSize:"14px",lineHeight:"16px"},w=function(e,t){return String(e).padStart(t,"0")};var E=function(e){var t=e.onClick,n=e.data;return r.a.createElement("div",{className:"card",style:h,onClick:function(){return t(n.id)}},r.a.createElement("img",{style:x,src:"http://db.irowiki.org/image/monster/"+n.monsterId+".png",alt:"Monster"}),r.a.createElement("p",{style:b},n.name),r.a.createElement("br",null),function(){var e=new Date(n.nextSpawn)-new Date;if(e<0)return r.a.createElement(g.a,{size:"small",label:"Status: Alive",clickable:!0,color:"primary"});var t=Math.floor(e/1e3/60);return r.a.createElement(g.a,{variant:"outline",size:"small",label:"Respawn in : "+t+" minutes",clickable:!0,color:"secondary"})}(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{style:v},"Respawn Time : "+function(){var e=new Date(n.nextSpawn);return w(e.getHours(),2)+":"+w(e.getMinutes(),2)}()))},S=n(22),y={width:"630px",minHeight:"630px",background:"#ffffff",borderRadius:"25px",boxShadow:"0px 4px 2px rgba(173, 182, 216, 0.25)",textAlign:"center",padding:"1rem",boxSizing:"border-box",gridColumn:"1 / span 2",gridRow:"2 / span 2"},C={width:"440px",marginLeft:"auto",marginRight:"auto",display:"grid",gridTemplateColumns:"auto auto"},k={float:"left",objectFit:"cover",maxWidth:"250px",minWidth:"200px",height:"250px",textAlign:"left",display:"block",marginLeft:"auto",marginRight:"auto",lineHeight:"250px"},j={display:"flex",justifyContent:"center",alignItems:"center"},O={width:"440px",marginLeft:"auto",marginRight:"auto"},I={width:"100%",display:"block",gridColumn:"1 / span 2",height:"48px",marginBottom:"17px"};function T(e,t){return e.nextSpawn<t.nextSpawn?-1:e.nextSpawn>t.nextSpawn?1:0}var D=function(e){var t=e.onChange,n=e.data,a=e.spotlight,i=function(e,t){return String(e).padStart(t,"0")},o=function(){var e=Object(m.a)(u.a.mark((function e(){var r,i,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(S.a)(n),i=n.findIndex((function(e){return e.id===a})),o=r[i].minSpawnTime,l=new Date,r[i].lastSeen=l,r[i].nextSpawn=new Date(l.getTime()+6e4*o),t(r.sort(T)),c();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(e){fetch("http://localhost:5000/saveChanges",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return console.log(e)}))},l=n.find((function(e){return e.id===a}));return r.a.createElement("div",{style:y},r.a.createElement("div",{style:C},r.a.createElement("img",{style:k,src:"http://db.irowiki.org/image/monster/"+l.monsterId+".png",alt:"Monster"}),r.a.createElement("div",{style:j},r.a.createElement("div",null,r.a.createElement(f.a,{style:{marginBottom:"17px",width:"100%"},label:"Boss Name",value:l.name,onChange:function(e){var r=Object(S.a)(n);r[n.findIndex((function(e){return e.id===a}))].name=e.target.value,t(r)}}),r.a.createElement(f.a,{id:"time",label:"Next Spawn",type:"time",style:{marginBottom:"17px",width:"100%"},value:function(e){var t=new Date(e);return i(t.getHours(),2)+":"+i(t.getMinutes(),2)}(l.nextSpawn),InputLabelProps:{shrink:!0},inputProps:{step:60},onChange:function(e){var r=Object(S.a)(n),i=n.findIndex((function(e){return e.id===a})),o=e.target.value.substr(0,2),c=e.target.value.substr(3,4),l=new Date(r[i].nextSpawn);l.setHours(parseInt(o)),l.setMinutes(parseInt(c)),r[i].nextSpawn=l.toISOString(),t(r.sort(T))}}),r.a.createElement(f.a,{style:{marginBottom:"17px",width:"100%"},label:"Author",value:l.author,onChange:function(e){var r=Object(S.a)(n);r[n.findIndex((function(e){return e.id===a}))].author=e.target.value,t(r)}})))),r.a.createElement("br",null),r.a.createElement("div",{style:O},r.a.createElement("div",{style:{marginBottom:"17px"}},r.a.createElement(f.a,{id:"standard-basic",fullWidth:!0,label:"Tomb Location",value:l.tomb,onChange:function(e){var r=Object(S.a)(n);r[n.findIndex((function(e){return e.id===a}))].tomb=e.target.value,t(r)}})),r.a.createElement("div",{style:{marginBottom:"17px"}},r.a.createElement(f.a,{id:"standard-basic",fullWidth:!0,multiline:!0,rows:4,label:"Notes",value:l.notes,onChange:function(e){var r=Object(S.a)(n);r[n.findIndex((function(e){return e.id===a}))].notes=e.target.value,t(r)}})),r.a.createElement(p.a,{style:I,variant:"contained",color:"primary",onClick:o},"MVP P*WNED"),r.a.createElement(p.a,{style:I,variant:"outlined",color:"primary",onClick:c},"Save Changes")))},B={id:"0",accessCode:"",monsterId:"1002",name:"Poring",lastSeen:"2020-05-12T00:00:00.168Z",nextSpawn:"2020-05-12T00:00:00.168Z",tomb:"",isExactTime:"True",notes:"",author:"Loading"};function M(e,t){return e.nextSpawn<t.nextSpawn?-1:e.nextSpawn>t.nextSpawn?1:0}var A=function(){var e=Object(a.useState)([B]),t=Object(d.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)("0"),c=Object(d.a)(o,2),s=c[0],g=c[1],h=Object(l.f)(),x=Object(l.g)().accessCode,b=function(e,t){var n=Object(a.useState)(e),r=Object(d.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){return o(e)}),t);return function(){return clearTimeout(n)}}),[e,t]),i}(x,1e3);return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/fetchData?accessCode="+b);case 2:e.sent.json().then((function(e){i(e.sort(M)),g(e[0].id)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{gridColumn:"1 / span 2"}}),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"contained",color:"primary",style:{width:"100%",height:"48px"}},"+ ADD MVP TO LIST")),r.a.createElement("div",null,r.a.createElement(f.a,{id:"standard-basic",style:{width:"100%"},label:"Access Code",value:x,onChange:function(e){x=e.target.value,h.push("/access/"+x)}})),r.a.createElement(D,{onChange:i,data:n,spotlight:s}),n.map((function(e){return r.a.createElement(E,{onClick:g,data:e,key:e.id})}))))};var N=function(){return r.a.createElement("main",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/access/:accessCode?",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.daa34d42.chunk.js.map