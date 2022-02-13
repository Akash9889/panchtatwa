import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./donations.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import annDaan1 from "../../assets/images/donations/aanDaanCover.jpg";
import annDaan2 from "../../assets/images/donations/aanDaanInside2.jpg";
import annDaan3 from "../../assets/images/donations/aanDaanInside3.jpg";
import childSponserInsde1 from "../../assets/images/donations/childSponserCover.jpeg";
import childSponserInsde2 from "../../assets/images/donations/childSponserInsde2.jpg";
import childSponserInsde3 from "../../assets/images/donations/childSponserInsde2.jpg";
import childSponserInsde4 from "../../assets/images/donations/childSponserInsde3.jpg";

import gauDaanCover from "../../assets/images/donations/gauDaanCover.jpg";
import gauDaanInside1 from "../../assets/images/donations/gauDaanInside1.jpg";
import gauDaanInside2 from "../../assets/images/donations/gauDaanInside2.jpg";
import gauDaanInside3 from "../../assets/images/donations/gauDaanInside3.jpg";
import gauDaanInside4 from "../../assets/images/donations/gauDaanInside4.jpg";

import nitiyaKarmPoojaCover from "../../assets/images/donations/nitiyaKarmPoojaCover.jpeg";
import nitiyaKarmPoojaInside1 from "../../assets/images/donations/nitiyaKarmPoojaInside1.jpg";
import nitiyaKarmPoojaInside2 from "../../assets/images/donations/nitiyaKarmPoojaInside2.jpg";

import kanyaDaanCover from "../../assets/images/donations/kanyaDaanCover.JPG";
import kanyaDaanInside1 from "../../assets/images/donations/kanyaDaanInside1.JPG";
import kanyaDaanInside2 from "../../assets/images/donations/kanyaDaanInside2.JPG";
import kanyaDaanInside3 from "../../assets/images/donations/kanyaDaanInside3.JPG";

export default function Donations() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  const renderCarousel = (images) => {
    return (
      <Slider {...settings}>
        {React.Children.toArray(
          images.map((image) => (
            <div>
              <div
                className="donations-image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))
        )}
      </Slider>
    );
  };

  return (
    <div className="donations-container">
      <span className="donations-title">Donations</span>
      <div className="donations-box1">
        <div className="donations-image">
          {renderCarousel([
            childSponserInsde1,
            childSponserInsde2,
            childSponserInsde3,
            childSponserInsde4,
          ])}
        </div>

        <div className="donations-text-container">
          <span className="donations-subtitle">
            शिक्षा मित्र - Sponsor a child’s education.
          </span>
          <p>
            We at Panchtatwa Ashram provide schooling to children of
            neighbouring villages whose parents unfortunately cannot afford
            their education. Also we run a Sanskrit School by the name of
            Acharya Amlanand Shastri Vidyalaya since 2016.
          </p>
          <p>&#x20B9; 5100/- (per month, per student)</p>
          <p>*tuition fee, books, stationary and uniform.</p>
          <div>
            <Link className="link" to="/contact-us">
              &nbsp;Know more...
            </Link>
          </div>
        </div>
      </div>
      <div className="donations-box1">
        <div className="donations-image">
          {renderCarousel([annDaan1, annDaan2, annDaan3])}
        </div>
        <div className="donations-text-container">
          <span className="donations-subtitle">
            अन्न दान – Help us feed the occupants
          </span>
          <p>
            Managing the Ashram requires a big strength which in return takes up
            a whole lot of resources. Money or groceries (like –rice, pulses,
            cereals, flour, grains, sugar, oil, spices, etc.)
          </p>
          <div>
            <Link className="link" to="/contact-us">
              &nbsp;Know more...
            </Link>
          </div>
        </div>
      </div>
      <div className="donations-box1">
        <div className="donations-image">
          {renderCarousel([
            nitiyaKarmPoojaCover,
            nitiyaKarmPoojaInside1,
            nitiyaKarmPoojaInside2,
          ])}
        </div>
        <div className="donations-text-container">
          <span className="donations-subtitle">
            नित्य कर्म पुजा – Panchmukhi Hanumanji Temple
          </span>
          <p>
            Seek hanuman ji’s blessing in our one of a kind auspicious temple by
            offering prayers to him daily, for your goodness of wellbeing.
          </p>
          <p>&#x20B9; 5100/- (per month)</p>
          <p>*पंडित दक्षणा, पुजा की सामग्री, अखंड जोत, प्रसाद, अदि</p>
          <div>
            <Link className="link" to="/contact-us">
              &nbsp;Know more...
            </Link>
          </div>
        </div>
      </div>
      <div className="donations-box1">
        <div className="donations-image">
          {renderCarousel([
            gauDaanCover,
            gauDaanInside1,
            gauDaanInside2,
            gauDaanInside3,
            gauDaanInside4,
          ])}
        </div>
        <div className="donations-text-container">
          <span className="donations-subtitle">
            गौ सेवा - Nursing and nourishment of cattle
          </span>
          <p>
            Cow being the holiest of all the animals, we nurture them with a lot
            of love and care.
          </p>
          <p>&#x20B9; 1100/- (per month)</p>
          <p>*feed and fodder, etc.</p>
          <div>
            <Link className="link" to="/contact-us">
              &nbsp;Know more...
            </Link>
          </div>
        </div>
      </div>
      <div className="donations-box1">
        <div className="donations-image">
          {renderCarousel([
            kanyaDaanCover,
            kanyaDaanInside1,
            kanyaDaanInside2,
            kanyaDaanInside3,
          ])}
        </div>
        <div className="donations-text-container">
          <span className="donations-subtitle">
            कन्या दान – For our daughters
          </span>
          <p>
            In Hinduism, “kanyadaan” is considered the most sacred of all the
            rituals as it is a privilege to perform it. Stating this, it is
            important that it should be done in a proper ceremony. Also doing
            this for an under privileged girl is a very big charity in every
            sense.
          </p>
          <p>*&#x20B9; 51000/- per wedding</p>
          <div>
            <Link className="link" to="/contact-us">
              &nbsp;Know more...
            </Link>
          </div>
        </div>
      </div>
      <div className="donations-box1">
        <div className="donations-image">
          {renderCarousel([annDaan1, annDaan2, annDaan3])}
        </div>
        <div className="donations-text-container">
          <span className="donations-subtitle">
            अन्य सेवा – Managing the Ashram
          </span>
          <p>Running any community requires an everyday expenditure.</p>
          <p>
            *includes ashram maintenance, community services, medical services,
            social services, general administration, housekeeping, electrical &
            water bills, staff salary, etc.
          </p>
          <p>*particulars which will be provided by your donation.</p>
          <div>
            <Link className="link" to="/contact-us">
              &nbsp;Know more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
