import { loadImages, resetPageIndex } from "./api.js";
import { clearGallery, removeLastImage, reverseGallery } from "./gallery.js";

export function initializeGallery() {
   const galleryBody = document.querySelector(".gallery__body");
   const loadMoreButton = document.querySelector(".gallery__control.load");
   const clearGalleryButton = document.querySelector(".gallery__control.clear");
   const removeLastButton = document.querySelector(
      ".gallery__control.remowe-last"
   );
   const reverseGalleryButton = document.querySelector(
      ".gallery__control.revers"
   );

   document.addEventListener("DOMContentLoaded", () => loadImages(galleryBody));
   loadMoreButton.addEventListener("click", () => loadImages(galleryBody));
   clearGalleryButton.addEventListener("click", () =>
      clearGallery(galleryBody, resetPageIndex)
   );
   removeLastButton.addEventListener("click", () =>
      removeLastImage(galleryBody)
   );
   reverseGalleryButton.addEventListener("click", () =>
      reverseGallery(galleryBody)
   );
}
