let images = [];
const gallery = document.getElementById('gallery');

// Функція для завантаження картинок з API
async function loadImages(count = 4) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
        const newImages = await response.json();

        // Додавання зображень до галереї без перевірки унікальності
        let loadedImages = newImages.map(image => `${image.download_url}?w=100&h=100`);
        images = [...images, ...loadedImages];
        displayGallery();
    } catch (error) {
        console.error('Помилка завантаження зображень з API:', error);
    }
}

// Відображення картинок
function displayGallery() {
    gallery.innerHTML = '';
    images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Random Image';
        gallery.appendChild(img);
    });
}

// Завантаження ще 4 нових картинок
function loadMoreImages() {
    loadImages(4);
}

// Очищення галереї
function clearGallery() {
    images = [];
    displayGallery();
}

// Видалення останньої картинки
function removeLastImage() {
    images.pop();
    displayGallery();
}

// Перевернення галереї
function reverseGallery() {
    images.reverse();
    displayGallery();
}

// Завантаження початкових картинок при першому завантаженні сторінки
window.onload = () => loadImages(4);
