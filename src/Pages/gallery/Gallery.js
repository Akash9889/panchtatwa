import React, { useState } from "react";
import "./gallery.css";
import PhotoGalleryTab from "./PhotoGallery";
import Tabs from "../../components/Tabs/Tabs";
import VideoGalleryTab from "./VideoGallery";

export default function Gallery() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <main className="gallery-main-container">
      <div className="tabs">
        <Tabs activeButton={activeButton} setActiveButton={setActiveButton} />
      </div>
      {activeButton === 1 && <PhotoGalleryTab />}
      {activeButton === 2 && <VideoGalleryTab />}
    </main>
  );
}
