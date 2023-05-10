(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".testimonial-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    items: 1,
    navText: [
      '<span class="fa fa-chevron-left"></span>',
      '<span class="fa fa-chevron-right"></span>',
    ],
  });
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});

// isotope
var $grid = $(".portfolio-items").isotope({
  filter: ".portfolio-website",
});
// filter items on button click
$(".portfolio-filter-ul").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

$(".portfolio-filter-ul").click(function () {
  let thisIs = this;
  $(".portfolio-filter-ul li").removeClass("active");
});

// Get the container element
var btnContainer = document.getElementById("portfolio-filter-ul");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.querySelectorAll("#portfolio-filter-ul li");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (event) {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    // target.className += " active";
    setTimeout(function () {
      event.target.classList.add("active");
    }, 1);
  });
}