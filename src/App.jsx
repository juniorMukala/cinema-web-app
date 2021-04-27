import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar.jsx";
import CardList from "./Components/CardList.jsx";
import Card from "./Components/Card.jsx";

function App() {
  const [robot, setRobot] = useState([]);
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(function (data) {
        let datamapped = data.map(function ({ id, name, email }) {
          return { id, name, email };
        });
        setRobot(datamapped);
        setRefreshRobot(datamapped);
      });
  }, []);

  const [refreshRobot, setRefreshRobot] = useState(robot)

  function handleChange (event) {
    event.preventDefault();
    const filterRobots = robot.filter(function(element){
      return element.name.toLowerCase().includes(event.target.value.toLowerCase());
    })

    setRefreshRobot(filterRobots)

  }

  return (
    <>
      <h1 id="Title">Mes amis Robots</h1>
      <SearchBar onChange={handleChange} />
      <CardList data={refreshRobot} />
    
    </>
  );
}

export default App;
