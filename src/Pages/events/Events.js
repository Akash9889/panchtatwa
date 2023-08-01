import React from "react";
import { eventsImages } from "../../assets/images/events/eventsImages";

function EventsBox({ title, images, customImageStyle }) {
  return (
    <div className="event-box">
      <div className="event-title">{title}</div>
      <div className="event-images-container">
        {React.Children.toArray(
          images?.map((image, index) => {
            return (
              <img
               loading="lazy"
                key={index}
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

export default function Events() {
  const eventsArray = Object.keys(eventsImages);
  return (
    <div className="events-container">
      {React.Children.toArray(
        eventsArray?.length &&
          eventsArray.map((institute, index) => {
            return (
              <EventsBox
                key={index}
                title={eventsImages[institute].title}
                images={eventsImages[institute].images}
              />
            );
          })
      )}
    </div>
  );
}
