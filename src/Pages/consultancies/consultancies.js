import React from "react";
import { consultanciesImages } from "../../assets/images/consultancies/consultanciesImages";

function EventsBox({ title, images, customImageStyle }) {
  return (
    <div className="event-box">
      <div className="event-title">{title}</div>
      <div className="event-images-container">
        {React.Children.toArray(
          images?.map((image) => {
            return (
              <img
                className="event-images"
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

export default function Consultancies() {
  const consultanciesArray = Object.keys(consultanciesImages);
  return (
    <div className="events-container">
      {/* <p className="events-title"> </p> */}
      {React.Children.toArray(
        consultanciesArray?.length &&
          consultanciesArray.map((institute) => {
            return (
              <EventsBox
                title={consultanciesImages[institute].title}
                images={consultanciesImages[institute].images}
              />
            );
          })
      )}
    </div>
  );
}
