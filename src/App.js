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

  setActive(){
    console.log("Here")
    this.setState({
      active: false
    })
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
    if(this.state.active){
       return (
        <div className="App">
          <Registration setactive={this.setActive.bind(this)}/>        
        </div>
      );
    }
    return (
      <div className="App">
        <Game players={this.state}/>
      </div>
    );
   
  }
}

export default App;
