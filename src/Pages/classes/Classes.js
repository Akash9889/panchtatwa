import React, { useEffect } from "react";
import { classesImages } from "../../assets/images/classes/classesImages";

function ClassesCard({ course }) {
  const renderCarousel = (image) => {
    return (
      <div>
        <img
          className="classes-image"
          loading="lazy"
          style={{ width: "100%" }}
          src={image}
          alt=""
        />
      </div>
    );
  };
  return (
    <div className="classes-card">
      <div className="classes-description-container">
        <p className="classes-description">{course?.title}</p>
      </div>
      <div className="classes-image-container">
        {renderCarousel(course?.image)}
      </div>
    </div>
  );
}

export default function Classes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classesArray = Object.keys(classesImages);

  return (
    <div className="books-main-container">
      <div className="book-card-container">
        {classesArray?.length > 0 ? (
          React.Children.toArray(
            classesArray.map((cls, index) => (
              <ClassesCard key={index} course={classesImages[cls]} />
            ))
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
