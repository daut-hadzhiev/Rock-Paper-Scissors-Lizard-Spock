import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

import './App.css';
import RockPaperScissors from './components/RockPaperScissors'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})



class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://cdn.instructables.com/FIU/AIWE/I7Q0TCUT/FIUAIWEI7Q0TCUT.LARGE.jpg" className="App-logo" alt="logo" />
          <RockPaperScissors />

          <div>
            <button onClick={this.simpleAction}>Test redux action</button>

            <pre>
            {
              JSON.stringify(this.props)
            }
            </pre>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);