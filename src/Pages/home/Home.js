import React from "react";
import { useNavigate } from "react-router-dom";

import Office from "../../assets/images/office.jpg";
import ashram from "../../assets/images/ashramMain.jpg";
import myJourney from "../../assets//images/mobile-journey.jpg";
import myDestination from "../../assets/images/myDestination.JPG";
import myPath from "../../assets/images/myPath.jpg";
import rightArrow from "../../assets/images/right-arrow.svg";
import Guruji from "../../assets/images/members/Guruji.jpeg";
import Priyanka from "../../assets/images/members/Priyanka.jpeg";
import RajeshNarainGupta from "../../assets/images/members/RajeshNarainGupta.jpg";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <img
              className="gradiant-img"
              // style={{ width: "unset" }}
              src={myJourney}
              alt=""
            />
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
            onClick={() => handleNavigation("/path")}
          >
            <img className="gradiant-img center-image" src={myPath} alt="" />
            <div className="title-container">
              <span>Path</span>
              <img className="right-arrow" src={rightArrow} alt="right arrow" />
            </div>
          </div>
          <div
            className="gradiant-image-container"
            onClick={() => handleNavigation("/destination")}
          >
            <img className="gradiant-img" src={myDestination} alt="" />
            <div
              className="title-container"
              onClick={() => handleNavigation("/mission")}
            >
              <span>Destination</span>
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
            The main aim of Panchtatwa is research and re-search in the fields
            of Vastu and Vedic Astrology and the promotion of Vastu in the
            application of Interior Designing, Architecture and Town Planning.
          </p>
          <p>
            We regularly organize workshops, seminars and discussions to
            increase awareness of Vastu in the country. Indian tradition has
            always followed the Vastu concept. However a few earlier generations
            dismissed it as mere superstition. We have a deplorable tendency in
            our country to not accept anything truly Indian, however beneficial,
            until it has been accepted in the west. Now that the western world
            and also the so-called rationalists have started believing in Vastu
            and Astrology, we Indians have also acknowledged their efficacy.{" "}
          </p>
          <p>
            Vastu is an integral part of Astrology and their science should be
            understood and followed together to yield full benefit.{" "}
          </p>
          <p>
            In the field of Astrology our aim is to establish the significance
            of the Panchaang(Hindu Calender), divisional charts and Muhurta in
            daily life, so that more people can accrue the benefits of good
            planetary positions and neutralize the the ill- effects of bad
            transitions. Muhurta is not only the auspicious time but also the
            most practical time to start anything new. Life is a balance between
            fate and freewill. An individual’s Lagna kundali, Yog, and Dasha :
            present and future, is governed by fate, but to make use of good
            transit comes under the domain of free will. This is how maximum
            benefit can be derived from Astrology.
          </p>
        </div>
      </div>
      <div className="parent-container alternate">
        <div className="primary-text-conatiner">
          <h1>Ashram</h1>
          <p>
            On 13th April 2016, that is the Baisakhi Day, Sri Guruji Manoj K
            Juyal started a Sanskrit school in the name of his beloved reverend
            Sri Guruji Acharya Amlanand Shastri. Where he combines the world of
            Eastern knowledge : Vedas, Puranas , Sanskrit language to the
            western subjects of Science and English. The first batch of 15
            Rishikumars has already started their journey as future Saintist.
          </p>
        </div>
        <div className="primary-image-conatiner">
          <img src={ashram} alt="" />
        </div>
      </div>
      <div className="gradiant-container bottom">
        <div className="member-conatiner">
          <div className="member-image-container">
            <img className="member-image" src={Guruji} alt="" />
            <div className="member-name">Sri Guruji Manoj K Juyal</div>
            <span className="member-designation">Patron</span>
          </div>
          <div className="member-image-container">
            <img className="member-image" src={Priyanka} alt="" />
            <div className="member-name">Priyanka Sharma Chugh</div>
            <span className="member-designation">President</span>
          </div>
          <div className="member-image-container">
            <img className="member-image" src={RajeshNarainGupta} alt="" />
            <div className="member-name">Rajesh Narain Gupta</div>
            <span className="member-designation">Chairmen</span>
          </div>
        </div>
      </div>
    </main>
  );
}
