import React, { Component } from 'react';
import './RockPaperScissors.css';
import Computer from './Computer';
import Result from './Result';
import Player from './Player';
import ScoreBoard from './ScoreBoard';

class RockPaperScissors extends Component {
    constructor(state, props) {
        super(state, props);
        this.state = {
            value: "",
            computerResult: "",
            playerResult: "",
            result: '',
            computerWins: 0,
            playerWins: 0,
            drawGames: 0
        };
        this.answerMap = {
            rock: ["rock", "scissors", "lizard"],
            paper: ["paper", "rock", "spock"],
            scissors: ["scissors", "paper", "lizard"],
            lizard: ["lizard", "spock", "paper"],
            spock: ["spock", "scissors", "rock"],
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    handleClick (state) {

        this.setState({
            playerResult: state
        })
        const keys = Object.keys(this.answerMap);
        const values = Object.values(this.answerMap);
        const answer = Math.floor(Math.random() * keys.length);

        this.setState({computerResult: values[answer][0]});

        setTimeout(() => {

            if (this.state.playerResult === this.state.computerResult) {
                this.setState({
                    result: 'Draw',
                    drawGames: this.state.drawGames + 1,
                });
            } else if (this.answerMap[keys[answer]].indexOf(this.state.playerResult ) >= 0 ) {
                this.setState({
                    result: 'PC wins',
                    computerWins: this.state.computerWins + 1,
                });
            } else {
                this.setState({
                    result: 'You win',
                    playerWins: this.state.playerWins + 1,
                });
            }

            console.log(this.state)
        }, 1);
    }

    resetCounter() {
        this.setState({
            value: "",
            computerResult: "",
            playerResult: "",
            result: '',
            computerWins: 0,
            playerWins: 0,
            drawGames: 0
        });
    }

    render() {
        return (
            <div className="RockPaperScissors">
                
                <div className="flex">
                    <Computer result={this.state.computerResult}></Computer>
                    <Player
                        onHandleChange={this.handleClick}
                        playerResult={this.state.playerResult}
                    ></Player>
                </div>
                <Result result={this.state.result}></Result>
                <ScoreBoard
                    computerWins={this.state.computerWins}
                    playerWins={this.state.playerWins}
                    drawGames={this.state.drawGames}
                    onResetCounter={this.resetCounter}
                ></ScoreBoard> 
        </div>
        );
    }
}

export default RockPaperScissors;