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
            phone={element.phone}
            address={element.address}
            city={element.address.city}
            company={element.company.name}
            website={element.website}
            street={element.address.street}
            url={`https://robohash.org/${element.id}`}
          />
        );
      })}
    </div>
  );
}



export default CardList;
