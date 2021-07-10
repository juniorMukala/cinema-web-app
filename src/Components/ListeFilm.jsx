import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Dimmer, Image } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css"
import DetailFilm from "./DetailFilm";

function ListesFilms({ dataMovies, series }) {
  console.log(series);
  const [viewDetail, setViewDetail] = useState(false);
  const [movieSelected, setMovieSelected] = useState("");

  const closeViewDetail = () => setViewDetail(false);
  return (
    <>
      <div className="cardContainer row m-12" >
        {dataMovies && dataMovies.length !== 0 ? (
          dataMovies.map((movie) => {
            return (
              <div
                className="drawn_card"
                onClick={(e) => {
                  setViewDetail(true);
                  setMovieSelected(movie.id);
                }}
              >
                <img
                  src={
                    movie.poster_path
                      ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path
                      : "https://semantic-ui.com/images/wireframe/image.png"
                  }
                  alt="..."
                />
                <div className="drawn_content">
                  <p>{movie.title}</p>
                  <p>
                    {" "}
                    {movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : "-"}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="alert alert-danger text-center col-12 " role="alert">
            Aucun film trouvé !!!
          </div>
        )}


<div className="container row">
          {series && series.length !== 0
            ? series.map((serie) => {
                return (
                  <div
                    className="drawn_card"
                    onClick={(e) => {
                      setViewDetail(true);
                      setMovieSelected(serie.id);
                    }}
                  >
                    <img
                      src={
                        serie.backdrop_path
                          ? "https://image.tmdb.org/t/p/w300/" +
                            serie.backdrop_path
                          : "https://semantic-ui.com/images/wireframe/image.png"
                      }
                      alt="..."
                    />
                    <div className="drawn_content">
                      <p>{serie.name}</p>
                      <p>{serie.popularity}</p>
                      <p>{serie.first_air_date}</p>
                    </div>
                  </div>
                );
              })
            : <div
              className="alert alert-danger text-center col-12 "
              role="alert"
            >
              Aucun film trouvé !!!
            </div>
              }
          </div>

        
      
      <Dimmer
        active={viewDetail}
        onClickOutside={(e) => setViewDetail(false)}
        page
      >
        <DetailFilm id={movieSelected} close={closeViewDetail} />
      </Dimmer>
      </div>
      
    </>
  );
}
export default ListesFilms;
