import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardTest({ img, originalName, firstAirDate, Click }) {
  const urlImage = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      <div className="cardContainer m-12"onClick={Click}>
        <div className="drawn_card">
          <img src={urlImage + img} alt="" />
          <div className="drawn_content">
            <h3>{originalName}</h3>
            <p>{firstAirDate}</p>
          </div>
        </div>
      </div>
    </>
    
  );
}
