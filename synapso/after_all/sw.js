self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return fetch("http://localhost/deconnected.html")
                .then(function(response) {
                    return response.text();
                })
                .then(function(html) {
                    return new Response(html, {
                        headers: { 'Content-Type': 'text/html' }
                    });
                })
                .catch(err => {
                    console.log(err.message);
                });
        })
    );
});


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('synapso-cache').then(function(cache) {
            // Mettez en cache les fichiers statiques nécessaires
            return cache.addAll(["./deconnected.html"]);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.filter(function(cacheName) {
                        // Supprimez les anciens caches si nécessaire
                        // (en supposant que vous utilisez un nom de cache différent pour chaque version)
                        return cacheName !== 'synapso-cache';
                    }).map(function(cacheName) {
                        return caches.delete(cacheName);
                    })
                );
            })
        ])
    );
});