import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar';
import Ninja from "../Images/3626966.jpg";
import NavBar from './NavBar';

const Accueil = () => {
    return (
        <>
            <div className="cardAccueil bg-dark text-white">
                <img
                    src={Ninja}
                    class="card-img"
                    alt="..."
                />
                <div class="card-img-overlay">
                    <h5 class="card-title"> <NavBar/></h5>
                    <p class="card-text">SHOW AND DOWNLOAD YOUR FAVORITES MOVIES</p>
                    <SearchBar/>
                   
                </div>
            </div>
        </>
    );
};

export default Accueil;