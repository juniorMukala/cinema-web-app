import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = (submit, onChange) => {
  return (
    <div className="NavBar">
      <form action="" onSubmit={submit}>
        <SearchBar onChange={onChange} />
      </form>
      <ul>
        <li>
          <Link to="/">ACCUEIL</Link>
        </li>
        <li>
          <Link to="/Actors">ACTORS</Link>
        </li>
        <li>
          <Link to="/ShowMovies">SERIES</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
