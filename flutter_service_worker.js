'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "91f8cf45c3ae545cffeb338d97346148",
"assets/AssetManifest.bin.json": "fd0d029d6662a273a0d142bce9f5f4d3",
"assets/assets/covers/cover-template.png": "2d7bd082ff683af804863fa0d91d02fe",
"assets/assets/covers/level-1-flow.png": "51e81415f547d31e5d1e724a1c912e9e",
"assets/assets/covers/level-1-pose-bird.png": "d7e283deb2c7464e0e5039b96db28030",
"assets/assets/covers/level-1-pose-high-flygin-whale.png": "363826731cf051bcc42a4833bd423bf0",
"assets/assets/covers/level-1-pose-king-throne.png": "1275fc6c2bfd89afd4b027bbbee04460",
"assets/assets/covers/level-1-skill-drill-bird-receiving.png": "73fe1d8a9493dd1cc5c6da2172688845",
"assets/assets/covers/level-1-warmup-1-flashlights.jpg": "844a754981c675338dc90d744432ad2d",
"assets/assets/covers/level-1-warmup-2-plank-play.png": "9ced3916a9a3b2a3db6da6abe064922b",
"assets/assets/covers/level-1-warmup-3-table-on-table.png": "e15d7ddd5c83a5df2c494b2ae73c4d9c",
"assets/assets/covers/level-2-flow.png": "e53b81ea5b7c87a1783a78badafb6694",
"assets/assets/covers/level-2-pose-candlestick.png": "1fc102b02b625452e7bdfc371200f2ec",
"assets/assets/covers/level-2-pose-foot-to-shin.png": "0909633a9ac1ada45c3911f97aa3c2b1",
"assets/assets/covers/level-2-pose-shin-to-foot.png": "1a2263241ed33385dbb723de78fb0f6b",
"assets/assets/covers/level-2-skill-drill-bird-calibrations.png": "5bb43de5615973e0f21e7308388b90dd",
"assets/assets/covers/level-2-warmup-1-leg-tosses.png": "b113cdfbb7e297b31390157204bc06dd",
"assets/assets/covers/level-2-warmup-2-counterbalance.png": "4c0e5ce19604f01f13b7aa29e42709f3",
"assets/assets/covers/level-2-warmup-3-plank-clap.png": "053e2871f92e1f9233503e539db9541e",
"assets/assets/covers/level-3-flow.png": "72dde9d400e504e24d54b7f06a882a16",
"assets/assets/covers/level-3-pose-1-paserita-twist.png": "fd02cb35a5d368b20403d206caef6902",
"assets/assets/covers/level-3-pose-2-straddle-bat.png": "f894d3770d2db4c8742e6061f09c3d22",
"assets/assets/covers/level-3-pose-3-side-star.png": "6d4aaa4c3cb86d9ed7f1ffc01dd9ca5a",
"assets/assets/covers/level-3-skill-drill-half-moon-to-side-star.png": "2902090a01c30587e1c5823dde3488de",
"assets/assets/covers/level-3-warmup-1-straddle-pike-pulses.png": "f039fbef972c3fe1715b8032d94a11b9",
"assets/assets/covers/level-3-warmup-2-counterbalance-partner-foot-hold.png": "ad1c44058703eb9d474c004439f802af",
"assets/assets/covers/level-3-warmup-3-sit-up-partner-pike.png": "74db71da602cdd151a4a1c0906e0a6cb",
"assets/assets/covers/level-4-integration-flow.png": "06d27cb117de4583af2f96ba5f703b66",
"assets/assets/covers/level-4-pose-1-star.png": "3b1020748881dd48d1e7c7d6ad7f0631",
"assets/assets/covers/level-4-pose-2-foot-to-hand.png": "128faddc099eb08d44215fdc03325a8b",
"assets/assets/covers/level-4-pose-3-reverse-throne.png": "7d92d88c9cadaf893e2723bcfa33cb87",
"assets/assets/covers/level-4-technique-drill-tripod-headstand.png": "9e0a5d447df5e253e2051c2ee1aa3c20",
"assets/assets/covers/level-4-warmup-1-shoulderstand-on-thigh-bridge.png": "c2ca0cf584701f7095a682a9b5df47c4",
"assets/assets/covers/level-4-warmup-2-barnacle-on-cow.png": "8ecc4c18cabed168c0533971722eb8d8",
"assets/assets/covers/level-4-warmup-3-forward-roll.png": "aebc58cd091cb172aca2d6c27dc229f9",
"assets/assets/icons/Instagram_Glyph_Black.svg": "81e0d8a058b25d733684a982a04543a0",
"assets/FontManifest.json": "29e0d7c661045f09fcbd8ffc132a2cb3",
"assets/fonts/MaterialIcons-Regular.otf": "7b51ffdbcdacc8c1c2a775fedaf18135",
"assets/fonts/Ovo-Regular.ttf": "042204ef515fe4029115cb5fc8e38668",
"assets/NOTICES": "9dc97f60f1f2703b463a79077bb17227",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "05fa5e36d864fb7b996076207cfceceb",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "9f74d9daaae9b00ad0e8a2d31ad7b247",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "26a207d69521e09c7c2b1f9213990fb6",
"icons/favicon16-01.png": "9f74d9daaae9b00ad0e8a2d31ad7b247",
"icons/favicon192-01.png": "d742336aeda45a230d7897d4a37123bb",
"icons/favicon64-01.png": "91b159b007cf324bcff30b7dd2ea8224",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6142884a1c37ab8d78774d96606a4810",
"/": "6142884a1c37ab8d78774d96606a4810",
"main.dart.js": "95118371b64018e3ac033c03782c30b7",
"manifest.json": "456436a6ef474e735e026a9633cda1d7",
"version.json": "19b411dace7cab4ac598dabd4c0d255a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
