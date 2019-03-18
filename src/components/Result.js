import React from 'react';
import './Result.css';


const Result = props => (
        <div className="result-holder">
            <p className={props.result.toLowerCase().split(" ").join("-")}>{props.result ? props.result : "Result" }</p>
        </div>
    )

export default Result;





