import React from "react";
import "./footer.css";
import facebook from "../../assets/images/facebook-square-brands.svg";
import instagram from "../../assets/images/instagram-square-brands.svg";
import linkdein from "../../assets/images/linkedin-brands.svg";
import twitter from "../../assets/images/twitter-square-brands.svg";
import youtube from "../../assets/images/youtube-square-brands.svg";
import flowerDivider from "../../assets/images/flower-divider.avif";

export default function Footer() {
  return (
    <>
      <div className=" bar" />
      <footer className="footer-main-container">
        <div className="footer-parent-container">
          <div className="page-reference">
            <a href="#">Blogs</a>

            <a href="#">Videos</a>

            <a href="#">Ashram</a>

            <a href="#">Courses</a>
          </div>
          <img className="flower" src={flowerDivider} alt="" />
          <div className="contact-us-container">
            <h3>Contact us</h3>
            <span>
              Panchtatwa - The Law of Creation
              <br /> Vatika Farms
              <br /> Farm no-88,89,90 <br />
              Sector - 131
              <br /> Behind Jaypee Wishtown Noida (UP) - 201301
              <br />
            </span>
            <a className="tel" href="tel:+91-9810046385">
              {" "}
              Phone: <span>+91-9810046385</span>
            </a>
          </div>
          <img className="flower" src={flowerDivider} alt="" />
          <div className="social-media-plugins-conatiner">
            <h3>Find us on social media </h3>
            <div className="icon-container">
              <img src={facebook} alt="Go to facebook page" />
              <img src={youtube} alt="Go to youtube" />
              <img src={linkdein} alt="Go to linkdein" />
              <img src={twitter} alt="Go to twitter" />
              <img src={instagram} alt="Go to instagram" />
            </div>
          </div>
        </div>
        <div className="hr" />
        <div className="copyright-text">
          © 1999 - 2021 Isha Foundation. All Rights Reserved. | Terms and
          Conditions | Privacy Policy
        </div>
      </footer>
    </>
  );
}
