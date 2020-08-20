import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button";
import Header from "./Header";

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const points = new Array(anecdotes.length).fill(0);
    const [votes, setVotes] = useState(points);

    const selectRandomAnecdote = () => {
        const randomIndex = Math.floor((Math.random() * anecdotes.length));
        setSelected(randomIndex);
    };

    const handleVotes = (current) => {
        const copy = [...votes];
        copy[current] += 1;
        setVotes(copy);
    };

    const mostVotes = Math.max.apply(null, votes);
    const mostVotedAnecdoteIndex = votes.indexOf(mostVotes);

    return (
        <div>
            <Header text={"Anecdote of the day"}/>
            <p>{props.anecdotes[selected]}</p>
            <p>Has {votes[selected]} votes</p>
            <Button text={"Vote"} handleClick={() => handleVotes(selected)}/>
            <Button text={"Next anecdote"} handleClick={selectRandomAnecdote}/>
            <Header text={"Anecdote with most votes"}/>
            {mostVotes > 0 ?
                <div>
                    <p>{anecdotes[mostVotedAnecdoteIndex]}</p>
                    <p>has {mostVotes} votes</p>
                </div>
                : <p>No anecdote with most votes</p>
            }
        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
);
