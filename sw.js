const CACHE="tracker-v2";const ASSETS=["./","./index.html","./manifest.json","https://unpkg.com/react@18/umd/react.production.min.js","https://unpkg.com/react-dom@18/umd/react-dom.production.min.js","https://unpkg.com/@babel/standalone/babel.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(e.request.method==="GET"&&r.ok){const cl=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));}return r;}).catch(()=>c)));});
