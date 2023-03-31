window.addEventListener("load", function () {
  /*--------------------- page loader-----------*/
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(function () {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
  /*------------------animation on scroll------------------------*/
  AOS.init({
    once: true,
  });
});
/*--------------------------------toggle navbar---------------------*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}

/*-----------------close nav when clicking on a  nav item------------*/
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});

/*----------------------sticky heading------------------------*/
window.addEventListener("scroll", function () {
  if (this.scrollY > 20) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

//menu slider script
var slideIndex = 1;

function showImage(n) {
  // for Display the first Image

  "use strict";

  var slide = document.getElementsByClassName("slides"),
    dots = document.getElementsByClassName("dots"),
    i;

  if (n > slide.length) {
    // to prevent larger values than the slide length

    slideIndex = 1;
  }

  if (n < 1) {
    // to avoide negative values

    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    // to make other images dispaly: none

    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    // to remove the active class from other dots

    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex - 1].className += " active";
}

showImage(slideIndex);

function plusIndex(n) {
  // for Next & Prev Actions

  "use strict";

  showImage((slideIndex += n));
}

function currentSlide(n) {
  // for Slide Bullets Selection

  "use strict";

  showImage((slideIndex = n));
}
