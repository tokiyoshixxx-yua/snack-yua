/* スナックゆあ公式サイト：以前の売上アプリ用 Service Worker を安全に終了。
   オフラインキャッシュ・会員情報・別リポジトリのデータは削除しません。 */
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    await self.clients.claim();
    await self.registration.unregister();
  })());
});
/* fetch handler intentionally omitted: website requests always go to the network. */
