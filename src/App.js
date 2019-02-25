import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Game from './Game'; 

class App extends Component {
  render() { 
    return ( 
      <div className="App">

        <header className="flex App-header">
          <h1 className="App-title">Slider Puzzle</h1>
          <span> Created using React </span>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Game />

        <p style={{color: "white"}}>
          <span id="instructions">Instructions:</span> Press the arrow keys to move the tiles.
          <br />
          Make the numbers go from 1 to 15 like the grid on the left.
        </p>
      </div>
    );
  }
}

export default App;
