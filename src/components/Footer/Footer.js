import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "../../assets/images/facebook-square-brands.svg";
import instagram from "../../assets/images/instagram-square-brands.svg";
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
            <Link to="/blogs">Blogs</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/gallery">Videos</Link>
            <Link to="/donations">Donations</Link>
          </div>
          <img className="flower" src={flowerDivider} alt="" />
          <div className="contact-us-container">
            <h3>Contact us</h3>
            <span>
              Panchtatwa - The Law of Creation
              <br /> Vatika Farms
              <br /> Farm no - 88, 89, 90 <br />
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
              <a
                href="https://www.facebook.com/SriGurujiManojKJuyal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Go to facebook page" />
              </a>
              <a
                href="https://youtube.com/c/SriGuruJiMANOJKJUYAL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="Go to youtube" />
              </a>
              <a
                href="https://twitter.com/vastumanoj?t=ccDiwsGIsLEXIH21Ui4-3w&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Go to twitter" />
              </a>
              <a
                href="https://instagram.com/srigurujimanojkjuyal?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Go to instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="hr" />
        <div className="copyright-text">
          © 1999 - 2021 Panchtatwa. All Rights Reserved. | Terms and Conditions
          | Privacy Policy
        </div>
      </footer>
    </>
  );
}
