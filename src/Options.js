import React, { Component } from 'react';
import './Options.css'; 
import Answers from './AnswerGrids.js';

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

    return (
      <div className={this.props.optionsClass}> 

        <div className="Options-content">
          <span className="Options-close-btn" onClick={this.props.handleCloseClick}>&times;</span>

          <h1>Options</h1>

          <div className="flex justify-center Options-answer-grids">
            <div>Option 1</div>
            <div>Option 2</div>
          </div>

          <div className="flex justify-center Options-answer-grids">
            <div>Option 3</div>
            <div>Option 4</div>
          </div> 

          <div className="flex justify-center btn-container">
            <button className={prevBtnClass}> Previous</button>
            <button className={nextBtnClass}> Next </button> 
          </div>

        </div> 
      </div>
    );
  }

}

export default Options;
