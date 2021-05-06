import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Accueil from './Components/Accueil';
import CardContainer from './Components/CardContainer';
import ShowMovies from './Pages/ShowMovies';
import NavBar from "./Components/NavBar";

const App = () => {
   
  return (
   <>
    <div className="App">
     
      <NavBar/>
      
        <Switch>
          <Route path='/Accueil' component={Accueil}>
          </Route> 
          <Route exact path='/' component={CardContainer}>
          </Route>
          <Route path='/ShowMovies'>
            <ShowMovies/>
          </Route>
        </Switch>
    </div>
   </>
  );
}

export default App; 