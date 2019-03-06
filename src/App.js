import React, { Component } from 'react';
import './App.css';
import RockPaperScissors from './components/RockPaperScissors'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://cdn.instructables.com/FIU/AIWE/I7Q0TCUT/FIUAIWEI7Q0TCUT.LARGE.jpg" className="App-logo" alt="logo" />
          <RockPaperScissors />
        </header>
      </div>
    );
  }
}

export default App;
