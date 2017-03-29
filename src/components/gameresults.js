import React, { Component } from 'react';
import $ from 'jquery'

class GameResults extends Component {
  constructor() {
    super();  
  }

  render() {
    var moves = this.props.history    
    var arr = $.map(moves, function(move) {
      return (
        <div className="callout">
          <div className="row">
            <div className="small-1 columns">
              <span className="label radius">
                roundNum
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
        {arr}
      </div>
    );
  }
}

export default GameResults;
