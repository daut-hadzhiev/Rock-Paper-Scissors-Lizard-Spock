import React, { Component } from 'react';
import './RockPaperScissors.css'

class RockPaperScissors extends Component {
    constructor(state, props) {
        super(state, props);
        this.state = {
            value: "",
            computerResult: "",
            playerResult: "",
            result: '',
            showbutton: false,
        };
        this.answerMap = {
            rock: ["rock", "scissors", "lizard"],
            paper: ["paper", "rock", "spock"],
            scissors: ["scissors", "paper", "lizard"],
            lizard: ["lizard", "spock", "paper"],
            spock: ["spock", "scissors", "rock"],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    

    handleClick () {

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
        }, 1);
    }

    handleChange(e) {
        if(!e.target.value) {
            this.setState( {showbutton: false });
            this.setState( {playerResult: '' });
        }
        else {
            this.setState( {showbutton: true });
            this.setState( {playerResult: e.target.value });
        }
        
    }

    render() {
        return (
            <div className="RockPaperScissors">
                
                <div className="flex">
                    <div className="player half-screen">
                        <p>Computer</p>
                        <span className="pc-answer">{this.state.computerResult}</span>
                    </div>
                    <div className="computer half-screen">
                        
                        <p>Player</p>
                        <select id="player_select" onChange={this.handleChange}>
                            <option value="">--select--</option>
                            <option value="rock">Rock</option>
                            <option value="paper">Paper</option>
                            <option value="scissors">Scissors</option>
                            <option value="lizard">Lizard</option>
                            <option value="spock">Spock</option>
                        </select>
                    </div>
                </div>

                <div className="content-holder">
                    <button className={this.state.showbutton ?  "" : "hide"}  onClick={this.handleClick}>Draw</button>
                    <p className={this.state.result.toLowerCase()}>{this.state.result}</p>
                </div>

        </div>
        );
    }
}

export default RockPaperScissors;