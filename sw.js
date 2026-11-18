const CACHE = "kawan-arab-v1";
const SHELL = ["./", "./index.html", "./content1.js", "./content2.js", "./content3.js", "./quran.js", "./extra.js", "./core.js", "./lesson.js", "./views.js", "./talk.js", "./main.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || req.url.includes("generativelanguage.googleapis.com") || req.url.includes("drive.google.com")) return;
  e.respondWith(caches.match(req, { ignoreSearch: new URL(req.url).origin === self.location.origin }).then(hit => {
    const net = fetch(req).then(res => {
      if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
