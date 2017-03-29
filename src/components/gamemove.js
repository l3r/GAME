import React, { Component } from 'react';
import $ from 'jquery'
import * as firebase from 'firebase'

import GameResults from './gameresults'

class GameMove extends Component {
  constructor() {
    super();
    this.state = {
      move1: null,
      move2: null,
      coord: 0, 
      counter: 0
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
      this.getWinner()
    }    
    event.preventDefault();
  }

  getWinner(){
    self = this
    if(this.state.move1 == this.state.move2)
      console.log("No hay ganador")
    var moves = self.props.moves
    var result = $.grep(moves, function(e){ return e.move == self.state.move1; });
    console.log(result)
    var result2 = $.grep(result, function(e){ return e.kills == self.state.move2; });
    console.log(result2)
    if(!$.isEmptyObject(result2)){
      console.log("El primer jugador gana")
    }
    var co = this.state.counter + 1;
    this.setState({counter: co});
    console.log(this.state.counter)

  }


  render() {
    var moves = this.props.moves 
    var arr = $.map(moves, function(move) {
      return (<option key={move.move} value={move.move}> {move.move} </option>)    
    });     
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
           <select name="movement" value={this.state.move} onChange={this.handleChange}>
            {arr}
           </select>
           </label>
          <input type="submit" value="Ok" />
        </form>

        <GameResults history={this.state}/> 
      </div>
    );
  }
}

export default GameMove;