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
  const actorArr = Array.from(actorSet);
  return (
    <div className="actors">
      {actorArr.map((actor) => {
        return <ActorCard img="https://picsum.photos/200/302" actor={actor} />;
      })}
    </div>
  );
};

export default ActorListPage;
