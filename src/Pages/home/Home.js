import React from "react";
import { useNavigate } from "react-router-dom";

import Office from "../../assets/images/office.jpg";
import ashram from "../../assets/images/ashramMain.jpeg";
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
              className="gradiant-img" loading="lazy"
              // style={{ width: "unset" }}
              src={myJourney}
              alt=""
            />
            <div
              className="title-container"
              onClick={() => handleNavigation("/journey")}
            >
              <span>Journey</span>
              <img className="right-arrow" loading="lazy" src={rightArrow} alt="right arrow" />
            </div>
          </div>
          <div
            className="gradiant-image-container center-image"
            onClick={() => handleNavigation("/path")}
          >
            <img className="gradiant-img center-image" src={myPath} alt="" />
            <div className="title-container">
              <span>Path</span>
              <img className="right-arrow" loading="lazy" src={rightArrow} alt="right arrow" />
            </div>
          </div>
          <div
            className="gradiant-image-container"
            onClick={() => handleNavigation("/destination")}
          >
            <img className="gradiant-img" loading="lazy" src={myDestination} alt="" />
            <div
              className="title-container"
              onClick={() => handleNavigation("/mission")}
            >
              <span>Destination</span>
              <img className="right-arrow" loading="lazy" src={rightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="parent-container">
        <div className="primary-image-conatiner">
          <img src={Office} loading="lazy" alt="" />
        </div>
        <div className="primary-text-conatiner">
          <h1>AIM OF PANCHTATWA</h1>
          <p>
            At Panchtatwa, our primary goal is to conduct research and re-search the ancient Vedic sciences,
            with a special focus on Vastu, Astrology, and other related fields.
          </p>
          <p>
            We organize classes, workshops, and seminars to promote Vedic wisdom across the country.
            Through social media and other networking platforms, we share knowledge on topics such as tithi (lunar days),
            the significance of festivals in Sanatan Dharma, and more.
          </p>
          <p>
            We aim to bridge the gap between ancient Vedic wisdom and modern techniques. By integrating the study of the Vedas,
            Upanishads, and Puranas with modern tools like Lecher antennas, GDV cameras, and aura scanning technology,
            Panchtatwa ensures that students learn holistically.
          </p>
          <p>
            To further extend this mission, we have opened the Acharya Amlanand Shastri Sanskrit Vidyalaya.
            This institution offers a blend of traditional Vedic subjects alongside modern disciplines like mathematics,
            science, and computer studies. Our rishikumars (students) are equipped to master both ancient and contemporary knowledge,
            empowering them to perform pujas, karmakand, and deepen their understanding of the Vedas.
          </p>
          <p>
            Situated in the serene Garhwal Himalayas at Srinagar Garhwal, our ashram provides free boarding and educational
            facilities to all students, making ancient knowledge accessible to everyone.
          </p>
          <p>
            Historically, India was known as "Sone ki Chidiya", a golden bird of wealth, knowledge, and spirituality.
            A key part of this heritage is the Kailash Mansarovar region, which once formed part of the perfect North-East
            quadrant of India, as per Vastu principles. However, with this area now under Chinese jurisdiction,
            we believe this fundamental Vastu imbalance contributes to missed financial and spiritual opportunities for the country.
          </p>
          <p>
            Our long-term vision is to restore India’s full spiritual potential. While this may seem like a distant dream,
            we remain hopeful that one day, steps will be taken toward reclaiming this lost part of our heritage.
          </p>
        </div>
      </div>
      <div className="parent-container alternate">
        <div className="primary-text-conatiner">
          <h1>Ashram</h1>

          <p>
            On 13th April 2016, the auspicious day of Baisakhi, SriGuruji Dr. Manoj K. Juyal founded a Sanskrit school dedicated to his revered Guru, SriGuruji Acharya Amlanand Shastri. This institution beautifully bridges the ancient Eastern knowledge of the Vedas, Puranas, and Sanskrit with modern subjects such as Science and English. The first batch of 15 Rishikumars has already embarked on their journey to become future saints and scholars, continuing the legacy of spiritual and intellectual enlightenment.
            {/* On 13th April 2016, that is the Baisakhi Day, SriGuruji Dr.Manoj K
            Juyal started a Sanskrit school in the name of his beloved reverend
            Sri Guruji Acharya Amlanand Shastri. Where he combines the world of
            Eastern knowledge : Vedas, Puranas , Sanskrit language to the
            western subjects of Science and English. The first batch of 15
            Rishikumars has already started their journey as future Saintist. */}
          </p>
        </div>
        <div className="primary-image-conatiner">
          <img src={ashram} loading="lazy" alt="" />
        </div>
      </div>
      <div className="gradiant-container bottom">
        <div className="member-conatiner">
          <div className="member-image-container">
            <img className="member-image" loading="lazy" src={Guruji} alt="" />
            <div className="member-name">SriGuruji Dr.Manoj K Juyal</div>
            <span className="member-designation">Patron</span>
          </div>
          <div className="member-image-container">
            <img className="member-image" loading="lazy" src={Priyanka} alt="" />
            <div className="member-name">Priyanka Sharma Chugh</div>
            <span className="member-designation">President</span>
          </div>
          <div className="member-image-container">
            <img className="member-image" loading="lazy" src={RajeshNarainGupta} alt="" />
            <div className="member-name">Rajesh Narain Gupta</div>
            <span className="member-designation">Non-Executive Chairman</span>
            <span className="member-designation">Advisory Board</span>
          </div>
        </div>
      </div>
    </main>


  );
}
