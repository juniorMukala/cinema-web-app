import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = (submit, onChange) => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to="/">ACCUEIL</Link>
        </li>
        <li>
          <Link to="/Actors">ACTORS</Link>
        </li>
        <li>
          <Link to="/Series">SERIES</Link>
        </li>
      </ul>
      <form action="" onSubmit={submit}>
        <SearchBar onChange={onChange} />
      </form>
    </div>
  );
};

export default Header;
