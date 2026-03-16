export async function fetchImages(page = 1) {

    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=20`);
    const data = await response.json();

    return data;

}