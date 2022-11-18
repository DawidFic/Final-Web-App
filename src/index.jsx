import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AllFilms from './Components/Film/AllFilms' ;
import AllActors from './Components/Actors/AllActors';
import Search from './Components/Search';
import pepe from './pepe.jpg';

function Header() {
  return (
      <div data-testid={"HeaderTest"} className="header">
          <h1 id='header'>Movie DB</h1>
          <img id='image' src={pepe}></img>
      </div>
  );
}

function Navbar() {
  return(
    <div className="navbar">
        <h2>Contents</h2>
        <a href="#one">Search by Title</a>
        <a href="#two">View all Movies</a>
        <a href="#two">View all Actors</a>
    </div>
)
}

const handleClickScroll = () => {
  const element = document.getElementById('two');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <>
      <div><Header/></div>
      <div><Navbar/></div>
      <div id="one"><Search/></div>
      <div id="two"><AllFilms/></div>
      <div id="three"><AllActors/></div>
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
