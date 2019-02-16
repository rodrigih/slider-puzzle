import React, { Component } from 'react';
import './Game.css'

function Square(props){
  return (
      <div className={ ( props.value % 2 == 0 ? "red-square" : "beige-square" )}>
        {props.value}
      </div>
  );
}


class Board extends Component{ 

  renderSquare(i) {

    return (
      <Square
        key={i}
        value={i}
      />
    );
  }

  /* Creates an N x N board */
  createBoard(n){
    var board = [];

    var currNum = 1;

    for(var i = 0; i < n; i++){ 
      var row = [];
      for(var j = 0; j < n; j++){ 
        // Don't add last square
        if (i != (n-1) || j != (n-1)){
          row.push(this.renderSquare(currNum));
          currNum++;
        }
      }

      board.push(
          <div className="flex row" key={`row${i}`}> {row} </div>
      );
    }

    return (<div className="inline-flex game-board">{board}</div>);
  } 

  render(){
    return this.createBoard(4);
  }
}

class Game extends Component {
  render(){
    return (
      <div className="Game">
        <Board />
      </div>
    );
  }
}

export default Game;
