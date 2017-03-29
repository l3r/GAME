import React, { Component } from 'react';
import $ from 'jquery'
import * as firebase from 'firebase'

class GameMove extends Component {
  constructor() {
    super();
    this.state = {
      move1: null,
      move2: null,
      coord: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = this.state.coord === 0 ? true : false;
    console.log(value)
    if(value)
      this.setState({move1: event.target.value, coord: 1});
    else
      this.setState({move2: event.target.value, coord: 2});
  }

  handleSubmit(event) {
    console.log(this.state.coord)
    if(this.state.coord === 1){
      alert('Your favorite movement is: ' + this.state.move1);
    }else{
      alert('Your favorite movement is move 2: ' + this.state.move2);
      this.setState({coord: 0});
    }    
    event.preventDefault();
  }


  render() {
    var moves    = this.props.moves 
    var arr = $.map(moves, function(move) {
      return (<option key={move.move} value={move.move}> {move.move} </option>)    
    });     
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
         <select name="movement" value={this.state.move} onChange={this.handleChange}>
          {arr}
         </select>
         </label>
        <input type="submit" value="Ok" />
      </form>
    );
  }
}

export default GameMove;