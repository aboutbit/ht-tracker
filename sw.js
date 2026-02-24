const CACHE_NAME = 'bp-tracker-v13';
const ASSETS = ['./index.html', './food.html', './exercise.html', './dashboard.html', './manifest.json', './foods-db.js'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Apps Script / 외부 CDN은 캐시 안 함
  if (e.request.url.includes('script.google.com')) return;
  if (e.request.url.includes('cdn.jsdelivr.net')) return;

  // JS 파일은 네트워크 우선 → 업데이트가 즉시 반영됨
  if (e.request.url.endsWith('.js')) {
    e.respondWith(
      fetch(e.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // 나머지는 캐시 우선
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
