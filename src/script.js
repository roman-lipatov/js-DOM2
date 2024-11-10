const gallery = document.getElementById('gallery');
let images = [];

async function loadImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=4');
        const data = await response.json();

        data.forEach(imgData => {
            const img = document.createElement('img');
            img.src = imgData.download_url;
            img.alt = imgData.author;
            gallery.appendChild(img);
            images.push(img);
        });
    } catch (error) {
        console.error('Помилка при завантаженні зображень:', error);
    }
}

function clearGallery() {
    gallery.innerHTML = '';
    images = [];
}

function removeLastImage() {
    if (images.length > 0) {
        const lastImage = images.pop();
        gallery.removeChild(lastImage);
    }
}

function reverseGallery() {
    images.reverse();
    gallery.innerHTML = '';
    images.forEach(img => gallery.appendChild(img));
}


loadImages();
