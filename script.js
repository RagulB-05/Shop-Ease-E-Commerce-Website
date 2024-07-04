const navBarCloseBtn = document.querySelector(".side-navbar-close");
const navBarOpenBtn = document.querySelector(".navbar-menu");
const sideBar = document.querySelector(".side-navbar");

const openNavbar = function () {
  sideBar.style.left = "0";
};

const closeNavbar = function () {
  sideBar.style.left = "-40%";
};

navBarOpenBtn.addEventListener("click", openNavbar);
navBarCloseBtn.addEventListener("click", closeNavbar);
