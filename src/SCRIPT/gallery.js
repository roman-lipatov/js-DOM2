// script/gallery.js
export const gallery = document.getElementById('gallery');
export const imagesPerRow = 4;
const minGap = 3;
const maxGap = 15;

export function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        gallery.appendChild(imgElement);
    });
    updateImageSizes();
}

export function updateImageSizes() {
    const containerWidth = gallery.clientWidth;
    const gap = Math.min(Math.max(containerWidth * 0.03, minGap), maxGap);
    const totalGapWidth = gap * (imagesPerRow - 1);
    const imageWidth = (containerWidth - totalGapWidth) / imagesPerRow;

    const imgElements = gallery.getElementsByTagName('img');
    for (let img of imgElements) {
        img.style.width = `${imageWidth}px`;
        img.style.height = 'auto';
    }

    gallery.style.gap = `${gap}px`;
}
