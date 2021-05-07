import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import soldat from "../Images/3626964.jpg";

const Card = (movie) => {
    console.log(movie);

 
    return(
            <div className="card text-center border border-primary shadow-0 m-3 hover-zoom" data-mdb-toggle="animation"
            data-mdb-animation-reset="true" data-mdb-animation="slide-out-right">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img
                    src={soldat}
                    class="card-img-top"
                    alt="..."
                />
                <a href="#!">
                    <div className="mask"></div>
                </a>
            </div>
                <div class="card-body">
                    <h5 class="card-title">FILMS ROMANTIQUES</h5>
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content chchcjcjvkvkkfkkkfkkfkfkff.
                    </p>
                </div>

            </div>
        )
    }

export default Card;