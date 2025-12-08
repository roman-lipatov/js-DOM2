const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clearGallery");
const removeLastBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverseGallery");
const shuffleBtn = document.getElementById("shuffleGallery");

let usedIds = new Set();

async function loadImages(count = 4) {
    const page = Math.floor(Math.random() * 10) + 1;

    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=20`);
    const data = await response.json();

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

loadImages(4);

loadMoreBtn.addEventListener("click", () => loadImages(4));

clearBtn.addEventListener("click", () => {
    gallery.innerHTML = "";
    usedIds.clear();
});

removeLastBtn.addEventListener("click", () => {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
});

reverseBtn.addEventListener("click", () => {
    const images = Array.from(gallery.children);
    gallery.innerHTML = "";
    images.reverse().forEach(img => gallery.appendChild(img));
});

shuffleBtn.addEventListener("click", () => {
    const images = Array.from(gallery.children);

    for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }

    gallery.innerHTML = "";
    images.forEach(img => gallery.appendChild(img));
});
