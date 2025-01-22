import { fetchImages } from './api.js';
import { 
    displayImages, 
    clearGallery, 
    removeLastImage, 
    reverseGallery, 
    shuffleGallery, 
    updateImageSizes 
} from './gallery.js';

let currentPage = 1;

export function initializeEventListeners() {
    document.getElementById('loadMore').addEventListener('click', async () => {
        const images = await fetchImages(++currentPage);
        displayImages(images);
    });

    document.getElementById('clearGallery').addEventListener('click', () => {
        clearGallery();
        currentPage = 1;
    });

    document.getElementById('removeLast').addEventListener('click', () => {
        removeLastImage();
    });

    document.getElementById('reverseGallery').addEventListener('click', () => {
        reverseGallery();
    });

    document.getElementById('shuffleGallery').addEventListener('click', () => {
        shuffleGallery();
    });

    window.addEventListener('resize', () => {
        updateImageSizes();
    });
}
