import * as React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../data";

const MovieDetailPage = () => {
  const { movieName } = useParams();
  const movie = movies.find((movie) => movie.title === movieName);

  if (!movie) return <div>Movie not found</div>;
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Release date: {movie.releaseDate}</p>
      <img src={movie.posterPath} alt={movie.title} />
      <p>Cast: {movie.cast.join(", ")}</p>
    </div>
  );
};

export default MovieDetailPage;
