import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./contactus.css";

export default function ContactUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-page-container">
      <div className="contact-us-form">
        <ContactForm />
      </div>
    </div>
  );
}
