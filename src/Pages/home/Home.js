import React from "react";
import { useNavigate } from "react-router-dom";

import Office from "../../assets/images/office.jpg";
import ashram from "../../assets/images/ashramMain.jpg";
import gurujiPhoto from "../../assets/images/gurujiPhoto.jpg";
import left from "../../assets/images/left.jpg";
import center from "../../assets/images/center.jpg";
import rightArrow from "../../assets/images/right-arrow.svg";

export default function Home() {
  const history = useNavigate();
  const handleNavigation = (route) => {
    history(route);
  };

  return (
    <main className="main-container">
      <div className="gradiant-container">
        <h1 className="gradiant-heading">Panchtatwa - The law of Creation</h1>
        <div className="gradiant-image-container-wrapper">
          <div
            className="gradiant-image-container"
            onClick={() => handleNavigation("/journey")}
          >
            <img className="gradiant-img" src={gurujiPhoto} alt="" />
            <div
              className="title-container"
              onClick={() => handleNavigation("/journey")}
            >
              <span>Journey</span>
              <img className="right-arrow" src={rightArrow} alt="right arrow" />
            </div>
          </div>
          <div
            className="gradiant-image-container center-image"
            onClick={() => handleNavigation("/shri-guruji")}
          >
            <img className="gradiant-img center-image" src={center} alt="" />
            <div className="title-container">
              <span>Shri Guruji</span>
              <img className="right-arrow" src={rightArrow} alt="right arrow" />
            </div>
          </div>
          <div
            className="gradiant-image-container"
            onClick={() => handleNavigation("/shri-guruji")}
          >
            <img className="gradiant-img" src={left} alt="" />
            <div
              className="title-container"
              onClick={() => handleNavigation("/mission")}
            >
              <span>Mission</span>
              <img className="right-arrow" src={rightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="parent-container">
        <div className="primary-image-conatiner ">
          <img src={Office} alt="" />
        </div>
        <div className="primary-text-conatiner">
          <h1>AIM OF PANCHTATWA</h1>
          <p>
            The main aim of Panchtatwa is to do research and intensive study in
            the field of Vastu, Astrology & other Vedic subjects. The main
            objective being the promotion of Vastu in the application of
            Interior Designing, Architecture and Town Planning. For this our
            effort is to include Vastu as a subject in the syllabus of Interior
            Designing and Architecture. Vastu is called As Kosala Koscli in
            Bali, Feng Shui in China, Bau-Biology in west, Geomancy in Egypt,
            Vintana in Madagascar. Our aim is to bring all these sciences on one
            platform so as to extract maximum benefits for the mankind. Vastu is
            the science of arrangement of five elements of nature "IF WE ARE ONE
            WITH NATURE, WE ARE ONE WITH GOD" Vastu teaches us the way to live
            in accordance with nature. We are holding workshops, seminars, Q & A
            sessions etc. to increase the awareness of vastu in the country.
            Earlier in the vedic era it was a part of our lifestyle, we at
            panchtatwa aim to give Vastu the same status in the present day
            society. Apart from these aims and objectives we have a social and
            cultural cause. Eashyan kone is presided over by Lord Shiva. The
            abode of Lord Shiva is Mt. Kailash, which is at the North-east
            corner of India. At one point of time it was very much in our
            territory. That might have been the reason that once India was
            called "SONE KICHIDIYA " today this region is in Tibet which is
            under the control of China. "OUR SHIV IS NOT WITH US AND NOBODY IS
            WITH HIM" Mt. Kailash is approximately lOOkms from Badrinath. We
            jointly put all our efforts to include the Holy Kailash in our
            territory.
          </p>
        </div>
      </div>
      <div className="parent-container alternate">
        <div className="primary-text-conatiner">
          <h1>Ashram</h1>
          <p>
            The Panchtatwa Ashram under the patronage of SriGuruji Manoj K Juyal
            is located in the village of Balori, in the district of Pauri in
            Uttarakhand.
          </p>
          <p>
            The Ashram has a pure and divine aura created by two temples in its
            premises: The Panchmukhi Hanuman ji temple and the Navgraha Temple.
          </p>
        </div>
        <div className="primary-image-conatiner">
          <img src={ashram} alt="" />
        </div>
      </div>
    </main>
  );
}
