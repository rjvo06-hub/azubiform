const CACHE_NAME = 'azubiform-v1';
const assetsToCache = [
  './app.html',
  './manifest.json',
  // Añade aquí los demás archivos JS o CSS que utilices en tu raíz o carpeta js
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
