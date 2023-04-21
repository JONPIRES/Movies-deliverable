import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../data";

const ActorDetailPage = () => {
  const { actorName } = useParams();
  movies.find((movie) => {
    movie.cast.contains(actorName);
    return console.log(movie);
  });
  return (
    <div>
      <h1>{actorName}</h1>
    </div>
  );
};

export default ActorDetailPage;
