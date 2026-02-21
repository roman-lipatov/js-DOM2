const API_URL = 'https://picsum.photos/v2/list';

export async function fetchImagesFromAPI(page, limit) {
    const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Помилка мережі');
    return await response.json();
}