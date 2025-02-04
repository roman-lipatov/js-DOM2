const gallery = document.getElementById('gallery');
<<<<<<< Updated upstream
let currentPage = 1;
const imagesPerRow = 4; // Кількість зображень в рядку
const minGap = 3; // Мінімальний відступ
const maxGap = 15; // Максимальний відступ

async function fetchImages(page) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${imagesPerRow * 1}`);
    const images = await response.json();
    displayImages(images);
}

function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        gallery.appendChild(imgElement);
    });
    
    updateImageSizes(); // Оновлюємо розміри зображень після їх додавання
}

function updateImageSizes() {
    const containerWidth = gallery.clientWidth; // Ширина контейнера
    const gap = Math.min(Math.max(containerWidth * 0.03, minGap), maxGap); // Обчислюємо відступ
    const totalGapWidth = gap * (imagesPerRow - 1); // Загальна ширина відступів
    const imageWidth = (containerWidth - totalGapWidth) / imagesPerRow; // Ширина кожного зображення

    const imgElements = gallery.getElementsByTagName('img');
    for (let img of imgElements) {
        img.style.width = `${imageWidth}px`; // Встановлюємо ширину
        img.style.height = 'auto'; // Автоматична висота
    }
    
    // Додати gap до стилю галереї
    gallery.style.gap = `${gap}px`;
}

// Завантажити початкові картинки
fetchImages(currentPage);

// Завантажити ще картинки
document.getElementById('loadMore').addEventListener('click', async () => {
    currentPage++;
    await fetchImages(currentPage);
});

// Очистити галерею
document.getElementById('clearGallery').addEventListener('click', () => {
    gallery.innerHTML = '';
    currentPage = 1; // Скидаємо номер сторінки
});

// Видалити останню картинку
document.getElementById('removeLast').addEventListener('click', () => {
    const images = gallery.getElementsByTagName('img');
    if (images.length > 0) {
        gallery.removeChild(images[images.length - 1]);
        updateImageSizes(); // Оновлюємо розміри
    }
});

// Перевернути галерею
document.getElementById('reverseGallery').addEventListener('click', () => {
    const images = Array.from(gallery.getElementsByTagName('img'));
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
    updateImageSizes(); // Оновлюємо розміри
});

// Перемішати галерею
document.getElementById('shuffleGallery').addEventListener('click', () => {
    const images = Array.from(gallery.getElementsByTagName('img'));
    gallery.innerHTML = '';
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    images.forEach(img => gallery.appendChild(img));
    updateImageSizes(); // Оновлюємо розміри
});

// Оновлюємо розміри зображень при зміні розміру вікна
window.addEventListener('resize', () => {
    updateImageSizes();
});
=======
let imageUrls = [];

async function fetchImages(count = 4) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10) + 1}&limit=${count}`);
    const images = await response.json();
    return images.map(img => img.download_url);
}

async function loadMoreImages() {
    const newImages = await fetchImages(4);
    imageUrls.push(...newImages);
    renderGallery();
}

function renderGallery() {
    gallery.innerHTML = '';
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        gallery.appendChild(img);
    });
}

function clearGallery() {
    imageUrls = [];
    renderGallery();
}

function removeLastImage() {
    imageUrls.pop();
    renderGallery();
}

function reverseGallery() {
    imageUrls.reverse();
    renderGallery();
}

// Завантажити початкові 4 картинки при першому завантаженні сторінки
loadMoreImages();
>>>>>>> Stashed changes
