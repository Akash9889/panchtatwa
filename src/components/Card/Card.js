import React from "react";
import "./card.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Card({ title, images, customImageStyle }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderCarousel = (images) => {
    return (
      <Slider {...settings}>
        {React.Children.toArray(
          images?.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className={
                    customImageStyle ? customImageStyle : "card-image-1"
                  }
                  src={image}
                  alt=""
                />
              </div>
            );
          })
        )}
      </Slider>
    );
  };
  return (
    <div style={{ paddingBottom: "50px" }}>
      {title && (
        <div>
          <p className="card-title">{title}</p>
        </div>
      )}
      <div>{renderCarousel(images)}</div>
    </div>
  );
}
