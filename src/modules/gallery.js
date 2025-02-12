// gallery.js
export function displayImages(images, gallery) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        gallery.appendChild(imgElement);
    });
}

export function updateImageSizes(gallery, imagesPerRow, minGap, maxGap) {
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
