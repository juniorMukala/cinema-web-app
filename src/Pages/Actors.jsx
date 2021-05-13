import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Genremovies from "../Components/Genre_Movies";

const Actors = () => {
  const [popularActors, setpopularActor] = useState([]);
  console.log(popularActors);
  const urlImage = "https://image.tmdb.org/t/p/w1280";
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&page=1"
    )
      .then((data) => {
        return data.json();
      })
      .then((array) => {
        return array.results;
      })
      .then((item) => {
        setpopularActor(item);
        console.log(item);
      });
  }, []);
  return (
    <>
      <Header />
      <Genremovies />
      <div className="row justify-content-center">
        {popularActors.map((popularActor) => (
          <Card popularActor={popularActor} />
        ))}
      </div>
    </>
  );
};

export default Actors;
