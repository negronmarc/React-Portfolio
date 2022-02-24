import React from "react";
import pokeBeats from "../assets/images/pokebeat.png";
import hypochondriacs from "../assets/images/auction.png";
import animal from "../assets/images/animalpalace.png";
import weather from "../assets/images/weatherdash.png";
import notes from "../assets/images/notetaker.png";
import password from "../assets/images/passwordgen.png";
import techBlog from "../assets/images/thetechblog.png";
import scheduler from "../assets/images/workdayschedule.png";
import movieQuiz from "../assets/images/moviequiz.png";
import teamProfileGen from "../assets/images/teamprofilegen.png";
import readMeGen from "../assets/images/readmegen.png";
import employeeTracker from "../assets/images/employeetracker.png";
import "../assets/css/portfolio.css";

export default function Portfolio() {
  return (
    <div id="portfolio-container">
      <h2 class="page-title">Portfolio</h2>
      <div class="container">
        <div class="row justify-content-evenly">
          <div class="col-auto card">
            <div class="imgContainer">
              {" "}
              <img src={pokeBeats} class="preview-image" />{" "}
            </div>
            <div class="content">
              <h3>PokeBeats</h3>
              <p class="description-project">
                PokeBeats uses the PokeAPI and YoutubeAPI in tandem so users can
                read facts about a legendary Pokémon and listen to their
                respective song at the same time.
                <br />
                <a
                  href="https://negronmarc.github.io/PokeBeats/"
                  class="launch-link"
                >
                  Launch <i class="bi bi-link-45deg"></i>
                </a>
                <br />
                <a
                  href="https://github.com/negronmarc/PokeBeats"
                  class="github-link"
                >
                  Github <i class="bi bi-github"></i> 
                </a>
              </p>
            </div>
          </div>
          <div class="col-auto card">
            <div class="imgContainer">
              {" "}
              <img src={hypochondriacs} class="preview-image" />{" "}
            </div>
            <div class="content">
              <h3>Hypochondriacs</h3>
              <p class="description">
                Auction application that allows users to place bids on popular
                pandemic products. Users will have to sign in if they want to
                see the products available.
                <br />
                <a
                  href="https://auction-pandemic-essentials.herokuapp.com/login"
                  class="launch-link"
                >
                  Launch <i class="bi bi-link-45deg"></i>
                </a>
                <br />
                <a
                  href="https://github.com/negronmarc/Auction-for-Pandemic-Essentials"
                  class="github-link"
                >
                  Github <i class="bi bi-github"></i>
                </a>
              </p>
            </div>
          </div>
          <div class="col-auto card">
            <div class="imgContainer">
              {" "}
              <img src={animal} class="preview-image" />{" "}
            </div>
            <div class="content">
              <h3>Animal Palace</h3>
              <p class="description">
                Application was created to encourage people to donate money to
                help animals in need. Users are able to sign up, donate and
                symbolically adopt animals.
                <br />
                <a
                  href="https://github.com/bjtsmith23/Animal-Palace/deployments/activity_log?environment=animal-palace"
                  class="launch-link"
                >
                  Launch <i class="bi bi-link-45deg"></i>
                </a>
                <br />
                <a
                  href="https://github.com/bjtsmith23/Animal-Palace"
                  class="github-link"
                >
                  Github <i class="bi bi-github"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-evenly">
          <div class="col-auto card">
            <div class="imgContainer">
              {" "}
              <img src={weather} class="preview-image" />{" "}
            </div>
            <div class="content">
              <h3>Weather Dashboard</h3>
              <p class="description">
                Weather dashboard that runs in the browser and was created using
                the OpenWeather API to retrieve data for the cities searched.
                <br />
                <a
                  href="https://negronmarc.github.io/Weather-Dashboard/"
                  class="launch-link"
                >
                  Launch <i class="bi bi-link-45deg"></i>
                </a>
                <br />
                <a
                  href="https://github.com/negronmarc/Weather-Dashboard"
                  class="github-link"
                >
                  Github <i class="bi bi-github"></i>
                </a>
              </p>
            </div>
          </div>
          <div class="col-auto card">
            <div class="imgContainer">
              {" "}
              <img src={notes} class="preview-image" />{" "}
            </div>
            <div class="content">
              <h3>Note Taker</h3>
              <p class="description">
                Application that allows users to write and save notes. Great for
                those who want to be able to write notes so that they can
                organize their thoughts and keeps track of tasks they need to
                complete.
                <br />
                <a
                  href="https://note-taker-applicat.herokuapp.com/"
                  class="launch-link"
                >
                  Launch <i class="bi bi-link-45deg"></i>
                </a>
                <br />
                <a
                  href="https://github.com/negronmarc/Note-Taker"
                  class="github-link"
                >
                  Github <i class="bi bi-github"></i>
                </a>
              </p>
            </div>
          </div>
          <div class="col-auto card">
            <div class="imgContainer">
              {" "}
              <img src={password} class="preview-image" />{" "}
            </div>
            <div class="content">
              <h3>Password Generator</h3>
              <p class="description">
                Enables users to generate random passwords based on the criteria
                that they have selected and has a responsive user interface.
                <br />
                <a
                  href="https://negronmarc.github.io/Password-Generator/"
                  class="launch-link"
                >
                  Launch <i class="bi bi-link-45deg"></i>
                </a>
                <br />
                <a
                  href="https://github.com/negronmarc/Password-Generator"
                  class="github-link"
                >
                  Github <i class="bi bi-github"></i>
                </a>
              </p>
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div class="col-auto card">
              <div class="imgContainer">
                {" "}
                <img src={techBlog} class="preview-image" />{" "}
              </div>
              <div class="content">
                <h3>Tech Blog</h3>
                <p class="description">
                  CMS-style blog site similar to a Wordpress site, where
                  developers can publish their blog posts and comment on other
                  developers' post as well.
                  <br />
                  <a
                    href="https://tech-blog-mvc-app.herokuapp.com/"
                    class="launch-link"
                  >
                    Launch <i class="bi bi-link-45deg"></i>
                  </a>
                  <br />
                  <a
                    href="https://github.com/negronmarc/Tech-Blog"
                    class="github-link"
                  >
                    Github <i class="bi bi-github"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-auto card">
              <div class="imgContainer">
                {" "}
                <img src={scheduler} class="preview-image" />{" "}
              </div>
              <div class="content">
                <h3>Work Day Scheduler</h3>
                <p class="description">
                  Using the Moment library to make a site that allows users to
                  save events for each hour of a normal work day and accurately
                  reflect how many how hours are left in their day.
                  <br />
                  <a
                    href="https://negronmarc.github.io/Work-Day-Scheduler/"
                    class="launch-link"
                  >
                    Launch <i class="bi bi-link-45deg"></i>
                  </a>
                  <br />
                  <a
                    href="https://github.com/negronmarc/Work-Day-Scheduler"
                    class="github-link"
                  >
                    Github <i class="bi bi-github"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-auto card">
              <div class="imgContainer">
                {" "}
                <img src={movieQuiz} class="preview-image" />{" "}
              </div>
              <div class="content">
                <h3>Movie Quiz</h3>
                <p class="description">
                  Timed coding quiz with multiple-choice questions. It runs in
                  the browser and features dynamically updated HTML and CSS
                  powered by JavaScript.
                  <br />
                  <a
                    href="https://negronmarc.github.io/Movie-Quiz/"
                    class="launch-link"
                  >
                    Launch <i class="bi bi-link-45deg"></i>
                  </a>
                  <br />
                  <a
                    href="https://github.com/negronmarc/Movie-Quiz"
                    class="github-link"
                  >
                    Github <i class="bi bi-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div class="col-auto card">
              <div class="imgContainer">
                {" "}
                <img src={teamProfileGen} class="preview-image" />{" "}
              </div>
              <div class="content">
                <h3>Team Profile Generator</h3>
                <p class="description">
                  Command-line application that takes in information about
                  employees on a software engineering team, then generates an
                  HTML webpage that displays summaries for each person.
                  <br />
                  <a
                    href="https://github.com/negronmarc/Team-Profile-Generator"
                    class="github-link"
                  >
                    Github <i class="bi bi-github"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-auto card">
              <div class="imgContainer">
                {" "}
                <img src={readMeGen} class="preview-image" />{" "}
              </div>
              <div class="content">
                <h3>README Generator</h3>
                <p class="description">
                  Command-line application that generates a README file after a
                  user answers a series of questions.
                  <br />
                  <a
                    href="https://github.com/negronmarc/README-Generator"
                    class="github-link"
                  >
                    Github <i class="bi bi-github"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-auto card">
              <div class="imgContainer">
                {" "}
                <img src={employeeTracker} class="preview-image" />{" "}
              </div>
              <div class="content">
                <h3>Employee Tracker</h3>
                <p class="description">
                  CMS (content management system) that allows for the management
                  of a company's employee database. Command-line application
                  that uses MySQL to store and adjust the provided data.
                  <br />
                  <a
                    href="https://github.com/negronmarc/Employee-Tracker"
                    class="github-link"
                  >
                    Github <i class="bi bi-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
