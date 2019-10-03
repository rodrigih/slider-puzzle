import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css'; 
import Game from './Game'; 
import {Answers} from '../constants/AnswerGrids';
import Options from './Options'; 

class App extends Component {
  constructor(props){
    super(props);

    // Bind event handlers
    this.handleOptionsClick = this.handleOptionsClick.bind(this); 
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleBoardClick = this.handleBoardClick.bind(this);

    // Set initial state
    this.state = {
      optionsClass: "display-none",
      answerGrid: Answers[0],
      ansInd: 0
    } 
  }

  /* Functions defined here so that Game component can open the Options component */
  handleOptionsClick(){
    this.setState({optionsClass: "Options-container"});
  }

  handleCloseClick(){
    this.setState({optionsClass: "display-none"});
  }

  handleBoardClick(ind){
    this.setState({
      answerGrid: Answers[ind],
      ansInd: ind,
      optionsClass: "display-none"
    });
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
          handleBoardClick={this.handleBoardClick}
        />

        <Game 
          handleOptionsClick={this.handleOptionsClick}
          ansInd={this.state.ansInd}
          answerGrid={this.state.answerGrid}
        />

        <p style={{color: "white"}}>
          <span id="instructions">Instructions:</span> Press the arrow keys to move the tiles.
          <br />
          Match the grid on the left to solve the puzzle.
          <br />
          You can change the answer grid under <i>Options</i>

        </p>
      </div>
    );
  }
}

export default App;
