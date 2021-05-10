import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Accueil from './Components/Accueil';

import ShowMovies from './Pages/CategoryMovies';
import Header from "./Components/Header";

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
          <Route path='/ShowMovies'>
            <ShowMovies/>
          </Route>
        </Switch>
    </div>
   </>
  );
}
export default App; 