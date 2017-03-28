import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyB9dxIbwy-q4qS8h9uvyQwOI3AU7hhTazI",
    authDomain: "game-121ba.firebaseapp.com",
    databaseURL: "https://game-121ba.firebaseio.com",
    storageBucket: "game-121ba.appspot.com",
    messagingSenderId: "813603901337"
  };

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
