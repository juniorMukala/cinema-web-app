import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <li><Link to='/Accueil'>ACCUEIL</Link></li>
                <li><Link to='/'>MOVIES</Link></li>
                <li><Link to='/ShowMovies'>SERIES</Link></li>
            </ul>
            <input type="text" placeholder="SEARCH"/>
        </div>
    );
};

export default NavBar;