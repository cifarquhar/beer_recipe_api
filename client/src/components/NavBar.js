import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/favourites">Favourites</Link>
    </li>
    <li>
      <Link to="/add">Add New Recipe</Link>
    </li>
  </ul>
);

export default Navbar;
