const menuIcon = document.querySelector(".menu-icon");
const items = document.querySelector(".items");
const cross = document.getElementById("cross");

// Toggle the menu
function toggleMenu() {
  items.classList.toggle("show");
}

// Close the menu when clicking on the cross
cross.addEventListener("click", function () {
  items.classList.remove("show");
});

// Close the menu when clicking outside the menu
document.addEventListener("click", function (event) {
  if (!event.target.closest(".items") && !event.target.closest(".menu-icon")) {
    items.classList.remove("show");
  }
});

// Prevent closing when clicking inside the menu
items.addEventListener("click", function (event) {
  event.stopPropagation();
});

// testimonials
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
