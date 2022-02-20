import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/contact.css";

export default function Contact() {
  const form = useRef();

  function contactInfo(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l9uc5yd",
        "Contact Temp",
        form.current,
        "user_Jq0juZFPFRjnYhQh3xw6h"
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
  }

  return (
    <div id="contact-container">
      <h2 class="page-title">Contact Me</h2>
      <form ref={form} onSubmit={contactInfo}>
        <div class="text-box col-lg-6 col-sm-10 text-white mx-auto">
          <label htmlFor="subject">Subject</label>
          <input type="text" class="form-control" name="subject" />
        </div>
        <div class="text-box col-lg-6 col-sm-10 text-white mx-auto">
          <label htmlFor="name">Name</label>
          <input type="text" class="form-control" name="name" />
        </div>
        <div class="text-box col-lg-6 col-sm-10 text-white mx-auto">
          <label htmlFor="email">Email address</label>
          <input type="email" class="form-control" name="email" />
        </div>
        <div class="text-box col-lg-6 col-sm-10 text-white mx-auto">
          <label htmlFor="message">Message</label>
          <textarea class="form-control" rows="10" name="message"></textarea>
        </div>
        <div class="text-center">
        <button
          type="submit"
          value="send"
          class="btn col-lg-6 col-sm-10 bg-dark text-white center-block"
          id="button"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}
