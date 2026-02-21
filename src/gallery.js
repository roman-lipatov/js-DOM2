const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

export function renderGallery(images) {
    images.forEach(imgData => {
        const card = document.createElement('figure');
        card.className = 'card';
        card.innerHTML = `
            <img src="${imgData.download_url}" alt="Photo by ${imgData.author}" loading="lazy">
            <figcaption class="card-info">
                <span>© ${imgData.author}</span>
            </figcaption>
        `;
        gallery.appendChild(card);
    });
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function removeLast() {
    const lastItem = gallery.lastElementChild;
    if (lastItem) {
        lastItem.style.opacity = '0';
        lastItem.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if(gallery.contains(lastItem)) gallery.removeChild(lastItem);
        }, 300);
    }
}

export function reverseGallery() {
    const cards = Array.from(gallery.children);
    if(cards.length === 0) return;
    gallery.innerHTML = '';
    cards.reverse().forEach(card => {
        card.style.animation = 'none';
        card.offsetHeight; 
        card.style.animation = 'fadeIn 0.6s ease-out forwards';
        gallery.appendChild(card);
    });
}

export function toggleLoader(show) {
    loader.classList.toggle('hidden', !show);
}