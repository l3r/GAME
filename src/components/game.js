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

  componentDidMount(){  
    const rootref = firebase.database().ref().child('players')
    const player1 = rootref.child('player1')
    const player2 = rootref.child('player2')
      player1.on('value', snap => {
        this.setState({
          player1: snap.val()
        })
      })
      player2.on('value', snap => {
        this.setState({
          player2: snap.val()
        })
      })
  }


  render() {
    return (
      <div className="App">
      	<GameMove moves={this.state.moves} players={this.props.players}/>
        {this.props.players.player1.name}
        {this.props.players.player2.name}
      </div>
    );
  }
}

export default Game;
