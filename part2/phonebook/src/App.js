import React, {useEffect, useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);

    const [newName, setNewName] = useState('');
    const [filter, setFilter] = useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [newPhoneNumber, setNewPhoneNumber] = useState('');

    const addNewPerson = (event) => {
        event.preventDefault();
        persons.some(person => person.name === newName)
            ? alert(`${newName} is already added to phonebook`)
            : setPersons(persons.concat({name: newName, number: newPhoneNumber}));

        setNewName('');
        setNewPhoneNumber('');
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value);
    };

    const handleNameSearch = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        const results = persons.filter(person => person.name.includes(filter));
        setSearchResults(results);
    }, [persons, filter]);

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    filter shown with <input value={filter} onChange={handleNameSearch}/>
                </div>
            </form>
            <div>
                <h2>Add a new</h2>
                <form onSubmit={addNewPerson}>
                    <div>
                        name: <input value={newName} onChange={handleNameChange}/>
                    </div>
                    <div>
                        number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange}/>
                    </div>
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
            </div>
            <h2>Numbers</h2>
            {searchResults.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
};

export default App;
