import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BookCard({ book }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderCarousel = (images) => {
    return (
      <Slider {...settings}>
        {React.Children.toArray(
          images.map((image) => (
            <div>
              <img style={{ height: "300px" }} src={image} alt="" />
            </div>
          ))
        )}
      </Slider>
    );
  };
  return (
    <div className="book-card">
      <div className="book-image">{renderCarousel(book)}</div>
    </div>
  );
}
