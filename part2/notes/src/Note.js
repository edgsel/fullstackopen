import React from "react";

const Note = ({id, note}) => {
    return(
        <li key={id}>{note}</li>
    )
};

export default Note;