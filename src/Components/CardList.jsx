import Card from "./Card.jsx";

function CardList(props) {
  return (
    <div id="CardList">
      {props.data.map(function (element, index) {
        return (
          <Card
            key={index}
            name={element.name}
            email={element.email}
            url={`https://robohash.org/${element.id}`}
          />
        );
      })}
    </div>
  );
}

export default CardList;
