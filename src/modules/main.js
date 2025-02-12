// main.js
import { fetchImages } from './api.js';
import { displayImages, updateImageSizes } from './gallery.js';

const gallery = document.getElementById('gallery');
let currentPage = 1;
const imagesPerRow = 4;
const minGap = 3;
const maxGap = 15;

async function loadImages() {
    const images = await fetchImages(currentPage, imagesPerRow);
    displayImages(images, gallery);
    updateImageSizes(gallery, imagesPerRow, minGap, maxGap);
}

loadImages(currentPage);

document.getElementById('loadMore').addEventListener('click', async () => {
    currentPage++;
    await loadImages();
});

document.getElementById('clearGallery').addEventListener('click', () => {
    gallery.innerHTML = '';
    currentPage = 1;
});

document.getElementById('removeLast').addEventListener('click', () => {
    const images = gallery.getElementsByTagName('img');
    if (images.length > 0) {
        gallery.removeChild(images[images.length - 1]);
        updateImageSizes(gallery, imagesPerRow, minGap, maxGap);
    }
});

document.getElementById('reverseGallery').addEventListener('click', () => {
    const images = Array.from(gallery.getElementsByTagName('img'));
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
    updateImageSizes(gallery, imagesPerRow, minGap, maxGap);
});

document.getElementById('shuffleGallery').addEventListener('click', () => {
    const images = Array.from(gallery.getElementsByTagName('img'));
    gallery.innerHTML = '';
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    images.forEach(img => gallery.appendChild(img));
    updateImageSizes(gallery, imagesPerRow, minGap, maxGap);
});

window.addEventListener('resize', () => {
    updateImageSizes(gallery, imagesPerRow, minGap, maxGap);
});
