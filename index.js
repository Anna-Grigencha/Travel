(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav");
  const body = document.querySelector(".body");
  const darkBackgraund = document.querySelector(".dark-bg");

  const menuLinks = document.querySelectorAll(".header-nav");
  burger.addEventListener("click", () => {
    menu.classList.toggle("open-header-nav");
    burger.classList.toggle("open-header-nav");
    body.classList.toggle("open-header-nav");
    darkBackgraund.classList.toggle("open-header-nav");
  });
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener("click", () => {
      menu.classList.remove("open-header-nav");
      burger.classList.remove("open-header-nav");
      body.classList.remove("open-header-nav");
      darkBackgraund.classList.remove("open-header-nav");
    });
  }
})();
