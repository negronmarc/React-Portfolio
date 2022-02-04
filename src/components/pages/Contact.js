import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <div class="form-group col-6">
          <label htmlFor="name">Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group col-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group col-6">
          <label htmlFor="message">Message</label>
          <textarea class="form-control" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
