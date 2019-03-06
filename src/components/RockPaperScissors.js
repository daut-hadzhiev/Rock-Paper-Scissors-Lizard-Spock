import React, { Component } from 'react';
import './RockPaperScissors.css';
import Computer from './Computer';
import Result from './Result';

class RockPaperScissors extends Component {
    constructor(state, props) {
        super(state, props);
        this.state = {
            value: "",
            computerResult: "",
            playerResult: "",
            result: '',
        };
        this.answerMap = {
            rock: ["rock", "scissors", "lizard"],
            paper: ["paper", "rock", "spock"],
            scissors: ["scissors", "paper", "lizard"],
            lizard: ["lizard", "spock", "paper"],
            spock: ["spock", "scissors", "rock"],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChoise = this.handleChoise.bind(this);
    }

    

    handleClick () {

        const keys = Object.keys(this.answerMap);
        const values = Object.values(this.answerMap);
        const answer = Math.floor(Math.random() * keys.length);

        this.setState({computerResult: values[answer][0]});

        if (this.state.playerResult === this.state.computerResult) {
            this.setState({ result: 'Draw'});
        } else if (this.answerMap[keys[answer]].indexOf(this.state.playerResult ) >= 0 ) {
            this.setState({ result: 'PC wins'});
        } else {
            this.setState({ result: 'You win'});
        }
    }

    handleChoise(e) {
        this.setState( {playerResult: e.target.value });
        this.handleClick();
    }

    render() {
        return (
            <div className="RockPaperScissors">
                
                <div className="flex">
                    <Computer result={this.state.computerResult}></Computer>
                    <div className="player half-screen">
                        <p>Player</p>
                        <div id="player_select">
                            <button value="rock" onClick={this.handleChoise}>Rock</button>
                            <button value="paper" onClick={this.handleChoise}>Paper</button>
                            <button value="scissors" onClick={this.handleChoise}>Scissors</button>
                            <button value="lizard" onClick={this.handleChoise}>Lizard</button>
                            <button value="spock" onClick={this.handleChoise}>Spock</button>
                        </div>
                    </div>
                </div>
                <Result result={this.state.result}></Result>
        </div>
        );
    }
}

export default RockPaperScissors;