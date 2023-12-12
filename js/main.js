var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header");
  var menu = document.getElementById("nav-other-links");
  var currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    header.style.height = "6rem";
    menu.style.opacity = "0";
    menu.style.margin = "6rem 0rem 0rem 0rem";
  } else {
    header.style.height = "8.5rem";
    menu.style.opacity = "1";
    menu.style.margin = "8.5rem 0rem 0rem 0rem";
  }

  lastScrollTop = currentScrollTop;
});