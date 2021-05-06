import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import soldat from "../Images/3626964.jpg"

;

const Card = () => {
    return(
        <>
            <div class="card">
                <img
                    src={soldat}
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Clickez pour avoir plus de details</a>
                </div>
            </div>
        </>
        )
    }

export default Card;