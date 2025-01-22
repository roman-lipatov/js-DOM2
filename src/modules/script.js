import { fetchImages } from './api.js';
import { displayImages } from './gallery.js';
import { initializeEventListeners } from './events.js';

export async function init() {
    const images = await fetchImages(1);
    displayImages(images);
    initializeEventListeners();
}

init();
