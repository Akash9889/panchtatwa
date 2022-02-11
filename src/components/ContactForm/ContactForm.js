import React, { useRef } from "react";
import "./contactForm.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ze7yepv",
        "template_pkw71dd",
        form.current,
        "user_2dawTKC2loYOh84pDElFt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <form className="form-container" ref={form} onSubmit={sendEmail}>
        <span className="form-heading">Questions?</span>
        <div className="input-conatiner">
          <label className="label">Name</label>
          <input
            className="input-field"
            type="text"
            name="from_name"
            placeholder="Please enter your name"
          />
        </div>
        <div className="input-conatiner">
          <label className="label">Email</label>
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Please enter your email address"
          />
        </div>
        <div className="input-conatiner">
          <label className="label">Phone</label>
          <input
            className="input-field"
            type="tel"
            name="telephone"
            placeholder="Please enter your phone number"
          />
        </div>
        <div className="input-conatiner">
          <label className="label">Message</label>
          <textarea
            className="textarea"
            name="message"
            placeholder="Please list your queries..."
          />
        </div>
        <div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}
