import { useState } from 'react'

const PersonForm = (props) => {
    const { persons, setPersons } = props

    // new person useState
    const [newPerson, setNewPerson] = useState({ name: '', number: '', id: persons.length + 1 })

    // Separate functions to update the new person object according to the input
    const handleNameChange = (event) => {
        setNewPerson({ ...newPerson, name: event.target.value })
    }

    const handleNumberChange = (event) => {
        setNewPerson({ ...newPerson, number: event.target.value })
    }

    // submit function
    const addPerson = (event) => {
        // Stop page from reloading
        event.preventDefault()
        // Find if the name of the person is already on the persons array
        const foundPerson = persons.filter(person => person.name === newPerson.name)
        // If the name is in the persons array (found person will not return an empty array)
        if (foundPerson.length !== 0) {
            alert(`${foundPerson[0].name} is already added to phonebook`) // show an alert
        } else {
            // create a new array called newPersons and add previous array and the new person object
            const newPersons = [...persons, newPerson]
            setPersons(newPersons)
            setNewPerson({ name: '', number: '', id: newPersons.length + 1 }) // clear newPerson object and update the id
        }
    }

    return (
        <>
            <form onSubmit={addPerson}>
                <div>Name: <input value={newPerson.name} onChange={handleNameChange} /></div>
                <div>Number: <input value={newPerson.number} onChange={handleNumberChange} /></div>
                <div><button type="submit">add</button></div>
            </form>
        </>
    )
}

export default PersonForm