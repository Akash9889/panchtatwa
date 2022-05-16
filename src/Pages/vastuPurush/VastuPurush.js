import React from "react";
import "./vastuPurush.css";
import {
  vpPoster,
  vpLeft,
  vpRight,
  vpCentre,
} from "../../assets/images/vastuPurush/vastuPurushImages";
import { Carousel } from "../ashram/Ashram";

export default function VastuPurush() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="path-container">
      <span className="path-title">Vastu Purush -</span>
      <div className="path-img-text-wrapper">
        {" "}
        <div className="path-img-container">
          <img className="path-image-1" src={vpPoster} alt="" />
        </div>
        <div className="path-text-container">
          <p>
            <b style={{ fontSize: "1.5rem" }}>
              Sri Guruji Manoj K Juyal constructed the world’s first Vastu
              Purush temple at Panchtatwa’s head office New Delhi.
            </b>
          </p>
          <p>
            Vastu Purush is the omnipotent, Divine being of all construction be
            at home offices, hotels, etc.
          </p>
          <p>
            Origin of Vastu shastra is related to the birth of Vastu Purusha.
          </p>
          <p>
            Vastu Purusha was born on Krishna Paksha, Bhadrapad masa, Tritya
            tithi, Shanivar, Kritika Nakshtra, Vyatipat yoga, Vishti Karan,
            during Bhadra in Kulika muhurta.
          </p>
          <p>
            This was the very first time the Vastu guideline was introduced in
            ancient Indian Architecture. This is like how Indian construction
            was born on 26th Jan 1950 that is the Indian constitution came into
            being.
          </p>
          <p>
            The beauty is that these ancient guidelines of Vastu adjust as
            relevant in the present.
          </p>
        </div>
      </div>
      <div className="vp-carousel-wrapper">
        <Carousel
          title="Vastu Temple"
          images={[vpLeft, vpCentre, vpRight]}
          customImageStyle="vp-carousel-image"
        />
      </div>
    </div>
  );
}
