import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import GalleryControls from "./components/GalleryControls";

const App = () => {
  const [images, setImages] = useState([]);

  const loadImages = async (count = 4) => {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${count}`);
    const newImages = await response.json();
    const loadedImages = newImages.map(image => image.download_url); // Видалено "?w=100&h=100"
    setImages(prevImages => [...prevImages, ...loadedImages]);
  } catch (error) {
    console.error("Помилка завантаження:", error);
  }
};

  useEffect(() => {
    loadImages(4);
  }, []);

  return (
    <div className="app">
      <h1>Галерея</h1>
      <Gallery images={images} />
      <GalleryControls
        loadMore={() => loadImages(4)}
        clear={() => setImages([])}
        removeLast={() => setImages(prev => prev.slice(0, -1))}
        reverse={() => setImages(prev => [...prev].reverse())}
      />
    </div>
  );
};

export default App;
