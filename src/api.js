export async function fetchImages(page, imagesPerRow) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${imagesPerRow}`);
    return await response.json();
}