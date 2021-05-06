import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/ToShowMovies'>ToShowMovies</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;