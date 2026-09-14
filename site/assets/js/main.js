(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
      toggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
    });

    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        mobileNav.hidden = true;
      }
    });
  }

  // Scroll reveal
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach(function (el) { observer.observe(el); });
})();
