import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/all-movies">All Movies</Link>
    </nav>
  );
};

export default NavBar;
