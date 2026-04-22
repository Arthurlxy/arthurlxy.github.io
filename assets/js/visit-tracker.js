(function () {
  var endpoint = "{{ site.visit_logger.endpoint | default: '' }}".trim();

  if (!endpoint) {
    return;
  }

  var normalizedEndpoint = endpoint.replace(/\/$/, "");
  var params = new URLSearchParams({
    path: window.location.pathname || "/",
    referrer: document.referrer || "",
    title: document.title || "",
    ts: String(Date.now())
  });

  var img = new Image();
  img.src = normalizedEndpoint + "/visit.gif?" + params.toString();
})();
