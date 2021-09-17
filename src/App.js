import './App.css';
import React, {useState} from 'react';
import Timer from "./Components/Timer";
import Buttons from "./Components/Buttons";

const StopWatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);



    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
    const handleStop = () =>{
        setIsActive(false);
        setIsPaused(true)
        setTime(0);
    }
    const handlePauseResume = () => {
        setIsPaused(true);
    };

    const handleReset = () => {
        setTime(0);
    };
    const toggleStart = () =>{
        if (isActive === true && isPaused === false){
            handleStop()
        }
        else {
            handleStart()
        }
    }

    const [isPauseClicked, setPauseClicked] = useState(false);
    const [clickTime, setClickTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isPauseClicked === true) {
            interval = setInterval(() => {
                setClickTime((clickTime) => clickTime + 10);
            }, 10);
            } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isPauseClicked]);
    const doubleClick = () =>{
         setPauseClicked(true)
        if (clickTime > 300){
            setClickTime(0)
            setPauseClicked(false)
        }else if(clickTime<=300 && isPauseClicked){
            handlePauseResume()
            setPauseClicked(false)
            setClickTime(0)
        }

    }


    return (
        <div className={"wrapper"}>
            <div className={"content"}>
                <div className={"stopWatch"}>
                    <Timer time={time} isActive={isActive} isPaused={isPaused} setTime={setTime}/>

                    <Buttons
                        active={isActive}
                        isPaused={isPaused}
                        handleReset={handleReset}
                        toggleStart={toggleStart}
                        doubleClick={doubleClick}
                    />
                </div>
            </div>

        </div>);
}

export default StopWatch;