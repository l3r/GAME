import React, { Component } from 'react';
import $ from 'jquery'

class GameResults extends Component {
  constructor() {
    super();  
  }

  render() {
    var moves = this.props.history 
    var arr = $.map(moves, function(move) {
      return (<option  ></option>)    
    }); 
    return (     
      <div className="App">
      	 {arr}
      </div>
    );
  }
}

export default GameResults;
