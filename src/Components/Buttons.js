import './Buttons.css';
import React from 'react';

const Buttons = ({handleReset, toggleStart, doubleClick}) => {
    const ButtonGroup = (
        <div className={"buttonGroup"}>
            <label className={"button"} onClick={toggleStart}>
                Start/Stop
            </label>
            <label className={"button"} onClick={doubleClick}>
                Wait
            </label>
            <label className={"button"} onClick={handleReset}>
                Reset
            </label>
        </div>
    );


    return (
        <div className={"stopWatch__buttons"}>
            {ButtonGroup}
        </div>
    );
}

export default Buttons;