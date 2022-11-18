import React, {useEffect, useState} from 'react';

export default function AllActors() {
    const[items, setItems] = useState([]);
    const[isLoaded, setIsLoaded] = useState(false);
    const[error, setError] = useState(null);
    const[isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/allActors/')
    .then(res => res.json())
    .then((films) => {
      setItems(films);
      setIsLoaded(true);
      setError(null);
    },
  
    (error) => {
      setItems([]);
      setIsLoaded(true);
      setError(error);
    })
  }, [])
  
  function loadAllActors() {
    const pageContent = [];
    items.forEach(element => {
      pageContent.push(
        <div key={element.actorID} id="allActors">
          <h1 key={element.FirstName}><span className="ActorID">{element.actorFirstName}</span>{" "+element.actorLastName}</h1>
          <hr></hr>
        </div>
      );
    });
    return pageContent;
  }

  function AllActorsButton() {
    return (
      <div id="one">
        <h1>Show all actors</h1>
        <button onClick={() => onButtonClick()} className="allActorsButton">Show All Actors</button>
      </div>
    )
  }

  function onButtonClick() {
    setIsClicked(!isClicked);
  }

  return (
    <> 
      {AllActorsButton()}
      {isClicked ? loadAllActors() : null}
    </>
  )
}