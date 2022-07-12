const burger = document.querySelector(".burger");
const headerNavClose = document.querySelector(".header-nav-close");
const menu = document.querySelector(".header-nav");
const body = document.querySelector(".body");
const darkBackgraund = document.querySelector(".dark-bg");
const menuLinks = document.querySelectorAll(".header-link");

(function () {
  burger.addEventListener("click", () => {
    menu.classList.add("open-header-nav");
    burger.classList.add("open-header-nav");
    headerNavClose.classList.add("open-header-nav");
    body.classList.add("open-header-nav");
    darkBackgraund.classList.add("open-header-nav");
  });
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener("click", () => {
      menu.classList.remove("open-header-nav");
      burger.classList.remove("open-header-nav");
      headerNavClose.classList.remove("open-header-nav");
      body.classList.remove("open-header-nav");
      darkBackgraund.classList.remove("open-header-nav");
    });
  }
  darkBackgraund.addEventListener("click", () => {
    menu.classList.remove("open-header-nav");
    burger.classList.remove("open-header-nav");
    headerNavClose.classList.remove("open-header-nav");
    body.classList.remove("open-header-nav");
    darkBackgraund.classList.remove("open-header-nav");
  });
  headerNavClose.addEventListener("click", () => {
    menu.classList.remove("open-header-nav");
    burger.classList.remove("open-header-nav");
    headerNavClose.classList.remove("open-header-nav");
    body.classList.remove("open-header-nav");
    darkBackgraund.classList.remove("open-header-nav");
  });
})();
