
import "bootstrap/dist/css/bootstrap.min.css";
import '../style.css';
import React, { useState, useEffect } from "react";
import { Rating, Dimmer, Loader, Icon, Header } from "semantic-ui-react";
import themoviedb from "../services/api.themoviedb";
import styled from "styled-components";
import "../scss/detailFilm.scss";

export default function DetailActor({ id, close }) {
  const [infoSeries, setInfoSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    themoviedb
      .get(`/person/${id}`)
      .then((response) => {
        setInfoSeries(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setErrorModal(true);
        console.log("une erreure est survenue");
      });
  }, [id]);

  const Banner = styled.div`
    background: url(${infoSeries.profile_path
      ? "https://image.tmdb.org/t/p/w500/" + infoSeries.profile_path
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
                  infoSeries.profile_path
                    ? "https://image.tmdb.org/t/p/w300/" + infoSeries.profile_path
                    : "https://semantic-ui.com/images/wireframe/image.png"
                }
                alt={infoSeries.name}
              />
              <h3>{infoSeries.name}</h3>
              <h4>
                  {infoSeries.known_for_department}
                {/* {infoSeries.known_for_department
                  ? new Date(infoSeries.first_air_date).getFullYear()
                  : "-"} */}
              </h4>
              <span className="minutes">Birthday : {infoSeries.birthday} </span>
              <p className="type">
              Place_of_birth : {infoSeries.place_of_birth}
                {/* {infoSeries.genres
                  ? infoSeries.genres.map((genre) => genre.name + "|")
                  : "-"} */}
              </p>
            </div>
            <div className="movie_desc overflow-auto">
              <p className="text ">popularity : {infoSeries.popularity}</p>
            </div>
            <div className="rating">
              <ul>
                <li>
                  {infoSeries.vote_average ? (
                    <Rating
                      icon="star"
                      defaultRating={Math.round(infoSeries.vote_average / 2)}
                      maxRating={5}
                      disabled
                    />
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
          <Banner className="blur_back bright_back"></Banner>
        </div>
      </div>
    </>
  );
}



