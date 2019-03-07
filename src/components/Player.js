import React, { Component } from 'react';

class Player extends Component {
    constructor(state,  props) {
        super(state, props);
        this.handleChoise = this.handleChoise.bind(this);
    }

    handleChoise(e) {
        this.props.onHandleChange(e.target.value);
    }

    render () {
        return (
            <div className="player half-screen">
                <p>Player</p>
                <div id="player_select">
                    <button className={this.props.playerResult === "rock" ? "active" : ""} value="rock" onClick={this.handleChoise}>Rock</button>
                    <button className={this.props.playerResult === "paper" ? "active" : ""} value="paper" onClick={this.handleChoise}>Paper</button>
                    <button className={this.props.playerResult === "scissors" ? "active" : ""} value="scissors" onClick={this.handleChoise}>Scissors</button>
                    <button className={this.props.playerResult === "lizard" ? "active" : ""} value="lizard" onClick={this.handleChoise}>Lizard</button>
                    <button className={this.props.playerResult === "spock" ? "active" : ""} value="spock" onClick={this.handleChoise}>Spock</button>
                </div>
            </div>
        )
    }
}

export default Player;

