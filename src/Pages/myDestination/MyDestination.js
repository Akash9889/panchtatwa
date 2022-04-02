import React from "react";
import myDestination from "../../assets/images/myDestination.JPG";

export default function MyDestination() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="path-container">
      <span className="path-title">My Destination -</span>
      <div className="path-img-text-wrapper">
        {" "}
        <div className="path-img-container">
          <img className="path-image-1" src={myDestination} alt="" />
        </div>
        <div className="path-text-container">
          <p>
            My aim and purpose is to help people realising moksha or salvation.
            My mission is to transform the Mumukshu i.e one who wants moksha
            into Mokshik i.e one who has attained Moksha. My work is to change
            the direction of your search light i.e. indriya from outside to
            inside so that you can experience the inner world, the real world.
            After every death your soul get into new body. Now I want your soul
            to be one with almighty so that you can get out of this cycle of
            life and death and attain Nirvana. I do not want you to be a sadhak
            but a siddha. Sadhak is one who do sadhana, the one who practices.
            The siddha is one who has reached, who attained. My final
            destination is to transform this world of sadhaks into world of
            siddhas so that this whole world will become a siddha ashram. Khush
            raho
          </p>
        </div>
      </div>
    </div>
  );
}
