(function () {
  const currentScript = document.currentScript;
  const widgetUrl = new URL("./widget.js", currentScript.src).toString();

  const script = document.createElement("script");
  script.src = widgetUrl;
  script.defer = true;

  document.head.appendChild(script);
})();