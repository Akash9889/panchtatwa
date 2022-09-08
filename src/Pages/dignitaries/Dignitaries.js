import React from "react";
import { WorkshopCard } from "../workshop/Workshop";
import { dignitariesImages } from "../../assets/images/dignitaries/dignitariesImages";

export default function Dignitaries() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dignitariesArray = Object.keys(dignitariesImages);

  return (
    <div className="path-container">
      <span className="path-title">Dignitaries -</span>
      <div className="path-img-text-wrapper">
        <div className="path-text-container">
          <div className="workshop-card-container">
            {React.Children.toArray(
              dignitariesArray?.length &&
                dignitariesArray.map((institute, index) => {
                  return (
                    <WorkshopCard
                      key={index}
                      title={dignitariesImages[institute].title}
                      images={dignitariesImages[institute].images}
                    />
                  );
                })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
