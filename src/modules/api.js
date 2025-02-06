const apiUrl = "https://picsum.photos/v2/list";
let pageIndex = 1;

export async function loadImages(galleryBody, count = 4) {
   try {
      const response = await fetch(
         `${apiUrl}?page=${pageIndex}&limit=${count}`
      );
      if (!response.ok)
         throw new Error(`HTTP помилка! Статус: ${response.status}`);

      const data = await response.json();

      data.forEach((image) => {
         const img = document.createElement("img");
         img.src = image.download_url;
         img.alt = "some photo";
         galleryBody.appendChild(img);
      });
      pageIndex++;
   } catch (error) {
      console.error(error.message);
   }
}

export function resetPageIndex() {
   pageIndex = 1;
}
