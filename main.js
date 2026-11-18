/* Kawan Arab — mulai aplikasi */
(function () {
  "use strict";
  const K = window.K;
  K.start("home");
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    try { navigator.serviceWorker.register("sw.js").catch(() => { }); } catch (e) { }
  }
})();
