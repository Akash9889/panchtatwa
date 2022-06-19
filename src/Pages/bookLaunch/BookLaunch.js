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
          {/* <p className="workshop-text">
            <b style={{ fontSize: "1.5rem" }}>Authored Books</b>
          </p> */}
          <div className="workshop-card-container">
            {React.Children.toArray(
              bookLaunchArray?.length &&
                bookLaunchArray.map((institute) => {
                  return (
                    <WorkshopCard
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
