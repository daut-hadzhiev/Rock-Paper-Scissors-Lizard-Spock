import React, { Component } from 'react';
import './Result.css';


class Result extends Component {
    constructor( props) {
        super(props);
        this.state = {
        };
    }
    render () {
        return (
            <div className="result-holder">
                <p className={this.props.result.toLowerCase().split(" ").join("-")}>{this.props.result ? this.props.result : "Result" }</p>
            </div>
        )
    }
}

export default Result;





