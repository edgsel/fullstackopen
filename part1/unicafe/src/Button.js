import React from "react";

let Button = ({handleClick, text}) => (
    <button name={text} onClick={handleClick}>
        {text}
    </button>
);

export default Button;
