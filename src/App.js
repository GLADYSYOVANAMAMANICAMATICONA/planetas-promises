import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({ items }) => {
  const Planets = items.map((planet, index) => {
    return (
      <div>
        <li key={index}>
          <Planet name={planet.name}  img={planet.img} />
        </li>
        <Button
          onClick={() => getPlanets()}
          className="planets__button">
          SEARCH
              </Button>
      </div>
    );
  })
}

  export default App;
