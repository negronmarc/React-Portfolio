import React from "react";
import "../assets/css/about.css";
import avatar from "../assets/images/avatar.png";

export default function About() {
  return (
    <div id="about-container">
      <h2 class="page-title">About Me</h2>
      <img id="avatar" src={avatar} alt="Author's avatar" />
      <h4 id="description">Description</h4>
      <p id="desc-text">
        Full Stack Developer with a background in design and a life-long
        dedication to learning. I recently earned a certificate in full stack
        development from Rutgers University, which helped me develop new skills
        in web development. This program was rigorous but helped me to learn new
        technologies and improved my ability to solve problems. Using my past
        experience in design and what I learned in recent months I’m confident I
        can develop user-friendly applications that are well designed and
        responsive.
      </p>
    </div>
  );
}
