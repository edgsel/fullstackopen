import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header";
import Button from "./Button";
import Statistics from "./Statistics";

const App = (props) => {
    const [allValues, setAllValues] = useState({
        "good": 0,
        "neutral": 0,
        "bad": 0
    });

    const increaseValue = e => {
        setAllValues({...allValues, [e.target.name] : ++e.target.value})
    };

    return(
        <div>
          <Header text={"Give Feedback"}/>
          <Button name="good" handleClick={increaseValue} text={"good"}/>
          <Button name="neutral" handleClick={increaseValue} text={"neutral"}/>
          <Button name="bad" handleClick={increaseValue} text={"bad"}/>
          <Header text={"Statistics"}/>
          <Statistics opinions={[allValues]}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));