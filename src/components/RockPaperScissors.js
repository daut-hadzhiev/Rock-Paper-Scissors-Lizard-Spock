import React, { Component } from 'react';
import './RockPaperScissors.css';
import Computer from './Computer';
import Result from './Result';
import Player from './Player';

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
                this.setState({ result: 'Draw'});
            } else if (this.answerMap[keys[answer]].indexOf(this.state.playerResult ) >= 0 ) {
                this.setState({ result: 'PC wins'});
            } else {
                this.setState({ result: 'You win'});
            }

            console.log(this.state)
        }, 1);
        

    }

    

    render() {
        return (
            <div className="RockPaperScissors">
                
                <div className="flex">
                    <Computer result={this.state.computerResult}></Computer>
                    <Player onHandleChange={this.handleClick}></Player>
                </div>
                <Result result={this.state.result}></Result>
        </div>
        );
    }
}

export default RockPaperScissors;