const boxes = document.querySelectorAll('.box');
let current = 0;

function showNextBox() {
  boxes.forEach((box, index) => {
    box.classList.remove('show');
  });

  boxes[current].classList.add('show');

  current = (current + 1) % boxes.length;
}

// Start the cycle
showNextBox(); // Show the first quote immediately
setInterval(showNextBox, 4000); // Change every 4 seconds
