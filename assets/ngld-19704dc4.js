import"./modulepreload-polyfill-ec808ebb.js";(function(){let n=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),r=null,i=[],p=0,d={},s={},o=null,f=!1;if(n){let t=function(){r=new WebSocket(n[1]),r.addEventListener("error",e=>{console.error(e)}),r.addEventListener("open",()=>{console.log("Connected!");let e=i;i=null;for(let l of e)o(l)}),r.addEventListener("message",e=>{try{e=JSON.parse(e.data)}catch{console.error("Invalid message received: ",e);return}e.rseq!==void 0&&d[e.rseq]?(d[e.rseq](e),delete d[e.rseq]):c(e)}),r.addEventListener("close",()=>{i=[],console.log("Trying to reconnect..."),setTimeout(()=>{t()},300)})};o=e=>{i?i.push(e):r.send(JSON.stringify(e))},t()}else{let t=function(){if(!window.OverlayPluginApi||!window.OverlayPluginApi.ready){setTimeout(t,300);return}let e=i;i=null,window.__OverlayCallback=c;for(let[l,a]of e)o(l,a)};o=(e,l)=>{i?i.push([e,l]):OverlayPluginApi.callHandler(JSON.stringify(e),l)},t()}function c(t){if(s[t.type])for(let e of s[t.type])e(t)}window.dispatchOverlayEvent=c,window.addOverlayListener=(t,e)=>{f&&s[t]&&console.warn(`A new listener for ${t} has been registered after event transmission has already begun.
Some events might have been missed and no cached values will be transmitted.
Please register your listeners before calling startOverlayEvents().`),s[t]||(s[t]=[]),s[t].push(e)},window.removeOverlayListener=(t,e)=>{if(s[t]){let l=s[t],a=l.indexOf(e);a>-1&&l.splice(a,1)}},window.callOverlayHandler=t=>{let e;return r?(t.rseq=p++,e=new Promise(l=>{d[t.rseq]=l}),o(t)):e=new Promise(l=>{o(t,a=>{l(a==null?null:JSON.parse(a))})}),e},window.startOverlayEvents=()=>{f=!1,o({call:"subscribe",events:Object.keys(s)})}})();let u=document.getElementById("token"),y=document.getElementById("close");y!=null&&(y.onclick=()=>(E(),!1));let w=document.location.protocol+"//"+document.location.host,v=document.getElementById("link");v!=null&&v.setAttribute("href",w);function O(n){u!=null&&(u.setAttribute("href",w+"/#/pred/"+n),u.innerText="解析")}function h(n){n==1055?m():g()}function g(){let n=document.getElementById("all");n!=null&&n.classList.add("hide")}function m(){let n=document.getElementById("all");n!=null&&n.classList.remove("hide")}function E(){let n=document.getElementById("all");n!=null&&n.classList.toggle("hide")}addOverlayListener("onMJICraftworkData",n=>{O(n.data)});addOverlayListener("onMJIZoneChanged",n=>{h(n.zoneID)});startOverlayEvents();callOverlayHandler({call:"RequestMJIZoneState"}).then(n=>{let r=document.getElementById("not-inited");r!=null&&r.classList.add("hide"),m(),h(n.zoneID)});
