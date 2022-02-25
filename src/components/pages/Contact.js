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
        <div class="text-box col-lg-6 col-sm-10 mx-auto">
          <label htmlFor="subject" class="titles">
            Subject
          </label>
          <input
            type="text"
            class="form-control"
            name="subject"
            placeholder="Job Request"
          />
        </div>
        <div class="text-box col-lg-6 col-sm-10 mx-auto">
          <label htmlFor="name" class="titles">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="John Smith"
          />
        </div>
        <div class="text-box col-lg-6 col-sm-10 mx-auto">
          <label htmlFor="email" class="titles">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="jsmith@email.com"
          />
        </div>
        <div class="text-box col-lg-6 col-sm-10 mx-auto">
          <label htmlFor="message" class="titles">
            Message
          </label>
          <textarea
            class="form-control"
            rows="10"
            name="message"
            placeholder="We are building a safe and secure video community app on blockchain. We need someone to help us architect and implement a proof of concept and then (ideally) continue the project into the next phase. Contact me at this email at your earliest convenience."
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            value="send"
            class="btn center-block"
            id="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Submit
          </button>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-body" id="staticBackdropLabel">
                    Email has been successfully sent!
                  </h5>
                </div>
                <div class="modal-body">
                  Thank you for getting in touch! I will respond as soon as
                  possible.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
