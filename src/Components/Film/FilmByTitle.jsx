import React, {useEffect, useState, useRef} from 'react';

export default function FilmsByActor() {

    const[isLoaded, setIsLoaded] = useState(false);
    const[inputText, setInputText] = useState("");
    const[items, setItems] = useState([]);
    const[error, setError] = useState(null);
    const [query, setQuery] = useState("")

    const inputBox = useRef();

  useEffect(() => {
    if(query !== "") {
      fetch('http://localhost:8080/api/allFilms/'+ query)
      .then(res => res.json())
      .then((films) => {
        setItems(films);
        setError(null);
      },
  
      (error) => {
        setItems([]);
        setError(error);
      })
    } else {
      setItems([]);
      setError(null);
    }
  }, [query])
  
  
  function loadFilms() {
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
    if(items.length < 0) {
      <p key="noResults">No Results..</p>
    }
    return pageContent;
  }

  return (
    <div>
      {!error ? <div>
        {query !== "" ? loadFilms() : <p key="prompt">Enter a query to start searching</p>}
        </div> : null}
    </div>
  )


  function Search() {
    const queryInput = useRef()

    function handleChange() {
      setQuery(queryInput.current.value);
    }

    return (
      <div>
        <h1>Search</h1>
        <input ref={queryInput} onChange={handleChange} type="text" placeholder="Enter the title of the movie" />
      </div>
    )
  }
    
    return (
      Search()
    )
}
