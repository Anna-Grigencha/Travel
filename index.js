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
