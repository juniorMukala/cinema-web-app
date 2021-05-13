import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Accueil from './Components/Accueil';
import Movies from './Pages/CategoryMovies';
import Pepole from './Pages/Pepole'
import Header from "./Components/Header";
import Actors from './Pages/Actors';

const App = () => {
  return (
   <>
    <div className="App">
     
      <Header/>
        <Switch>
          <Route path='/Accueil' component={Accueil}>
          </Route> 
          <Route exact path='/' component="">
          </Route>
          <Route path='/Actors'>
            <Actors/>
          </Route>
        </Switch>
    </div>
   </>
  );
}
export default App; 