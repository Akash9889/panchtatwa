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
        <div className="primary-image-conatiner">
          <img src={Office} alt="" />
        </div>
        <div className="primary-text-conatiner">
          <h1>AIM OF PANCHTATWA</h1>
          <p>
            The aim of Panchtatwa is to do research and re-search in the field of Vastu, Astrology and other Vedic sciences.
          </p>
          <p>
            We conduct classes and organise workshops and seminars to promote vedic wisdom in the country.
            Panchtatwa trys to propagate, through social media and networking sites, the knowledge on various
            topics such as what is tithi, the importance of festivals in our sanatan dharma etc.
          </p>
          <p>
            Our moto is to combine vedic wisdom with modern values and techniques. Panchtatwa promotes the study of the Vedas,
            the Upanishads and the Purans and at the same time encourage our students to learn and use modern
            techniques like Lecher antenna, GDV camera for aura scanning. To further extend this knowledge,
            Panchtatwa has opened a Sanskrit school in the name of Acharya Amlanand Shastri Sanskrit vidyalaya
            where we are offering the study of these vedic subjects along with modern subjects such as maths,
            science, computer etc, to our rishikumars so that they will be well versed in the Vedic subjects as
            well as the modern subjects/sciences and also will be fully capable of to perform any puja, karamkand
            and learning about Vedas. Our ashram is in Garhwal Himalayas at Srinagar Garhwal, where we are providing
            boarding and other learning facilities, free of cost for all the children.
          </p>
          <p>
            Our other main focus is that at one point of time India was called "Sone ki Chidiya" reason being, at that time, Kailash Mansarover,
            the abode  of Shiva was in the perfect North East of India but now is a part of China. Shiva is the deity of
            North East. In other words, we can say that our North East is cut off from us  According to vastu, it is a
            fundamental dosh as one will be deprived of financial opportunities and enlightenment. So it is our political
            aim to include that area again in India. Yes, it is a very far fetch aim but hope that one day our
            government will take a step towards it.
          </p>
        </div>
      </div>
      <div className="parent-container alternate">
        <div className="primary-text-conatiner">
          <h1>Ashram</h1>

          <p>
            On 13th April 2016, that is the Baisakhi Day, SriGuruji Dr.Manoj K
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
            <div className="member-name">SriGuruji Dr.Manoj K Juyal</div>
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
            <span className="member-designation">Non-Executive Chairman</span>
            <span className="member-designation">Advisory Board</span>
          </div>
        </div>
      </div>
    </main>


  );
}
