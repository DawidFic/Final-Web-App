import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AllFilms from './Components/Film/AllFilms' ;
import FilmByTitle from './Components/Film/FilmByTitle';

function Header() {
  return (
      <div data-testid={"HeaderTest"}>
          <h1>React Webpage</h1>
      </div>
  );
}

function App() {
  return (
    <>
      {Header()}
      {AllFilms()}
      {FilmByTitle()}
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
