import './Timer.css';
import React from 'react';

const Timer = ({time, isActive, isPaused, setTime}) => {
    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);
    return (
        <div className={"stopWatch__numbers"}>
            <span className="digits">
        {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
        {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>
    );
}

export default Timer;