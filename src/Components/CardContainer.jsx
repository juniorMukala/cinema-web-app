import Card from './Card'
import React from 'react';
import Accueil from './Accueil';

const CardContainer = () => {

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