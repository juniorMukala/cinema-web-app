import React from 'react';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar';
import Ninja from "../Images/3626966.jpg";
import NavBar from './NavBar';
import Card from './Card';

const Accueil = () => {
    return (
        <>
        <form>
            <input type="text" placeholder="Search movies..."/>
        </form>
            <div className="cardAccueil bg-dark text-white">
                <img
                    src={Ninja}
                    class="card-img"
                    alt="..." 
                />   
            </div>  
            <p  className="messageAccueil">VOUS ETES AU BON ENDROIT, VOICI LES MEILLEURS FILMS PROPOSÉS</p> 
            <div className="row">
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-3 m-0">
                    <Card />
                </div>
            </div>
        </>
    );
};

export default Accueil;