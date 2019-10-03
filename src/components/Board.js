import React, { Component } from 'react';
import '../styles/Board.css'; 

function Square(props){
  var colour;
  if (props.isAnswer){
    colour = ( props.value === null ? "blank-square" : "white-square");
  }
  else if (props.value === null) {
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
          isAnswer={this.props.isAnswer}
        />
      ); 
  }

  drawGrid(){
    const grid = this.props.grid; 
    var boardClass = ( this.props.isAnswer ? "Board-answer" : "Board-game");
    var rowClass = ( this.props.isAnswer ? "Board-answer-row" : "Board-game-row");

    if (this.props.isClickable){
      boardClass += " Board-clickable";
    }

    return (
      <div className={`inline-flex flex-column ${boardClass}`}
        onClick={this.props.handleBoardClick}
      >
        {grid.map(
          (curr, i) => (
            <div className={`flex Board-row ${rowClass}`} key={`row${i}`}>
              {curr.map(this.renderSquare.bind(this))}
            </div>)
         )
        }
      </div>
    ); 
  } 

  render(){
    return this.drawGrid();
  }
}

export default Board;
