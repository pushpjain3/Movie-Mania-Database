import React from "react";
import MovieImage from "../../img/sample-movie.jpg";

function MovieCard({ movieName }) {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={MovieImage} alt="name" />
      </div>
      <div className="movie-name">{movieName}</div>
    </div>
  );
}

export default MovieCard;
