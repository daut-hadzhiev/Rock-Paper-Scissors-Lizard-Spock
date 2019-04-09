import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions/actions';

import './App.css';
import RockPaperScissors from './components/RockPaperScissors'

const mapDispatchToProps = dispatch => ({
	setVisibilityFilter__SHOW_ALL: () => dispatch(setVisibilityFilter("SHOW_ALL")),
	setVisibilityFilter__SHOW_COMPLETED: () => dispatch(setVisibilityFilter("SHOW_COMPLETED")),
	setVisibilityFilter__SHOW_ACTIVE: () => dispatch(setVisibilityFilter("SHOW_ACTIVE"))
});

// const setFilters = dispatch => ({
// 	setVisibilityFilter: () => dispatch(setVisibilityFilter()) 
// })

const mapStateToProps = state => ({...state});


class App extends Component {

    
    setVisibilityFilter__SHOW_ALL = (event) => {
		this.props.setVisibilityFilter__SHOW_ALL();
    };
    
    setVisibilityFilter__SHOW_COMPLETED = (event) => {
		this.props.setVisibilityFilter__SHOW_COMPLETED();
    };
    
    setVisibilityFilter__SHOW_ACTIVE = (event) => {
		this.props.setVisibilityFilter__SHOW_ACTIVE();
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