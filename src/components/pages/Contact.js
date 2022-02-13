import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "../assets/css/contact.css";

export default function Contact() {
  const form = useRef();

  function contactInfo (e) {
    e.preventDefault();

    emailjs.sendForm('service_l9uc5yd', 'Contact Temp', form.current, 'user_Jq0juZFPFRjnYhQh3xw6h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div id="contact-container">
      <form ref={form} onSubmit={contactInfo}>
      <div class="text-box col-6 text-white">
          <label htmlFor="subject">Subject</label>
          <input type="text" class="form-control" name="subject"/>
        </div>
        <div class="text-box col-6 text-white">
          <label htmlFor="name">Name</label>
          <input type="text" class="form-control" name="name"/>
        </div>
        <div class="text-box col-6 text-white">
          <label htmlFor="email">Email address</label>
          <input type="email" class="form-control" name="email"/>
        </div>
        <div class="text-box col-6 text-white">
          <label htmlFor="message">Message</label>
          <textarea class="form-control" rows="10" name="message"></textarea>
        </div>
        <button type="submit" value="send" class="btn col-6 bg-dark text-white" id="button">
          Submit
        </button>
      </form>
    </div>
  );
}
