

const header = document.querySelector(".header");
 window.addEventListener("scroll", function () {

  window.scrollY >= 10  ? header.classList.add("active") : header.classList.remove("active");

 });