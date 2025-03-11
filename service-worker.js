self.addEventListener('install', (event) => {
  // Durante l'installazione, memorizziamo tutte le risorse necessarie nella cache
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/WorkTrack_pwa/index.html',
        '/WorkTrack_pwa/manifest.json',
        '/WorkTrack_pwa/alarm.mp3',
        '/WorkTrack_pwa/README.md',
        '/WorkTrack_pwa/icons/icon-180x180.png',
        '/WorkTrack_pwa/icons/icon-192x192.png',
        '/WorkTrack_pwa/icons/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se la risorsa è nella cache, restituiscila
      if (cachedResponse) {
        return cachedResponse;
      }

      // Se non è nella cache, prova a fare una richiesta di rete
      return fetch(event.request).catch(() => {
        // Se offline, ritorna la risorsa dalla cache (fallback a index.html)
        return caches.match('/WorkTrack_pwa/index.html');
      });
    })
  );
});

