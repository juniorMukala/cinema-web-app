import React, { useEffect, useState } from "react";

const Recherche = (props) => {
  const requete = props.match.params.requete;
  console.log(props);
  const { data, setData } = props.show;
  let [search, setSearch] = useState([]);
  useEffect(() => {
    if (requete != "") searchByMovie();
  }, []);

  const searchByMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&query=${requete}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
      });
    setSearch(data.results);
    console.log(data.results);
  };

  return <div>{data.map((element) => (element = { element }))}</div>;
};
export default Recherche;
