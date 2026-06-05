import React from "react";
import MovieCard from "./MovieCard";
import "./App.css";

/* IMAGES */
import inceptionImg from "./assets/images/Inception.jpg";
import interstellarImg from "./assets/images/Interstellar.jpg";

/* VIDEO */
import backgroundVideo from "./assets/videos/rain.mp4";

const movies = [
  {
    title: "Inception",
    duration: 148,
    year: 2010,
    genre: ["Sci-Fi", "Action"],
    rating: 8.8,
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
    poster: inceptionImg,
    trailer:
      "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },

  {
    title: "Interstellar",
    duration: 169,
    year: 2014,
    genre: ["Sci-Fi", "Drama"],
    rating: 8.6,
    description:
      "Explorers travel through a wormhole to save humanity.",
    poster: interstellarImg,
    trailer:
      "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
];

function App() {
  return (
    <div className="app">

      {/* HERO SECTION */}
      <div className="hero">

        <video autoPlay loop muted playsInline className="hero-video">
          <source
            src={backgroundVideo}
            type="video/mp4"
          />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <h1>🎬 MovieVerse</h1>

          <p>
            Discover trending movies, watch trailers,
            and explore cinematic masterpieces.
          </p>

          <button>Explore Movies</button>
        </div>
      </div>

      {/* MOVIES */}
      <div className="movies-section">
        <h2>Trending Movies</h2>

        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;

