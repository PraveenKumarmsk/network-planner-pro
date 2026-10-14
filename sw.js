/* VLSM Planner service worker — precache app shell,
   network-first for code/pages, cache-first for icons.
   Bump VERSION to force an update. */

const VERSION = 'vlsm-planner-v1.0.0';
const CORE = [
  './',
  'index.html',
  'offline.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(VERSION).then(c =>
      Promise.allSettled(CORE.map(u => c.add(new Request(u, {cache: 'reload'}))))
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Navigate requests → network first, offline fallback
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => {
          const cp = r.clone();
          caches.open(VERSION).then(c => c.put(req, cp));
          return r;
        })
        .catch(() =>
          caches.match(req, {ignoreSearch: true})
            .then(m => m || caches.match('offline.html'))
        )
    );
    return;
  }

  // Code, styles, pages → network first (always fresh), cache as fallback
  if (/\.(css|js|json|html)$/.test(url.pathname) || url.pathname.endsWith('/')) {
    e.respondWith(
      fetch(req)
        .then(r => {
          if (r && r.ok) {
            const cp = r.clone();
            caches.open(VERSION).then(c => c.put(req, cp));
          }
          return r;
        })
        .catch(() => caches.match(req, {ignoreSearch: true}))
    );
    return;
  }

  // Images/icons → cache first, network fallback
  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then(m => {
      const net = fetch(req)
        .then(r => {
          if (r && r.ok) {
            const cp = r.clone();
            caches.open(VERSION).then(c => c.put(req, cp));
          }
          return r;
        })
        .catch(() => m);
      return m || net;
    })
  );
});