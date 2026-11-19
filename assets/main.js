(function () {
  var NAME = "Vaishnavi J Rajur";
  var EMAIL = "vaishnavirajur02@gmail.com";
  var LINKEDIN = "https://linkedin.com/in/vaishnavijrajur";
  var PAGES = [
    ["Home", "index.html"],
    ["Experience", "experience.html"],
    ["Projects", "projects.html"],
    ["Resume", "resume.html"],
    ["Contact", "contact.html"]
  ];

  var ICONS = {
    moon: '<svg class="icon-when-dark" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    sun: '<svg class="icon-when-light" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>'
  };

  var socials =
    '<div class="socials">' +
    '<a href="' + LINKEDIN + '" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">' + ICONS.linkedin + "</a>" +
    '<a href="mailto:' + EMAIL + '" aria-label="Email">' + ICONS.mail + "</a>" +
    "</div>";

  var themeBtn = function (extra) {
    return '<button type="button" class="icon-btn js-theme ' + (extra || "") + '" aria-label="Toggle dark mode" title="Toggle dark mode">' + ICONS.moon + ICONS.sun + "</button>";
  };

  var current = document.body.getAttribute("data-page") || "index.html";
  var hasHero = !!document.getElementById("top");

  // ----- Header -----
  var header = document.createElement("header");
  header.className = "site-header no-print " + (hasHero ? "over-hero" : "solid");
  header.innerHTML =
    '<div class="container bar">' +
    '<a class="brand" href="index.html">' + NAME + "</a>" +
    '<div class="actions">' + themeBtn() +
    '<button type="button" class="icon-btn js-open" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">' + ICONS.menu + "</button>" +
    "</div></div>";

  // ----- Drawer -----
  var scrim = document.createElement("div");
  scrim.className = "scrim no-print";
  scrim.setAttribute("aria-hidden", "true");

  var drawer = document.createElement("aside");
  drawer.id = "site-menu";
  drawer.className = "drawer no-print";
  drawer.setAttribute("aria-label", "Site menu");
  drawer.setAttribute("inert", "");
  drawer.innerHTML =
    '<div class="top"><button type="button" class="icon-btn js-close" aria-label="Close menu" style="margin-right:-.5rem">' + ICONS.close + "</button></div>" +
    "<nav><ul>" +
    PAGES.map(function (p) {
      return '<li><a href="' + p[1] + '"' + (p[1] === current ? ' aria-current="page"' : "") + ">" + p[0] + "</a></li>";
    }).join("") +
    "</ul></nav>" +
    '<div class="foot"><a class="btn" href="resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume (PDF)</a>' +
    '<div class="row">' + socials + themeBtn() + "</div></div>";

  // ----- Footer -----
  var footer = document.createElement("footer");
  footer.className = "site-footer no-print";
  footer.innerHTML =
    '<nav aria-label="Footer">' +
    PAGES.map(function (p, i) {
      return (i ? '<span class="sep" aria-hidden="true">|</span>' : "") + '<a href="' + p[1] + '">' + p[0] + "</a>";
    }).join("") +
    "</nav>" +
    '<p class="copy">© ' + new Date().getFullYear() + " — " + NAME + "</p>" +
    socials;

  document.body.insertBefore(drawer, document.body.firstChild);
  document.body.insertBefore(scrim, drawer);
  document.body.insertBefore(header, scrim);
  document.body.appendChild(footer);

  // ----- Theme -----
  var root = document.documentElement;
  document.querySelectorAll(".js-theme").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });

  // ----- Menu -----
  var openBtn = header.querySelector(".js-open");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    openBtn.setAttribute("aria-expanded", String(open));
    if (open) { drawer.removeAttribute("inert"); drawer.querySelector(".js-close").focus(); }
    else { drawer.setAttribute("inert", ""); }
  }
  openBtn.addEventListener("click", function () { setMenu(true); });
  drawer.querySelector(".js-close").addEventListener("click", function () { setMenu(false); openBtn.focus(); });
  scrim.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // ----- Header state + home hero scroll progress -----
  var hero = document.getElementById("top");
  var heroHome = document.querySelector(".hero-home");
  var ticking = false;
  function onScroll() {
    ticking = false;
    if (hero) {
      var bottom = hero.getBoundingClientRect().bottom;
      var over = bottom > 64;
      header.classList.toggle("over-hero", over);
      header.classList.toggle("solid", !over);
    }
    if (heroHome) {
      var r = heroHome.getBoundingClientRect();
      var span = heroHome.offsetHeight - window.innerHeight;
      var p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      heroHome.style.setProperty("--p", p.toFixed(4));
    }
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // ----- Reveal on scroll -----
  var items = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("revealed"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("revealed"); });
  }

  // ----- Contact form → opens the visitor's mail app -----
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var who = (f.firstName.value + " " + f.lastName.value).trim();
      var subject = "Portfolio inquiry from " + who;
      var body = f.message.value + "\n\n— " + who + " (" + f.email.value + ")";
      window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var note = document.getElementById("form-note");
      if (note) note.textContent = "Opening your email app…";
    });
  }
})();
