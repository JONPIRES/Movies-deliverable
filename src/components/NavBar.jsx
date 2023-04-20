import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/all-movies">All Movies</Link>
      <Link to="/actors">All Actors</Link>
    </nav>
  );
};

export default NavBar;
