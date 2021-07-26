import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dimmer, Input, Loader, Header, Icon} from "semantic-ui-react";
import themoviedb from "../services/api.themoviedb";
import CardDetailActor from "../Components/CardDetailActor";
import ScrollButton from "../Components/ScrollTopButton";
import Pagination from "../Components/Pagination"
const Actors = () => {
  const [dataPerson, setDataPerson] = useState([]);
  const [curentPage, setCurentPage] = useState("News");
  const [curentPagePagination, setCurentPagePagination] = useState(1);
  const [loading, setLoading] = useState(true);
  const [modalError, setModalError] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [movieSelected, setMovieSelected] = useState("");

  useEffect(() => {
    setLoading(true);
    themoviedb
      .get(`/person/popular?page=${curentPagePagination}`)
      .then((response) => {
        setDataPerson(response.data.results);
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
  const searchActor = (e) => {
    const query = e.target.value.trim();
    if (query.length > 0 && query !== "") {
      setCurentPage("Recherche");
      themoviedb
        .get(`search/person?query=${query}&page=1`)
        .then((response) => {
          const data = response.data.results;
          data.total_pages = -1;
          setDataPerson(data);
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
    <div className="container">
      <>
        <div className="float-sm-right text-align-center">
          <Input
            curentPage={curentPage} 
            icon="search"
            placeholder="Rechercher..."
            onChange={searchActor}
            size="mini"
            className="w-100"
          />
        </div>
        <div className="container row">
          {dataPerson && dataPerson.length !== 0
            ? dataPerson.map((person) => {
                return (
                  <div
                    className="drawn_card"
                    onClick={(e) => {
                      setViewDetail(true);
                      setMovieSelected(person.id);
                    }}
                  >
                    <img
                      src={
                        person.profile_path
                          ? "https://image.tmdb.org/t/p/w300/" +
                            person.profile_path
                          : "https://semantic-ui.com/images/wireframe/image.png"
                      }
                      alt="..."
                    />
                    <div className="drawn_content">
                      <p>{person.name}</p>
                      <p>{person.known_for_department}</p>
                      <p>{person.popularity}</p>
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
            <CardDetailActor id={movieSelected} close={closeViewDetail} />
          </Dimmer>
          <div className="text-center">
            <Pagination
              activePage={curentPagePagination}
              totalPages={dataPerson.total_pages}
              setActivePage={pagination}
            />
          </div>
        </div>
        <ScrollButton /> 
      </>
    </div>
  );
};
export default Actors;
