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
        <div key={element.filmID} id="allFilms">
          <h1 key={element.filmTitle}><span className="filmID">{element.filmID}</span>{" "+element.filmTitle}</h1>
          <h3 key={element.filmDescription}>{element.filmDescription}</h3>
          <h3 key={element.filmReleaseYear}>Release Year: {element.filmReleaseYear}</h3>
          <h3 key={element.filmLength}>Length: {element.filmLength} minutes</h3>
          <h3 key={element.filmRating}>Rating: {element.filmRating}</h3>
          <hr></hr>
        </div>
      );
    });
    return pageContent;
  }

  function AllMoviesButton() {
    return (
      <div id="one">
        <h1>Show all movies</h1>
        <button onClick={() => onButtonClick()} className="allFilmsButton" id="two">Show All Movies</button>
      </div>
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
