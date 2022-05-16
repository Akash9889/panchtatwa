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
              <br /> Farm no - 89, 90 <br />
              Sector - 131
              <br /> Behind Jaypee Wishtown Noida (UP) - 201301
              <br />
            </span>
            <a className="tel" href="tel:+91-9810046385">
              {" "}
              Phone: <span>+91-9810046385</span>
            </a>
            <iframe
              style={{ width: "90%", height: "200px", marginTop: "20px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.149223593961!2d77.35147901503338!3d28.505157782468224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce734aa340fa9%3A0x42cb9a4482d2e451!2sPanchtatwa-The%20Law%20of%20Creation%20(Guruji%20Manoj%20k%20Juyal)!5e0!3m2!1sen!2sin!4v1652532037044!5m2!1sen!2sin"
              width="600"
              title="Panchtatwa-The Law of Creation (Guruji Manoj k Juyal)"
              height="450"
              // style="border:0;"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
