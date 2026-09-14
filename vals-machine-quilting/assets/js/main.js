(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (!toggle || !mobileNav) return;

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
})();
