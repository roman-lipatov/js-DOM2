const apiUrl = "https://picsum.photos/v2/list";
let pageIndex = 1;
const galleryBody = document.querySelector(".gallery__body");
const loadMoreButton = document.querySelector(".gallery__control.load");
const clearGalleryButton = document.querySelector(".gallery__control.clear");
const removeLastButton = document.querySelector(
   ".gallery__control.remowe-last"
);
const reverseGalleryButton = document.querySelector(".gallery__control.revers");

async function loadImages(count = 4) {
   try {
      const response = await fetch(
         `${apiUrl}?page=${pageIndex}&limit=${count}`
      );
      if (!response.ok)
         throw new Error(`HTTP помилка! Статус: ${response.status}`);
      const data = await response.json();

      data.forEach((image) => {
         const img = document.createElement("img");
         img.src = image.download_url;
         img.alt = "some photo";
         galleryBody.appendChild(img);
      });
      pageIndex++;
   } catch (error) {
      console.error(error.message);
   }
}

function clearGallery() {
   galleryBody.innerHTML = "";
   pageIndex = 1;
}

function removeLastImage() {
   const lastImage = galleryBody.lastElementChild;
   if (lastImage) {
      galleryBody.removeChild(lastImage);
   }
}

function reverseGallery() {
   const images = Array.from(galleryBody.children);
   galleryBody.innerHTML = "";
   images.reverse().forEach((img) => galleryBody.appendChild(img));
}

document.addEventListener("DOMContentLoaded", () => loadImages());
loadMoreButton.addEventListener("click", () => loadImages());
clearGalleryButton.addEventListener("click", clearGallery);
removeLastButton.addEventListener("click", removeLastImage);
reverseGalleryButton.addEventListener("click", reverseGallery);
