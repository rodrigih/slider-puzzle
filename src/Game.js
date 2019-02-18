import React, { Component } from 'react';
import './Game.css';

function Square(props){
  var colour;
  if (props.value == null){
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
    this.state = {
      grid: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, null]
      ], 
      emptyPos: [3,3]
    };
  }

  /* Life Cycle Functions */
  componentWillMount(){
    document.addEventListener("keyup", this.handleOnKeyUp.bind(this));
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.handleOnKeyUp.bind(this));
  } 

  moveSquareVertical(direction){
    // Coordinates of empty square
    const row = this.state.emptyPos[0];
    const column = this.state.emptyPos[1]; 

    if ( (direction == "ArrowUp" && row == 3) || (direction == "ArrowDown" && row == 0) ){
      return;
    }

    var newGrid = this.state.grid.slice(); 
    var newRow = ( direction == "ArrowUp" ? (row + 1) : (row - 1) ); 

    var movingSquare = newGrid[newRow][column];
    var newEmptyPos = [newRow, column]; 

    newGrid[newRow][column] = null;
    newGrid[row][column] = movingSquare; 

    this.setState({
      grid: newGrid,
      emptyPos: newEmptyPos
    }); 
  }

  moveSquareHorizontal(direction){
    // Coordinates of empty square
    const row = this.state.emptyPos[0];
    const column = this.state.emptyPos[1]; 

    if ( (direction == "ArrowLeft" && column == 3) || (direction == "ArrowRight" && column == 0) ){
      return;
    }

    var newGrid = this.state.grid.slice(); 
    var newColumn = ( direction == "ArrowRight" ? (column - 1) : (column + 1) );

    var movingSquare = newGrid[row][newColumn];
    var newEmptyPos = [row, newColumn]; 

    newGrid[row][newColumn] = null;
    newGrid[row][column] = movingSquare; 

    this.setState({
      grid: newGrid,
      emptyPos: newEmptyPos
    }); 
  }

  handleOnKeyUp(e){
    switch(e.key){
      case "ArrowUp":
      case "ArrowDown":
        this.moveSquareVertical(e.key);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.moveSquareHorizontal(e.key);
        break;
      default:
        return;
    }
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
