import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./contactus.css";

export default function ContactUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapIframe = (src) => {
    return (
      <iframe
        style={{
          width: "100%",
          height: "200px",
          marginTop: "20px",
          border: "2px solid #28231e",
        }}
        src={src}
        width="600"
        title="Panchtatwa-The Law of Creation (Guruji Manoj k Juyal)"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        frameBorder="0"
      ></iframe>
    );
  };

  return (
    <>
      <div className="contact-page-container">
        <p className="contact-title">Operation Address -</p>
        <div className="address-form-container">
          <div className="address-container">
            <div className="address">
              {mapIframe(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.149223593961!2d77.35147901503338!3d28.505157782468224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce734aa340fa9%3A0x42cb9a4482d2e451!2sPanchtatwa-The%20Law%20of%20Creation%20(Guruji%20Manoj%20k%20Juyal)!5e0!3m2!1sen!2sin!4v1652532037044!5m2!1sen!2sin"
              )}
              <div className="address-text-container">
                <span>
                  Panchtatwa - The Law of Creation
                  <br /> Vatika Farms
                  <br /> Farm no - 89, 90 <br />
                  Sector - 131
                  <br /> Behind Jaypee Wishtown Noida (UP) - 201301
                  <br />
                </span>
                <a className="address-tel" href="tel:+91-9810046385">
                  {" "}
                  Phone: <span>+91-9810046385</span>
                </a>
              </div>
            </div>
            <div className="address">
              {mapIframe(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0342913655554!2d77.221612!3d28.508616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cfe91504eb%3A0xc9d18a7af1fcadd2!2sWLC%20College%20India%20Ltd.!5e0!3m2!1sen!2sin!4v1662643810221!5m2!1sen!2sin"
              )}
              <div className="address-text-container">
                <span>
                  Panchtatwa - The Law of Creation
                  <br /> 160-B
                  <br /> Western Avenue
                  <br /> Sainik Farms
                  <br /> New Delhi - 110062
                  <br />
                </span>
                <a className="address-tel" href="tel:+91-9810046385">
                  {" "}
                  Phone: <span>+91-9810046385</span>
                </a>
              </div>
            </div>
            <div className="address">
              {mapIframe(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.0088940638943!2d78.8261727!3d30.208293599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a5cff033c39f%3A0x7817cb111d91cc90!2sPanchtatwa%20Ashram!5e0!3m2!1sen!2sin!4v1656343013936!5m2!1sen!2sin"
              )}
              <div className="address-text-container">
                <span>
                  Panchtatwa Ashram
                  <br /> Balodi
                  <br /> Uttarakhand, 246174
                  <br />
                </span>
                <a className="address-tel" href="tel:+91-9810046385">
                  {" "}
                  Phone: <span>+91-9810046385</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-us-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
