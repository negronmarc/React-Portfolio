import React from "react";
import "../assets/css/resume.css";
import resume from "../assets/pdf/resume-2022.pdf";

export default function Resume() {
  return (
    <div id="resume-container">
      <h2 id="title">Resume 2022</h2>
      <div class="row justify-content-evenly">
        <div class="col-lg-3 col-md-6 col-sm-8 skills">
          <h4 class="resume-titles">Front-end Proficiencies</h4>
          <p class="list">HTML</p>
          <p class="list">CSS</p>
          <p class="list">JavaScript</p>
          <p class="list">jQuery</p>
          <p class="list">Handlebars</p>
          <p class="list">React</p>
          <p class="list">Bulma</p>
          <p class="list">Bootstrap</p>
          <p class="list">Responsive Design</p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-8 skills">
          <h4 class="resume-titles">Technologies</h4>
          <p class="list">Visual Studio Code</p>
          <p class="list">MongoDB Atlas</p>
          <p class="list">MongoDB Compass</p>
          <p class="list">MySQL Workbench</p>
          <p class="list">Insomnia</p>
          <p class="list">Heroku</p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-8 skills">
          <h4 class="resume-titles">Back-end Proficiencies</h4>
          <p class="list">REST API</p>
          <p class="list">Node</p>
          <p class="list">Express</p>
          <p class="list">MySQL</p>
          <p class="list">Sequelize</p>
          <p class="list">MongoDB</p>
          <p class="list">Mongoose</p>
          <p class="list">GraphQL</p>
          <p class="list">JSON Web Tokens</p>
          <p class="list">Regex</p>
        </div>
      </div>
      <div id="cv-download">
        <a
          href={resume}
          id="download"
          download="Marc's Resume 2022"
        >
          Download Resume <i class="bi bi-file-earmark-person-fill"></i>
        </a>
      </div>
    </div>
  );
}
