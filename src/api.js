export async function fetchGalleryData(count = 4) {
  const randomPage = Math.floor(Math.random() * 100) + 1;
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${randomPage}&limit=${count}`
    );
    return await response.json();
  } catch (error) {
    console.error("Помилка завантаження:", error);
    return [];
  }
}