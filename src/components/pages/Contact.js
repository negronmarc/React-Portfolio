import React from "react";
import "../assets/scss/contact.scss";

export default function Contact() {
  return (
    <div>
      <form>
        <div class="text-box col-6 text-white">
          <label htmlFor="name">Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="text-box col-6 text-white">
          <label htmlFor="email">Email address</label>
          <input type="email" class="form-control" />
        </div>
        <div class="text-box col-6 text-white">
          <label htmlFor="message">Message</label>
          <textarea class="form-control" rows="10"></textarea>
        </div>
        <button type="submit" class="btn col-6 bg-dark text-white" id="button">
          Submit
        </button>
      </form>
    </div>
  );
}
