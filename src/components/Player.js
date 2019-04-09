import React, { Component } from 'react';

class Player extends Component {

    handleChoice(e) {
        this.props.onHandleChange(e.target.value);
    }

    render () {
        return (
            <div className="player half-screen">
                <p>Player</p>
                <div id="player_select">
                    <button className={this.props.playerResult === "rock" ? "active" : ""} value="rock" onClick={e => this.handleChoice(e)}>Rock</button>
                    <button className={this.props.playerResult === "paper" ? "active" : ""} value="paper" onClick={e => this.handleChoice(e)}>Paper</button>
                    <button className={this.props.playerResult === "scissors" ? "active" : ""} value="scissors" onClick={e => this.handleChoice(e)}>Scissors</button>
                    <button className={this.props.playerResult === "lizard" ? "active" : ""} value="lizard" onClick={e => this.handleChoice(e)}>Lizard</button>
                    <button className={this.props.playerResult === "spock" ? "active" : ""} value="spock" onClick={e => this.handleChoice(e)}>Spock</button>
                </div>
            </div>
        )
    }
}

export default Player;

