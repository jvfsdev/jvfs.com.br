(function () {
  var root = document.documentElement;
  var saved = null;

  try {
    saved = localStorage.getItem("lang");
  } catch (e) {}

  var initial = saved || (navigator.language && navigator.language.toLowerCase().indexOf("pt") === 0 ? "pt-BR" : "en");
  root.lang = initial;

  document.getElementById("lang-toggle").addEventListener("click", function () {
    var next = root.lang === "pt-BR" ? "en" : "pt-BR";
    root.lang = next;
    try {
      localStorage.setItem("lang", next);
    } catch (e) {}
  });
})();
