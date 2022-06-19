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
          {/* <p className="workshop-text">
            <b style={{ fontSize: "1.5rem" }}>Sri Guruji Manoj K Juyal</b> is a
            visiting faculty member in various premier institutes and
            universities across India.
          </p> */}
          <div className="workshop-card-container">
            {React.Children.toArray(
              dignitariesArray?.length &&
                dignitariesArray.map((institute) => {
                  return (
                    <WorkshopCard
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
