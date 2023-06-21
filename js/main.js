/* fading effects start */
// Get the carousel images
const carouselImages = document.querySelectorAll('.carousel-img');

// Start with the first image as active
let currentImageIndex = 0;
carouselImages[currentImageIndex].classList.add('active');

// Function to fade in the next image
function fadeInNextImage() {
  // Remove the 'active' class from the current image
    carouselImages[currentImageIndex].classList.remove('active');

  // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

  // Add the 'active' class to the next image
    carouselImages[currentImageIndex].classList.add('active');
}

// Call fadeInNextImage() every 3 seconds (adjust the interval as needed)
setInterval(fadeInNextImage, 3000);

/* fading effects end */