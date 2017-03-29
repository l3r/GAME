import React, { Component } from 'react';
import $ from 'jquery'
import * as firebase from 'firebase'
import Modal from 'react-modal';
import GameResults from './gameresults'

class GameMove extends Component {
  constructor() {
    super();
    this.state = {
      move1     : null,
      move2     : null,
      turn      : true,
      coord     : 0, 
      counter   : 0,
      history     : [],
      historyTotal: [],
      isOpen    : false,
      winner    : null,      
      counterwinner: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.openModal    = this.openModal.bind(this);
    this.closeModal   = this.keepPlaying.bind(this);
    this.setActive    = this.setActive.bind(this)
  }

  openModal(){ //Open Modal
    this.setState({
      isOpen: true
    });
  }
     
  keepPlaying(){ //Hide Modal and keep playing
    this.setState({
      isOpen:false,
      counterwinner: 0, 
      counter: 0, 
      history: []
    })
  }

  handleChange(event) {
    if(this.state.coord === 0){
      this.setState({move1: event.target.value, coord: 1});
      this.setState({turn: !this.state.turn});
    }else if(this.state.coord === 1){
      this.setState({move2: event.target.value, coord: 0});
      console.log('Movement ' + this.state.move2);
      this.getWinner()         
      this.setState({turn: !this.state.turn});
    }
    event.preventDefault();
  }

  
  //Movement Winner
  getWinner(){
    var data = {}
    self = this
    if(this.state.move1 == this.state.move2){
       data.winner = "none"
    }else{
      var co = this.state.counter + 1;
      this.setState({counter: co});
      console.log(this.state.counter)
    }

    //Get move movements
    var moves = self.props.moves
    var result = $.grep(moves, function(e){ return e.move == self.state.move1; });
    console.log(result)
    //Get Killed by the move movements
    var result2 = $.grep(result, function(e){ return e.kills == self.state.move2; });
    console.log(result2)

    if(!$.isEmptyObject(result2)){
      data.winner = this.props.players.player1.name
      var cow = this.state.counterwinner + 1;
      this.setState({counterwinner: cow})
    }else{
      data.winner = this.props.players.player2.name
    }

    this.state.history.push(data)
    if(this.state.counter == 2){      
      this.closeRound()
    }
  }

  //Round Winner
  closeRound(){
    if(this.state.counterwinner > 1){
      this.setState({winner: this.props.players.player1.name, isOpen: true})
    }else{
      this.setState({winner: this.props.players.player2.name, isOpen: true})
    }
    var data = {}
    data.winner = this.state.winner
    this.state.historyTotal.push(data)
    this.setState({historyTotal: this.state.winner})
  }

  setActive(){
    this.props.setvisible()
  }  

  render() {
    const customStyles = {
        content : {
          top        : '50%',
          left       : '50%',
          right      : 'auto',
          bottom     : 'auto',
          marginRight: '-50%',
          transform  : 'translate(-50%, -70%)'
        }
    }
    var player1 =  this.props.players.player1.name
    var player2 =  this.props.players.player2.name
    var turnname = this.state.turn === true ?  player1: player2;
    var moves = this.props.moves 
    var arr = $.map(moves, function(move) {
      return (<option key={move.move} value={move.move}> {move.move} </option>)    
    });     
    return (
      <div className="center">
        <div className="callout">
          <h2>{player1} vs {player2}</h2>
          <div className="row">         
            <div className="small-6 columns">
                <label>Turn: {turnname}</label>
                <form>
                  <label>
                   <select name="movement" value={arr.value} onChange={this.handleChange}>
                    {arr}
                   </select>
                   </label>
                  <span className="label">Select your Movement</span>
                </form>
            </div>
            <div className="small-6 columns">
              <GameResults history={this.state.history}/>                
            </div>
            <div>
              <GameResults history={this.state.historyTotal}/> 
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <h1 className="header text-center"> ¡Winner!</h1>
           <h2 className="center"><span className="label">{this.state.winner}</span></h2>
           
           <button type="button" className="button expanded success" onClick={this.closeModal}>Keep playing</button>
           <button type="button" className="button expanded danger" onClick={this.setActive}>Quit game</button>
        </Modal>
      
      </div>
      
    );
  }
}

export default GameMove;