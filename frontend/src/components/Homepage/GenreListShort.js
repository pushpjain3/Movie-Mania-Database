import React from "react";
import MovieCard from "./MovieCard";

function GenreListShort({ genre }) {
  return (
    <div>
      <hr />
      <div className="genre-set">
        <h2 className="genre-heading">{genre.toUpperCase()}</h2>
        <div className="movie-list">
          <MovieCard movieName="Midnight Sun" />
          <MovieCard movieName="Midnight Sun" />
          <MovieCard movieName="Midnight Sun" />
          <MovieCard movieName="Midnight Sun" />
          <MovieCard movieName="Midnight Sun" />
          <MovieCard movieName="Midnight Sun" />
        </div>
      </div>
    </div>
  );
}

export default GenreListShort;
