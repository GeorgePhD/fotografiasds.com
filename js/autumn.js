

const autumnGallery = document.querySelector('.autumn__gallery');

const fetchData = async () => {
    try {
        const response = await fetch('../js/autumn.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayGridGallery(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayGridGallery = (galleryData) => {

    galleryData.forEach(element => {

        autumnGallery.innerHTML += `
        
            <div class="autumn__gallery__item">
                <img src="${element.image}" alt="${element.name}" class="autumn__gallery__img">
                <h3 class="autumn__gallery__title">${element.name}</h3>
                <p class="autumn__gallery__description">${element.description}</p>
            </div>
            
        `;
    });
};

fetchData();
