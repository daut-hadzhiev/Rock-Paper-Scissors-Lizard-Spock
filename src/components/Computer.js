import React, { Component } from 'react';

class Computer extends Component {
    constructor( props) {
        super(props);
        this.state = {
        };
    }
    render () {
        return (
            <div className="computer half-screen">
                <p>Computer</p>
                <span className="pc-answer">{this.props.result ? this.props.result : "Click to begin"}</span>
            </div>
        )
    }
}

export default Computer;