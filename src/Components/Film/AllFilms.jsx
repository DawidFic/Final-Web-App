import React, {useEffect, useState} from 'react';

export default function AllFilms() {
    const[items, setItems] = useState([]);
    const[isLoaded, setIsLoaded] = useState(false);
    const[error, setError] = useState(null);
    const[isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/allFilms/')
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
  
  function loadAllFilms() {
    const pageContent = [];
    items.forEach(element => {
      pageContent.push(
        <div key={element.filmID} className="filmSection">
          <h1 key={element.filmTitle}><span className="filmID">{element.filmID}</span>{" "+element.filmTitle}</h1>
          <h3 key={element.filmDescription}>{element.filmDescription}</h3>
          <hr></hr>
        </div>
      );
    });
    return pageContent;
  }

  function AllMoviesButton() {
    return (
      <button onClick={() => onButtonClick()}>Show All Movies</button>
    )
  }

  function onButtonClick() {
    setIsClicked(!isClicked);
  }

  return (
    <> 
      {AllMoviesButton()}
      {isClicked ? loadAllFilms() : null}
    </>
  )
}
