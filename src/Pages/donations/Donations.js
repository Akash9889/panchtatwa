import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./donations.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { donationImages } from "../../assets/images/donations/donationImages";

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
    lazyLoad: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    adaptiveHeight: true,
  };

  const renderCarousel = (images) => {
    return (
      <Slider {...settings}>
        {React.Children.toArray(
          images.map((image, index) => (
            <div key={index}>
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
            donationImages?.childSponserInsde2,
            donationImages?.childSponserInsde3,
            donationImages?.childSponserInsde4,
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
          {renderCarousel([
            // donationImages?.annDaan1,
            // donationImages?.annDaan2,
            donationImages?.annDaan3,
          ])}
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
            donationImages?.nitiyaKarmPoojaCover,
            donationImages?.nitiyaKarmPoojaInside1,
            donationImages?.nitiyaKarmPoojaInside2,
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
            donationImages?.gauDaanCover,
            donationImages?.gauDaanInside1,
            donationImages?.gauDaanInside2,
            donationImages?.gauDaanInside3,
            donationImages?.gauDaanInside4,
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
            donationImages?.kanyaDaanCover,
            donationImages?.kanyaDaanInside1,
            donationImages?.kanyaDaanInside2,
            donationImages?.kanyaDaanInside3,
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
          {renderCarousel([
            donationImages?.extraDonation1,
            donationImages?.extraDonation2,
          ])}
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
