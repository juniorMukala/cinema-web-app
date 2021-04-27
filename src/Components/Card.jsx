function Card(props) {

  return (
    <div id="Card">
      <div id="Card--Photo">
        <img src={props.url} id="Url" />
      </div>
      <div id="Card--Prenom_Nom">{props.name}</div>
      <div id="Card--Mail">{props.email}</div>
    </div>
  );
}

export default Card;
