import React from "react";
import pokebeats from "../assets/images/pokebeats.PNG";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <a href="https://github.com/negronmarc/PokeBeats">
        <img id="pokebeats" src={pokebeats} />
      </a>
    </div>
  );
}
