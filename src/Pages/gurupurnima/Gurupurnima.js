import React from "react";
import "./gurupurnima.css";
import { gurupurnimaImages } from "../../assets/images/gurupurnima/gurupurnimaImages";

function GurupurnimaBox({ title, images, customImageStyle }) {
  return (
    <div className="gurupurnima-box">
      <div className="gurupurnima-title">{title}</div>
      <div className="gurupurnima-images-container">
        {React.Children.toArray(
          images?.map((image, index) => {
            return (
              <img
                key={index}
                className="gurupurnima-images"
                src={image}
                alt={`${title} workshop`}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default function Gurupurnima() {
  const gurupurnimasArray = Object.keys(gurupurnimaImages);
  return (
    <div className="gurupurnima-container">
      {React.Children.toArray(
        gurupurnimasArray?.length &&
          gurupurnimasArray.map((institute, index) => {
            return (
              <GurupurnimaBox
                key={index}
                title={gurupurnimaImages[institute].title}
                images={gurupurnimaImages[institute].images}
              />
            );
          })
      )}
    </div>
  );
}
