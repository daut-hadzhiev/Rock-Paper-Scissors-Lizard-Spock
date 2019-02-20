import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(state, props) {
    super(state, props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState((state) => {
      return { value: value};
    });
    
  }


  render() {
    return (
      <div className="Input">
        <input type="text" onChange={this.handleChange}></input>
        <p>{this.state.value} - {this.props.name}</p>
      </div>
    );
  }
}

export default Input;
