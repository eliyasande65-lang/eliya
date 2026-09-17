const CACHE_NAME = 'eliya-sande-v2';
const PRECACHE_URLS = [
  './',
  'index.html',
  'about.html',
  'projects.html',
  'blog.html',
  'contact.html',
  'css/style.css',
  'js/main.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Network-first everywhere: every page and asset (including images added
// later such as images/img1.jpg ... img10.jpg) is fetched fresh first, so
// edits and new uploads show up on the very next load. Falls back to the
// cached copy only when offline.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isHTML = req.headers.get('accept')?.includes('text/html');

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((res) => res || (isHTML ? caches.match('index.html') : undefined))
      )
  );
});
