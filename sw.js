var CACHE_VERSION = "v1";
var CACHE = "gridzy-" + CACHE_VERSION;

// Call install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            cache.addAll([                
               
                "./manifest.json",
                "./sw.js",
               
                "./index.html",
                "./style.css",
                "./main.js",                              
                
            ])
        })
    )
});

// Call activate event
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName.startsWith("gridzy-") && cacheName !== CACHE) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Call fetch event
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request).then((response) => {
                if (response) {
                    return response;
                } 
                else if (event.request.headers.get("accept").includes("text/html")) {
                    return caches.match("./");
                }
            });
        })
    );
});