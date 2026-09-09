(function () {
  'use strict';

  if (location.hash && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      var target = document.querySelector(location.hash);
      if (target) target.scrollIntoView();
    });
  }

  var elements = document.querySelectorAll('.show-on-scroll');
  if (!elements.length) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach(function (element) {
      element.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.1
  });

  elements.forEach(function (element) {
    observer.observe(element);
  });
})();
