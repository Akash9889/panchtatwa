import React from "react";
import "./workshop.css";
import {
  institutesImages,
  onlineWS1,
  onlineWS2,
  nbtArticles,
} from "../../assets/images/workShops/workShopImages";

export function WorkshopCard({ title, images, customImageStyle }) {
  return (
    <>
      {React.Children.toArray(
        images?.map((image) => {
          return (
            <div className="workshop-card">
              <div className="workshop-title">{title}</div>
              <img
                className="workshop-image"
                src={image}
                alt={`${title} workshop`}
              />
            </div>
          );
        })
      )}
    </>
  );
}

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
            <b style={{ fontSize: "1.5rem" }}>Sri Guruji Manoj K Juyal</b> is a
            visiting faculty member in various premier institutes and
            universities across India.
          </p>
          <div className="workshop-card-container">
            {React.Children.toArray(
              institutesArray?.length &&
                institutesArray.map((institute) => {
                  return (
                    <WorkshopCard
                      title={institutesImages[institute].title}
                      images={institutesImages[institute].images}
                    />
                  );
                })
            )}
          </div>
          <div className="path-title">Online Workshops -</div>
          <p className="workshop-text">
            During the phase of pandemic when we couldn’t step outside, our
            guruji showed how we can reflect within and learn something that
            will do well to our lives by regularly conducting online workshops
            with colleges like Jims and with NBT Rangmanch (newspaper)
          </p>
          <div className="online-container">
            <img className="online-image" src={onlineWS1} alt="" />
            <img className="online-image" src={onlineWS2} alt="" />
          </div>
          <p style={{ fontSize: "1.5rem", color: "#cd6727" }}>
            His topic of discussions were :
          </p>
          <div className="nbt-articles-container">
            {nbtArticles &&
              nbtArticles.length &&
              nbtArticles.map((article) => (
                <img className="nbt-articles-image" src={article} alt="" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
