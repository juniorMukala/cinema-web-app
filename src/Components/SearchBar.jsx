import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from 'react'

const SearchBar = (props) => {
  const [movies, setMovies] = useState([]);
  const { data, setData } = props.show;
  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&query=${query}`
    )
      .then((res) => res.json())
      .then((movies) => {
        setData(movies.results);
      });
  };
  const fetchByActors = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/person?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((data) => data.json())
      .then((popularActors) => {
        /* setData(popularActors.results); */
      });
  };

  return (
    <form class="input-group" onSubmit={setMovies}>
      <input
        type="search"
        placeholder="SEARCH"
        onChange={(e) => search(e.target.value)}
        /* onChange={(e) => fetchByActors(e.target.value)} */
      />
    </form>
  );
};
export default SearchBar;
