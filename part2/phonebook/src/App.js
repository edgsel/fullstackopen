import React, {useEffect, useState} from 'react'
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState('');
    const [filter, setFilter] = useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [newNumber, setNewPhoneNumber] = useState('');

    const addNewPerson = (event) => {
        event.preventDefault();
        persons.some(person => person.name === newName)
            ? alert(`${newName} is already added to phonebook`)
            : setPersons(persons.concat({name: newName, number: newNumber}));

        setNewName('');
        setNewPhoneNumber('');
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewPhoneNumber(event.target.value);
    };

    const handleNameSearch = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        console.log('effect');

        const promiseEventHandler = response => {
            console.log('promise resolved');
            setPersons(response.data);
        };

        const promise = axios.get('http://localhost:3001/persons');
        promise.then(promiseEventHandler);
    }, []);

    useEffect(() => {
        const results = persons.filter(person => person.name.includes(filter));
        setSearchResults(results);
    }, [persons, filter]);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleEvent={handleNameSearch}/>
            <div>
                <h2>Add a new</h2>
                <PersonForm
                    formSubmit={addNewPerson}
                    name={newName}
                    nameChange={handleNameChange}
                    number={newNumber}
                    numberChange={handleNumberChange}
                />
            </div>
            <h2>Numbers</h2>
            <Persons persons={searchResults}/>
        </div>
    )
};

export default App;
