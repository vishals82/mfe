(()=>{var e,r,t,n,a={7980:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof auth)return e();t.l("undefined/auth/latest/remoteEntry.js",(t=>{if("undefined"!=typeof auth)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"auth")})).then((()=>auth))},9717:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof dashboard)return e();t.l("undefined/dashboard/latest/remoteEntry.js",(t=>{if("undefined"!=typeof dashboard)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"dashboard")})).then((()=>dashboard))},3364:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof marketing)return e();t.l("undefined/marketing/latest/remoteEntry.js",(t=>{if("undefined"!=typeof marketing)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"marketing")})).then((()=>marketing))}},o={};function i(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return a[e](r,r.exports,i),r.exports}i.m=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{45:"d6f6dc5fb46843884788",52:"fa4c1f7e6f5e23f8c7ef",124:"84c37a49e0ac7e196c2d",271:"1dee78e0e71d537f0460",294:"ebbcda8f6a844faa12c6",518:"cc645c34059225ce70ac",647:"ce59d35e8cd124dc457f",671:"6a1b4d3f2c1ad41e7d6e",856:"d527bbeec289a298e5aa",935:"a0b3f91c31fce0e5d310"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="container:",i.l=(t,n,a)=>{if(e[t])e[t].push(n);else{var o,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){o=d;break}}o||(u=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",r+a),o.src=t),e[t]=[n];var l=(r,n)=>{o.onerror=o.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),u&&document.head.appendChild(o)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={45:[4688],518:[4323],647:[8507]},n={4323:["default","./AuthApp",7980],4688:["default","./MarketingApp",3364],8507:["default","./DashboardApp",9717]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var u=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),a[e]=()=>{throw r},o.p=0},s=(e,t,n,a,i,s)=>{try{var f=e(t,n);if(!f||!f.then)return i(f,a,s);var d=f.then((e=>i(e,a)),u);if(!s)return d;r.push(o.p=d)}catch(e){u(e)}},f=(e,r,n)=>s(r.get,o[1],t,0,d,n),d=r=>{o.p=1,a[e]=e=>{e.exports=r()}};s(i,o[2],0,0,((e,r,t)=>e?s(i.I,o[0],0,e,f,t):u()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],u="container",s=(e,r,t)=>{var n=o[e]=o[e]||{},a=n[r];(!a||!a.loaded&&u>a.from)&&(n[r]={get:t,from:u})},f=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(e);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return d.push(a.then(o,r));var u=o(a);if(u&&u.then)return d.push(u.catch(r))}catch(e){r(e)}},d=[];switch(t){case"default":s("react-dom","17.0.1",(()=>Promise.all([i.e(935),i.e(271)]).then((()=>()=>i(3935))))),s("react-router-dom","5.2.0",(()=>Promise.all([i.e(856),i.e(671),i.e(271)]).then((()=>()=>i(7856))))),s("react","17.0.1",(()=>i.e(294).then((()=>()=>i(7294))))),f(3364),f(7980),f(9717)}return d.length?e[t]=Promise.all(d).then((()=>e[t]=1)):e[t]=1}}})(),i.p="/container/latest/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,u=1,s=!0;;u++,i++){var f,d,l=u<t.length?(typeof t[u])[0]:"";if(i>=n.length||"o"==(d=(typeof(f=n[i]))[0]))return!s||("u"==l?u>a&&!o:""==l!=o);if("u"==d){if(!s||"u"!=l)return!1}else if(s)if(l==d)if(u<=a){if(f!=t[u])return!1}else{if(o?f>t[u]:f<t[u])return!1;f!=t[u]&&(s=!1)}else if("s"!=l&&"n"!=l){if(o||u<=a)return!1;s=!1,u--}else{if(u<=a||d<l!=o)return!1;s=!1}else"s"!=l&&"n"!=l&&(s=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<t.length;i++){var h=t[i];p.push(1==h?c()|c():2==h?c()&c():h?r(h,n):!c())}return!!c()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,n,a,o)=>{var u=r&&i.o(r,n)&&t(r,n,a);return u?(e=>(e.loaded=1,e.get()))(u):o()})),u={},s={7271:()=>n("default","react",[1,17,0,1],(()=>i.e(294).then((()=>()=>i(7294))))),334:()=>n("default","react-router-dom",[1,5,2,0],(()=>i.e(856).then((()=>()=>i(7856))))),7650:()=>n("default","react-dom",[1,17,0,1],(()=>i.e(935).then((()=>()=>i(3935)))))},f={52:[334,7650],271:[7271]};i.f.consumes=(e,r)=>{i.o(f,e)&&f[e].forEach((e=>{if(i.o(u,e))return r.push(u[e]);var t=r=>{u[e]=0,a[e]=t=>{delete o[e],t.exports=r()}},n=r=>{delete u[e],a[e]=t=>{throw delete o[e],r}};try{var f=s[e]();f.then?r.push(u[e]=f.then(t).catch(n)):t(f)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(271!=r){var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=i.p+i.u(r),u=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}}),"chunk-"+r)}else e[r]=0};var r=self.webpackChunkcontainer=self.webpackChunkcontainer||[],t=r.push.bind(r);r.push=r=>{for(var n,a,[o,u,s]=r,f=0,d=[];f<o.length;f++)a=o[f],i.o(e,a)&&e[a]&&d.push(e[a][0]),e[a]=0;for(n in u)i.o(u,n)&&(i.m[n]=u[n]);for(s&&s(i),t(r);d.length;)d.shift()()}})(),Promise.all([i.e(671),i.e(124),i.e(271),i.e(52)]).then(i.bind(i,8052))})();