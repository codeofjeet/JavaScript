const slider = document.getElementById('slider');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let angle = 0;
  const rotate = (direction) => {
    angle += direction * 120;
    slider.style.transform = `translateZ(-500px) rotateY(${angle}deg)`;
  };

  prev.addEventListener('click', () => rotate(-1));
  next.addEventListener('click', () => rotate(1));

  // Optional: auto-rotate every 5 seconds
  setInterval(() => {
    rotate(1);
  }, 5000);