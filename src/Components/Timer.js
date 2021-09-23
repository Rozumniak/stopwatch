import './Timer.css';
import React from 'react';


const Timer = ({timer}) => {

    return (
        <div className={"stopWatch__numbers"}>
            <span className="digits">
        {("0" + Math.floor((timer / 3600) % 60)).slice(-2)}:
            </span>
            <span className="digits">
        {("0" + Math.floor((timer / 60) % 60)).slice(-2)}:
            </span>
            <span className="digits">
        {("0" + Math.floor(timer  % 60)).slice(-2)}.
            </span>
        </div>
    );
}

export default Timer;