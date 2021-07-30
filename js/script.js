// const topbar = document.querySelector(".topbar");
// const navigation = document.querySelector(".navigation");
// const toggle = document.querySelector(".toggle");
// const main = document.querySelector(".main");

// toggle.addEventListener("click", function () {
//   topbar.classList.toggle("active");
//   navigation.classList.toggle("active");
//   // toggle.classList.toggle("active");
//   main.classList.toggle("active");
// });

// function toggleMenu() {
//   navigation.classList.remove("active");
//   main.classList.remove("active");
// }

const menu = document.querySelector("#menu-bars");
const header = document.querySelector("header");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.addEventListener("onscroll", function () {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
});
