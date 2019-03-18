import React from 'react';

const ScoreBoard = props => (
        <div className="score-board">
            <h3>Score</h3>

            <div className="you-win">
                <span>Player wins: </span>
                <span>{props.playerWins}</span>
            </div>

            <div className="pc-wins">
                <span>Computer wins: </span>
                <span>{props.computerWins}</span>
            </div>

            <div className="draw">
                <span>Draw games: </span>
                <span>{props.drawGames}</span>
            </div>

            <button onClick={() => props.onResetCounter()}>Reset</button>
            
        </div>
    );

export default ScoreBoard;