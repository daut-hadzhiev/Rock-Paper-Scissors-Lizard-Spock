import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import RockPaperScissors from './components/RockPaperScissors';
import { setValue, setChoice  } from './actions/actions';


const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
	Action__SetValue: (weaponType) => dispatch(setValue(weaponType)),
	Action__setChoice: (weaponType) => dispatch(setChoice(weaponType))
});

class App extends Component {

    
    setVisibilityFilter__SHOW_ALL = (event) => {
		this.props.Action__SetValue(1);
    };
    
    setVisibilityFilter__SHOW_COMPLETED = (event) => {
		this.props.Action__SetValue(2);
    };
    
    setVisibilityFilter__SHOW_ACTIVE = (event) => {
		this.props.Action__SetValue(3);
	};

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src="https://cdn.instructables.com/FIU/AIWE/I7Q0TCUT/FIUAIWEI7Q0TCUT.LARGE.jpg" className="App-logo" alt="logo" />

					<RockPaperScissors />

					<div className="pre-wrapper">
						<button onClick={this.setVisibilityFilter__SHOW_ALL}>SHOW_ALL</button>

						<button onClick={this.setVisibilityFilter__SHOW_COMPLETED}>SHOW_COMPLETED</button>

						<button onClick={this.setVisibilityFilter__SHOW_ACTIVE}>SHOW_ACTIVE</button>

						<pre>
						{
							JSON.stringify(this.props,null, "  ")
						}
						</pre>
					</div>

				</div>
			</div>
		);
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);