import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className="NavBar">
            <ul>
                <li><Link to='/'>ACCUEIL</Link></li>
                <li><Link to='/Actors'>ACTORS</Link></li>
                <li><Link to='/ShowMovies'>SERIES</Link></li>
            </ul>
           {/*  <input type="text" placeholder="SEARCH"/> */}
        </div>
    );
};

export default Header;