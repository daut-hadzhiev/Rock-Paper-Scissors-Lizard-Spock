import React, { Component } from 'react';

class Player extends Component {
    constructor(state,  props) {
        super(state, props);
        this.state = {
            playerResult: "",
        }
        this.handleChoise = this.handleChoise.bind(this);
    }

    handleChoise(e) {
        this.setState( {playerResult: e.target.value });
        this.props.onHandleChange(e.target.value);
    }

    render () {
        return (
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
        )
    }
}

export default Player;

