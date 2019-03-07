import React, { Component } from 'react';

class ScoreBoard extends Component {
    constructor(state, props) {
        super(state, props);
        this.resetCounter = this.resetCounter.bind(this);
    }


    resetCounter() {
        this.props.onResetCounter();
    }

    render () {
        return (
            <div className="score-board">
                <h3>Score</h3>

                <div class="you-win">
                    <span>Player wins: </span>
                    <span>{this.props.playerWins}</span>
                </div>

                <div class="pc-wins">
                    <span>Computer wins: </span>
                    <span>{this.props.computerWins}</span>
                </div>

                <div class="draw">
                    <span>Draw games: </span>
                    <span>{this.props.drawGames}</span>
                </div>

                <button onClick={this.resetCounter}>Reset</button>
                
            </div>
        )
    }
}

export default ScoreBoard;