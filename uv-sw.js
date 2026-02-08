if (typeof importScripts === 'function') {
    try {
        importScripts('/data/local/pages/unlocker/ultraviolet/uv.bundle.js');
        importScripts('/data/local/pages/unlocker/ultraviolet/uv.config.js');
        importScripts('/data/local/pages/unlocker/ultraviolet/uv.sw.js');
    } catch (e) {
        console.error('UV Bridge Load Error:', e);
    }
}

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
