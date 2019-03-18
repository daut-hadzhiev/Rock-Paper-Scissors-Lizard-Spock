import React from 'react';

const Computer = props => (
        <div className="computer half-screen">
            <p>Computer</p>
            <span className="pc-answer">{props.result ? props.result : "Click to begin"}</span>
        </div>
    );

export default Computer;