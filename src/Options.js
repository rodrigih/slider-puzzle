import React, { Component } from 'react';
import './Options.css'; 
import Answers from './AnswerGrids.js';
import Board from './Board.js';

class Options extends Component{
  constructor(props){
    super(props);

    // Bind event handlers
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    // Set initial state
    this.state = {
      page: 1
    }
  } 

  handlePrevClick(){
    const page = this.state.page;
    this.setState({page: (page - 1)})
  }

  handleNextClick(){
    const page = this.state.page;
    this.setState({page: (page + 1)})
  } 

  render(){
    var lastPage = Math.ceil(Answers.length / 4);
    var prevBtnClass = ( this.state.page === 1 ? "hidden" : "btn" );
    var nextBtnClass = ( this.state.page === lastPage ? "hidden" : "btn" );

    var start = ((this.state.page - 1) * 4);

    const row1Boards = Answers.slice(start,(start + 2)); 
    const row2Boards = Answers.slice((start + 2),(start + 4)); 

    var row1 = (
      <div className="flex justify-center Options-answer-grids"> 
        {
          row1Boards.map( function(curr,ind){
            return (
              <div key={`Board ${ind}`}> 
                {curr.title}
                <Board 
                  grid={curr.grid}
                  isClickable={true}
                  isAnswer={true}
                />
              </div>
            );
          })
        }
      </div> 
    );

    var row2 = (
      <div className="flex justify-center Options-answer-grids">
        {
          row2Boards.map( function(curr,ind){
            return (
              <div key={`Board ${(ind + 2)}`}>
                {curr.title}
                <Board 
                  grid={curr.grid}
                  isClickable={true}
                  isAnswer={true}
                />
              </div>
            );
          })
        }
      </div> 
    );

    return (
      <div className={this.props.optionsClass}> 

        <div className="Options-content">
          <span className="Options-close-btn" onClick={this.props.handleCloseClick}>&times;</span>

          <h1>Options</h1> 

          {row1}

          {row2} 

          <div className="flex justify-center btn-container">
            <button className={prevBtnClass} onClick={this.handlePrevClick}> Previous</button>
            <button className={nextBtnClass} onClick={this.handleNextClick}> Next </button> 
          </div>

        </div> 
      </div>
    );
  }

}

export default Options;
