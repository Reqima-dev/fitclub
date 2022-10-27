import React, { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser";


const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_apewcya",
        "template_td2netn",
        form.current,
        "ds-KNMQKl0XXlvD2p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">REady to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text">Whit us ?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your eamil adresss"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
