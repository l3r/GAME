import React, { Component } from 'react';
import $ from 'jquery'
import * as firebase from 'firebase'

class GameMove extends Component {
  constructor() {
    super();
    this.state = {
      move: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({move: event.target.value});
    console.log(this.state.move)
  }

  handleSubmit(event) {
    alert('Your favorite movement is: ' + this.state.move);
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
