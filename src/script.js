const gallery = document.getElementById("gallery");
const loadBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clearGallery");
const removeBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverseGallery");

let page = 1;

async function fetchImgs(pageNum = 1, limit = 4) {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${pageNum}&limit=${limit}`
  );
  return response.json();
}

async function loadImgs() {
  const images = await fetchImgs(page);
  displayImgs(images);
  page++;
}

function displayImgs(images) {
  images.forEach((img) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.download_url;
    gallery.appendChild(imgElement);
  });
}

function clearGallery() {
  gallery.innerHTML = "";
  page = 1;
}

function removeLastImg() {
  const imgs = gallery.children;
  if (imgs.length > 0) {
    gallery.removeChild(imgs[imgs.length - 1]);
  }
}

function reverseGallery() {
  const imgs = gallery.children;
  for (let i = imgs.length - 1; i >= 0; i--) {
    gallery.appendChild(imgs[i]);
  }
}

loadImgs();

loadBtn.addEventListener("click", loadImgs);
clearBtn.addEventListener("click", clearGallery);
removeBtn.addEventListener("click", removeLastImg);
reverseBtn.addEventListener("click", reverseGallery);
