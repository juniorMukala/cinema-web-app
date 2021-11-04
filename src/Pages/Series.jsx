import React from "react";
import { useState, useEffect } from "react";
import { Dimmer,Input, Loader, Header, Icon } from "semantic-ui-react";
import themoviedb from "../services/api.themoviedb";
import DetailSeries from "../Components/DetailSerie";
import Pagination from "../Components/Pagination";
import ScrollButton from "../Components/ScrollTopButton";
import HomeImage from "../Components/HomeImage"

const Series = () => {
  const [series, setSeries] = useState([]);
  const [curentPagePagination, setCurentPagePagination] = useState(1);
  const [loading, setLoading] = useState(true);
  const [modalError, setModalError] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [movieSelected, setMovieSelected] = useState("");

  useEffect(() => {
    setLoading(true);
    themoviedb
      .get(`/tv/popular?page=${curentPagePagination}`)
      .then((response) => {
        setSeries(response.data.results);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setModalError(true);
        console.log("une erreure est survenue");
      });
  }, [curentPagePagination]);
  const closeViewDetail = () => setViewDetail(false);
  const pagination = (activePage) => {
    setCurentPagePagination(activePage);
  };
  const searchSeries = (e) => {
    const query = e.target.value.trim();
    if (query.length > 0 && query !== "") {
      themoviedb
        .get(`search/person?query=${query}&page=1`)
        .then((response) => {
          const data = response.data.results;
          data.total_pages = -1;
          setSeries(data);
        })
        .catch((e) => {
          console.log("une erreure est survenue");
          setModalError(true);
        });
    }
    if (modalError) {
      return (
        <Dimmer active={modalError}>
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
    if (loading) {
      return (
        <Dimmer active>
          <Loader size="huge">Chargement</Loader>
        </Dimmer>
      );
    }
  };
  return (
    <>

<HomeImage/>
    <div className="container">
      <>
        <div className="float-sm-right text-align-center">
          <Input
            icon="search"
            placeholder="Rechercher..."
            onChange={searchSeries}
            size="mini"
            className="w-100"
          />
        </div>
        <div className="container row">
          {series && series.length !== 0
            ? series.map((serie, key) => {
                return (
                  <div
                    key={key}
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

          <Dimmer
            active={viewDetail}
            onClickOutside={(e) => setViewDetail(false)}
            page
          >
          <DetailSeries id={movieSelected} close={closeViewDetail} />
          </Dimmer>
          <div className="text-center">
            <Pagination
              activePage={curentPagePagination}
              totalPages={series.total_pages}
              setActivePage={pagination}
            />
          </div>
        </div>
        <ScrollButton /> 
      </>
    </div>
    </>
  );
};
export default Series;
