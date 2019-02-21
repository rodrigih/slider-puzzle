import React, { Component } from 'react';
import './Game.css';

function Square(props){
  var colour;
  if (props.value === null) {
    colour = "";
  }
  else{
    colour = ( props.value % 2 === 0 ? "red-square" : "beige-square" );
  }
  return (
      <div className={colour}>
        {props.value}
      </div>
  );
}


class Board extends Component{ 
  renderSquare(val, i){ 
      return (
        <Square
          key={i}
          value={val}
        />
      ); 
  }

  drawGrid(){
    const grid = this.props.grid; 

    return (
      <div className="inline-flex game-board">
        {grid.map(
          (curr, i) => (<div className="flex row" key={`row${i}`}> {curr.map(this.renderSquare)} </div>)
         )
        }
      </div>
    ); 
  } 

  render(){
    return this.drawGrid();
  }
}

class Game extends Component {
  constructor(props){
    super(props); 

    this.answerGrid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, null]
    ];

    /* Set initial state */
    this.state = {
      grid: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, null]
      ], 
      
      emptyPos: [3,3],

      isSolved: false
    }; 

    /* Define functions to move squares here so grid can be randomized on initialization */ 
    this.moveSquareVertical = function(direction, grid, emptyPos){
      const row = emptyPos[0];
      const column = emptyPos[1]; 

      // Do nothing if move is invalid
      if ( (direction === "up" && row === 3) || (direction === "down" && row === 0) ) {
        return {grid: grid.slice(), emptyPos: emptyPos.slice()};
      }

      var newGrid = grid.slice(); 
      var newRow = ( direction === "up" ? (row + 1) : (row - 1) ); 

      var movingSquare = newGrid[newRow][column];
      var newEmptyPos = [newRow, column]; 

      newGrid[newRow][column] = null;
      newGrid[row][column] = movingSquare; 

      return {
        grid: newGrid,
        emptyPos: newEmptyPos
      };
    }

    this.moveSquareHorizontal = function(direction, grid, emptyPos){
      const row = emptyPos[0];
      const column = emptyPos[1]; 

      // Do nothing if move is invalid
      if ( (direction === "left" && column === 3) || (direction === "right" && column === 0) ) {
        return {grid: grid.slice(), emptyPos: emptyPos.slice()};
      }

      var newGrid = grid.slice(); 
      var newColumn = ( direction === "right" ? (column - 1) : (column + 1) );

      var movingSquare = newGrid[row][newColumn];
      var newEmptyPos = [row, newColumn]; 

      newGrid[row][newColumn] = null;
      newGrid[row][column] = movingSquare; 

      return {
        grid: newGrid,
        emptyPos: newEmptyPos
      }; 
    } 

    this.shuffle = function(){ 
      var grid = this.state.grid.map((c) => c.slice());
      var emptyPos = this.state.emptyPos.slice();

      var directions = ["up", "down", "left", "right"];

      for(var i = 0; i < 200; i++){ 
      //for(var i = 0; i < 5; i++){ 
        var ind = Math.floor( Math.random() * 4);

        var direction = directions[ind];

        var newState;

        if (ind < 2) {
          newState = this.moveSquareVertical(direction, grid, emptyPos);
        }
        else{
          newState = this.moveSquareHorizontal(direction, grid, emptyPos);
        }

        grid = newState.grid;
        emptyPos = newState.emptyPos;
      } 

      return {
        grid: grid,
        emptyPos: emptyPos,
        isSolved: false 
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

  checkIfSolved(){ 
    const grid = this.state.grid.slice();
    const answerGrid = this.answerGrid.slice();

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
        newState = this.moveSquareVertical(direction, this.state.grid, this.state.emptyPos);
        break;

      case "ArrowLeft":
      case "ArrowRight":
        newState = this.moveSquareHorizontal(direction, this.state.grid, this.state.emptyPos);
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
    var answerGrid = this.answerGrid.map((c) => c.slice());
    var newState = {
      grid: answerGrid,
      emptyPos: [3, 3],
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
      <div>
        <div className={statusClass} style={{marginBottom: "1em"}}>
          <p> Puzzle is solved! </p>
          <button onClick={this.handleShuffleClick}>
            Retry
          </button>
        </div>

        <div className="Game"> 
          <Board
            grid={this.state.grid}
            onKeyPress={this.handleOnKeyPress}
          /> 
        </div>

        <div style={{marginTop: "1em"}}>
          <button onClick={() => this.solvePuzzle()} > Solve puzzle </button>
        </div>
      </div>
    );
  }
}

export default Game;
