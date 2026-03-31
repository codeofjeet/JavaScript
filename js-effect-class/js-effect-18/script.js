const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
let index = 0;
let s = 0

function showNextImage() {
  index++;
  s = s + 600;
  if (index >= images.length) {
    index = 0;
    s = 0;
  }

  // Move the slider
  slider.style.transform = `translateX(-${s}px)`;

  // Delay before next image
  setTimeout(showNextImage, 3000); // 3 seconds delay between images
}

// Start the slider
setTimeout(showNextImage, 3000);
