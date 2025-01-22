export const imagesPerRow = 4;

export async function fetchImages(page) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${imagesPerRow}`);
    return await response.json();
}
