import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amazonLogo from "../../assets/images/amazonLogo.png";

export default function BookCard({ book }) {
  console.log(book.images);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const renderCarousel = (book) => {
    return (
      <Slider {...settings}>
        {React.Children.toArray(
          book?.images?.map((image) => (
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
      <div className="book-description-container">
        <p className="book-description">{book?.description}</p>
      </div>

      <a
        className="buynow-link"
        href={book.buyLink}
        target="_blank"
        rel="noreferrer"
      >
        Buy now at
        <img className="amazon-logo" src={amazonLogo} alt="buy now at amazon" />
      </a>
    </div>
  );
}
