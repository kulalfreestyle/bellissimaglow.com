
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // Gallery modal logic
  const galleryModal = document.getElementById('gallery-modal');
  const sliderImg = document.getElementById('slider-img');
  const sliderDesc = document.getElementById('slider-desc');
  const closeBtn = document.querySelector('.close-btn');

  const productData = {
    'capixy': [
      { img: 'assets/images/logo.png', desc: 'Capixy Hair Fertilizer - Intensive Treatment' }
    ],
    'movelex': [
      { img: 'assets/images/logo.png', desc: 'Movelex Gel - Muscle Pain Relief' }
    ],
    'femi9': [
      { img: 'assets/images/logo.png', desc: 'Femi9 - Feminine Wellness Supplement' }
    ],
    'egatone': [
      { img: 'assets/images/logo.png', desc: 'Egatone - Advanced Supplement Tablets' }
    ],
    'soralone': [
      { img: 'assets/images/logo.png', desc: 'Soralone - Skin Hydration Formula' }
    ],
    'vacation': [
      { img: 'assets/images/logo.png', desc: 'Vacation - SPF Sunscreen' }
    ],
    'nutrition': [
      { img: 'assets/images/logo.png', desc: 'Multivitamins for Hair & Skin' }
    ]
  };

  document.querySelectorAll('[data-show]').forEach(btn => {
    btn.addEventListener('click', () => {
      const brand = btn.getAttribute('data-show');
      let index = 0;
      function showSlide(i) {
        const item = productData[brand][i];
        sliderImg.src = item.img;
        sliderDesc.textContent = item.desc;
      }
      showSlide(index);
      galleryModal.style.display = "block";
    });
  });

  closeBtn.onclick = () => {
    galleryModal.style.display = "none";
  };
  window.onclick = (e) => {
    if (e.target === galleryModal) galleryModal.style.display = "none";
  };
});
