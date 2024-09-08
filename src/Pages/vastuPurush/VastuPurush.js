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
          <img loading="lazy" className="path-image-1" src={vpPoster} alt="" />
        </div>
        <div className="path-text-container">
          <p>
            <b style={{ fontSize: "1.5rem" }}>
              SriGuruji Dr.Manoj K Juyal constructed the world's first Vastu Purush
              temple at Panchtatwa's head office, Noida.
            </b>
          </p>
          <p>
            One of the story about origin of Vastu Shastra is related to the
            birth of Vastu Purush.
          </p>
          <p>
            A fierce battle between lord Shiva and demon Andhaka took place.
            During course of battle, few drops of perspiration from lord Shiva's
            body fell on the ground. Out of these drops emerged an horrifying
            figure . When he walked the earth trembled, when he breathed the
            wind blew, when he drank, the water level went down . He was the
            manifestation of unrestrained chaotic energy. The demon needed to be
            contained since he was threatening to wreak havoc throughout the
            earth.
          </p>
          <p>
            The terrified gods went to Brahma. Brahma told them to hold the
            person faced down. 45 dietes pressed him down including lord Brahma
            in the middle. He complained to Brahma about his innocence. Brahma
            blessed him by giving him name and status of Vastu Purush, who will
            be the presiding diety of all plots and buildings, offering wil have
            to be made to him. If anybody failed to do so, then he may eat them.
          </p>
          <p>
            This is a story. The truth is once in ancient time, there was an
            immense destructive force which was regulated and controlled by 45
            deities I.e. engineers. There set of guidelines or regulations or by
            laws was termed as Vastu Purush. Vastu Purush was born on Krishna
            paksh, Bhadrapad masa, Tritya tithi, Shaniwar, Kritika Nakshatra,
            Vyatipat yog, Vishti karan during Bhadra in Kulika muhurta. This was
            the very first time, the vastu guidelines were introduced in ancient
            Indian Architecture. This is like Indian constitution was born on
            26th January 1950 I.e. Indian constitution came into being.
          </p>
          <p>
            The beauty is that, these ancient guidelines of Vastu are just as
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
