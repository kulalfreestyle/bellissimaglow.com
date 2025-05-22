
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // Add fade-in effect to product cards
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.add('fade-in');
  });
});
