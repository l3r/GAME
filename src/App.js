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
      player2: "nothing2",
      active: true
    }
  }

  setObjectActive(){
    this.setState({
      active: !this.state.active
    })
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
        <div className="row">
          <div className="small-12 medium-6 medium-offset-3 columns">
            {this.state.active && <Registration setvisible={this.setObjectActive.bind(this)}/>}             
            {!this.state.active && <Game players={this.state} setvisible={this.setObjectActive.bind(this)} /> }              
          </div>
        </div>    
      );
   }
}

export default App;
