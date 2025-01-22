import { fetchImages } from './modules/api.js';
import { displayImages } from './modules/gallery.js';
import { initializeEventListeners } from './modules/events.js';

export async function init() {
    const images = await fetchImages(1);
    displayImages(images);
    initializeEventListeners();
}

init();
