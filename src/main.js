import { fetchImages } from "./api.js";

import {
    addImages,
    clearGallery,
    removeLastImage,
    reverseGallery,
    shuffleGallery
} from "./gallery.js";


const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clearGallery");
const removeLastBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverseGallery");
const shuffleBtn = document.getElementById("shuffleGallery");


async function loadImages(count = 4) {

    const page = Math.floor(Math.random() * 10) + 1;

    const data = await fetchImages(page);

    addImages(data, count);

}


loadImages(4);


loadMoreBtn.addEventListener("click", () => loadImages(4));

clearBtn.addEventListener("click", clearGallery);

removeLastBtn.addEventListener("click", removeLastImage);

reverseBtn.addEventListener("click", reverseGallery);

shuffleBtn.addEventListener("click", shuffleGallery);