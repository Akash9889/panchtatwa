import React from "react";
import Card from "../../components/Card/Card";
import { institutesImages } from "../../assets/images/workShops/workShopImages";

export default function MyJourney() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const institutesArray = Object.keys(institutesImages);

  return (
    <div className="path-container">
      <span className="path-title">Workshops -</span>
      <div className="path-img-text-wrapper">
        <div className="path-text-container">
          <p className="workshop-text">
            <b style={{ fontSize: "1.5rem" }}>SriGuruji Manoj K Juyal</b> is a
            visiting faculty member in various premier institutes across India
            and conducts various workshops in the capital as well as in other
            cities throughout the country. The gamut of institutes with which Dr
            Juyal is attached includes:
          </p>
          <div>
            {React.Children.toArray(
              institutesArray?.length &&
                institutesArray.map((institute) => {
                  return (
                    <Card
                      title={institutesImages[institute].title}
                      images={institutesImages[institute].images}
                    />
                  );
                })
            )}
          </div>
          <span className="path-title">Online Workshops -</span>
          <p className="workshop-text">
            During the phase of pandemic when we couldn’t step outside, our
            guruji showed how we can reflect within and learn something that
            will do well to our lives by regularly conducting online workshops
            with colleges like Jims and with NBT Rangmanch (newspaper)
          </p>
          <p>His topic of discussions were :</p>
        </div>
      </div>
    </div>
  );
}
