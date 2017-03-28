import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Registration from './components/registration'
import Game from './components/game'
import * as firebase from 'firebase'

class App extends Component {
  constructor() {
    super();
    this.state = {
      player1: "nothing",
      player2: "nothing2"
    }
  }

  componentDidMount(){
    console.log('component componentDidMounts')
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
        <Registration />
        <Game players={this.state}/>
      </div>
    );
  }
}

export default App;
