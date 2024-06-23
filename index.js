document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".navbar-lists");

  hamburger.addEventListener("click", function () {
    console.log('clicked')
    navMenu.classList.toggle("active");
  });
});


