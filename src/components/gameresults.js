import React, { Component } from 'react';
import $ from 'jquery'

class GameResults extends Component {
  constructor() {
    super();  
  }

  render() {
    var moves = this.props.history  
    var i = 0;  
    var arr = $.map(moves, function(move) {
      i++;
      return (
        <div className="callout">
          <div className="row">
            <div className="small-1 columns">
              <span className="label radius">
                {i}
              </span>
            </div>
            <div className="small-11 columns">
              <strong>{move.winner}</strong>                
            </div>
          </div>
        </div>
      )    
    }); 
    return (     
      <div className="App">
        <label>{this.props.title}</label>
        {arr}
      </div>
    );
  }
}

export default GameResults;
