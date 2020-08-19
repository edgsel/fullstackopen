import React from "react";
import Button from "./Button";

const Buttons = (props) => {
    return (
        <div>
            <Button text={"good"} handleClick={props.data.good}/>
            <Button text={"neutral"} handleClick={props.data.neutral}/>
            <Button text={"bad"} handleClick={props.data.bad}/>
        </div>
    )
};

export default Buttons;
