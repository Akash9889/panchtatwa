import React, { useState } from "react";
import { photoGalleryImages } from "../../assets/photoGalleryImages";
import Popup from "./Popup";

export default function PhotoGalleryTab() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [imageOpenInPopup, setImageOpenInPopup] = useState(null);

  const handleClick = (image) => {
    setImageOpenInPopup(image);
    setOpenPopUp(!openPopUp);
  };

  const togglePopup = () => {
    setOpenPopUp(!openPopUp);
  };

  return (
    <div className="grid-container">
      {React.Children.toArray(
        photoGalleryImages.map((image) => {
          return (
            <>
              <div
                onClick={() => handleClick(image)}
                key={image.id}
                className="image-box"
              >
                <img className="image" key={image.id} src={image.src} alt="" />
              </div>
            </>
          );
        })
      )}
      {openPopUp && (
        <Popup togglePopup={togglePopup} imageOpenInPopup={imageOpenInPopup} />
      )}
    </div>
  );
}
