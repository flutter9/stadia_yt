'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "6ddf53cec4a33225431e9a1c5f8716be",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "a98ffa9925869b355b3d1f07ea8d985c",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/new_header.jpg": "631aecfed7c589b2610be2de28c3b0d9",
"/assets/assets/header_logo.png": "3edca83a9250d890e4aecbbdaf4f9fed",
"/assets/assets/avatars/jon.jpg": "15dabe9a28412c0b874eef1b20ff2a16",
"/assets/assets/avatars/daenerys.jpg": "ecb4bf5b3393c41c27de89a6a59bae2f",
"/assets/assets/avatars/arya.jpg": "8f95f86eb65ebfee0fb968ed45cca52e",
"/assets/assets/avatars/tyrion.jpg": "1d54e8b0e6ef219035f5ecd3844ac22f",
"/assets/assets/avatars/sansa.jpg": "bdf6ad70b7ac8b4794932e213b0743fd",
"/assets/assets/games/nms.jpg": "f917520909046ab2932d5d3a721cc499",
"/assets/assets/games/horizon2.jpg": "1ba100f893f2397ce892731f7f444a75",
"/assets/assets/games/fortnite.jpg": "ca30e11eb9acd9bc2496623c8c8d74fc",
"/assets/assets/games/horizon.jpg": "b84241e33555d34c014e72fc835f162f",
"/assets/assets/games/cod.jpg": "8f3e61840a7bfd1d23e0ff06a66fec8f",
"/assets/assets/games/assasins.jpg": "7b3aff2fb42d67f74cdfe8d173207129",
"/assets/assets/games/apex.jpg": "d5308db72bee81e001d116f498277b17"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
