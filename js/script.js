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

// AOS
const skill = document.querySelectorAll(".skill");
const card = document.querySelectorAll(".card");

skill.forEach((image, i) => {
  image.dataset.aos = "fade-down";
  image.dataset.aosDelay = i * 300;
  image.dataset.aosDuration = 2000;
});

card.forEach((img, i) => {
  img.dataset.aos = "zoom-in";
  img.dataset.aosDelay = i * 300;
  img.dataset.aosDuration = 1200;
});

AOS.init({
  once: "true",
});
