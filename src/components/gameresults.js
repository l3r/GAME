import React, { Component } from 'react';
import $ from 'jquery'

class GameResults extends Component {
  constructor() {
    super();  
  }

  render() {
    var moves = this.props.history 
    var i;
    var arr = $.map(moves, function(move) {
      i ++;
      return (<div>{move.winner}</div>)    
    }); 
    return (     
      <div className="App">
      	 {arr}
      </div>
    );
  }
}

export default GameResults;
