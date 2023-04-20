import React from "react";
import ActorCard from "./ActorCard";
import { movies } from "../../data";

const ActorListPage = () => {
  const actorSet = new Set();
  movies.map((movie) => {
    return movie.cast.map((actor) => {
      return actorSet.add(actor);
    });
  });
  actorSet.map((actor) => {
    return <ActorCard actor={actor} />;
  });
};

export default ActorListPage;
