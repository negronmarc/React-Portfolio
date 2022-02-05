import React from "react";
import "../assets/scss/resume.scss";

export default function Resume() {
  return (
    <div>
      <h4 class="resume-titles">Resume 2022</h4>
      <a href="../assets/pdf/Resume.pdf" id="resume" download="newfilename">
        Download my resume
      </a>
      <h4 class="resume-titles">Front-end Proficiencies</h4>
        <ul class="list">HTML</ul>
        <ul class="list">CSS</ul>
        <ul class="list">JavaScript</ul>
        <ul class="list">jQuery</ul>
        <ul class="list">React</ul>
        <ul class="list">Bulma</ul>
        <ul class="list">Bootstrap</ul>
        <ul class="list">Responsive Design</ul>
      <h4 class="resume-titles">Back-end Proficiencies</h4>
        <ul class="list">APIs</ul>
        <ul class="list">Node</ul>
        <ul class="list">Express</ul>
        <ul class="list">MySQL, Sequelize</ul>
        <ul class="list">MongoDB</ul>
        <ul class="list">GraphQL</ul>
    </div>
  );
}
