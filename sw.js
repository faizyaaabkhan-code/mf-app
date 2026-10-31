// Generated at build time. Cache version dd9ce2d684ac.
const CACHE = 'mfa-dd9ce2d684ac';
const FILES = ["./","./assets/index-BZH6TDpT.js","./assets/index-CglHatjH.css","./assets/index-alPqlV5p.js","./assets/pdf.worker.min-yatZIOMy.mjs","./icons/icon-192.png","./icons/icon-512.png","./index.html","./manifest.webmanifest","./ocr/core/tesseract-core-lstm.wasm.js","./ocr/core/tesseract-core-simd-lstm.wasm.js","./ocr/lang/eng.traineddata.gz","./ocr/worker.min.js","./pdfjs/standard_fonts/FoxitDingbats.pfb","./pdfjs/standard_fonts/FoxitFixed.pfb","./pdfjs/standard_fonts/FoxitFixedBold.pfb","./pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb","./pdfjs/standard_fonts/FoxitFixedItalic.pfb","./pdfjs/standard_fonts/FoxitSerif.pfb","./pdfjs/standard_fonts/FoxitSerifBold.pfb","./pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb","./pdfjs/standard_fonts/FoxitSerifItalic.pfb","./pdfjs/standard_fonts/FoxitSymbol.pfb","./pdfjs/standard_fonts/LICENSE_FOXIT","./pdfjs/standard_fonts/LICENSE_LIBERATION","./pdfjs/standard_fonts/LiberationSans-Bold.ttf","./pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf","./pdfjs/standard_fonts/LiberationSans-Italic.ttf","./pdfjs/standard_fonts/LiberationSans-Regular.ttf","./samples/sample-bill-digital.pdf","./samples/sample-bill-scanned.pdf"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('mfa-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') { e.respondWith(caches.match('./index.html', { ignoreSearch: true }).then((r) => r || fetch(req))); return; }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((r) => r || fetch(req)));
});
