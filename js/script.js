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

// Display the pop-up box after 2 seconds
setTimeout(function () {
  var popup = document.getElementById("popup");
  popup.style.visibility = "visible";
  popup.style.opacity = "1";
}, 2000);

// Close the pop-up box when the close button is clicked
var closeButton = document.getElementById("close-button");
closeButton.onclick = function () {
  var popup = document.getElementById("popup");
  popup.style.visibility = "hidden";
  popup.style.opacity = "0";
};

// Check if the count is stored in local storage
let count = localStorage.getItem("visitCount") || 0;

// Increment the count
count++;

// Update the count and store it in local storage
localStorage.setItem("visitCount", count);

// Display the count on the webpage
document.getElementById("visitCount").textContent = count;


// hash remover from tab

document.addEventListener("DOMContentLoaded", () => {
  // Detect hash changes
  window.addEventListener("hashchange", () => {
    // Use history.replaceState to remove the hash from the URL
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  });

  // Optionally remove the hash when the page loads
  if (window.location.hash) {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  }
});

