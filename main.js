import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 漢堡選單按鈕動畫
const hamburgerBtn = document.querySelector(".navbar-toggler");
const body = document.querySelector("body");

function switchHamburger() {
  const hamburgerLines = [
    ...document.querySelectorAll(".navbar-toggler .hamburg-line"),
  ];

  hamburgerLines.forEach((item) => {
    item.classList.toggle("active");
  });

  body.classList.toggle("overflow-y-hidden");
}

hamburgerBtn.addEventListener("click", switchHamburger);
