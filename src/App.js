import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Game from './Game'; 

class App extends Component {
  render() { 
    return ( 
      <div className="App">

        <header className="flex App-header">
          <h1>Slider Puzzle</h1>
          <span> Created using React </span>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Game />
      </div>
    );
  }
}

export default App;
