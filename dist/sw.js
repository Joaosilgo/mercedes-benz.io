if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,t,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(t.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-b9c7f26c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"7505fadc3d03d5ac881e86ac30b4e463"},{url:"main.js",revision:"73bf8f91b831e3ea61263138fb9d7fca"},{url:"main.js.LICENSE.txt",revision:"9d98a153ff8478e06df16c5e6f6dfc9e"}],{}),e.registerRoute(/^https:\/\/fonts.googleapis.com\//,new e.StaleWhileRevalidate,"GET")}));
