import React, { useState } from "react";
import { Dimmer } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailFilm from "./DetailFilm";

function ListesFilms({ dataMovies, series }) {
  const [viewDetail, setViewDetail] = useState(false);
  const [movieSelected, setMovieSelected] = useState("");
  const closeViewDetail = () => setViewDetail(false);
  return (
    <>
      <div className="cardContainer row " >
        {dataMovies && dataMovies.length !== 0 ? (
          dataMovies.map((movie, key) => {
            return (
              <div
                className="drawn_card"
                onClick={(e) => {
                  setViewDetail(true);
                  setMovieSelected(movie.id);
                }}
                key={key}
              
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
