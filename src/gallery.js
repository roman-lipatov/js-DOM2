export function renderImages(data, galleryElement) {
  data.forEach(img => {
    const image = document.createElement("img");
    image.src = `https://picsum.photos/id/${img.id}/500/400`;
    galleryElement.appendChild(image);
  });
}

export function clearGallery(galleryElement) {
  galleryElement.innerHTML = "";
}

export function removeLastImage(galleryElement) {
  const imgs = galleryElement.querySelectorAll("img");
  if (imgs.length > 0) imgs[imgs.length - 1].remove();
}

export function reverseGallery(galleryElement) {
  const items = Array.from(galleryElement.children).reverse();
  galleryElement.innerHTML = "";
  items.forEach(item => galleryElement.appendChild(item));
}