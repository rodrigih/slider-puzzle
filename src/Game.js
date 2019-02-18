import React, { Component } from 'react';
import './Game.css';

function Square(props){
  var colour;
  if (props.value == null) {
    colour = "";
  }
  else{
    colour = ( props.value % 2 == 0 ? "red-square" : "beige-square" );
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

    /* Set initial state */
    this.state = {
      grid: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, null]
      ], 
      emptyPos: [3,3]
    }; 

    /* Define functions to move squares here so grid can be randomized on initialization */

    this.moveSquareVertical = function(direction){
      const row = this.state.emptyPos[0];
      const column = this.state.emptyPos[1]; 

      // Do nothing if move is invalid
      if ( (direction == "up" && row == 3) || (direction == "down" && row == 0) ) {
        return this.state;
      }

      var newGrid = this.state.grid.slice(); 
      var newRow = ( direction == "up" ? (row + 1) : (row - 1) ); 

      var movingSquare = newGrid[newRow][column];
      var newEmptyPos = [newRow, column]; 

      newGrid[newRow][column] = null;
      newGrid[row][column] = movingSquare; 

      return {
        grid: newGrid,
        emptyPos: newEmptyPos
      };
    }

    this.moveSquareHorizontal = function(direction){
      const row = this.state.emptyPos[0];
      const column = this.state.emptyPos[1]; 

      // Do nothing if move is invalid
      if ( (direction == "left" && column == 3) || (direction == "right" && column == 0) ) {
        return this.state;
      }

      var newGrid = this.state.grid.slice(); 
      var newColumn = ( direction == "right" ? (column - 1) : (column + 1) );

      var movingSquare = newGrid[row][newColumn];
      var newEmptyPos = [row, newColumn]; 

      newGrid[row][newColumn] = null;
      newGrid[row][column] = movingSquare; 

      return {
        grid: newGrid,
        emptyPos: newEmptyPos
      }; 
    }

    // Performs a random number of moves to randomize board
    var directions = ["up", "down", "left", "right"];

    for(var i = 0; i < 200; i++){ 
      var ind = Math.floor( Math.random() * 4);

      var direction = directions[ind];

      var newState;

      if (ind < 2) {
        newState = this.moveSquareVertical(direction);
      }
      else{
        newState = this.moveSquareHorizontal(direction);
      }

      this.state.grid = newState.grid;
      this.state.emptyPos = newState.emptyPos;
    } 

  }

  /* Life Cycle Functions */
  componentDidMount(){
    document.addEventListener("keyup", this.handleOnKeyUp.bind(this)); 
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.handleOnKeyUp.bind(this));
  } 

  handleOnKeyUp(e){
    var direction = e.key.replace("Arrow","").toLowerCase();

    var newState;

    switch(e.key){
      case "ArrowUp":
      case "ArrowDown":
        newState = this.moveSquareVertical(direction);
        break;

      case "ArrowLeft":
      case "ArrowRight":
        newState = this.moveSquareHorizontal(direction);
        break;

      default:
        newState = this.state;
    }

    this.setState(newState);
  }

  render(){
    return (
      <div className="Game">
        <Board
          grid={this.state.grid}
          onKeyPress={this.handleOnKeyPress}
        />
      </div>
    );
  }
}

export default Game;
