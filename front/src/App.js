import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './quiz/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import logo from './logo.svg';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SoulMate</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>L'amour à 3 parsecs de chez toi</p>
        </header>
        <p className="App-intro">  </p>
          <Quiz />
      </div>
    );
  }
}

export default App;
