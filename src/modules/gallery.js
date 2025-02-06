export function clearGallery(galleryBody, resetPageIndex) {
   galleryBody.innerHTML = "";
   resetPageIndex();
}

export function removeLastImage(galleryBody) {
   const lastImage = galleryBody.lastElementChild;
   if (lastImage) {
      galleryBody.removeChild(lastImage);
   }
}

export function reverseGallery(galleryBody) {
   const images = Array.from(galleryBody.children);
   galleryBody.innerHTML = "";
   images.reverse().forEach((img) => galleryBody.appendChild(img));
}
