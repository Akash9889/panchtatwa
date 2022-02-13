import React from "react";
import "./myjourney.css";
import { Link } from "react-router-dom";

export default function MyJourney() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="journey-container">
      <span className="journey-title">Shri Guruji Manoj k Joyal</span>

      <div className="journey-box1">
        <div className="journey-image"></div>

        <div className="journey-text-container">
          <span className="journey-subtitle">Self</span>
          <p>
            SriGuruji Manoj K Juyal is an erudite scholar of Vastu with
            doctorate in Astrology.
          </p>
          <p>
            Upto 1991, he was a student excelling in different branches of
            studies like Graduation, Post-Graduation, Interior Designing, French
            Language and Translation etc.
          </p>
          <p>
            After 1991, he went to an Ashram in Himalayas where he spent several
            years with his guruji, Acharya Amlanand Shastri, imbibing vast
            oceans of knowledge from the vedas, on Astrology, Vastu and Various
            esoteric practices like Mantra Chikitsa, Kundalini Jagran, Chakra
            Sadhna, Aura Reading and Spritual Healing.
          </p>
          <p>
            After 1998, he came back to normal life and started his career as
            visiting faculty of Vastu and Jyotish in various Premiere institutes
            across India.
          </p>
          <p>
            In 2004, all his disciples, students and associates joined together
            to form the organization “Panchtatwa-The Law of Creation” which has
            been patronized by himself. Now his individual cause has been
            promoted by “Panchtatwa” under his able guidance.
          </p>
          <p>
            Apart from his academic qualifications, our SriGuruji is a man of
            talent and is a profound –
          </p>
        </div>
      </div>
      <div className="journey-box1">
        <div className="journey-image"></div>
        <div className="journey-text-container">
          <span className="journey-subtitle">Teacher</span>
          <p>
            Nothing gives him more happiness and fulfilment than teaching and
            spreading his vast knowledge among his disciples. Listening to all
            the myths and wrongful information on everyday basis, seeing how
            little Indians know about our own Vedas & Vedic literature, also
            Indian heritage, his aim is to illuminate all. Panchtatwa offers
            basic and advance courses in Astrology & Vastu. More than 500
            students have passed out from the institute and are serving the
            society at large.{" "}
            <Link className="link" to="/courses">
              &nbsp;Know more...
            </Link>
          </p>
        </div>
      </div>
      <div className="journey-box1">
        <div className="journey-image"></div>
        <div className="journey-text-container">
          <span className="journey-subtitle">Poet</span>
          <p>
            Adding to his list of virtues, one which is admired the most is his
            poems. Reading them opens up doors straight to his heart and mind.
            The in-depth meaning behind the poems gives one inspiration to look
            within and do better for the society. From a very young age his
            poems started publishing in renowned newspapers and magazines.
            <Link className="link" to="/courses">
              &nbsp;Know more...
            </Link>
          </p>
        </div>
      </div>
      <div className="journey-box1">
        <div className="journey-image"></div>
        <div className="journey-text-container">
          <span className="journey-subtitle">Author</span>
          <p>
            Another proficiency of his is the books he author. His book named
            “Panchamrita” is widely circulated book. It offers Panchamrit of
            Jyotish Jyoti, Vastu Vimarsh, Mantra Mahima, Aachar Vichar and Nitya
            Nimitt. Once cannot do all the poojas and perform the yagna, but
            everyday takes the panchamrit. Same way everybody can’t read Vedas,
            Upanishads etc so this book “Panchamrita” helps.
          </p>
          <p>
            There are many other books written on Jyotish & Vastu by him.
            <Link className="link" to="/courses">
              &nbsp;Know more...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
