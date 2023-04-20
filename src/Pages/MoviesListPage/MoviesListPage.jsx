import React from "react";
import { movies } from "../../data";
import MovieCard from "./MovieCard";
import "./MoviesListPage.css";

const MoviesListPage = () => {
  return (
    <div className="movies">
      {movies.map((movie, idx) => {
        return (
          <MovieCard
            key={idx + movie}
            posterPath={movie.posterPath}
            title={movie.title}
            releaseDate={movie.releaseDate}
            cast={movie.cast}
          />
        );
      })}
    </div>
  );
};

export default MoviesListPage;
