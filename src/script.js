import { fetchImagesFromAPI } from './api.js';
import { 
    renderGallery, 
    clearGallery, 
    removeLast, 
    reverseGallery, 
    toggleLoader 
} from './gallery.js';

const LIMIT = 4;
let currentPage = Math.floor(Math.random() * 50) + 1;

async function loadHandler() {
    toggleLoader(true);
    try {
        const data = await fetchImagesFromAPI(currentPage, LIMIT);
        renderGallery(data);
        currentPage++;
    } catch (err) {
        console.error(err);
        alert('Упс! Щось пішло не так.');
    } finally {
        toggleLoader(false);
    }
}


document.getElementById('btn-load').addEventListener('click', loadHandler);
document.getElementById('btn-clear').addEventListener('click', clearGallery);
document.getElementById('btn-remove').addEventListener('click', removeLast);
document.getElementById('btn-reverse').addEventListener('click', reverseGallery);

window.addEventListener('DOMContentLoaded', loadHandler);