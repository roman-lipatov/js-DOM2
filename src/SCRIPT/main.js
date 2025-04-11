// script/main.js
import { fetchImages } from './api.js';
import { gallery, imagesPerRow, displayImages, updateImageSizes } from './gallery.js';

let currentPage = 1;

async function loadImages(page) {
    const images = await fetchImages(page, imagesPerRow);
    displayImages(images);
}

// Початкове завантаження
loadImages(currentPage);

// Події кнопок
document.getElementById('loadMore').addEventListener('click', async () => {
    currentPage++;
    await loadImages(currentPage);
});

document.getElementById('clearGallery').addEventListener('click', () => {
    gallery.innerHTML = '';
    currentPage = 1;
});

document.getElementById('removeLast').addEventListener('click', () => {
    const images = gallery.getElementsByTagName('img');
    if (images.length > 0) {
        gallery.removeChild(images[images.length - 1]);
        updateImageSizes();
    }
});

document.getElementById('reverseGallery').addEventListener('click', () => {
    const images = Array.from(gallery.getElementsByTagName('img'));
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
    updateImageSizes();
});

document.getElementById('shuffleGallery').addEventListener('click', () => {
    const images = Array.from(gallery.getElementsByTagName('img'));
    gallery.innerHTML = '';
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    images.forEach(img => gallery.appendChild(img));
    updateImageSizes();
});

// Адаптивність при зміні розміру
window.addEventListener('resize', updateImageSizes);
