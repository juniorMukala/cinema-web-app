import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBar = () => {
  return (
    <div class="input-group">
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
      aria-describedby="search-addon" />
    <button type="button" class="btn btn-outline-primary">search</button>
  </div>
  )}
export default SearchBar;