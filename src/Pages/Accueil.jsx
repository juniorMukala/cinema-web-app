import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Genremovies from "../Components/Genre_Movies";

const Accueil = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(movies);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const results = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&page=1`
      );
      const data = await results.json();
      setMovies(data.results);
    };
    fetchPopularMovies();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&query=${search}`
    )
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies.results);
      });
  };
  const handleClick = (keys) => {
    console.log(movies[keys]);
    setMovies([movies[keys]]);
  };
  const onChange = (search) => {
    console.log(search.target.value);
    setSearch(search.target.value);
  };
  return (
    <>
      <Header onChange={onChange} submit={submit}/>
      <Genremovies />
      <div className="row justify-content-center">
        {movies.map((movie, index) => (
          <Card movie={movie} key={index} keys={index} onClick={handleClick} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Accueil;
