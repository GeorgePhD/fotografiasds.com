

const waterfallsGallery = document.querySelector('.images__container');

const fetchData = async () => {
    try {
        const response = await fetch('../js/waterfalls/waterfalls.json');
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


    galleryData.map(element => {

        waterfallsGallery.innerHTML += `
        
            <div class="image__container">
                <img src="${element.image}" alt="${element.name}" class="grid__img">
                <h3 class="grid__img__content">${element.name}</h3>
                <p class="grid__img__content">${element.description}</p>
            </div>
            
        `;
    });

};

fetchData();
