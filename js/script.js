// container home
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".background-image");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  setInterval(showNextImage, 2000);
});

// Top Collection
$(document).ready(function () {
  $(".owl-carousel-item").owlCarousel({
    loop: false, // Do not loop
    margin: 10,
    nav: true, // Show navigation icons
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ], // Customize navigation icons
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

//category

$(document).ready(function () {
  $(".accordion-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// pop display form
