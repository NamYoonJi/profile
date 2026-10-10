// Highlight the chip for the section currently in view (scrollspy).
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function update() {
    var line = window.scrollY + window.innerHeight * 0.3;
    var i = -1;
    secs.forEach(function (s, k) {
      if (s && s.getBoundingClientRect().top + window.scrollY <= line) i = k;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) i = secs.length - 1;
    links.forEach(function (a, k) { a.classList.toggle('active', k === i); });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
