import React, { Fragment } from "react";
import hero from "../../img/slider.gif";
import GenreListShort from "../Homepage/GenreListShort";

function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <img className="hero-content" src={hero} alt="hero" />
      </div>
      <GenreListShort genre="horror" />
      <GenreListShort genre="romance" />
      <GenreListShort genre="drama" />
    </div>
  );
}

export default Landing;
