
  const container = document.querySelector('.container');
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      container.classList.add('hover');
    });

    box.addEventListener('mouseleave', () => {
      container.classList.remove('hover');
    });
  });

