import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ posterPath, title, releaseDate, cast, key }) => {
  return (
    <div className="card">
      <Link to={`/movies/${title}`}>
        <div
          style={{
            backgroundImage: `url(${posterPath})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          className="card-img"></div>
        <h1 className="movie-title">{title}</h1>
        <h5 className="release">Release: {releaseDate}</h5>
      </Link>
    </div>
  );
};

export default MovieCard;
