// Meu Carro - cache somente de arquivos locais; APIs externas sempre usam rede.
const CACHE='meu-carro-fipe-sem-chassi-20261102-v3';
const CORE=['./','./index.html','./manifest.json'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith(fetch(req).then(res=>{if(res.ok){const clone=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,clone)))}return res}).catch(()=>caches.match(req).then(hit=>hit||caches.match('./index.html'))));
});
