import React, { useState, useEffect } from "react";
import { Rating, Dimmer, Loader, Icon, Header } from "semantic-ui-react";
import themoviedb from "../services/api.themoviedb";
import styled from "styled-components";
import "../scss/detailFilm.scss";

export default function CardDetailActor({ id, close }) {
  const [infoMovie, setInfoMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    themoviedb
      .get(`/person/${id}`)
      .then((response) => {
        setInfoMovie(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setErrorModal(true);
        console.log("une erreure est survenue");
      });
  }, [id]);

  const Banner = styled.div`
    background: url(${infoMovie.profile_path
      ? "https://image.tmdb.org/t/p/w500/" + infoMovie.profile_path
      : "https://semantic-ui.com/images/wireframe/image.png"})`;
  if (loading) {
    return (
      <Dimmer active={loading}>
        <Loader size="huge">Chargement</Loader>
      </Dimmer>
    );
  }
  if (errorModal) {
    return (
      <Dimmer active={errorModal}>
        <Header icon>
          <Icon name="warning sign" color="red" />
          <p className="text-danger">
            Une erreur est survenue, Veillez vérifier votre connexion et
            actualiser la page !
          </p>
        </Header>
      </Dimmer>
    );
  }
  return (
    <>
      <div className="text-left " >
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div
              className="close-btn"
              onClick={(e) => {
                close();
              }}
            >
              <span className="circle">X</span>
            </div>
            <div className="movie_header">
              <img
                className="locandina"
                src={
                  infoMovie.profile_path
                    ? "https://image.tmdb.org/t/p/w300/" + infoMovie.profile_path
                    : "https://semantic-ui.com/images/wireframe/image.png"
                }
                alt={infoMovie.name}
              />
              <h3>{infoMovie.name}</h3>
              <h4>
                {infoMovie.release_date
                  ? new Date(infoMovie.release_date).getFullYear()
                  : "-"}
              </h4>
              <span className="minutes">{infoMovie.runtime}min</span>
              <p className="type">
                {infoMovie.genres
                  ? infoMovie.genres.map((genre) => genre.name + "|")
                  : "-"}
              </p>
            </div>
            <div className="movie_desc overflow-auto">
              <p className="text ">{infoMovie.overview}</p>
            </div>
            <div className="rating">
              <ul>
                <li>
                  {infoMovie.vote_average ? (
                    <Rating
                      icon="star"
                      defaultRating={Math.round(infoMovie.vote_average / 2)}
                      maxRating={5}
                      disabled
                    />
                  ) : (
                    ""
                  )}
                </li>
              </ul>
              <button>voir un extrait</button>
            </div>
          </div>
          <Banner className="blur_back bright_back"></Banner>
        </div>
      </div>
    </>
  );
}
