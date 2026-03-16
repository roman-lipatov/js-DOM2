const gallery = document.getElementById("gallery");

let usedIds = new Set();

export function addImages(data, count = 4) {

    let added = 0;

    for (let item of data) {

        if (added >= count) break;

        if (!usedIds.has(item.id)) {

            usedIds.add(item.id);

            const img = document.createElement("img");

            img.src = `https://picsum.photos/id/${item.id}/500/350`;
            img.alt = "Random Foto";

            gallery.appendChild(img);

            added++;
        }
    }
}

export function clearGallery() {
    gallery.innerHTML = "";
    usedIds.clear();
}

export function removeLastImage() {

    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }

}

export function reverseGallery() {

    const images = Array.from(gallery.children);

    gallery.innerHTML = "";

    images.reverse().forEach(img => gallery.appendChild(img));

}

export function shuffleGallery() {

    const images = Array.from(gallery.children);

    for (let i = images.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [images[i], images[j]] = [images[j], images[i]];

    }

    gallery.innerHTML = "";

    images.forEach(img => gallery.appendChild(img));

}