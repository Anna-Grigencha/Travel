const burger = document.querySelector(".burger");
const headerNavClose = document.querySelector(".header-nav-close");
const menu = document.querySelector(".header-nav");
const body = document.querySelector(".body");
const darkBackgraund = document.querySelector(".dark-bg");
const menuLinks = document.querySelectorAll(".header-link");
const login = document.querySelector(".button-login");
const account = document.querySelector(".account");
const popUp = document.querySelector(".pop-up");
const register = document.querySelector(".register");
const btnContinueWithFacebook = document.querySelector(
  ".btn-continue-with-facebook"
);
const btnContinueWithGoogle = document.querySelector(
  ".btn-continue-with-google"
);
const groupOR = document.querySelector(".group-or");
const forgotYourPassword = document.querySelector(".forgot-your-password");
const contentPopUp = document.querySelector(".content-pop-up");
const titlePopUp = document.querySelector(".name-pop-up");
const btnSignInUp = document.querySelector(".btn-sign-in");
const havingAnAccount = document.querySelector(".having-an-account");

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

//попап

(function () {
  login.addEventListener("click", () => {
    popUp.classList.add("open-pop-up");
    body.classList.add("open-pop-up");
  });
})();

(function () {
  account.addEventListener("click", () => {
    popUp.classList.add("open-pop-up");
    body.classList.add("open-pop-up");
  });
})();

(function () {
  register.addEventListener("click", () => {
    btnContinueWithFacebook.classList.toggle("open-register");
    btnContinueWithGoogle.classList.toggle("open-register");
    groupOR.classList.toggle("open-register");
    forgotYourPassword.classList.toggle("open-register");
    contentPopUp.classList.toggle("open-register");

    if (register.innerHTML === "Log in") {
      titlePopUp.innerHTML = "Log in to your account";
      havingAnAccount.innerHTML = "Don’t have an account?";
      register.innerHTML = "Register";
      btnSignInUp.value = "Sign In";
      document.querySelector(".input-email").value = " ";
      document.querySelector(".input-password").value = " ";
    } else {
      titlePopUp.innerHTML = "Create account";
      havingAnAccount.innerHTML = "Already have an account?";
      register.innerHTML = "Log in";
      btnSignInUp.value = "Sign Up";
      document.querySelector(".input-email").value = " ";
      document.querySelector(".input-password").value = " ";
    }
  });
})();

popUp.addEventListener("click", (event) => {
  if (event.target.classList.contains("open-pop-up")) {
    popUp.classList.remove("open-pop-up");
    body.classList.remove("open-pop-up");
    btnContinueWithFacebook.classList.remove("open-register");
    btnContinueWithGoogle.classList.remove("open-register");
    groupOR.classList.remove("open-register");
    forgotYourPassword.classList.remove("open-register");
    contentPopUp.classList.remove("open-register");
    titlePopUp.innerHTML = "Log in to your account";
    havingAnAccount.innerHTML = "Don’t have an account?";
    register.innerHTML = "Register";
    btnSignInUp.value = "Sign In";
    document.querySelector(".input-email").value = " ";
    document.querySelector(".input-password").value = " ";
  }
});

(function () {
  btnSignInUp.addEventListener("click", () => {
    let email = document.querySelector(".input-email").value;
    let password = document.querySelector(".input-password").value;
    alert(`${email} ${password}`);
  });
})();

//слайдер

// Получаем видимую часть слайда
let viewport = document.querySelector(".viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.querySelectorAll(".arrow-right-slide");
// Получаем кнопку назад
let btnPrev = document.querySelectorAll(".arrow-left-slide");
// Получаем элемент со всеми слайдами
let slides = document.querySelectorAll(".slide");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".ellipse");
/*let idx = 0;*/

slides[0].classList.add("active");
btnNext[0].classList.add("active");
viewSliders[0].classList.add("active");

(function () {
  for (let i = 0; i < btnNext.length - 1; i += 1) {
    btnNext[i].addEventListener("click", () => {
      slides[i].classList.add("unactive");
      slides[i].classList.remove("active");
      slides[i + 1].classList.add("active");
      slides[i + 1].classList.remove("unactive");
      btnNext[i + 1].classList.add("active");

      if (i === 0) {
        viewSliders[i + 4].classList.add("active");
        viewSliders[i].classList.remove("active");
      }

      if (i === 1) {
        btnNext[2].classList.add("unactive");
        btnNext[2].classList.remove("active");
        btnPrev[2].classList.add("active");
        viewSliders[i + 7].classList.add("active");
        viewSliders[i].classList.remove("active");
      }
    });
  }

  for (let i = btnPrev.length - 1; i > 0; i = i - 1) {
    btnPrev[i].addEventListener("click", () => {
      slides[i].classList.add("unactive");
      slides[i].classList.remove("active");
      slides[i - 1].classList.add("active");
      slides[i - 1].classList.remove("unactive");

      if (i === 2) {
        btnNext[1].classList.add("active");
        btnPrev[1].classList.remove("unactive");
        btnPrev[1].classList.add("active");
        viewSliders[i - 4].classList.add("active");
        viewSliders[i].classList.remove("active");
      }
      if (i === 1) {
        viewSliders[i - 1].classList.add("active");
        viewSliders[i].classList.remove("active");
      }
    });
  }
})();
