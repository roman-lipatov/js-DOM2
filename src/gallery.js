import { fetchImages } from './api.js';

export function initGallery(gallery, imagesPerRow) {
    let currentPage = 1;

    async function fetchAndDisplayImages() {
        const images = await fetchImages(currentPage, imagesPerRow);
        displayImages(gallery, images);
    }

    fetchAndDisplayImages();
    
    // Додати обробники подій для кнопок
    document.getElementById('loadMore').addEventListener('click', async () => {
        currentPage++;
        const images = await fetchImages(currentPage, imagesPerRow);
        displayImages(gallery, images);
    });

    document.getElementById('clearGallery').addEventListener('click', () => {
        gallery.innerHTML = '';
        currentPage = 1; // Скидаємо номер сторінки
    });

    document.getElementById('removeLast').addEventListener('click', () => {
        const images = gallery.getElementsByTagName('img');
        if (images.length > 0) {
            gallery.removeChild(images[images.length - 1]);
            updateImageSizes(gallery, imagesPerRow); // Оновлюємо розміри
        }
    });

    document.getElementById('reverseGallery').addEventListener('click', () => {
        const images = Array.from(gallery.getElementsByTagName('img'));
        gallery.innerHTML = '';
        images.reverse().forEach(img => gallery.appendChild(img));
        updateImageSizes(gallery, imagesPerRow); // Оновлюємо розміри
    });

    document.getElementById('shuffleGallery').addEventListener('click', () => {
        const images = Array.from(gallery.getElementsByTagName('img'));
        gallery.innerHTML = '';
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [images[i], images[j]] = [images[j], images[i]];
        }
        images.forEach(img => gallery.appendChild(img));
        updateImageSizes(gallery, imagesPerRow); // Оновлюємо розміри
    });

    // Оновлюємо розміри зображень при зміні розміру вікна
    window.addEventListener('resize', () => {
        updateImageSizes(gallery, imagesPerRow);
    });
}

export function displayImages(gallery, images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        gallery.appendChild(imgElement);
    });

    updateImageSizes(gallery, imagesPerRow); // Оновлюємо розміри зображень
}

export function updateImageSizes(gallery, imagesPerRow) {
    const containerWidth = gallery.clientWidth; // Ширина контейнера
    const gap = Math.min(Math.max(containerWidth * 0.03, 3), 15); // Обчислюємо відступ
    const totalGapWidth = gap * (imagesPerRow - 1); // Загальна ширина відступів
    const imageWidth = (containerWidth - totalGapWidth) / imagesPerRow; // Ширина кожного зображення

    const imgElements = gallery.getElementsByTagName('img');
    for (let img of imgElements) {
        img.style.width = `${imageWidth}px`; // Встановлюємо ширину
        img.style.height = 'auto'; // Автоматична висота
    }

    gallery.style.gap = `${gap}px`; // Додати gap до стилю галереї
}