import React, { Component } from 'react';
import * as firebase from 'firebase'

class Game extends Component {
  constructor() {
    super();
    
    self = this  
  }

  render() {
    return (
      <div className="App">
        {this.props.players.player1.name}
        {this.props.players.player2.name}
      </div>
    );
  }
}

export default Game;
