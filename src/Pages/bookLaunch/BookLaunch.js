import React from "react";
import { WorkshopCard } from "../workshop/Workshop";
import { blImages } from "../../assets/images/bookLaunch/bookLaunchImages";

export default function BookLaunch() {
  const bookLaunchArray = Object.keys(blImages);
  return (
    <div className="path-container">
      <span className="path-title">Authored Books -</span>
      <div className="path-img-text-wrapper">
        <div className="path-text-container">
          <div className="workshop-card-container">
            {React.Children.toArray(
              bookLaunchArray?.length &&
                bookLaunchArray.map((institute, index) => {
                  return (
                    <WorkshopCard
                      key={index}
                      title={blImages[institute].title}
                      images={blImages[institute].images}
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
