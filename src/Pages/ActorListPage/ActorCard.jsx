import React from "react";
import { Link } from "react-router-dom";
import "./ActorCard.css";

const ActorCard = ({ img, actor }) => {
  return (
    <Link to={`/actors/${actor}`}>
      <div
        className="actor-card"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}>
        <h1>{actor}</h1>
      </div>
    </Link>
  );
};

export default ActorCard;
