import Card from './Card'
import React from 'react';
import Accueil from './Accueil';
import { useState } from "react";

const CardContainer = () => {
    const[data,setData]= useState([
        {nom:'Muk', prenom:'Junior'},
        {nom:'Ming', prenom:'Jeereq'},
        {nom:'Mbik', prenom:'Sacrée'},
        {nom:'Buh', prenom:'Scistopher'},
        {nom:'Mwan', prenom:'Chris'},
        {nom:'Akelax', prenom:'Merdi'},
        {nom:'Van', prenom:'Medi'},
        {nom:'Mianz', prenom:'Chris'},
        {nom:'Assan', prenom:'randy'},
      ])
  
      const [newArray,setArray]=useState([
        {nom:'Muk', prenom:'Junior'},
        {nom:'Ming', prenom:'Jeereq'},
        {nom:'Mbik', prenom:'Sacrée'},
        {nom:'Buh', prenom:'Scistopher'},
        {nom:'Mwan', prenom:'Chris'},
        {nom:'Akelax', prenom:'Merdi'},
        {nom:'Van', prenom:'Medi'},
        {nom:'Mianz', prenom:'Chris'},
        {nom:'Assan', prenom:'randy'},
        ])

    return (
        <>
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

export default CardContainer;