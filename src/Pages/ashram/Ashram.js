import React from "react";
import "./ashram.css";
import {
  ashramMain,
  ashramPoster,
  ashramGalleryImages,
} from "../../assets/images/ashram/ashramImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel({ title, images, customImageStyle }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
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
          images?.map((image) => {
            return (
              <div className="carousel-image-container">
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

export default function Ashram() {
  const ashramImages = Object.keys(ashramGalleryImages);
  return (
    <div className="path-container">
      <span className="path-title">Ashram -</span>
      <div className="path-img-text-wrapper">
        {" "}
        <div className="path-img-container">
          <img className="path-image-1" src={ashramMain} alt="" />
        </div>
        <div className="path-text-container">
          <p>
            - The Panchtatwa Ashram under the patronage of SriGuruji Manoj K
            Juyal is located in the village of Balori, in the district of Pauri
            in Uttarakhand.
          </p>
          <p>
            - The Ashram has a pure and divine aura created by two temples in
            its premises: The Panchmukhi Hanuman ji temple and the Navgraha
            Temple.
          </p>
          <p>
            - This heavenly spot in the lap of Himalayas, untouched by
            civilisation is truly a paradise on Earth.
          </p>
          <p>
            - The natural surroundings of the Ashram promote a routine of simple
            living and deep thinking which automatically de-stresses every
            individual who becomes a part of this sheer bliss.
          </p>
          <p>
            - This experience can best be understood only by visiting this
            little Paradise.
          </p>
          <p>
            - It’s a two to three hour journey from Haridwar, visitors are
            warmly welcomed in the traditional Indian way with garlands and
            Tilak on forehead.
          </p>
          <p>
            - Saatvik food is made with locally grown vegetables and fruits. It
            is served to everyone while sitting on the floor cross-legged which
            ensures that each morsel consumed provides essential energy to the
            body.
          </p>
          <p>
            - Everyone is most welcome to visit. The only request is the prior
            information of two days is given please.
          </p>
          <p>
            - Do visit the Ashram, an authentic heaven on earth, an
            irreplaceable experience not to be missed in this life time.
          </p>
        </div>
      </div>
      <img className="ashram-poster" src={ashramPoster} alt="" />

      <div className="ashram-carousel">
        <h3 className="ashram-carousel-title">Image Carousel</h3>
        {React.Children.toArray(
          ashramImages?.length &&
            ashramImages.map((institute) => {
              return (
                <Carousel
                  title={ashramGalleryImages[institute].title}
                  images={ashramGalleryImages[institute].images}
                  customImageStyle="ashram-carousel-image"
                />
              );
            })
        )}
      </div>
    </div>
  );
}
