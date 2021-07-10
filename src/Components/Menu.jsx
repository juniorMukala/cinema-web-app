import React from "react";
import { Link, NavLink} from "react-router-dom";
import "./Menu.css";
import "../style.css"

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
     <Link className="navbar-brand">
        J<span>M</span>U<span>K</span>
     </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
           <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
           </NavLink>
          </li>
          <li className="nav-item">
           <NavLink className="nav-link" to="/series">
              Series
           </NavLink>
          </li>
          <li className="nav-item">
           <NavLink className="nav-link " to="/actors">
              Actors
           </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
