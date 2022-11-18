import React, {useEffect, useState} from 'react';

export default function FilmsByTitle(props) {

    const[isLoaded, setIsLoaded] = useState(false);
    const[items, setItems] = useState([]);
    const[error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(false);

    if(props.query !== "") {
      fetch('http://localhost:8080/api/allFilms/' + props.query)
      .then(res => res.json())
      .then((films) => {
        setItems(films);
        setIsLoaded(true);
        setError(null);
      },
  
      (error) => {
        setItems("");
        setIsLoaded(true);
        setError(error);
      })
    } else {
      setItems([]);
      setIsLoaded(true);
      setError(null);
    }
  }, [props.query])
  
  function loadFilms() {
    const pageContent = [];
    items.forEach(element => {
      pageContent.push(
        <div key={element.filmID} className="filmSection">
          <h1 key={element.filmTitle}><span className="filmID">{element.filmID}</span>{" "+element.filmTitle}</h1>
          <h3 key={element.filmDescription}>{element.filmDescription}</h3>
          <h3 key={element.filmReleaseYear}>{element.filmReleaseYear}</h3>
          <hr></hr>
        </div>
      );
    });
    if(items.length < 1 && isLoaded) {
      <p key="noResults">No Results..</p>
    }
    return pageContent;
  }

  return (
    <>
    {props.query !== "" ? loadFilms() : <p key="prompt">Enter a query to start searching</p>}
    </>
  )
}
