import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Game from './Game'; 
import Options from './Options'; 

class App extends Component {
  constructor(props){
    super(props);

    // Bind event handlers
    this.handleOptionsClick = this.handleOptionsClick.bind(this); 
    this.handleCloseClick = this.handleCloseClick.bind(this);

    // Set initial state
    this.state = {
      optionsClass: "display-none"
    } 
  }

  /* Functions defined here so that Game component can open the Options component */
  handleOptionsClick(){
    this.setState({optionsClass: "Options-container"});
  }

  handleCloseClick(){
    this.setState({optionsClass: "display-none"});
  }

  render() { 
    return ( 
      <div className="App">

        <header className="flex App-header">
          <h1 className="App-title">Slider Puzzle</h1>
          <span> Created using React </span>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Options
          optionsClass={this.state.optionsClass}
          handleCloseClick={this.handleCloseClick}
        />

        <Game 
          handleOptionsClick={this.handleOptionsClick}
        />

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
