import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">

      <img
        src={movie.poster}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>⭐ {movie.rating}</p>

        <p>{movie.year}</p>

        <p>{movie.genre.join(" • ")}</p>

        <p className="description">
          {movie.description}
        </p>

        <a
          href={movie.trailer}
          target="_blank"
          rel="noreferrer"
          className="trailer-btn"
        >
          ▶ Watch Trailer
        </a>
      </div>

    </div>
  );
};

export default MovieCard;

