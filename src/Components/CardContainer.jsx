import Card from './Card'
import React from 'react';
import Accueil from './Accueil';

const CardContainer = () => {

    return (
        <>
        <Accueil/>
        <div className="cardContainer">                   
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>    
        <Card className="col-sm-12 col-md-3"/>       
        </div>
        </>
        
    );
};

export default CardContainer;