import React from "react";
import pokebeats from "../assets/images/pokebeats.png";
import hypochondriacs from "../assets/images/hypo-single.png";
import animal from "../assets/images/homepage.png";
import weather from "../assets/images/weather.png";
import notes from "../assets/images/notes.png";
import password from "../assets/images/password.png";
import "../assets/scss/portfolio.scss";

export default function Portfolio() {
  return (
    <div class="container">
      <div class="row justify-content-evenly">
        <div class="col-auto card">
          <div class="imgContainer">
            {" "}
            <img src={pokebeats} class="preview-image" />{" "}
          </div>
          <div class="content">
            <h2>PokeBeats</h2>
            <p>
              PokeBeats uses the PokeAPI and YoutubeAPI in tandem so users can
              read facts about a legendary Pokémon and listen to their
              respective song at the same time.
              <br />
              <a
                href="https://negronmarc.github.io/PokeBeats/"
                class="launch-link"
              >
                Launch
              </a>
              <br />
              <a
                href="https://github.com/negronmarc/PokeBeats"
                class="github-link"
              >
                Github
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
            <h2>Hypochondriacs</h2>
            <p>
              Auction application that allows users to place bids on popular
              pandemic products.
              <br />
              <a
                href="https://auction-pandemic-essentials.herokuapp.com/login"
                class="launch-link"
              >
                Launch
              </a>
              <br />
              <a
                href="https://github.com/negronmarc/Auction-for-Pandemic-Essentials"
                class="github-link"
              >
                Github
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
            <h2>Animal Palace</h2>
            <p>
              Application was created to encourage people to donate money to
              help animals in need. Users are able to sign up, donate and
              symbolically adopt animals.
              <br />
              <a
                href="https://github.com/bjtsmith23/Animal-Palace/deployments/activity_log?environment=animal-palace"
                class="launch-link"
              >
                Launch
              </a>
              <br />
              <a
                href="https://github.com/bjtsmith23/Animal-Palace"
                class="github-link"
              >
                Github
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
            <h2>Weather Dashboard</h2>
            <p>
              Weather dashboard that runs in the browser and was created using
              the OpenWeather API to retrieve data for the cities searched.
              <br />
              <a
                href="https://negronmarc.github.io/Weather-Dashboard/"
                class="launch-link"
              >
                Launch
              </a>
              <br />
              <a
                href="https://github.com/negronmarc/Weather-Dashboard"
                class="github-link"
              >
                Github
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
            <h2>Note Taker</h2>
            <p>
              Application that allows users to write and save notes. Great for
              those who want to be able to write notes so that they can organize
              their thoughts and keeps track of tasks they need to complete.
              <br />
              <a
                href="https://note-taker-applicat.herokuapp.com/"
                class="launch-link"
              >
                Launch
              </a>
              <br />
              <a
                href="https://github.com/negronmarc/Note-Taker"
                class="github-link"
              >
                Github
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
            <h2>Password Generator</h2>
            <p>
              Enables users to generate random passwords based on the criteria
              that they have selected and has a responsive user interface.
              <br />
              <a
                href="https://negronmarc.github.io/Password-Generator/"
                class="launch-link"
              >
                Launch
              </a>
              <br />
              <a
                href="https://github.com/negronmarc/Password-Generator"
                class="github-link"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
