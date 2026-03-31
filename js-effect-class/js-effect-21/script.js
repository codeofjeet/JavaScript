 const carousel = document.getElementById('carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove('active', 'left', 'right');

      if (index === currentIndex) {
        item.classList.add('active');
      } else if (index === (currentIndex - 1 + items.length) % items.length) {
        item.classList.add('left');
      } else if (index === (currentIndex + 1) % items.length) {
        item.classList.add('right');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  // Auto-play every 6 seconds (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 6000);

  // Initial render
  updateCarousel();