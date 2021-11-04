import React, { useState, useEffect } from "react";
import themoviedb from "../services/api.themoviedb";
import { Container } from "react-bootstrap";
import { Loader, Dimmer, Icon, Header } from "semantic-ui-react";
import MenuTag from "../Components/MenuTag";
import ListesFilms from "../Components/ListeFilm";
import Pagination from "../Components/Pagination";
import "../scss/home.scss";
import '../Components/searchBar.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollButton from "../Components/ScrollTopButton";

export default function Home() {
  const [dataMovies, setDataMovies] = useState([]);
  const [routeApi, setRouteApi] = useState("upcoming");
  const [curentPage, setCurentPage] = useState("News");
  const [curentPagePagination, setCurentPagePagination] = useState(1);
  const [loading, setLoading] = useState(true);
  const [modalError, setModalError] = useState(false);

  useEffect(() => {
    setLoading(true);
    themoviedb
      .get(`/movie/${routeApi}?page=${curentPagePagination}`)
      .then((response) => {
        setDataMovies(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setModalError(true);
        console.log("une erreure est survenue");
      });
  }, [routeApi, curentPagePagination]);

  const searchMovies = (e) => {
    const query = e.target.value.trim();
    if (query.length > 0 && query !== "") {
      setCurentPage("Recherche");
      themoviedb
        .get(`/search/movie?query=${query}&page=1`)
        .then((response) => {
          const data = response.data;
          data.total_pages = -1;
          setDataMovies(data);
        })
        .catch((e) => {
          console.log(e);
          setModalError(true);
        });
    }
  };
  const pagination = (activePage) => {
    setCurentPagePagination(activePage);
  };
  const router = (title, route) => {
    setRouteApi(route);
    setCurentPage(title);
  };

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
  return (
    <>
      <main className="container text-white">
        <div className="callout callout-danger text-white">
          <h4>FIND MOVIES</h4>
          {curentPage}
        </div>
        <Container fluid="xs">
          <div className="header-fixed  shadow-lg p-3 mb-5  rounded">
            <div className=" clearfix">
              <div className="float-sm-left float-none text-center">
                <MenuTag curentPage={curentPage} switchPage={router} />
              </div>
              <div className="float-sm-right   text-align-center ">
                <div className="search">
                  <input
                    className="search__text"
                    type="text"
                    name=""
                    placeholder="Type to search for something"
                    onChange={searchMovies}
                  />
                  {/* <a href="#" class="search_button">
                    <i class="fas fa-search"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ListesFilms
              dataMovies={dataMovies.results ? dataMovies.results : []}
            />
          </div>
          <div className="text-center">
            <Pagination
              activePage={curentPagePagination}
              totalPages={dataMovies.total_pages}
              setActivePage={pagination}
            />
          </div>
        </Container>
      </main>
      <ScrollButton />
    </>
  );
}

  