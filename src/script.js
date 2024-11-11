let images = [];
const gallery = document.getElementById('gallery');

async function loadImages(count = 4) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
        const newImages = await response.json();

        let loadedImages = newImages.map(image => `${image.download_url}?w=100&h=100`);
        images = [...images, ...loadedImages];
        displayGallery();
    } catch (error) {
        console.error('Помилка завантаження зображень з API:', error);
    }
}

function displayGallery() {
    gallery.innerHTML = '';
    images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Random Image';
        gallery.appendChild(img);
    });
}

function loadMoreImages() {
    loadImages(4);
}

function clearGallery() {
    images = [];
    displayGallery();
}

function removeLastImage() {
    images.pop();
    displayGallery();
}

function reverseGallery() {
    images.reverse();
    displayGallery();
}

window.onload = () => loadImages(4);
