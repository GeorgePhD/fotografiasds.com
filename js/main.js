//dark-mode




/* fading effects start */
// Get the carousel images
const carouselImages = document.querySelectorAll('.carousel-img');

// Start with the first image as active
/* let currentImageIndex = 0;
carouselImages[currentImageIndex].classList.add('active'); */

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

/* new grid-gallery starts here */

const gridGallery = document.querySelector('.images-container');

const getData = async () => {

  const res = await fetch('../js/data.json');
  const data = await res.json();

  return data;
}

const displayGridGallery = async () => {

  const images = await getData();

  let imagesDisplay = images.map((img) => {

    const {image, name, description } = img;  

    return `
    
      <div class='image-container'>
        <img class='grid-img' src=${image}>
        <h3 class='iceandwinter__content'>${name}</h3>
        <p class='iceandwinter__content'>${description}</p>
      </div>
    
    `;
  });

  gridGallery.innerHTML = imagesDisplay.join('');
}

displayGridGallery();
