import React from "react";
import "./Contact.css";
import msg_icom from "../../assets/msg-icon.png";
import mail_icom from "../../assets/mail-icon.png";

import phone_icom from "../../assets/phone-icon.png";

import location_icom from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "da3139df-36f9-41bd-a4b9-162899014976");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icom} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below.Your feedback, questions, and suggestions are
          important to us as we stive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icom} alt="" />
            Contact@edusity
          </li>
          <li>
            {" "}
            <img src={phone_icom} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icom} alt="" />
            77 Massachusetts Ave, Cambridge
            <br /> Ma 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ente your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
