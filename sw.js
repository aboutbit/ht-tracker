const CACHE_NAME = 'bp-tracker-v23';
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

  // 모든 파일 네트워크 우선 → 오프라인 시 캐시 사용
  // (캐시 초기화 없이 항상 최신 버전 반영)
  e.respondWith(
    fetch(e.request).then(response => {
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      }
      return response;
    }).catch(() => caches.match(e.request))
  );
});
