import React, { Component } from 'react';
import './Game.css';
import Board from './Board.js'; 

class Game extends Component {
  constructor(props){
    super(props); 

    /* Set initial state */
    this.state = {
      grid: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, null]
      ], 

      emptyPos: [3,3],

      moves: 0,

      isSolved: false
    }; 

    /* Define functions to move squares here so grid can be randomized on initialization */ 
    this.moveSquareVertical = function(direction, grid, emptyPos, moves){
      const row = emptyPos[0];
      const column = emptyPos[1]; 

      // Do nothing if move is invalid
      if ( (direction === "up" && row === 3) || (direction === "down" && row === 0) ) {
        return {grid: grid.slice(), emptyPos: emptyPos.slice(), moves: moves};
      }

      var newGrid = grid.slice(); 
      var newRow = ( direction === "up" ? (row + 1) : (row - 1) ); 

      var movingSquare = newGrid[newRow][column];
      var newEmptyPos = [newRow, column]; 

      newGrid[newRow][column] = null;
      newGrid[row][column] = movingSquare; 

      return {
        grid: newGrid,
        emptyPos: newEmptyPos,
        moves: (moves + 1)
      };
    }

    this.moveSquareHorizontal = function(direction, grid, emptyPos, moves){
      const row = emptyPos[0];
      const column = emptyPos[1]; 

      // Do nothing if move is invalid
      if ( (direction === "left" && column === 3) || (direction === "right" && column === 0) ) {
        return {grid: grid.slice(), emptyPos: emptyPos.slice(), moves: moves};
      }

      var newGrid = grid.slice(); 
      var newColumn = ( direction === "right" ? (column - 1) : (column + 1) );

      var movingSquare = newGrid[row][newColumn];
      var newEmptyPos = [row, newColumn]; 

      newGrid[row][newColumn] = null;
      newGrid[row][column] = movingSquare; 

      return {
        grid: newGrid,
        emptyPos: newEmptyPos,
        moves: (moves + 1)
      }; 
    } 

    this.shuffle = function(){ 
      var grid = this.state.grid.map((c) => c.slice());
      var emptyPos = this.state.emptyPos.slice();

      var directions = ["up", "down", "left", "right"];

      for(var i = 0; i < 200; i++){ 
        var ind = Math.floor( Math.random() * 4);

        var direction = directions[ind];

        var newState;

        if (ind < 2) {
          newState = this.moveSquareVertical(direction, grid, emptyPos, 0);
        }
        else{
          newState = this.moveSquareHorizontal(direction, grid, emptyPos, 0);
        }

        grid = newState.grid;
        emptyPos = newState.emptyPos;
      } 

      return {
        grid: grid,
        emptyPos: emptyPos,
        isSolved: false,
        moves: 0 
      };
    } 

    // Bind event handlers
    this.handleShuffleClick = this.handleShuffleClick.bind(this);

    // Shuffle board when intializing
    var newState = this.shuffle();
    this.state.grid = newState.grid; 
    this.state.emptyPos = newState.emptyPos; 
  }

  /* Life Cycle Functions */
  componentDidMount(){
    document.addEventListener("keyup", this.handleOnKeyUp.bind(this)); 
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.handleOnKeyUp.bind(this));
  } 

  /* Reset the game board if the answer board was changed */
  componentDidUpdate(prevProps){
    if(prevProps.ansInd !== this.props.ansInd){
      var newState = this.shuffle();
      newState.moves = 0;
      this.setState(newState);
    }
  }

  checkIfSolved(){ 
    const grid = this.state.grid.slice();
    const answerGrid = this.props.answerGrid.grid.slice();

    var isSolved = true;

    for(var row = 0; row < grid.length; row++){ 
      for(var col = 0; col < grid.length; col++){ 
        if (grid[row][col] !== answerGrid[row][col]) {
          isSolved = false;
          break;
        }
      }
    } 

    this.setState({ isSolved: isSolved });
  }

  handleOnKeyUp(e){
    if (this.state.isSolved) {
      return;
    }

    var direction = e.key.replace("Arrow","").toLowerCase();

    var newState;

    switch(e.key){
      case "ArrowUp":
      case "ArrowDown":
        newState = this.moveSquareVertical(direction, this.state.grid, this.state.emptyPos, this.state.moves);
        break;

      case "ArrowLeft":
      case "ArrowRight":
        newState = this.moveSquareHorizontal(direction, this.state.grid, this.state.emptyPos, this.state.moves);
        break;

      default:
        newState = this.state;
    }

    this.setState(newState);

    this.checkIfSolved();
  } 

  handleShuffleClick(){
    var newState = this.shuffle();
    this.setState(newState);
  }

  solvePuzzle(){ 
    var answerGrid = this.props.answerGrid.grid.map((c) => c.slice());
    var emptyPos = this.props.answerGrid.emptyPos.slice();
    var newState = {
      grid: answerGrid,
      emptyPos: emptyPos,
      isSolved: true
    };

    this.setState(newState);
  }

  render(){
    var statusClass = "game-state"; 

    if (! this.state.isSolved) {
      statusClass += " hidden";
    } 

    return (
      <div className="Game">
        <div className={statusClass} style={{padding: "1em 0"}}>
          <p> Puzzle is solved! </p>
          <button className="btn" onClick={this.handleShuffleClick}>
            Retry
          </button>
        </div>

        <div className="Game flex justify-center">
          <div style={{marginRight: "2em"}}>
            {this.props.answerGrid.title}
            <Board
              grid={this.props.answerGrid.grid}
              isAnswer={true}
            />
          </div>

          <div style={{marginTop: "auto"}}>
            <Board
              grid={this.state.grid}
              onKeyPress={this.handleOnKeyPress}
              isAnswer={false}
            /> 
          </div>
        </div>

        <div className="move-counter">
          Moves: {this.state.moves}
        </div>

        <div className="divider"> </div> 

        <div className="flex justify-center btn-container">
          <button className="btn" onClick={this.props.handleOptionsClick}> Options </button>

          <button className="btn" onClick={() => this.solvePuzzle()} > Solve </button>
        </div>

      </div>
    );
  }
}

export default Game;
