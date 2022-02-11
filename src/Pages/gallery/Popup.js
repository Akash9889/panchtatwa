import React from "react";

export default function Popup({ togglePopup, imageOpenInPopup }) {
  const handleClick = () => {
    togglePopup();
  };
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <img key={imageOpenInPopup.id} src={imageOpenInPopup.src} alt="" />
      </div>
    </div>
  );
}
