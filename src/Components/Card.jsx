import { useState } from "react";

function Card(props) {
  const [details, setDetails] = useState(false);

  const handleClick = () => {
    setDetails(!details);
  };
  if (details) {
    return (
      <>
        <div id="CardOnclick" onClick={handleClick}>
          {/* <div class="Card--Photo">
         <img src={props.url} id="Url" alt="robot" /> 
      </div> */}
          <div id="#Card--Prenom_Nom-Onclick"><strong>{props.name}</strong></div>
          <br />
          <div id="Card--phone">
            <strong>Phone :</strong> {props.phone}
          </div>
          <div id="Card--City"><strong>Ville : </strong>{props.city}</div>
          <div id="Card--Rue"><strong>Rue : </strong>{props.street}</div>
          <div id="#Card--MailOnclick"><strong>E-mail : </strong>{props.email}</div>
          <div id="Card--Company"><strong>Company : </strong>{props.company}</div>
          <div id="Card--Website"><strong>Website : </strong>{props.website}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="Card" onClick={handleClick}>
          <div id="Card--Photo">
            <img src={props.url} id="Url" alt="robot" />
          </div>
          <div id="Card--Prenom_Nom">{props.name}</div>
          <div id="Card--Mail">{props.email}</div>
        </div>
      </>
    );
  }
}

export default Card;
