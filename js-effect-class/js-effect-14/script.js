const text = " Designer, Developer, Programer";
const typewriterElement = document.getElementById("professional");

let index = 0;
let isDeleting = false;

function typeWriter() {
  // Show text based on current index
  typewriterElement.textContent = text.slice(0, index);

  if (!isDeleting) {
    // Typing phase
    if (index < text.length) {
      index++;
    } else {
      // Pause before starting to delete
      isDeleting = true;
      setTimeout(typeWriter, 1000); // Pause before delete starts
      return;
    }
  } else {
    // Deleting phase
    if (index > 0) {
      index--;
    } else {
      // Restart the typing
      isDeleting = false;
    }
  }

  const delay = isDeleting ? 50 : 100; // Speed: faster delete
  setTimeout(typeWriter, delay);
}

typeWriter(); // Start the animation
