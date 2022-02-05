import React from "react";
import "../assets/scss/about.scss";
import avatar from "../assets/images/avatar.png";

export default function About() {
  return (
    <div>
      <img id="avatar" src={avatar} alt="Author's avatar" />
      <h4 id="description">Description</h4>
      <p id="desc-text">
        Hello! My name is Marc Negron and I am a Full Stack Developer that wants
        to create useful applications for users and tries to expand my knowledge
        of coding daily. I chose to be a Full Stack Developer since it gives me
        the opportunity to grow alongside the technologies that are developed
        daily and it allows me to work with both the Front and Back End of an
        application. As a person I'm earnest in my desire to better myself
        whether it be personally or professionally and I'm not inhibited by my
        failures but instead try my best to grow from them.
      </p>
    </div>
  );
}
