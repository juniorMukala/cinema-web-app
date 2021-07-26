import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from '../views/Home';
import Pagination from '../Components/Pagination'

export default function Layout(dataMovies, series) {
    return (
      <div>
        <Switch>
          <Route path="/">
            <Home 
            pagination={Pagination}
            />
          </Route>
        </Switch>
      </div>
    );
  }