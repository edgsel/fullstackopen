import React from "react";

const Filter = ({filter, handleEvent}) => {
    return (
        <form>
            <div>
                filter shown with <input value={filter} onChange={handleEvent}/>
            </div>
        </form>
    )
};

export default Filter;
