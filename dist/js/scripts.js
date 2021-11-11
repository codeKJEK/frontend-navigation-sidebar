"use strict";

// app js
window.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".app-banner__menu-button"),
      appBanner = document.querySelector(".app-banner"),
      bannerText = document.querySelectorAll(".app-banner__heading, .app-banner__menuitem-text"),
      modeButton = document.getElementById("mode-button"),
      appContent = document.getElementById("app-content"),
      bannerCta = appBanner.querySelectorAll("a"),
      expandMenu = function expandMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("title", "collapse menu");
    menuButton.querySelector(".bx").classList.remove("bx-menu");
    menuButton.querySelector(".bx").classList.add("bxs-chevron-left");
    appBanner.classList.add("expanded");
    bannerText.forEach(function (text) {
      return text.classList.add("visible");
    });

    if (window.innerWidth > 641) {
      compactContent();
    }
  },
      compactMenu = function compactMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("title", "expand menu");
    menuButton.querySelector(".bx").classList.remove("bxs-chevron-left");
    menuButton.querySelector(".bx").classList.add("bx-menu");
    appBanner.classList.remove("expanded");
    bannerText.forEach(function (text) {
      return text.classList.remove("visible");
    });

    if (window.innerWidth > 641) {
      expandContent();
    }
  },
      enableDarkMode = function enableDarkMode() {
    document.body.classList.add("dark-mode");
    modeButton.querySelector(".app-banner__menuitem-icon").classList.remove("bx-moon");
    modeButton.querySelector(".app-banner__menuitem-icon").classList.add("bx-sun");
    modeButton.querySelector(".app-banner__menuitem-text").innerHTML = "light mode";
  },
      disableDarkMode = function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    modeButton.querySelector(".app-banner__menuitem-icon").classList.remove("bx-sun");
    modeButton.querySelector(".app-banner__menuitem-icon").classList.add("bx-moon");
    modeButton.querySelector(".app-banner__menuitem-text").innerHTML = "dark mode";
  },
      compactContent = function compactContent() {
    appContent.classList.add("compact");
  },
      expandContent = function expandContent() {
    appContent.classList.remove("compact");
  };

  if (window.innerWidth > 769) {
    expandMenu();
    compactContent();
  }

  bannerCta.forEach(function (cta) {
    cta.addEventListener("click", function () {
      if (window.innerWidth < 641) {
        compactMenu();
      }

      ;
    });
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth < 769) {
      compactMenu();
      expandContent();
    } else {
      expandMenu();
      compactContent();
    }
  });
  modeButton.addEventListener("click", function () {
    if (!document.body.classList.contains("dark-mode")) {
      enableDarkMode();
    } else if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    }

    ;
  });
  menuButton.addEventListener("click", function () {
    console.log(menuButton.getAttribute("aria-expanded"));

    if (menuButton.getAttribute("aria-expanded") == "false") {
      expandMenu();
    } else if (menuButton.getAttribute("aria-expanded") == "true") {
      compactMenu();
    }
  });
});