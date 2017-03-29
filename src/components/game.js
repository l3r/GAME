import React, { Component } from 'react';
import * as firebase from 'firebase'

import GameMove from './gamemove'

class Game extends Component {
  constructor() {
    super();
    this.state = {
    	round: 0,
    	turn: true,
    	moves: [
			 {move: "paper", kills: "rock"},
			 {move: "rock", kills: "scissors"},
			 {move: "scissors", kills: "paper"}
		]    	
    }    
    self = this  
  }

  setActive(){
    this.props.setvisible()
  }

  render() {
    return (
      <div className="App">
      	<GameMove moves={this.state.moves} players={this.props.players} setvisible={this.setActive.bind(this)}/>
      </div>
    );
  }
}

export default Game;
