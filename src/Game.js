import React, { Component } from 'react';
import './Game.css';
import Debug from './Debug';

function Square(props){
  return (
      <div className={ ( props.value % 2 == 0 ? "red-square" : "beige-square" )}>
        {props.value}
      </div>
  );
} 

class Board extends Component{ 

  renderSquare(val){
     if (val === null){
        return val;
      }

      return (
        <Square
          key={val}
          value={val}
        />
      ); 
  }

  drawBoard(){
    const board = this.props.board; 

    return (
      <div className="inline-flex game-board">
        {board.map(
          (curr, i) => (<div className="flex row" key={`row${i}`}> {curr.map(this.renderSquare)} </div>)
         )
        }
      </div>
    ); 
  } 

  render(){
    return this.drawBoard();
  }
}

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      board: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, null]
      ]
    };
  }

  render(){
    return (
      <div className="Game">
        <Board
          board={this.state.board}
        />
      </div>
    );
  }
}

export default Game;
