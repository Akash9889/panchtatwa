import React from "react";
import myPath from "../../assets/images/myPath.jpg";
import "./mypath.css";

export default function MyPath() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="path-container">
      <span className="path-title">My Path -</span>
      <div className="path-img-text-wrapper">
        {" "}
        <div className="path-img-container">
          <img className="path-image-1" src={myPath} alt="" />
        </div>
        <div className="path-text-container">
          <h1 className="heading">PANCHTATWA - THE LAW OF CREATION</h1>
          <h3 className="sub-heading">Origin</h3>
          <p>
            Panchtatwa connotes the “Panchmahabhutas” that is the five great
            elements of nature. The entire universe is made up of these five
            elements namely Earth Fire, Water, Air and Space. The human body is
            also made up of these five elements which are concomitant to our
            five senses of taste, smell, hearing, touch and site. Vastu is a
            Vidya which teaches the individual to live in synergy with these
            five elements of nature. It is the science of arrangement of the
            five elements in any given place.
          </p>
          <p>
            The five elements exist in each and every object, be it a human or a
            piece of land or the entire universe. They exist in a certain
            proportion which is governed by The Law of Creation which is beyond
            human comprehension.
          </p>
          <p>
            SriGuruji Manoj K Juyal started the process of edification of
            Astrology and Vastu. Towards this aspiration, he founded in 2004,
            Panchtatwa- The law of Creation, an institute where he generously
            imparts his boundless knowledge.
          </p>
          <p>
            Panchtatwa is registered under the Society Registration Act (XXI) -
            1860.
          </p>
          <p>
            It has a team of qualified professionals having wide exposures in
            the respective disciplines and who undertake an oath to serve
            society at large in the fields of Astrology and Vastu.
          </p>
          <p>
            The head office is located in Kalkaji- New Delhi and several branch
            offices are operational in:
          </p>
          <p>
            Sanik Farms, Nizamuddin East, Munirka, Krishna Nagar, Noida,
            Gurgaon, Faridabad, Jhansi, Saharanpur, Muzaffarnagar.
          </p>
          <p>
            We also have international branches operational in London, Sydney,
            California, Dubai and Singapore.
          </p>
        </div>
      </div>
    </div>
  );
}
